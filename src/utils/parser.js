/**
 * character.md 解析器
 * 负责从原始文档中提取角色数据并进行人格建模
 */

export const parseCharacters = (mdContent) => {
  const characters = [];
  const lines = mdContent.split('\n');
  
  let currentFaction = '';
  let currentCharacter = null;
  let currentContent = [];

  const finalizeCharacter = () => {
    if (currentCharacter) {
      const contentStr = currentContent.join('\n');
      
      // 提取基本信息
      const introMatch = contentStr.match(/简介\s+(.*)/);
      const intro = introMatch ? introMatch[1] : '';

      const quotes = [];
      const quoteMatches = contentStr.matchAll(/个性语录\s+(.*)/g);
      for (const match of quoteMatches) {
        quotes.push(match[1]);
      }

      // 处理头像映射
      let avatarName = currentCharacter;
      if (currentCharacter === '米雪儿·李') avatarName = '米雪儿';
      
      const traits = extractTraits(currentCharacter, contentStr);

      characters.push({
        id: currentCharacter,
        name: currentCharacter,
        avatar: `/${avatarName}.png`,
        intro,
        quotes,
        traits,
        faction: currentFaction // 使用当前追踪到的派系
      });
    }
  };

  lines.forEach(line => {
    const factionMatch = line.match(/^#\s+(.*)/);
    const charMatch = line.match(/^##\s+(.*)/);

    if (factionMatch) {
      finalizeCharacter();
      currentCharacter = null;
      currentContent = [];
      const factionRaw = factionMatch[1].trim();
      // 映射到标准派系名称
      if (factionRaw.includes('欧泊')) currentFaction = 'Opal';
      else if (factionRaw.includes('剪刀手')) currentFaction = 'Scissors';
      else if (factionRaw.includes('乌尔比诺')) currentFaction = 'Urbino';
      else currentFaction = factionRaw;
    } else if (charMatch) {
      finalizeCharacter();
      currentCharacter = charMatch[1].trim();
      currentContent = [];
    } else if (currentCharacter) {
      currentContent.push(line);
    }
  });

  // 最后一个角色
  finalizeCharacter();

  return characters;
};

// 内部函数：基于角色背景提取 3-6 个核心人格特征
function extractTraits(name, content) {
  const traitMap = {
    // 欧泊 (Opal)
    '米雪儿·李': ['跳脱思维', '元气活力', '打破常规', '英雄情节', '游戏化人生'],
    '信': ['极致冷静', '正义使命', '严谨自律', '情感迟钝', '坚定意志'],
    '心夏': ['乐天随性', '细腻周到', '专业干练', '好奇心强', '温和治愈'],
    '伊薇特': ['天才孤独', '极度内向', '依赖安全感', '内心炽热', '纯真专注'],
    '千代': ['谦和循礼', '反差果决', '自控力强', '渴望突破', '守护者'],
    '蕾欧娜': ['直爽实干', '严谨极致', '团队关怀', '高压稳定', '实证主义'],
    '忧雾': ['强势伪装', '敏感脆弱', '渴望自由', '命运抗争', '外冷内热'],
    '芙拉薇娅': ['优雅深邃', '战略思维', '神秘莫测', '掌控局势', '缜密观察'],

    // 剪刀手 (Scissors)
    '明': ['豪爽大义', '直觉行动', '情感深厚', '不屈叛逆', '街头智慧'],
    '拉薇': ['极简内敛', '武道忠诚', '自我牺牲', '追求真实', '冷峻孤独'],
    '梅瑞狄斯': ['超越理性', '领袖气质', '学术孤高', '洞察本质', '隐忍博大'],
    '香奈美': ['舞台渴望', '多重面具', '矛盾纠结', '敏锐观察', '寻找自我'],
    '令': ['隐忍负重', '面冷心热', '独特品味', '行动派', '守护之影'],
    '艾卡': ['热血正义', '自我牺牲', '不信任权威', '纯真勇气', '守护家乡'],
    '珐格兰丝': ['细腻温柔', '害羞内敛', '天生研究者', '通往明天', '感性观察'],
    '玛拉': ['无畏决斗', '精神崩塌', '阴晴不定', '战斗兴奋', '心理创伤'],

    // 乌尔比诺 (Urbino)
    '星绘': ['星辰治愈', '理想主义', '温柔文静', '声望极高', '寻找闪耀'],
    '奥黛丽': ['高傲坚韧', '贵族气质', '商业头脑', '家族责任', '戒备心理'],
    '白墨': ['纨绔不羁', '崇尚自由', '不按常理', '整合力量', '派对思维'],
    '玛德蕾娜': ['艺术天真', '迷糊热心', '灵感即兴', '渴望认可', '彩色梦想'],
    '绯莎': ['少言寡语', '战斗美学', '鲨鱼本性', '来去自由', '寻找平静'],
    '加拉蒂亚': ['华丽优雅', '神秘莫测', '危险诱惑', '重新定义美', '微醺思考'],
    '汐': ['优秀代行者', '金钱至上', '渴望躺平', '畏惧未知', '归属迷茫'],
  };

  return traitMap[name] || ['神秘', '未知', '待探索'];
}

// 导出 trait 维度，用于评分系统
export const TRAIT_DIMENSIONS = [
  'Rationality', // 理性 vs 感性
  'Boldness',    // 稳重 vs 跳脱
  'Social',      // 孤僻 vs 社交
  'Idealism',    // 现实 vs 理想
  'Discipline',  // 随性 vs 纪律
  'Empathy'      // 冷酷 vs 同理
];

// 将角色映射到数值化的 trait 向量 (-1 到 1)
export const getCharacterVectors = (characters) => {
  const vectors = {};
  
  characters.forEach(char => {
    // 默认向量
    const vec = {
      Rationality: 0,
      Boldness: 0,
      Social: 0,
      Idealism: 0,
      Discipline: 0,
      Empathy: 0
    };

    // 根据角色特性调整向量
    switch(char.name) {
    // 欧泊 (Opal)
    case '米雪儿·李':
      vec.Rationality = -0.5; vec.Boldness = 1.0; vec.Social = 0.4; vec.Idealism = 0.9; vec.Discipline = -0.9; vec.Empathy = 0.3;
      break;
    case '信':
      vec.Rationality = 0.9; vec.Boldness = 0.2; vec.Social = -0.6; vec.Idealism = 0.7; vec.Discipline = 0.9; vec.Empathy = -0.3;
      break;
    case '心夏':
      vec.Rationality = 0.3; vec.Boldness = 0.4; vec.Social = 0.9; vec.Idealism = 0.2; vec.Discipline = -0.4; vec.Empathy = 0.8;
      break;
    case '伊薇特':
      vec.Rationality = 0.7; vec.Boldness = -0.9; vec.Social = -1.0; vec.Idealism = 0.1; vec.Discipline = 0.5; vec.Empathy = 0.5;
      break;
    case '千代':
      vec.Rationality = 0.4; vec.Boldness = -0.2; vec.Social = 0.5; vec.Idealism = 0.3; vec.Discipline = 0.8; vec.Empathy = 0.4;
      break;
    case '蕾欧娜':
      vec.Rationality = 0.8; vec.Boldness = 0.3; vec.Social = 0.4; vec.Idealism = 0.2; vec.Discipline = 1.0; vec.Empathy = 0.3;
      break;
    case '忧雾':
      vec.Rationality = 0.1; vec.Boldness = 0.7; vec.Social = -0.9; vec.Idealism = 0.5; vec.Discipline = -0.6; vec.Empathy = -0.5;
      break;
    case '芙拉薇娅':
      vec.Rationality = 0.9; vec.Boldness = -0.2; vec.Social = -0.5; vec.Idealism = 0.2; vec.Discipline = 0.8; vec.Empathy = -0.4;
      break;

    // 剪刀手 (Scissors)
    case '明':
      vec.Rationality = -0.7; vec.Boldness = 1.0; vec.Social = 0.9; vec.Idealism = 0.9; vec.Discipline = -0.9; vec.Empathy = 0.7;
      break;
    case '拉薇':
      vec.Rationality = 0.6; vec.Boldness = 0.2; vec.Social = -0.9; vec.Idealism = 0.9; vec.Discipline = 0.9; vec.Empathy = 0.2;
      break;
    case '梅瑞狄斯':
      vec.Rationality = 1.0; vec.Boldness = -0.3; vec.Social = -0.7; vec.Idealism = 1.0; vec.Discipline = 0.5; vec.Empathy = 0.0;
      break;
    case '香奈美':
      vec.Rationality = 0.1; vec.Boldness = 0.2; vec.Social = 0.8; vec.Idealism = 0.4; vec.Discipline = -0.3; vec.Empathy = 0.5;
      break;
    case '令':
      vec.Rationality = 0.6; vec.Boldness = 0.4; vec.Social = -0.5; vec.Idealism = 0.5; vec.Discipline = 0.7; vec.Empathy = 0.3;
      break;
    case '艾卡':
      vec.Rationality = -0.4; vec.Boldness = 0.9; vec.Social = 0.5; vec.Idealism = 0.9; vec.Discipline = -0.7; vec.Empathy = 0.5;
      break;
    case '珐格兰丝':
      vec.Rationality = 0.3; vec.Boldness = -0.5; vec.Social = -0.4; vec.Idealism = 0.6; vec.Discipline = 0.3; vec.Empathy = 0.9;
      break;
    case '玛拉':
      vec.Rationality = -0.6; vec.Boldness = 1.0; vec.Social = -0.6; vec.Idealism = 0.1; vec.Discipline = -0.8; vec.Empathy = -0.7;
      break;

    // 乌尔比诺 (Urbino)
    case '星绘':
      vec.Rationality = 0.4; vec.Boldness = -0.3; vec.Social = 0.3; vec.Idealism = 1.0; vec.Discipline = 0.5; vec.Empathy = 1.0;
      break;
    case '奥黛丽':
      vec.Rationality = 0.8; vec.Boldness = 0.5; vec.Social = -0.4; vec.Idealism = 0.4; vec.Discipline = 1.0; vec.Empathy = -0.3;
      break;
    case '白墨':
      vec.Rationality = -0.3; vec.Boldness = 1.0; vec.Social = 1.0; vec.Idealism = 0.5; vec.Discipline = -1.0; vec.Empathy = 0.3;
      break;
    case '玛德蕾娜':
      vec.Rationality = -0.4; vec.Boldness = 0.5; vec.Social = 0.8; vec.Idealism = 1.0; vec.Discipline = -0.7; vec.Empathy = 0.8;
      break;
    case '绯莎':
      vec.Rationality = 0.5; vec.Boldness = 0.6; vec.Social = -0.8; vec.Idealism = 0.0; vec.Discipline = 0.2; vec.Empathy = -0.5;
      break;
    case '加拉蒂亚':
      vec.Rationality = 0.7; vec.Boldness = 0.6; vec.Social = 0.1; vec.Idealism = 0.7; vec.Discipline = 0.1; vec.Empathy = -0.2;
      break;
    case '汐':
      vec.Rationality = 0.5; vec.Boldness = 0.3; vec.Social = -0.4; vec.Idealism = -0.6; vec.Discipline = 0.3; vec.Empathy = -0.1;
      break;
  }

    vectors[char.name] = vec;
  });

  return vectors;
};
