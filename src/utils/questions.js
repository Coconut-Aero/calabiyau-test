/**
 * 卡拉彼丘人格测试题（重构版）
 * 设计原则：
 * - 每个选项都包含收益与代价，避免净正向堆叠
 * - 补强 Social / Idealism 的竞争力
 * - Boldness 表现为在不确定中推进，而非单纯鲁莽
 * - 控制 Rationality / Discipline 的结构性霸权
 */

export const QUESTIONS = [
  // ==========================================
  // 【第一部分】日常习惯与行为模式 (1-16)
  // ==========================================
  {
    id: 1,
    text: "你习惯用什么样的方式开始新的一天？",
    options: [
      { text: "制定详细的日程表，按计划一项项完成", scores: { Discipline: 3, Boldness: -2, Social: -1 } },
      { text: "看当时的状态和心情，边做边调整节奏", scores: { Boldness: 2, Discipline: -2, Rationality: -1 } },
      { text: "先看看有没有人找你，优先回应人与事", scores: { Social: 3, Rationality: -1, Empathy: 1 } },
      { text: "先想清楚今天最值得投入的意义是什么", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 2,
    text: "你的工作台/书桌通常是什么状态？",
    options: [
      { text: "所有物品分类摆放，缺什么一眼能找到", scores: { Rationality: 2, Discipline: 2, Empathy: -1, Boldness: -1 } },
      { text: "有点乱，但我知道每样东西大概在哪", scores: { Boldness: 2, Discipline: -2, Rationality: -1 } },
      { text: "会放照片、手办或纪念物，让空间更有温度", scores: { Idealism: 2, Empathy: 1, Rationality: -2 } },
      { text: "会留一些方便同伴交流或共用的东西", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 3,
    text: "周末突然多出半天自由时间，你会？",
    options: [
      { text: "约上朋友见面聊天，一起消磨这段时间", scores: { Social: 3, Discipline: -1 } },
      { text: "一个人待着，做只属于自己的事", scores: { Idealism: 2, Social: -2, Empathy: -1 } },
      { text: "把之前落下的任务补一补，免得之后拖着", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "临时起意出门逛逛，看看会遇到什么", scores: { Boldness: 3, Discipline: -3 } }
    ]
  },
  {
    id: 4,
    text: "遇到一个很难缠的问题，你会先？",
    options: [
      { text: "查资料、列方案，先把结构理清", scores: { Rationality: 3, Empathy: -2, Boldness: -1 } },
      { text: "找有经验的人聊聊，借别人的视角破局", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "先放一边，让自己等到更有感觉的时候", scores: { Idealism: 2, Discipline: -2, Rationality: -1 } },
      { text: "先试一版，错了再修，不想卡太久", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } }
    ]
  },
  {
    id: 5,
    text: "你通常以什么方式保存重要的资料或回忆？",
    options: [
      { text: "分门别类整理归档，之后查找最省事", scores: { Discipline: 2, Rationality: 2, Boldness: -2 } },
      { text: "先随手记下来，之后再慢慢补", scores: { Boldness: 2, Discipline: -2, Rationality: -1 } },
      { text: "存在大家都能调取的地方，方便共享", scores: { Social: 2, Rationality: -1, Empathy: 1 } },
      { text: "保留有情绪价值的实体纪念物", scores: { Empathy: 2, Idealism: 1, Rationality: -2 } }
    ]
  },
  {
    id: 6,
    text: "如果让你选择一种技能长期学习，你会选？",
    options: [
      { text: "能稳定解决现实问题的专业技术", scores: { Rationality: 3, Idealism: -2, Empathy: -1 } },
      { text: "能表达情绪和审美的艺术技能", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } },
      { text: "能带动团队、影响他人的领导力", scores: { Social: 2, Boldness: 1, Rationality: -1 } },
      { text: "能挑战极限、逼自己跨出去的技能", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } }
    ]
  },
  {
    id: 7,
    text: "你更倾向于什么样的穿衣风格？",
    options: [
      { text: "简洁实用，适合多数场合", scores: { Discipline: 2, Rationality: 1, Idealism: -2 } },
      { text: "有明显个性，别人一眼就能认出来", scores: { Boldness: 2, Idealism: 1, Discipline: -2 } },
      { text: "舒适优先，自己待着也要自在", scores: { Empathy: 2, Social: -1, Rationality: -2 } },
      { text: "能和场合、圈子自然融合的风格", scores: { Social: 2, Rationality: -1, Idealism: 1 } }
    ]
  },
  {
    id: 8,
    text: "当你特别想要某样东西时，你会？",
    options: [
      { text: "做预算、等时机，确认值得再入手", scores: { Discipline: 2, Rationality: 1, Boldness: -2 } },
      { text: "想办法尽快拿到，之后再处理代价", scores: { Boldness: 3, Discipline: -3 } },
      { text: "先想它是不是和自己真正想过的生活一致", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "拿去和身边人讨论，听听大家怎么看", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 9,
    text: "你通常如何处理未读的消息通知？",
    options: [
      { text: "尽快回复，不想让对方一直等", scores: { Empathy: 3, Social: 1, Rationality: -2, Discipline: -1 } },
      { text: "看到就清掉，不让未读越积越多", scores: { Discipline: 3, Boldness: -2, Social: -1 } },
      { text: "有空再回，灵感到了自然会处理", scores: { Boldness: 2, Discipline: -2, Social: -1 } },
      { text: "只回真正重要的内容，其他不急", scores: { Rationality: 3, Empathy: -2, Social: -1 } }
    ]
  },
  {
    id: 10,
    text: "你更喜欢在什么时间段工作或学习？",
    options: [
      { text: "早晨，头脑清醒，容易进入秩序", scores: { Discipline: 2, Rationality: 1, Boldness: -2 } },
      { text: "夜里，安静时更容易沉到自己的世界里", scores: { Idealism: 2, Social: -2, Discipline: -1 } },
      { text: "看状态，什么时候有冲劲就什么时候做", scores: { Boldness: 2, Discipline: -2, Rationality: -1 } },
      { text: "和别人一起推进时，最容易被带动起来", scores: { Social: 3, Rationality: -1 } }
    ]
  },
  {
    id: 11,
    text: "面对一个需要长期坚持的目标，你会？",
    options: [
      { text: "拆成阶段计划，稳稳推进", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "先冲一波，把最难的部分先打穿", scores: { Boldness: 3, Discipline: -3 } },
      { text: "不断提醒自己这件事为什么值得坚持", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } },
      { text: "找人一起走，靠连接和互相监督撑住", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 12,
    text: "你通常如何做决定？",
    options: [
      { text: "把信息收集够，再权衡利弊", scores: { Rationality: 3, Empathy: -2, Boldness: -1 } },
      { text: "感觉时机到了就拍板，不想无限拖延", scores: { Boldness: 2, Discipline: -1, Rationality: -2 } },
      { text: "会听重要的人怎么想，再整理成自己的判断", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "先确认这件事是否符合自己相信的东西", scores: { Idealism: 3, Rationality: -2, Social: -1 } }
    ]
  },
  {
    id: 13,
    text: "当你需要学习新东西时，你会？",
    options: [
      { text: "系统学，从底层逻辑开始打牢", scores: { Rationality: 2, Discipline: 1, Boldness: -2 } },
      { text: "先上手，在行动里把规律摸出来", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "找老师或前辈带，借经验走得更快", scores: { Social: 2, Empathy: 1, Boldness: -1 } },
      { text: "先看整体图景，确定它和自己的兴趣有没有共鸣", scores: { Idealism: 2, Rationality: -1, Discipline: -1, Empathy: 1 } }
    ]
  },
  {
    id: 14,
    text: "你更倾向于哪种消费方式？",
    options: [
      { text: "量入为出，消费前先把底线算清", scores: { Discipline: 2, Rationality: 1, Boldness: -2 } },
      { text: "喜欢就买，机会和心气过去了就没意思了", scores: { Boldness: 3, Discipline: -3 } },
      { text: "愿意为审美、体验和情绪价值多花一点", scores: { Idealism: 2, Empathy: 1, Rationality: -2 } },
      { text: "会参考朋友的使用感受，再决定值不值得", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 15,
    text: "你通常如何记录重要的事情？",
    options: [
      { text: "用清单或日程写清楚，随时可追踪", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "丢进备忘录，先保证自己随时能抓到", scores: { Rationality: 2, Social: -1, Empathy: -1, Discipline: 1 } },
      { text: "记在心里，关键时刻再调动直觉", scores: { Boldness: 2, Discipline: -2, Rationality: -1 } },
      { text: "会告诉信任的人，让关系一起成为提醒系统", scores: { Social: 3, Rationality: -1 } }
    ]
  },
  {
    id: 16,
    text: "面对突然多出来的空闲时间，你会？",
    options: [
      { text: "列一个待办，把拖着的事清掉", scores: { Discipline: 3, Boldness: -2, Social: -1 } },
      { text: "先让自己休息，别把状态耗空", scores: { Empathy: 2, Rationality: -2, Discipline: -1 } },
      { text: "临时做点新鲜的事，给日常一点偏航", scores: { Boldness: 3, Discipline: -3 } },
      { text: "联系很久没见的人，把这段时间还给关系", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },

  // ==========================================
  // 【第二部分】社交互动与人际关系 (17-32)
  // ==========================================
  {
    id: 17,
    text: "在社交场合中，你通常扮演什么角色？",
    options: [
      { text: "倾听和观察，确认气氛后再进入", scores: { Empathy: 2, Boldness: -1, Rationality: -1, Social: 1 } },
      { text: "带气氛的人，负责把场子点起来", scores: { Social: 2, Boldness: 1, Discipline: -1 } },
      { text: "照顾大家状态的人，不想让谁被落下", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "有目的地交流，把重要信息和关系串起来", scores: { Rationality: 2, Social: 1, Empathy: -2, Idealism: -1 } }
    ]
  },
  {
    id: 18,
    text: "朋友向你倾诉烦恼时，你通常会？",
    options: [
      { text: "先让他把情绪说完，再给陪伴", scores: { Empathy: 3, Rationality: -2, Discipline: -1 } },
      { text: "分析问题，帮他尽快看到解决路径", scores: { Rationality: 3, Empathy: -3 } },
      { text: "拉他出去做点什么，别一直困在情绪里", scores: { Boldness: 2, Social: 1, Discipline: -2 } },
      { text: "把话题带回你们之间的信任，确认他不是一个人", scores: { Social: 2, Idealism: 1, Rationality: -1 } }
    ]
  },
  {
    id: 19,
    text: "你更愿意和什么样的人深交？",
    options: [
      { text: "价值观相似，能理解彼此坚持的人", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "能提供不同视角，让我不断修正判断的人", scores: { Rationality: 2, Social: 1, Empathy: -2, Idealism: -1 } },
      { text: "坦率直接，不用猜来猜去的人", scores: { Boldness: 2, Empathy: -1, Discipline: -1, Social: 1 } },
      { text: "愿意经常互动、一起把生活过热闹的人", scores: { Social: 3, Rationality: -1 } }
    ]
  },
  {
    id: 20,
    text: "当你和别人的意见不一致时，你会？",
    options: [
      { text: "继续推进自己的判断，先把立场顶住", scores: { Boldness: 3, Empathy: -2, Discipline: -1 } },
      { text: "尊重对方的感受，先保住关系再谈观点", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "对照事实和逻辑，谁更合理就按谁的", scores: { Rationality: 3, Empathy: -3 } },
      { text: "先放一放，等彼此都能更冷静地讨论", scores: { Discipline: 2, Social: 1, Boldness: -2, Idealism: -1 } }
    ]
  },
  {
    id: 21,
    text: "你更喜欢什么样的友谊模式？",
    options: [
      { text: "经常见面聊天，彼此都参与对方的日常", scores: { Social: 3, Discipline: -1 } },
      { text: "不必高频联系，但关键时刻绝不掉线", scores: { Idealism: 2, Social: -1, Rationality: -1, Empathy: 1 } },
      { text: "一起做事，在并肩行动里建立默契", scores: { Boldness: 1, Social: 2, Discipline: -1 } },
      { text: "保持边界，彼此尊重各自的节奏", scores: { Rationality: 2, Social: -2, Empathy: -1 } }
    ]
  },
  {
    id: 22,
    text: "当别人取得成就时，你的真实感受是？",
    options: [
      { text: "真心替他高兴，也愿意表达祝福", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "想知道他是怎么做到的，好借来用", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "会被激起竞争心，想尽快证明自己也能做到", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } },
      { text: "更在意这件事是否说明他走在自己相信的路上", scores: { Idealism: 3, Rationality: -2, Social: -1 } }
    ]
  },
  {
    id: 23,
    text: "你更倾向于如何表达感谢？",
    options: [
      { text: "当面说出来，让对方知道你真的记得", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "用实际回报，让感谢变成可见的行动", scores: { Discipline: 2, Empathy: 1, Boldness: -1, Idealism: -1 } },
      { text: "先记在心里，等更重要的时刻再还回去", scores: { Idealism: 2, Social: -1, Rationality: -1, Empathy: 1 } },
      { text: "用正式的信息表达清楚，不想让情绪盖过重点", scores: { Rationality: 2, Social: -1, Empathy: -1, Discipline: 1 } }
    ]
  },
  {
    id: 24,
    text: "面对一个你不太喜欢的人，你会？",
    options: [
      { text: "保持礼貌，但只维持必要距离", scores: { Discipline: 2, Social: -1, Empathy: -1, Boldness: -1 } },
      { text: "试着多了解一点，不想太快把人定死", scores: { Empathy: 3, Idealism: 1, Rationality: -2, Boldness: -1 } },
      { text: "直接划清边界，省得消耗彼此", scores: { Boldness: 3, Empathy: -2, Social: -1 } },
      { text: "只要目标一致，合作时照样能专业配合", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Social: -1 } }
    ]
  },
  {
    id: 25,
    text: "你更喜欢和朋友一起做什么？",
    options: [
      { text: "聊天分享近况和感受", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "一起完成某件事，做完比聊完更踏实", scores: { Discipline: 2, Social: 1, Boldness: -1, Idealism: -1 } },
      { text: "找刺激、找乐子，最好能留下故事", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "安静地共处，各做各的也能感觉被理解", scores: { Idealism: 2, Social: -1, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 26,
    text: "当朋友做了让你失望的事，你会？",
    options: [
      { text: "直接沟通，把不舒服说清楚", scores: { Boldness: 2, Social: 1, Empathy: -2, Discipline: -1 } },
      { text: "先给他解释的机会，确认原因再判断", scores: { Empathy: 2, Rationality: 1, Boldness: -2, Social: -1 } },
      { text: "不急着摊牌，但会慢慢把距离拉开", scores: { Discipline: 2, Social: -2, Empathy: -1 } },
      { text: "先看这段关系值不值得继续投入", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } }
    ]
  },
  {
    id: 27,
    text: "你更倾向于如何处理冲突？",
    options: [
      { text: "当场说开，误会越拖越难收", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } },
      { text: "先冷静，再挑双方都能听进去的时候谈", scores: { Discipline: 2, Empathy: 1, Boldness: -2, Social: -1 } },
      { text: "先让对方把话讲完，避免把人逼到角落", scores: { Empathy: 3, Social: 1, Rationality: -2, Boldness: -1 } },
      { text: "把争点抽出来，只处理真正关键的问题", scores: { Rationality: 3, Empathy: -2, Social: -1 } }
    ]
  },
  {
    id: 28,
    text: "你更喜欢什么样的团队氛围？",
    options: [
      { text: "高效务实，大家按职责推进", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Social: -1 } },
      { text: "轻松活跃，成员之间像朋友一样", scores: { Social: 3, Rationality: -1 } },
      { text: "彼此照顾，能感觉到自己被放在心上", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "有挑战和创造感，像在一起做一件会留下痕迹的事", scores: { Idealism: 2, Boldness: 1, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 29,
    text: "当别人请求你帮忙时，你会？",
    options: [
      { text: "先判断自己能不能真的帮上，再答应", scores: { Rationality: 3, Empathy: -2, Social: -1 } },
      { text: "只要还有余力，通常都会伸手", scores: { Empathy: 3, Rationality: -2, Discipline: -1 } },
      { text: "更愿意帮关系近、彼此投入过的人", scores: { Social: 2, Idealism: 1, Rationality: -1 } },
      { text: "如果时机合适，我愿意试着扛一下超出范围的事", scores: { Boldness: 2, Empathy: 1, Discipline: -2, Rationality: -1 } }
    ]
  },
  {
    id: 30,
    text: "你更喜欢用什么方式表达自己？",
    options: [
      { text: "直接说，尽量把意思一次讲明白", scores: { Boldness: 2, Social: 1, Empathy: -2, Discipline: -1 } },
      { text: "用行动表达，做出来比说出来更可靠", scores: { Discipline: 2, Rationality: 1, Social: -1, Idealism: -1 } },
      { text: "借文字、图像或作品，让情绪慢慢渗出来", scores: { Idealism: 2, Empathy: 1, Rationality: -2, Boldness: -1 } },
      { text: "看对象和场景切换方式，重点是让人接得住", scores: { Social: 2, Rationality: -1, Empathy: 1 } }
    ]
  },
  {
    id: 31,
    text: "你更在意别人的什么？",
    options: [
      { text: "他有没有自己的原则和底线", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "他做事是否可靠，能不能一起成事", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Idealism: -1 } },
      { text: "他会不会尊重人、顾及感受", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "他是否有趣，能不能激发出新的互动", scores: { Social: 2, Boldness: 1, Discipline: -1 } }
    ]
  },
  {
    id: 32,
    text: "当你在群体中时，你更倾向于？",
    options: [
      { text: "尽量和大家合上拍，不想让气氛断掉", scores: { Social: 3, Rationality: -1 } },
      { text: "保持自己的节奏，不轻易被卷进去", scores: { Rationality: 2, Social: -2, Empathy: -1 } },
      { text: "观察局势，确认哪里需要被推动", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Social: -1 } },
      { text: "在关键时刻主动站出来，给人一个方向", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } }
    ]
  },

  // ==========================================
  // 【第三部分】工作态度与决策风格 (33-48)
  // ==========================================
  {
    id: 33,
    text: "面对一个复杂的工作任务，你会？",
    options: [
      { text: "拆成小步骤，按顺序完成", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "先开始做，边推进边修正路线", scores: { Boldness: 3, Discipline: -3 } },
      { text: "拉上合适的人一起做，效率会更高", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "先想有没有更优雅、更有突破性的做法", scores: { Idealism: 2, Rationality: -1, Discipline: -1, Boldness: 1 } }
    ]
  },
  {
    id: 34,
    text: "你更倾向于什么样的工作方式？",
    options: [
      { text: "按流程和规则推进，稳定最重要", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Idealism: -1 } },
      { text: "灵活应变，现场变化比计划更值得信", scores: { Boldness: 3, Discipline: -3 } },
      { text: "和团队持续对齐，过程里不断交换信息", scores: { Social: 3, Rationality: -1 } },
      { text: "追求创新解法，不想只复制已有答案", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 35,
    text: "当你和上级意见不合时，你会？",
    options: [
      { text: "先执行，再把不同看法留在心里", scores: { Discipline: 2, Social: 1, Boldness: -2, Idealism: -1 } },
      { text: "找机会正面提出，哪怕现场会有张力", scores: { Boldness: 3, Empathy: -2, Discipline: -1 } },
      { text: "先试着理解他背后的考量，再判断要不要争", scores: { Empathy: 2, Rationality: -1, Boldness: -1, Social: 1 } },
      { text: "把逻辑和证据整理好，用更完整的论证去沟通", scores: { Rationality: 3, Empathy: -2, Social: -1 } }
    ]
  },
  {
    id: 36,
    text: "你更喜欢什么样的任务？",
    options: [
      { text: "目标和流程清晰，执行起来很稳", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "有不确定性，需要临场判断和破局", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "能直接帮助别人，让成果落到人身上", scores: { Empathy: 3, Rationality: -2, Social: -1 } },
      { text: "有创意空间，能做出自己的表达", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 37,
    text: "当你犯错时，你会？",
    options: [
      { text: "先承认，再尽快补救回来", scores: { Boldness: 1, Discipline: 1, Empathy: 1, Idealism: -1, Social: -1, Rationality: -1 } },
      { text: "复盘原因，避免同类问题再出现", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Boldness: -1 } },
      { text: "嘴上不一定认，但会用行动把局面扳回去", scores: { Boldness: 2, Discipline: -1, Empathy: -1, Social: -1, Rationality: 1 } },
      { text: "先看这件事对别人造成了多大影响，再决定优先处理什么", scores: { Empathy: 2, Rationality: -1, Discipline: -1, Social: 1 } }
    ]
  },
  {
    id: 38,
    text: "你更看重工作的什么方面？",
    options: [
      { text: "稳定和安全感，能持续累积", scores: { Discipline: 2, Boldness: -2, Idealism: -1 } },
      { text: "成长和挑战，最好不断逼出新版本的自己", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } },
      { text: "意义感，知道自己为什么在做这件事", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } },
      { text: "合作氛围，愿意和谁一起做决定了我能走多远", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 39,
    text: "当你负责一个项目时，你会？",
    options: [
      { text: "把计划和节点列细，尽量减少偏差", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Empathy: -1 } },
      { text: "抓关键环节，其他地方允许边跑边调", scores: { Rationality: 2, Boldness: 1, Empathy: -2, Discipline: -1 } },
      { text: "充分授权，让团队成员各自发光", scores: { Social: 2, Empathy: 1, Discipline: -1 } },
      { text: "亲自盯住重要细节，宁愿累一点也想把作品感做出来", scores: { Idealism: 2, Discipline: 1, Social: -1, Boldness: -1 } }
    ]
  },
  {
    id: 40,
    text: "面对压力时，你会？",
    options: [
      { text: "列出解决顺序，按部就班处理", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Empathy: -1 } },
      { text: "找人说一说，不想一个人硬扛", scores: { Social: 2, Empathy: 1, Discipline: -1 } },
      { text: "先离开现场换口气，恢复了再回来冲", scores: { Boldness: 2, Discipline: -2, Rationality: -1 } },
      { text: "追问压力到底在提醒我什么，不想只做表面止痛", scores: { Idealism: 2, Rationality: -1, Discipline: -1, Empathy: 1 } }
    ]
  },
  {
    id: 41,
    text: "你更喜欢什么样的同事？",
    options: [
      { text: "专业强、判断稳，合作成本低", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Social: -1 } },
      { text: "相处舒服，不会让团队一直紧绷", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "有想法，能带来意料之外的灵感", scores: { Idealism: 2, Boldness: 1, Rationality: -2, Discipline: -1 } },
      { text: "真碰上事敢往前顶，不会只停在讨论", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } }
    ]
  },
  {
    id: 42,
    text: "当你发现同事的问题时，你会？",
    options: [
      { text: "直接指出来，让问题尽快止损", scores: { Boldness: 2, Rationality: 1, Empathy: -2, Social: -1 } },
      { text: "私下提醒，尽量保住他的体面", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "先看影响范围，值得介入再出手", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Social: -1 } },
      { text: "拉他一起修，不想把问题变成单向指责", scores: { Social: 2, Empathy: 1, Boldness: -1 } }
    ]
  },
  {
    id: 43,
    text: "你更倾向于如何学习新知识？",
    options: [
      { text: "系统学习，先把基础搭牢", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Idealism: -1 } },
      { text: "实践中摸索，遇坑才记得深", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "向有经验的人请教，少走弯路", scores: { Social: 2, Empathy: 1, Boldness: -1 } },
      { text: "自己探索出一套适合自己的路径", scores: { Idealism: 2, Boldness: 1, Rationality: -2, Social: -1 } }
    ]
  },
  {
    id: 44,
    text: "当你取得成绩时，你更倾向于？",
    options: [
      { text: "继续往前，不想太早沉浸在掌声里", scores: { Discipline: 2, Social: -1, Idealism: -1, Boldness: -1, Rationality: 1 } },
      { text: "和重要的人分享喜悦，把这件事变成共同的高光", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "把经验提炼出来，下一次要做得更漂亮", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "认真奖励自己，让这份努力有被庆祝的价值", scores: { Idealism: 2, Empathy: 1, Discipline: -1, Rationality: -1 } }
    ]
  },
  {
    id: 45,
    text: "你更喜欢什么样的领导风格？",
    options: [
      { text: "目标明确，但给人足够自主空间", scores: { Boldness: 1, Rationality: 1, Social: -1, Empathy: -1 } },
      { text: "以身作则，自己先把标准立起来", scores: { Discipline: 2, Empathy: 1, Boldness: -2, Idealism: -1 } },
      { text: "会关心成员成长，不把人只当资源", scores: { Empathy: 3, Social: 1, Rationality: -2, Discipline: -1 } },
      { text: "敢拍板，也能在关键时刻扛责任", scores: { Boldness: 2, Rationality: 1, Empathy: -2, Social: -1 } }
    ]
  },
  {
    id: 46,
    text: "当你对工作感到倦怠时，你会？",
    options: [
      { text: "调整节奏，先让自己恢复基本能量", scores: { Empathy: 2, Discipline: -1, Rationality: -1, Boldness: -1, Idealism: 1 } },
      { text: "找新的挑战，把热度重新点燃", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } },
      { text: "和同伴聊聊，看看是不是只是自己卡住了", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "重新确认这份工作和我想成为什么人还有没有关系", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 47,
    text: "你更倾向于如何做长期规划？",
    options: [
      { text: "制定清晰目标和节点，按阶段推进", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "有个方向就够了，路径可以随时改", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "先确认这条路是不是我真正想走的", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } },
      { text: "和重要的人一起讨论，让规划能容纳关系", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 48,
    text: "当你面对多个任务时，你会？",
    options: [
      { text: "按轻重缓急排序，优先做最关键的", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Boldness: -1 } },
      { text: "并行推进，靠状态和速度把节奏带起来", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "一件一件做，完成感会让我更稳", scores: { Discipline: 3, Boldness: -2, Social: -1 } },
      { text: "把合适的部分分给别人，一起消化压力", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },

  // ==========================================
  // 【第四部分】价值观与人生态度 (49-64)
  // ==========================================
  {
    id: 49,
    text: "你更认同以下哪种人生态度？",
    options: [
      { text: "活在当下，重要的是把此刻烧得够亮", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "目标明确，过程是为了结果服务", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Idealism: -1 } },
      { text: "顺势而行，别把自己逼成只会完成任务的人", scores: { Empathy: 1, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "帮助他人，本身就是我想活成的样子", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } }
    ]
  },
  {
    id: 50,
    text: "你更看重什么品质？",
    options: [
      { text: "守信，答应了就尽量做到", scores: { Discipline: 2, Idealism: 1, Boldness: -2 } },
      { text: "聪明，能在复杂局面里找到解法", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "温柔，哪怕强大也不会轻易伤人", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "果断，认定了就敢承担后果", scores: { Boldness: 3, Discipline: -2, Empathy: -1 } }
    ]
  },
  {
    id: 51,
    text: "面对失败，你会？",
    options: [
      { text: "总结教训，调整后继续试", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Idealism: -1 } },
      { text: "换个方向，也许执着本身就不适合我", scores: { Boldness: 1, Idealism: 2, Discipline: -2, Rationality: -1 } },
      { text: "找人倾诉，把卡住的情绪先流动起来", scores: { Social: 2, Empathy: 1, Discipline: -1 } },
      { text: "接受它进入生命的一部分，不让它定义全部的我", scores: { Idealism: 3, Rationality: -2, Boldness: -1 } }
    ]
  },
  {
    id: 52,
    text: "你更相信什么？",
    options: [
      { text: "自己的能力和意志，局面总能被推开", scores: { Boldness: 2, Discipline: 1, Empathy: -2, Social: -1 } },
      { text: "数据和事实，情绪会骗人但证据不会", scores: { Rationality: 3, Empathy: -3 } },
      { text: "缘分和命运，很多答案不是算出来的", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } },
      { text: "人心和感情，真正能改变人的还是连接", scores: { Empathy: 2, Social: 1, Rationality: -2 } }
    ]
  },
  {
    id: 53,
    text: "你更倾向于追求什么？",
    options: [
      { text: "个人成就，想知道自己究竟能走多远", scores: { Boldness: 2, Rationality: 1, Empathy: -2, Social: -1 } },
      { text: "内心平静，能和自己相处得舒服", scores: { Idealism: 2, Empathy: 1, Boldness: -1, Discipline: -1 } },
      { text: "帮助他人，让自己的存在对别人有重量", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "知识和理解力，想看清事物真实的样子", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } }
    ]
  },
  {
    id: 54,
    text: "你更认同哪种处世哲学？",
    options: [
      { text: "保持警惕，别把自己交给天真", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Idealism: -1 } },
      { text: "以诚待人，至少别先背叛自己的心", scores: { Idealism: 2, Empathy: 1, Rationality: -2, Boldness: -1 } },
      { text: "先保全自己，再谈别的", scores: { Boldness: 2, Social: -2, Empathy: -1, Idealism: -1 } },
      { text: "人生有限，值得的体验就别错过", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } }
    ]
  },
  {
    id: 55,
    text: "面对道德困境，你会？",
    options: [
      { text: "遵守规则，不想让底线被自己先踩坏", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "具体情况具体分析，结果比形式更重要", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "跟着内心走，即使会付出代价", scores: { Boldness: 1, Idealism: 2, Discipline: -2, Rationality: -1 } },
      { text: "尽量顾到相关的人，别让谁被轻易牺牲", scores: { Empathy: 2, Social: 1, Rationality: -2, Boldness: -1 } }
    ]
  },
  {
    id: 56,
    text: "你更看重外在还是内在？",
    options: [
      { text: "内在更重要，外在只是表层包装", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "外在就是第一层信息，不能假装它不重要", scores: { Social: 2, Rationality: 1, Idealism: -2, Empathy: -1 } },
      { text: "两者都要兼顾，失衡就会影响判断", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Boldness: -1 } },
      { text: "看场景切换重点，真正成熟的是会调度", scores: { Boldness: 1, Social: 1, Idealism: -1, Discipline: -1, Rationality: 1, Empathy: -1 } }
    ]
  },
  {
    id: 57,
    text: "你更倾向于如何定义成功？",
    options: [
      { text: "达成目标，让能力被现实验证", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Idealism: -1 } },
      { text: "问心无愧，没有背叛真正相信的东西", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "生活有温度，重要关系没有被赢面吞掉", scores: { Empathy: 2, Social: 1, Rationality: -2, Discipline: -1 } },
      { text: "能影响更多人，把个人轨迹放大成公共意义", scores: { Social: 2, Idealism: 1, Rationality: -1 } }
    ]
  },
  {
    id: 58,
    text: "面对不确定性，你会？",
    options: [
      { text: "尽量准备充分，把风险压到能控范围内", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Idealism: -1 } },
      { text: "先进去走两步，很多答案是在动起来以后才有", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "接受有些事本来就无法完全掌控", scores: { Idealism: 2, Empathy: 1, Rationality: -2, Discipline: -1 } },
      { text: "找可靠的人商量，让判断不只靠自己", scores: { Social: 2, Empathy: 1, Rationality: -1 } }
    ]
  },
  {
    id: 59,
    text: "你更看重什么类型的自由？",
    options: [
      { text: "思想自由，至少我的判断要属于我自己", scores: { Idealism: 2, Rationality: 1, Social: -2, Empathy: -1 } },
      { text: "行动自由，想做就做才算真正活着", scores: { Boldness: 3, Discipline: -3 } },
      { text: "关系中的自由，不必为了取悦别人失去自己", scores: { Empathy: 1, Idealism: 1, Social: -1, Rationality: -1, Boldness: 1, Discipline: -1 } },
      { text: "资源上的自由，底气能减少很多被动", scores: { Rationality: 2, Discipline: 1, Idealism: -2, Empathy: -1 } }
    ]
  },
  {
    id: 60,
    text: "你更倾向于如何处理遗憾？",
    options: [
      { text: "提炼教训，不想下次再输在同一个点上", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "接受它，因为人生本来就不是完整收集", scores: { Idealism: 2, Empathy: 1, Rationality: -2, Discipline: -1 } },
      { text: "只要还有机会，就尽量补回来", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "找人聊一聊，让遗憾别在心里独自发酵", scores: { Social: 2, Empathy: 1, Discipline: -1 } }
    ]
  },
  {
    id: 61,
    text: "你更认同哪种正义观？",
    options: [
      { text: "程序正义，规则是多数人最后的保护网", scores: { Discipline: 2, Rationality: 1, Empathy: -2, Boldness: -1 } },
      { text: "结果正义，最后有没有真正改变局面更重要", scores: { Rationality: 2, Boldness: 1, Empathy: -2, Idealism: -1 } },
      { text: "道义正义，就算吃亏也不能失掉该守的东西", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "关系中的正义，别让弱的人总是先被碾过去", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } }
    ]
  },
  {
    id: 62,
    text: "你更看重什么类型的知识？",
    options: [
      { text: "实用的，能立刻改善现实处境", scores: { Rationality: 3, Idealism: -2, Empathy: -1 } },
      { text: "深刻的，能改变我看世界的方式", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } },
      { text: "有趣的，能让我不断打开新的可能性", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "能真正帮助人的，让知识最终回到生活里", scores: { Empathy: 2, Social: 1, Rationality: -2 } }
    ]
  },
  {
    id: 63,
    text: "面对传统和规则，你会？",
    options: [
      { text: "尊重它们，因为秩序本身就有价值", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "先看是否合理，有用才值得继续", scores: { Rationality: 3, Empathy: -2, Social: -1 } },
      { text: "愿意挑战旧框架，不想把未来活成复印件", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "更在意它是否还照顾得到人，而不是只维护形式", scores: { Empathy: 2, Idealism: 1, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 64,
    text: "你更倾向于如何面对死亡？",
    options: [
      { text: "珍惜活着的当下，把关系和体验活深一点", scores: { Empathy: 2, Idealism: 1, Rationality: -2, Discipline: -1 } },
      { text: "留下能被记住的东西，不想只是安静消失", scores: { Idealism: 2, Boldness: 1, Rationality: -2, Discipline: -1 } },
      { text: "接受它是规律，所以更想把有限资源用对地方", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "不把心力消耗在终点，先把眼前活满", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } }
    ]
  },

  // ==========================================
  // 【第五部分】情境反应与极端选择 (65-80)
  // ==========================================
  {
    id: 65,
    text: "如果你必须在两个都重要的东西之间选择，你会？",
    options: [
      { text: "权衡利弊，选整体收益更大的那个", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "选自己最想要的，至少之后不会怀疑自己", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "选那个对别人伤害更小的", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "先试着重新定义问题，看能不能保住两边的意义", scores: { Idealism: 2, Rationality: -1, Discipline: -1, Social: 1 } }
    ]
  },
  {
    id: 66,
    text: "当你发现一个秘密时，你会？",
    options: [
      { text: "守住它，承诺过的边界不能随意破", scores: { Discipline: 2, Idealism: 1, Social: -2, Boldness: -1 } },
      { text: "先判断它的风险，再决定要不要处理", scores: { Rationality: 3, Empathy: -2, Social: -1 } },
      { text: "会和最信任的人商量，但只在必要范围内", scores: { Social: 2, Empathy: 1, Discipline: -1 } },
      { text: "先看它会不会伤到别人，人的代价最优先", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } }
    ]
  },
  {
    id: 67,
    text: "当你和重要的人发生严重分歧时，你会？",
    options: [
      { text: "先守住自己的立场，不想因为关系就放弃判断", scores: { Boldness: 2, Idealism: 1, Empathy: -2, Social: -1 } },
      { text: "努力理解对方，尽量把关系留在桌上", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "先暂停，让双方离开情绪高点再谈", scores: { Discipline: 2, Social: 1, Boldness: -2, Empathy: -1 } },
      { text: "找可信的第三方介入，避免两个人越谈越窄", scores: { Social: 3, Rationality: -1 } }
    ]
  },
  {
    id: 68,
    text: "当你面对一个艰难的决定时，你会？",
    options: [
      { text: "先把信息补齐，不想靠模糊感觉下注", scores: { Rationality: 3, Empathy: -2, Boldness: -1 } },
      { text: "时机一到就下决定，拖久了反而会错失窗口", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "会去听重要的人怎么想，避免只困在自己的回路里", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "先问这件事会把我带向怎样的人生", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 69,
    text: "当你发现自己在某个领域不如别人时，你会？",
    options: [
      { text: "加倍练，先把差距一点点追回来", scores: { Discipline: 2, Boldness: 1, Empathy: -2, Idealism: -1 } },
      { text: "接受长短板并存，把力气投到更适合自己的方向", scores: { Idealism: 2, Empathy: 1, Discipline: -1, Boldness: -1 } },
      { text: "直接去学对方的强项，能借就借", scores: { Rationality: 2, Social: 1, Empathy: -2 } },
      { text: "不太跟别人比，我更想守住自己的节奏", scores: { Empathy: 1, Idealism: 1, Boldness: -1, Rationality: -1, Social: -1, Discipline: 1 } }
    ]
  },
  {
    id: 70,
    text: "当你需要做出牺牲时，你会？",
    options: [
      { text: "如果是为了重要的人，我愿意先让出一部分自己", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "先算值不值得，牺牲不是自动高尚", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "会尽量找第三种办法，不想轻易接受非此即彼", scores: { Boldness: 2, Rationality: 1, Discipline: -2, Empathy: -1 } },
      { text: "要看它是否服务于我真正认同的意义", scores: { Idealism: 3, Rationality: -2, Social: -1 } }
    ]
  },
  {
    id: 71,
    text: "当你面对一个强大的对手时，你会？",
    options: [
      { text: "正面迎上去，至少不能先在气势上输", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "研究他的弱点，用更聪明的方法赢", scores: { Rationality: 3, Empathy: -2, Boldness: -1 } },
      { text: "联合能联合的人，把单点风险摊开", scores: { Social: 3, Rationality: -1 } },
      { text: "暂时退一步，等到更值得出手的时机", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Social: -1 } }
    ]
  },
  {
    id: 72,
    text: "当你发现一个机会时，你会？",
    options: [
      { text: "先抓住入口，别让机会因为犹豫蒸发", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "评估收益和代价，确认值得再下注", scores: { Rationality: 3, Empathy: -2, Boldness: -1 } },
      { text: "会和关键的人同步，机会最好能一起放大", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "先看它是不是和我真正想走的方向一致", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 73,
    text: "当你面对一个道德模糊的情况时，你会？",
    options: [
      { text: "先守规则，至少别让局面彻底失控", scores: { Discipline: 3, Boldness: -2, Idealism: -1 } },
      { text: "看最终会让谁活得更好，结果更重要", scores: { Rationality: 3, Empathy: -2, Idealism: -1 } },
      { text: "宁愿冒点险，也想守住自己觉得对的东西", scores: { Boldness: 1, Idealism: 2, Discipline: -2, Rationality: -1 } },
      { text: "先看谁最可能被伤得最重，不想把弱者当成本", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } }
    ]
  },
  {
    id: 74,
    text: "当你需要做出长期承诺时，你会？",
    options: [
      { text: "反复确认自己能不能扛到底，再答应", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Idealism: -1 } },
      { text: "如果认定值得，就愿意先把自己投进去", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "更在乎这份承诺是否有情感和意义上的真实", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "会和相关的人反复对齐，不想只有一方在承担", scores: { Social: 2, Empathy: 1, Discipline: -1 } }
    ]
  },
  {
    id: 75,
    text: "当你面对一个无法改变的事实时，你会？",
    options: [
      { text: "接受它，然后把生活继续过下去", scores: { Discipline: 2, Empathy: 1, Boldness: -2, Idealism: -1 } },
      { text: "继续找别的出口，不想太快承认终局", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } },
      { text: "寻求支持，让自己别一个人被压垮", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "把它重新放进人生叙事里，看看它究竟改变了什么", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 76,
    text: "当你面对一个两难选择时，你会？",
    options: [
      { text: "选那个后果更可控的", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Boldness: -1 } },
      { text: "选那个以后回头看不会最遗憾的", scores: { Idealism: 2, Boldness: 1, Rationality: -2, Discipline: -1 } },
      { text: "选那个对别人伤害更小的", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "拒绝在原题里选，逼自己再找一个新解", scores: { Boldness: 2, Rationality: 1, Discipline: -2, Empathy: -1 } }
    ]
  },
  {
    id: 77,
    text: "当你面对一个强大的压力时，你会？",
    options: [
      { text: "咬住牙先顶过去，人在重压下也能长出骨头", scores: { Discipline: 2, Boldness: 1, Empathy: -2, Social: -1 } },
      { text: "主动求助，让问题在更大的系统里被分担", scores: { Social: 2, Empathy: 1, Boldness: -1 } },
      { text: "短暂撤离，等自己回到能判断的状态再战", scores: { Empathy: 2, Rationality: -1, Discipline: -1, Boldness: 1 } },
      { text: "把压力拆开，找到真正的源头去解决", scores: { Rationality: 3, Empathy: -2, Social: -1 } }
    ]
  },
  {
    id: 78,
    text: "当你面对一个不公正的情况时，你会？",
    options: [
      { text: "站出来发声，不想把沉默也算进同意里", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "按规则申诉，逼系统自己回应问题", scores: { Discipline: 2, Rationality: 1, Boldness: -2, Empathy: -1 } },
      { text: "先去扶住受影响的人，让他不是一个人扛", scores: { Empathy: 3, Rationality: -2, Boldness: -1 } },
      { text: "把人组织起来，单个人的声音太容易被吞掉", scores: { Social: 3, Rationality: -1 } }
    ]
  },
  {
    id: 79,
    text: "当你面对一个重要的机会但风险很高时，你会？",
    options: [
      { text: "算清风险，确认自己能承受再上", scores: { Rationality: 2, Discipline: 1, Empathy: -2, Boldness: -1 } },
      { text: "愿意试，哪怕失败也值那一次跃迁", scores: { Boldness: 2, Idealism: 1, Discipline: -2, Rationality: -1 } },
      { text: "会去征询关键关系的意见，不想一个人拍板", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "如果它和我真正想成为的人高度一致，我会偏向赌一把", scores: { Idealism: 3, Rationality: -2, Discipline: -1 } }
    ]
  },
  {
    id: 80,
    text: "当你回顾自己的人生时，你更在意什么？",
    options: [
      { text: "有没有做过真正有意义、能留下痕迹的事", scores: { Idealism: 3, Rationality: -2, Social: -1 } },
      { text: "有没有把想做的目标一个个兑现出来", scores: { Discipline: 2, Rationality: 1, Empathy: -2, Idealism: -1 } },
      { text: "有没有和重要的人彼此成全，而不是彼此错过", scores: { Social: 2, Empathy: 1, Rationality: -1 } },
      { text: "有没有在关键时刻真的豁出去活过一次", scores: { Boldness: 3, Discipline: -2, Rationality: -1 } }
    ]
  }
];
