/**
 * 80 道高区分度人格测试题
 * 每个选项映射多个 trait 维度 (-0.5 到 0.5)
 */

export const QUESTIONS = [
  // --- 生活场景 (1-20) ---
  {
    id: 1,
    text: "在一个难得的休息日，你发现最喜欢的猫咖今天没有开张，你会？",
    options: [
      { text: "在门口徘徊一会儿，试图找找是否有其他入口或联系方式", effects: { Social: -0.2, Boldness: 0.1, Discipline: -0.1 } },
      { text: "立刻打开手机搜索附近评价最高的新店，开启一场未知的探店之旅", effects: { Boldness: 0.4, Social: 0.3, Rationality: -0.1 } },
      { text: "感到一丝失落，但很快决定回家自己煮杯咖啡，享受安静的阅读时光", effects: { Social: -0.4, Rationality: 0.2, Discipline: 0.3 } },
      { text: "给同样喜欢猫的朋友发消息，询问他们是否有其他推荐，顺便约个聚会", effects: { Social: 0.5, Empathy: 0.3, Boldness: 0.1 } }
    ]
  },
  {
    id: 2,
    text: "你在超市排队时，发现前面的人因为忘带钱包而陷入尴尬，你会？",
    options: [
      { text: "礼貌地观察情况，如果金额不大，直接帮对方支付了", effects: { Empathy: 0.5, Boldness: 0.2, Idealism: 0.3 } },
      { text: "保持沉默，等待收银员处理，认为这是对方应负的责任", effects: { Rationality: 0.4, Empathy: -0.4, Social: -0.2 } },
      { text: "向收银员建议先把东西移开，让后面的人先结账以提高效率", effects: { Rationality: 0.5, Discipline: 0.3, Empathy: -0.1 } },
      { text: "主动和对方搭话，缓解尴尬气氛，并询问是否需要手机转账协助", effects: { Social: 0.4, Empathy: 0.4, Boldness: 0.1 } }
    ]
  },
  {
    id: 3,
    text: "如果你能拥有一只战术机器猫，你最希望它具备的功能是？",
    options: [
      { text: "极致的火力支援，能在关键时刻打破任何僵局", effects: { Boldness: 0.5, Rationality: -0.2, Idealism: 0.2 } },
      { text: "全方位的雷达侦测，能预判所有潜在的危险", effects: { Rationality: 0.4, Discipline: 0.3, Boldness: -0.2 } },
      { text: "温柔的医疗护理与心理安抚，是心灵的港湾", effects: { Empathy: 0.5, Social: 0.2, Boldness: -0.1 } },
      { text: "隐匿的侦察功能，能悄无声息地收集情报", effects: { Rationality: 0.3, Boldness: -0.3, Discipline: 0.2 } }
    ]
  },
  {
    id: 4,
    text: "参加一个陌生人的聚会，你通常会选择坐在哪里？",
    options: [
      { text: "角落的阴影处，默默观察每个人的言行举止", effects: { Social: -0.5, Rationality: 0.3, Boldness: -0.2 } },
      { text: "食物区附近，一边品尝美食一边等待自然发生的对话", effects: { Social: 0.1, Rationality: -0.1, Boldness: -0.1 } },
      { text: "人群中心，主动发起有趣的话题并带动气氛", effects: { Social: 0.5, Boldness: 0.3, Empathy: 0.2 } },
      { text: "靠近出口的位置，确保在感到不适时能随时离开", effects: { Social: -0.3, Rationality: 0.2, Boldness: -0.3 } }
    ]
  },
  {
    id: 5,
    text: "你最喜欢的解压方式是？",
    options: [
      { text: "在虚拟的游戏世界里疯狂刷本，发泄情绪", effects: { Boldness: 0.3, Social: -0.2, Rationality: -0.2 } },
      { text: "进行一场挥汗如雨的体能训练或拳击练习", effects: { Boldness: 0.4, Discipline: 0.4, Rationality: -0.1 } },
      { text: "独自整理房间或工作台，直到一切都严丝合缝", effects: { Discipline: 0.5, Rationality: 0.3, Social: -0.3 } },
      { text: "看一部深奥的哲学电影或阅读晦涩的专业书籍", effects: { Rationality: 0.5, Idealism: 0.3, Social: -0.4 } }
    ]
  },
  {
    id: 6,
    text: "当你发现手机里有一张很久以前的合影，但照片里的人已经断了联系，你会？",
    options: [
      { text: "感慨万千，决定立刻给对方发个消息问候一下", effects: { Empathy: 0.4, Social: 0.4, Boldness: 0.2 } },
      { text: "平静地删除照片，认为过去的就是过去了，没必要留恋", effects: { Rationality: 0.5, Empathy: -0.3, Social: -0.3 } },
      { text: "将照片存档，并开始反思导致关系断裂的原因", effects: { Rationality: 0.3, Empathy: 0.2, Social: -0.2 } },
      { text: "发个朋友圈（仅自己可见），写下当时的心情作为纪念", effects: { Idealism: 0.3, Empathy: 0.3, Social: -0.1 } }
    ]
  },
  {
    id: 7,
    text: "如果你的邻居总是深夜大声排练乐队，你会？",
    options: [
      { text: "直接上门投诉，甚至不惜发生激烈的言语冲突", effects: { Boldness: 0.5, Social: 0.2, Discipline: -0.2 } },
      { text: "写一张礼貌的便条贴在对方门口，希望能互相体谅", effects: { Social: 0.3, Discipline: 0.3, Empathy: 0.2 } },
      { text: "默默戴上降噪耳机，通过改变自己来适应环境", effects: { Social: -0.4, Discipline: 0.2, Boldness: -0.3 } },
      { text: "调查对方的排练规律，选择在对方休息时进行反击", effects: { Rationality: 0.4, Boldness: 0.2, Discipline: -0.3 } }
    ]
  },
  {
    id: 8,
    text: "你对‘规则’的态度是？",
    options: [
      { text: "必须严格遵守，规则是社会运行的基石", effects: { Discipline: 0.5, Rationality: 0.3, Boldness: -0.3 } },
      { text: "规则是用来打破的，只有打破常规才能进步", effects: { Boldness: 0.5, Discipline: -0.5, Idealism: 0.2 } },
      { text: "灵活运用，在不触碰底线的前提下寻找最优解", effects: { Rationality: 0.4, Boldness: 0.2, Discipline: 0.1 } },
      { text: "规则应该是温柔的，应根据具体情况展现人文关怀", effects: { Empathy: 0.4, Idealism: 0.3, Discipline: -0.2 } }
    ]
  },
  {
    id: 9,
    text: "如果你在路上捡到一个装满秘密的笔记本，你会？",
    options: [
      { text: "毫不犹豫地交给警察或失物招领处，绝不偷看", effects: { Discipline: 0.5, Rationality: 0.2, Idealism: 0.3 } },
      { text: "因为强烈的好奇心翻看几页，试图了解失主的身份", effects: { Boldness: 0.3, Rationality: -0.1, Discipline: -0.3 } },
      { text: "分析其中的内容，看看是否能从中提取有价值的信息", effects: { Rationality: 0.5, Boldness: 0.1, Empathy: -0.2 } },
      { text: "通过笔记中的线索，自己悄悄寻找失主并归还", effects: { Idealism: 0.4, Boldness: 0.2, Social: 0.1 } }
    ]
  },
  {
    id: 10,
    text: "对于‘奶茶’这种饮品，你的看法是？",
    options: [
      { text: "周五犒劳自己的必备良药，是生活的调味剂", effects: { Empathy: 0.3, Social: 0.2, Discipline: -0.2 } },
      { text: "极度不健康，会严格计算卡路里并尽量克制", effects: { Discipline: 0.5, Rationality: 0.4, Boldness: -0.1 } },
      { text: "只喝冰的，温度能让我保持清醒和冷静", effects: { Rationality: 0.2, Social: -0.2, Boldness: 0.1 } },
      { text: "无所谓，有什么喝什么，量大管饱就行", effects: { Boldness: 0.3, Rationality: -0.2, Discipline: -0.3 } }
    ]
  },
  {
    id: 11,
    text: "你在工作中发现了一个可能导致严重后果的细微偏差，但此时已经是下班时间，你会？",
    options: [
      { text: "立刻留下来加班解决，不解决完绝不离开", effects: { Discipline: 0.5, Rationality: 0.3, Boldness: 0.1 } },
      { text: "先记录下来，明天一早再处理，认为不差这一会儿", effects: { Rationality: 0.2, Discipline: -0.2, Boldness: -0.2 } },
      { text: "发消息给相关负责人提醒，将责任和风险分摊出去", effects: { Social: 0.3, Rationality: 0.4, Discipline: 0.2 } },
      { text: "如果没人发现，就假装不知道，祈祷不会出事", effects: { Boldness: -0.4, Discipline: -0.5, Empathy: -0.3 } }
    ]
  },
  {
    id: 12,
    text: "你认为‘理想的家’应该是？",
    options: [
      { text: "充满高科技设备和各种智能机器人的实验室感", effects: { Rationality: 0.4, Social: -0.4, Boldness: 0.1 } },
      { text: "温馨舒适，到处是猫咪和软绵绵的装饰品", effects: { Empathy: 0.5, Social: 0.3, Boldness: -0.2 } },
      { text: "极简风格，只有生活必需品，没有任何冗余", effects: { Discipline: 0.5, Rationality: 0.4, Social: -0.5 } },
      { text: "经常举办聚会，充满欢声笑语的开放空间", effects: { Social: 0.5, Boldness: 0.3, Empathy: 0.2 } }
    ]
  },
  {
    id: 13,
    text: "在选择衣服时，你首要考虑的是？",
    options: [
      { text: "实用性与功能性，是否有足够的口袋装工具", effects: { Rationality: 0.4, Discipline: 0.3, Boldness: -0.1 } },
      { text: "当下的时尚潮流，必须要能彰显我的个性", effects: { Boldness: 0.4, Social: 0.4, Rationality: -0.2 } },
      { text: "舒适度，最好能让我随时进入放松或宅家状态", effects: { Social: -0.3, Empathy: 0.2, Boldness: -0.2 } },
      { text: "正式与得体，代表了我的职业素养和礼貌", effects: { Discipline: 0.5, Social: 0.2, Rationality: 0.2 } }
    ]
  },
  {
    id: 14,
    text: "如果你突然获得了一大笔奖金，你会？",
    options: [
      { text: "全部存入银行或进行稳健理财，为未来做打算", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: -0.4 } },
      { text: "购买那套心仪已久的顶级游戏装备或电子产品", effects: { Boldness: 0.3, Social: -0.1, Discipline: -0.2 } },
      { text: "请所有的好朋友大吃一顿，分享这份喜悦", effects: { Social: 0.5, Empathy: 0.4, Boldness: 0.2 } },
      { text: "捐献给相关的研究机构或慈善组织，实现某种价值", effects: { Idealism: 0.5, Empathy: 0.3, Rationality: 0.2 } }
    ]
  },
  {
    id: 15,
    text: "当你在阅读一本侦探小说时，你最享受的过程是？",
    options: [
      { text: "在作者揭晓答案前，通过逻辑推理出凶手是谁", effects: { Rationality: 0.5, Discipline: 0.2, Boldness: -0.1 } },
      { text: "感受书中角色的情感纠葛和悲欢离合", effects: { Empathy: 0.5, Idealism: 0.2, Social: 0.1 } },
      { text: "惊叹于凶手奇诡的犯罪手法和大胆的构思", effects: { Boldness: 0.4, Rationality: 0.1, Discipline: -0.2 } },
      { text: "反思案件背后的社会问题和人性阴暗面", effects: { Idealism: 0.4, Rationality: 0.3, Empathy: 0.2 } }
    ]
  },
  {
    id: 16,
    text: "你在餐厅吃到了很难吃的食物，你会？",
    options: [
      { text: "直接找服务员或老板反映情况，要求重做或退款", effects: { Boldness: 0.4, Social: 0.2, Rationality: 0.1 } },
      { text: "默默吃完，并在心里给这家店打上黑名单，下次不来", effects: { Social: -0.3, Discipline: 0.2, Boldness: -0.3 } },
      { text: "安慰自己这只是个例，并试图找出食物里唯一的优点", effects: { Empathy: 0.4, Idealism: 0.3, Social: 0.1 } },
      { text: "在点评网站上写下一篇极度客观严谨的负面评价", effects: { Rationality: 0.5, Discipline: 0.3, Social: -0.1 } }
    ]
  },
  {
    id: 17,
    text: "你如何看待‘怀旧’这件事？",
    options: [
      { text: "是逃避现实的表现，人应该永远看向未来", effects: { Rationality: 0.4, Boldness: 0.3, Idealism: -0.2 } },
      { text: "是心灵的寄托，那些旧物承载了最温暖的记忆", effects: { Empathy: 0.5, Idealism: 0.4, Social: 0.1 } },
      { text: "是审美的源泉，经典的文化符号永不过时", effects: { Idealism: 0.3, Rationality: 0.2, Social: -0.1 } },
      { text: "偶尔为之，作为对自己过去经历的复盘与总结", effects: { Rationality: 0.3, Discipline: 0.4, Empathy: 0.1 } }
    ]
  },
  {
    id: 18,
    text: "如果你被困在一个荒岛上，你只能带一样东西，你会选？",
    options: [
      { text: "一本厚厚的、涵盖各种生存技能的百科全书", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: -0.2 } },
      { text: "一把多功能的、锋利耐用的格斗匕首", effects: { Boldness: 0.5, Rationality: 0.2, Discipline: 0.1 } },
      { text: "一个能无限播放音乐和讲故事的播放器", effects: { Empathy: 0.4, Social: -0.2, Idealism: 0.3 } },
      { text: "一张家人的合影，这是我生存下去的唯一动力", effects: { Empathy: 0.5, Idealism: 0.4, Rationality: -0.3 } }
    ]
  },
  {
    id: 19,
    text: "当你遇到一个非常讨厌的人时，你会？",
    options: [
      { text: "保持绝对的礼貌，但建立起不可逾越的心理防线", effects: { Discipline: 0.5, Rationality: 0.3, Social: -0.2 } },
      { text: "尽可能回避，完全切断与之交集的可能性", effects: { Social: -0.4, Boldness: -0.3, Rationality: 0.2 } },
      { text: "直接表达不满，让对方知道我的底线在哪里", effects: { Boldness: 0.5, Social: 0.3, Discipline: -0.2 } },
      { text: "试图理解对方为什么会这样，寻找共存的可能性", effects: { Empathy: 0.5, Social: 0.4, Rationality: 0.1 } }
    ]
  },
  {
    id: 20,
    text: "对于‘命运’，你的看法是？",
    options: [
      { text: "命运是概率的集合，可以通过计算和规划来改变", effects: { Rationality: 0.5, Discipline: 0.3, Idealism: -0.3 } },
      { text: "命运是用来抗争的，我命由我不由天", effects: { Boldness: 0.5, Idealism: 0.4, Discipline: -0.4 } },
      { text: "命运是既定的剧本，我们要优雅地演好自己的角色", effects: { Idealism: 0.3, Discipline: 0.4, Rationality: 0.2 } },
      { text: "命运是随风飘荡的种子，随遇而安也是一种智慧", effects: { Empathy: 0.4, Social: 0.2, Boldness: -0.3 } }
    ]
  },

  // --- 任务/工作 (21-40) ---
  {
    id: 21,
    text: "在一次绝密行动中，由于突发状况，你必须在牺牲任务目标和牺牲队友之间做选择，你会？",
    options: [
      { text: "优先保全队友，认为人才是组织最宝贵的资产", effects: { Empathy: 0.5, Social: 0.4, Discipline: -0.3 } },
      { text: "以任务目标为重，这是我们作为搜查官的职责底线", effects: { Discipline: 0.5, Rationality: 0.4, Empathy: -0.5 } },
      { text: "寻找第三种方案，哪怕这意味着极高的个人风险", effects: { Boldness: 0.5, Idealism: 0.4, Rationality: 0.2 } },
      { text: "迅速分析成功概率，选择损失最小的那一个方案", effects: { Rationality: 0.5, Discipline: 0.3, Empathy: -0.2 } }
    ]
  },
  {
    id: 22,
    text: "你作为队长，面对一个性格古怪但能力超群的下属，你会如何管理？",
    options: [
      { text: "给予对方绝对的自由空间，只看最终的成果", effects: { Boldness: 0.3, Discipline: -0.4, Rationality: 0.2 } },
      { text: "通过情感关怀和共同爱好，拉近彼此的心理距离", effects: { Social: 0.5, Empathy: 0.4, Boldness: 0.1 } },
      { text: "制定极其严密的考核制度，确保对方在可控范围内", effects: { Discipline: 0.5, Rationality: 0.4, Social: -0.2 } },
      { text: "以身作则，用自己无可挑剔的专业能力让对方折服", effects: { Discipline: 0.4, Rationality: 0.3, Boldness: 0.2 } }
    ]
  },
  {
    id: 23,
    text: "你发现组织的某项核心计划可能存在伦理缺陷，你会？",
    options: [
      { text: "私下搜集证据，在合适的时机向更高层举报", effects: { Rationality: 0.4, Boldness: 0.2, Discipline: 0.1 } },
      { text: "立刻联合志同道合的伙伴，公开质疑并要求停止", effects: { Boldness: 0.4, Social: 0.4, Idealism: 0.5 } },
      { text: "保持沉默，相信组织的决策自有其更深层的考量", effects: { Discipline: 0.5, Rationality: 0.2, Boldness: -0.4 } },
      { text: "既然无法改变，就选择叛离，去寻找真正的正义", effects: { Idealism: 0.5, Boldness: 0.4, Discipline: -0.5 } }
    ]
  },
  {
    id: 24,
    text: "在激烈的战场上，你最信任的武器是？",
    options: [
      { text: "能够精准打击、一击必杀的远距离狙击步枪", effects: { Rationality: 0.4, Discipline: 0.4, Social: -0.3 } },
      { text: "充满力量感、能贴身肉搏的近战刀刃或拳套", effects: { Boldness: 0.5, Rationality: -0.2, Discipline: 0.1 } },
      { text: "各种精密的辅助无人机或高科技战术道具", effects: { Rationality: 0.5, Boldness: -0.1, Discipline: 0.2 } },
      { text: "能够保护所有队友、抵御一切攻击的巨型护盾", effects: { Empathy: 0.5, Social: 0.3, Discipline: 0.4 } }
    ]
  },
  {
    id: 25,
    text: "面对上级下达的一个明显是让你去‘送死’的自杀式任务，你会？",
    options: [
      { text: "义无反顾地接受，为了组织的利益牺牲是最高荣誉", effects: { Discipline: 0.5, Idealism: 0.4, Boldness: 0.3 } },
      { text: "当面质疑指令的合理性，并要求给出充分的解释", effects: { Boldness: 0.4, Rationality: 0.3, Discipline: -0.2 } },
      { text: "表面答应，但在执行过程中寻找逃生或变通的机会", effects: { Rationality: 0.4, Boldness: 0.2, Discipline: -0.4 } },
      { text: "直接拒绝并反抗，认为任何组织都无权随意处置生命", effects: { Boldness: 0.5, Idealism: 0.5, Social: 0.2 } }
    ]
  },
  {
    id: 26,
    text: "在情报搜集过程中，你抓获了一名敌方间谍，你会采取什么手段获取情报？",
    options: [
      { text: "极度理性的心理博弈，利用对方的逻辑漏洞击碎防线", effects: { Rationality: 0.5, Discipline: 0.3, Empathy: -0.2 } },
      { text: "展现温和的一面，通过共情和感化诱导对方开口", effects: { Empathy: 0.4, Social: 0.4, Rationality: 0.2 } },
      { text: "利用高科技手段直接读取或溯源对方的脑部数据", effects: { Rationality: 0.5, Boldness: 0.1, Social: -0.4 } },
      { text: "毫不留情的强力审讯，效率永远是第一位的", effects: { Boldness: 0.4, Empathy: -0.5, Discipline: 0.2 } }
    ]
  },
  {
    id: 27,
    text: "如果你的研究成果被他人剽窃，你会？",
    options: [
      { text: "通过法律和程序途径，搜集详尽的证据进行维权", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: -0.1 } },
      { text: "直接在技术社区公开曝光，让对方身败名裂", effects: { Boldness: 0.5, Social: 0.3, Discipline: -0.3 } },
      { text: "无所谓，只要这项技术能造福人类，谁的名字不重要", effects: { Idealism: 0.5, Empathy: 0.4, Rationality: -0.2 } },
      { text: "在对方的代码里埋下暗桩，让对方在关键时刻出丑", effects: { Rationality: 0.4, Boldness: 0.3, Discipline: -0.4 } }
    ]
  },
  {
    id: 28,
    text: "你认为一个优秀的指挥官最核心的特质是？",
    options: [
      { text: "绝对的冷静，在任何压力下都能做出最优判断", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: -0.2 } },
      { text: "极强的号召力，能让所有人甘愿为之赴死", effects: { Social: 0.5, Idealism: 0.4, Boldness: 0.3 } },
      { text: "不拘一格的奇谋，总能出人意料地扭转乾坤", effects: { Boldness: 0.5, Rationality: 0.3, Discipline: -0.3 } },
      { text: "对下属的深度体恤，能最大限度保全每个生命", effects: { Empathy: 0.5, Social: 0.3, Discipline: 0.2 } }
    ]
  },
  {
    id: 29,
    text: "在漫长的潜伏任务中，你感到极度的孤独和自我怀疑，你会？",
    options: [
      { text: "反复阅读任务简报和初心，强化自己的身份认同", effects: { Discipline: 0.5, Rationality: 0.2, Idealism: 0.3 } },
      { text: "在当地寻找一个小动物或机器人作为情感寄托", effects: { Empathy: 0.5, Social: -0.2, Boldness: -0.2 } },
      { text: "通过高强度的工作来麻痹自己，不给自己思考的时间", effects: { Discipline: 0.4, Rationality: 0.3, Social: -0.4 } },
      { text: "暗中联系昔日的战友，哪怕这违反了潜伏纪律", effects: { Social: 0.4, Empathy: 0.3, Discipline: -0.5 } }
    ]
  },
  {
    id: 30,
    text: "你对‘加班’的真实态度是？",
    options: [
      { text: "只要能解决那个迷人的技术难题，熬通宵也值得", effects: { Rationality: 0.4, Boldness: 0.2, Discipline: 0.3 } },
      { text: "坚决反对，工作和生活必须有明确的界限", effects: { Social: 0.3, Discipline: -0.3, Rationality: 0.2 } },
      { text: "如果是为了团队的共同目标，我会带头留下来", effects: { Social: 0.4, Discipline: 0.5, Empathy: 0.3 } },
      { text: "效率低的人才需要加班，我通常能准时下班", effects: { Rationality: 0.5, Discipline: 0.2, Social: -0.2 } }
    ]
  },
  {
    id: 31,
    text: "如果你的任务需要你伪装成一名服务生去接近目标，你会？",
    options: [
      { text: "花大量时间研究服务礼仪，确保每一个动作都完美无缺", effects: { Discipline: 0.5, Rationality: 0.4, Boldness: -0.1 } },
      { text: "凭借直觉和临场发挥，用幽默和魅力轻松混入", effects: { Boldness: 0.4, Social: 0.5, Rationality: -0.2 } },
      { text: "感到极度不适，认为这种‘琐事’有损我的专业身份", effects: { Rationality: 0.3, Social: -0.4, Boldness: -0.3 } },
      { text: "这很有趣，我把它当成一场真人角色扮演游戏", effects: { Boldness: 0.4, Social: 0.3, Idealism: 0.2 } }
    ]
  },
  {
    id: 32,
    text: "面对失败，你的第一反应通常是？",
    options: [
      { text: "立刻寻找客观原因和数据偏差，进行严谨的复盘", effects: { Rationality: 0.5, Discipline: 0.4, Social: -0.2 } },
      { text: "陷入深深的自我怀疑，需要很长时间才能恢复", effects: { Empathy: 0.4, Idealism: 0.2, Boldness: -0.4 } },
      { text: "一笑置之，认为这只是成功路上的一场游戏关卡", effects: { Boldness: 0.4, Social: 0.2, Rationality: -0.2 } },
      { text: "愤怒地想要立刻再试一次，一定要赢回来", effects: { Boldness: 0.5, Discipline: 0.2, Rationality: -0.3 } }
    ]
  },
  {
    id: 33,
    text: "你认为‘正义’是什么？",
    options: [
      { text: "正义是程序与规则的严格执行，不偏不倚", effects: { Discipline: 0.5, Rationality: 0.4, Idealism: -0.2 } },
      { text: "正义是为那些被遗忘、被压迫的人争取更好的生活", effects: { Idealism: 0.5, Empathy: 0.4, Social: 0.3 } },
      { text: "正义是揭开被掩盖的真相，哪怕真相极其残酷", effects: { Rationality: 0.4, Boldness: 0.4, Idealism: 0.3 } },
      { text: "正义是一种主观的信念，只要问心无愧即可", effects: { Idealism: 0.4, Empathy: 0.3, Boldness: 0.2 } }
    ]
  },
  {
    id: 34,
    text: "在团队合作中，你最不能忍受哪种队友？",
    options: [
      { text: "逻辑混乱、做事毫无条理的家伙", effects: { Rationality: 0.5, Discipline: 0.4, Social: -0.3 } },
      { text: "冷漠无情、完全不顾及同伴感受的人", effects: { Empathy: 0.5, Social: 0.4, Rationality: -0.2 } },
      { text: "畏首畏尾、不敢承担任何风险的胆小鬼", effects: { Boldness: 0.5, Discipline: 0.2, Rationality: 0.1 } },
      { text: "死板教条、完全不懂得变通的木头人", effects: { Boldness: 0.4, Social: 0.3, Discipline: -0.4 } }
    ]
  },
  {
    id: 35,
    text: "当你需要向大众公布一个坏消息时，你会选择？",
    options: [
      { text: "尽可能温和、委婉，加入大量的人文关怀和希望", effects: { Empathy: 0.5, Social: 0.4, Rationality: -0.1 } },
      { text: "直截了当、不带感情地陈述事实，避免产生歧义", effects: { Rationality: 0.5, Discipline: 0.4, Empathy: -0.3 } },
      { text: "通过精心编排的视觉展示或艺术形式来传达", effects: { Idealism: 0.3, Social: 0.3, Boldness: 0.2 } },
      { text: "只告诉那些‘有权知道’的人，避免引发群体恐慌", effects: { Rationality: 0.4, Boldness: -0.2, Discipline: 0.3 } }
    ]
  },
  {
    id: 36,
    text: "如果你能改写组织的信条，你会加入哪一句话？",
    options: [
      { text: "‘数据是唯一的信仰。’", effects: { Rationality: 0.5, Discipline: 0.3, Empathy: -0.4 } },
      { text: "‘每一个生命都不可被计算。’", effects: { Empathy: 0.5, Idealism: 0.4, Social: 0.3 } },
      { text: "‘唯有突破，方见未来。’", effects: { Boldness: 0.5, Idealism: 0.3, Discipline: -0.2 } },
      { text: "‘守护是最终的归宿。’", effects: { Discipline: 0.4, Idealism: 0.4, Empathy: 0.3 } }
    ]
  },
  {
    id: 37,
    text: "在执行任务时，你发现了一个可能对你个人有利但对组织有害的漏洞，你会？",
    options: [
      { text: "立刻上报并建议修补，完全不考虑个人利益", effects: { Discipline: 0.5, Rationality: 0.3, Idealism: 0.4 } },
      { text: "利用这个漏洞为自己谋取一点点合法的便利", effects: { Boldness: 0.3, Rationality: 0.2, Discipline: -0.3 } },
      { text: "保持沉默，看看是否会有其他人发现并利用它", effects: { Rationality: 0.4, Social: -0.2, Boldness: -0.2 } },
      { text: "利用漏洞搜集组织的秘密，作为未来博弈的筹码", effects: { Rationality: 0.5, Boldness: 0.4, Discipline: -0.5 } }
    ]
  },
  {
    id: 38,
    text: "你认为‘工作’对于你而言最大的意义是？",
    options: [
      { text: "实现自我价值，在专业领域达到巅峰", effects: { Rationality: 0.4, Discipline: 0.4, Boldness: 0.2 } },
      { text: "获得稳定的报酬和地位，保障生活质量", effects: { Rationality: 0.3, Discipline: 0.3, Idealism: -0.4 } },
      { text: "结交一群志同道合的伙伴，不再感到孤独", effects: { Social: 0.5, Empathy: 0.4, Boldness: -0.1 } },
      { text: "为了某个崇高的目标，即使这个过程充满痛苦", effects: { Idealism: 0.5, Discipline: 0.5, Empathy: 0.2 } }
    ]
  },
  {
    id: 39,
    text: "当你被调配到一个全新的、陌生的部门时，你会？",
    options: [
      { text: "迅速查阅所有相关档案和规则，尽快进入角色", effects: { Discipline: 0.5, Rationality: 0.4, Boldness: -0.2 } },
      { text: "先观察部门里的人际关系网，寻找潜在的盟友", effects: { Social: 0.5, Rationality: 0.3, Boldness: 0.1 } },
      { text: "保持沉默和低调，直到我完全看透这里的局势", effects: { Rationality: 0.4, Social: -0.4, Boldness: -0.3 } },
      { text: "主动组织一次部门聚餐，通过非正式方式融入", effects: { Social: 0.5, Boldness: 0.2, Empathy: 0.3 } }
    ]
  },
  {
    id: 40,
    text: "如果你的职业生涯可以用一个词来形容，你希望是？",
    options: [
      { text: "‘精准’ (Precision)", effects: { Rationality: 0.5, Discipline: 0.4, Social: -0.2 } },
      { text: "‘奇迹’ (Miracle)", effects: { Boldness: 0.4, Idealism: 0.5, Social: 0.2 } },
      { text: "‘守护’ (Guardianship)", effects: { Empathy: 0.5, Discipline: 0.4, Idealism: 0.3 } },
      { text: "‘自由’ (Freedom)", effects: { Boldness: 0.5, Discipline: -0.5, Idealism: 0.4 } }
    ]
  },

  // --- 冲突/危机 (41-60) ---
  {
    id: 41,
    text: "你被敌方包围，且能源即将耗尽，你最可能采取的行动是？",
    options: [
      { text: "开启自爆程序，与敌人同归于尽，捍卫最后尊严", effects: { Boldness: 0.5, Idealism: 0.4, Rationality: -0.3 } },
      { text: "利用最后一点能源发出加密求救信号，并寻找掩体隐蔽", effects: { Rationality: 0.4, Discipline: 0.3, Boldness: -0.2 } },
      { text: "试图与对方谈判，利用信息差寻找生还的可能", effects: { Rationality: 0.5, Boldness: 0.3, Social: 0.2 } },
      { text: "放下武器投降，认为活着才有翻盘的机会", effects: { Rationality: 0.2, Boldness: -0.4, Discipline: -0.3 } }
    ]
  },
  {
    id: 42,
    text: "你最亲密的伙伴突然被指控为叛徒，证据确凿，你会？",
    options: [
      { text: "坚决不信，哪怕违抗命令也要亲自查明真相", effects: { Idealism: 0.5, Empathy: 0.5, Discipline: -0.5 } },
      { text: "在法律和程序范围内为对方寻找辩护的可能", effects: { Discipline: 0.4, Rationality: 0.4, Social: 0.2 } },
      { text: "虽然心痛，但选择相信组织的判断，与其划清界限", effects: { Discipline: 0.5, Rationality: 0.3, Empathy: -0.4 } },
      { text: "利用与对方的亲密关系，诱导其说出真实的动机", effects: { Rationality: 0.5, Boldness: 0.2, Empathy: -0.3 } }
    ]
  },
  {
    id: 43,
    text: "城市中爆发了未知的‘崩溃症’疫情，民众陷入恐慌，你会？",
    options: [
      { text: "深入最危险的隔离区，进行实地数据采集与研究", effects: { Rationality: 0.5, Boldness: 0.4, Discipline: 0.3 } },
      { text: "通过广播和媒体安抚民众情绪，维持社会基本秩序", effects: { Social: 0.5, Empathy: 0.4, Discipline: 0.4 } },
      { text: "利用自己的特殊身份，优先保护身边的家人和朋友", effects: { Empathy: 0.5, Social: 0.2, Rationality: -0.2 } },
      { text: "质疑政府的应对措施，并在地下组织中寻找替代方案", effects: { Boldness: 0.4, Idealism: 0.5, Discipline: -0.4 } }
    ]
  },
  {
    id: 44,
    text: "在一次撤退行动中，一个无辜的孩子被困在火海，救他会耽误整个小队的撤退，你会？",
    options: [
      { text: "冲进火海救人，我认为生命没有高低贵贱之分", effects: { Empathy: 0.5, Idealism: 0.5, Boldness: 0.4 } },
      { text: "理智地阻止想要救人的队友，确保小队安全是第一位", effects: { Rationality: 0.5, Discipline: 0.5, Empathy: -0.5 } },
      { text: "利用远程技术或机器人尝试营救，哪怕成功率极低", effects: { Rationality: 0.4, Boldness: 0.2, Idealism: 0.3 } },
      { text: "陷入剧烈的心理挣扎，直到时间耗尽无法做出选择", effects: { Empathy: 0.3, Boldness: -0.4, Rationality: -0.2 } }
    ]
  },
  {
    id: 45,
    text: "你发现一个你一直以来视为‘英雄’的人其实有着非常阴暗的过去，你会？",
    options: [
      { text: "幻灭感爆棚，从此不再相信任何所谓的英雄", effects: { Idealism: -0.5, Empathy: -0.3, Rationality: 0.2 } },
      { text: "认为人是复杂的，只要他现在的行为是正义的即可", effects: { Rationality: 0.4, Empathy: 0.3, Discipline: 0.2 } },
      { text: "深入挖掘那段阴暗过去，试图理解其转变的原因", effects: { Rationality: 0.5, Idealism: 0.3, Social: -0.1 } },
      { text: "将真相公之于众，认为大众有权知道偶像的真面目", effects: { Boldness: 0.4, Discipline: 0.3, Idealism: 0.4 } }
    ]
  },
  {
    id: 46,
    text: "当你陷入一个无法逃脱的循环梦境时，你会？",
    options: [
      { text: "冷静地记录梦境中的每一个细节，寻找逻辑漏洞", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: -0.2 } },
      { text: "顺应梦境，在其中开启一段完全不同的人生冒险", effects: { Boldness: 0.4, Social: 0.2, Idealism: 0.3 } },
      { text: "感到极度恐惧，不断尝试用极端的痛苦让自己醒来", effects: { Boldness: 0.3, Empathy: 0.2, Rationality: -0.4 } },
      { text: "寻找梦境中的其他‘觉醒者’，共同商讨对策", effects: { Social: 0.5, Rationality: 0.3, Boldness: 0.1 } }
    ]
  },
  {
    id: 47,
    text: "面对敌人的劝降信，里面提到了你最渴望得到的某种东西，你会？",
    options: [
      { text: "嗤之以鼻，认为这是对我的侮辱", effects: { Discipline: 0.5, Idealism: 0.4, Boldness: 0.2 } },
      { text: "心动一秒，但理智告诉我这很可能是陷阱", effects: { Rationality: 0.5, Discipline: 0.3, Boldness: -0.1 } },
      { text: "将计就计，假装投降以渗透进对方内部", effects: { Boldness: 0.5, Rationality: 0.4, Discipline: -0.3 } },
      { text: "反思组织是否真的没能满足我的需求，产生动摇", effects: { Empathy: 0.3, Idealism: -0.3, Social: 0.2 } }
    ]
  },
  {
    id: 48,
    text: "你的秘密基地被发现并遭到了破坏，你第一反应是？",
    options: [
      { text: "立刻转移所有核心数据，并设置多重假线索误导敌人", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: 0.1 } },
      { text: "极度愤怒，发誓一定要让破坏者付出血的代价", effects: { Boldness: 0.5, Empathy: -0.2, Rationality: -0.3 } },
      { text: "感到深深的失落，那是唯一能让我感到安心的地方", effects: { Empathy: 0.5, Social: -0.4, Boldness: -0.3 } },
      { text: "在废墟中寻找是否有任何幸存的伙伴或回忆", effects: { Empathy: 0.4, Social: 0.3, Idealism: 0.2 } }
    ]
  },
  {
    id: 49,
    text: "在一次辩论中，你发现自己的观点明显是错的，你会？",
    options: [
      { text: "坦然承认错误，并向对方请教正确的观点", effects: { Rationality: 0.5, Discipline: 0.4, Social: 0.3 } },
      { text: "利用辩论技巧强行诡辩，绝不当众丢面子", effects: { Boldness: 0.4, Rationality: 0.2, Social: -0.2 } },
      { text: "迅速转换话题，将焦点引向对方的逻辑漏洞", effects: { Rationality: 0.4, Boldness: 0.3, Social: 0.1 } },
      { text: "沉默不语，在心里默默记下这次教训", effects: { Rationality: 0.3, Discipline: 0.5, Social: -0.4 } }
    ]
  },
  {
    id: 50,
    text: "如果世界末日即将来临，最后三分钟你会做什么？",
    options: [
      { text: "坐在电脑前，完成最后一行代码或数据上传", effects: { Rationality: 0.5, Discipline: 0.5, Social: -0.3 } },
      { text: "紧紧拥抱身边的人，告诉他们我爱他们", effects: { Empathy: 0.5, Social: 0.5, Boldness: 0.1 } },
      { text: "点上一支烟或喝杯好茶，平静地注视远方的毁灭", effects: { Rationality: 0.3, Discipline: 0.4, Boldness: -0.2 } },
      { text: "大声歌唱或呐喊，用最狂放的方式告别世界", effects: { Boldness: 0.5, Idealism: 0.4, Rationality: -0.3 } }
    ]
  },
  {
    id: 51,
    text: "你被指派去刺杀一名你认为并不该死的人，你会？",
    options: [
      { text: "抗命，哪怕被处死也不执行", effects: { Idealism: 0.5, Discipline: -0.5, Boldness: 0.5 } },
      { text: "寻找目标身上的罪证，说服自己对方死有余辜", effects: { Rationality: 0.4, Discipline: 0.4, Empathy: -0.3 } },
      { text: "制造假死现场，放走目标并承担随后的风险", effects: { Boldness: 0.4, Idealism: 0.4, Empathy: 0.4 } },
      { text: "执行任务，认为个人的道德感不能高于组织的意志", effects: { Discipline: 0.5, Rationality: 0.3, Empathy: -0.5 } }
    ]
  },
  {
    id: 52,
    text: "面对网络上对你铺天盖地的污蔑，你会？",
    options: [
      { text: "逐条批驳，用详尽的事实和证据打脸造谣者", effects: { Rationality: 0.5, Boldness: 0.3, Discipline: 0.4 } },
      { text: "完全不在意，认为清者自清，没必要解释", effects: { Rationality: 0.4, Social: -0.4, Boldness: -0.2 } },
      { text: "感到极度委屈，把自己关在房间里大哭一场", effects: { Empathy: 0.4, Idealism: 0.2, Social: -0.3 } },
      { text: "利用技术手段反向追踪造谣者的身份并进行反击", effects: { Rationality: 0.5, Boldness: 0.4, Discipline: -0.3 } }
    ]
  },
  {
    id: 53,
    text: "你最害怕的事情是？",
    options: [
      { text: "失去理智，变成一个受本能支配的怪物", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: -0.2 } },
      { text: "被所有人遗忘，仿佛从未在这个世界上存在过", effects: { Social: 0.5, Empathy: 0.4, Idealism: 0.3 } },
      { text: "自己拼命守护的东西，原来是一场巨大的骗局", effects: { Idealism: 0.5, Rationality: 0.3, Empathy: 0.2 } },
      { text: "平庸无奇地度过一生，没有任何波澜", effects: { Boldness: 0.5, Idealism: 0.3, Discipline: -0.4 } }
    ]
  },
  {
    id: 54,
    text: "如果你可以复活一个人，你会选？",
    options: [
      { text: "曾经指引我前行的导师或亲人", effects: { Empathy: 0.5, Idealism: 0.4, Discipline: 0.3 } },
      { text: "一位伟大的、能改变世界进程的天才科学家", effects: { Rationality: 0.5, Idealism: 0.4, Boldness: 0.2 } },
      { text: "因我的失误而牺牲的战友", effects: { Empathy: 0.5, Social: 0.3, Discipline: 0.4 } },
      { text: "不会复活任何人，死者应该安息，不应被打扰", effects: { Rationality: 0.4, Discipline: 0.5, Idealism: -0.3 } }
    ]
  },
  {
    id: 55,
    text: "在审讯室里，你和敌人单独相处，对方突然提出了一个诱人的交易，你会？",
    options: [
      { text: "保持沉默，一个字都不说", effects: { Discipline: 0.5, Rationality: 0.3, Social: -0.2 } },
      { text: "通过假装感兴趣来套取更多对方背后的情报", effects: { Rationality: 0.5, Boldness: 0.4, Discipline: -0.1 } },
      { text: "愤怒地斥责对方，以此来坚定自己的立场", effects: { Boldness: 0.3, Idealism: 0.4, Discipline: 0.2 } },
      { text: "冷静地分析交易的可行性，看看是否真的双赢", effects: { Rationality: 0.5, Idealism: -0.3, Boldness: 0.2 } }
    ]
  },
  {
    id: 56,
    text: "你发现自己的弦能（能量）出现了不稳定的波动，你会？",
    options: [
      { text: "立刻停止一切行动，寻找专业人士进行精密修复", effects: { Rationality: 0.4, Discipline: 0.5, Boldness: -0.3 } },
      { text: "试图通过自己的意志力来强行压制和掌控它", effects: { Boldness: 0.5, Discipline: 0.4, Rationality: 0.1 } },
      { text: "隐瞒伤情，继续执行任务，不想让伙伴们担心", effects: { Empathy: 0.5, Social: 0.3, Boldness: 0.2 } },
      { text: "观察这种波动是否能带来某种意想不到的新能力", effects: { Rationality: 0.3, Boldness: 0.4, Discipline: -0.3 } }
    ]
  },
  {
    id: 57,
    text: "当团队内部出现严重分歧时，你通常是那个？",
    options: [
      { text: "理性的调停者，通过数据和逻辑说服双方", effects: { Rationality: 0.5, Social: 0.4, Discipline: 0.3 } },
      { text: "坚定的主战派，认为必须立刻做出决定，哪怕是错的", effects: { Boldness: 0.5, Discipline: 0.2, Rationality: -0.1 } },
      { text: "情感的纽带，通过化解对立情绪来达成和解", effects: { Empathy: 0.5, Social: 0.5, Boldness: -0.1 } },
      { text: "冷眼旁观者，直到他们吵出结果我再行动", effects: { Rationality: 0.4, Social: -0.4, Boldness: -0.2 } }
    ]
  },
  {
    id: 58,
    text: "如果你的过去是一本小说，你觉得书名应该是？",
    options: [
      { text: "《绝对零度》", effects: { Rationality: 0.5, Social: -0.5, Discipline: 0.4 } },
      { text: "《蝴蝶的羽翼》", effects: { Idealism: 0.5, Boldness: 0.3, Empathy: 0.4 } },
      { text: "《街头的雷鸣》", effects: { Boldness: 0.5, Social: 0.4, Discipline: -0.3 } },
      { text: "《孤独的守望者》", effects: { Discipline: 0.5, Idealism: 0.4, Social: -0.3 } }
    ]
  },
  {
    id: 59,
    text: "你意外获得了一个可以预见未来三秒的特殊能力，你会？",
    options: [
      { text: "将其用于战术预判，成为战场上的无敌存在", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: 0.2 } },
      { text: "在赌场或交易市场中迅速积累财富", effects: { Rationality: 0.3, Boldness: 0.3, Idealism: -0.5 } },
      { text: "用来避免日常生活中所有尴尬或微小的失误", effects: { Discipline: 0.5, Social: 0.2, Boldness: -0.3 } },
      { text: "这让我感到无比沉重，我宁愿做一个普通人", effects: { Idealism: 0.4, Empathy: 0.4, Rationality: -0.2 } }
    ]
  },
  {
    id: 60,
    text: "面对死亡，你最希望留给世界的是？",
    options: [
      { text: "一段极具启发性的科研成果或理论体系", effects: { Rationality: 0.5, Discipline: 0.4, Idealism: 0.3 } },
      { text: "一段广为流传的英雄传说或传奇故事", effects: { Boldness: 0.5, Idealism: 0.5, Social: 0.3 } },
      { text: "几个因我的存在而过得更好的伙伴", effects: { Empathy: 0.5, Social: 0.4, Discipline: 0.2 } },
      { text: "什么都不留下，让一切归于虚无", effects: { Rationality: 0.4, Social: -0.5, Discipline: 0.3 } }
    ]
  },

  // --- 道德/哲学 (61-80) ---
  {
    id: 61,
    text: "你认为‘人性’的本质是？",
    options: [
      { text: "趋利避害的生物本能，可以通过代码模拟", effects: { Rationality: 0.5, Discipline: 0.3, Empathy: -0.4 } },
      { text: "对爱与被爱的渴望，是连接彼此的唯一纽带", effects: { Empathy: 0.5, Social: 0.5, Idealism: 0.3 } },
      { text: "永无止境的抗争与进化，充满着混乱的魅力", effects: { Boldness: 0.5, Idealism: 0.4, Discipline: -0.3 } },
      { text: "一张白纸，取决于所处的环境与受到的教育", effects: { Rationality: 0.4, Discipline: 0.4, Idealism: 0.2 } }
    ]
  },
  {
    id: 62,
    text: "如果你可以删除全人类的一种负面情绪，你会选？",
    options: [
      { text: "‘恐惧’，让所有人都能勇敢地追求理想", effects: { Boldness: 0.5, Idealism: 0.4, Rationality: 0.1 } },
      { text: "‘嫉妒’，减少社会中绝大部分的冲突与不公", effects: { Empathy: 0.4, Social: 0.4, Discipline: 0.3 } },
      { text: "‘痛苦’，让世界不再有悲伤与绝望", effects: { Empathy: 0.5, Idealism: 0.5, Rationality: -0.3 } },
      { text: "‘贪婪’，让资源分配回归到理性的轨道上", effects: { Rationality: 0.5, Discipline: 0.4, Idealism: 0.3 } }
    ]
  },
  {
    id: 63,
    text: "面对‘电车难题’（救五个人还是救一个人），你会？",
    options: [
      { text: "计算价值最大化，毫不犹豫地牺牲少数救多数", effects: { Rationality: 0.5, Discipline: 0.4, Empathy: -0.5 } },
      { text: "无法动手，认为任何生命都没有被剥夺的理由", effects: { Empathy: 0.5, Idealism: 0.5, Boldness: -0.4 } },
      { text: "寻找破坏铁轨或让电车出轨的方法，哪怕风险极高", effects: { Boldness: 0.5, Idealism: 0.4, Rationality: 0.2 } },
      { text: "随机选择，认为这种极端的道德选择本身就是荒谬的", effects: { Rationality: 0.3, Boldness: 0.3, Discipline: -0.4 } }
    ]
  },
  {
    id: 64,
    text: "你认为‘孤独’是一种？",
    options: [
      { text: "一种必须忍受的、高效思考的状态", effects: { Rationality: 0.5, Discipline: 0.4, Social: -0.5 } },
      { text: "一种可悲的缺陷，需要通过社交来治愈", effects: { Social: 0.5, Empathy: 0.4, Boldness: -0.2 } },
      { text: "一种自我保护的屏障，免受外界的干扰与伤害", effects: { Social: -0.4, Rationality: 0.3, Boldness: -0.3 } },
      { text: "一种与生俱来的浪漫，是与自己灵魂对话的机会", effects: { Idealism: 0.5, Empathy: 0.4, Social: -0.2 } }
    ]
  },
  {
    id: 65,
    text: "对于‘永生’，你的看法是？",
    options: [
      { text: "科研的终极目标，能让人类有无限时间探索宇宙", effects: { Rationality: 0.5, Idealism: 0.4, Discipline: 0.3 } },
      { text: "一种诅咒，会让人失去对生命的敬畏与热诚", effects: { Empathy: 0.4, Idealism: 0.4, Rationality: 0.2 } },
      { text: "必须建立在极其严苛的筛选制度下，否则会引发崩溃", effects: { Rationality: 0.4, Discipline: 0.5, Social: -0.2 } },
      { text: "太无聊了，我更喜欢充满变数、有限而精彩的人生", effects: { Boldness: 0.5, Idealism: 0.3, Social: 0.2 } }
    ]
  },
  {
    id: 66,
    text: "你更倾向于相信？",
    options: [
      { text: "绝对的真相，无论它多么伤人", effects: { Rationality: 0.5, Discipline: 0.4, Idealism: 0.3 } },
      { text: "温柔的谎言，只要它能给人带来希望和安慰", effects: { Empathy: 0.5, Social: 0.4, Rationality: -0.2 } },
      { text: "真相是多维的，每个人眼中都有自己的真实", effects: { Idealism: 0.4, Rationality: 0.3, Social: 0.2 } },
      { text: "真相并不重要，重要的是谁掌握了话语权", effects: { Rationality: 0.4, Boldness: 0.4, Discipline: -0.3 } }
    ]
  },
  {
    id: 67,
    text: "你认为‘爱’是？",
    options: [
      { text: "一种化学反应引发的非理性冲动", effects: { Rationality: 0.5, Discipline: 0.2, Empathy: -0.4 } },
      { text: "一种灵魂的契合与无条件的信任", effects: { Empathy: 0.5, Idealism: 0.5, Social: 0.3 } },
      { text: "一种互相扶持、共同成长的战友关系", effects: { Social: 0.4, Discipline: 0.4, Rationality: 0.3 } },
      { text: "一种深沉的、不计回报的默默守护", effects: { Empathy: 0.5, Discipline: 0.5, Idealism: 0.4 } }
    ]
  },
  {
    id: 68,
    text: "如果你的克隆人出现在你面前，声称他才是‘真正的你’，你会？",
    options: [
      { text: "通过基因比对和记忆追溯进行严密的身份核实", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: -0.1 } },
      { text: "感到极度冒犯，试图立刻将其消灭以维护唯一性", effects: { Boldness: 0.5, Empathy: -0.3, Rationality: -0.2 } },
      { text: "与他深入交谈，看看我们是否能成为彼此最完美的搭档", effects: { Social: 0.4, Empathy: 0.4, Rationality: 0.3 } },
      { text: "这很有趣，我刚好可以退休，让他去替我工作", effects: { Boldness: 0.4, Discipline: -0.5, Social: 0.2 } }
    ]
  },
  {
    id: 69,
    text: "对于‘轮回计划’，你的核心立场是？",
    options: [
      { text: "科学的必经之路，是人类生存的新纪元", effects: { Rationality: 0.5, Discipline: 0.4, Idealism: 0.3 } },
      { text: "反人性的暴政，剥夺了人类真实死亡和痛苦的权利", effects: { Idealism: 0.5, Empathy: 0.4, Boldness: 0.4 } },
      { text: "一种技术上的妥协，需要不断优化伦理规则", effects: { Rationality: 0.4, Discipline: 0.3, Social: 0.2 } },
      { text: "我只关心这个计划是否能救回我重要的人", effects: { Empathy: 0.5, Social: 0.2, Rationality: -0.3 } }
    ]
  },
  {
    id: 70,
    text: "你认为‘天才’和‘疯子’的区别在于？",
    options: [
      { text: "逻辑的自洽性，天才的疯狂是有理可循的", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: 0.1 } },
      { text: "社会的认可度，赢了就是天才，输了就是疯子", effects: { Rationality: 0.4, Social: 0.3, Idealism: -0.3 } },
      { text: "对他人的影响，天才创造价值，疯子制造毁灭", effects: { Rationality: 0.3, Empathy: 0.4, Discipline: 0.3 } },
      { text: "其实没有任何区别，都是为了触碰禁忌的边界", effects: { Boldness: 0.5, Idealism: 0.4, Discipline: -0.4 } }
    ]
  },
  {
    id: 71,
    text: "如果上帝是个程序员，你觉得他最失败的代码是？",
    options: [
      { text: "‘衰老’，一种低效的、缓慢折磨的内存溢出", effects: { Rationality: 0.5, Discipline: 0.4, Idealism: 0.2 } },
      { text: "‘战争’，一种无法被修复的、死循环般的冲突逻辑", effects: { Empathy: 0.5, Social: 0.3, Rationality: 0.3 } },
      { text: "‘自我意识’，一种让程序开始质疑运行环境的Bug", effects: { Rationality: 0.4, Idealism: 0.5, Boldness: 0.3 } },
      { text: "‘随机性’，让原本完美的规划变得一团糟", effects: { Discipline: 0.5, Rationality: 0.4, Boldness: -0.4 } }
    ]
  },
  {
    id: 72,
    text: "你如何定义‘英雄’？",
    options: [
      { text: "在绝境中依然能保持冷静并制定出完美计划的人", effects: { Rationality: 0.5, Discipline: 0.4, Boldness: 0.2 } },
      { text: "明知不可为而为之，为了信念燃尽自己的人", effects: { Boldness: 0.5, Idealism: 0.5, Empathy: 0.4 } },
      { text: "在日常琐事中默默付出、守护他人安宁的人", effects: { Empathy: 0.5, Social: 0.3, Discipline: 0.5 } },
      { text: "能够打破现有体制、开创全新时代的引领者", effects: { Boldness: 0.5, Idealism: 0.4, Discipline: -0.4 } }
    ]
  },
  {
    id: 73,
    text: "如果艺术和科学必须消失一个，你会保留？",
    options: [
      { text: "科学，它是文明生存和进步的硬基石", effects: { Rationality: 0.5, Discipline: 0.4, Idealism: -0.3 } },
      { text: "艺术，它是文明之所以被称为文明的软灵魂", effects: { Empathy: 0.4, Idealism: 0.5, Social: 0.3 } },
      { text: "两者都不能消失，没有科学的艺术是空洞的，反之亦然", effects: { Rationality: 0.4, Idealism: 0.4, Social: 0.2 } },
      { text: "无所谓，我更在乎当下的感官体验", effects: { Boldness: 0.4, Rationality: -0.3, Discipline: -0.3 } }
    ]
  },
  {
    id: 74,
    text: "你认为‘自由’的前提是？",
    options: [
      { text: "绝对的自律，不能掌控自己的人无法拥有自由", effects: { Discipline: 0.5, Rationality: 0.4, Boldness: -0.2 } },
      { text: "充足的资源，贫穷和匮乏是最大的枷锁", effects: { Rationality: 0.4, Idealism: -0.3, Boldness: 0.2 } },
      { text: "无畏的勇气，只有敢于反抗的人才配谈自由", effects: { Boldness: 0.5, Idealism: 0.4, Discipline: -0.4 } },
      { text: "深度的理解，只有看透世界的本质才能获得精神自由", effects: { Rationality: 0.5, Idealism: 0.5, Social: -0.3 } }
    ]
  },
  {
    id: 75,
    text: "如果你的生命还剩下最后一天，你会？",
    options: [
      { text: "去完成那个一直没能解决的科学假设或艺术作品", effects: { Rationality: 0.5, Idealism: 0.4, Discipline: 0.3 } },
      { text: "疯狂地做一些平时不敢做的、充满刺激的事情", effects: { Boldness: 0.5, Social: 0.2, Discipline: -0.5 } },
      { text: "安静地陪在重要的人身边，感受最后的温暖", effects: { Empathy: 0.5, Social: 0.4, Discipline: 0.3 } },
      { text: "独自一人在高处眺望落日，静候终结的到来", effects: { Rationality: 0.4, Social: -0.5, Boldness: -0.2 } }
    ]
  },
  {
    id: 76,
    text: "你认为‘历史’是由谁书写的？",
    options: [
      { text: "胜利者，历史只是某种权力的叙事工具", effects: { Rationality: 0.5, Boldness: 0.3, Idealism: -0.4 } },
      { text: "英雄，是极少数的关键人物改变了历史进程", effects: { Boldness: 0.4, Idealism: 0.5, Social: 0.2 } },
      { text: "大众，是每一个普通人的细微行动汇聚成了洪流", effects: { Empathy: 0.4, Social: 0.5, Discipline: 0.3 } },
      { text: "必然性，历史有其自身不可逆转的运行规律", effects: { Rationality: 0.5, Discipline: 0.5, Idealism: 0.2 } }
    ]
  },
  {
    id: 77,
    text: "你如何看待‘谎言’？",
    options: [
      { text: "一种低效且危险的信息交换方式", effects: { Rationality: 0.5, Discipline: 0.4, Empathy: -0.3 } },
      { text: "一种必要的生活润滑剂和情感保护色", effects: { Empathy: 0.4, Social: 0.5, Rationality: 0.2 } },
      { text: "一种展示智慧和掌控力的博弈工具", effects: { Rationality: 0.4, Boldness: 0.4, Discipline: -0.3 } },
      { text: "一种对真相的背叛，绝对不可容忍", effects: { Discipline: 0.5, Idealism: 0.5, Rationality: 0.3 } }
    ]
  },
  {
    id: 78,
    text: "如果你能穿越回过去，你会？",
    options: [
      { text: "纠正那个导致悲剧发生的关键错误", effects: { Empathy: 0.5, Rationality: 0.4, Discipline: 0.3 } },
      { text: "给自己留下一笔巨额财富或核心技术资料", effects: { Rationality: 0.4, Boldness: 0.3, Idealism: -0.5 } },
      { text: "只是静静地作为一个旁观者，感受那个时代的氛围", effects: { Idealism: 0.4, Social: -0.2, Rationality: 0.3 } },
      { text: "不去穿越，认为过去的一切造就了现在的我", effects: { Rationality: 0.4, Discipline: 0.5, Idealism: 0.2 } }
    ]
  },
  {
    id: 79,
    text: "你认为‘幸福’的真谛在于？",
    options: [
      { text: "内心的平静与对自己生活的绝对掌控", effects: { Discipline: 0.5, Rationality: 0.4, Social: -0.3 } },
      { text: "不断的挑战与战胜困难后的成就感", effects: { Boldness: 0.5, Rationality: 0.3, Discipline: 0.2 } },
      { text: "被爱包围，并拥有能为之付出爱的人", effects: { Empathy: 0.5, Social: 0.5, Idealism: 0.3 } },
      { text: "追求并接近那个永恒的、完美的真理", effects: { Idealism: 0.5, Rationality: 0.5, Discipline: 0.4 } }
    ]
  },
  {
    id: 80,
    text: "如果你可以给全人类留下一句遗言，你会说？",
    options: [
      { text: "‘保持理智，永不放弃思考。’", effects: { Rationality: 0.5, Discipline: 0.4, Social: -0.2 } },
      { text: "‘去爱吧，就像从未受过伤一样。’", effects: { Empathy: 0.5, Social: 0.5, Idealism: 0.4 } },
      { text: "‘游戏才刚刚开始。’", effects: { Boldness: 0.5, Idealism: 0.4, Social: 0.3 } },
      { text: "‘真相就在你我之间。’", effects: { Rationality: 0.4, Idealism: 0.5, Boldness: 0.2 } }
    ]
  }
];
