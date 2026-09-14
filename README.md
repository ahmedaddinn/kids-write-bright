# Arabic Letter Tracer

Please build an interactive educational web application for kids using Next.js, TailwindCSS, and reusable React components. 

I have attached three reference screenshots of the UI. I want you to follow a strict 5-step workflow to build this. Do not skip any steps.

### Phase 1: Analyze Reference and Extract Visual Specifications

Analyze the attached screenshots and internally document the following before writing any code:

*   **Layout & Borders:** Full-screen container with a thick purple border and rounded corners. Inside is a secondary container with a thinner purple outline.

*   **Header (Top Center):** A purple rounded pill with white Arabic text ("إتّبع الأسهم و أكمل كتابة الحرف") and two yellow star icons on the edges.

*   **Navigation (Top Right):** Two outlined circular buttons with icons (Home and an Open Book) and Arabic labels beneath them. (Note: Ensure RTL layout positioning).

*   **Color Palette Tool (Top Center, below header):** An eraser icon button and 4 circular color swatches (Green, Yellow, Pink, Deep Purple) with white borders and subtle drop shadows.

*   **Main Content:** Three large instances of an Arabic letter. 

*   **Decorations:** Bottom left (cartoon girl writing) and Bottom right (cartoon boy writing).

### Phase 2: Build the First Version (Core Logic & UI)

Create the Next.js page with reusable components. 

**Required Interactive Logic (The Tracing Engine):**

1.  **State Management:** Create a state for the `selectedColor` (defaulting to null or the first color).

2.  **Color Selection:** When the user clicks one of the 4 color circles, update the `selectedColor` state. Clicking the eraser selects an "erase" mode.

3.  **Letter Tracing (Crucial):** 

    *   Implement the Arabic letters as inline `SVG` elements.

    *   Each letter needs a solid black outline and a transparent fill initially.

    *   Overlay a dashed path with directional arrows inside the letter.

    *   Implement pointer event tracking (onPointerDown, onPointerMove, onPointerUp) on the dashed path. 

    *   As the user clicks and drags along the path in the correct direction (following the arrows from start to finish), track their progress. 

    *   Once the tracing path reaches the end threshold, fill the SVG letter's background with the globally `selectedColor`. If the eraser is selected, clicking/dragging should remove the fill.

### Phase 3: Visual Comparison & Self-Correction

*(Simulate a visual screenshot comparison)* 

Review your generated React code against the detailed specifications from Phase 1. Check your mental model of the layout: Are the 4 colored circles perfectly centered? Are the corner illustrations positioned absolutely at the bottom edges? Is the header text styled correctly?

### Phase 4: Iterate on Differences

Refine the spacing, sizing, and typography. 

*   Ensure the Tailwind classes use `dir="rtl"` logical properties (like `ms-`, `me-`, `ps-`, `pe-`) where appropriate, though the layout visually anchors the nav to the top right and the header to the top center.

*   Make sure the color swatch buttons have a scale effect on hover/active states to indicate interactivity.

*   Ensure the SVG tracing paths are wide enough to easily register touch/mouse movements (use a thick, transparent `stroke` on top of the dashed visual line for the hit area).

### Phase 5: Finalize (A11y, RTL, Performance)

*   **RTL Support:** Set the root or main container to `dir="rtl"`.

*   **Accessibility:** Add `aria-label` to the color buttons (e.g., "Select Green Color"), the eraser, and the navigation buttons. Ensure keyboard navigation (Tab and Enter) works for selecting colors.

*   **Responsiveness:** Ensure the 3 letters stack on smaller screens (e.g., `flex-col` on mobile, `flex-row` on `md` screens) so the app remains usable on tablets and phones.

Please output the complete, self-contained Next.js code including the necessary SVG components to achieve this interactive tracing effect.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kids-write-bright.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1ac8c47f-a304-4eb7-a2f0-6d4fe75f829f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
