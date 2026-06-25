import type { HomeLocale } from "@/lib/i18n/home";
import { audioDecoderPath, homePath, pictureTranslatorPath } from "@/lib/i18n/routes";

export type PicturePageCopy = {
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
  stepsHeading: string;
  steps: string[];
  qualityHeading: string;
  qualityP1: string;
  qualityP2: string;
  technicalHeading: string;
  technicalParagraphs: string[];
  useCasesHeading: string;
  useCases: string[];
  limitationsHeading: string;
  limitations: string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  linkTranslator: string;
  linkAudio: string;
};

const EN: PicturePageCopy = {
  title: "Morse Code Picture Translator - Decode Morse Code from Images Online",
  description:
    "Free Morse code picture translator. Upload an image with dots and dashes, extract Morse with AI, and decode to plain text online.",
  h1: "Morse Code Picture Translator - Decode Morse Code from Any Image",
  keywords: [
    "morse code picture translator",
    "image morse code translator",
    "morse code from image",
    "decode morse from photo"
  ],
  summaryTitle: "What is the Morse Code Picture Translator?",
  summaryBody:
    "The Morse Code Picture Translator on Morse Code World decodes Morse code visible in photos and screenshots. Upload an image, detect dot and dash patterns, and get plain text output in your browser. Free, no account required.",
  breadcrumbHome: "Morse Code Translator",
  breadcrumbTool: "Morse Code Picture Translator",
  aboutHeading: "What is a Morse code picture translator?",
  aboutP1:
    "A Morse code picture translator helps you decode Morse from screenshots, documents, flashcards, and photos instead of typing dots and dashes by hand. It is useful when the signal exists only as pixels — for example a textbook diagram, a museum display, or a message shared in a chat image.",
  aboutP2:
    "This page sends your image to Google Gemini on our server, which reads dot and dash patterns visually and returns a single line of International Morse code. That Morse string is shown in an editable field and decoded to plain text locally in your browser using the same alphabet table as the main translator.",
  aboutP3:
    "For typed Morse use the main translator; for audio recordings use the audio decoder. Together, the three tools cover text, sound, and image sources.",
  stepsHeading: "How to decode Morse code from an image",
  steps: [
    "Take a clear photo or screenshot of the Morse code.",
    "Upload the image (JPG, PNG, WEBP).",
    "Run extraction to get editable Morse text.",
    "Decode to plain text and verify the message."
  ],
  qualityHeading: "What images work best?",
  qualityP1:
    "Use strong contrast, clear symbol spacing, and consistent orientation. Screenshots usually work better than photos.",
  qualityP2:
    "Increase contrast and crop tightly if symbols are hard to read. Avoid glare, motion blur, and low-resolution thumbnails.",
  technicalHeading: "How the picture translator works technically",
  technicalParagraphs: [
    "You upload a JPG, PNG, WebP, or GIF image (up to 4 MB). The file is sent to our server API route, which forwards it to Google Gemini multimodal models. The model is instructed to trace the signal visually — treating short marks as dots, long marks as dashes, and respecting word spacing — rather than guessing English letters first.",
    "Gemini returns a single line of Morse using only dots, dashes, slashes, and spaces. Our server normalizes that response and sends it back to your browser. A small client-side pass maps common OCR-style characters (such as bullets) to standard Morse symbols, then the editable Morse field is filled.",
    "Plain-text decoding happens entirely in the browser: the Morse string is matched against the International Morse Code table, the same logic used on the home translator. You can correct the Morse manually before trusting the decoded message. If Gemini cannot find Morse in the image, it returns a sentinel value and the tool shows an error instead of inventing text.",
    "Unlike the audio decoder, image reading requires a server round trip because vision models run on Google infrastructure. Images are used only for extraction and are not stored by Morse Code World after the request completes."
  ],
  useCasesHeading: "Example use cases",
  useCases: [
    "Decode Morse printed in a radio handbook, exam study guide, or classroom worksheet.",
    "Read Morse from a screenshot of a practice app, social post, or messaging chat.",
    "Transcribe dots and dashes drawn on a whiteboard or flashcard without typing them manually.",
    "Quickly verify a visual puzzle, escape-room clue, or STEM activity that uses Morse symbols.",
    "Start from a photo of historical telegraph material, then refine the Morse in the editor."
  ],
  limitationsHeading: "Limitations you should know",
  limitations: [
    "Accuracy depends on image quality, contrast, and how clearly symbols are separated — AI can misread faint or crowded marks.",
    "Handwriting and stylized fonts work only when dots and dashes remain distinct; cursive or decorative scripts often fail.",
    "Your image is transmitted to Google Gemini for analysis; do not upload sensitive or private photos you would not share with a third-party AI service.",
    "Very large files above 4 MB are rejected. Animated GIFs may decode inconsistently depending on which frame the model focuses on.",
    "The tool reads International Morse visually; it does not automatically handle proprietary pictogram codes or non-ITU variants.",
    "Network or API outages can block extraction even though local Morse-to-text decoding still works once you have a string."
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "Can I upload handwritten Morse?",
      a: "Yes, if dots and dashes are clearly separated and contrast well with the background. Messy or connected handwriting often needs manual correction after extraction."
    },
    {
      q: "Is this tool free?",
      a: "Yes, no registration is required. Extraction uses Google Gemini on our server, which incurs API costs we absorb for normal use."
    },
    {
      q: "What AI reads the image?",
      a: "Google Gemini multimodal models, with automatic fallback across several model versions if one is unavailable."
    },
    {
      q: "Is my image stored on your servers?",
      a: "No. The image is forwarded to Google for the extraction request and is not persisted by Morse Code World afterward."
    },
    {
      q: "Which image formats are supported?",
      a: "JPEG, PNG, WebP, and GIF up to 4 MB. Screenshots and phone photos work when symbols are sharp enough."
    },
    {
      q: "Can I edit the Morse before decoding?",
      a: "Yes. The Morse output field is fully editable so you can fix misread dots, dashes, or word breaks before reading the plain-text result."
    },
    {
      q: "Why did extraction return nothing or an error?",
      a: "The model may not see valid Morse, the file may be too large, or the API may be temporarily unavailable. Try cropping, increasing contrast, or using a screenshot instead of a photo."
    },
    {
      q: "Does this work on American railroad Morse?",
      a: "The tool targets International Morse Code (ITU). Historical American Morse uses different symbol timings; results may need manual adjustment."
    }
  ],
  linkTranslator: "Morse code translator",
  linkAudio: "audio Morse code decoder"
};

