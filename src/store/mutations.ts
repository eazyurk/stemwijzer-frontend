import { MutationTree } from 'vuex'
import { State, Question, QuestionAnswer } from './state'

export enum MutationType {
  SetQuestions = 'SET_QUESTIONS',
  CreateQuestionAnswer = 'CREATE_QUESTION_ANSWER'
}

export type Mutations = {
  [MutationType.SetQuestions](state: State, questions: Question[]): void
  [MutationType.CreateQuestionAnswer](state: State, questionAnswer: QuestionAnswer): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetQuestions](state, questions) {
    state.questions = questions
  },
  [MutationType.CreateQuestionAnswer](state, questionAnswer) {
    state.questionAnswers.unshift(questionAnswer)
  },
}
