import type { HomeLocale } from "@/lib/i18n/home";
import { homePath, mp3CutterPath } from "@/lib/i18n/routes";

export type Mp3CutterPageCopy = {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  summaryTitle: string;
  summaryBody: string;
  breadcrumbHome: string;
  breadcrumbTool: string;
  aboutHeading: string;
  aboutP1: string;
  aboutP2: string;
  formatsHeading: string;
  formatsP: string;
  stepsHeading: string;
  steps: string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  linkHome: string;
};

const EN: Mp3CutterPageCopy = {
  title: "MP3 Cutter & Ringtone Maker - Cut and Trim Audio Online Free",
  description:
    "Free MP3 cutter and ringtone maker that runs entirely in your browser. Trim any song, cut out a section, add fades, and export as MP3, WAV, M4A, or M4R. Nothing is uploaded.",
  h1: "MP3 Cutter & Ringtone Maker - Trim Audio Right in Your Browser",
  keywords: [
    "mp3 cutter",
    "cut mp3 online",
    "ringtone maker",
    "trim audio online",
    "m4r ringtone maker",
    "audio trimmer free"
  ],
  summaryTitle: "What is the MP3 Cutter?",
  summaryBody:
    "The MP3 Cutter on Morse Code World lets you trim, cut, and make ringtones from any song directly in your browser — no upload, no account. Drag the waveform handles to pick a section, keep it or delete it, add fade in/out, and export as MP3, WAV, M4A, or an iPhone M4R ringtone. All processing happens on your own device.",
  breadcrumbHome: "Morse Code Translator",
  breadcrumbTool: "MP3 Cutter",
  aboutHeading: "How the MP3 cutter works",
  aboutP1:
    "This tool decodes your audio file directly in your browser using the Web Audio API — the file never leaves your device. It draws a waveform so you can see exactly what you're cutting, with two draggable handles marking the start and end of your selection.",
  aboutP2:
    "You can either keep the selected region (perfect for pulling out a chorus or a ringtone clip) or delete it and seamlessly join what's left (great for removing a cough, an ad break, or a mistake). Everything, including MP3 and WAV encoding, runs on your device using JavaScript and WebAssembly — nothing is ever uploaded to a server.",
  formatsHeading: "Supported formats",
  formatsP:
    "Import MP3, WAV, M4A, or OGG. Export as MP3 or WAV instantly, or as M4A / M4R (the format iPhones use for custom ringtones) using an in-browser converter that loads the first time you pick one of those formats.",
  stepsHeading: "How to use it",
  steps: [
    "Drag and drop a song, or choose a file (MP3, WAV, M4A, OGG).",
    "Drag the two handles on the waveform to select the part you want, or type exact start/end times, or use the 20s / 30s / 40s presets.",
    "Choose \"Keep selection\" to export just that part, or \"Delete selection\" to remove it and join the rest.",
    "Turn on fade in / fade out if you want smoother edges, then hit Preview to hear exactly what will be exported.",
    "Pick a format (MP3, WAV, M4A, or M4R for iPhone ringtones) and click Export to download the result."
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "Is my audio uploaded anywhere?",
      a: "No. The file is decoded and processed entirely in your browser using the Web Audio API — it never leaves your device."
    },
    {
      q: "Can I make an iPhone ringtone with this?",
      a: "Yes. Select the M4R format when exporting — it's the format iPhones use for custom ringtones. Import the file into GarageBand or sync it through Finder/iTunes to set it as a ringtone."
    },
    {
      q: "What's the difference between \"Keep\" and \"Delete\" selection?",
      a: "\"Keep selection\" exports only the highlighted part. \"Delete selection\" removes the highlighted part and seamlessly joins what's before and after it into one file."
    },
    {
      q: "Does this work offline?",
      a: "Once the page has loaded, cutting and exporting to MP3 or WAV works fully offline. M4A/M4R export needs to download a converter the first time you use it."
    },
    {
      q: "What audio formats can I import and export?",
      a: "Import MP3, WAV, M4A, or OGG. Export as MP3, WAV, M4A, or M4R."
    },
    {
      q: "Is there a file size or length limit?",
      a: "No hard limit is enforced, but very large files can take longer to decode and process since everything runs on your device's own processing power."
    }
  ],
  linkHome: "Morse code translator"
};

