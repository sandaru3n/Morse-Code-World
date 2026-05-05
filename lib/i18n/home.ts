export type HomeLocale = "en" | "es" | "ko";

export type TranslatorUiCopy = {
  heading: string;
  configure: string;
  mode: string;
  modeEncode: string;
  modeDecode: string;
  clear: string;
  inputPlaceholder: string;
  characters: string;
  signalOutput: string;
  outputPlaceholder: string;
  copy: string;
  download: string;
  share: string;
  play: string;
  pause: string;
  stop: string;
  repeat: string;
  sound: string;
  screenFlashOpen: string;
  vibrate: string;
  saveAudio: string;
  signalControls: string;
  transmissionSpeed: string;
  frequencyPitch: string;
  outputVolume: string;
  signalId: string;
  linkSecured: string;
  quickReference: string;
  footerAbout: string;
  footerMorsePicture: string;
  footerPrivacy: string;
  footerApi: string;
  footerGithub: string;
  screenFlashTitle: string;
  screenFlashBody: string;
  enableScreenFlash: string;
  done: string;
  configureTitle: string;
  showLiveInput: string;
  lightTheme: string;
};

export const TRANSLATOR_UI_COPY: Record<HomeLocale, TranslatorUiCopy> = {
  en: {
    heading: "Morse code translator",
    configure: "Configure",
    mode: "Mode",
    modeEncode: "Text → Morse",
    modeDecode: "Morse → Text",
    clear: "Clear",
    inputPlaceholder: "Type text or Morse code...",
    characters: "Characters",
    signalOutput: "Signal Output",
    outputPlaceholder: "Output appears here. # = untranslatable.",
    copy: "Copy",
    download: "Download",
    share: "Share",
    play: "PLAY",
    pause: "PAUSE",
    stop: "STOP",
    repeat: "Repeat",
    sound: "Sound",
    screenFlashOpen: "Screen flash - open options",
    vibrate: "Vibrate",
    saveAudio: "Save audio",
    signalControls: "Signal Controls",
    transmissionSpeed: "Transmission Speed",
    frequencyPitch: "Frequency Pitch",
    outputVolume: "Output Volume",
    signalId: "Signal ID",
    linkSecured: "Link Secured",
    quickReference: "Quick Reference",
    footerAbout: "About",
    footerMorsePicture: "Morse picture",
    footerPrivacy: "Privacy",
    footerApi: "API",
    footerGithub: "GitHub",
    screenFlashTitle: "Screen flash",
    screenFlashBody:
      "While PLAY is running, the screen fills white and black in turn for each dot and dash - full-window blink, same timing as sound.",
    enableScreenFlash: "Enable screen flash",
    done: "Done",
    configureTitle: "Configure",
    showLiveInput: "Show live input (tap / hold)",
    lightTheme: "Light theme (UI)"
  },
  es: {
    heading: "Traductor de codigo morse",
    configure: "Configurar",
    mode: "Modo",
    modeEncode: "Texto → Morse",
    modeDecode: "Morse → Texto",
    clear: "Limpiar",
    inputPlaceholder: "Escribe texto o codigo morse...",
    characters: "Caracteres",
    signalOutput: "Salida de senal",
    outputPlaceholder: "La salida aparece aqui. # = no traducible.",
    copy: "Copiar",
    download: "Descargar",
    share: "Compartir",
    play: "REPRODUCIR",
    pause: "PAUSA",
    stop: "DETENER",
    repeat: "Repetir",
    sound: "Sonido",
    screenFlashOpen: "Destello de pantalla - abrir opciones",
    vibrate: "Vibrar",
    saveAudio: "Guardar audio",
    signalControls: "Controles de senal",
    transmissionSpeed: "Velocidad de transmision",
    frequencyPitch: "Frecuencia",
    outputVolume: "Volumen de salida",
    signalId: "ID de senal",
    linkSecured: "Enlace seguro",
    quickReference: "Referencia rapida",
    footerAbout: "Acerca de",
    footerMorsePicture: "Morse imagen",
    footerPrivacy: "Privacidad",
    footerApi: "API",
    footerGithub: "GitHub",
    screenFlashTitle: "Destello de pantalla",
    screenFlashBody:
      "Mientras REPRODUCIR esta activo, la pantalla alterna entre blanco y negro por cada punto y raya con el mismo ritmo del sonido.",
    enableScreenFlash: "Activar destello de pantalla",
    done: "Listo",
    configureTitle: "Configurar",
    showLiveInput: "Mostrar entrada en vivo (toque / mantener)",
    lightTheme: "Tema claro (UI)"
  },
  ko: {
    heading: "모스 부호 번역기",
    configure: "설정",
    mode: "모드",
    modeEncode: "텍스트 → 모스",
    modeDecode: "모스 → 텍스트",
    clear: "지우기",
    inputPlaceholder: "텍스트 또는 모스 부호를 입력하세요...",
    characters: "문자 수",
    signalOutput: "출력 신호",
    outputPlaceholder: "여기에 결과가 표시됩니다. # = 변환 불가.",
    copy: "복사",
    download: "다운로드",
    share: "공유",
    play: "재생",
    pause: "일시정지",
    stop: "정지",
    repeat: "반복",
    sound: "소리",
    screenFlashOpen: "화면 점멸 - 옵션 열기",
    vibrate: "진동",
    saveAudio: "오디오 저장",
    signalControls: "신호 제어",
    transmissionSpeed: "전송 속도",
    frequencyPitch: "주파수",
    outputVolume: "출력 볼륨",
    signalId: "신호 ID",
    linkSecured: "연결 보안",
    quickReference: "빠른 참조",
    footerAbout: "소개",
    footerMorsePicture: "모스 이미지",
    footerPrivacy: "개인정보",
    footerApi: "API",
    footerGithub: "GitHub",
    screenFlashTitle: "화면 점멸",
    screenFlashBody: "재생 중에는 점과 선의 리듬에 맞춰 화면이 흰색과 검은색으로 번갈아 점멸합니다.",
    enableScreenFlash: "화면 점멸 사용",
    done: "완료",
    configureTitle: "설정",
    showLiveInput: "실시간 입력 표시 (탭 / 길게 누르기)",
    lightTheme: "라이트 테마 (UI)"
  }
};

