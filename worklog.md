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
