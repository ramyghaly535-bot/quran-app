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
