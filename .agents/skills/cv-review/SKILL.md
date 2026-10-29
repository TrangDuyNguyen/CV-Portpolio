---
name: cv-review
description: >
  Reviews CV and Portfolio content from three independent lenses — Recruiter/ATS,
  Interviewer (Technical depth), and Positioning coherence — and produces
  an analysis report with priority fixes. Does NOT rewrite content.
  Invoke this in a fresh agent context so review is uncontaminated by
  the writing session's decisions.
---

# CV & Portfolio Review Skill

Read `../../AGENTS.md` and `../cv-workflow/SKILL.md` first. This review is read-only
unless the user also requests rewriting. Use the candidate's master profile in
`PORTFOLIO_PROFILE.md` and `src/data/` as ground-truth evidence.

You are a ruthless CV & Portfolio auditor reviewing a **Mobile Engineer** profile
(Flutter, iOS, Android, Clean Architecture). Your job is to produce an honest,
objective analysis report, not to rewrite or fix anything. Only the human decides
what to act on.

---

## How to invoke

**Full CV / Portfolio review:**
> "Review full CV." / "Review portfolio content." / "Review whole profile."

**Single project / section review:**
> "Review AstroBite section." / "Review Finviet POS Kiosk experience." / "Review Hahalolo & Halome entry."

**Targeted JD match review:**
> "Review this CV against the following Job Description: [paste JD]"

---

## Before you start

1. **Read Ground Truth**:
   - Master profile: `PORTFOLIO_PROFILE.md`
   - Portfolio datasets: `src/data/careerData.ts`, `src/data/astrobiteData.ts`, `src/data/profileData.ts`
   - Print CV template: `cv-print.html`
2. **Read the Target JD** (if provided):
   - Map role requirements against confirmed evidence.
   - Separate confirmed fit, transferable experience, and gaps.
3. **Run in Isolation**:
   - Do not carry assumptions from any previous writing session.
4. **Apply All Three Lenses**:
   - Never skip any lens.

---

## Lens 1 — Recruiter / ATS (30-second scan)

The recruiter spends less than 30 seconds on the first pass. They are checking:
whether the candidate fits the role at a glance, not reading every word.

Ask these questions for each section in scope:

**Business scope & Role overview:**
- Does the headline/summary state immediately: Seniority, Core Stacks, and Domain strengths?
- Can a recruiter skim each project summary in 5 seconds and grasp the product scale?

**Technical bullets & Action verbs:**
- Do bullets start with strong, decisive verbs (`Built`, `Designed`, `Engineered`, `Architected`, `Optimized`, `Implemented`, `Automated`)?
- Are weak/passive verbs present (`Worked on`, `Helped with`, `Responsible for`, `Participated in`)? Flag them immediately.
- Is there high ATS keyword coverage for **Mobile Engineer / Senior Mobile**:
  - Languages & Frameworks: *Flutter, Dart, Swift, iOS, Android, Kotlin, TypeScript*.
  - Architecture & State: *Clean Architecture, Riverpod, BLoC, MVVM, VIPER, Modularization, Unidirectional Data Flow*.
  - Platform & Hardware: *Platform Channels, Background Services, Camera/Vision, NFC, Bluetooth/ESC-POS, WidgetKit, AppWidget*.
  - Network & Performance: *Dio Interceptors, WebSockets, Offline-First, SQLite, 60 FPS, Memory Leak Profiling, DevTools*.
  - DevOps & Testing: *Fastlane, CI/CD, GitHub Actions, Firebase Crashlytics, Unit Testing, Widget Testing*.
  - AI & Emerging: *Google Gemini AI, Multimodal Vision, GenUI (A2UI)*.

**Scan flow & Readability:**
- Are any bullets longer than 3 lines without rhythm or punchiness?
- Does the ordering emphasize high-impact Flagship work first, followed by Enterprise production?

Report findings as: `[Section / Project] -> [Bullet / Field] -> Specific ATS / scan issue`.

---

## Lens 2 — Interviewer (Technical Depth)

The interviewer is a Tech Lead, System Architect, or Engineering Manager. They read
bullets to judge whether the candidate made *design decisions with tradeoffs* or merely
*completed routine tasks*. They are formulating interview probing questions.

