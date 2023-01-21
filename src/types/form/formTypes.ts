export type QuestionState = {
  answers: Array<AnswerStruct>;
  question: string;
  question_id: string;
};

export type AnswerState = {
  question_id: string;
  answer_id: string;
};

export type AnswerStruct = {
  answer: string;
  answer_id: string;
  question_id: string;
};