const OVERRIDES: Partial<Record<HomeLocale, Partial<PicturePageCopy>>> = {
  es: {
    title: "Traductor de imagen Morse - Decodificar Morse desde fotos",
    description: "Traductor de imagen Morse gratis. Sube una foto con puntos y rayas y decodifica a texto.",
    h1: "Traductor de imagen Morse - Decodificar codigo Morse desde imagenes",
    summaryTitle: "Que es el traductor de imagen Morse?",
    breadcrumbTool: "Traductor de imagen Morse",
    aboutHeading: "Que es un traductor de imagen Morse?"
  },
  fr: {
    title: "Traducteur image code Morse - Decoder Morse depuis une photo",
    description: "Traducteur image Morse gratuit. Televersez une image avec points et traits et obtenez du texte.",
    h1: "Traducteur image code Morse - Decoder le Morse depuis une image",
    summaryTitle: "Qu'est-ce que le traducteur image Morse ?",
    summaryBody:
      "Le traducteur image Morse sur Morse Code World decode le Morse visible sur les photos et captures d'ecran. Gratuit dans le navigateur.",
    breadcrumbTool: "Traducteur image Morse",
    aboutHeading: "Qu'est-ce qu'un traducteur image Morse ?",
    linkTranslator: "traducteur Morse",
    linkAudio: "decodeur audio Morse"
  },
  de: {
    title: "Morse-Bild-Übersetzer - Morse aus Bildern dekodieren",
    description: "Kostenloser Morse-Bild-Übersetzer. Bild hochladen und Morse in Text umwandeln.",
    h1: "Morse-Bild-Übersetzer - Morse-Code aus jedem Bild dekodieren",
    summaryTitle: "Was ist der Morse-Bild-Übersetzer?",
    breadcrumbTool: "Morse-Bild-Übersetzer",
    aboutHeading: "Was ist ein Morse-Bild-Übersetzer?"
  },
  pt: {
    title: "Tradutor de imagem Morse - Decodificar Morse de fotos",
    description: "Tradutor de imagem Morse gratuito. Envie uma imagem e decodifique para texto.",
    h1: "Tradutor de imagem Morse - Decodificar Morse de qualquer imagem",
    breadcrumbTool: "Tradutor de imagem Morse"
  },
  ja: {
    title: "モールス画像翻訳機 - 画像からモールス信号をデコード",
    description: "無料のモールス画像翻訳。写真やスクリーンショットからモールスをテキストに変換。",
    h1: "モールス画像翻訳機 - 画像からモールス信号を読み取り",
    breadcrumbTool: "モールス画像翻訳機"
  },
  ko: {
    title: "모스 코드 사진 번역기 - 이미지에서 모스 부호 디코딩",
    description: "무료 모스 사진 번역기. 이미지를 업로드해 모스 부호를 텍스트로 변환하세요.",
    h1: "모스 코드 사진 번역기 - 모든 이미지에서 모스 디코딩",
    breadcrumbTool: "모스 사진 번역기"
  },
  zh: {
    title: "摩斯電碼圖片翻譯器 - 從圖片解碼摩斯電碼",
    description: "免費摩斯圖片翻譯器。上傳含點劃的圖片，AI 提取並解碼為文字。",
    h1: "摩斯電碼圖片翻譯器 - 從任何圖片解碼摩斯電碼",
    breadcrumbTool: "摩斯圖片翻譯器"
  },
  ar: {
    title: "مترجم صورة شفرة مورس - فك مورس من الصور",
    description: "مترجم صورة مورس مجاني. ارفع صورة واستخرج مورس كنص.",
    h1: "مترجم صورة شفرة مورس - فك مورس من أي صورة",
    breadcrumbTool: "مترجم صورة مورس"
  },
  ru: {
    title: "Переводчик Morse по изображению - Декодировать Morse с фото",
    description: "Бесплатный переводчик Morse по изображению. Загрузите фото и получите текст.",
    h1: "Переводчик Morse по изображению - Декодировать Morse с любого изображения",
    breadcrumbTool: "Переводчик Morse по изображению"
  },
  it: {
    title: "Traduttore immagine codice Morse - Decodificare Morse da foto",
    description: "Traduttore immagine Morse gratuito. Carica un'immagine e decodifica in testo.",
    h1: "Traduttore immagine Morse - Decodificare Morse da qualsiasi immagine",
    breadcrumbTool: "Traduttore immagine Morse"
  },
  nl: { title: "Morse afbeelding vertaler - Morse uit foto's decoderen", h1: "Morse afbeelding vertaler - Morse uit elke afbeelding", breadcrumbTool: "Morse afbeelding vertaler" },
  pl: { title: "Tłumacz obrazu kodu Morse'a - Dekoduj Morse ze zdjęć", h1: "Tłumacz obrazu Morse'a - Dekoduj Morse z dowolnego obrazu", breadcrumbTool: "Tłumacz obrazu Morse" },
  tr: { title: "Morse resim çevirici - Fotoğraftan Morse çözme", h1: "Morse resim çevirici - Herhangi bir görüntüden Morse çöz", breadcrumbTool: "Morse resim çevirici" },
  cs: { title: "Obrázkový překladač morseovky - Dekódovat Morse z fotky", h1: "Obrázkový překladač morseovky - Morse z libovolného obrázku", breadcrumbTool: "Obrázkový překladač morseovky" },
  hi: { title: "मोर्स चित्र अनुवादक - छवि से मोर्स डिकोड करें", h1: "मोर्स चित्र अनुवादक - किसी भी छवि से मोर्स डिकोड", breadcrumbTool: "मोर्स चित्र अनुवादक" },
  id: { title: "Penerjemah gambar kode Morse - Dekode Morse dari foto", h1: "Penerjemah gambar Morse - Dekode dari gambar apa pun", breadcrumbTool: "Penerjemah gambar Morse" },
  vi: { title: "Dịch hình ảnh mã Morse - Giải mã Morse từ ảnh", h1: "Dịch hình ảnh mã Morse - Giải mã từ mọi hình ảnh", breadcrumbTool: "Dịch hình Morse" },
  th: { title: "แปลรูปภาพรหัสมอร์ส - ถอดรหัสมอร์สจากรูป", h1: "แปลรูปภาพรหัสมอร์ส - ถอดรหัสจากภาพใดก็ได้", breadcrumbTool: "แปลรูปมอร์ส" },
  uk: { title: "Перекладач зображення коду Морзе - Декодувати Morse з фото", h1: "Перекладач зображення Морзе - Декодувати з будь-якого зображення", breadcrumbTool: "Перекладач зображення Морзе" }
};

export function getPicturePageCopy(locale: HomeLocale): PicturePageCopy {
  const override = OVERRIDES[locale];
  return override ? { ...EN, ...override } : EN;
}

export function getPicturePageLinks(locale: HomeLocale) {
  return {
    home: homePath(locale),
    audio: audioDecoderPath(locale),
    picture: pictureTranslatorPath(locale)
  };
}
