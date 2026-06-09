# Quran App - Worklog

## UI Improvements - Batch 1

**Date**: 2025-01-01
**Agent**: Main

### Changes Made

#### 1. Arrow Indicator on "اختر السورة" Button
- Added `showSurArrow()` call in the `init()` function so the arrow is visible from the start
- Arrow already disappears on surah selection via `hideSurArrow()` in `startRd()` (line 616)
- Arrow already hides when surah modal opens via `hideSurArrow()` in `openSurM()` (line 717)
- No changes needed to existing hide logic — it was already correctly implemented

#### 2. Fix Icons to Display Fully on Mobile Screens
- **Base `.rc-nm`**: Removed `white-space: nowrap; overflow: hidden; text-overflow: ellipsis` so reciter names display fully instead of being truncated
- **Base `.rc-c`**: Added `min-height: 62px` to prevent cards from being squished
- **768px breakpoint**: Increased `.rc-img`/`.rc-avatar` from 36px to 42px
- **400px breakpoint**: Changed `.rc-g` from 5 columns to 4 columns; increased `.rc-img`/`.rc-avatar` from 32px to 42px; increased `.rc-nm` from .68rem to .72rem

#### 3. Improve Touch Interaction
- Added `-webkit-tap-highlight-color: transparent` to `body`
- Added `touch-action: manipulation` and `-webkit-tap-highlight-color: transparent` and `user-select: none` to `.bt`, `.bp`, `.bs` buttons
- Added `user-select: none` to `.rc-c` cards
- Increased slider thumb size from 15px to 20px for easier touch interaction

#### 4. Volume Up/Down Buttons for Recitation
- Added two volume buttons (`volUpB` and `volDownB`) in the `.br` controls bar between the next button and surah button
- Added click event listeners that increase/decrease volume by 10% and show a toast with current volume percentage
- Added `.vol-btn` CSS styling with gold color and opacity transitions

---

Task ID: 5
Agent: Main
Task: Add reciter notification banner showing "قراءة عطرة بصوت القارئ" with reciter name and surah, appearing 10 seconds then disappearing

Work Log:
- Added HTML notification element `rec-notif` in page.tsx JSX after the toast element
- Added `showReciterNotif(reciterName, surahName)` function that shows the banner for 10 seconds with auto-hide
- Called `showReciterNotif` in `startRd()` in all 3 audio paths: link mode, API mode, and fallback API mode
- Added comprehensive CSS in globals.css: glass morphism banner with gold border, pulsing glow animation, crescent icon animation, responsive mobile styles

Stage Summary:
- Notification appears at top center with gold Islamic crescent icon, "قراءة عطرة بصوت القارئ" title, and reciter name + surah name
- Auto-disappears after 10 seconds
- Responsive design for mobile screens

---

Task ID: 6
Agent: Main
Task: Implement zero-delay ayah-audio sync with requestAnimationFrame and expand quran.com reciter coverage

Work Log:
- Replaced `timeupdate` event listener (~4Hz, 250ms delay) with `requestAnimationFrame` loop (~60fps, ~16ms delay) for zero-delay ayah detection
- Added `startRAFSync()` and `stopRAFSync()` functions that manage the rAF loop lifecycle
- rAF loop handles: progress bar updates, time display, and precise ayah-by-ayah sync detection using quran.com timestamps
- `timeupdate` is now only used as fallback for non-link mode (ayah-by-ayah API playback) for basic time display
- Added rAF cleanup on `pause`, `error`, `ended`, and `startRd()` to prevent memory leaks
- Expanded QC_MAP with 8 additional reciters: hudhaify(5), saaborali(17), sahl_yaseen(17), faresabbad(14), salahbudair(43), azizalili(44), mohammedaltablawi(91), yasserdosari(97)
- Expanded QC_DL_MAP with 10 additional download-folder mappings: hudhaify, aboona, sahl, fares, salah_budair, hajjaji, tablawi, yasser, hane, m_husary, ketbi, balilah
- Fixed sync mode text: changed `ar.muyassar` to `ar.alafasy` as primary text edition (muyassar was showing tafsir instead of Quran text; now moved to secondary position)
- Total quran.com sync coverage: 20+ reciters now mapped (12 by id + 15 by download folder)

Stage Summary:
- Zero-delay sync: rAF loop runs at 60fps (16ms) vs old timeupdate at 4Hz (250ms) — 15x faster detection
- 20+ reciters now have precise quran.com segment-based sync (was 12)
- Proper Arabic Quran text displayed in sync mode (was showing tafsir)
- All changes verified with Agent Browser — no console errors, proper data flow confirmed

