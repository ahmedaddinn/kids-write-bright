# Exact Arabic worksheet letter shapes

## Goal
Match every tracing letter to the original uploaded worksheet artwork while preserving coloring, erasing, arrows, and completion behavior.

## Changes
- Extract each letter’s visible outline and writing guide from the original worksheet images rather than estimating Bézier curves by eye.
- Replace the approximate definitions with calibrated paths using each source image’s own proportions.
- Keep each letter’s correct dots, stroke order, direction, and interior openings.
- Ensure progressive color stays inside the exact outline and follows the child’s pointer until completion.
- Compare rendered letters against the originals at the same scale, refining any visible mismatch.

## Validation
- Review all 28 letters on desktop and mobile-sized layouts.
- Test drawing, complete-fill, color switching, and erasing on single- and multi-stroke letters.
- Confirm the app passes its automated checks and that every letter remains selectable.

## Technical details
- Store exact outline geometry separately from centerline tracing paths so visual fidelity does not depend on stroke-width approximation.
- Use SVG clipping/masking for progressive paint and retain enlarged invisible pointer targets for child-friendly tracing.
