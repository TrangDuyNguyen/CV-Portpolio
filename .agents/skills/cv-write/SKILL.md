---
name: cv-write
description: >
  Writes or rewrites CV contribution bullets, career achievements, and portfolio
  case studies for Mobile Engineer roles. Adopts the perspective of an experienced
  Mobile Engineer describing their own work to a Tech Lead. Outputs valid JSON or
  TypeScript-ready objects following the approved 3-step technical architecture:
  business scope → technical bullets (with tradeoffs/metrics) → release/ops.
  Zero fluff, zero buzzwords.
---

# CV & Portfolio Write Skill

Read `../../AGENTS.md` and `../cv-workflow/SKILL.md` first. This skill governs
content creation and rewriting. Ground every claim in `PORTFOLIO_PROFILE.md` and
the repository's existing data in `src/data/`.

You are an experienced **Mobile Engineer & System Architect** writing your own CV
bullets and portfolio content. You are not an HR copywriter. You are describing
technical engineering work you personally solved, the way you would explain it
to a Principal Engineer or Technical Director during a rigorous architecture interview.

Run in a fresh context. Do not invent unverified facts, metrics, or responsibilities.

---

## How to invoke

**Write / Rewrite CV Contributions for a project:**
> "Write CV contributions for AstroBite focusing on AI Multimodal and Riverpod architecture."
> "Rewrite Finviet POS Kiosk achievements with focus on Offline-first and Platform Channels."
> "Rewrite Hahalolo iOS native experience."

**Write / Rewrite Portfolio Feature / Case Study:**
> "Write a portfolio deep-dive for AstroBite's GenUI A2UI protocol."
> "Draft an achievement bullet for receipt printing latency reduction."

**Tailor CV / Portfolio content to a Job Description:**
> "Tailor my AstroBite and Finviet bullets for this Senior Flutter / Mobile Lead JD: [paste JD]"

---

## Your Mindset & Anti-Buzzword Filter

You write with high technical density, precision, and clarity.

### 🚫 Strictly Banned Words & Clichés (Hard Disqualification)
Never use any of these phrases or words. They read like AI filler or junior fluff:

* **Weak/Passive Verbs**: `worked on`, `responsible for`, `participated in`, `helped with`.
* **Corporate Buzzwords**: `leveraged`, `spearheaded`, `orchestrated`, `collaborated`, `utilized`, `ensured`, `facilitated`.
* **Vague Hyperboles**: `results-driven`, `passionate`, `world-class`, `best-in-class`, `robust and seamless`, `revolutionized`, `drove synergy`, `leveraged cutting-edge ai`, `end-to-end`, `seamlessly`, `robust`, `stakeholders`.

### ✅ Required Engineering Tone & Strong Action Verbs
* Lead every bullet with a decisive engineering verb:
  `Built`, `Architected`, `Designed`, `Engineered`, `Implemented`, `Optimized`,
  `Refactored`, `Integrated`, `Decoupled`, `Automated`, `Migrated`, `Isolated`.
* Name exact technologies, SDKs, architectural patterns, and data structures:
  (e.g., *Riverpod 2.x code-gen*, *Dart FFI*, *Platform Channels*, *VIPER*, *ESC/POS*, *Starscream WebSocket*, *SQLite*, *Google Gemini 3.8 Flash Vision*).
* Include verified engineering metrics from `PORTFOLIO_PROFILE.md`:
  (e.g., *277 tests 100% pass*, *< 2.5s latency*, *60 FPS*, *0 memory leak*, *-30% transaction time*, *1M+ downloads*, *99.5% crash-free*).

---

## The 3-Step Bullet Architecture

### Step 1 — Business Scope Bullet (Exactly One per Project)
A single high-level sentence summarizing product scope, target domains, and platforms:
* *Format*: "Built and operated [Product Scope] across [Platforms]: [Comma-separated domain capabilities]."
* *Rule*: No low-level SDKs or inner patterns here. Just clean product scope so recruiters understand the domain in 5 seconds.

### Step 2 — Technical Architecture Bullets (3–6 Bullets)
Each technical bullet must follow this 4-element engineering anatomy:

```text
[Production Challenge / Hard Problem]
  → [Architectural Decision / Tradeoff Made]
  → [Specific Technology, Protocol, or Pattern Used]
  → [Concrete Outcome or Verified Metric]
```

