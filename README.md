# 卡拉彼丘人格测试 (Calabiyau Personality Test)

> “测测你最像《卡拉彼丘》里的哪个角色？”

基于 Vue 3 + Pinia + Tailwind CSS 构建的沉浸式人格匹配 Web 应用。

---

## ✨ 项目特性

- **深度心理建模** - 6 维度人格向量空间 (Rationality, Boldness, Social, Idealism, Discipline, Empathy)
- **智能匹配算法** - Softmax 归一化 + 冲突惩罚 + 稀有特征加权
- **游戏化 UI** - 二次元风设计，平滑过渡动效
- **MD 自动化解析** - 自动从 `character.md` 提取角色数据
- **多阵营支持** - 欧泊、剪刀手、乌尔比诺三大阵营

---

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3 (Composition API) |
| 状态管理 | Pinia |
| 路由 | Vue Router |
| 样式 | Tailwind CSS |
| 可视化 | ECharts |
| 动画 | Framer Motion |
| 构建工具 | Vite |

---

## 📁 项目结构

```
calabiyau-test/
├── public/
│   ├── character.md          # 角色数据源
│   └── *.png                 # 角色头像 (23个)
├── src/
│   ├── components/
│   │   ├── PieChart.vue      # 饼图可视化
│   │   ├── ProgressBar.vue   # 进度条
│   │   ├── QuestionCard.vue  # 题目卡片
│   │   └── ResultCard.vue    # 结果卡片
│   ├── views/
│   │   ├── Home.vue          # 首页
│   │   ├── Quiz.vue          # 测试页
│   │   └── Result.vue        # 结果页
│   ├── store/
│   │   └── quiz.js           # Pinia 状态管理
│   ├── utils/
│   │   ├── parser.js         # MD 解析 + 角色向量
│   │   ├── scoring.js        # 评分算法
│   │   └── questions.js      # 测试题目
│   └── router/
│       └── index.js          # 路由配置
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 🎮 角色阵营

| 阵营 | 颜色 | 角色 |
|------|------|------|
| **欧泊**  | 蓝色 | 米雪儿·李、信、心夏、伊薇特、千代、蕾欧娜、忧雾、芙拉薇娅 |
| **剪刀手** | 红色 | 明、拉薇、梅瑞狄斯、香奈美、令、艾卡、珐格兰丝、玛拉 |
| **乌尔比诺** | 黄色 | 星绘、奥黛丽、白墨、玛德蕾娜、绯莎、加拉蒂亚、汐 |

---

## 📊 评分系统

1. **向量空间** - 每个选项对 6 个维度产生偏移量 (-0.5 ~ 0.5)
2. **余弦相似度** - 计算用户向量与角色向量的夹角余弦
3. **冲突惩罚** - 核心维度相反倾向时扣分
4. **稀有特征加权** - 极端维度匹配时加分
5. **Softmax 归一化** - 温度系数 T=0.8，拉开 Top 差距

---

## 📄 许可

本项目中的角色头像图片、角色文稿等素材源于游戏本体，由原作者和版权方所有。请勿用于商业用途。

本项目中的代码由AI生成，也存在编辑，故应当遵循 GNU General Public License v3.0 许可证开源。
