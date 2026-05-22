"use client";

import Link from "next/link";
import type { HomeLocale } from "@/lib/i18n/home";

/** Long-form copy above the site footer on the home page (SEO + helpful context). */
export function SeoArticle({ locale = "en" }: { locale?: HomeLocale }) {
  if (locale === "es") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-es">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-es"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            Traductor de codigo morse: decodifica, codifica y practica desde tu navegador
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              Un buen <strong className="font-semibold text-neutral-800 dark:text-slate-200">traductor de codigo morse</strong> te ayuda a convertir
              mensajes entre texto normal y puntos y rayas de forma rapida. Es ideal para radioaficionados, estudiantes y personas que practican
              Morse en sesiones diarias.
            </p>

            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
              Convertir codigo morse a texto y texto a morse
            </h3>
            <p>
              Esta herramienta funciona en ambos sentidos: puedes pegar Morse para decodificarlo o escribir texto para codificarlo. Al tener ambas
              funciones en una misma interfaz, resulta mas facil validar espaciado, simbolos y resultado final.
            </p>

            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
              Practica con velocidad, tono y repeticion
            </h3>
            <p>
              Ajusta velocidad (WPM), frecuencia y volumen para entrenar reconocimiento auditivo y visual. La practica corta y constante suele dar
              mejores resultados que sesiones largas ocasionales.
            </p>

            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              Para mas informacion sobre este proyecto, visita la pagina{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                Acerca de
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "ko") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-ko">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-ko"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            모스 부호 번역기: 브라우저에서 빠르게 인코딩과 디코딩
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              <strong className="font-semibold text-neutral-800 dark:text-slate-200">모스 부호 번역기</strong>를 사용하면 일반 텍스트와 점/선
              패턴을 손쉽게 서로 변환할 수 있습니다. 학습, 연습, 빠른 확인 작업에 모두 적합합니다.
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
              모스 부호를 텍스트로, 텍스트를 모스로 변환
            </h3>
            <p>
              이 도구는 양방향 변환을 지원합니다. 모스 부호를 붙여 넣어 해독하거나, 텍스트를 입력해 모스 부호로 인코딩할 수 있습니다.
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
              속도와 주파수를 조절하며 연습
            </h3>
            <p>
              WPM, 주파수, 볼륨을 조절해 자신에게 맞는 학습 환경을 만들 수 있습니다. 짧고 꾸준한 연습이 정확도 향상에 가장 효과적입니다.
            </p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              프로젝트 운영 정보는{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                소개
              </Link>{" "}
              페이지에서 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "zh") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-zh">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-zh"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            摩斯電碼翻譯器：在瀏覽器快速編碼與解碼
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              使用 <strong className="font-semibold text-neutral-800 dark:text-slate-200">摩斯電碼翻譯器</strong>，可以在一般文字與點劃訊號之間快速互轉，
              適合學習、練習與日常解碼需求。
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">文字與摩斯雙向轉換</h3>
            <p>你可以將摩斯電碼貼上解碼成文字，也可以輸入文字即時轉成摩斯電碼，方便交叉確認結果。</p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">調整速度與頻率進行訓練</h3>
            <p>可依需求調整 WPM、頻率與音量，建立最適合自己的學習節奏。短時間、持續練習通常更有效。</p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              想了解本專案的更多資訊，請參考{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                關於
              </Link>{" "}
              頁面。
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "pt") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-pt">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-pt"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            Tradutor de código Morse: codifique e decodifique no navegador
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              Com o <strong className="font-semibold text-neutral-800 dark:text-slate-200">Tradutor de código Morse</strong>, você converte texto em
              Morse e Morse em texto rapidamente, direto no navegador.
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Conversão em dois sentidos</h3>
            <p>A ferramenta permite codificar e decodificar na mesma tela para validar símbolos e espaçamentos com mais facilidade.</p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Treino com velocidade e frequência</h3>
            <p>Ajuste WPM, frequência e volume para praticar no seu ritmo e melhorar a precisão com sessões curtas e consistentes.</p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              Para mais informações sobre o projeto, visite a página{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                Sobre
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "ar") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-ar">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-ar"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            مترجم شفرة مورس: ترميز وفك ترميز سريع من المتصفح
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              يساعدك <strong className="font-semibold text-neutral-800 dark:text-slate-200">مترجم شفرة مورس</strong> على التحويل بسرعة بين النص العادي
              والنقاط والشرطات، سواء للتعلم او للتدريب اليومي.
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">تحويل ثنائي الاتجاه</h3>
            <p>يمكنك كتابة نص لتحويله الى مورس، او لصق مورس لفك الترميز الى نص قابل للقراءة في نفس الصفحة.</p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">تدريب بالسرعة والتردد</h3>
            <p>عدّل السرعة (WPM) والتردد ومستوى الصوت لتناسب مستوى التدريب وتزيد الدقة مع الوقت.</p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              لمزيد من المعلومات عن المشروع، زر صفحة{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                حول
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "ja") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-ja">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-ja"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            モールス信号翻訳機: ブラウザで素早く変換
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              <strong className="font-semibold text-neutral-800 dark:text-slate-200">モールス信号翻訳機</strong>を使うと、テキストとモールス信号を
              手軽に相互変換できます。学習にも練習にも便利です。
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">双方向の変換</h3>
            <p>テキストをモールスへ、モールスをテキストへ同じページで変換できます。</p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">速度と周波数を調整</h3>
            <p>WPM、周波数、音量を調整して、自分のペースで精度よく練習できます。</p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              プロジェクトの詳細は{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                概要
              </Link>{" "}
              ページをご覧ください。
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "ru") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-ru">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-ru"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            переводчик азбуки Морзе: быстрый перевод в браузере
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              <strong className="font-semibold text-neutral-800 dark:text-slate-200">переводчик азбуки Морзе</strong> помогает быстро переводить текст в
              точки и тире и обратно. Подходит для обучения и практики.
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Двусторонний перевод</h3>
            <p>На одной странице доступен перевод из текста в Морзе и из Морзе в обычный текст.</p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Тренировка скорости и частоты</h3>
            <p>Настраивайте WPM, частоту и громкость, чтобы комфортно повышать точность распознавания.</p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              Подробнее о проекте на странице{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                О проекте
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "de") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-de">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-de"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            Morsecode-Übersetzer: schnell im Browser umwandeln
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              Mit dem <strong className="font-semibold text-neutral-800 dark:text-slate-200">Morsecode-Übersetzer</strong> wandelst du Text und Morsecode
              schnell in beide Richtungen um. Ideal für Lernen und Training.
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Umwandlung in beide Richtungen</h3>
            <p>Du kannst Text zu Morse codieren und Morse zurück in lesbaren Text dekodieren - auf derselben Seite.</p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Geschwindigkeit und Frequenz anpassen</h3>
            <p>Stelle WPM, Frequenz und Lautstärke ein, um präzise und im eigenen Tempo zu üben.</p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              Mehr über das Projekt auf der Seite{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                Über
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    );
  }
  if (locale === "cs") {
    return (
      <article className="lg:col-span-12" aria-labelledby="seo-article-heading-cs">
        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
          <h2
            id="seo-article-heading-cs"
            className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
          >
            překladač morseovky: rychlý převod v prohlížeči
          </h2>
          <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            <p>
              <strong className="font-semibold text-neutral-800 dark:text-slate-200">překladač morseovky</strong> umožňuje rychle převádět text do Morseovy
              abecedy i Morseovu abecedu zpět do textu.
            </p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Obousměrný převod</h3>
            <p>Na jedné stránce můžeš kódovat text do Morseovky i dekódovat Morseovku do čitelného textu.</p>
            <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">Nastavení rychlosti a frekvence</h3>
            <p>Uprav WPM, frekvenci a hlasitost podle úrovně tréninku a zlepšuj přesnost krok za krokem.</p>
            <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
              Více informací najdeš na stránce{" "}
              <Link
                href="/about"
                className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
              >
                O projektu
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="lg:col-span-12"
      aria-labelledby="seo-article-heading"
    >
      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
        <h2
          id="seo-article-heading"
          className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
        >
          Morse code translator: decode, encode, and practice in your browser
        </h2>
        <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
          <p>
            A capable <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse code translator</strong>{" "}
            helps you move fluently between everyday language and the rhythm of dots and dashes. Whether you are studying for
            an amateur radio license, teaching signaling basics, or simply curious about how messages were sent before voice
            and digital modes dominated the airwaves, an interactive tool removes the friction of pencil-and-paper practice.
            You can type letters and punctuation, hear how they sound at different speeds, and watch timing patterns so
            that recognition becomes automatic rather than theoretical.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Morse code decoder and encoder in one place
          </h3>
          <p>
            Think of a <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse code decoder</strong> as
            the half of the system that takes rhythmic input and turns it back into readable text. The encoder does the
            opposite: it maps each character to a standard pattern so you can copy code from a textbook or flashcard and
            immediately hear it. When both directions live in the same interface, you can verify your work in seconds—if
            the decoded line matches what you intended, your spacing and symbol choices are probably correct. That feedback
            loop matters because Morse is as much about timing as it is about memorizing the alphabet.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Convert Morse code to English and English to Morse
          </h3>
          <p>
            Many people arrive with a single goal: <strong className="font-semibold text-neutral-800 dark:text-slate-200">convert morse code to english</strong>{" "}
            from a string they copied from a practice app, an old manual, or a classroom exercise. Pasting dots, dashes, and
            spaces into a translator highlights whether word breaks and letter breaks are clear—small mistakes in spacing
            often turn an innocent sentence into gibberish. Going the other way, from English into Morse, supports
            composition: you draft a message, listen to playback, and adjust speed or pitch until it feels comfortable.
            Repetition at a sustainable pace tends to beat cramming at a speed you cannot yet copy accurately.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Morse alphabet translator and reference habits
          </h3>
          <p>
            A <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse alphabet translator</strong> is
            most useful when it reinforces structure: A through Z, numerals, and a compact set of punctuation and prosigns
            used on the air. Beginners often start with small groups—short callsign-style patterns, then common words—before
            tackling full paragraphs. Keeping a quick reference nearby (or a built-in chart) prevents breaks in flow when a
            rare character appears. Over time, the goal is not to look up every symbol but to hear a letter and know it the
            way you recognize a spoken word, without mentally naming dots and dashes first.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            American Morse code translator vs. International Morse
          </h3>
          <p>
            Searchers sometimes look for an <strong className="font-semibold text-neutral-800 dark:text-slate-200">american morse code translator</strong>{" "}
            because they have seen historical railroad or landline telegraph materials that used a different set of spaced
            patterns than the International Morse most radio operators learn today. International Morse (often called
            Continental Morse in older books) is the alphabet widely used on amateur and maritime radio in the modern era.
            American Morse, while culturally important, differs in timing and in several character shapes; a dedicated
            historical tool may be required for faithful railroad-era transcription. This site focuses on the international
            alphabet so that results align with contemporary licensing study guides and on-air practice.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Speed, tone, and how you actually improve
          </h3>
          <p>
            Words per minute, Farnsworth spacing, sidetone pitch, and comfortable volume all change how code feels in the
            headphones. Beginners often raise pitch for clarity or slow the overall words-per-minute rate while keeping
            character rhythm consistent. Intermediate operators might push speed in short bursts, then return to a sustainable
            rate to rebuild accuracy. Visual learners benefit from a moving timeline or waveform that shows where energy
            sits relative to silence; auditory learners lean on clean tone and repeatable timing. Combining both channels can
            shorten the path from “I recognize that if I think for a second” to “I know it instantly.”
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Who still uses Morse, and why it is worth learning
          </h3>
          <p>
            Amateur radio communities worldwide continue to use Morse for weak-signal work and for the satisfaction of a
            skill that spans generations. Educators use it as an accessible lesson in patterns, rhythm, and even accessibility
            themes—Morse remains a bridge technology for some assistive setups. Historians and re-enactors study older manuals
            to understand how information moved along wires and coastlines. Whatever your motivation, a browser-based
            translator lowers the barrier: no install, quick experiments, and immediate audio feedback. Pair regular short
            sessions with on-air or club practice when you are ready, and treat accuracy before speed as the rule that keeps
            progress honest.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            Study habits that pair well with a morse code decoder
          </h3>
          <p>
            Short daily sessions outperform occasional marathons. Try five to fifteen minutes of copy practice, then five
            minutes of review where you read English aloud while imagining the corresponding pattern. Alternate send and
            receive: encode a headline, decode a random phrase, then swap. Log trouble letters and revisit them at the end
            of the week; most people find that a handful of confusable pairs (such as similar rhythm groups) account for the
            majority of early errors. When you use a <strong className="font-semibold text-neutral-800 dark:text-slate-200">morse code decoder</strong>{" "}
            to check answers, write down what you thought you heard before revealing the solution so you train honest
            self-assessment instead of pattern-matching the screen.
          </p>

          <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
            On-air etiquette, regulation, and safety
          </h3>
          <p>
            Translating text in a browser is only the classroom; transmitting on the radio requires licensing and band plans
            that depend on your country. In the United States, the Federal Communications Commission defines where and how
            amateur signals may be sent—always follow current rules, power limits, and polite bandwidth habits. Never rely on
            Morse tools for emergency communication where regulated voice or SMS services are available; treat this site as
            educational software. If you share recordings or screen captures online, avoid publishing personal identifiers you
            would not want indexed, and remember that historical messages may include outdated terminology—verify meaning before
            reusing quotes in academic or journalistic work.
          </p>

          <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
            For more on how this project is run and where it is operated from, see the{" "}
            <Link
              href="/about"
              className="font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed"
            >
              About
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </article>
  );
}
