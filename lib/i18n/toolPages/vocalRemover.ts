import type { HomeLocale } from "@/lib/i18n/home";
import { homePath, vocalRemoverPath } from "@/lib/i18n/routes";

export type VocalRemoverPageCopy = {
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
  limitsHeading: string;
  limitsP: string;
  stepsHeading: string;
  steps: string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  linkHome: string;
};

const EN: VocalRemoverPageCopy = {
  title: "Vocal Remover - Remove Vocals from Any Song Online Free",
  description:
    "Free AI vocal remover. Upload a song and split it into an instrumental (no vocals) track and an isolated vocals track in your browser. MP3, WAV, FLAC, OGG.",
  h1: "Vocal Remover - Split Any Song into Instrumental and Vocals",
  keywords: [
    "vocal remover",
    "remove vocals from song",
    "instrumental maker",
    "isolate vocals",
    "karaoke maker online",
    "AI vocal remover"
  ],
  summaryTitle: "What is the Vocal Remover?",
  summaryBody:
    "The Vocal Remover on Morse Code World uses AI (Demucs music source separation) to split any song into two tracks: an instrumental with the vocals removed, and the isolated vocals on their own. Upload an MP3, WAV, FLAC, or OGG file up to 15 MB and 10 minutes long, then preview and download both results. Free, no account required.",
  breadcrumbHome: "Morse Code Translator",
  breadcrumbTool: "Vocal Remover",
  aboutHeading: "How the vocal remover works",
  aboutP1:
    "This tool uses Demucs, an AI music source separation model, to analyze a song and separate the human voice from the instrumental backing track. Upload a song, and the AI listens to the full mix and rebuilds two new tracks: one with only the instrumental (drums, bass, and everything else) and one with only the vocals.",
  aboutP2:
    "Separation runs on a GPU in the cloud and typically takes 1 to 3 minutes depending on song length. The very first request after a period of inactivity may take a little longer while the model warms up — this is normal and only happens occasionally.",
  limitsHeading: "File limits",
  limitsP:
    "To keep processing fast and affordable, uploads are limited to 15 MB and 10 minutes of audio. Supported formats are MP3, WAV, FLAC, and OGG. For longer tracks, trim the file first and upload the section you want to process.",
  stepsHeading: "How to use it",
  steps: [
    "Drag and drop a song, or choose a file (MP3, WAV, FLAC, OGG, max 15 MB / 10 min).",
    "The file uploads directly and securely, then AI separation starts automatically.",
    "Wait 1-3 minutes while the song is split into instrumental and vocals.",
    "Preview both tracks in the built-in players.",
    "Download the instrumental, the vocals, or both."
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "Is the vocal remover free?",
      a: "Yes, it is free to use with no account required."
    },
    {
      q: "What file formats are supported?",
      a: "MP3, WAV, FLAC, and OGG. Files must be 15 MB or smaller and 10 minutes or shorter."
    },
    {
      q: "How long does separation take?",
      a: "Usually 1 to 3 minutes, depending on the length of the song. The first request after a while can take a bit longer due to model cold start."
    },
    {
      q: "Can I make karaoke tracks with this?",
      a: "Yes. Download the instrumental (no-vocals) track and use it as a backing track for singing along."
    },
    {
      q: "Is my audio stored anywhere?",
      a: "This tool is stateless — there is no database or account system. Uploaded audio and results are handled only long enough to process your request."
    },
    {
      q: "Why was my file rejected?",
      a: "Files over 15 MB or 10 minutes are rejected to keep processing fast for everyone. Trim your audio and try again."
    }
  ],
  linkHome: "Morse code translator"
};

