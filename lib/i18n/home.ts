export type HomeLocale = "en" | "es";

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
  }
};

