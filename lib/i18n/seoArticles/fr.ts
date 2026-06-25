import type { SeoArticleContent } from "./types";

const fr: SeoArticleContent = {
  heading: "Traducteur de code Morse : pratiquer le CW à la française",
  aboutLinkLabel: "À propos",
  sections: [
    {
      paragraphs: [
        "En France, en Belgique et en Suisse romande, le **code Morse international** reste associé à la tradition des radioamateurs et à l’histoire des télécommunications maritimes. Le CW n’a pas disparu des bandes amateur : il est encore choisi pour les contacts en faible signal et pour le plaisir d’une mode « artisanale » où l’oreille compte autant que l’équipement.",
        "Ce **traducteur de code Morse** gratuit vise les candidats au brevet FRA, les membres de clubs REF ou UBA, et toute personne qui souhaite **convertir du texte en Morse** (et inversement) sans installer de logiciel dédié."
      ]
    },
    {
      heading: "Pourquoi un décodeur et un encodeur réunis",
      paragraphs: [
        "Un **décodeur Morse** sert à vérifier une copie : vous collez des points et des traits, vous lisez le texte obtenu, et vous voyez tout de suite si un espace manquant a transformé un mot en charabia. L’encodage inverse permet de préparer un message, de l’écouter, puis d’ajuster vitesse et hauteur du ton avant une séance d’entraînement à l’écoute.",
        "Cette boucle rapide est précieuse pour les cours associatifs et pour la préparation solo chez soi, surtout quand on n’a pas encore un partenaire CW disponible à l’autre bout du fil."
      ]
    },
    {
      heading: "Morse des phares, marine et radio amateur",
      paragraphs: [
        "Le Morse évoque encore les feux de phares et les communications côtières du XXe siècle. Aujourd’hui, le alphabet **ITU** utilisé en radio amateur diffère du vieux **Morse américain** des télégraphes ferroviaires : les durées et certains signes ne correspondent pas. Si vous travaillez sur des archives ferroviaires, il vous faudra un outil historique ; ici, nous suivons la norme internationale des examens et du trafic CW contemporain.",
        "Les opérateurs français distinguent souvent ces contextes ; mélanger les tables est la source la plus fréquente d’erreurs chez les débutants."
      ]
    },
    {
      heading: "Méthode d’entraînement en sessions courtes",
      paragraphs: [
        "Les progrès viennent rarement des marathons de deux heures. Dix à quinze minutes par jour, avec un WPM modeste mais régulier, donnent de meilleurs résultats qu’une seule longue séance le week-end. Notez les lettres qui se ressemblent à l’oreille — les groupes rythmiques proches — et revenez-y en fin de semaine.",
        "Utilisez le traducteur pour générer des phrases courtes (indicatifs, météo simplifiée, Q codes courants) puis vérifiez votre copie avant d’afficher la solution."
      ]
    },
    {
      heading: "Réglages qui changent la perception",
      paragraphs: [
        "La vitesse en mots par minute structure les espaces entre lettres et mots. Le pitch (fréquence du ton) influence le confort à long terme : trop aigu fatigue, trop grave se noie dans le bruit de fond. Expérimentez avec le volume et la répétition audio jusqu’à trouver un réglage stable pour votre casque ou vos haut-parleurs.",
        "L’objectif n’est pas de battre un record, mais d’atteindre une reconnaissance quasi automatique, comme on reconnaît un mot parlé sans l’épeler mentalement."
      ]
    },
    {
      heading: "Un outil ouvert, maintenu par un développeur indépendant",
      paragraphs: [
        "Morse Code World est un projet personnel basé au Sri Lanka, accessible en français pour l’interface et ce guide. Le blog et les outils complémentaires (décodeur audio, traduction depuis image) prolongent l’usage au-delà du simple champ texte.",
        "Pour en savoir plus sur l’auteur et le projet, consultez la page **À propos** ci-dessous."
      ]
    }
  ]
};

export default fr;
