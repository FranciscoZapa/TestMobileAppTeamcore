import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  AnswerState,
  AnswerStruct,
  QuestionState,
} from '../../../types/form/formTypes';
import {
  updateValue,
  validateIfAllIsFilled,
} from '../../../utils/arrayFunctions';

interface FormSlice {
  questions: Array<QuestionState>;
  answers: Array<AnswerState>;
  formIsFull: boolean;
}

const initialState: FormSlice = {
  questions: [],
  answers: [],
  formIsFull: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Array<QuestionState>>) => {
      state.answers = action.payload.map(item => ({
        question_id: item.question_id,
        answer_id: '0',
      }));
      state.questions = action.payload;
    },
    setAnswer: (state, action: PayloadAction<AnswerStruct>) => {
      const updatedAnswers = updateValue(
        state.answers,
        action.payload.question_id,
        action.payload.answer_id,
      );
      state.answers = updatedAnswers;
      state.formIsFull = validateIfAllIsFilled(updatedAnswers);
    },
    resetAnswers: state => {
      state.answers = state.questions.map(item => ({
        question_id: item.question_id,
        answer_id: '0',
      }));
      state.formIsFull = initialState.formIsFull;
    },
  },
});

export const {setQuestions, setAnswer, resetAnswers} = formSlice.actions;
export default formSlice.reducer;