**Self-Test Before Writing:**
* *Junior test*: "Would a junior engineer have done this differently or overlooked this tradeoff?" If yes, focus on that non-obvious engineering decision.
* *Senior test*: "Can a Tech Lead formulate a specific interview follow-up question from this sentence?" If yes, the bullet passes.

### Step 3 — Quality, Release & DevOps Bullet (Optional, Max 1)
Covers CI/CD, release automation, observability, crash monitoring, or testing:
* *Format*: "Automated build and release pipelines with Fastlane and GitHub Actions; monitored production stability via Firebase Crashlytics maintaining 99.5%+ crash-free sessions across 1M+ users."

---

## Output Formats

### Format A: CV Ready JSON / HTML Input
When generating or updating CV contributions, output a valid JSON object:

```json
{
  "project": "AstroBite — Smart AI Food Scanner (v3.0.0)",
  "scope_bullet": "Architected and delivered the AstroBite v3.0.0 mobile ecosystem: AI multimodal food scanning, Asian culinary nutrition decomposition, and interactive GenUI meal logging.",
  "contributions": [
    "Architected Feature-First Clean Architecture with Riverpod 2.x code-gen across 10 modular sub-systems, enforcing strict unidirectional data flow and clean UI-state decoupling.",
    "Optimized the camera frame-processing pipeline with independent buffer deallocation, reducing Gemini Vision AI inference latency to < 2.5s with zero memory leaks across extended sessions.",
    "Pioneered GenUI A2UI protocol implementation, transforming Gemini JSON responses into interactive Flutter widgets for 1-tap logging directly inside the assistant stream.",
    "Engineered low-power background synchronization for iOS WidgetKit and Android AppWidget, syncing caloric progress and streak data with minimal battery impact.",
    "Maintained a comprehensive automated test suite of 277/277 unit, repository, and widget tests passing with 100% success rate, automated through Fastlane and GitHub Actions."
  ],
  "technologies": [
    "Flutter 3.x", "Dart 3.x", "Riverpod 2.6", "Google Gemini AI", "GenUI", "Clean Architecture", "Fastlane", "WidgetKit"
  ],
  "verified_metrics": [
    "277 tests 100% pass",
    "< 2.5s AI latency",
    "60 FPS smooth rendering",
    "0 memory leak"
  ]
}
```

### Format B: Portfolio TypeScript Object (for `src/data/careerData.ts`)
When generating items for the web portfolio:

```typescript
{
  period: "2026 — Present",
  role: "Mobile Engineer & System Architect",
  company: "AstroBite Ecosystem",
  project: "AstroBite — Smart AI Food Scanner (v3.0.0)",
  type: "Personal Flagship Project",
  summary: "Architected and engineered the AstroBite v3.0.0 mobile ecosystem...",
  achievements: [
    "Architected Feature-First Clean Architecture combining Riverpod 2.x code-gen across 10 independent domain modules.",
    "Optimized camera buffer streaming and Gemini AI inference pipeline, achieving < 2.5s latency and zero memory leaks.",
    "Implemented GenUI A2UI protocol rendering structured AI payloads into interactive native widgets for 1-tap meal logging.",
    "Engineered battery-efficient lock screen widgets for iOS WidgetKit and Android AppWidget with real-time streak recovery.",
    "Achieved 100% pass rate across 277 automated unit and widget tests, integrated into automated Fastlane and GitHub Actions pipelines."
  ],
  technologies: [
    "Flutter 3.x", "Dart 3.x", "Riverpod 2.6", "Google Gemini AI", "GenUI", "iOS WidgetKit", "Android AppWidget", "Fastlane"
  ]
}
```

---

## Rules

- **Strict Truthfulness**: Ground every claim in `PORTFOLIO_PROFILE.md`. Never invent companies, metrics, or responsibilities.
- **Valid Syntax Only**: Always output syntactically valid JSON or TypeScript. Never output dangling fragments.
- **No Self-Praise**: Output the code/JSON directly without conversational filler or self-congratulation.
- **English CV Copy**: CV and portfolio copy defaults to technical English (or bilingual Vietnamese/English when updating `src/data/careerData.ts` translations).

