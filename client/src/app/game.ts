export interface Game {
  _id: string;
  prompt: string;
  players: string;
  responses: string;
  judge: number;
  scores: string;
  discardLast: boolean;
  winnerBecomesJudge: boolean;
}


