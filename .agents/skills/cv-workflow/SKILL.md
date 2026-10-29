---
name: cv-workflow
description: >
  Orchestrates the end-to-end CV and Portfolio development lifecycle: tailoring
  content to JDs, auditing claims against PORTFOLIO_PROFILE.md, generating senior
  bullets with cv-write, auditing with cv-review, previewing via local Vite dev server
  or cv-print.html, and exporting ATS-compliant PDFs.
---

# CV & Portfolio Delivery Workflow

Read `../../AGENTS.md` and the companion skills `cv-write` and `cv-review`.
All paths are relative to this workspace repository root (`c:\Projects\CV-Portpolio`).

---

## 1. Choose the Operation

* **Audit & Review**: Inspect existing CV or portfolio content; invoke `cv-review` in read-only mode to produce an ATS, technical depth, and positioning report.
* **Write & Tailor**: Write or rewrite achievements and case studies; invoke `cv-write` to generate high-density, senior-level bullets.
* **Sync Portfolio Data**: Update `src/data/careerData.ts`, `src/data/astrobiteData.ts`, and `src/data/profileData.ts` for the live web portfolio.
* **Preview**: Serve web portfolio (`npm run dev`) or CV print preview (`cv-print.html`).
* **Export PDF**: Print/export `cv-print.html` to high-fidelity, ATS-friendly PDF.

---

## 2. Ground Truth & Evidence Ledger

Never invent or hallucinate metrics, dates, or responsibilities. Always cross-check against:

1. **Master Profile**: `PORTFOLIO_PROFILE.md` (Contains verified metrics, architectural breakdowns, AstroBite v3.0.0 specs, Finviet POS Kiosk, and Hahalolo enterprise systems).
2. **Web Data Sources**:
   * `src/data/careerData.ts` (Bilingual career history & achievements).
   * `src/data/astrobiteData.ts` (12 modules, AI pipeline, GenUI protocol, 277 tests).
   * `src/data/profileData.ts` (Contact, title, core stats).
3. **Printable CV Template**: `cv-print.html` (Standalone, zero-dependency, ATS-optimized print layout).

---

## 3. Step-by-Step Delivery Pipeline

```
 [Step 1: Input & JD] ──► [Step 2: Evidence Audit] ──► [Step 3: cv-write]
                                                               │
                                                               ▼
 [Step 6: PDF / Live] ◄── [Step 5: cv-review Gate] ◄── [Step 4: Preview]
```

### Step 1: Ingest Job Description (JD) & Target Role
* Extract hard requirements: Primary stack (Flutter, iOS Swift, Android Kotlin), architectural expectations (Clean Architecture, Riverpod/BLoC), leadership scope, and domain (AI, Payments, Social, Kiosk).
* Identify keywords needed for ATS matching.

### Step 2: Map Evidence to Claims
* Cross-reference JD requirements against `PORTFOLIO_PROFILE.md`.
* Classify each requirement:
  * **Direct Match**: Proven in AstroBite, Finviet, or Hahalolo with verified metrics.
  * **Transferable**: Core pattern proven in another stack (e.g., VIPER in iOS $\leftrightarrow$ Clean Architecture in Flutter).
  * **Unsupported**: Flag honestly; never invent experience.

### Step 3: Draft Content with `cv-write`
* Invoke `cv-write` to draft bullets adhering to the 3-step anatomy:
  * Business scope bullet (1 sentence).
  * Technical architecture bullets (Problem $\rightarrow$ Tradeoff $\rightarrow$ Tech $\rightarrow$ Metric).
  * DevOps / Quality bullet (Fastlane, 277 tests 100% pass, 99.5% crash-free).
* Update `cv-print.html` for printed CVs or `src/data/careerData.ts` for the web portfolio.

### Step 4: Preview Content
Run preview servers depending on target:

**A. Web Portfolio Preview (Vite):**
```powershell
npm run dev
# Opens at http://localhost:5173
```

**B. Printable CV Preview (HTML):**
```powershell
# In PowerShell:
python -m http.server 8766 --bind 127.0.0.1
# Open http://127.0.0.1:8766/cv-print.html in Chrome or Edge
```

### Step 5: Verification Gate with `cv-review`
* Invoke `cv-review` in an isolated context.
* Inspect the 3 lenses:
  * ATS scanability & verb strength.
  * Technical depth & interview anchor quality.
  * Positioning coherence as a Senior Mobile Engineer / Architect.
* If any priority fix is flagged, resolve before final export.

### Step 6: Export & Final Artifact Generation

**Exporting `cv-print.html` to PDF:**
* Open `http://127.0.0.1:8766/cv-print.html` in Chrome or Edge.
* Press `Ctrl + P` (Print):
  * **Destination**: Save as PDF
  * **Paper size**: A4
  * **Margins**: None / Custom (0mm)
  * **Options**: Check "Background graphics"
* Alternatively, run automated headless export via Chrome or Edge:
  ```powershell
  # Using Google Chrome:
  & "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --print-to-pdf="Mobile_Engineer_Nguyen_Duy_Trang.pdf" --no-pdf-header-footer "http://127.0.0.1:8766/cv-print.html"

  # Or using Microsoft Edge:
  & "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="Mobile_Engineer_Nguyen_Duy_Trang.pdf" --no-pdf-header-footer "http://127.0.0.1:8766/cv-print.html"
  ```
* Inspect exported PDF: Check page count, ensure no text clipping or awkward orphan lines across page breaks.

---

## 4. Persistent Quality Rules

1. **No Du Di (Zero Compromise)**: Never claim unverified metrics or fake achievements.
2. **Never Edit Generated Bundles Directly**: Edit source files (`src/data/`, `cv-print.html`), then re-verify.
3. **Always Verify HTML Preview Before Exporting PDF**: Visual inspection of margin alignment and font rendering is mandatory before finalizing any PDF release.

