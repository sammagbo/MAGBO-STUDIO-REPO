import type { Language } from '@/data/translations';

// The story the hero tells while the visitor scrolls, in five steps: from the paper student card of 2020 to the
// canteen that counts a meal only for a validated pass. The steps were approved by Sam on 30/10/2026; the other
// words are the labels drawn in the picture (src/components/StoryObject.tsx).
export interface StoryText {
      steps: string[];
      card: string;
      canteen: string;
      validated: string;
      counted: string;
      refused: string;
      noMeal: string;
      live: string;
      since: string;
}

export const STORY: Record<Language, StoryText> = {
      en: {
            steps: [
                  "In 2020, when I arrived at the school, the student card was made of paper.",
                  "First, I set up smart cards for students, parents and staff.",
                  "Then I connected the terminals at the gate, the cafeteria and the library to the system.",
                  "Everyone passes with their face or their badge, as they prefer.",
                  "A meal is only counted when the pass is validated.",
            ],
            card: "STUDENT CARD",
            canteen: "CAFETERIA",
            validated: "Pass validated",
            counted: "meal counted",
            refused: "Pass refused",
            noMeal: "no meal",
            live: "In production",
            since: "since July 2026",
      },
      pt: {
            steps: [
                  "Em 2020, quando cheguei à escola, a carteirinha dos alunos era de papel.",
                  "Primeiro, implantei cartões com chip para alunos, pais e funcionários.",
                  "Depois, liguei ao sistema os terminais do portão, da cantina e da biblioteca.",
                  "Cada um passa com o rosto ou com o crachá, como preferir.",
                  "Uma refeição só é contada se a passagem for validada.",
            ],
            card: "CARTEIRINHA ESCOLAR",
            canteen: "CANTINA",
            validated: "Passagem validada",
            counted: "refeição contada",
            refused: "Passagem recusada",
            noMeal: "nenhuma refeição",
            live: "Em produção",
            since: "desde julho de 2026",
      },
      fr: {
            steps: [
                  "En 2020, à mon arrivée au lycée, la carte d'élève était en papier.",
                  "D'abord, j'ai mis en place des cartes à puce pour les élèves, les parents et le personnel.",
                  "Ensuite, j'ai relié au système les terminaux du portail, de la cantine et du CDI.",
                  "Chacun passe avec son visage ou son badge, comme il préfère.",
                  "Un repas n'est compté que si le passage est validé.",
            ],
            card: "CARTE D'ÉLÈVE",
            canteen: "CANTINE",
            validated: "Passage validé",
            counted: "repas compté",
            refused: "Passage refusé",
            noMeal: "aucun repas",
            live: "En production",
            since: "depuis juillet 2026",
      },
};
