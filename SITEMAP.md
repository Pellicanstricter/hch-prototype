# HCH Prototype — Sitemap & Information Architecture

Multi-page prototype for the Hahnemann Center for Heilkunst & Homeopathy.
**Theme is locked to Navy Light** (the only theme; palette switcher removed).
All pages share `assets/site.css` + `assets/site.js` (mobile menu + modal helpers).

Open `index.html` to start.

---

## Two homepage layouts (same education-first content, same Navy Light theme)

| File | Layout | Hero pattern |
|---|---|---|
| `index.html` | **A — Stacked** | Orientation headline, ONE primary CTA + a quiet "Already know what you need? Find treatment · Study" self-sort line. Intent paths + free course appear in context below the fold. Integrated transparent logo. |
| `index-explore.html` | **B — Split-CTA** | Orientation on the left + "Already know what you need?" intent cards on the right, brand figure faint behind. |

A gold banner at the top of each cross-links the two. (The former clinic-first Variant B was removed.)

---

## Information architecture (intent-first)

Top nav: **Learn · Get Treatment · Study · Free Resources · About · Book Consultation**

```
Home (index.html / index-clinic.html / index-explore.html)
│
├── Learn
│   ├── heilkunst.html .......... How Heilkunst works (orientation explainer / primary CTA target)
│   ├── sequential-therapy.html . How sequential treatment works
│   ├── timeline-guide.html ..... Building your traumatic timeline (patient guide)
│   └── about.html .............. About the HCH (three bodies, what is Heilkunst)
│
├── Get Treatment (The Clinic)
│   ├── conditions.html ......... Conditions we treat + practitioner summary
│   ├── condition-autism.html ... Autism detail (special-interest condition)
│   ├── practitioners.html ...... Full practitioner bios (CoCo & Rudi)
│   ├── testimonials.html ....... Patient experiences
│   ├── case-study.html ......... Sam's case — full two-year sequential treatment
│   └── new-patients.html ....... New-patient process + intake request form (quality-gated)
│
├── Study (The College)
│   └── study.html .............. Programs, fees, "knowledge over information"
│
├── Free Resources (self-service education hub — the growth engine)
│   ├── resources.html .......... Hub: featured free course + library grid
│   └── lesson.html ............. Reusable lesson template (sidebar outline + progress + upsell)
│
└── contact.html ............... Clinic + College contact, hours, mailing address
```

---

## CTA hierarchy (education-first)

1. **Primary (orientation):** "See how Heilkunst works" → `heilkunst.html`. Serves every visitor before they self-sort.
2. **Secondary (intent, not org labels):** "Find treatment for a condition" → `conditions.html`; "Study Heilkunst" → `study.html`.
3. **Strategic sleeper (recurring site-wide):** "Try the free first-aid course" → `resources.html` / `lesson.html`.
4. **Commitment escalates on deeper pages:** condition pages → "Become a new patient" (through the NPIP intake) on `new-patients.html`; study → "Apply" + "Book a call"; lessons → soft upsell to treatment/study.

**Continuity principle:** every primary CTA keeps the visitor on one continuous in-site path.

---

## Page status — all built with real content from the scrape

| Page | Source (scrape page) |
|---|---|
| index.html / index-clinic.html / index-explore.html | Homepage variants |
| heilkunst.html | 3 + 14 |
| sequential-therapy.html | 22 |
| timeline-guide.html | 8 |
| about.html | 13 / 14 / 16 |
| conditions.html | 2 / 5 |
| condition-autism.html | 6 |
| practitioners.html | 5 / 20 |
| testimonials.html | 9 |
| case-study.html | 12 |
| new-patients.html | 4 (form is a prototype stub) |
| study.html | 15 / 17 / 19 |
| contact.html | 10 / 28 |
| resources.html | 1 (hub) |
| lesson.html | template (sample "bites & stings" lesson) |

### Still future (not built)
- Full course catalog + remaining lessons (template exists; content TBD)
- Animals section, Chinese (中文) version, blog/store microsites
- Membership / health-club model
- Real forms, auth, student portal (see legacy `hch-student-portal.html`, `hch-dashboard.html`)

---

## Theming notes (Navy Light locked)
Variable names keep legacy `--green-*` / `--gold-*` labels but resolve to Navy Light values in `:root`.
Role-split variables that keep the light theme readable:
- `--surface` — page background (white)
- `--ink` — dark headings on light surfaces (navy)
- `--cream` / `--on-deep-rgb` — "text on deep" → flips to navy on the light page-hero panels
- `--on-accent` / `--on-accent-rgb` — text on the accent (blue) buttons/strips → white

**Contrast rule:** anything using `background: var(--gold)` or `var(--green-light)` (mid-blue) must use
`var(--on-accent)` text, NOT `var(--ink)`. The philosophy strip bug (dark navy on mid-blue) was fixed this way.

## Files
- `assets/site.css` — shared stylesheet (Navy Light in `:root`; old theme blocks remain but unused).
- `assets/site.js` — mobile menu + modal helpers (palette switcher removed).
- `assets/logo-mark.jpg` — circle Vitruvian mark. `logo-full.png` / `logo-full-alt.png` — full lockups.
- `reference/website-content-scrape.md` — full 30-page content scrape (source copy).
- `color-explorer.html` — original single-page explorer with all 6 palettes (kept for reference only).

## Local preview
Run from the prototype directory: `python3 -m http.server 8731`
Then open http://127.0.0.1:8731/index.html

---

## New pages added (ecosystem-consolidation round)
Ported the most valuable content from the fragmented live HCH sites (blog, college, store, events) into the unified prototype:

| Page | Role | Source |
|---|---|---|
| `blog.html` | Articles/blog hub — category filter, featured post, post grid, newsletter | blog.homeopathy.com |
| `article.html` | Reusable full-article template (sample: "the chronic miasm: Sycosis") | blog content |
| `events.html` | News & Events — Summer/Winter/Autumn schools, conferences, webcasts + newsletter | live homepage News & Events |
| `animals.html` | Animal Heilkunst (differentiator) — treatment, timeline, resources | clinic Animals sub-section |
| `core-assessment.html` | CoRe bio-resonance assessment explainer (carefully framed) | scrape page 7 |

Also: real video titles added to `resources.html` (Watch & listen section); newsletter signup on resources/blog/events; Variant B (clinic-first) removed; homepage hero streamlined to 1 primary CTA + quiet self-sort line; transparent logo integrated into hero; content pass softened over-claims site-wide.

### Notable: this prototype consolidates a fragmented ecosystem
The live HCH presence is spread across 4+ mismatched sites (homeopathy.com, blog., store., college/, plus myhealthplan.center). This prototype unifies orientation + clinic + college + blog + events into one coherent, intent-first site.
