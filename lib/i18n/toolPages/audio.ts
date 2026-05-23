import type { HomeLocale } from "@/lib/i18n/home";
import { audioDecoderPath, homePath, pictureTranslatorPath } from "@/lib/i18n/routes";

export type AudioPageCopy = {
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
  aboutP3: string;
  formatsHeading: string;
  formatsP: string;
  stepsHeading: string;
  steps: string[];
  tipsHeading: string;
  tips: string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  linkTranslator: string;
  linkPicture: string;
  linkMain: string;
};

const EN: AudioPageCopy = {
  title: "Audio Morse Code Decoder - Decode Morse Audio to Text Online",
  description:
    "Free audio Morse code decoder. Upload WAV, MP3, or other audio and convert Morse beeps into dots/dashes and readable text online.",
  h1: "Audio Morse Code Decoder - Decode Morse Code from Audio Recordings",
  keywords: [
    "audio morse code decoder",
    "decode morse from audio",
    "morse code audio to text",
    "morse audio decoder online",
    "morse code decoder"
  ],
  summaryTitle: "What is the Audio Morse Code Decoder?",
  summaryBody:
    "The Audio Morse Code Decoder on Morse Code World converts Morse beeps in audio files (WAV, MP3, OGG, M4A) into dots, dashes, and readable text. Upload a recording, analyze tone and timing, and edit the result in your browser. Free, no account required. Uses International Morse Code.",
  breadcrumbHome: "Morse Code Translator",
  breadcrumbTool: "Audio Morse Code Decoder",
  aboutHeading: "What is an audio Morse code decoder?",
  aboutP1:
    "An audio Morse code decoder converts recordings of Morse beeps into readable text by analyzing timing patterns between tone and silence.",
  aboutP2:
    "This is useful for ham radio operators, learners, and researchers who need to decode Morse from audio quickly.",
  aboutP3:
    "You can cross-check results in the main translator or use the picture translator when your source is an image.",
  formatsHeading: "Supported audio formats",
  formatsP:
    "You can upload WAV, MP3, OGG, M4A, and most common audio formats. Use clean recordings with a single tone and minimal background noise.",
  stepsHeading: "How it works, step by step",
  steps: [
    "Upload your audio recording.",
    "Click decode to analyze tone and silence.",
    "Review and edit the Morse output.",
    "Use AI organize for longer messages.",
    "Read the decoded plain text."
  ],
  tipsHeading: "Tips for best results",
  tips: [
    "Use consistent tone frequency (500–1000 Hz is often ideal).",
    "Avoid background noise, speech, and music.",
    "Shorter clips under two minutes decode more accurately.",
    "Manually fix dots and dashes if output looks wrong."
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    { q: "What audio formats are supported?", a: "WAV, MP3, OGG, M4A, and most common formats." },
    { q: "Is this decoder free?", a: "Yes, completely free with no account required." },
    { q: "Can I decode audio from a YouTube video?", a: "Export the audio to WAV or MP3, then upload it here." }
  ],
  linkTranslator: "translator",
  linkPicture: "picture translator",
  linkMain: "main translator"
};

