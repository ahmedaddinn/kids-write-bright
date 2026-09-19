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
      "M380 230 C 368 300, 344 310, 338 250 C 332 198, 296 196, 292 255 C 288 306, 262 314, 256 252 C 250 200, 214 198, 208 264 C 202 326, 196 354, 180 380 C 146 428, 76 418, 58 358 C 48 322, 48 308, 52 296",
    ],
    widths: [50],
  },
  shin: {
    id: "shin",
    name: "شين",
    viewBox: "0 0 430 570",
    strokes: [
      "M380 270 C 368 340, 344 350, 338 290 C 332 238, 296 236, 292 295 C 288 346, 262 354, 256 292 C 250 240, 214 238, 208 304 C 202 366, 196 394, 180 420 C 146 468, 76 458, 58 398 C 48 362, 48 348, 52 336",
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
      "M276 208 C 392 160, 432 262, 352 300 C 298 324, 258 278, 228 230",
      "M228 230 C 220 326, 200 372, 172 392 C 130 420, 68 406, 56 348 C 50 320, 52 300, 56 286",
    ],
    widths: [48, 48],
  },
  daad: {
    id: "daad",
    name: "ضاد",
    viewBox: "0 0 430 570",
    strokes: [
      "M276 232 C 392 184, 432 286, 352 324 C 298 348, 258 302, 228 254",
      "M228 254 C 220 350, 200 396, 172 416 C 130 444, 68 430, 56 372 C 50 344, 52 324, 56 310",
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
      "M300 170 C 350 170, 384 206, 384 252 C 384 302, 346 334, 300 334 C 252 334, 216 300, 216 252 C 216 206, 250 170, 300 170",
      "M302 228 C 334 236, 346 266, 342 288 C 314 300, 278 294, 264 282 C 264 254, 280 232, 302 228",
      "M334 318 C 322 384, 200 428, 130 420 C 58 412, 30 376, 46 320 C 52 292, 58 274, 60 264",
    ],
    widths: [40, 22, 42],
    dots: [{ cx: 300, cy: 92 }],
    dotR: 26,
  },
  qaf: {
    id: "qaf",
    name: "قاف",
    viewBox: "0 0 325 595",
    strokes: [
      "M215 200 C 258 200, 285 232, 285 272 C 285 314, 252 342, 212 342 C 168 342, 138 310, 140 268 C 142 226, 172 200, 215 200",
      "M217 252 C 245 258, 254 284, 250 302 C 226 312, 196 306, 186 296 C 186 272, 198 256, 217 252",
      "M282 330 C 286 400, 230 452, 155 452 C 80 452, 32 400, 34 330 C 36 288, 50 262, 62 248",
    ],
    widths: [40, 22, 44],
    dots: [
      { cx: 170, cy: 125 },
      { cx: 245, cy: 125 },
    ],
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
  nun: {
    id: "nun",
    name: "نون",
    viewBox: "0 0 315 593",
    strokes: [
      "M258 230 C 258 306, 250 372, 190 390 C 120 410, 60 382, 52 302 C 46 252, 52 234, 58 224",
    ],
    widths: [50],
    dots: [{ cx: 155, cy: 175 }],
    dotR: 26,
  },
  haa: {
    id: "haa",
    name: "هاء",
    viewBox: "0 0 361 587",
    strokes: [
      "M158 300 C 156 232, 214 206, 258 248 C 302 292, 292 356, 240 364 C 190 372, 160 348, 158 300",
      "M245 364 C 190 374, 92 384, 42 394 C 74 426, 152 422, 250 414",
    ],
    widths: [40, 34],
  },
  waw: {
    id: "waw",
    name: "واو",
    viewBox: "0 0 273 594",
    strokes: [
      "M150 130 C 200 130, 230 168, 228 212 C 226 256, 190 282, 148 280 C 104 278, 78 246, 80 206 C 82 164, 110 130, 150 130",
      "M152 182 C 180 188, 190 212, 186 230 C 162 240, 134 234, 124 224 C 124 200, 134 186, 152 182",
      "M224 246 C 220 330, 170 390, 110 400 C 62 408, 42 440, 52 468 C 60 488, 80 494, 100 494",
    ],
    widths: [42, 22, 42],
  },
  yaa: {
    id: "yaa",
    name: "ياء",
    viewBox: "0 0 329 595",
    strokes: [
      "M272 158 C 232 136, 178 158, 186 194 C 194 228, 248 226, 268 250",
      "M268 250 C 286 300, 230 346, 150 346 C 80 346, 48 312, 52 262 C 54 232, 60 216, 66 206",
    ],
    widths: [44, 46],
    dots: [
      { cx: 128, cy: 430 },
      { cx: 200, cy: 430 },
    ],
    dotR: 26,
  },
};