/** Localized overrides (falls back to English body where not set). */
const OVERRIDES: Partial<Record<HomeLocale, Partial<VocalRemoverPageCopy>>> = {
  es: {
    title: "Quitar voz de una canción - Separador de voz y música gratis",
    description:
      "Quita la voz de una canción gratis con IA. Sube un archivo y sepáralo en instrumental (sin voz) y voz aislada. MP3, WAV, FLAC, OGG.",
    h1: "Quitar voz de una canción - Separar voz de música online",
    keywords: [
      "quitar voz de una canción",
      "separar voz de música",
      "eliminar voz de una canción",
      "pista instrumental online",
      "karaoke online gratis"
    ],
    summaryTitle: "¿Qué es el separador de voz y música?",
    summaryBody:
      "El separador de voz y música de Morse Code World usa IA (Demucs) para dividir cualquier canción en dos pistas: una instrumental sin voz y otra con solo la voz aislada. Sube un MP3, WAV, FLAC u OGG de hasta 15 MB y 10 minutos, y descarga ambos resultados. Gratis, sin cuenta.",
    breadcrumbHome: "Traductor Morse",
    breadcrumbTool: "Quitar voz de una canción",
    aboutHeading: "Cómo funciona el separador de voz",
    aboutP1:
      "Esta herramienta usa Demucs, un modelo de IA de separación de fuentes musicales, para analizar una canción y separar la voz humana del acompañamiento instrumental. Sube una canción y la IA escucha la mezcla completa para reconstruir dos pistas nuevas: una solo con el instrumental (batería, bajo y el resto) y otra solo con la voz.",
    aboutP2:
      "La separación se ejecuta en una GPU en la nube y suele tardar de 1 a 3 minutos según la duración de la canción. La primera solicitud tras un periodo de inactividad puede tardar un poco más mientras el modelo se reactiva; esto es normal y poco frecuente.",
    limitsHeading: "Límites de archivo",
    limitsP:
      "Para mantener el procesamiento rápido y económico, las subidas están limitadas a 15 MB y 10 minutos de audio. Los formatos admitidos son MP3, WAV, FLAC y OGG. Para pistas más largas, recorta el archivo primero y sube la sección que quieras procesar.",
    stepsHeading: "Cómo usarlo",
    steps: [
      "Arrastra y suelta una canción, o elige un archivo (MP3, WAV, FLAC, OGG, máx. 15 MB / 10 min).",
      "El archivo se sube directamente y de forma segura, luego la separación por IA comienza automáticamente.",
      "Espera 1-3 minutos mientras la canción se separa en instrumental y voz.",
      "Escucha ambas pistas en los reproductores integrados.",
      "Descarga el instrumental, la voz, o ambos."
    ],
    faqHeading: "Preguntas frecuentes",
    faq: [
      { q: "¿Es gratis el separador de voz?", a: "Sí, es gratis y no necesita cuenta." },
      {
        q: "¿Qué formatos de archivo son compatibles?",
        a: "MP3, WAV, FLAC y OGG. Los archivos deben ser de 15 MB o menos y de 10 minutos o menos."
      },
      {
        q: "¿Cuánto tarda la separación?",
        a: "Normalmente de 1 a 3 minutos, según la duración de la canción. La primera solicitud tras un rato de inactividad puede tardar un poco más por el reinicio del modelo."
      },
      {
        q: "¿Puedo hacer pistas de karaoke con esto?",
        a: "Sí. Descarga la pista instrumental (sin voz) y úsala como base para cantar."
      },
      {
        q: "¿Se guarda mi audio en algún lugar?",
        a: "Esta herramienta no guarda estado: no hay base de datos ni sistema de cuentas. El audio subido y los resultados solo se procesan el tiempo necesario para completar tu solicitud."
      },
      {
        q: "¿Por qué se rechazó mi archivo?",
        a: "Los archivos de más de 15 MB o 10 minutos se rechazan para mantener el procesamiento rápido para todos. Recorta tu audio e inténtalo de nuevo."
      }
    ],
    linkHome: "traductor de Morse"
  },
  pt: {
    title: "Remover vocal da música - Separar voz e instrumental grátis",
    description:
      "Remova o vocal de uma música grátis com IA. Envie um arquivo e separe em instrumental (sem voz) e vocal isolado. MP3, WAV, FLAC, OGG.",
    h1: "Remover vocal da música - Tirar a voz da música online",
    keywords: [
      "remover vocal da música",
      "tirar a voz da música",
      "separar vocal e instrumental",
      "criar instrumental online",
      "karaoke online grátis"
    ],
    summaryTitle: "O que é o removedor de vocal?",
    summaryBody:
      "O removedor de vocal do Morse Code World usa IA (Demucs) para dividir qualquer música em duas faixas: uma instrumental sem voz e outra apenas com o vocal isolado. Envie um MP3, WAV, FLAC ou OGG de até 15 MB e 10 minutos, e baixe os dois resultados. Grátis, sem conta.",
    breadcrumbHome: "Tradutor Morse",
    breadcrumbTool: "Remover vocal da música",
    aboutHeading: "Como funciona o removedor de vocal",
    aboutP1:
      "Esta ferramenta usa o Demucs, um modelo de IA de separação de fontes musicais, para analisar uma música e separar a voz humana do acompanhamento instrumental. Envie uma música, e a IA escuta a mixagem completa para reconstruir duas novas faixas: uma apenas com o instrumental (bateria, baixo e o resto) e outra apenas com o vocal.",
    aboutP2:
      "A separação é executada em uma GPU na nuvem e geralmente leva de 1 a 3 minutos, dependendo da duração da música. A primeira solicitação após um período de inatividade pode levar um pouco mais de tempo enquanto o modelo é reativado; isso é normal e raro.",
    limitsHeading: "Limites de arquivo",
    limitsP:
      "Para manter o processamento rápido e acessível, os envios são limitados a 15 MB e 10 minutos de áudio. Os formatos suportados são MP3, WAV, FLAC e OGG. Para faixas mais longas, recorte o arquivo primeiro e envie a seção que deseja processar.",
    stepsHeading: "Como usar",
    steps: [
      "Arraste e solte uma música, ou escolha um arquivo (MP3, WAV, FLAC, OGG, máx. 15 MB / 10 min).",
      "O arquivo é enviado diretamente e com segurança, depois a separação por IA começa automaticamente.",
      "Aguarde 1-3 minutos enquanto a música é separada em instrumental e vocal.",
      "Ouça as duas faixas nos players integrados.",
      "Baixe o instrumental, o vocal, ou ambos."
    ],
    faqHeading: "Perguntas frequentes",
    faq: [
      { q: "O removedor de vocal é grátis?", a: "Sim, é grátis e não precisa de conta." },
      {
        q: "Quais formatos de arquivo são suportados?",
        a: "MP3, WAV, FLAC e OGG. Os arquivos devem ter no máximo 15 MB e 10 minutos."
      },
      {
        q: "Quanto tempo leva a separação?",
        a: "Geralmente de 1 a 3 minutos, dependendo da duração da música. A primeira solicitação após um tempo de inatividade pode levar um pouco mais por causa da reinicialização do modelo."
      },
      {
        q: "Posso criar faixas de karaokê com isso?",
        a: "Sim. Baixe a faixa instrumental (sem voz) e use como base para cantar."
      },
      {
        q: "Meu áudio é armazenado em algum lugar?",
        a: "Esta ferramenta não guarda estado - não há banco de dados nem sistema de contas. O áudio enviado e os resultados são processados apenas pelo tempo necessário para atender sua solicitação."
      },
      {
        q: "Por que meu arquivo foi rejeitado?",
        a: "Arquivos com mais de 15 MB ou 10 minutos são rejeitados para manter o processamento rápido para todos. Recorte seu áudio e tente novamente."
      }
    ],
    linkHome: "tradutor de Morse"
  },
  ru: {
    title: "Убрать вокал из песни - Разделить голос и музыку бесплатно",
    description:
      "Бесплатно убрать вокал из песни с помощью ИИ. Загрузите файл и получите минусовку без вокала и отдельно вокал. MP3, WAV, FLAC, OGG.",
    h1: "Убрать вокал из песни - Удалить голос из песни онлайн",
    keywords: [
      "убрать вокал из песни",
      "удалить голос из песни",
      "разделить вокал и музыку",
      "минусовка онлайн",
      "караоке онлайн бесплатно"
    ],
    summaryTitle: "Что такое удаление вокала?",
    summaryBody:
      "Инструмент удаления вокала на Morse Code World использует ИИ (Demucs), чтобы разделить любую песню на минусовку без вокала и отдельную дорожку с вокалом. Загрузите MP3, WAV, FLAC или OGG до 15 МБ и 10 минут — и скачайте оба результата. Бесплатно, без регистрации.",
    breadcrumbHome: "Переводчик Морзе",
    breadcrumbTool: "Убрать вокал из песни",
    aboutHeading: "Как работает удаление вокала",
    aboutP1:
      "Этот инструмент использует Demucs — модель ИИ для разделения музыкальных источников — чтобы проанализировать песню и отделить человеческий голос от инструментального сопровождения. Загрузите песню, и ИИ прослушивает весь микс, чтобы восстановить две новые дорожки: одну только с инструментальной частью (барабаны, бас и остальное) и одну только с вокалом.",
    aboutP2:
      "Разделение выполняется на GPU в облаке и обычно занимает от 1 до 3 минут в зависимости от длины песни. Первый запрос после периода неактивности может занять немного больше времени, пока модель «прогревается» — это нормально и случается редко.",
    limitsHeading: "Ограничения файлов",
    limitsP:
      "Чтобы обработка оставалась быстрой и доступной, загрузка ограничена 15 МБ и 10 минутами аудио. Поддерживаемые форматы — MP3, WAV, FLAC и OGG. Для более длинных треков сначала обрежьте файл и загрузите нужный отрывок.",
    stepsHeading: "Как это использовать",
    steps: [
      "Перетащите песню или выберите файл (MP3, WAV, FLAC, OGG, макс. 15 МБ / 10 мин).",
      "Файл загружается напрямую и безопасно, затем автоматически начинается разделение с помощью ИИ.",
      "Подождите 1-3 минуты, пока песня разделяется на инструментал и вокал.",
      "Прослушайте обе дорожки во встроенных плеерах.",
      "Скачайте инструментал, вокал или оба варианта."
    ],
    faqHeading: "Часто задаваемые вопросы",
    faq: [
      { q: "Удаление вокала бесплатно?", a: "Да, это бесплатно и не требует регистрации." },
      {
        q: "Какие форматы файлов поддерживаются?",
        a: "MP3, WAV, FLAC и OGG. Файлы должны быть не более 15 МБ и не длиннее 10 минут."
      },
      {
        q: "Сколько времени занимает разделение?",
        a: "Обычно от 1 до 3 минут, в зависимости от длины песни. Первый запрос после периода неактивности может занять немного больше времени из-за перезапуска модели."
      },
      {
        q: "Можно ли сделать караоке-дорожку с помощью этого инструмента?",
        a: "Да. Скачайте инструментальную дорожку (без вокала) и используйте её как минусовку для пения."
      },
      {
        q: "Сохраняется ли мой звук где-нибудь?",
        a: "Этот инструмент не хранит данные — нет базы данных или системы аккаунтов. Загруженный звук и результаты обрабатываются только столько времени, сколько нужно для выполнения запроса."
      },
      {
        q: "Почему мой файл был отклонён?",
        a: "Файлы больше 15 МБ или длиннее 10 минут отклоняются, чтобы обработка оставалась быстрой для всех. Обрежьте аудио и попробуйте снова."
      }
    ],
    linkHome: "переводчик Морзе"
  },
  ja: {
    title: "ボーカル除去 - 無料AIボーカルリムーバーで伴奏と声を分離",
    description:
      "無料のAIボーカル除去ツール。楽曲をアップロードして、ボーカルなしの伴奏トラックと分離したボーカルトラックに分けます。MP3、WAV、FLAC、OGG対応。",
    h1: "ボーカル除去 - 曲を伴奏とボーカルに分離するボーカルリムーバー",
    keywords: [
      "ボーカル除去",
      "ボーカルリムーバー",
      "伴奏抽出",
      "カラオケ作成 無料",
      "AI 音源分離"
    ],
    summaryTitle: "ボーカル除去とは？",
    summaryBody:
      "Morse Code WorldのボーカルリムーバーはAI（Demucs）を使い、楽曲をボーカルなしの伴奏トラックと、分離したボーカルトラックの2つに分けます。15MB・10分までのMP3、WAV、FLAC、OGGファイルをアップロードすれば、両方の結果を無料でダウンロードできます。アカウント登録は不要です。",
    breadcrumbHome: "モールス翻訳機",
    breadcrumbTool: "ボーカル除去",
    aboutHeading: "ボーカル除去の仕組み",
    aboutP1:
      "このツールはDemucsという音楽音源分離のAIモデルを使い、楽曲を分析して人の声を伴奏から分離します。楽曲をアップロードすると、AIが全体のミックスを解析し、伴奏のみ（ドラム、ベースなど）のトラックとボーカルのみのトラックという2つの新しいトラックを再構築します。",
    aboutP2:
      "分離処理はクラウド上のGPUで実行され、楽曲の長さに応じて通常1〜3分ほどかかります。しばらく使われていない状態からの最初のリクエストは、モデルのウォームアップのため少し時間がかかることがありますが、これは正常な動作で、まれにしか発生しません。",
    limitsHeading: "ファイルの制限",
    limitsP:
      "処理を高速かつ低コストに保つため、アップロードは15MB、音声10分までに制限されています。対応形式はMP3、WAV、FLAC、OGGです。もっと長い曲の場合は、先にファイルをトリミングして処理したい部分をアップロードしてください。",
    stepsHeading: "使い方",
    steps: [
      "楽曲をドラッグ&ドロップするか、ファイルを選択します（MP3、WAV、FLAC、OGG、最大15MB / 10分）。",
      "ファイルが直接安全にアップロードされ、その後AIによる分離が自動的に開始されます。",
      "楽曲が伴奏とボーカルに分離されるまで1〜3分ほどお待ちください。",
      "内蔵プレーヤーで両方のトラックを再生して確認できます。",
      "伴奏、ボーカル、またはその両方をダウンロードします。"
    ],
    faqHeading: "よくある質問",
    faq: [
      { q: "ボーカル除去は無料ですか？", a: "はい、無料で利用でき、アカウント登録は不要です。" },
      {
        q: "対応しているファイル形式は？",
        a: "MP3、WAV、FLAC、OGGに対応しています。ファイルは15MB以下、10分以下である必要があります。"
      },
      {
        q: "分離にはどれくらい時間がかかりますか？",
        a: "楽曲の長さによりますが、通常1〜3分です。しばらく使われていない後の最初のリクエストは、モデルの起動のため少し時間がかかることがあります。"
      },
      {
        q: "これでカラオケトラックを作れますか？",
        a: "はい。伴奏（ボーカルなし）トラックをダウンロードして、歌の練習用の伴奏として使用できます。"
      },
      {
        q: "音声データはどこかに保存されますか？",
        a: "このツールはステートレスです。データベースやアカウントシステムはありません。アップロードされた音声と結果は、リクエストの処理に必要な時間だけ扱われます。"
      },
      {
        q: "なぜファイルが拒否されたのですか？",
        a: "15MBまたは10分を超えるファイルは、すべてのユーザーの処理速度を保つために拒否されます。音声をトリミングしてから再度お試しください。"
      }
    ],
    linkHome: "モールス翻訳機"
  },
  ko: {
    title: "보컬 제거 - MR 추출 무료 AI 보컬 리무버",
    description:
      "무료 AI 보컬 제거 도구. 노래를 업로드하면 보컬이 빠진 MR(반주)과 분리된 보컬 트랙으로 나눠줍니다. MP3, WAV, FLAC, OGG 지원.",
    h1: "보컬 제거 - 노래에서 MR 추출하고 보컬 분리하기",
    keywords: [
      "보컬 제거",
      "MR 추출",
      "보컬 분리",
      "반주 추출 무료",
      "온라인 노래방 반주 만들기"
    ],
    summaryTitle: "보컬 제거란?",
    summaryBody:
      "Morse Code World의 보컬 제거 도구는 AI(Demucs)를 사용해 노래를 보컬이 없는 MR(반주) 트랙과 분리된 보컬 트랙으로 나눕니다. 15MB, 10분 이하의 MP3, WAV, FLAC, OGG 파일을 업로드하면 두 결과를 모두 무료로 다운로드할 수 있습니다. 계정이 필요 없습니다.",
    breadcrumbHome: "모스 번역기",
    breadcrumbTool: "보컬 제거",
    aboutHeading: "보컬 제거 작동 방식",
    aboutP1:
      "이 도구는 음악 음원 분리 AI 모델인 Demucs를 사용해 노래를 분석하고 사람의 목소리를 반주에서 분리합니다. 노래를 업로드하면 AI가 전체 믹스를 분석해 반주만 있는 트랙(드럼, 베이스 등)과 보컬만 있는 트랙, 이렇게 두 개의 새로운 트랙을 만들어냅니다.",
    aboutP2:
      "분리 작업은 클라우드의 GPU에서 실행되며, 노래 길이에 따라 보통 1~3분이 걸립니다. 한동안 사용되지 않은 후의 첫 요청은 모델이 다시 준비되는 동안 조금 더 걸릴 수 있는데, 이는 정상적인 현상이며 자주 발생하지 않습니다.",
    limitsHeading: "파일 제한",
    limitsP:
      "빠르고 합리적인 처리를 위해 업로드는 15MB, 오디오 길이는 10분까지로 제한됩니다. 지원 형식은 MP3, WAV, FLAC, OGG입니다. 더 긴 트랙은 먼저 파일을 잘라서 처리하고 싶은 부분만 업로드하세요.",
    stepsHeading: "사용 방법",
    steps: [
      "노래를 드래그 앤 드롭하거나 파일을 선택하세요 (MP3, WAV, FLAC, OGG, 최대 15MB / 10분).",
      "파일이 직접 안전하게 업로드된 후 AI 분리가 자동으로 시작됩니다.",
      "노래가 반주와 보컬로 분리되는 동안 1~3분 정도 기다려 주세요.",
      "내장 플레이어에서 두 트랙을 모두 미리 들어볼 수 있습니다.",
      "반주, 보컬 또는 둘 다 다운로드하세요."
    ],
    faqHeading: "자주 묻는 질문",
    faq: [
      { q: "보컬 제거는 무료인가요?", a: "네, 무료이며 계정이 필요하지 않습니다." },
      {
        q: "어떤 파일 형식을 지원하나요?",
        a: "MP3, WAV, FLAC, OGG를 지원합니다. 파일은 15MB 이하, 10분 이하여야 합니다."
      },
      {
        q: "분리에 얼마나 걸리나요?",
        a: "보통 노래 길이에 따라 1~3분이 걸립니다. 한동안 사용되지 않은 후의 첫 요청은 모델이 다시 시작되는 동안 조금 더 걸릴 수 있습니다."
      },
      {
        q: "이 도구로 노래방(MR) 트랙을 만들 수 있나요?",
        a: "네. 반주(MR) 트랙을 다운로드해서 노래 연습용 반주로 사용할 수 있습니다."
      },
      {
        q: "제 오디오가 어딘가에 저장되나요?",
        a: "이 도구는 상태를 저장하지 않습니다. 데이터베이스나 계정 시스템이 없습니다. 업로드된 오디오와 결과는 요청을 처리하는 데 필요한 시간 동안만 처리됩니다."
      },
      {
        q: "왜 제 파일이 거부되었나요?",
        a: "15MB 또는 10분을 초과하는 파일은 모든 사용자를 위해 빠른 처리를 유지하기 위해 거부됩니다. 오디오를 잘라서 다시 시도해 주세요."
      }
    ],
    linkHome: "모스 번역기"
  },
  zh: {
    title: "人聲分離 - 免費線上去人聲、提取伴奏工具",
    description:
      "免費 AI 人聲分離工具。上傳歌曲即可分離成去人聲的伴奏軌和獨立的人聲軌。支援 MP3、WAV、FLAC、OGG。",
    h1: "人聲分離 - 去人聲、提取伴奏線上工具",
    keywords: [
      "人聲分離",
      "去人聲",
      "提取伴奏",
      "AI 人聲分離",
      "線上卡拉OK製作"
    ],
    summaryTitle: "什麼是人聲分離？",
    summaryBody:
      "Morse Code World 的人聲分離工具使用 AI（Demucs）技術，將任何歌曲分成兩軌：去人聲的伴奏軌，以及獨立的人聲軌。上傳 15MB、10 分鐘以內的 MP3、WAV、FLAC 或 OGG 檔案，即可免費下載兩個結果，無需註冊帳號。",
    breadcrumbHome: "摩斯翻譯器",
    breadcrumbTool: "人聲分離",
    aboutHeading: "人聲分離的運作方式",
    aboutP1:
      "此工具使用 Demucs（一種音樂音源分離 AI 模型）分析歌曲，將人聲從伴奏中分離出來。上傳歌曲後，AI 會分析完整混音，重建出兩條新的音軌：一條只有伴奏（鼓、貝斯等），另一條只有人聲。",
    aboutP2:
      "分離運算在雲端 GPU 上執行，通常依歌曲長度需要 1 到 3 分鐘。閒置一段時間後的第一次請求，因模型需要重新啟動，可能會稍微久一點，這是正常現象，且不常發生。",
    limitsHeading: "檔案限制",
    limitsP:
      "為了保持處理速度快且成本合理，上傳檔案限制為 15MB、音訊長度 10 分鐘以內。支援格式為 MP3、WAV、FLAC 和 OGG。若歌曲較長，請先剪輯檔案，只上傳需要處理的片段。",
    stepsHeading: "使用方法",
    steps: [
      "拖曳歌曲，或選擇檔案（MP3、WAV、FLAC、OGG，最大 15MB / 10 分鐘）。",
      "檔案會直接安全上傳，接著自動開始 AI 分離。",
      "等待 1 到 3 分鐘，歌曲會被分離成伴奏和人聲。",
      "在內建播放器中預覽兩條音軌。",
      "下載伴奏、人聲，或兩者都下載。"
    ],
    faqHeading: "常見問題",
    faq: [
      { q: "人聲分離工具是免費的嗎？", a: "是的，免費使用，無需註冊帳號。" },
      {
        q: "支援哪些檔案格式？",
        a: "支援 MP3、WAV、FLAC 和 OGG。檔案大小需在 15MB 以內，長度在 10 分鐘以內。"
      },
      {
        q: "分離需要多久時間？",
        a: "通常需要 1 到 3 分鐘，視歌曲長度而定。閒置一段時間後的第一次請求，因模型重新啟動，可能會稍微久一點。"
      },
      {
        q: "可以用這個工具製作卡拉OK伴奏嗎？",
        a: "可以。下載伴奏（去人聲）音軌，即可作為練唱時的伴奏使用。"
      },
      {
        q: "我的音訊會被儲存嗎？",
        a: "此工具不會保留任何狀態，沒有資料庫或帳號系統。上傳的音訊和結果只會在處理您的請求期間被使用。"
      },
      {
        q: "為什麼我的檔案被拒絕？",
        a: "超過 15MB 或 10 分鐘的檔案會被拒絕，以維持所有人的處理速度。請先剪輯音訊後再試一次。"
      }
    ],
    linkHome: "摩斯翻譯器"
  },
  tr: {
    title: "Şarkıdan Vokal Silme - Ücretsiz Vokal Ayırma Araci",
    description:
      "Ücretsiz yapay zeka ile şarkıdan vokal silme. Şarkıyı yükleyin, vokalsiz enstrümantal ve ayrı vokal parçası olarak ayırın. MP3, WAV, FLAC, OGG.",
    h1: "Şarkıdan Vokal Silme - Vokal Ayırma Araci",
    keywords: [
      "şarkıdan vokal silme",
      "vokal ayırma",
      "enstrümantal çıkarma",
      "ücretsiz karaoke yapma",
      "yapay zeka vokal silme"
    ],
    summaryTitle: "Vokal ayırma nedir?",
    summaryBody:
      "Morse Code World'ün vokal ayırma araci, herhangi bir şarkıyı yapay zeka (Demucs) kullanarak ikiye böler: vokalsiz enstrümantal parça ve ayrı vokal parçası. 15 MB ve 10 dakikaya kadar MP3, WAV, FLAC veya OGG dosyası yükleyin, her iki sonucu da ücretsiz indirin. Hesap gerekmez.",
    breadcrumbHome: "Mors çevirici",
    breadcrumbTool: "Vokal Ayırma",
    aboutHeading: "Vokal ayırma nasıl çalışır",
    aboutP1:
      "Bu araç, bir şarkıyı analiz ederek insan sesini enstrümantal bölümden ayırmak için müzik kaynağı ayırma yapay zeka modeli olan Demucs'u kullanır. Bir şarkı yükleyin, yapay zeka tüm miksi dinleyerek iki yeni parça oluşturur: sadece enstrümantal (davul, bas ve diğerleri) ve sadece vokal içeren bir parça.",
    aboutP2:
      "Ayırma işlemi bulutta bir GPU üzerinde çalışır ve şarkının uzunluğuna bağlı olarak genellikle 1-3 dakika sürer. Bir süre kullanılmadıktan sonraki ilk istek, model yeniden ısınırken biraz daha uzun sürebilir - bu normaldir ve nadiren olur.",
    limitsHeading: "Dosya sınırları",
    limitsP:
      "İşlemi hızlı ve ekonomik tutmak için yüklemeler 15 MB ve 10 dakika ses ile sınırlıdır. Desteklenen formatlar MP3, WAV, FLAC ve OGG'dir. Daha uzun parçalar için önce dosyayı kırpın ve işlemek istediğiniz bölümü yükleyin.",
    stepsHeading: "Nasıl kullanılır",
    steps: [
      "Bir şarkıyı sürükleyip bırakın veya bir dosya seçin (MP3, WAV, FLAC, OGG, maks. 15 MB / 10 dk).",
      "Dosya doğrudan ve güvenli bir şekilde yüklenir, ardından yapay zeka ile ayırma otomatik olarak başlar.",
      "Şarkı enstrümantal ve vokale ayrılırken 1-3 dakika bekleyin.",
      "Her iki parçayı da yerleşik oynatıcılarda önizleyin.",
      "Enstrümantali, vokali veya her ikisini indirin."
    ],
    faqHeading: "Sıkça sorulan sorular",
    faq: [
      { q: "Vokal ayırma ücretsiz mi?", a: "Evet, ücretsizdir ve hesap gerektirmez." },
      {
        q: "Hangi dosya formatları destekleniyor?",
        a: "MP3, WAV, FLAC ve OGG. Dosyalar 15 MB veya daha küçük ve 10 dakika veya daha kısa olmalıdır."
      },
      {
        q: "Ayırma ne kadar sürer?",
        a: "Şarkının uzunluğuna bağlı olarak genellikle 1-3 dakika sürer. Bir süre kullanılmadıktan sonraki ilk istek, model yeniden başladığı için biraz daha uzun sürebilir."
      },
      {
        q: "Bununla karaoke parçaları yapabilir miyim?",
        a: "Evet. Enstrümantal (vokalsiz) parçayı indirin ve şarkı söylemek için eşlik parçası olarak kullanın."
      },
      {
        q: "Sesim bir yerde saklanıyor mu?",
        a: "Bu araç durum tutmaz - veritabanı veya hesap sistemi yoktur. Yüklenen ses ve sonuçlar yalnızca isteğinizi işlemek için gereken süre boyunca işlenir."
      },
      {
        q: "Dosyam neden reddedildi?",
        a: "15 MB veya 10 dakikayı aşan dosyalar, herkes için işlemi hızlı tutmak amacıyla reddedilir. Sesinizi kırpın ve tekrar deneyin."
      }
    ],
    linkHome: "Mors çevirici"
  },
  ar: {
    title: "إزالة الصوت من الأغنية - فصل الموسيقى عن الصوت مجانا",
    description:
      "أداة مجانية بالذكاء الاصطناعي لإزالة الصوت من الأغنية. حمّل الأغنية واحصل على مقطع موسيقي بدون صوت وصوت منفصل. تدعم MP3 و WAV و FLAC و OGG.",
    h1: "إزالة الصوت من الأغنية - فصل الموسيقى عن الصوت",
    keywords: [
      "إزالة الصوت من الأغنية",
      "فصل الموسيقى عن الصوت",
      "استخراج الموسيقى بدون صوت",
      "كاريوكي مجاني اونلاين",
      "إزالة الصوت بالذكاء الاصطناعي"
    ],
    summaryTitle: "ما هي إزالة الصوت من الأغنية؟",
    summaryBody:
      "تستخدم أداة إزالة الصوت في Morse Code World الذكاء الاصطناعي (Demucs) لفصل أي أغنية إلى مقطعين: موسيقى بدون صوت، وصوت منفصل عن الموسيقى. حمّل ملف MP3 أو WAV أو FLAC أو OGG بحجم أقصى 15 ميجابايت ومدة 10 دقائق، وحمّل النتيجتين مجانا بدون حساب.",
    breadcrumbTool: "إزالة الصوت من الأغنية",
    aboutHeading: "كيف تعمل إزالة الصوت",
    linkHome: "مترجم مورس"
  },
  fr: {
    title: "Supprimer la voix d'une chanson - Extracteur vocal IA gratuit",
    description:
      "Extracteur vocal IA gratuit. Televersez une chanson et separez-la en piste instrumentale (sans voix) et voix isolee. Formats MP3, WAV, FLAC, OGG.",
    h1: "Supprimer la voix d'une chanson - Separer voix et instrumental en ligne",
    keywords: [
      "supprimer la voix d'une chanson",
      "separateur de voix",
      "extracteur de voix ia",
      "creer un instrumental en ligne",
      "isoler la voix d'une chanson",
      "karaoke en ligne gratuit"
    ],
    summaryTitle: "Qu'est-ce que l'extracteur de voix ?",
    summaryBody:
      "L'extracteur de voix de Morse Code World utilise l'IA (separation de sources Demucs) pour diviser n'importe quelle chanson en deux pistes : une instrumentale sans voix et une piste vocale isolee. Televersez un fichier MP3, WAV, FLAC ou OGG jusqu'a 15 Mo et 10 minutes, puis previsualisez et telechargez les deux resultats. Gratuit, sans compte.",
    breadcrumbHome: "Traducteur Morse",
    breadcrumbTool: "Extracteur de voix",
    aboutHeading: "Comment fonctionne l'extracteur de voix",
    aboutP1:
      "Cet outil utilise Demucs, un modele d'IA de separation de sources musicales, pour analyser une chanson et separer la voix humaine de l'accompagnement instrumental. Televersez une chanson, et l'IA ecoute le mix complet pour reconstruire deux nouvelles pistes : une avec uniquement l'instrumental (batterie, basse et le reste) et une avec uniquement la voix.",
    aboutP2:
      "La separation s'execute sur un GPU dans le cloud et prend generalement 1 a 3 minutes selon la duree de la chanson. La toute premiere requete apres une periode d'inactivite peut prendre un peu plus de temps pendant que le modele redemarre - c'est normal et rare.",
    limitsHeading: "Limites des fichiers",
    limitsP:
      "Pour garder un traitement rapide et abordable, les televersements sont limites a 15 Mo et 10 minutes d'audio. Les formats pris en charge sont MP3, WAV, FLAC et OGG. Pour les pistes plus longues, decoupez d'abord le fichier et televersez la section a traiter.",
    stepsHeading: "Comment l'utiliser",
    steps: [
      "Glissez-deposez une chanson, ou choisissez un fichier (MP3, WAV, FLAC, OGG, max 15 Mo / 10 min).",
      "Le fichier est televerse directement et en toute securite, puis la separation par IA demarre automatiquement.",
      "Patientez 1 a 3 minutes pendant que la chanson est divisee en instrumental et voix.",
      "Previsualisez les deux pistes dans les lecteurs integres.",
      "Telechargez l'instrumental, la voix, ou les deux."
    ],
    faqHeading: "Questions frequentes",
    faq: [
      { q: "L'extracteur de voix est-il gratuit ?", a: "Oui, il est gratuit et ne necessite aucun compte." },
      {
        q: "Quels formats de fichiers sont pris en charge ?",
        a: "MP3, WAV, FLAC et OGG. Les fichiers doivent faire 15 Mo maximum et durer 10 minutes maximum."
      },
      {
        q: "Combien de temps dure la separation ?",
        a: "Generalement 1 a 3 minutes, selon la duree de la chanson. La premiere requete apres un moment d'inactivite peut prendre un peu plus de temps a cause du redemarrage du modele."
      },
      {
        q: "Puis-je creer des pistes de karaoke avec cet outil ?",
        a: "Oui. Telechargez la piste instrumentale (sans voix) et utilisez-la comme accompagnement pour chanter."
      },
      {
        q: "Mon audio est-il stocke quelque part ?",
        a: "Cet outil est sans etat - il n'y a ni base de donnees ni systeme de compte. L'audio televerse et les resultats ne sont traites que le temps necessaire pour traiter votre demande."
      },
      {
        q: "Pourquoi mon fichier a-t-il ete rejete ?",
        a: "Les fichiers de plus de 15 Mo ou 10 minutes sont rejetes pour garder un traitement rapide pour tous. Decoupez votre audio et reessayez."
      }
    ],
    linkHome: "traducteur Morse"
  },
  it: {
    title: "Rimuovere la voce da una canzone - Estrattore vocale IA gratuito",
    description:
      "Estrattore vocale IA gratuito. Carica una canzone e separala in traccia strumentale (senza voce) e voce isolata. MP3, WAV, FLAC, OGG.",
    h1: "Rimuovere la voce da una canzone - Separare voce e strumentale online",
    keywords: [
      "rimuovere la voce da una canzone",
      "separatore voce musica",
      "estrattore vocale ia",
      "creare una base strumentale online",
      "isolare la voce di una canzone",
      "karaoke online gratis"
    ],
    summaryTitle: "Cos'e l'estrattore vocale?",
    summaryBody:
      "L'estrattore vocale di Morse Code World usa l'IA (separazione delle sorgenti Demucs) per dividere qualsiasi canzone in due tracce: una strumentale senza voce e una traccia vocale isolata. Carica un file MP3, WAV, FLAC o OGG fino a 15 MB e 10 minuti, poi ascolta e scarica entrambi i risultati. Gratuito, senza account.",
    breadcrumbHome: "Traduttore Morse",
    breadcrumbTool: "Estrattore vocale",
    aboutHeading: "Come funziona l'estrattore vocale",
    aboutP1:
      "Questo strumento usa Demucs, un modello di IA per la separazione delle fonti musicali, per analizzare una canzone e separare la voce umana dalla base strumentale. Carica una canzone e l'IA analizza il mix completo per ricostruire due nuove tracce: una con solo la base strumentale (batteria, basso e il resto) e una con solo la voce.",
    aboutP2:
      "La separazione viene eseguita su una GPU nel cloud e richiede in genere da 1 a 3 minuti in base alla durata della canzone. La prima richiesta dopo un periodo di inattivita potrebbe richiedere un po' piu di tempo mentre il modello si riattiva: e normale e capita di rado.",
    limitsHeading: "Limiti dei file",
    limitsP:
      "Per mantenere l'elaborazione veloce ed economica, i caricamenti sono limitati a 15 MB e 10 minuti di audio. I formati supportati sono MP3, WAV, FLAC e OGG. Per tracce piu lunghe, taglia prima il file e carica solo la sezione da elaborare.",
    stepsHeading: "Come si usa",
    steps: [
      "Trascina una canzone o scegli un file (MP3, WAV, FLAC, OGG, massimo 15 MB / 10 min).",
      "Il file viene caricato direttamente e in modo sicuro, poi la separazione IA parte automaticamente.",
      "Attendi 1-3 minuti mentre la canzone viene divisa in strumentale e voce.",
      "Ascolta entrambe le tracce nei lettori integrati.",
      "Scarica la base strumentale, la voce, o entrambe."
    ],
    faqHeading: "Domande frequenti",
    faq: [
      { q: "L'estrattore vocale e gratuito?", a: "Si, e gratuito e non richiede alcun account." },
      {
        q: "Quali formati di file sono supportati?",
        a: "MP3, WAV, FLAC e OGG. I file devono essere massimo 15 MB e durare massimo 10 minuti."
      },
      {
        q: "Quanto tempo richiede la separazione?",
        a: "In genere da 1 a 3 minuti, in base alla durata della canzone. La prima richiesta dopo un po' di inattivita puo richiedere piu tempo per il riavvio del modello."
      },
      {
        q: "Posso creare basi karaoke con questo strumento?",
        a: "Si. Scarica la traccia strumentale (senza voce) e usala come base per cantare."
      },
      {
        q: "Il mio audio viene memorizzato da qualche parte?",
        a: "Questo strumento non conserva dati: non c'e alcun database o sistema di account. L'audio caricato e i risultati vengono gestiti solo per il tempo necessario a elaborare la richiesta."
      },
      {
        q: "Perche il mio file e stato rifiutato?",
        a: "I file oltre i 15 MB o 10 minuti vengono rifiutati per mantenere l'elaborazione veloce per tutti. Taglia il tuo audio e riprova."
      }
    ],
    linkHome: "traduttore Morse"
  },
  vi: {
    title: "Tách lời khỏi bài hát - Công cụ tách giọng AI miễn phí",
    description:
      "Công cụ tách giọng AI miễn phí. Tải bài hát lên và tách thành nhạc nền (không lời) và giọng hát riêng. Hỗ trợ MP3, WAV, FLAC, OGG.",
    h1: "Tách lời khỏi bài hát - Tách nhạc và lời trực tuyến",
    keywords: [
      "tách lời khỏi nhạc",
      "xóa giọng hát khỏi bài hát",
      "tách nhạc và lời",
      "tạo nhạc nền karaoke",
      "tách giọng hát bằng ai",
      "làm karaoke online miễn phí"
    ],
    summaryTitle: "Công cụ tách giọng là gì?",
    summaryBody:
      "Công cụ tách giọng của Morse Code World dùng AI (tách nguồn âm thanh Demucs) để chia bất kỳ bài hát nào thành hai file: một bản nhạc nền không lời và một bản chỉ có giọng hát. Tải lên file MP3, WAV, FLAC hoặc OGG tối đa 15 MB và 10 phút, sau đó nghe thử và tải cả hai kết quả. Miễn phí, không cần tài khoản.",
    breadcrumbHome: "Bộ dịch mã Morse",
    breadcrumbTool: "Tách giọng khỏi nhạc",
    aboutHeading: "Công cụ tách giọng hoạt động như thế nào",
    aboutP1:
      "Công cụ này dùng Demucs, một mô hình AI tách nguồn âm nhạc, để phân tích một bài hát và tách giọng hát của con người ra khỏi phần nhạc đệm. Tải lên một bài hát, AI sẽ nghe toàn bộ bản mix và dựng lại hai file mới: một chỉ có nhạc nền (trống, bass và phần còn lại) và một chỉ có giọng hát.",
    aboutP2:
      "Quá trình tách chạy trên GPU trên đám mây và thường mất 1 đến 3 phút tùy theo độ dài bài hát. Yêu cầu đầu tiên sau một thời gian không hoạt động có thể mất lâu hơn một chút do mô hình cần khởi động lại - đây là điều bình thường và ít khi xảy ra.",
    limitsHeading: "Giới hạn file",
    limitsP:
      "Để giữ tốc độ xử lý nhanh và chi phí hợp lý, file tải lên bị giới hạn ở 15 MB và 10 phút âm thanh. Các định dạng được hỗ trợ là MP3, WAV, FLAC và OGG. Với bài hát dài hơn, hãy cắt file trước và tải lên phần bạn muốn xử lý.",
    stepsHeading: "Cách sử dụng",
    steps: [
      "Kéo và thả một bài hát, hoặc chọn file (MP3, WAV, FLAC, OGG, tối đa 15 MB / 10 phút).",
      "File được tải lên trực tiếp và an toàn, sau đó quá trình tách bằng AI tự động bắt đầu.",
      "Chờ 1-3 phút trong khi bài hát được tách thành nhạc nền và giọng hát.",
      "Nghe thử cả hai bản trong trình phát tích hợp.",
      "Tải xuống nhạc nền, giọng hát, hoặc cả hai."
    ],
    faqHeading: "Câu hỏi thường gặp",
    faq: [
      { q: "Công cụ tách giọng có miễn phí không?", a: "Có, công cụ này miễn phí và không cần tài khoản." },
      {
        q: "Định dạng file nào được hỗ trợ?",
        a: "MP3, WAV, FLAC và OGG. File phải nhỏ hơn 15 MB và ngắn hơn 10 phút."
      },
      {
        q: "Quá trình tách mất bao lâu?",
        a: "Thường mất 1 đến 3 phút, tùy theo độ dài bài hát. Yêu cầu đầu tiên sau một thời gian không hoạt động có thể mất lâu hơn một chút do mô hình cần khởi động lại."
      },
      {
        q: "Tôi có thể tạo nhạc nền karaoke bằng công cụ này không?",
        a: "Có. Hãy tải xuống bản nhạc nền (không lời) và dùng nó làm nhạc đệm để hát theo."
      },
      {
        q: "Âm thanh của tôi có được lưu trữ ở đâu không?",
        a: "Công cụ này không lưu trạng thái - không có cơ sở dữ liệu hay hệ thống tài khoản. Âm thanh tải lên và kết quả chỉ được xử lý trong thời gian cần thiết để xử lý yêu cầu của bạn."
      },
      {
        q: "Vì sao file của tôi bị từ chối?",
        a: "File lớn hơn 15 MB hoặc dài hơn 10 phút bị từ chối để giữ tốc độ xử lý nhanh cho mọi người. Hãy cắt file âm thanh của bạn và thử lại."
      }
    ],
    linkHome: "bộ dịch mã Morse"
  },
  th: {
    title: "ลบเสียงร้องออกจากเพลง - เครื่องมือแยกเสียงร้อง AI ฟรี",
    description:
      "เครื่องมือแยกเสียงร้องด้วย AI ฟรี อัปโหลดเพลงแล้วแยกเป็นแทร็กดนตรีล้วน (ไม่มีเสียงร้อง) และแทร็กเสียงร้องเดี่ยว รองรับ MP3, WAV, FLAC, OGG",
    h1: "ลบเสียงร้องออกจากเพลง - แยกเสียงร้องและดนตรีออนไลน์",
    keywords: [
      "ลบเสียงร้องออกจากเพลง",
      "แยกเสียงร้องออกจากดนตรี",
      "ทำแบ็คกิ้งแทร็ก",
      "แยกเสียงร้องด้วยเอไอ",
      "ทำคาราโอเกะออนไลน์ฟรี",
      "ดึงดนตรีออกจากเพลง"
    ],
    summaryTitle: "เครื่องมือแยกเสียงร้องคืออะไร?",
    summaryBody:
      "เครื่องมือแยกเสียงร้องของ Morse Code World ใช้ AI (การแยกแหล่งเสียงด้วย Demucs) เพื่อแยกเพลงใดก็ได้ออกเป็นสองแทร็ก คือแทร็กดนตรีล้วนที่ไม่มีเสียงร้อง และแทร็กเสียงร้องเดี่ยว อัปโหลดไฟล์ MP3, WAV, FLAC หรือ OGG ขนาดไม่เกิน 15 MB และยาวไม่เกิน 10 นาที จากนั้นฟังตัวอย่างและดาวน์โหลดผลลัพธ์ทั้งสอง ใช้งานฟรี ไม่ต้องสมัครสมาชิก",
    breadcrumbHome: "ตัวแปลรหัสมอร์ส",
    breadcrumbTool: "แยกเสียงร้องออกจากเพลง",
    aboutHeading: "เครื่องมือแยกเสียงร้องทำงานอย่างไร",
    aboutP1:
      "เครื่องมือนี้ใช้ Demucs ซึ่งเป็นโมเดล AI สำหรับแยกแหล่งเสียงดนตรี เพื่อวิเคราะห์เพลงและแยกเสียงร้องของมนุษย์ออกจากดนตรีประกอบ อัปโหลดเพลง แล้ว AI จะฟังมิกซ์ทั้งหมดและสร้างแทร็กใหม่สองแทร็ก คือแทร็กที่มีเฉพาะดนตรี (กลอง เบส และอื่น ๆ) และแทร็กที่มีเฉพาะเสียงร้อง",
    aboutP2:
      "การแยกเสียงทำงานบน GPU บนคลาวด์ และมักใช้เวลา 1 ถึง 3 นาที ขึ้นอยู่กับความยาวของเพลง คำขอแรกหลังจากไม่มีการใช้งานมาสักพักอาจใช้เวลานานขึ้นเล็กน้อยเนื่องจากโมเดลต้องเริ่มทำงานใหม่ ซึ่งเป็นเรื่องปกติและเกิดขึ้นไม่บ่อย",
    limitsHeading: "ข้อจำกัดของไฟล์",
    limitsP:
      "เพื่อให้การประมวลผลรวดเร็วและคุ้มค่า ไฟล์ที่อัปโหลดถูกจำกัดไว้ที่ 15 MB และความยาวเสียง 10 นาที รูปแบบที่รองรับคือ MP3, WAV, FLAC และ OGG หากเพลงยาวกว่านี้ ให้ตัดไฟล์ก่อนแล้วอัปโหลดเฉพาะส่วนที่ต้องการประมวลผล",
    stepsHeading: "วิธีใช้งาน",
    steps: [
      "ลากและวางเพลง หรือเลือกไฟล์ (MP3, WAV, FLAC, OGG ขนาดไม่เกิน 15 MB / 10 นาที)",
      "ไฟล์จะถูกอัปโหลดโดยตรงและปลอดภัย จากนั้นการแยกเสียงด้วย AI จะเริ่มโดยอัตโนมัติ",
      "รอ 1-3 นาทีระหว่างที่เพลงถูกแยกเป็นดนตรีและเสียงร้อง",
      "ฟังตัวอย่างทั้งสองแทร็กในเครื่องเล่นที่มีให้ในตัว",
      "ดาวน์โหลดแทร็กดนตรี เสียงร้อง หรือทั้งสองอย่าง"
    ],
    faqHeading: "คำถามที่พบบ่อย",
    faq: [
      { q: "เครื่องมือแยกเสียงร้องนี้ฟรีหรือไม่?", a: "ใช่ ใช้งานได้ฟรีและไม่ต้องสมัครสมาชิก" },
      {
        q: "รองรับไฟล์รูปแบบใดบ้าง?",
        a: "MP3, WAV, FLAC และ OGG ไฟล์ต้องมีขนาดไม่เกิน 15 MB และยาวไม่เกิน 10 นาที"
      },
      {
        q: "การแยกเสียงใช้เวลานานเท่าไร?",
        a: "ปกติใช้เวลา 1 ถึง 3 นาที ขึ้นอยู่กับความยาวของเพลง คำขอแรกหลังจากไม่มีการใช้งานมาสักพักอาจใช้เวลานานขึ้นเล็กน้อยเนื่องจากโมเดลต้องเริ่มทำงานใหม่"
      },
      {
        q: "ใช้เครื่องมือนี้ทำแทร็กคาราโอเกะได้ไหม?",
        a: "ได้ ดาวน์โหลดแทร็กดนตรี (ไม่มีเสียงร้อง) แล้วใช้เป็นดนตรีประกอบสำหรับร้องตาม"
      },
      {
        q: "ไฟล์เสียงของฉันถูกจัดเก็บไว้ที่ไหนหรือไม่?",
        a: "เครื่องมือนี้ไม่มีการจัดเก็บสถานะ ไม่มีฐานข้อมูลหรือระบบสมาชิก ไฟล์เสียงที่อัปโหลดและผลลัพธ์จะถูกประมวลผลเท่าที่จำเป็นสำหรับคำขอของคุณเท่านั้น"
      },
      {
        q: "ทำไมไฟล์ของฉันถูกปฏิเสธ?",
        a: "ไฟล์ที่มีขนาดเกิน 15 MB หรือยาวเกิน 10 นาทีจะถูกปฏิเสธเพื่อให้การประมวลผลรวดเร็วสำหรับทุกคน ตัดไฟล์เสียงของคุณแล้วลองใหม่"
      }
    ],
    linkHome: "ตัวแปลมอร์ส"
  },
  id: {
    title: "Hapus Vokal dari Lagu - Alat Pemisah Vokal AI Gratis",
    description:
      "Alat pemisah vokal AI gratis. Unggah lagu dan pisahkan menjadi trek instrumental (tanpa vokal) dan trek vokal terpisah. Mendukung MP3, WAV, FLAC, OGG.",
    h1: "Hapus Vokal dari Lagu - Pisahkan Vokal dan Instrumental Online",
    keywords: [
      "hapus vokal dari lagu",
      "pisahkan vokal dan musik",
      "instrumental maker",
      "buat karaoke online gratis",
      "pisahkan vokal dengan ai",
      "ekstrak musik tanpa vokal"
    ],
    summaryTitle: "Apa itu alat pemisah vokal?",
    summaryBody:
      "Alat pemisah vokal Morse Code World menggunakan AI (pemisahan sumber musik Demucs) untuk memisahkan lagu apa pun menjadi dua trek: trek instrumental tanpa vokal dan trek vokal yang terpisah sendiri. Unggah file MP3, WAV, FLAC, atau OGG hingga 15 MB dan 10 menit, lalu pratinjau dan unduh kedua hasilnya. Gratis, tanpa akun.",
    breadcrumbHome: "Penerjemah Kode Morse",
    breadcrumbTool: "Pemisah vokal",
    aboutHeading: "Cara kerja alat pemisah vokal",
    aboutP1:
      "Alat ini menggunakan Demucs, model AI pemisahan sumber musik, untuk menganalisis lagu dan memisahkan suara manusia dari musik pengiring instrumental. Unggah lagu, dan AI akan mendengarkan seluruh mix untuk membangun dua trek baru: satu hanya berisi instrumental (drum, bass, dan lainnya) dan satu hanya berisi vokal.",
    aboutP2:
      "Pemisahan berjalan pada GPU di cloud dan biasanya memerlukan 1 hingga 3 menit tergantung panjang lagu. Permintaan pertama setelah periode tidak aktif mungkin memerlukan waktu sedikit lebih lama karena model perlu memanas kembali - ini normal dan hanya terjadi sesekali.",
    limitsHeading: "Batasan file",
    limitsP:
      "Untuk menjaga proses tetap cepat dan terjangkau, unggahan dibatasi hingga 15 MB dan 10 menit audio. Format yang didukung adalah MP3, WAV, FLAC, dan OGG. Untuk lagu yang lebih panjang, potong file terlebih dahulu dan unggah bagian yang ingin diproses.",
    stepsHeading: "Cara menggunakannya",
    steps: [
      "Seret dan lepas lagu, atau pilih file (MP3, WAV, FLAC, OGG, maksimal 15 MB / 10 menit).",
      "File diunggah langsung dan aman, lalu pemisahan AI dimulai secara otomatis.",
      "Tunggu 1-3 menit selama lagu dipisahkan menjadi instrumental dan vokal.",
      "Pratinjau kedua trek di pemutar bawaan.",
      "Unduh instrumental, vokal, atau keduanya."
    ],
    faqHeading: "Pertanyaan yang sering diajukan",
    faq: [
      { q: "Apakah alat pemisah vokal ini gratis?", a: "Ya, gratis digunakan dan tidak memerlukan akun." },
      {
        q: "Format file apa yang didukung?",
        a: "MP3, WAV, FLAC, dan OGG. File harus berukuran maksimal 15 MB dan berdurasi maksimal 10 menit."
      },
      {
        q: "Berapa lama proses pemisahan berlangsung?",
        a: "Biasanya 1 hingga 3 menit, tergantung panjang lagu. Permintaan pertama setelah beberapa waktu tidak aktif bisa sedikit lebih lama karena model perlu memanas ulang."
      },
      {
        q: "Bisakah saya membuat trek karaoke dengan alat ini?",
        a: "Ya. Unduh trek instrumental (tanpa vokal) dan gunakan sebagai musik pengiring untuk bernyanyi."
      },
      {
        q: "Apakah audio saya disimpan di suatu tempat?",
        a: "Alat ini bersifat stateless - tidak ada database atau sistem akun. Audio yang diunggah dan hasilnya hanya diproses selama diperlukan untuk memproses permintaan Anda."
      },
      {
        q: "Mengapa file saya ditolak?",
        a: "File yang lebih dari 15 MB atau 10 menit ditolak agar proses tetap cepat untuk semua orang. Potong audio Anda dan coba lagi."
      }
    ],
    linkHome: "penerjemah Morse"
  }
};

export function getVocalRemoverPageCopy(locale: HomeLocale): VocalRemoverPageCopy {
  const override = OVERRIDES[locale];
  return override ? { ...EN, ...override } : EN;
}

export function getVocalRemoverPageLinks(locale: HomeLocale) {
  return {
    home: homePath(locale),
    vocalRemover: vocalRemoverPath(locale)
  };
}