/** Localized overrides (falls back to English body where not set). */
const OVERRIDES: Partial<Record<HomeLocale, Partial<AudioPageCopy>>> = {
  es: {
    title: "Decodificador de audio en codigo Morse - Convertir audio Morse a texto",
    description:
      "Decodificador de audio Morse gratis. Sube WAV, MP3 u otros formatos y convierte pitidos Morse en texto legible en linea.",
    h1: "Decodificador de audio Morse - Decodificar codigo Morse desde grabaciones",
    summaryTitle: "Que es el decodificador de audio Morse?",
    summaryBody:
      "El decodificador de audio Morse en Morse Code World convierte pitidos Morse en archivos de audio a texto. Sube una grabacion, analiza el tono y edita el resultado en el navegador. Gratis y sin cuenta.",
    breadcrumbTool: "Decodificador de audio Morse",
    aboutHeading: "Que es un decodificador de audio Morse?",
    linkTranslator: "traductor",
    linkPicture: "traductor de imagen Morse",
    linkMain: "traductor principal"
  },
  fr: {
    title: "Decodeur audio code Morse - Convertir l'audio Morse en texte",
    description:
      "Decodeur audio Morse gratuit. Televersez WAV, MP3 ou autre audio et convertissez les bips Morse en texte lisible en ligne.",
    h1: "Decodeur audio code Morse - Decoder le Morse depuis un enregistrement",
    summaryTitle: "Qu'est-ce que le decodeur audio Morse ?",
    summaryBody:
      "Le decodeur audio Morse sur Morse Code World convertit les bips Morse des fichiers audio (WAV, MP3, OGG, M4A) en texte. Televersez un enregistrement, analysez le ton et modifiez le resultat dans le navigateur. Gratuit, sans compte.",
    breadcrumbTool: "Decodeur audio Morse",
    aboutHeading: "Qu'est-ce qu'un decodeur audio Morse ?",
    aboutP1:
      "Un decodeur audio Morse convertit les enregistrements de bips en texte lisible en analysant le timing entre ton et silence.",
    formatsHeading: "Formats audio pris en charge",
    stepsHeading: "Comment ca marche",
    faqHeading: "Questions frequentes",
    linkTranslator: "traducteur",
    linkPicture: "traducteur image Morse",
    linkMain: "traducteur principal"
  },
  de: {
    title: "Audio-Morsecode-Decoder - Morse-Audio in Text umwandeln",
    description:
      "Kostenloser Audio-Morsecode-Decoder. Laden Sie WAV, MP3 oder andere Audioformate hoch und wandeln Sie Morse-Töne in lesbaren Text um.",
    h1: "Audio-Morsecode-Decoder - Morse aus Audioaufnahmen dekodieren",
    summaryTitle: "Was ist der Audio-Morsecode-Decoder?",
    summaryBody:
      "Der Audio-Morsecode-Decoder auf Morse Code World wandelt Morse-Töne in Audiodateien in lesbaren Text um. Kostenlos im Browser, ohne Konto.",
    breadcrumbTool: "Audio-Morsecode-Decoder",
    aboutHeading: "Was ist ein Audio-Morsecode-Decoder?",
    linkTranslator: "Übersetzer",
    linkPicture: "Bild-Übersetzer",
    linkMain: "Hauptübersetzer"
  },
  pt: {
    title: "Decodificador de audio Morse - Converter audio Morse em texto",
    description: "Decodificador de audio Morse gratuito. Envie WAV, MP3 ou outros formatos e converta bipes em texto online.",
    h1: "Decodificador de audio Morse - Decodificar Morse de gravacoes",
    summaryTitle: "O que e o decodificador de audio Morse?",
    breadcrumbTool: "Decodificador de audio Morse",
    aboutHeading: "O que e um decodificador de audio Morse?"
  },
  ja: {
    title: "音声モールス信号デコーダー - モールス音声をテキストに変換",
    description: "無料の音声モールス信号デコーダー。WAV、MP3などをアップロードしてモールス音をテキストに変換。",
    h1: "音声モールス信号デコーダー - 録音からモールスをデコード",
    summaryTitle: "音声モールス信号デコーダーとは？",
    breadcrumbTool: "音声モールスデコーダー",
    aboutHeading: "音声モールス信号デコーダーとは？"
  },
  ko: {
    title: "오디오 모스 부호 디코더 - 모스 오디오를 텍스트로 변환",
    description: "무료 오디오 모스 부호 디코더. WAV, MP3 등을 업로드해 모스 소리를 텍스트로 변환하세요.",
    h1: "오디오 모스 부호 디코더 - 녹음에서 모스 부호 디코딩",
    summaryTitle: "오디오 모스 부호 디코더란?",
    breadcrumbTool: "오디오 모스 디코더",
    aboutHeading: "오디오 모스 부호 디코더란?"
  },
  zh: {
    title: "音訊摩斯電碼解碼器 - 將摩斯音訊轉為文字",
    description: "免費音訊摩斯電碼解碼器。上傳 WAV、MP3 等音訊，將摩斯聲音轉為可讀文字。",
    h1: "音訊摩斯電碼解碼器 - 從錄音解碼摩斯電碼",
    summaryTitle: "什麼是音訊摩斯電碼解碼器？",
    breadcrumbTool: "音訊摩斯解碼器",
    aboutHeading: "什麼是音訊摩斯電碼解碼器？"
  },
  ar: {
    title: "فك تشفير الصوت لشفرة مورس - تحويل صوت مورس إلى نص",
    description: "فك تشفير صوت مورس مجاني. ارفع WAV أو MP3 وحوّل نغمات مورس إلى نص مقروء.",
    h1: "فك تشفير صوت شفرة مورس - فك مورس من التسجيلات",
    summaryTitle: "ما هو فك تشفير صوت مورس؟",
    breadcrumbTool: "فك تشفير صوت مورس",
    aboutHeading: "ما هو فك تشفير صوت مورس؟"
  },
  ru: {
    title: "Аудиодекодер азбуки Морзе - Преобразовать аудио Морзе в текст",
    description: "Бесплатный аудиодекодер Морзе. Загрузите WAV, MP3 и другие форматы и получите текст.",
    h1: "Аудиодекодер азбуки Морзе - Декодировать Морзе из записи",
    summaryTitle: "Что такое аудиодекодер Морзе?",
    breadcrumbTool: "Аудиодекодер Морзе",
    aboutHeading: "Что такое аудиодекодер Морзе?"
  },
  it: {
    title: "Decodificatore audio codice Morse - Convertire audio Morse in testo",
    description: "Decodificatore audio Morse gratuito. Carica WAV, MP3 e converti segnali Morse in testo.",
    h1: "Decodificatore audio Morse - Decodificare Morse da registrazioni",
    summaryTitle: "Cos'e il decodificatore audio Morse?",
    breadcrumbTool: "Decodificatore audio Morse",
    aboutHeading: "Cos'e un decodificatore audio Morse?"
  },
  nl: {
    title: "Audio Morse code decoder - Morse-audio naar tekst",
    description: "Gratis audio Morse-decoder. Upload WAV, MP3 en zet Morse pieptonen om in tekst.",
    h1: "Audio Morse code decoder - Morse uit opnames decoderen",
    breadcrumbTool: "Audio Morse decoder"
  },
  pl: {
    title: "Dekoder audio kodu Morse'a - Konwersja audio Morse na tekst",
    description: "Darmowy dekoder audio Morse. Prześlij WAV, MP3 i zamień sygnały Morse na tekst.",
    h1: "Dekoder audio Morse'a - Dekodowanie Morse z nagrań",
    breadcrumbTool: "Dekoder audio Morse"
  },
  tr: {
    title: "Sesli Morse kodu çözücü - Morse sesini metne dönüştür",
    description: "Ücretsiz sesli Morse kodu çözücü. WAV, MP3 yükleyin ve Morse sesini metne çevirin.",
    h1: "Sesli Morse kodu çözücü - Kayıttan Morse çözme",
    breadcrumbTool: "Sesli Morse çözücü"
  },
  cs: {
    title: "Audio dekodér morseovky - Převod Morse audia na text",
    description: "Bezplatný audio dekodér morseovky. Nahrajte WAV, MP3 a převeďte Morse zvuk na text.",
    h1: "Audio dekodér morseovky - Dekódování Morse ze záznamu",
    breadcrumbTool: "Audio dekodér morseovky"
  },
  hi: {
    title: "ऑडियो मोर्स कोड डिकोडर - मोर्स ऑडियो को टेक्स्ट में बदलें",
    description: "मुफ्त ऑडियो मोर्स कोड डिकोडर। WAV, MP3 अपलोड करें और मोर्स को टेक्स्ट में बदलें।",
    h1: "ऑडियो मोर्स कोड डिकोडर - रिकॉर्डिंग से मोर्स डिकोड करें",
    breadcrumbTool: "ऑडियो मोर्स डिकोडर"
  },
  id: {
    title: "Dekoder audio kode Morse - Ubah audio Morse ke teks",
    description: "Dekoder audio Morse gratis. Unggah WAV, MP3 dan ubah bunyi Morse menjadi teks.",
    h1: "Dekoder audio kode Morse - Dekode Morse dari rekaman",
    breadcrumbTool: "Dekoder audio Morse"
  },
  vi: {
    title: "Bộ giải mã âm thanh mã Morse - Chuyển âm thanh Morse thành văn bản",
    description: "Bộ giải mã Morse miễn phí. Tải WAV, MP3 và chuyển tiếng Morse thành văn bản.",
    h1: "Bộ giải mã âm thanh Morse - Giải mã Morse từ bản ghi",
    breadcrumbTool: "Bộ giải mã âm thanh Morse"
  },
  th: {
    title: "ตัวถอดรหัสเสียงมอร์ส - แปลงเสียงมอร์สเป็นข้อความ",
    description: "ตัวถอดรหัสเสียงมอร์สฟรี อัปโหลด WAV, MP3 แปลงเสียงมอร์สเป็นข้อความ",
    h1: "ตัวถอดรหัสเสียงมอร์ส - ถอดรหัสมอร์สจากไฟล์เสียง",
    breadcrumbTool: "ตัวถอดรหัสเสียงมอร์ส"
  },
  uk: {
    title: "Аудіодекодер коду Морзе - Перетворити аудіо Морзе на текст",
    description: "Безкоштовний аудіодекодер Морзе. Завантажте WAV, MP3 і отримайте текст.",
    h1: "Аудіодекодер коду Морзе - Декодування Морзе з запису",
    breadcrumbTool: "Аудіодекодер Морзе"
  }
};

export function getAudioPageCopy(locale: HomeLocale): AudioPageCopy {
  const override = OVERRIDES[locale];
  return override ? { ...EN, ...override } : EN;
}

export function getAudioPageLinks(locale: HomeLocale) {
  return {
    home: homePath(locale),
    audio: audioDecoderPath(locale),
    picture: pictureTranslatorPath(locale)
  };
}
