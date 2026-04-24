/**
 * 卡拉彼丘人格测试题（优化版）
 * 改进方向：
 * - 避免极端化表述，使用更温和的情境描述
 * - 增加区分度：选项都合理但反映不同特质
 * - 减少社会赞许性偏误
 * - 平衡6个维度的覆盖
 * - 加入张力问题（两难选择）
 */

export const QUESTIONS = [
  // ==========================================
  // 【第一部分】日常习惯与行为模式 (1-16)
  // ==========================================
  {
    id: 1,
    text: "你习惯用什么样的方式开始新的一天？",
    options: [
      { text: "制定详细的日程表，按计划一项项完成", scores: { Discipline: 2, Rationality: 1 } },
      { text: "看当时的状态和心情，灵活安排", scores: { Boldness: 1, Discipline: -1 } },
      { text: "先处理紧急的消息和事务，其他再说", scores: { Social: 1, Empathy: 1 } },
      { text: "先安静地想一下今天最重要的目标是什么", scores: { Idealism: 1, Rationality: 1 } }
    ]
  },
  {
    id: 2,
    text: "你的工作台/书桌通常是什么状态？",
    options: [
      { text: "所有物品分类摆放，干净整洁，缺什么一眼能找到", scores: { Discipline: 2, Rationality: 1 } },
      { text: "东西有点乱，但自己知道在哪，收拾反而找不到", scores: { Boldness: -1, Rationality: 0 } },
      { text: "摆满喜欢的手办、照片等私人物品，看着很开心", scores: { Empathy: 2, Idealism: 1 } },
      { text: "尽量精简，只保留最必要的功能物品", scores: { Rationality: 2, Social: -1 } }
    ]
  },
  {
    id: 3,
    text: "周末突然多出半天自由时间，你会？",
    options: [
      { text: "约上朋友见面聊天，一起做点什么", scores: { Social: 2, Empathy: 1 } },
      { text: "一个人待着，做自己想做的事", scores: { Social: -2, Idealism: 1 } },
      { text: "把之前落下的任务、工作补一补", scores: { Discipline: 2, Rationality: 1 } },
      { text: "随便逛逛，偶遇什么算什么", scores: { Boldness: 2, Discipline: -1 } }
    ]
  },
  {
    id: 4,
    text: "遇到一个很难缠的问题，你会先？",
    options: [
      { text: "查资料、列方案，用逻辑分析来解决", scores: { Rationality: 2, Discipline: 1 } },
      { text: "找有经验的人请教，听听别人的看法", scores: { Social: 1, Empathy: 1 } },
      { text: "先放一边，过段时间再想可能有新思路", scores: { Boldness: -1, Idealism: 1 } },
      { text: "凭直觉尝试，错了再换方法", scores: { Boldness: 2, Rationality: -1 } }
    ]
  },
  {
    id: 5,
    text: "你通常以什么方式保存重要的资料或回忆？",
    options: [
      { text: "分门别类整理好，建立完整的归档系统", scores: { Discipline: 2, Rationality: 1 } },
      { text: "随手记下来，事后不一定能找到", scores: { Boldness: 1, Discipline: -2 } },
      { text: "存在云端，随时能调取查看", scores: { Rationality: 1, Social: 0 } },
      { text: "保留实体纪念品，每次看到都能想起", scores: { Empathy: 2, Idealism: 1 } }
    ]
  },
  {
    id: 6,
    text: "如果让你选择一种技能长期学习，你会选？",
    options: [
      { text: "能解决实际问题的专业技术", scores: { Rationality: 2, Discipline: 1 } },
      { text: "能表达情感、发挥创意的艺术", scores: { Idealism: 2, Empathy: 1 } },
      { text: "能影响他人、带动团队的领导力", scores: { Social: 2, Boldness: 1 } },
      { text: "能突破自我、挑战极限的极限运动", scores: { Boldness: 2, Discipline: -1 } }
    ]
  },
  {
    id: 7,
    text: "你更倾向于什么样的穿衣风格？",
    options: [
      { text: "简洁实用，适合各种场合的基础款", scores: { Discipline: 2, Rationality: 1 } },
      { text: "有个性特色，能表达自我态度", scores: { Boldness: 2, Idealism: 1 } },
      { text: "舒适为主，怎么舒服怎么来", scores: { Empathy: 1, Discipline: -1 } },
      { text: "跟随流行，时尚得体就好", scores: { Social: 1, Idealism: 0 } }
    ]
  },
  {
    id: 8,
    text: "当你特别想要某样东西时，你会？",
    options: [
      { text: "制定计划存钱，等待合适的时机购买", scores: { Discipline: 2, Rationality: 1 } },
      { text: "想办法尽快得到，哪怕需要付出更多", scores: { Boldness: 2, Discipline: -1 } },
      { text: "想想是不是真的需要，可能过段时间就不想要了", scores: { Rationality: 1, Idealism: 1 } },
      { text: "告诉身边的人，寻求他们的建议或帮助", scores: { Social: 1, Empathy: 1 } }
    ]
  },
  {
    id: 9,
    text: "你通常如何处理未读的消息通知？",
    options: [
      { text: "尽快回复，不想让对方等待太久", scores: { Social: 2, Empathy: 1 } },
      { text: "看到就回，不让未读堆积", scores: { Discipline: 2, Social: 1 } },
      { text: "有时会忘记回，过后想起来了再说", scores: { Boldness: 1, Discipline: -1 } },
      { text: "选择性回复，只处理重要或紧急的", scores: { Rationality: 2, Social: -1 } }
    ]
  },
  {
    id: 10,
    text: "你更喜欢在什么时间段工作/学习？",
    options: [
      { text: "早晨头脑清醒的时候，效率最高", scores: { Rationality: 1, Discipline: 1 } },
      { text: "夜深人静时，没人打扰能更专注", scores: { Social: -1, Idealism: 1 } },
      { text: "随时可以，看状态和任务需求", scores: { Boldness: 1, Discipline: -1 } },
      { text: "和团队一起，大家都在的时候更有动力", scores: { Social: 2, Empathy: 1 } }
    ]
  },
  {
    id: 11,
    text: "面对一个需要长期坚持的目标，你会？",
    options: [
      { text: "制定阶段性计划，每天按部就班完成", scores: { Discipline: 2, Rationality: 1 } },
      { text: "先全力冲刺，懈怠了再调整", scores: { Boldness: 2, Discipline: -1 } },
      { text: "经常回顾目标的意义，给自己打气", scores: { Idealism: 2, Empathy: 1 } },
      { text: "找志同道合的人一起，互相监督", scores: { Social: 2, Discipline: 1 } }
    ]
  },
  {
    id: 12,
    text: "你通常如何做决定？",
    options: [
      { text: "收集足够信息，权衡利弊后做出理性选择", scores: { Rationality: 2, Discipline: 1 } },
      { text: "跟随内心直觉，觉得对就去做", scores: { Boldness: 2, Rationality: -1 } },
      { text: "问问重要的人的意见，综合考虑", scores: { Social: 1, Empathy: 1 } },
      { text: "看长远影响，思考是否符合价值观", scores: { Idealism: 2, Rationality: 1 } }
    ]
  },
  {
    id: 13,
    text: "当你需要学习新东西时，你会？",
    options: [
      { text: "系统学习，从基础开始扎实掌握", scores: { Discipline: 2, Rationality: 1 } },
      { text: "边做边学，在实践中掌握要点", scores: { Boldness: 2, Rationality: -1 } },
      { text: "找老师或前辈带，能少走弯路", scores: { Social: 1, Empathy: 1 } },
      { text: "先了解整体框架，再深入感兴趣的部分", scores: { Idealism: 1, Rationality: 1 } }
    ]
  },
  {
    id: 14,
    text: "你更倾向于哪种消费方式？",
    options: [
      { text: "量入为出，有计划地储蓄和消费", scores: { Discipline: 2, Rationality: 1 } },
      { text: "喜欢就买，不太考虑以后", scores: { Boldness: 1, Discipline: -2 } },
      { text: "该花的花，但会确保基本保障", scores: { Rationality: 1, Empathy: 1 } },
      { text: "愿意为体验和兴趣投入，即使贵一点", scores: { Idealism: 2, Boldness: 1 } }
    ]
  },
  {
    id: 15,
    text: "你通常如何记录重要的事情？",
    options: [
      { text: "用笔记或清单，列得清清楚楚", scores: { Discipline: 2, Rationality: 1 } },
      { text: "存在手机备忘录或云端", scores: { Rationality: 1, Social: 0 } },
      { text: "记在心里，相信自己的记忆力", scores: { Boldness: 1, Discipline: -1 } },
      { text: "告诉信任的人，让他们帮忙提醒", scores: { Social: 2, Empathy: 1 } }
    ]
  },
  {
    id: 16,
    text: "面对突然的空闲时间，你会？",
    options: [
      { text: "列个待办清单，把之前想做的事完成", scores: { Discipline: 2, Rationality: 1 } },
      { text: "放松休息，让身心得到休息", scores: { Empathy: 1, Discipline: -1 } },
      { text: "突发奇想，做点不一样的事", scores: { Boldness: 2, Idealism: 1 } },
      { text: "联系很久没见的人，聊聊近况", scores: { Social: 2, Empathy: 1 } }
    ]
  },

  // ==========================================
  // 【第二部分】社交互动与人际关系 (17-32)
  // ==========================================
  {
    id: 17,
    text: "在社交场合中，你通常扮演什么角色？",
    options: [
      { text: "倾听者，观察大家说什么，适时参与", scores: { Social: 0, Empathy: 1 } },
      { text: "活跃气氛的人，带动话题和节奏", scores: { Social: 2, Boldness: 1 } },
      { text: "照顾大家的人，关注每个人的状态", scores: { Empathy: 2, Social: 1 } },
      { text: "有目的性地交流，建立有用的人脉", scores: { Rationality: 2, Social: 1 } }
    ]
  },
  {
    id: 18,
    text: "朋友向你倾诉烦恼时，你通常会？",
    options: [
      { text: "认真倾听，给予情感上的支持和安慰", scores: { Empathy: 2, Social: 1 } },
      { text: "分析问题，给出实际的解决方案", scores: { Rationality: 2, Empathy: -1 } },
      { text: "陪他做点开心的事，转移注意力", scores: { Boldness: 1, Empathy: 1 } },
      { text: "问清楚细节，一起想办法", scores: { Social: 1, Rationality: 1 } }
    ]
  },
  {
    id: 19,
    text: "你更愿意和什么样的人深交？",
    options: [
      { text: "价值观相似，能理解彼此的人", scores: { Idealism: 2, Social: 0 } },
      { text: "性格互补，能带来不同视角的人", scores: { Rationality: 1, Social: 1 } },
      { text: "真诚坦率，有什么说什么的人", scores: { Boldness: 2, Empathy: 1 } },
      { text: "有共同兴趣，能一起做事的人", scores: { Social: 2, Boldness: 1 } }
    ]
  },
  {
    id: 20,
    text: "当你和别人的意见不一致时，你会？",
    options: [
      { text: "坚持自己的观点，试图说服对方", scores: { Boldness: 2, Rationality: 1 } },
      { text: "尊重对方的想法，求同存异", scores: { Empathy: 2, Idealism: 1 } },
      { text: "分析谁的更合理，接受正确的", scores: { Rationality: 2, Discipline: 1 } },
      { text: "暂时搁置，以后再讨论", scores: { Social: 1, Discipline: 1 } }
    ]
  },
  {
    id: 21,
    text: "你更喜欢什么样的友谊模式？",
    options: [
      { text: "经常见面聊天，分享生活点滴", scores: { Social: 2, Empathy: 1 } },
      { text: "不常联系，但有事时全力支持", scores: { Idealism: 1, Social: 0 } },
      { text: "一起做事，在合作中加深了解", scores: { Social: 1, Boldness: 1 } },
      { text: "君子之交淡如水，保持适当距离", scores: { Rationality: 1, Social: -1 } }
    ]
  },
  {
    id: 22,
    text: "当别人取得成就时，你的真实感受是？",
    options: [
      { text: "真心祝福，也为自己加油", scores: { Empathy: 2, Idealism: 1 } },
      { text: "想知道他是怎么做到的，学习经验", scores: { Rationality: 2, Discipline: 1 } },
      { text: "有点羡慕，也想证明自己", scores: { Boldness: 1, Social: 0 } },
      { text: "没什么感觉，各有各的路", scores: { Rationality: 1, Social: -1 } }
    ]
  },
  {
    id: 23,
    text: "你更倾向于如何表达感谢？",
    options: [
      { text: "口头表达，真诚地说谢谢", scores: { Social: 1, Empathy: 1 } },
      { text: "用实际行动，比如请吃饭或送礼物", scores: { Social: 2, Empathy: 1 } },
      { text: "记在心里，以后有机会回报", scores: { Idealism: 1, Social: 0 } },
      { text: "写下来或者发消息正式感谢", scores: { Discipline: 1, Rationality: 1 } }
    ]
  },
  {
    id: 24,
    text: "面对一个你不太喜欢的人，你会？",
    options: [
      { text: "保持基本礼貌，但不会深入接触", scores: { Social: 0, Discipline: 1 } },
      { text: "试着了解，可能会有新的看法", scores: { Empathy: 2, Idealism: 1 } },
      { text: "直接表达不满，划清界限", scores: { Boldness: 2, Social: -1 } },
      { text: "看情况，需要合作时还是会配合", scores: { Rationality: 1, Social: 1 } }
    ]
  },
  {
    id: 25,
    text: "你更喜欢和朋友一起做什么？",
    options: [
      { text: "聊天分享，聊聊最近的想法和感受", scores: { Social: 2, Empathy: 1 } },
      { text: "一起做事，完成某个目标或任务", scores: { Discipline: 1, Social: 1 } },
      { text: "找乐子，做刺激好玩的活动", scores: { Boldness: 2, Social: 1 } },
      { text: "安静地待在一起，各做各的也行", scores: { Social: 0, Idealism: 1 } }
    ]
  },
  {
    id: 26,
    text: "当朋友做了让你失望的事，你会？",
    options: [
      { text: "直接沟通，说出你的感受", scores: { Boldness: 1, Empathy: 1 } },
      { text: "给他机会解释，看看是什么原因", scores: { Empathy: 2, Rationality: 1 } },
      { text: "记在心里，慢慢疏远", scores: { Social: -1, Discipline: 1 } },
      { text: "看严重程度，再决定如何处理", scores: { Rationality: 2, Social: 0 } }
    ]
  },
  {
    id: 27,
    text: "你更倾向于如何处理冲突？",
    options: [
      { text: "当场说清楚，不留误会", scores: { Boldness: 2, Social: 0 } },
      { text: "先冷静一下，再找合适时机沟通", scores: { Discipline: 2, Empathy: 1 } },
      { text: "让对方先说，充分理解他的立场", scores: { Empathy: 2, Rationality: 1 } },
      { text: "看谁有道理，就按对的来", scores: { Rationality: 2, Boldness: 0 } }
    ]
  },
  {
    id: 28,
    text: "你更喜欢什么样的团队氛围？",
    options: [
      { text: "高效务实，目标明确各司其职", scores: { Rationality: 2, Discipline: 1 } },
      { text: "轻松活跃，大家像朋友一样", scores: { Social: 2, Boldness: 1 } },
      { text: "互相支持，彼此关心像家人", scores: { Empathy: 2, Social: 1 } },
      { text: "有挑战性，能激发潜能和创意", scores: { Boldness: 2, Idealism: 1 } }
    ]
  },
  {
    id: 29,
    text: "当别人请求你帮忙时，你会？",
    options: [
      { text: "先评估自己有没有能力帮，再决定", scores: { Rationality: 2, Discipline: 1 } },
      { text: "尽量帮，不想让人失望", scores: { Empathy: 2, Social: 1 } },
      { text: "看关系远近，关系好才帮", scores: { Social: 1, Idealism: 0 } },
      { text: "看对自己有没有好处，再决定", scores: { Rationality: 1, Boldness: 0 } }
    ]
  },
  {
    id: 30,
    text: "你更喜欢用什么方式表达自己？",
    options: [
      { text: "用语言直接表达，清晰明了", scores: { Boldness: 1, Social: 1 } },
      { text: "用行动证明，少说多做", scores: { Discipline: 2, Rationality: 1 } },
      { text: "用文字或艺术形式，含蓄表达", scores: { Idealism: 2, Empathy: 1 } },
      { text: "看场合，灵活选择方式", scores: { Rationality: 1, Social: 1 } }
    ]
  },
  {
    id: 31,
    text: "你更在意别人的什么？",
    options: [
      { text: "是否真诚，有没有骗我", scores: { Idealism: 2, Empathy: 1 } },
      { text: "是否有用，能不能帮到我", scores: { Rationality: 2, Social: 0 } },
      { text: "是否尊重我，态度好不好", scores: { Social: 1, Empathy: 1 } },
      { text: "是否有趣，能不能聊得来", scores: { Boldness: 1, Social: 1 } }
    ]
  },
  {
    id: 32,
    text: "当你在群体中时，你更倾向于？",
    options: [
      { text: "融入大家，和谐相处", scores: { Social: 2, Empathy: 1 } },
      { text: "保持独立，有自己的节奏", scores: { Boldness: 1, Social: -1 } },
      { text: "观察全局，掌握整体情况", scores: { Rationality: 2, Social: 0 } },
      { text: "带领方向，让大家一起行动", scores: { Boldness: 2, Social: 1 } }
    ]
  },

  // ==========================================
  // 【第三部分】工作态度与决策风格 (33-48)
  // ==========================================
  {
    id: 33,
    text: "面对一个复杂的工作任务，你会？",
    options: [
      { text: "拆解成小步骤，按计划一步步完成", scores: { Discipline: 2, Rationality: 1 } },
      { text: "先做起来，遇到问题再调整", scores: { Boldness: 2, Discipline: -1 } },
      { text: "找别人帮忙，一起解决", scores: { Social: 2, Empathy: 1 } },
      { text: "思考有没有更好的方法或思路", scores: { Idealism: 1, Rationality: 1 } }
    ]
  },
  {
    id: 34,
    text: "你更倾向于什么样的工作方式？",
    options: [
      { text: "按流程和规则来，稳步推进", scores: { Discipline: 2, Rationality: 1 } },
      { text: "灵活应变，随时调整方向", scores: { Boldness: 2, Discipline: -1 } },
      { text: "和团队配合，共同完成目标", scores: { Social: 2, Empathy: 1 } },
      { text: "追求创新，想出独特的解决方案", scores: { Idealism: 2, Boldness: 1 } }
    ]
  },
  {
    id: 35,
    text: "当你和上级意见不合时，你会？",
    options: [
      { text: "按上级说的做，保留自己的看法", scores: { Discipline: 2, Social: 1 } },
      { text: "找机会表达，尝试说服上级", scores: { Boldness: 2, Rationality: 1 } },
      { text: "先执行看看，结果会说话", scores: { Rationality: 1, Discipline: 1 } },
      { text: "问清楚为什么，了解上级的考量", scores: { Empathy: 1, Rationality: 1 } }
    ]
  },
  {
    id: 36,
    text: "你更喜欢什么样的任务？",
    options: [
      { text: "有明确目标和流程的，执行就好", scores: { Discipline: 2, Rationality: 1 } },
      { text: "有挑战性的，需要动脑筋解决", scores: { Boldness: 2, Rationality: 1 } },
      { text: "能帮助别人的，体现自己价值", scores: { Empathy: 2, Idealism: 1 } },
      { text: "有创意空间的，可以自由发挥", scores: { Idealism: 2, Boldness: 1 } }
    ]
  },
  {
    id: 37,
    text: "当你犯错时，你会？",
    options: [
      { text: "承认错误，立刻想办法补救", scores: { Discipline: 1, Empathy: 1 } },
      { text: "分析原因，避免再犯", scores: { Rationality: 2, Discipline: 1 } },
      { text: "嘴硬不想承认，但心里知道错了", scores: { Boldness: 1, Social: -1 } },
      { text: "先看看有没有被发现再说", scores: { Rationality: 1, Discipline: -1 } }
    ]
  },
  {
    id: 38,
    text: "你更看重工作的什么方面？",
    options: [
      { text: "稳定性和安全感", scores: { Discipline: 2, Rationality: 1 } },
      { text: "成长机会和挑战", scores: { Boldness: 2, Idealism: 1 } },
      { text: "意义和价值感", scores: { Idealism: 2, Empathy: 1 } },
      { text: "人际关系和氛围", scores: { Social: 2, Empathy: 1 } }
    ]
  },
  {
    id: 39,
    text: "当你负责一个项目时，你会？",
    options: [
      { text: "制定详细计划，跟进每个环节", scores: { Discipline: 2, Rationality: 1 } },
      { text: "抓大放小，关注关键节点", scores: { Rationality: 2, Boldness: 1 } },
      { text: "充分授权，让团队成员发挥", scores: { Social: 2, Empathy: 1 } },
      { text: "亲力亲为，确保每个细节", scores: { Discipline: 1, Empathy: 0 } }
    ]
  },
  {
    id: 40,
    text: "面对压力时，你会？",
    options: [
      { text: "制定计划，一步步解决", scores: { Discipline: 2, Rationality: 1 } },
      { text: "找朋友倾诉，释放情绪", scores: { Social: 2, Empathy: 1 } },
      { text: "暂时逃避，放松再说", scores: { Boldness: 1, Discipline: -1 } },
      { text: "思考问题的本质，寻找根本解法", scores: { Rationality: 2, Idealism: 1 } }
    ]
  },
  {
    id: 41,
    text: "你更喜欢什么样的同事？",
    options: [
      { text: "专业能力强，做事靠谱", scores: { Rationality: 2, Discipline: 1 } },
      { text: "性格好，相处愉快", scores: { Social: 2, Empathy: 1 } },
      { text: "有想法，能激发灵感", scores: { Idealism: 2, Boldness: 1 } },
      { text: "有行动力，执行力强", scores: { Boldness: 2, Discipline: 1 } }
    ]
  },
  {
    id: 42,
    text: "当你发现同事的问题时，你会？",
    options: [
      { text: "直接指出，帮助他改进", scores: { Boldness: 1, Empathy: 1 } },
      { text: "私下提醒，给他留面子", scores: { Empathy: 2, Social: 1 } },
      { text: "看情况，严重了再介入", scores: { Rationality: 1, Discipline: 1 } },
      { text: "不管，又不是我的事", scores: { Social: -1, Discipline: 0 } }
    ]
  },
  {
    id: 43,
    text: "你更倾向于如何学习新知识？",
    options: [
      { text: "系统学习，打好基础", scores: { Discipline: 2, Rationality: 1 } },
      { text: "实践出真知，边做边学", scores: { Boldness: 2, Rationality: -1 } },
      { text: "向有经验的人请教", scores: { Social: 2, Empathy: 1 } },
      { text: "自己探索，找到独特方法", scores: { Idealism: 2, Boldness: 1 } }
    ]
  },
  {
    id: 44,
    text: "当你取得成绩时，你更倾向于？",
    options: [
      { text: "低调继续，不张扬", scores: { Discipline: 2, Rationality: 1 } },
      { text: "分享喜悦，感谢帮助过你的人", scores: { Social: 2, Empathy: 1 } },
      { text: "总结经验，为下次做准备", scores: { Rationality: 1, Discipline: 1 } },
      { text: "奖励自己，享受成果", scores: { Boldness: 1, Idealism: 1 } }
    ]
  },
  {
    id: 45,
    text: "你更喜欢什么样的领导风格？",
    options: [
      { text: "明确目标，给足够自主权", scores: { Boldness: 1, Social: 1 } },
      { text: "以身作则，一起干活", scores: { Discipline: 1, Empathy: 1 } },
      { text: "关注员工发展，提供支持", scores: { Empathy: 2, Social: 1 } },
      { text: "决策果断，效率至上", scores: { Rationality: 2, Boldness: 1 } }
    ]
  },
  {
    id: 46,
    text: "当你对工作感到倦怠时，你会？",
    options: [
      { text: "调整节奏，给自己充电的时间", scores: { Empathy: 1, Discipline: 1 } },
      { text: "寻找新的挑战，重新激发热情", scores: { Boldness: 2, Idealism: 1 } },
      { text: "和同事聊聊，看看别人的看法", scores: { Social: 2, Empathy: 1 } },
      { text: "分析原因，从根本解决问题", scores: { Rationality: 2, Discipline: 1 } }
    ]
  },
  {
    id: 47,
    text: "你更倾向于如何做长期规划？",
    options: [
      { text: "制定详细目标，分阶段实现", scores: { Discipline: 2, Rationality: 1 } },
      { text: "有个大致方向，灵活调整", scores: { Boldness: 1, Idealism: 1 } },
      { text: "随缘，船到桥头自然直", scores: { Boldness: -1, Empathy: 1 } },
      { text: "和重要的人讨论，共同决定", scores: { Social: 2, Empathy: 1 } }
    ]
  },
  {
    id: 48,
    text: "当你面对多个任务时，你会？",
    options: [
      { text: "按重要程度排序，先做紧急的", scores: { Rationality: 2, Discipline: 1 } },
      { text: "同时推进，提高效率", scores: { Boldness: 1, Discipline: 0 } },
      { text: "一件一件来，确保质量", scores: { Discipline: 2, Rationality: 1 } },
      { text: "求助他人，一起完成", scores: { Social: 2, Empathy: 1 } }
    ]
  },

  // ==========================================
  // 【第四部分】价值观与人生态度 (49-64)
  // ==========================================
  {
    id: 49,
    text: "你更认同以下哪种人生态度？",
    options: [
      { text: "活在当下，享受过程", scores: { Boldness: 1, Empathy: 1 } },
      { text: "目标导向，追求结果", scores: { Rationality: 2, Discipline: 1 } },
      { text: "顺其自然，接受安排", scores: { Idealism: 1, Discipline: -1 } },
      { text: "帮助他人，实现价值", scores: { Empathy: 2, Idealism: 1 } }
    ]
  },
  {
    id: 50,
    text: "你更看重什么品质？",
    options: [
      { text: "诚实守信，说到做到", scores: { Discipline: 2, Idealism: 1 } },
      { text: "聪明机智，解决问题", scores: { Rationality: 2, Boldness: 1 } },
      { text: "善良温暖，关心他人", scores: { Empathy: 2, Social: 1 } },
      { text: "勇敢果断，敢于行动", scores: { Boldness: 2, Discipline: 1 } }
    ]
  },
  {
    id: 51,
    text: "面对失败，你会？",
    options: [
      { text: "总结教训，重新尝试", scores: { Discipline: 2, Rationality: 1 } },
      { text: "换个方向，也许不适合自己", scores: { Boldness: 1, Idealism: 1 } },
      { text: "找人倾诉，释放情绪", scores: { Social: 1, Empathy: 1 } },
      { text: "接受它，人生总有起落", scores: { Idealism: 1, Rationality: 0 } }
    ]
  },
  {
    id: 52,
    text: "你更相信什么？",
    options: [
      { text: "自己的能力和努力", scores: { Boldness: 2, Discipline: 1 } },
      { text: "数据和事实", scores: { Rationality: 2, Discipline: 1 } },
      { text: "缘分和命运", scores: { Idealism: 1, Empathy: 1 } },
      { text: "人心和感情", scores: { Empathy: 2, Social: 1 } }
    ]
  },
  {
    id: 53,
    text: "你更倾向于追求什么？",
    options: [
      { text: "个人成就，证明自己", scores: { Boldness: 2, Rationality: 1 } },
      { text: "内心平静，过好每一天", scores: { Idealism: 1, Empathy: 1 } },
      { text: "帮助他人，回馈社会", scores: { Empathy: 2, Idealism: 1 } },
      { text: "知识和智慧，不断成长", scores: { Rationality: 2, Idealism: 1 } }
    ]
  },
  {
    id: 54,
    text: "你更认同哪种处世哲学？",
    options: [
      { text: "害人之心不可有，防人之心不可无", scores: { Rationality: 1, Discipline: 1 } },
      { text: "以诚待人，问心无愧", scores: { Idealism: 2, Empathy: 1 } },
      { text: "人不为己，天诛地灭", scores: { Rationality: 1, Boldness: 0 } },
      { text: "及时行乐，活在当下", scores: { Boldness: 2, Discipline: -1 } }
    ]
  },
  {
    id: 55,
    text: "面对道德困境，你会？",
    options: [
      { text: "遵守规则，不做违背原则的事", scores: { Discipline: 2, Idealism: 1 } },
      { text: "具体情况具体分析，灵活处理", scores: { Rationality: 2, Boldness: 1 } },
      { text: "跟随内心，做认为对的事", scores: { Boldness: 2, Idealism: 1 } },
      { text: "考虑所有人的感受，寻求平衡", scores: { Empathy: 2, Social: 1 } }
    ]
  },
  {
    id: 56,
    text: "你更看重外在还是内在？",
    options: [
      { text: "内在更重要，外在会随时间改变", scores: { Idealism: 2, Empathy: 1 } },
      { text: "外在是名片，不能忽视", scores: { Social: 1, Rationality: 1 } },
      { text: "都重要，内外兼修", scores: { Rationality: 1, Empathy: 1 } },
      { text: "看场合，该重视什么就重视什么", scores: { Rationality: 1, Social: 1 } }
    ]
  },
  {
    id: 57,
    text: "你更倾向于如何定义成功？",
    options: [
      { text: "达成目标，证明自己", scores: { Boldness: 2, Discipline: 1 } },
      { text: "问心无愧，做正确的事", scores: { Idealism: 2, Empathy: 1 } },
      { text: "生活幸福，平衡各方面", scores: { Empathy: 1, Discipline: 1 } },
      { text: "影响他人，为社会做贡献", scores: { Social: 2, Idealism: 1 } }
    ]
  },
  {
    id: 58,
    text: "面对不确定性，你会？",
    options: [
      { text: "做好充分准备，降低风险", scores: { Discipline: 2, Rationality: 1 } },
      { text: "勇敢尝试，错了再改", scores: { Boldness: 2, Discipline: -1 } },
      { text: "顺其自然，船到桥头自然直", scores: { Idealism: 1, Boldness: -1 } },
      { text: "找可靠的人商量，听取建议", scores: { Social: 2, Empathy: 1 } }
    ]
  },
  {
    id: 59,
    text: "你更看重什么类型的自由？",
    options: [
      { text: "思想自由，可以独立思考", scores: { Idealism: 2, Rationality: 1 } },
      { text: "行动自由，想做什么就做什么", scores: { Boldness: 2, Discipline: -1 } },
      { text: "选择自由，有选择权就好", scores: { Rationality: 1, Social: 0 } },
      { text: "财务自由，不为钱发愁", scores: { Rationality: 1, Boldness: 0 } }
    ]
  },
  {
    id: 60,
    text: "你更倾向于如何处理遗憾？",
    options: [
      { text: "吸取教训，不再犯同样的错", scores: { Rationality: 2, Discipline: 1 } },
      { text: "接受它，人生不可能完美", scores: { Idealism: 1, Empathy: 1 } },
      { text: "想办法弥补，减少损失", scores: { Boldness: 1, Empathy: 1 } },
      { text: "放下它，向前看", scores: { Boldness: 1, Discipline: -1 } }
    ]
  },
  {
    id: 61,
    text: "你更认同哪种正义观？",
    options: [
      { text: "程序正义，按规则办事", scores: { Discipline: 2, Rationality: 1 } },
      { text: "结果正义，看最终效果", scores: { Rationality: 2, Boldness: 1 } },
      { text: "道义正义，做问心无愧的事", scores: { Idealism: 2, Empathy: 1 } },
      { text: "相对正义，看情况决定", scores: { Rationality: 1, Empathy: 0 } }
    ]
  },
  {
    id: 62,
    text: "你更看重什么类型的知识？",
    options: [
      { text: "实用的，能解决实际问题", scores: { Rationality: 2, Discipline: 1 } },
      { text: "深刻的，能启发思考", scores: { Idealism: 2, Rationality: 1 } },
      { text: "有趣的，能拓宽视野", scores: { Boldness: 1, Idealism: 1 } },
      { text: "能帮助别人的，体现价值", scores: { Empathy: 2, Social: 1 } }
    ]
  },
  {
    id: 63,
    text: "面对传统和规则，你会？",
    options: [
      { text: "尊重传统，但可以适当调整", scores: { Discipline: 1, Empathy: 1 } },
      { text: "遵守规则，这是社会的基础", scores: { Discipline: 2, Rationality: 1 } },
      { text: "挑战传统，创造新东西", scores: { Boldness: 2, Idealism: 1 } },
      { text: "看情况，有道理就听", scores: { Rationality: 1, Social: 0 } }
    ]
  },
  {
    id: 64,
    text: "你更倾向于如何面对死亡？",
    options: [
      { text: "珍惜活着的每一天，好好生活", scores: { Empathy: 1, Idealism: 1 } },
      { text: "留下有意义的东西，被人记住", scores: { Idealism: 2, Social: 0 } },
      { text: "顺其自然，这是自然规律", scores: { Rationality: 1, Idealism: 0 } },
      { text: "活在当下，不去想它", scores: { Boldness: 1, Discipline: -1 } }
    ]
  },

  // ==========================================
  // 【第五部分】情境反应与极端选择 (65-80)
  // ==========================================
  {
    id: 65,
    text: "如果你必须在两个都重要的东西之间选择，你会？",
    options: [
      { text: "权衡利弊，选利益最大的", scores: { Rationality: 2, Discipline: 1 } },
      { text: "跟随内心，选自己最想要的", scores: { Boldness: 2, Idealism: 1 } },
      { text: "选对别人影响最小的", scores: { Empathy: 2, Social: 1 } },
      { text: "两个都想要，尝试找折中方案", scores: { Rationality: 1, Social: 1 } }
    ]
  },
  {
    id: 66,
    text: "当你发现一个秘密时，你会？",
    options: [
      { text: "烂在心里，不告诉任何人", scores: { Discipline: 2, Social: -1 } },
      { text: "看情况，决定说不说", scores: { Rationality: 2, Social: 0 } },
      { text: "和最信任的人分享", scores: { Social: 1, Empathy: 1 } },
      { text: "看它会不会伤害别人", scores: { Empathy: 2, Rationality: 1 } }
    ]
  },
  {
    id: 67,
    text: "当你和重要的人发生严重分歧时，你会？",
    options: [
      { text: "坚持立场，不轻易妥协", scores: { Boldness: 2, Discipline: 1 } },
      { text: "理解对方，寻求共识", scores: { Empathy: 2, Rationality: 1 } },
      { text: "暂时冷静，之后再谈", scores: { Discipline: 2, Social: 0 } },
      { text: "找第三方调解", scores: { Social: 2, Rationality: 1 } }
    ]
  },
  {
    id: 68,
    text: "当你面对一个艰难的决定时，你会？",
    options: [
      { text: "收集信息，理性分析", scores: { Rationality: 2, Discipline: 1 } },
      { text: "相信直觉，直接决定", scores: { Boldness: 2, Rationality: -1 } },
      { text: "问问重要的人怎么想", scores: { Social: 2, Empathy: 1 } },
      { text: "思考长远影响再做决定", scores: { Idealism: 2, Rationality: 1 } }
    ]
  },
  {
    id: 69,
    text: "当你发现自己在某个领域不如别人时，你会？",
    options: [
      { text: "加倍努力，超过他", scores: { Boldness: 2, Discipline: 1 } },
      { text: "接受它，找自己擅长的", scores: { Idealism: 1, Rationality: 1 } },
      { text: "学习他的优点，提升自己", scores: { Rationality: 1, Discipline: 1 } },
      { text: "不在意，各有各的路", scores: { Social: 0, Empathy: 1 } }
    ]
  },
  {
    id: 70,
    text: "当你需要做出牺牲时，你会？",
    options: [
      { text: "为了重要的人，可以牺牲", scores: { Empathy: 2, Idealism: 1 } },
      { text: "看值不值得，权衡利弊", scores: { Rationality: 2, Discipline: 1 } },
      { text: "尽量不做牺牲，找其他办法", scores: { Boldness: 1, Discipline: 0 } },
      { text: "看是什么程度的牺牲", scores: { Rationality: 1, Social: 0 } }
    ]
  },
  {
    id: 71,
    text: "当你面对一个强大的对手时，你会？",
    options: [
      { text: "正面挑战，不退缩", scores: { Boldness: 2, Discipline: 1 } },
      { text: "分析弱点，以智取胜", scores: { Rationality: 2, Boldness: 1 } },
      { text: "联合其他力量，一起对抗", scores: { Social: 2, Empathy: 1 } },
      { text: "暂时退避，积累力量再说", scores: { Rationality: 1, Discipline: 1 } }
    ]
  },
  {
    id: 72,
    text: "当你发现一个机会时，你会？",
    options: [
      { text: "立刻抓住，马上行动", scores: { Boldness: 2, Discipline: -1 } },
      { text: "评估风险，再决定", scores: { Rationality: 2, Discipline: 1 } },
      { text: "告诉重要的人，一起商量", scores: { Social: 2, Empathy: 1 } },
      { text: "思考是否符合长期目标", scores: { Idealism: 2, Rationality: 1 } }
    ]
  },
  {
    id: 73,
    text: "当你面对一个道德模糊的情况时，你会？",
    options: [
      { text: "遵守法律和规则", scores: { Discipline: 2, Rationality: 1 } },
      { text: "看对谁有利，做利益最大的", scores: { Rationality: 2, Boldness: 0 } },
      { text: "跟随内心，做认为对的事", scores: { Boldness: 2, Idealism: 1 } },
      { text: "考虑所有人的感受", scores: { Empathy: 2, Social: 1 } }
    ]
  },
  {
    id: 74,
    text: "当你需要做出长期承诺时，你会？",
    options: [
      { text: "深思熟虑，确保能做到", scores: { Rationality: 2, Discipline: 1 } },
      { text: "看对象，值就承诺", scores: { Idealism: 1, Social: 0 } },
      { text: "跟随内心，想就做", scores: { Boldness: 2, Idealism: 1 } },
      { text: "先试试看，不行再说", scores: { Boldness: 1, Discipline: -1 } }
    ]
  },
  {
    id: 75,
    text: "当你面对一个无法改变的事实时，你会？",
    options: [
      { text: "接受它，继续生活", scores: { Idealism: 1, Discipline: 1 } },
      { text: "寻找其他出路", scores: { Boldness: 2, Rationality: 1 } },
      { text: "找支持，度过难关", scores: { Social: 2, Empathy: 1 } },
      { text: "分析原因，避免再发生", scores: { Rationality: 2, Discipline: 1 } }
    ]
  },
  {
    id: 76,
    text: "当你面对一个两难选择时，你会？",
    options: [
      { text: "选后果可以承担的", scores: { Rationality: 2, Discipline: 1 } },
      { text: "选让自己不后悔的", scores: { Idealism: 2, Boldness: 1 } },
      { text: "选对别人伤害小的", scores: { Empathy: 2, Social: 1 } },
      { text: "两个都不选，找第三个方案", scores: { Boldness: 1, Rationality: 1 } }
    ]
  },
  {
    id: 77,
    text: "当你面对一个强大的压力时，你会？",
    options: [
      { text: "坚强面对，不退缩", scores: { Boldness: 2, Discipline: 1 } },
      { text: "寻求帮助，一起解决", scores: { Social: 2, Empathy: 1 } },
      { text: "暂时逃避，调整好再面对", scores: { Empathy: 1, Discipline: 0 } },
      { text: "分析问题根源，解决它", scores: { Rationality: 2, Discipline: 1 } }
    ]
  },
  {
    id: 78,
    text: "当你面对一个不公正的情况时，你会？",
    options: [
      { text: "站出来发声，纠正它", scores: { Boldness: 2, Idealism: 1 } },
      { text: "按规则申诉，寻求正义", scores: { Discipline: 2, Rationality: 1 } },
      { text: "帮助受害者，支持他们", scores: { Empathy: 2, Social: 1 } },
      { text: "看情况，决定怎么处理", scores: { Rationality: 1, Social: 0 } }
    ]
  },
  {
    id: 79,
    text: "当你面对一个重要的机会但风险很高时，你会？",
    options: [
      { text: "评估后决定，风险可接受就做", scores: { Rationality: 2, Discipline: 1 } },
      { text: "勇敢尝试，失败了也值得", scores: { Boldness: 2, Idealism: 1 } },
      { text: "问问重要的人怎么想", scores: { Social: 2, Empathy: 1 } },
      { text: "放弃，找更稳妥的机会", scores: { Discipline: 2, Boldness: -1 } }
    ]
  },
  {
    id: 80,
    text: "当你回顾自己的人生时，你更在意什么？",
    options: [
      { text: "做了多少有意义的事", scores: { Idealism: 2, Empathy: 1 } },
      { text: "达成了多少目标", scores: { Boldness: 2, Discipline: 1 } },
      { text: "有多少重要的人在身边", scores: { Social: 2, Empathy: 1 } },
      { text: "有多少成长和收获", scores: { Rationality: 2, Discipline: 1 } }
    ]
  }
];