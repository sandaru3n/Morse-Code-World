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
    "A morse code picture translator helps you decode Morse from screenshots, documents, and photos instead of typing dots and dashes by hand.",
  aboutP2:
    "This page uses Google Gemini to detect Morse symbols from images and convert them into editable Morse text, then decode to plain language.",
  aboutP3:
    "For typed Morse use the main translator; for audio recordings use the audio decoder.",
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
    "Increase contrast and crop tightly if symbols are hard to read.",
  faqHeading: "Frequently asked questions",
  faq: [
    { q: "Can I upload handwritten Morse?", a: "Yes, if dots and dashes are clearly separated." },
    { q: "Is this tool free?", a: "Yes, no registration required." },
    { q: "What AI reads the image?", a: "Google Gemini detects patterns and produces Morse output." }
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
