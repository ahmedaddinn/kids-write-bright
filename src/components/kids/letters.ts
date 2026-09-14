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
};

export const LETTERS: Record<string, LetterSpec> = {
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
