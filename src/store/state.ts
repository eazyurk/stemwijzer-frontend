export type Question = {
  id: string
  questionTitle: string
  question: string
}

export type QuestionAnswer = {
  question: string
  questionAnswer: number
}

export type State = {
  questions: Question[]
  questionAnswers: QuestionAnswer[]
}

export const state: State = {
  questions: [],
  questionAnswers: []
}
