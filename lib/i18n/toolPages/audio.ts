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
  technicalHeading: string;
  technicalParagraphs: string[];
  useCasesHeading: string;
  useCases: string[];
  limitationsHeading: string;
  limitations: string[];
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
    "An audio Morse code decoder converts recordings of Morse beeps into readable text by analyzing timing patterns between tone and silence. Unlike typing dots and dashes by hand, you can start from a WAV or MP3 captured from a practice session, an on-air recording, or exported video audio.",
  aboutP2:
    "This tool is built for ham radio operators checking a short CW clip, students verifying homework, and anyone who already has Morse as sound rather than as written symbols. It follows International Morse Code (ITU) timing rules and runs entirely in your browser for the audio analysis step.",
  aboutP3:
    "After decoding, you can cross-check results in the main translator or use the picture translator when your source is a photo or screenshot instead of audio.",
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
    "Manually fix dots and dashes if output looks wrong.",
    "If letter spacing fails, try a cleaner recording with longer pauses between characters."
  ],
  technicalHeading: "How the decoder works technically",
  technicalParagraphs: [
    "When you upload a file, the decoder uses the browser Web Audio API to decode the file into a PCM waveform — no audio is uploaded to our servers for this step. The waveform is scanned in short frames (about 10 ms each). For every frame, the tool calculates RMS energy (a measure of loudness) to build an envelope of how strong the tone is over time.",
    "That envelope is lightly smoothed, then compared to an adaptive threshold (roughly 30% of the peak level). Frames above the threshold count as “tone on”; frames below count as silence. The decoder merges consecutive frames into segments and measures how long each tone and each gap lasts in milliseconds.",
    "Next, it estimates the dot length by looking at the shortest common tone durations in the recording. Durations near one dot unit become dots (.); durations near three dot units become dashes (-). Gaps are classified using standard ITU ratios: a short gap keeps building the same letter, a medium gap starts a new letter, and a long gap inserts a word break.",
    "Before showing results, the tool checks whether the timing pattern actually looks like Morse (rather than speech or random noise). If timing is too irregular, it asks for a cleaner recording. The Morse string is then mapped to letters using the same International Morse table as the main translator. An optional AI organize step sends the decoded text to Google Gemini on the server to fix spacing and casing — only the text and Morse string are sent, not the original audio file."
  ],
  useCasesHeading: "Example use cases",
  useCases: [
    "Verify a short CW practice recording before a ham radio exam or club exercise.",
    "Decode Morse exported from a YouTube demo, podcast clip, or archived training audio.",
    "Check whether an old answering-machine-style tone sequence spells a callsign or phrase.",
    "Study timing: compare the detected dot length and threshold against what you hear.",
    "Turn a rough decode into readable sentences with AI organize, then edit manually."
  ],
  limitationsHeading: "Limitations you should know",
  limitations: [
    "Works best on single-tone Morse (one steady pitch). Music, speech, or multiple overlapping tones usually fail.",
    "Heavy noise, clipping, or very fast/high-speed CW reduces accuracy; you may need to edit the Morse output by hand.",
    "The decoder does not perform on-air signal processing — it analyzes files you already recorded.",
    "AI organize requires a configured server API key and sends decoded text (not audio) to Google Gemini.",
    "Extremely long files or dense symbol streams may be rejected to avoid nonsense output."
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "What audio formats are supported?",
      a: "WAV, MP3, OGG, M4A, and most common browser-playable formats. If the file plays in your browser, it can usually be analyzed."
    },
    {
      q: "Is my audio uploaded to your servers?",
      a: "No. Decoding runs locally in your browser with the Web Audio API. Only if you use AI organize is decoded text (not the audio file) sent to Google Gemini."
    },
    {
      q: "Is this decoder free?",
      a: "Yes, completely free with no account required for decoding. AI organize depends on server configuration."
    },
    {
      q: "Can I decode audio from a YouTube video?",
      a: "Export or download the audio as WAV or MP3, then upload it here. Avoid background music and commentary for best results."
    },
    {
      q: "Why did decoding fail or look like gibberish?",
      a: "Common causes are background noise, non-Morse audio, irregular timing, or missing pauses between letters. Try a shorter clip with a clear sidetone."
    },
    {
      q: "What does AI organize do?",
      a: "It sends the decoded Morse text to Google Gemini to add sensible word breaks, capitalization, and punctuation. You should still verify the result."
    },
    {
      q: "Which Morse standard is used?",
      a: "International Morse Code (ITU), the same standard as the main Morse Code World translator — not historical American railroad Morse."
    },
    {
      q: "Can I edit the Morse before converting to plain text?",
      a: "Yes. The Morse output field is fully editable so you can fix dots, dashes, and spaces before reading the decoded message."
    }
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
