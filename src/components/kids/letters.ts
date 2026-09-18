/**
 * Each letter is drawn as a set of "tube" strokes: a thick black stroke with a
 * slightly thinner fill stroke on top, which produces the outlined look of a
 * writing worksheet. Strokes must be traced in order, following the arrows.
 * Coordinates follow the uploaded worksheet drawings 1:1.
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
  /** Outer radius of the decorative dots (defaults to 20). */
  dotR?: number;
};

export const LETTERS: Record<string, LetterSpec> = {
  alif: {
    id: "alif",
    name: "ألف",
    viewBox: "0 0 347 597",
    strokes: [
      // hamza: small curl over the top, then back down to the left
      "M196 40 C 122 30, 116 84, 172 88",
      // hamza base bar, running to the left
      "M196 142 L108 144",
      // the long stem, top to bottom
      "M163 212 L176 512",
    ],
    widths: [26, 30, 56],
  },
  baa: {
    id: "baa",
    name: "باء",
    viewBox: "0 0 438 570",
    strokes: ["M352 190 C 372 290, 300 330, 215 330 C 130 330, 55 295, 70 215"],
    widths: [56],
    dots: [{ cx: 218, cy: 412 }],
    dotR: 30,
  },
  taa: {
    id: "taa",
    name: "تاء",
    viewBox: "0 0 432 578",
    strokes: ["M345 190 C 368 285, 295 325, 212 325 C 128 325, 52 292, 66 215"],
    widths: [56],
    dots: [
      { cx: 176, cy: 182 },
      { cx: 246, cy: 182 },
    ],
    dotR: 30,
  },
  thaa: {
    id: "thaa",
    name: "ثاء",
    viewBox: "0 0 402 595",
    strokes: ["M340 200 C 362 295, 290 340, 205 340 C 120 340, 45 305, 58 228"],
    widths: [55],
    dots: [
      { cx: 196, cy: 175 },
      { cx: 162, cy: 240 },
      { cx: 232, cy: 240 },
    ],
    dotR: 28,
  },
  jim: {
    id: "jim",
    name: "جيم",
    viewBox: "0 0 318 599",
    strokes: [
      "M55 190 C 140 165, 200 200, 262 215",
      "M160 232 C 60 278, 55 398, 165 425 C 220 434, 250 426, 270 418",
    ],
    widths: [50, 50],
    dots: [{ cx: 150, cy: 350 }],
    dotR: 26,
  },
  haa: {
    id: "haa",
    name: "حاء",
    viewBox: "0 0 330 595",
    strokes: [
      "M58 190 C 145 165, 205 200, 268 215",
      "M165 232 C 62 278, 58 398, 170 425 C 225 434, 258 426, 278 415",
    ],
    widths: [50, 50],
  },
  khaa: {
    id: "khaa",
    name: "خاء",
    viewBox: "0 0 313 593",
    strokes: [
      "M55 210 C 140 185, 198 220, 258 235",
      "M155 252 C 58 296, 54 410, 162 436 C 216 444, 246 436, 266 426",
    ],
    widths: [50, 50],
    dots: [{ cx: 165, cy: 128 }],
    dotR: 26,
  },
  daal: {
    id: "daal",
    name: "دال",
    viewBox: "0 0 327 593",
    strokes: ["M170 175 C 250 250, 280 302, 265 352 C 245 400, 130 402, 62 392"],
    widths: [54],
  },
  thaal: {
    id: "thaal",
    name: "ذال",
    viewBox: "0 0 290 593",
    strokes: ["M150 212 C 225 282, 250 326, 235 366 C 215 406, 115 410, 58 404"],
    widths: [52],
    dots: [{ cx: 133, cy: 116 }],
    dotR: 28,
  },
  raa: {
    id: "raa",
    name: "راء",
    viewBox: "0 0 276 592",
    strokes: ["M172 120 C 205 200, 200 300, 140 360 C 106 394, 80 400, 62 402"],
    widths: [50],
  },
  zay: {
    id: "zay",
    name: "زاي",
    viewBox: "0 0 276 592",
    strokes: ["M172 190 C 205 268, 200 366, 140 424 C 106 456, 80 462, 62 464"],
    widths: [50],
    dots: [{ cx: 148, cy: 112 }],
    dotR: 26,
  },
  sin: {
    id: "sin",
    name: "سين",
    viewBox: "0 0 430 570",
    strokes: [
      "M368 232 C 356 300, 340 312, 330 252 C 322 212, 300 212, 295 256 C 290 300, 276 306, 262 258 C 252 216, 226 212, 216 262 C 206 322, 200 342, 186 372 C 150 422, 80 412, 62 352 C 52 316, 52 302, 56 290",
    ],
    widths: [50],
  },
  shin: {
    id: "shin",
    name: "شين",
    viewBox: "0 0 430 570",
    strokes: [
      "M368 262 C 356 330, 340 342, 330 282 C 322 242, 300 242, 295 286 C 290 330, 276 336, 262 288 C 252 246, 226 242, 216 292 C 206 352, 200 372, 186 402 C 150 452, 80 442, 62 382 C 52 346, 52 332, 56 320",
    ],
    widths: [50],
    dots: [
      { cx: 286, cy: 140 },
      { cx: 252, cy: 196 },
      { cx: 318, cy: 196 },
    ],
    dotR: 26,
  },
  saad: {
    id: "saad",
    name: "صاد",
    viewBox: "0 0 430 570",
    strokes: [
      "M318 198 C 398 188, 408 252, 350 278 C 300 298, 262 270, 232 234",
      "M232 234 C 222 322, 200 366, 172 386 C 130 414, 68 400, 56 342 C 50 314, 52 294, 56 280",
    ],
    widths: [48, 48],
  },
  daad: {
    id: "daad",
    name: "ضاد",
    viewBox: "0 0 430 570",
    strokes: [
      "M318 222 C 398 212, 408 276, 350 302 C 300 322, 262 294, 232 258",
      "M232 258 C 222 346, 200 390, 172 410 C 130 438, 68 424, 56 366 C 50 338, 52 318, 56 304",
    ],
    widths: [48, 48],
    dots: [{ cx: 330, cy: 136 }],
    dotR: 26,
  },
  taah: {
    id: "taah",
    name: "طاء",
    viewBox: "0 0 330 597",
    strokes: [
      "M96 180 L96 400",
      "M92 400 C 55 385, 32 415, 55 438 C 120 478, 262 468, 282 385 C 292 330, 215 300, 160 350 C 138 372, 125 390, 118 398",
    ],
    widths: [46, 46],
  },
  thaah: {
    id: "thaah",
    name: "ظاء",
    viewBox: "0 0 330 597",
    strokes: [
      "M96 180 L96 400",
      "M92 400 C 55 385, 32 415, 55 438 C 120 478, 262 468, 282 385 C 292 330, 215 300, 160 350 C 138 372, 125 390, 118 398",
    ],
    widths: [46, 46],
    dots: [{ cx: 202, cy: 258 }],
    dotR: 26,
  },
  ain: {
    id: "ain",
    name: "عين",
    viewBox: "0 0 300 570",
    strokes: [
      "M212 122 C 150 92, 70 118, 72 180 C 74 226, 120 246, 166 240",
      "M238 240 C 150 230, 60 266, 62 350 C 64 432, 176 462, 252 420",
    ],
    widths: [46, 46],
  },
  ghain: {
    id: "ghain",
    name: "غين",
    viewBox: "0 0 300 620",
    strokes: [
      "M212 182 C 150 152, 70 178, 72 240 C 74 286, 120 306, 166 300",
      "M238 300 C 150 290, 60 326, 62 410 C 64 492, 176 522, 252 480",
    ],
    widths: [46, 46],
    dots: [{ cx: 142, cy: 82 }],
    dotR: 26,
  },
  faa: {
    id: "faa",
    name: "فاء",
    viewBox: "0 0 400 595",
    strokes: [
      "M300 178 C 375 188, 385 266, 320 300 C 255 332, 205 286, 216 236 C 224 196, 258 174, 300 178",
      "M264 242 C 286 230, 306 252, 300 274 C 290 294, 264 290, 260 270",
      "M300 322 C 290 382, 200 422, 130 416 C 60 410, 34 376, 46 322 C 50 292, 56 274, 58 264",
    ],
    widths: [44, 26, 44],
    dots: [{ cx: 296, cy: 114 }],
    dotR: 26,
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
