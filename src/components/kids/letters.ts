/**
 * Each letter is drawn as a set of "tube" strokes: a thick black stroke with a
 * slightly thinner fill stroke on top, which produces the outlined look of a
 * writing worksheet. Strokes must be traced in order, following the arrows.
 */
export type LetterSpec = {
  id: string;
  name: string;
  viewBox: string;
  /** Ordered guide strokes, from first pen-down to last pen-up. */
  strokes: string[];
  /** Optional per-stroke tube thickness (defaults to 46). */
  widths?: number[];
  /** Decorative dots (above or below the letter body). */
  dots?: Array<{ cx: number; cy: number }>;
};

export const LETTERS: Record<string, LetterSpec> = {
  alif: {
    id: "alif",
    name: "ألف",
    viewBox: "0 0 240 340",
    strokes: [
      // hamza: curl from the top-right dot, sweeping left, down and back right
      "M132 26 C 96 10, 52 30, 62 58 C 70 80, 108 80, 110 64 C 112 50, 132 58, 122 78",
      // hamza base: short bar running to the left
      "M130 92 L74 96",
      // the long slightly slanted stem, drawn top to bottom
      "M106 156 L120 306",
    ],
    widths: [28, 28, 44],
  },
  baa: {
    id: "baa",
    name: "باء",
    viewBox: "0 0 240 340",
    strokes: ["M180 122 Q180 232 120 232 Q60 232 60 122"],
    dots: [{ cx: 120, cy: 292 }],
  },
  taa: {
    id: "taa",
    name: "تاء",
    viewBox: "0 0 240 340",
    strokes: ["M180 152 Q180 262 120 262 Q60 262 60 152"],
    dots: [
      { cx: 98, cy: 96 },
      { cx: 142, cy: 96 },
    ],
  },
  kaf: {
    id: "kaf",
    name: "كاف",
    viewBox: "0 0 240 340",
    strokes: [
      "M170 60 L170 210 Q170 262 112 262 Q58 262 58 198",
      "M92 168 L142 132",
    ],
  },
  lam: {
    id: "lam",
    name: "لام",
    viewBox: "0 0 240 340",
    strokes: ["M168 55 L168 205 Q168 262 112 262 Q58 262 58 190"],
  },
  meem: {
    id: "meem",
    name: "ميم",
    viewBox: "0 0 240 340",
    strokes: [
      "M148 118 A38 38 0 1 1 147 118",
      "M112 152 Q104 200 104 274",
    ],
  },
};
