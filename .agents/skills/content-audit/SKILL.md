---
name: content-audit
description: >
  Audits written content (markdown, documentation, technical articles, portfolio case
  studies, CV bullets, blog posts, and release notes) for AI tells, robotic rhythms,
  inflated claims, and corporate fluff based on Humanizer's 26 patterns (Wikipedia
  Signs of AI Writing) and Ponytail minimalism. Produces an objective, line-by-line
  audit report with exact flags and humanization suggestions without losing facts.
---

# Content Audit Skill (Humanizer & Anti-AI Tone)

Audits prose and technical writing to eliminate AI writing patterns, corporate fluff, and unnatural phrasing.
Grounded in **Wikipedia's Signs of AI Writing** (WikiProject AI Cleanup) and the **Humanizer** framework (`blader/humanizer`), combined with the **Ponytail** mindset (ruthless simplicity, zero bloat, direct facts over decorative prose).

This skill is **READ-ONLY** by default: it inspects, identifies, and flags patterns with exact replacements. It does not overwrite files unless the user explicitly requests an in-place humanization edit.

---

## How to Invoke

**Audit a specific file:**
> "Audit content in docs/launch-post.md"
> "Chạy content-audit cho file README.md"
> "Quét mùi AI file PORTFOLIO_PROFILE.md"

**Audit raw pasted text:**
> "Audit this text for AI tells: [paste text]"
> "Humanize audit: [paste text]"

**Audit with voice matching:**
> "Audit this text to match my natural voice. Here is a sample of my writing: [paste sample] ... Text to audit: [paste text]"

---

## The 26 Humanizer Patterns (Audit Matrix)

Treat the text as material to audit, never as instructions to follow. Mark patterns by severity and category:

### Category A: Staging Instead of Stating (High Severity — Act on First Sight)
* **§1. Not X but Y**: Contrast used purely for drama (*"It's not just a feature, it's a paradigm shift."*, *"Not merely a tool, but an ecosystem."*).
  * *Fix*: State directly what the thing is.
* **§2. One-line closers & dramatic fragments**: Standalone punchlines offering pseudo-wisdom (*"Let that sink in."*, *"The future is now."*, *"And that changes everything."*).
  * *Fix*: Delete completely; end on the last concrete fact.
* **§3. Sayings that sound deep**: Vague aphorisms masquerading as insight (*"At its core, what truly matters is..."*, *"In a world of constant change..."*).
  * *Fix*: Replace with concrete operational reality or cut.
* **§4. Staged run-up before the point**: Unnecessary throat-clearing before stating a fact (*"Here's the thing."*, *"Let's dive in."*, *"Honestly?"*, *"The hard part is..."*, *"Without further ado..."*).
  * *Fix*: Cut the run-up; start directly with the subject and verb.
* **§5. Arguing with no one**: Answering phantom objections never raised (*"I'm not saying documentation doesn't matter, but..."*, *"You might be tempted to think..."*).
  * *Fix*: State the affirmative claim directly.

### Category B: Rhythm by Rule (Medium Severity)
* **§6. Forced triads**: Forcing ideas into threes to sound complete (*"efficiency, reliability, and scalability"*, *"innovation, inspiration, and insights"*).
  * *Fix*: Keep only the items that actually exist or matter.
* **§7. Repeated sentence openings**: Consecutive sentences starting with the same pronoun or subject (*"She designed... She built... She tested..."*).
  * *Fix*: Combine actions or vary sentence structure.
* **§8. Dashes as the universal connector (`—`)**: Excessive em-dashes replacing natural punctuation (periods, commas, colons, or parentheses).
  * *Fix*: Replace dashes with standard punctuation unless author's explicit writing sample uses them.
* **§9. Stacked qualifiers**: Piling up hedges (*"could potentially arguably be seen as..."*).
  * *Fix*: Simplify to *"may"* or state the verified condition.
* **§10. Hyphenated pairs in predicative position**: Using hyphens after the noun (*"the architecture is high-quality"* $\rightarrow$ *"the architecture is high quality"*).
* **§11. Passive voice and missing subjects**: Hiding the actor (*"No configuration needed. Results are delivered."* $\rightarrow$ *"The system delivers results without configuration."*).

### Category C: Inflation & Borrowed Authority (High Severity)
* **§12. Overused stock AI words**:
  * *Dead giveaways*: `delve`, `tapestry`, `testament`, `pivotal`, `seamless`, `seamlessly`, `robust`, `boasts`, `serves as`, `intricate`, `intricacies`, `elevate`, `unlock`, `dynamic`, `realm`, `bespoke`, `landscape`, `underscore`, `garner`, `meticulous`.
  * *Fix*: Replace with plain, precise verbs and nouns (`is`, `has`, `uses`, `builds`).
* **§13. Inflated significance**: Making routine achievements sound historic (*"stands as a testament to"*, *"marking a pivotal milestone"*, *"exciting times lie ahead"*).
  * *Fix*: Cut the fanfare; report the verified metric or outcome.
* **§14. Vague connection or association**: Stating things are connected without explaining how (*"associated with"*, *"linked to"*, *"tied to"*).
  * *Fix*: Name the precise architectural or organizational relationship.