---

Task ID: 7
Agent: Main
Task: Add getQuranTimestamps function with verse_timings format and expand QC_DL_MAP coverage

Work Log:
- Added `getQuranTimestamps(reciterId, chapterNumber)` async function that fetches verse timings from `/api/quran-sync` API proxy
- Returns standardized format: `{verse_key, start_time, end_time}` in milliseconds
- Supports both `verse_timings` (standard) and `timestamps` (quran.com legacy) response formats
- Updated API proxy (`/api/quran-sync/route.ts`) to normalize response and include both `verse_timings` and `timestamps` fields
- Updated `startSyncedPlay()` to support both `timestamps` and `verse_timings` from API response
- Added `verseTimings` array variable for standard format storage alongside `syncedTimestamps`
- Updated `syncedTimestamps` to include `key` field (verse_key)
- Expanded QC_DL_MAP from 20 to 50+ entries covering all built-in and popular pool reciters:
  - Added: juhany(48), kazabri(55), akhdar(34), naina(83), kandari(77), thubaiti(73), makhloof(70), ghamdi(67), jaber(45), fawzan(61), kalbani(64), qasim(58), khalifi(68), zahran(85), qarni(93), mgagry(71), maali(80), hadouchi(57), hawashi(84), nabil(88), hamid(86), jdeed(90), fahad(60), nufais(48), jleel(50), abkr(46), qtm(78)
  - Added tajweed variants: afasy_tajweed, abdulbasit_mujawwad, husary_mujawwad, husary_tajweed, minshawi_mujawwad, sudais_tajweed, shur_tajweed, yasser_mujawwad, juhany_tajweed, akhdar_mujawwad, bader_tajweed, m_husary, m_shur

Stage Summary:
- `getQuranTimestamps(7, 1)` → returns `[{verse_key:"1:1", start_time:0, end_time:6090}, ...]` (7 verses for Al-Fatiha)
- API proxy normalizes all responses to include `verse_timings` field in standard format
- 50+ reciters now mapped for automatic quran.com sync (was 20)
- All verified with Agent Browser: Mishary Al-Afasy + Al-Fatiha plays with quran.com audio, rAF sync auto-advances ayah text correctly (verified verse 2 at 0:09s → verse 5 at 0:25s)
- No browser console errors, clean compilation

---
Task ID: 8
Agent: Main
Task: Add auto-discovery of quran.com timings + audio verification for newly added reciters

Work Log:
- Created `/api/find-quran-reciter/route.ts` — searches for quran.com reciter ID by:
  1. Cache (in-memory)
  2. Known static DL map (~45 entries)
  3. Arabic name keyword matching (~27 hints)
  4. Scanning known QC IDs (1-174) by audio URL path matching
  5. Verifies discovered IDs have actual timestamps
- Created `/api/verify-audio/route.ts` — HEAD request to test audio URL validity (returns ok, status, contentType, size)
- Added `discoverAndVerify(recName, dlFolder, audioUrl)` async function in page.tsx:
  1. Verifies audio URL by testing Al-Fatiha (001.mp3)
  2. Searches quran.com for matching reciter ID
  3. Caches discovered IDs in localStorage (`dyn_qc`)
  4. Adds discovered IDs to QC_DL_MAP dynamically
- Updated `addWebReciter()` — now calls `discoverAndVerify()` in background after adding
  - Stores `qcId` on reciter object for 3-tier lookup
  - Shows toast: ✅ for synced mode, ⚠️ for broken audio, ℹ️ for estimated timings
- Updated `addNewReciter()` — same discovery flow for pool reciters
- Updated `startRd()` — 3-tier quran.com ID lookup:
  1. QC_MAP (static, by API ID)
  2. QC_DL_MAP (static + dynamic, by DL folder)
  3. reciter.qcId (dynamic, stored on object)
  - If no mapping found, tries async discovery while falling back to doLinkMode
  - If async discovery finds ID, stops playback and restarts with synced mode
- Added `dynamicQCMap` with localStorage persistence via `gDynamicQC()`/`sDynamicQC()`

Stage Summary:
- Every newly added reciter automatically gets audio URL verification + quran.com timing discovery
- 3-tier lookup ensures previously discovered IDs are reused (localStorage cache)
- Audio URL failures reported immediately via toast notification
- Reciters with quran.com match get precise segment-based sync (rAF 60fps)
- Reciters without match fall back to estimated timings (still rAF-synced)
- All APIs tested: find-quran-reciter returns correct IDs for known reciters, verify-audio correctly detects broken URLs
- Lint clean, no browser errors
