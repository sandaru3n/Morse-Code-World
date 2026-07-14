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
    title: "Quitar voz de una cancion - Separador de voz y musica gratis",
    description:
      "Quita la voz de una cancion gratis con IA. Sube un archivo y separalo en instrumental (sin voz) y voz aislada. MP3, WAV, FLAC, OGG.",
    h1: "Quitar voz de una cancion - Separar voz de musica online",
    keywords: [
      "quitar voz de una cancion",
      "separar voz de musica",
      "eliminar voz cancion",
      "pista instrumental online",
      "karaoke online gratis"
    ],
    summaryTitle: "Que es el separador de voz y musica?",
    summaryBody:
      "El separador de voz y musica de Morse Code World usa IA (Demucs) para dividir cualquier cancion en dos pistas: una instrumental sin voz y otra con solo la voz aislada. Sube un MP3, WAV, FLAC u OGG de hasta 15 MB y 10 minutos, y descarga ambos resultados. Gratis, sin cuenta.",
    breadcrumbTool: "Quitar voz de una cancion",
    aboutHeading: "Como funciona el separador de voz",
    linkHome: "traductor de Morse"
  },
  pt: {
    title: "Remover vocal da musica - Separar voz e instrumental gratis",
    description:
      "Remova o vocal de uma musica gratis com IA. Envie um arquivo e separe em instrumental (sem voz) e vocal isolado. MP3, WAV, FLAC, OGG.",
    h1: "Remover vocal da musica - Tirar a voz da musica online",
    keywords: [
      "remover vocal da musica",
      "tirar a voz da musica",
      "separar vocal e instrumental",
      "criar instrumental online",
      "karaoke online gratis"
    ],
    summaryTitle: "O que e o removedor de vocal?",
    summaryBody:
      "O removedor de vocal do Morse Code World usa IA (Demucs) para dividir qualquer musica em duas faixas: uma instrumental sem voz e outra apenas com o vocal isolado. Envie um MP3, WAV, FLAC ou OGG de até 15 MB e 10 minutos, e baixe os dois resultados. Gratis, sem conta.",
    breadcrumbTool: "Remover vocal da musica",
    aboutHeading: "Como funciona o removedor de vocal",
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
    breadcrumbTool: "Убрать вокал из песни",
    aboutHeading: "Как работает удаление вокала",
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
    breadcrumbTool: "ボーカル除去",
    aboutHeading: "ボーカル除去の仕組み",
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
    breadcrumbTool: "보컬 제거",
    aboutHeading: "보컬 제거 작동 방식",
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
    breadcrumbTool: "人聲分離",
    aboutHeading: "人聲分離的運作方式",
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
    breadcrumbTool: "Vokal Ayırma",
    aboutHeading: "Vokal ayırma nasıl çalışır",
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