const OVERRIDES: Partial<Record<HomeLocale, Partial<Mp3CutterPageCopy>>> = {
  es: {
    title: "Cortador de MP3 y Creador de Tonos - Cortar audio online gratis",
    description:
      "Cortador de MP3 y creador de tonos de llamada gratis que funciona en tu navegador. Recorta cualquier canción, añade fundidos y exporta en MP3, WAV, M4A o M4R. No se sube nada.",
    h1: "Cortador de MP3 - Cortador de canciones directo en tu navegador",
    keywords: [
      "cortar mp3",
      "cortador de canciones",
      "crear tono de llamada",
      "cortar audio online",
      "hacer tono para iphone",
      "recortar mp3 gratis"
    ],
    summaryTitle: "¿Qué es el cortador de MP3?",
    summaryBody:
      "El cortador de MP3 de Morse Code World te permite recortar, cortar y crear tonos de llamada a partir de cualquier canción directamente en tu navegador, sin subir nada ni crear cuenta. Arrastra los controles de la forma de onda para elegir una sección, conservarla o eliminarla, añade fundidos de entrada y salida, y exporta en MP3, WAV, M4A o un tono M4R para iPhone. Todo el procesamiento ocurre en tu propio dispositivo.",
    breadcrumbHome: "Traductor Morse",
    breadcrumbTool: "Cortador de MP3",
    aboutHeading: "Cómo funciona el cortador de MP3",
    aboutP1:
      "Esta herramienta decodifica tu archivo de audio directamente en tu navegador usando la API Web Audio; el archivo nunca sale de tu dispositivo. Dibuja una forma de onda para que veas exactamente lo que estás cortando, con dos controles deslizables que marcan el inicio y el final de tu selección.",
    aboutP2:
      "Puedes conservar la región seleccionada (perfecto para extraer un estribillo o un fragmento para tono de llamada) o eliminarla y unir sin cortes lo que queda (ideal para quitar una tos, un anuncio o un error). Todo, incluida la codificación en MP3 y WAV, ocurre en tu dispositivo usando JavaScript y WebAssembly; nunca se sube nada a un servidor.",
    formatsHeading: "Formatos admitidos",
    formatsP:
      "Importa MP3, WAV, M4A u OGG. Exporta en MP3 o WAV al instante, o en M4A / M4R (el formato que usan los iPhone para tonos personalizados) mediante un convertidor en el navegador que se carga la primera vez que eliges uno de esos formatos.",
    stepsHeading: "Cómo usarlo",
    steps: [
      "Arrastra y suelta una canción, o elige un archivo (MP3, WAV, M4A, OGG).",
      "Arrastra los dos controles sobre la forma de onda para seleccionar la parte que quieres, escribe los tiempos exactos de inicio/fin, o usa los ajustes rápidos de 20s / 30s / 40s.",
      "Elige \"Conservar selección\" para exportar solo esa parte, o \"Eliminar selección\" para quitarla y unir el resto.",
      "Activa el fundido de entrada / salida si quieres bordes más suaves, y pulsa Vista previa para escuchar exactamente lo que se exportará.",
      "Elige un formato (MP3, WAV, M4A o M4R para tonos de iPhone) y pulsa Exportar para descargar el resultado."
    ],
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Se sube mi audio a algún lugar?",
        a: "No. El archivo se decodifica y procesa por completo en tu navegador usando la API Web Audio; nunca sale de tu dispositivo."
      },
      {
        q: "¿Puedo hacer un tono de llamada para iPhone con esto?",
        a: "Sí. Elige el formato M4R al exportar; es el formato que usan los iPhone para tonos personalizados. Importa el archivo en GarageBand o sincronízalo por Finder/iTunes para usarlo como tono."
      },
      {
        q: "¿Cuál es la diferencia entre \"conservar\" y \"eliminar\" selección?",
        a: "\"Conservar selección\" exporta solo la parte resaltada. \"Eliminar selección\" quita la parte resaltada y une sin cortes lo que hay antes y después en un solo archivo."
      },
      {
        q: "¿Funciona sin conexión?",
        a: "Una vez cargada la página, cortar y exportar a MP3 o WAV funciona completamente sin conexión. La exportación a M4A/M4R necesita descargar un convertidor la primera vez que la uses."
      },
      {
        q: "¿Qué formatos de audio puedo importar y exportar?",
        a: "Importa MP3, WAV, M4A u OGG. Exporta en MP3, WAV, M4A o M4R."
      },
      {
        q: "¿Hay un límite de tamaño o duración del archivo?",
        a: "No hay un límite estricto, pero los archivos muy grandes pueden tardar más en decodificarse y procesarse porque todo funciona con la capacidad de tu propio dispositivo."
      }
    ],
    linkHome: "traductor de Morse"
  },
  pt: {
    title: "Cortador de MP3 e Criador de Toques - Cortar música online grátis",
    description:
      "Cortador de MP3 e criador de toques grátis que funciona no seu navegador. Corte qualquer música online, adicione fades e exporte em MP3, WAV, M4A ou M4R. Nada é enviado.",
    h1: "Cortador de MP3 - Cortar música online direto no navegador",
    keywords: [
      "cortar mp3",
      "cortar música online",
      "criar toque de celular",
      "cortador de música",
      "criar toque para iphone",
      "recortar mp3 grátis"
    ],
    summaryTitle: "O que é o cortador de MP3?",
    summaryBody:
      "O cortador de MP3 do Morse Code World permite cortar, recortar e criar toques a partir de qualquer música direto no seu navegador, sem enviar nada e sem conta. Arraste os controles da forma de onda para escolher um trecho, mantê-lo ou removê-lo, adicione fade in/out e exporte em MP3, WAV, M4A ou um toque M4R para iPhone. Todo o processamento acontece no seu próprio dispositivo.",
    breadcrumbHome: "Tradutor Morse",
    breadcrumbTool: "Cortador de MP3",
    aboutHeading: "Como funciona o cortador de MP3",
    aboutP1:
      "Esta ferramenta decodifica seu arquivo de áudio direto no navegador usando a Web Audio API; o arquivo nunca sai do seu dispositivo. Ela desenha uma forma de onda para você ver exatamente o que está cortando, com dois controles arrastáveis marcando o início e o fim da sua seleção.",
    aboutP2:
      "Você pode manter a região selecionada (ótimo para extrair um refrão ou um trecho para toque) ou removê-la e unir sem interrupções o que sobra (ótimo para remover uma tosse, um intervalo de anúncio ou um erro). Tudo, incluindo a codificação em MP3 e WAV, acontece no seu dispositivo usando JavaScript e WebAssembly; nada é enviado a um servidor.",
    formatsHeading: "Formatos suportados",
    formatsP:
      "Importe MP3, WAV, M4A ou OGG. Exporte em MP3 ou WAV instantaneamente, ou em M4A / M4R (o formato que os iPhones usam para toques personalizados) usando um conversor no navegador que carrega na primeira vez que você escolhe um desses formatos.",
    stepsHeading: "Como usar",
    steps: [
      "Arraste e solte uma música, ou escolha um arquivo (MP3, WAV, M4A, OGG).",
      "Arraste os dois controles na forma de onda para selecionar a parte que deseja, digite os tempos exatos de início/fim, ou use os atalhos de 20s / 30s / 40s.",
      "Escolha \"Manter seleção\" para exportar só aquela parte, ou \"Remover seleção\" para tirá-la e unir o resto.",
      "Ative o fade in / fade out se quiser bordas mais suaves, depois toque em Pré-visualizar para ouvir exatamente o que será exportado.",
      "Escolha um formato (MP3, WAV, M4A ou M4R para toques de iPhone) e clique em Exportar para baixar o resultado."
    ],
    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "Meu áudio é enviado para algum lugar?",
        a: "Não. O arquivo é decodificado e processado inteiramente no seu navegador usando a Web Audio API; ele nunca sai do seu dispositivo."
      },
      {
        q: "Posso fazer um toque de iPhone com isso?",
        a: "Sim. Escolha o formato M4R ao exportar; é o formato que os iPhones usam para toques personalizados. Importe o arquivo no GarageBand ou sincronize pelo Finder/iTunes para usá-lo como toque."
      },
      {
        q: "Qual a diferença entre \"manter\" e \"remover\" seleção?",
        a: "\"Manter seleção\" exporta só a parte destacada. \"Remover seleção\" tira a parte destacada e une sem interrupções o que vem antes e depois em um único arquivo."
      },
      {
        q: "Isso funciona offline?",
        a: "Depois que a página carrega, cortar e exportar em MP3 ou WAV funciona totalmente offline. A exportação em M4A/M4R precisa baixar um conversor na primeira vez que você usar."
      },
      {
        q: "Quais formatos de áudio posso importar e exportar?",
        a: "Importe MP3, WAV, M4A ou OGG. Exporte em MP3, WAV, M4A ou M4R."
      },
      {
        q: "Existe limite de tamanho ou duração do arquivo?",
        a: "Não há um limite rígido, mas arquivos muito grandes podem demorar mais para decodificar e processar, já que tudo roda com o poder de processamento do seu próprio dispositivo."
      }
    ],
    linkHome: "tradutor de Morse"
  },
  de: {
    title: "MP3 Schneiden & Klingelton Erstellen - Audio online kostenlos schneiden",
    description:
      "Kostenloser MP3-Schneider und Klingelton-Ersteller, der komplett im Browser läuft. Song kürzen, Fades hinzufügen und als MP3, WAV, M4A oder M4R exportieren. Es wird nichts hochgeladen.",
    h1: "MP3 Schneiden - Klingelton erstellen direkt im Browser",
    keywords: [
      "mp3 schneiden",
      "klingelton erstellen",
      "audio online schneiden",
      "mp3 zuschneiden kostenlos",
      "iphone klingelton machen",
      "song kürzen online"
    ],
    summaryTitle: "Was ist der MP3-Schneider?",
    summaryBody:
      "Mit dem MP3-Schneider von Morse Code World kannst du jeden Song direkt im Browser zuschneiden und Klingeltöne erstellen — ohne Upload, ohne Konto. Ziehe die Wellenform-Griffe, um einen Abschnitt auszuwählen, behalte ihn oder entferne ihn, füge Ein-/Ausblenden hinzu und exportiere als MP3, WAV, M4A oder als iPhone-M4R-Klingelton. Die gesamte Verarbeitung läuft auf deinem eigenen Gerät.",
    breadcrumbHome: "Morse-Übersetzer",
    breadcrumbTool: "MP3-Schneider",
    aboutHeading: "Wie der MP3-Schneider funktioniert",
    aboutP1:
      "Dieses Tool dekodiert deine Audiodatei direkt im Browser mit der Web Audio API — die Datei verlässt niemals dein Gerät. Es zeichnet eine Wellenform, damit du genau siehst, was du schneidest, mit zwei ziehbaren Griffen, die Anfang und Ende deiner Auswahl markieren.",
    aboutP2:
      "Du kannst den ausgewählten Bereich behalten (ideal, um einen Refrain oder einen Klingelton-Ausschnitt herauszuholen) oder ihn löschen und den Rest nahtlos zusammenfügen (praktisch, um ein Husten, eine Werbepause oder einen Fehler zu entfernen). Alles, einschließlich der MP3- und WAV-Kodierung, läuft auf deinem Gerät mit JavaScript und WebAssembly — es wird nie etwas auf einen Server hochgeladen.",
    formatsHeading: "Unterstützte Formate",
    formatsP:
      "Importiere MP3, WAV, M4A oder OGG. Exportiere sofort als MP3 oder WAV, oder als M4A / M4R (das Format, das iPhones für eigene Klingeltöne verwenden) über einen Browser-Konverter, der beim ersten Auswählen eines dieser Formate geladen wird.",
    stepsHeading: "So wird es benutzt",
    steps: [
      "Ziehe einen Song hinein oder wähle eine Datei (MP3, WAV, M4A, OGG).",
      "Ziehe die beiden Griffe auf der Wellenform, um den gewünschten Teil auszuwählen, gib genaue Start-/Endzeiten ein, oder nutze die Presets 20s / 30s / 40s.",
      "Wähle \"Auswahl behalten\", um nur diesen Teil zu exportieren, oder \"Auswahl löschen\", um ihn zu entfernen und den Rest zusammenzufügen.",
      "Aktiviere Ein-/Ausblenden für weichere Übergänge und klicke auf Vorschau, um genau zu hören, was exportiert wird.",
      "Wähle ein Format (MP3, WAV, M4A oder M4R für iPhone-Klingeltöne) und klicke auf Exportieren, um das Ergebnis herunterzuladen."
    ],
    faqHeading: "Häufig gestellte Fragen",
    faq: [
      {
        q: "Wird mein Audio irgendwohin hochgeladen?",
        a: "Nein. Die Datei wird vollständig in deinem Browser mit der Web Audio API dekodiert und verarbeitet — sie verlässt niemals dein Gerät."
      },
      {
        q: "Kann ich damit einen iPhone-Klingelton erstellen?",
        a: "Ja. Wähle beim Exportieren das M4R-Format — das ist das Format, das iPhones für eigene Klingeltöne verwenden. Importiere die Datei in GarageBand oder synchronisiere sie über Finder/iTunes, um sie als Klingelton festzulegen."
      },
      {
        q: "Was ist der Unterschied zwischen \"Behalten\" und \"Löschen\" der Auswahl?",
        a: "\"Auswahl behalten\" exportiert nur den markierten Teil. \"Auswahl löschen\" entfernt den markierten Teil und fügt das, was davor und danach kommt, nahtlos zu einer Datei zusammen."
      },
      {
        q: "Funktioniert das offline?",
        a: "Sobald die Seite geladen ist, funktionieren Schneiden und Export nach MP3 oder WAV vollständig offline. Der M4A/M4R-Export muss beim ersten Mal einen Konverter herunterladen."
      },
      {
        q: "Welche Audioformate kann ich importieren und exportieren?",
        a: "Importiere MP3, WAV, M4A oder OGG. Exportiere als MP3, WAV, M4A oder M4R."
      },
      {
        q: "Gibt es ein Limit für Dateigröße oder -länge?",
        a: "Es gibt kein festes Limit, aber sehr große Dateien können länger zum Dekodieren und Verarbeiten brauchen, da alles mit der Rechenleistung deines eigenen Geräts läuft."
      }
    ],
    linkHome: "Morse-Übersetzer"
  },
  ru: {
    title: "Обрезать MP3 и сделать рингтон - Обрезка аудио онлайн бесплатно",
    description:
      "Бесплатный обрезчик MP3 и создание рингтонов прямо в браузере. Обрежьте любую песню онлайн, добавьте затухания и экспортируйте в MP3, WAV, M4A или M4R. Ничего не загружается.",
    h1: "Обрезать MP3 - Сделать рингтон прямо в браузере",
    keywords: [
      "обрезать mp3",
      "обрезать песню онлайн",
      "сделать рингтон",
      "создать рингтон для айфона",
      "обрезка аудио онлайн",
      "нарезать mp3 бесплатно"
    ],
    summaryTitle: "Что такое обрезчик MP3?",
    summaryBody:
      "Обрезчик MP3 на Morse Code World позволяет обрезать любую песню и сделать из неё рингтон прямо в браузере — без загрузки файлов и без регистрации. Перетащите ползунки на волновой форме, чтобы выбрать отрывок, оставьте его или удалите, добавьте плавное появление/затухание звука и экспортируйте в MP3, WAV, M4A или рингтон M4R для iPhone. Вся обработка происходит на вашем устройстве.",
    breadcrumbHome: "Переводчик Морзе",
    breadcrumbTool: "Обрезка MP3",
    aboutHeading: "Как работает обрезчик MP3",
    aboutP1:
      "Этот инструмент декодирует ваш аудиофайл прямо в браузере с помощью Web Audio API — файл никогда не покидает ваше устройство. Он строит волновую форму, чтобы вы точно видели, что обрезаете, с двумя перетаскиваемыми ползунками, отмечающими начало и конец выделения.",
    aboutP2:
      "Вы можете оставить выделенный отрывок (отлично для того, чтобы вырезать припев или кусок для рингтона) или удалить его и бесшовно соединить оставшиеся части (удобно, чтобы убрать кашель, рекламную паузу или ошибку). Всё, включая кодирование в MP3 и WAV, происходит на вашем устройстве с помощью JavaScript и WebAssembly — на сервер ничего не загружается.",
    formatsHeading: "Поддерживаемые форматы",
    formatsP:
      "Импортируйте MP3, WAV, M4A или OGG. Экспортируйте в MP3 или WAV мгновенно, либо в M4A / M4R (формат, который iPhone использует для собственных рингтонов) с помощью конвертера в браузере, который загружается при первом выборе одного из этих форматов.",
    stepsHeading: "Как использовать",
    steps: [
      "Перетащите песню или выберите файл (MP3, WAV, M4A, OGG).",
      "Перетащите два ползунка на волновой форме, чтобы выбрать нужную часть, введите точное время начала/конца или используйте готовые отрезки 20с / 30с / 40с.",
      "Выберите «Оставить выделенное», чтобы экспортировать только эту часть, или «Удалить выделенное», чтобы убрать её и соединить остальное.",
      "Включите плавное появление/затухание для более мягких краёв, затем нажмите «Прослушать», чтобы услышать именно то, что будет экспортировано.",
      "Выберите формат (MP3, WAV, M4A или M4R для рингтонов iPhone) и нажмите «Экспорт», чтобы скачать результат."
    ],
    faqHeading: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Загружается ли мой звук куда-либо?",
        a: "Нет. Файл полностью декодируется и обрабатывается в вашем браузере с помощью Web Audio API — он никогда не покидает ваше устройство."
      },
      {
        q: "Можно ли сделать рингтон для iPhone с помощью этого инструмента?",
        a: "Да. Выберите формат M4R при экспорте — это формат, который iPhone использует для собственных рингтонов. Импортируйте файл в GarageBand или синхронизируйте через Finder/iTunes, чтобы установить его как рингтон."
      },
      {
        q: "В чём разница между «оставить» и «удалить» выделенное?",
        a: "«Оставить выделенное» экспортирует только выделенную часть. «Удалить выделенное» убирает выделенную часть и бесшовно соединяет то, что было до и после неё, в один файл."
      },
      {
        q: "Работает ли это без интернета?",
        a: "После загрузки страницы обрезка и экспорт в MP3 или WAV работают полностью без интернета. Для экспорта в M4A/M4R при первом использовании нужно скачать конвертер."
      },
      {
        q: "Какие аудиоформаты можно импортировать и экспортировать?",
        a: "Импортируйте MP3, WAV, M4A или OGG. Экспортируйте в MP3, WAV, M4A или M4R."
      },
      {
        q: "Есть ли ограничение на размер или длину файла?",
        a: "Жёсткого ограничения нет, но очень большие файлы могут дольше декодироваться и обрабатываться, так как всё работает на мощности вашего собственного устройства."
      }
    ],
    linkHome: "переводчик Морзе"
  },
  ja: {
    title: "MP3カット＆着信音作成 - 音声を無料でオンラインカット",
    description:
      "ブラウザだけで動く無料のMP3カット・着信音作成ツール。曲をカットし、フェードを追加して、MP3、WAV、M4A、M4Rで書き出せます。アップロードは一切ありません。",
    h1: "MP3カット - ブラウザだけで着信音を作成",
    keywords: [
      "mp3 カット",
      "着信音 作成",
      "mp3 切り取り 無料",
      "音声 トリミング オンライン",
      "iphone 着信音 作成",
      "曲 カット オンライン"
    ],
    summaryTitle: "MP3カットとは？",
    summaryBody:
      "Morse Code WorldのMP3カットは、アップロード不要・アカウント登録不要で、ブラウザ上で直接どんな曲でもトリミングしたり着信音を作成したりできます。波形のハンドルをドラッグして範囲を選び、その部分を残すか削除するかを選択、フェードイン／フェードアウトを追加して、MP3、WAV、M4A、またはiPhone用M4R着信音として書き出せます。すべての処理はお使いの端末上で行われます。",
    breadcrumbHome: "モールス翻訳機",
    breadcrumbTool: "MP3カット",
    aboutHeading: "MP3カットの仕組み",
    aboutP1:
      "このツールはWeb Audio APIを使ってブラウザ上で直接音声ファイルをデコードします。ファイルはお使いの端末から一切出ません。波形を描画するので、どこをカットしているか正確に確認でき、選択範囲の開始と終了を示す2つのドラッグ可能なハンドルがあります。",
    aboutP2:
      "選択した範囲を残す（コーラス部分や着信音用のクリップを取り出すのに最適）か、削除して残りの部分をシームレスに結合する（咳や広告、ミスの部分を取り除くのに便利）ことができます。MP3やWAVのエンコードを含むすべての処理は、JavaScriptとWebAssemblyを使ってお使いの端末上で行われ、サーバーへのアップロードは一切ありません。",
    formatsHeading: "対応フォーマット",
    formatsP:
      "MP3、WAV、M4A、OGGを読み込めます。MP3またはWAVはすぐに書き出せます。M4A／M4R（iPhoneのカスタム着信音用フォーマット）は、その形式を選んだ際に一度だけ読み込まれるブラウザ内コンバーターを使って書き出せます。",
    stepsHeading: "使い方",
    steps: [
      "曲をドラッグ＆ドロップするか、ファイルを選択します（MP3、WAV、M4A、OGG）。",
      "波形上の2つのハンドルをドラッグして必要な部分を選択、開始・終了時間を直接入力、または20秒／30秒／40秒のプリセットを使用します。",
      "そのまま書き出す場合は「選択範囲を残す」、削除する場合は「選択範囲を削除」を選びます。",
      "より滑らかにしたい場合はフェードイン／フェードアウトをオンにし、「プレビュー」で書き出される内容を実際に確認できます。",
      "フォーマット（MP3、WAV、M4A、またはiPhone着信音用M4R）を選んで「書き出し」をクリックすると結果をダウンロードできます。"
    ],
    faqHeading: "よくある質問",
    faq: [
      {
        q: "音声データはどこかにアップロードされますか？",
        a: "いいえ。ファイルはWeb Audio APIを使ってブラウザ内で完全にデコード・処理され、お使いの端末から一切出ません。"
      },
      {
        q: "これでiPhoneの着信音を作れますか？",
        a: "はい。書き出す際にM4Rフォーマットを選んでください。これはiPhoneのカスタム着信音用フォーマットです。GarageBandに読み込むか、Finder／iTunesで同期して着信音に設定できます。"
      },
      {
        q: "「残す」と「削除」の違いは何ですか？",
        a: "「選択範囲を残す」はハイライトされた部分だけを書き出します。「選択範囲を削除」はハイライトされた部分を取り除き、前後の部分をシームレスに1つのファイルに結合します。"
      },
      {
        q: "オフラインでも使えますか？",
        a: "ページを読み込んだ後は、カットとMP3・WAVへの書き出しは完全にオフラインで動作します。M4A／M4Rの書き出しは、初回使用時にコンバーターのダウンロードが必要です。"
      },
      {
        q: "読み込み・書き出しできる音声フォーマットは？",
        a: "MP3、WAV、M4A、OGGを読み込めます。MP3、WAV、M4A、M4Rで書き出せます。"
      },
      {
        q: "ファイルサイズや長さの制限はありますか？",
        a: "厳密な制限はありませんが、非常に大きなファイルはデコードや処理に時間がかかることがあります。すべてお使いの端末の処理能力で動作するためです。"
      }
    ],
    linkHome: "モールス翻訳機"
  },
  ko: {
    title: "MP3 자르기 & 벨소리 만들기 - 무료 온라인 오디오 자르기",
    description:
      "브라우저에서 완전히 작동하는 무료 MP3 자르기 및 벨소리 만들기 도구. 노래를 자르고 페이드를 추가해 MP3, WAV, M4A, M4R로 내보내세요. 업로드는 전혀 없습니다.",
    h1: "MP3 자르기 - 브라우저에서 바로 벨소리 만들기",
    keywords: [
      "mp3 자르기",
      "벨소리 만들기",
      "mp3 편집 무료",
      "오디오 자르기 온라인",
      "아이폰 벨소리 만들기",
      "노래 자르기 온라인"
    ],
    summaryTitle: "MP3 자르기란?",
    summaryBody:
      "Morse Code World의 MP3 자르기는 업로드나 계정 없이 브라우저에서 직접 어떤 노래든 자르고 벨소리를 만들 수 있습니다. 파형의 핸들을 드래그해 구간을 선택하고, 그 부분을 남기거나 삭제한 뒤, 페이드 인/아웃을 추가하고 MP3, WAV, M4A 또는 아이폰용 M4R 벨소리로 내보낼 수 있습니다. 모든 처리는 사용자의 기기에서 이루어집니다.",
    breadcrumbHome: "모스 번역기",
    breadcrumbTool: "MP3 자르기",
    aboutHeading: "MP3 자르기 작동 방식",
    aboutP1:
      "이 도구는 Web Audio API를 사용해 브라우저에서 직접 오디오 파일을 디코딩합니다. 파일은 사용자의 기기를 절대 벗어나지 않습니다. 파형을 그려서 정확히 어디를 자르는지 볼 수 있으며, 선택 구간의 시작과 끝을 표시하는 두 개의 드래그 가능한 핸들이 있습니다.",
    aboutP2:
      "선택한 구간을 남길 수도 있고(하이라이트나 벨소리용 클립을 추출하기에 좋음), 삭제하고 남은 부분을 이어붙일 수도 있습니다(기침 소리, 광고, 실수한 부분을 제거하기에 좋음). MP3와 WAV 인코딩을 포함한 모든 작업은 JavaScript와 WebAssembly를 사용해 기기에서 처리되며, 서버로 업로드되는 것은 전혀 없습니다.",
    formatsHeading: "지원 형식",
    formatsP:
      "MP3, WAV, M4A, OGG 파일을 불러올 수 있습니다. MP3나 WAV는 즉시 내보낼 수 있고, M4A / M4R(아이폰이 커스텀 벨소리에 사용하는 형식)은 해당 형식을 처음 선택할 때 한 번만 불러오는 브라우저 내 변환기를 사용해 내보낼 수 있습니다.",
    stepsHeading: "사용 방법",
    steps: [
      "노래를 드래그 앤 드롭하거나 파일을 선택하세요 (MP3, WAV, M4A, OGG).",
      "파형 위의 두 핸들을 드래그해 원하는 부분을 선택하거나, 정확한 시작/종료 시간을 입력하거나, 20초 / 30초 / 40초 프리셋을 사용하세요.",
      "그 부분만 내보내려면 \"선택 영역 유지\"를, 삭제하고 나머지를 이어붙이려면 \"선택 영역 삭제\"를 선택하세요.",
      "더 부드러운 전환을 원하면 페이드 인/아웃을 켜고, \"미리듣기\"를 눌러 실제로 내보내질 내용을 들어보세요.",
      "형식(MP3, WAV, M4A, 또는 아이폰 벨소리용 M4R)을 선택하고 \"내보내기\"를 클릭해 결과를 다운로드하세요."
    ],
    faqHeading: "자주 묻는 질문",
    faq: [
      {
        q: "제 오디오가 어딘가에 업로드되나요?",
        a: "아니요. 파일은 Web Audio API를 사용해 브라우저 안에서 완전히 디코딩되고 처리되며, 사용자의 기기를 절대 벗어나지 않습니다."
      },
      {
        q: "이걸로 아이폰 벨소리를 만들 수 있나요?",
        a: "네. 내보낼 때 M4R 형식을 선택하세요. 이는 아이폰이 커스텀 벨소리에 사용하는 형식입니다. GarageBand로 가져오거나 Finder/iTunes로 동기화해 벨소리로 설정할 수 있습니다."
      },
      {
        q: "\"유지\"와 \"삭제\"의 차이는 무엇인가요?",
        a: "\"선택 영역 유지\"는 강조된 부분만 내보냅니다. \"선택 영역 삭제\"는 강조된 부분을 제거하고 앞뒤 부분을 하나의 파일로 이어붙입니다."
      },
      {
        q: "오프라인에서도 작동하나요?",
        a: "페이지가 로드된 후에는 자르기와 MP3/WAV 내보내기가 완전히 오프라인에서 작동합니다. M4A/M4R 내보내기는 처음 사용할 때 변환기를 다운로드해야 합니다."
      },
      {
        q: "어떤 오디오 형식을 가져오고 내보낼 수 있나요?",
        a: "MP3, WAV, M4A, OGG를 가져올 수 있습니다. MP3, WAV, M4A, M4R로 내보낼 수 있습니다."
      },
      {
        q: "파일 크기나 길이에 제한이 있나요?",
        a: "엄격한 제한은 없지만, 매우 큰 파일은 디코딩과 처리에 시간이 더 걸릴 수 있습니다. 모든 처리가 사용자 기기의 처리 능력으로 이루어지기 때문입니다."
      }
    ],
    linkHome: "모스 번역기"
  },
  zh: {
    title: "MP3剪切與鈴聲製作 - 免費線上剪輯音訊",
    description:
      "完全在瀏覽器中運作的免費 MP3 剪切與鈴聲製作工具。剪輯歌曲、加入淡入淡出，並匯出為 MP3、WAV、M4A 或 M4R。完全不會上傳任何檔案。",
    h1: "MP3剪切 - 直接在瀏覽器中製作鈴聲",
    keywords: [
      "mp3剪切",
      "鈴聲製作",
      "mp3剪輯 免費",
      "線上剪輯音訊",
      "iphone鈴聲製作",
      "歌曲剪輯線上"
    ],
    summaryTitle: "什麼是 MP3剪切？",
    summaryBody:
      "Morse Code World 的 MP3剪切工具讓你直接在瀏覽器中剪輯任何歌曲並製作鈴聲，不需上傳檔案、不需註冊帳號。拖曳波形上的控制點選取片段，保留或刪除該片段，加入淡入淡出效果，然後匯出為 MP3、WAV、M4A 或 iPhone 用的 M4R 鈴聲格式。所有處理都在你自己的裝置上完成。",
    breadcrumbHome: "摩斯翻譯器",
    breadcrumbTool: "MP3剪切",
    aboutHeading: "MP3剪切如何運作",
    aboutP1:
      "此工具使用 Web Audio API 直接在你的瀏覽器中解碼音訊檔案，檔案永遠不會離開你的裝置。它會繪製波形，讓你清楚看到正在剪輯的內容，並提供兩個可拖曳的控制點標示選取範圍的起點和終點。",
    aboutP2:
      "你可以保留選取的片段（適合擷取副歌或鈴聲片段），或刪除該片段並無縫接合剩餘部分（適合移除咳嗽聲、廣告或錯誤片段）。包括 MP3 和 WAV 編碼的所有處理都使用 JavaScript 和 WebAssembly 在你的裝置上完成，絕不會上傳到伺服器。",
    formatsHeading: "支援的格式",
    formatsP:
      "可匯入 MP3、WAV、M4A 或 OGG。MP3 或 WAV 可立即匯出，M4A / M4R（iPhone 自訂鈴聲使用的格式）則透過瀏覽器內的轉換工具，於首次選擇該格式時載入後匯出。",
    stepsHeading: "使用方法",
    steps: [
      "拖曳歌曲，或選擇檔案（MP3、WAV、M4A、OGG）。",
      "拖曳波形上的兩個控制點選取所需片段，或輸入精確的起止時間，或使用 20秒 / 30秒 / 40秒 快速選取。",
      "選擇「保留選取範圍」只匯出該片段，或選擇「刪除選取範圍」移除該片段並接合其餘部分。",
      "如需更平滑的效果可開啟淡入／淡出，然後點擊「試聽」確認實際匯出的內容。",
      "選擇格式（MP3、WAV、M4A，或用於 iPhone 鈴聲的 M4R），點擊「匯出」即可下載結果。"
    ],
    faqHeading: "常見問題",
    faq: [
      {
        q: "我的音訊會被上傳到任何地方嗎？",
        a: "不會。檔案完全在你的瀏覽器中使用 Web Audio API 解碼與處理，永遠不會離開你的裝置。"
      },
      {
        q: "可以用這個工具製作 iPhone 鈴聲嗎？",
        a: "可以。匯出時選擇 M4R 格式，這是 iPhone 自訂鈴聲使用的格式。將檔案匯入 GarageBand，或透過 Finder / iTunes 同步，即可設定為鈴聲。"
      },
      {
        q: "「保留」和「刪除」選取範圍有什麼差別？",
        a: "「保留選取範圍」只匯出突顯的部分。「刪除選取範圍」會移除突顯的部分，並將前後剩餘的部分無縫接合成一個檔案。"
      },
      {
        q: "這個工具可以離線使用嗎？",
        a: "頁面載入後，剪輯與匯出為 MP3 或 WAV 可完全離線運作。匯出 M4A/M4R 需要在首次使用時下載轉換工具。"
      },
      {
        q: "可以匯入和匯出哪些音訊格式？",
        a: "可匯入 MP3、WAV、M4A 或 OGG。可匯出為 MP3、WAV、M4A 或 M4R。"
      },
      {
        q: "檔案大小或長度有限制嗎？",
        a: "沒有硬性限制，但非常大的檔案解碼與處理可能需要較長時間，因為所有運算都在你自己裝置的效能上進行。"
      }
    ],
    linkHome: "摩斯翻譯器"
  },
  tr: {
    title: "MP3 Kesme ve Zil Sesi Yapma - Ücretsiz Online Ses Kesme",
    description:
      "Tamamen tarayıcınızda çalışan ücretsiz MP3 kesme ve zil sesi yapma araci. Şarkıyı kesin, geçişler ekleyin, MP3, WAV, M4A veya M4R olarak dışa aktarın. Hiçbir şey yüklenmez.",
    h1: "MP3 Kesme - Tarayıcınızda Doğrudan Zil Sesi Yapın",
    keywords: [
      "mp3 kesme",
      "zil sesi yapma",
      "mp3 kırpma ücretsiz",
      "online ses kesme",
      "iphone zil sesi yapma",
      "şarkı kesme online"
    ],
    summaryTitle: "MP3 kesme aracı nedir?",
    summaryBody:
      "Morse Code World'ün MP3 kesme araci, herhangi bir şarkıyı doğrudan tarayıcınızda kesmenizi ve zil sesi yapmanızı sağlar - yükleme yok, hesap gerekmez. Dalga formu üzerindeki tutamaçları sürükleyerek bir bölüm seçin, o bölümü koruyun veya silin, geçiş ekleyin ve MP3, WAV, M4A veya iPhone için M4R zil sesi olarak dışa aktarın. Tüm işlemler kendi cihazınızda gerçekleşir.",
    breadcrumbHome: "Mors çevirici",
    breadcrumbTool: "MP3 Kesme",
    aboutHeading: "MP3 kesme aracı nasıl çalışır",
    aboutP1:
      "Bu araç, ses dosyanızı Web Audio API kullanarak doğrudan tarayıcınızda çözer - dosya cihazınızdan asla çıkmaz. Neyi kestiğinizi tam olarak görebilmeniz için bir dalga formu çizer; seçiminizin başlangıcını ve sonunu işaretleyen sürüklenebilir iki tutamaç bulunur.",
    aboutP2:
      "Seçili bölgeyi koruyabilirsiniz (bir nakaratı veya zil sesi klibini almak için ideal) veya silip kalan kısmı kesintisiz birleştirebilirsiniz (bir öksürüğü, reklam arasını veya hatayı kaldırmak için harika). MP3 ve WAV kodlaması dahil her şey, JavaScript ve WebAssembly kullanılarak cihazınızda çalışır - bir sunucuya asla hiçbir şey yüklenmez.",
    formatsHeading: "Desteklenen formatlar",
    formatsP:
      "MP3, WAV, M4A veya OGG içe aktarabilirsiniz. MP3 veya WAV'ı anında dışa aktarın, veya bu formatlardan birini seçtiğinizde ilk kez yüklenen bir tarayıcı içi dönüştürücü ile M4A / M4R (iPhone'ların özel zil sesleri için kullandığı format) olarak dışa aktarın.",
    stepsHeading: "Nasıl kullanılır",
    steps: [
      "Bir şarkıyı sürükleyip bırakın veya bir dosya seçin (MP3, WAV, M4A, OGG).",
      "İstediğiniz bölümü seçmek için dalga formu üzerindeki iki tutamacı sürükleyin, tam başlangıç/bitiş sürelerini yazın veya 20s / 30s / 40s hazır ayarlarını kullanın.",
      "Sadece o bölümü dışa aktarmak için \"Seçimi koru\"yu, kaldırıp kalanı birleştirmek için \"Seçimi sil\"i seçin.",
      "Daha yumuşak geçişler için geçiş efektlerini açın, ardından dışa aktarılacak sesi tam olarak duymak için Önizleme'ye basın.",
      "Bir format seçin (MP3, WAV, M4A, veya iPhone zil sesleri için M4R) ve sonucu indirmek için Dışa Aktar'a tıklayın."
    ],
    faqHeading: "Sıkça sorulan sorular",
    faq: [
      {
        q: "Sesim herhangi bir yere yükleniyor mu?",
        a: "Hayır. Dosya, Web Audio API kullanılarak tamamen tarayıcınızda çözülür ve işlenir - cihazınızdan asla çıkmaz."
      },
      {
        q: "Bununla iPhone zil sesi yapabilir miyim?",
        a: "Evet. Dışa aktarırken M4R formatını seçin - bu, iPhone'ların özel zil sesleri için kullandığı formattır. Dosyayı GarageBand'e aktarın veya Finder/iTunes ile senkronize ederek zil sesi olarak ayarlayın."
      },
      {
        q: "\"Koru\" ve \"Sil\" seçimi arasındaki fark nedir?",
        a: "\"Seçimi koru\" yalnızca vurgulanan bölümü dışa aktarır. \"Seçimi sil\" vurgulanan bölümü kaldırır ve öncesini ve sonrasını tek bir dosyada kesintisiz birleştirir."
      },
      {
        q: "Bu çevrimdışı çalışır mı?",
        a: "Sayfa yüklendikten sonra kesme ve MP3 veya WAV olarak dışa aktarma tamamen çevrimdışı çalışır. M4A/M4R dışa aktarımı ilk kullanımda bir dönüştürücü indirmeyi gerektirir."
      },
      {
        q: "Hangi ses formatlarını içe/dışa aktarabilirim?",
        a: "MP3, WAV, M4A veya OGG içe aktarabilirsiniz. MP3, WAV, M4A veya M4R olarak dışa aktarabilirsiniz."
      },
      {
        q: "Dosya boyutu veya süresi sınırı var mı?",
        a: "Kesin bir sınır yoktur, ancak çok büyük dosyaların çözülmesi ve işlenmesi daha uzun sürebilir, çünkü her şey kendi cihazınızın işlem gücüyle çalışır."
      }
    ],
    linkHome: "Mors çevirici"
  },
  ar: {
    title: "قص MP3 وصنع النغمات - قص الصوت مجانا عبر الإنترنت",
    description:
      "أداة مجانية لقص MP3 وصنع نغمات الرنين تعمل بالكامل في المتصفح. قص أي أغنية، أضف تأثيرات التلاشي، وصدّرها بصيغة MP3 أو WAV أو M4A أو M4R. لا يتم رفع أي شيء.",
    h1: "قص MP3 - صنع نغمة رنين مباشرة من المتصفح",
    keywords: [
      "قص mp3",
      "قص الأغاني",
      "صانع النغمات",
      "قص الصوت اونلاين",
      "صنع نغمة للايفون",
      "تقطيع mp3 مجانا"
    ],
    summaryTitle: "ما هي أداة قص MP3؟",
    summaryBody:
      "تتيح لك أداة قص MP3 من Morse Code World قص أي أغنية وصنع نغمات رنين منها مباشرة في متصفحك، دون رفع أي ملف ودون حساب. اسحب مقابض الشكل الموجي لتحديد جزء، ثم احتفظ به أو احذفه، وأضف تأثيرات تلاشي الدخول والخروج، وصدّر النتيجة بصيغة MP3 أو WAV أو M4A أو نغمة M4R لأجهزة آيفون. تتم كل المعالجة على جهازك الخاص.",
    breadcrumbHome: "مترجم مورس",
    breadcrumbTool: "قص MP3",
    aboutHeading: "كيف تعمل أداة قص MP3",
    aboutP1:
      "تقوم هذه الأداة بترميز ملف الصوت مباشرة داخل متصفحك باستخدام واجهة Web Audio API - ولا يخرج الملف أبدا من جهازك. ترسم الأداة شكلا موجيا لترى بدقة ما تقوم بقصه، مع مقبضين يمكن سحبهما لتحديد بداية ونهاية الجزء المختار.",
    aboutP2:
      "يمكنك الاحتفاظ بالجزء المحدد (مثالي لاستخراج جزء من الأغنية أو مقطع لنغمة رنين) أو حذفه ودمج الباقي بسلاسة (مفيد لإزالة سعلة أو فترة إعلان أو خطأ). كل شيء، بما في ذلك ترميز MP3 و WAV، يتم على جهازك باستخدام JavaScript وWebAssembly - ولا يتم رفع أي شيء إلى أي خادم أبدا.",
    formatsHeading: "الصيغ المدعومة",
    formatsP:
      "استورد ملفات MP3 أو WAV أو M4A أو OGG. صدّر بصيغة MP3 أو WAV فورا، أو بصيغة M4A / M4R (الصيغة التي تستخدمها أجهزة آيفون لنغمات الرنين المخصصة) عبر محول داخل المتصفح يتم تحميله عند اختيار إحدى هاتين الصيغتين لأول مرة.",
    stepsHeading: "طريقة الاستخدام",
    steps: [
      "اسحب وأسقط أغنية، أو اختر ملفا (MP3, WAV, M4A, OGG).",
      "اسحب المقبضين على الشكل الموجي لتحديد الجزء الذي تريده، أو أدخل أوقات البداية والنهاية بدقة، أو استخدم الاختصارات الجاهزة 20 ثانية / 30 ثانية / 40 ثانية.",
      "اختر \"الاحتفاظ بالتحديد\" لتصدير هذا الجزء فقط، أو \"حذف التحديد\" لإزالته ودمج الباقي.",
      "فعّل تأثير التلاشي في البداية والنهاية إذا أردت انتقالا أكثر سلاسة، ثم اضغط على \"معاينة\" لسماع ما سيتم تصديره بالضبط.",
      "اختر صيغة (MP3 أو WAV أو M4A أو M4R لنغمات آيفون) واضغط \"تصدير\" لتنزيل النتيجة."
    ],
    faqHeading: "الأسئلة الشائعة",
    faq: [
      {
        q: "هل يتم رفع صوتي إلى أي مكان؟",
        a: "لا. يتم ترميز الملف ومعالجته بالكامل داخل متصفحك باستخدام واجهة Web Audio API - ولا يخرج أبدا من جهازك."
      },
      {
        q: "هل يمكنني صنع نغمة رنين لآيفون بهذه الأداة؟",
        a: "نعم. اختر صيغة M4R عند التصدير - وهي الصيغة التي تستخدمها أجهزة آيفون لنغمات الرنين المخصصة. استورد الملف إلى GarageBand أو زامنه عبر Finder/iTunes لتعيينه كنغمة رنين."
      },
      {
        q: "ما الفرق بين \"الاحتفاظ\" و \"حذف\" التحديد؟",
        a: "\"الاحتفاظ بالتحديد\" يصدّر فقط الجزء المحدد. \"حذف التحديد\" يزيل الجزء المحدد ويدمج ما قبله وما بعده بسلاسة في ملف واحد."
      },
      {
        q: "هل تعمل هذه الأداة بدون إنترنت؟",
        a: "بعد تحميل الصفحة، يعمل القص والتصدير إلى MP3 أو WAV بدون إنترنت تماما. يحتاج تصدير M4A/M4R إلى تنزيل محول عند أول استخدام."
      },
      {
        q: "ما صيغ الصوت التي يمكنني استيرادها وتصديرها؟",
        a: "استورد MP3 أو WAV أو M4A أو OGG. صدّر بصيغة MP3 أو WAV أو M4A أو M4R."
      },
      {
        q: "هل هناك حد لحجم الملف أو مدته؟",
        a: "لا يوجد حد صارم، لكن الملفات الكبيرة جدا قد تستغرق وقتا أطول في الترميز والمعالجة لأن كل شيء يعمل بقدرة معالجة جهازك الخاص."
      }
    ],
    linkHome: "مترجم مورس"
  },
  id: {
    title: "Potong MP3 & Buat Nada Dering - Potong Audio Online Gratis",
    description:
      "Alat pemotong MP3 dan pembuat nada dering gratis yang berjalan sepenuhnya di browser. Potong lagu apa pun, tambahkan fade, dan ekspor sebagai MP3, WAV, M4A, atau M4R. Tidak ada yang diunggah.",
    h1: "Potong MP3 - Buat Nada Dering Langsung di Browser",
    keywords: [
      "potong mp3",
      "potong lagu",
      "buat nada dering",
      "pemotong audio online",
      "buat nada dering iphone",
      "potong mp3 gratis"
    ],
    summaryTitle: "Apa itu alat potong MP3?",
    summaryBody:
      "Alat potong MP3 Morse Code World memungkinkan Anda memotong lagu apa pun dan membuat nada dering langsung di browser, tanpa mengunggah file dan tanpa akun. Seret pegangan pada gelombang audio untuk memilih bagian, simpan atau hapus bagian itu, tambahkan fade in/out, lalu ekspor sebagai MP3, WAV, M4A, atau nada dering M4R untuk iPhone. Semua pemrosesan terjadi di perangkat Anda sendiri.",
    breadcrumbHome: "Penerjemah Kode Morse",
    breadcrumbTool: "Potong MP3",
    aboutHeading: "Cara kerja alat potong MP3",
    aboutP1:
      "Alat ini men-decode file audio Anda langsung di browser menggunakan Web Audio API - file tidak pernah meninggalkan perangkat Anda. Alat ini menggambar gelombang audio agar Anda bisa melihat persis bagian yang dipotong, dengan dua pegangan yang bisa diseret untuk menandai awal dan akhir pilihan Anda.",
    aboutP2:
      "Anda bisa menyimpan bagian yang dipilih (cocok untuk mengambil bagian chorus atau klip nada dering) atau menghapusnya dan menyambungkan sisanya secara mulus (cocok untuk menghapus batuk, jeda iklan, atau kesalahan). Semuanya, termasuk encoding MP3 dan WAV, berjalan di perangkat Anda menggunakan JavaScript dan WebAssembly - tidak ada yang diunggah ke server.",
    formatsHeading: "Format yang didukung",
    formatsP:
      "Impor MP3, WAV, M4A, atau OGG. Ekspor sebagai MP3 atau WAV secara instan, atau sebagai M4A / M4R (format yang digunakan iPhone untuk nada dering khusus) menggunakan konverter dalam browser yang dimuat saat pertama kali Anda memilih salah satu format tersebut.",
    stepsHeading: "Cara menggunakannya",
    steps: [
      "Seret dan lepas lagu, atau pilih file (MP3, WAV, M4A, OGG).",
      "Seret dua pegangan pada gelombang audio untuk memilih bagian yang diinginkan, ketik waktu mulai/akhir yang tepat, atau gunakan preset 20 detik / 30 detik / 40 detik.",
      "Pilih \"Simpan pilihan\" untuk mengekspor hanya bagian itu, atau \"Hapus pilihan\" untuk menghapusnya dan menyambungkan sisanya.",
      "Aktifkan fade in / fade out jika ingin transisi lebih halus, lalu tekan Pratinjau untuk mendengar persis apa yang akan diekspor.",
      "Pilih format (MP3, WAV, M4A, atau M4R untuk nada dering iPhone) dan klik Ekspor untuk mengunduh hasilnya."
    ],
    faqHeading: "Pertanyaan yang sering diajukan",
    faq: [
      {
        q: "Apakah audio saya diunggah ke suatu tempat?",
        a: "Tidak. File di-decode dan diproses sepenuhnya di browser Anda menggunakan Web Audio API - file tidak pernah meninggalkan perangkat Anda."
      },
      {
        q: "Bisakah saya membuat nada dering iPhone dengan ini?",
        a: "Ya. Pilih format M4R saat mengekspor - ini adalah format yang digunakan iPhone untuk nada dering khusus. Impor file ke GarageBand atau sinkronkan melalui Finder/iTunes untuk mengaturnya sebagai nada dering."
      },
      {
        q: "Apa perbedaan antara \"Simpan\" dan \"Hapus\" pilihan?",
        a: "\"Simpan pilihan\" hanya mengekspor bagian yang disorot. \"Hapus pilihan\" menghapus bagian yang disorot dan menyambungkan bagian sebelum dan sesudahnya secara mulus menjadi satu file."
      },
      {
        q: "Apakah ini berfungsi secara offline?",
        a: "Setelah halaman dimuat, memotong dan mengekspor ke MP3 atau WAV berfungsi sepenuhnya offline. Ekspor M4A/M4R perlu mengunduh konverter saat pertama kali digunakan."
      },
      {
        q: "Format audio apa yang bisa saya impor dan ekspor?",
        a: "Impor MP3, WAV, M4A, atau OGG. Ekspor sebagai MP3, WAV, M4A, atau M4R."
      },
      {
        q: "Apakah ada batasan ukuran atau panjang file?",
        a: "Tidak ada batasan ketat, tetapi file yang sangat besar mungkin membutuhkan waktu lebih lama untuk di-decode dan diproses karena semuanya berjalan dengan kemampuan pemrosesan perangkat Anda sendiri."
      }
    ],
    linkHome: "penerjemah Morse"
  },
  th: {
    title: "ตัดเพลง MP3 และทำเสียงเรียกเข้า - ตัดเสียงออนไลน์ฟรี",
    description:
      "เครื่องมือตัด MP3 และทำเสียงเรียกเข้าฟรีที่ทำงานในเบราว์เซอร์ทั้งหมด ตัดเพลงใดก็ได้ เพิ่มเฟด แล้วส่งออกเป็น MP3, WAV, M4A หรือ M4R ไม่มีการอัปโหลดใด ๆ",
    h1: "ตัด MP3 - ทำเสียงเรียกเข้าโดยตรงในเบราว์เซอร์",
    keywords: [
      "ตัดเพลง",
      "ตัด mp3",
      "ทำเสียงเรียกเข้า",
      "ตัดเสียงออนไลน์ฟรี",
      "ทำเสียงเรียกเข้า iphone",
      "ตัดเพลงออนไลน์"
    ],
    summaryTitle: "เครื่องมือตัด MP3 คืออะไร?",
    summaryBody:
      "เครื่องมือตัด MP3 ของ Morse Code World ให้คุณตัดเพลงใดก็ได้และทำเสียงเรียกเข้าได้โดยตรงในเบราว์เซอร์ ไม่ต้องอัปโหลดไฟล์และไม่ต้องสมัครสมาชิก ลากจุดจับบนคลื่นเสียงเพื่อเลือกช่วง เก็บไว้หรือลบออก เพิ่มเฟดอิน/เฟดเอาต์ แล้วส่งออกเป็น MP3, WAV, M4A หรือเสียงเรียกเข้า M4R สำหรับ iPhone การประมวลผลทั้งหมดเกิดขึ้นบนอุปกรณ์ของคุณเอง",
    breadcrumbHome: "ตัวแปลรหัสมอร์ส",
    breadcrumbTool: "ตัด MP3",
    aboutHeading: "เครื่องมือตัด MP3 ทำงานอย่างไร",
    aboutP1:
      "เครื่องมือนี้ถอดรหัสไฟล์เสียงของคุณโดยตรงในเบราว์เซอร์โดยใช้ Web Audio API ไฟล์จะไม่ออกจากอุปกรณ์ของคุณเลย เครื่องมือจะวาดคลื่นเสียงเพื่อให้คุณเห็นชัดเจนว่ากำลังตัดส่วนไหน พร้อมจุดจับที่ลากได้สองจุดเพื่อระบุจุดเริ่มต้นและจุดสิ้นสุดของส่วนที่เลือก",
    aboutP2:
      "คุณสามารถเก็บส่วนที่เลือกไว้ (เหมาะสำหรับดึงท่อนฮุกหรือคลิปสำหรับเสียงเรียกเข้า) หรือลบส่วนนั้นออกแล้วเชื่อมส่วนที่เหลือให้ต่อเนื่องกัน (เหมาะสำหรับลบเสียงไอ ช่วงโฆษณา หรือข้อผิดพลาด) ทุกอย่างรวมถึงการเข้ารหัส MP3 และ WAV ทำงานบนอุปกรณ์ของคุณด้วย JavaScript และ WebAssembly ไม่มีการอัปโหลดขึ้นเซิร์ฟเวอร์เลย",
    formatsHeading: "รูปแบบที่รองรับ",
    formatsP:
      "นำเข้าไฟล์ MP3, WAV, M4A หรือ OGG ส่งออกเป็น MP3 หรือ WAV ได้ทันที หรือส่งออกเป็น M4A / M4R (รูปแบบที่ iPhone ใช้สำหรับเสียงเรียกเข้าที่กำหนดเอง) ผ่านตัวแปลงในเบราว์เซอร์ที่จะโหลดครั้งแรกที่คุณเลือกหนึ่งในรูปแบบเหล่านี้",
    stepsHeading: "วิธีใช้งาน",
    steps: [
      "ลากและวางเพลง หรือเลือกไฟล์ (MP3, WAV, M4A, OGG)",
      "ลากจุดจับทั้งสองบนคลื่นเสียงเพื่อเลือกส่วนที่ต้องการ พิมพ์เวลาเริ่มต้น/สิ้นสุดที่ต้องการ หรือใช้ค่าที่ตั้งไว้ล่วงหน้า 20 วินาที / 30 วินาที / 40 วินาที",
      "เลือก \"เก็บส่วนที่เลือก\" เพื่อส่งออกเฉพาะส่วนนั้น หรือ \"ลบส่วนที่เลือก\" เพื่อลบออกและเชื่อมส่วนที่เหลือ",
      "เปิดเฟดอิน/เฟดเอาต์หากต้องการขอบที่นุ่มนวลขึ้น จากนั้นกด \"ฟังตัวอย่าง\" เพื่อฟังสิ่งที่จะส่งออกจริง ๆ",
      "เลือกรูปแบบ (MP3, WAV, M4A หรือ M4R สำหรับเสียงเรียกเข้า iPhone) แล้วคลิก \"ส่งออก\" เพื่อดาวน์โหลดผลลัพธ์"
    ],
    faqHeading: "คำถามที่พบบ่อย",
    faq: [
      {
        q: "ไฟล์เสียงของฉันถูกอัปโหลดไปที่ไหนหรือไม่?",
        a: "ไม่ ไฟล์จะถูกถอดรหัสและประมวลผลทั้งหมดในเบราว์เซอร์ของคุณโดยใช้ Web Audio API และจะไม่ออกจากอุปกรณ์ของคุณเลย"
      },
      {
        q: "ใช้เครื่องมือนี้ทำเสียงเรียกเข้า iPhone ได้ไหม?",
        a: "ได้ เลือกรูปแบบ M4R เมื่อส่งออก ซึ่งเป็นรูปแบบที่ iPhone ใช้สำหรับเสียงเรียกเข้าที่กำหนดเอง นำเข้าไฟล์ไปยัง GarageBand หรือซิงค์ผ่าน Finder/iTunes เพื่อตั้งเป็นเสียงเรียกเข้า"
      },
      {
        q: "\"เก็บ\" และ \"ลบ\" ส่วนที่เลือกต่างกันอย่างไร?",
        a: "\"เก็บส่วนที่เลือก\" จะส่งออกเฉพาะส่วนที่ไฮไลต์ไว้ \"ลบส่วนที่เลือก\" จะลบส่วนที่ไฮไลต์ไว้และเชื่อมส่วนก่อนหน้าและหลังจากนั้นเข้าด้วยกันเป็นไฟล์เดียว"
      },
      {
        q: "ใช้งานแบบออฟไลน์ได้ไหม?",
        a: "หลังจากโหลดหน้าเว็บแล้ว การตัดและส่งออกเป็น MP3 หรือ WAV จะทำงานแบบออฟไลน์ได้อย่างสมบูรณ์ การส่งออก M4A/M4R ต้องดาวน์โหลดตัวแปลงในการใช้งานครั้งแรก"
      },
      {
        q: "นำเข้าและส่งออกไฟล์เสียงรูปแบบใดได้บ้าง?",
        a: "นำเข้าไฟล์ MP3, WAV, M4A หรือ OGG ได้ ส่งออกเป็น MP3, WAV, M4A หรือ M4R ได้"
      },
      {
        q: "มีข้อจำกัดเรื่องขนาดหรือความยาวของไฟล์หรือไม่?",
        a: "ไม่มีข้อจำกัดที่เข้มงวด แต่ไฟล์ที่มีขนาดใหญ่มากอาจใช้เวลาถอดรหัสและประมวลผลนานขึ้น เนื่องจากทุกอย่างทำงานด้วยความสามารถในการประมวลผลของอุปกรณ์คุณเอง"
      }
    ],
    linkHome: "ตัวแปลมอร์ส"
  }
};

export function getMp3CutterPageCopy(locale: HomeLocale): Mp3CutterPageCopy {
  const override = OVERRIDES[locale];
  return override ? { ...EN, ...override } : EN;
}

export function getMp3CutterPageLinks(locale: HomeLocale) {
  return {
    home: homePath(locale),
    mp3Cutter: mp3CutterPath(locale)
  };
}
