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
      // hamza: small curl, from the right over the top and back down-left
      "M154 30 C 118 12, 76 28, 88 52 C 98 70, 134 66, 128 50",
      // hamza base: short bar running to the left
      "M148 92 L92 94",
      // the long stem, drawn top to bottom
      "M118 140 L118 310",
    ],
    widths: [22, 22, 48],
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
    viewBox: "0 0 352 598",
    strokes: [
      // long descending stroke: down the right side, round the bottom bowl, up left
      "M305 155 L305 350 Q305 425 190 425 Q57 425 57 305",
      // the small zigzag hamza inside the bowl
      "M215 255 L152 282 L205 318 L150 337",
    ],
    widths: [46, 26],
  },
  lam: {
    id: "lam",
    name: "لام",
    viewBox: "0 0 293 593",
    strokes: ["M247 95 L247 355 Q247 455 152 455 Q57 455 57 305"],
    widths: [50],
  },
  meem: {
    id: "meem",
    name: "ميم",
    viewBox: "0 0 293 590",
    strokes: [
      // the round head, traced anti-clockwise from the left
      "M105 258 C 98 148, 265 140, 265 238 C 265 318, 145 330, 106 268",
      // the tail dropping straight down
      "M96 288 Q62 300 62 458",
    ],
    widths: [48, 48],
  },
};
