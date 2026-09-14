import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";

import { ColorPalette } from "@/components/kids/ColorPalette";
import { NavButtons } from "@/components/kids/NavButtons";
import { TraceLetter } from "@/components/kids/TraceLetter";
import { LETTERS } from "@/components/kids/letters";
import { CRAYONS, type PaintTool } from "@/components/kids/palette";
import girlWriting from "@/assets/girl-writing.png";
import boyWriting from "@/assets/boy-writing.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "تتبّع الحروف العربية | لعبة كتابة للأطفال" },
      {
        name: "description",
        content:
          "لعبة تفاعلية لتعليم الأطفال كتابة الحروف العربية: اتبع الأسهم، أكمل الحرف، ثم لوّنه بالألوان.",
      },
      { property: "og:title", content: "تتبّع الحروف العربية | لعبة كتابة للأطفال" },
      {
        property: "og:description",
        content: "اتبع الأسهم وأكمل كتابة الحرف ثم لوّنه — تدريب ممتع على الخط العربي للأطفال.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TracingPage,
});

const LETTER_LIST = [LETTERS["lam"]!, LETTERS["kaf"]!, LETTERS["meem"]!];

function TracingPage() {
  const [tool, setTool] = useState<PaintTool>({ kind: "color", crayon: CRAYONS[0]! });
  const letter = LETTER_LIST[0]!;

  return (
    <div dir="rtl" className="min-h-dvh bg-primary p-2 font-arabic sm:p-4">
      <main className="relative flex min-h-[calc(100dvh-1rem)] flex-col overflow-hidden rounded-[2rem] border-[6px] border-primary bg-card p-3 shadow-frame sm:min-h-[calc(100dvh-2rem)] sm:rounded-[2.5rem] sm:p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <NavButtons />

          <h1 className="mx-auto flex items-center gap-2 rounded-full border-[3px] border-card bg-[linear-gradient(180deg,color-mix(in_oklab,var(--primary)_78%,white)_0%,var(--primary)_45%,color-mix(in_oklab,var(--primary)_80%,black)_100%)] px-4 py-2 text-center text-base font-extrabold text-primary-foreground shadow-swatch ring-2 ring-primary sm:gap-4 sm:px-10 sm:py-3 sm:text-2xl">
            <Star className="size-6 shrink-0 fill-kid-yellow stroke-[1.5] text-primary drop-shadow-sm sm:size-9" />
            <span className="drop-shadow-[0_2px_0_color-mix(in_oklab,var(--primary)_60%,black)]">
              إتّبِع الأسْهُم وَ أكْمل كِتَابَة الحَرْف
            </span>
            <Star className="size-6 shrink-0 fill-kid-yellow stroke-[1.5] text-primary drop-shadow-sm sm:size-9" />
          </h1>


          <div className="hidden w-20 shrink-0 sm:block" aria-hidden="true" />
        </div>


        {/* Tools */}
        <div className="mt-4 sm:mt-6">
          <ColorPalette tool={tool} onChange={setTool} />
        </div>

        {/* Worksheet */}
        <section className="mt-4 mb-16 flex flex-1 items-center justify-center rounded-3xl border-2 border-primary p-4 sm:mt-6 sm:mb-24">
          <div className="flex flex-col items-center justify-center gap-8 py-4 md:flex-row md:gap-14 md:py-8">
            {[0, 1, 2].map((slot) => (
              <TraceLetter key={`${letter.id}-${slot}`} letter={letter} tool={tool} />
            ))}
          </div>
        </section>

        <img
          src={girlWriting}
          alt="طفلة تكتب في دفترها"
          loading="lazy"
          width={816}
          height={816}
          className="pointer-events-none absolute bottom-0 left-1 h-20 w-auto sm:h-32"
        />
        <img
          src={boyWriting}
          alt="طفل يكتب في دفتره"
          loading="lazy"
          width={816}
          height={816}
          className="pointer-events-none absolute bottom-0 right-1 h-20 w-auto sm:h-32"
        />
      </main>
    </div>
  );
}