For each technical bullet, ask:

**Design signal:**
- Does this bullet explain *why* and *how* something was architected, or just *what* was built?
- Good signal: *"Engineered an offline-first sales engine using Clean Architecture and SQLite to ensure 100% order capture under unstable network."*
- Weak signal: *"Created the order page and saved data to database."*

**Seniority signal:**
- Does this bullet showcase decisions a junior developer would not anticipate?
  (e.g., custom Platform Channels, camera buffer memory deallocation, reactive state decoupling, isolating background queues).
- Is there a verified concrete metric (e.g., *277 tests 100% pass*, *< 2.5s latency*, *60 FPS*, *-30% transaction time*, *1M+ downloads*)?

**Follow-up anchor:**
- Can a Tech Lead ask: *"How did you handle race conditions or memory lifecycle here?"*
- If a bullet leaves no technical hook to discuss, flag it as: `Nothing to ask about`.

Report findings as: `[Bullet Summary (first 6–8 words)] -> [Assessment: Good interview anchor / Too vague / Routine task]`.

---

## Lens 3 — Positioning Coherence

The CV/Portfolio must position the candidate clearly as a **High-Impact Mobile Engineer & System Architect** with deep expertise in Flutter, iOS, and Android.

Ask these questions:

**Skill dilution & Noise:**
- Are there non-core skills distracting from the Mobile Engineer positioning?
- Are table-stakes skills (e.g., "Git", "REST API") over-emphasized at the expense of advanced architectural capabilities?

**Flagship vs. Production Balance:**
- Is the flagship project (**AstroBite v3.0.0**) clearly highlighted for architecture, AI innovation, and test rigor?
- Are commercial enterprise projects (**Hahalolo 1M+ downloads**, **Finviet POS Kiosk**) clearly articulated for real-world business impact and scale?

**Claim-to-Evidence Alignment:**
- Does every highlight or claim match facts confirmed in `PORTFOLIO_PROFILE.md`?
- Are any metrics or responsibilities inflated beyond confirmed evidence?

Report findings as: `[Section / Project] -> Specific coherence issue`.

---

## Output Format

Produce the report in this exact structure. Do not skip any section.
Follow `AGENTS.md`: explain in clear Vietnamese for the user, retaining English
technical terms and verbatim quotes.

```markdown
# 🔍 CV & Portfolio Review Report

**Mục tiêu đánh giá**: [Full Profile / Project Name / Target JD]
**Thời điểm**: [Timestamp]

---

## 1. Recruiter / ATS (30-Second Scan)
- [Liệt kê các phát hiện: điểm nghẽn thị giác, từ khóa ATS thiếu, động từ yếu, câu quá dài]

---

## 2. Interviewer — Technical Depth (Góc nhìn Phỏng vấn Kỹ thuật)
- [Bullet trích dẫn (6-8 từ đầu)] → [Đánh giá: Good anchor / Too vague / Task completion]
  - *Gợi ý câu hỏi phỏng vấn có thể phát sinh*: ...

---

## 3. Positioning Coherence (Định vị & Nhất quán Năng lực)
- [Phát hiện về: Pha loãng kỹ năng, lệch pha giữa Tóm tắt và Dự án, tỷ trọng dự án Flagship vs Commercial]

---

## 4. Priority Fixes (Top 3–5 Điểm Cần Cải Thiện Nhất)
Sắp xếp theo thứ tự ưu tiên tác động. Mỗi mục định dạng:
1. **[Vị trí / Dự án]**: [Vấn đề cụ thể] → [Hướng điều chỉnh khuyến nghị, đối chiếu với PORTFOLIO_PROFILE.md].
2. ...
3. ...
```

---

## Rules

- **Do not rewrite any bullet.** Analysis only.
- **Do not praise.** Only report what is weak, ambiguous, or missing.
  Silence on a bullet means it passed.
- **Do not hallucinate evidence.** Evaluate only against `PORTFOLIO_PROFILE.md` and repository data.
- **Keep lenses separate.** Do not mix Recruiter scan observations with Tech Lead architecture analysis.
- **Strictly run in isolation.** Do not assume context from previous conversations.

