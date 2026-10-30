import type { Language } from '@/data/translations';

// Words of the two diagrams under the problems of MAGBO Access Control (src/components/ProblemDiagram.tsx), approved
// on the prototype on 30/10/2026. No invented figure: the meals diagram shows only what one refused pass changed
// (+1 meal, then +0), and the clock diagram shows the real case, a pass at 14:26 recorded at 17:26.

export type DiagramKind = 'meals' | 'clock';

export interface DiagramText {
      before: string;
      after: string;
      /* the meals: the terminal refuses, MAGBO counted a meal anyway, then sends the pass to the refused attempts */
      terminal: string;
      refused: string;
      studentId: string;
      meals: string;
      neverEaten: string;
      refusals: string;
      /* the clock: a container on UTC recorded the pass three hours late */
      pass: string;
      passTime: string;
      container: string;
      recorded: string;
      wrongTime: string;
      late: string;
}

export const DIAGRAMS: Record<Language, DiagramText> = {
      en: {
            before: "BEFORE",
            after: "AFTER",
            terminal: "terminal",
            refused: "refused",
            studentId: "student ID",
            meals: "MEALS COUNTED",
            neverEaten: "nobody ate it",
            refusals: "REFUSED ATTEMPTS",
            pass: "pass",
            passTime: "14:26",
            container: "CONTAINER",
            recorded: "RECORDED",
            wrongTime: "17:26",
            late: "three hours late",
      },
      pt: {
            before: "ANTES",
            after: "DEPOIS",
            terminal: "terminal",
            refused: "recusado",
            studentId: "ID do aluno",
            meals: "REFEIÇÕES CONTADAS",
            neverEaten: "nunca aconteceu",
            refusals: "TENTATIVAS RECUSADAS",
            pass: "passagem",
            passTime: "14h26",
            container: "CONTÊINER",
            recorded: "GRAVADO",
            wrongTime: "17h26",
            late: "três horas a mais",
      },
      fr: {
            before: "AVANT",
            after: "APRÈS",
            terminal: "terminal",
            refused: "refusé",
            studentId: "ID élève",
            meals: "REPAS COMPTÉS",
            neverEaten: "repas jamais pris",
            refusals: "TENTATIVES REFUSÉES",
            pass: "passage",
            passTime: "14\u00a0h\u00a026", // with no-break spaces, as in the text beside the drawing
            container: "CONTENEUR",
            recorded: "ENREGISTRÉ",
            wrongTime: "17\u00a0h\u00a026",
            late: "trois heures de trop",
      },
};
