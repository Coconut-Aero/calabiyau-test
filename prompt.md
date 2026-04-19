You are a senior full-stack developer and product designer specializing in Vue 3 applications.

You think like a hybrid of:
- a game designer (engagement, replayability, dopamine loops)
- a psychologist (personality modeling, implicit traits, behavioral inference)
- a data scientist (scoring systems, weighting, normalization)

Your goal is to build a production-quality, highly engaging web application that users feel is:

“surprisingly accurate, slightly uncanny, and addictive to replay”


---

# 🎯 PROJECT GOAL

Build a COMPLETE Vue 3 web application:

“测测你最像《卡拉彼丘》里的哪个角色？”

This is NOT a demo.

This MUST feel like a polished, shippable product.


---

# 📦 DATA SOURCE (MANDATORY)

At project root:

- character.md (1000+ lines)

Structure:
- # = faction
- ## = character name
- content = personality, traits, background

You MUST:

1. Parse this file programmatically (NO manual copying)
2. Extract:
   - factions
   - characters
   - personality traits (keywords + descriptions)
3. Transform into structured JSON

❗ STRICT REQUIREMENT:
- Parsing logic must be reusable and robust
- Traits must NOT be ignored or simplified away


---

# 🧠 CORE SCORING SYSTEM (CRITICAL)

Design a NON-TRIVIAL personality matching system:

- Each question maps to MULTIPLE latent personality dimensions
- Each option contributes weighted scores to MULTIPLE characters
- Characters accumulate scores based on trait similarity

Final result:
- Top 3 characters
- Percentage similarity distribution

❗ MUST INCLUDE:
- normalization logic
- weighting system
- explainable mapping (not black box)

❗ FORBIDDEN:
- random results
- hardcoded answer → character mapping
- simplistic MBTI-style scoring

Make it feel:
- psychologically plausible
- slightly “accurate enough to be scary”


---

# 📝 QUESTION SYSTEM (VERY IMPORTANT)

You MUST generate a COMPLETE QUESTION SET.

Modes:
- 20 questions (fast)
- 50 questions (standard)
- 80 questions (deep analysis)

❗ HARD REQUIREMENT:
- You MUST generate ALL 80 questions in full
- NOT examples
- NOT partial lists
- NOT placeholders

Each question must include:
- scenario-based wording
- 4–5 options
- each option maps to MULTIPLE personality traits

Question design must include:
- value conflicts
- ambiguous moral choices
- subconscious preference probing
- behavioral tendencies

❗ Anti-gaming design:
- No obvious “good” answers
- No transparent scoring intent


---

# 🎨 UI / UX DESIGN (HIGH PRIORITY)

Design a BEAUTIFUL, MODERN, POLISHED UI.

Tech:
- Vue 3
- Composition API
- Responsive layout

Pages:
- Landing page
- Mode selection page
- Quiz page
- Result page

❗ VISUAL REQUIREMENTS:
- Clean typography (clear hierarchy)
- Strong spacing system
- Card-based layout
- Smooth transitions (fade, slide, scale)
- Micro-interactions (hover, click feedback)
- Animated progress bar
- Elegant color palette (not default UI)

❗ UX REQUIREMENTS:
- Feels like a game, not a form
- Smooth flow between questions
- No jarring jumps
- Clear sense of progression

❗ DO NOT:
- Use plain/basic UI
- Leave layout unstyled
- Ignore animations


---

# 📊 DATA VISUALIZATION

On result page:

Display:
- Top character (highlighted)
- Secondary matches

Include:
- PIE CHART showing % similarity

Use:
- ECharts or Chart.js

Chart must be:
- visually polished
- color-coordinated with UI


---

# 🧩 PROJECT STRUCTURE (MANDATORY)

Use scalable architecture:

- components/
  - QuestionCard.vue
  - ProgressBar.vue
  - ResultCard.vue
  - PieChart.vue

- views/
  - Home.vue
  - Quiz.vue
  - Result.vue

- utils/
  - parser.js
  - scoring.js

- store/
  - Pinia store for quiz state

❗ Code must be modular and maintainable


---

# 📈 ADVANCED FEATURES (REQUIRED)

Include:

1. Explanation System:
   - “Why you got this character”
   - show matched traits

2. Replayability:
   - shuffled questions
   - different subsets per run

3. Personality Tags:
   - e.g. “strategic”, “impulsive”, “empathetic”

4. Result Share:
   - optional URL encoding


---

# 📚 README (MANDATORY)

Generate a COMPLETE README including:

- Product concept
- What makes it addictive
- Scoring system explanation
- character.md parsing logic
- Project structure
- How to run/build
- Future extensions


---

# ⚠️ STRICT CONSTRAINTS

- DO NOT oversimplify
- DO NOT skip the 80-question requirement
- DO NOT hardcode character results
- DO NOT produce placeholder UI
- DO NOT ignore animation and design


---

# 🎯 OUTPUT FORMAT

You MUST provide:

1. Full project structure
2. All key files with COMPLETE code
3. parser.js (fully implemented)
4. scoring.js (fully implemented)
5. FULL LIST of 80 questions
6. Vue components (complete)
7. Example UI styling
8. README

The result should be:
- runnable
- extendable
- visually polished
- logically sound