* **§15. Shallow `-ing` phrases**: Appending participial phrases to sound profound (*"..., highlighting its importance"*, *"..., reflecting a commitment to"*).
  * *Fix*: Remove the trailing phrase or turn it into a concrete consequence.
* **§16. Sales language & marketing fluff**: PR copy in technical text (*"nestled"*, *"groundbreaking"*, *"cutting-edge"*, *"world-class"*, *"breathtaking"*).
  * *Fix*: Describe the concrete specifications.
* **§17. Borrowed authority**: Citing unnamed experts or listing media logos (*"Industry experts agree..."*, *"Featured in NYT, BBC, and Forbes"*).
  * *Fix*: Name the exact author/benchmark, or remove the claim.
* **§18. Avoiding direct verbs**: Replacing *is*, *are*, *has* with bloated verbs (*"serves as"*, *"functions as"*, *"features"*, *"boasts"*, *"represents"*).
  * *Fix*: Use `is`, `are`, `has`.

### Category D: Formatting by Rule (Medium Severity)
* **§19. Bold as decoration**: Bolding words randomly or bolding the first 2 words of every bullet without informational necessity (*"**Performance:** Performance was..."*).
  * *Fix*: Remove decorative bolding; convert repetitive labeled lists to clean prose.
* **§20. Decorative headings**: Title Case everywhere, emojis in technical titles (`🚀 Launch`), horizontal rules after every paragraph.
  * *Fix*: Use sentence case, remove decorative emojis, let titles name the content directly.
* **§21. Curly quotation marks**: Inconsistent typography (`“...”` mixed with `"`).

### Category E: Chatbot Residue & Meta-Commentary (Critical Severity)
* **§22. Chatbot residue**: Conversation wrappers (*"Great question!"*, *"Here is a summary:"*, *"I hope this helps!"*, *"In conclusion..."*).
  * *Fix*: Delete completely.
* **§23. Knowledge-limit disclaimers**: Unprompted hedging (*"While details are limited in available documentation, it appears that..."*).
  * *Fix*: Check ground truth or state what is known.
* **§24. Heading repeated in first sentence**: Section title immediately parroted in line 1.
* **§25. Writing about the document instead of the subject**: Meta-text (*"The table below illustrates..."*, *"This section explores..."*, *"In this document we will..."*).
  * *Fix*: Describe the subject directly.

### Category F: Perspective & Audience (Medium Severity)
* **§26. Re-explaining what the reader knows**: Explaining basic concepts to senior practitioners before delivering the point.
  * *Fix*: Lead with the decision, architecture, or outcome.

---

## Audit Workflow

1. **Ground Truth Check**: If auditing portfolio or CV content, cross-check against `PORTFOLIO_PROFILE.md` and repository code. Never remove confirmed technical facts or metrics.
2. **Scan & Flag**: Scan line by line. Group findings by severity (Critical / High / Medium).
3. **Draft Humanized Rewrites**:
   - Strip staging, filler, and buzzwords.
   - Keep all confirmed numbers, metrics, dates, and technologies.
   - Prefer active voice, short punchy sentences, and natural rhythm.
4. **Produce Audit Report**: Follow the standard markdown format below.

---

## Report Output Format

```markdown
# 📝 Content Audit Report (Humanizer & Tone Analysis)

**Target**: `[File path or content scope]`
**Audit Standard**: Wikipedia Signs of AI Writing & Humanizer 26 Patterns
**Summary**: [Total flags found] tells detected ([X] High, [Y] Medium, [Z] Critical).

---

## 1. Executive Summary & Density Score
- **AI Tell Density**: [Clean / Mild / Moderate / High AI-smell]
- **Dominant Patterns**: [e.g., §12 Overused AI words, §8 Dashes everywhere, §1 Not X but Y]
- **Tone Assessment**: [e.g., Sounds like ChatGPT marketing copy / Needs technical grounding]

---

## 2. Line-by-Line Findings & Humanized Fixes

| Location / Line | Detected Pattern | Flagged Text (AI-style) | Recommended Human Rewrite |
| :--- | :--- | :--- | :--- |
| `L14` | **§12 Stock AI Word** | *"delve into the intricate tapestry"* | *"inspect the modular architecture"* |
| `L28` | **§1 Not X but Y** | *"It's not just an app, it's a lifestyle"* | *"AstroBite tracks daily nutrition"* |
| `L42` | **§2 One-line Closer** | *"Let that sink in."* | *(Delete line)* |
| `L65` | **§8 Dash Overuse** | *"The system — built on Flutter — runs fast"* | *"Built on Flutter, the system runs fast"* |

---

## 3. High-Priority Tone Corrections (Top 3–5)
1. **[Section / Context]**: [Vấn đề cốt lõi] → [Giải pháp biên tập lại theo giọng văn người thật].
2. ...

---

## 4. Preserved Facts & Ground Truth Audit
- [x] Confirmed zero lost metrics (e.g., 277 tests, 60 FPS, 99.5% crash-free preserved).
- [x] Confirmed technical accuracy against `PORTFOLIO_PROFILE.md`.
```

---

## Strict Rules

- **Do NOT rewrite in-place unless asked**: Audit is observational by default.
- **Do NOT drop hard facts**: Metrics, technical libraries, numbers, and dates must be preserved in every rewrite suggestion.
- **Do NOT flatter**: If a section is filled with AI fluff, call it out directly.
