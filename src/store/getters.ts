import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  answeredCount(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  answeredCount(state): number {
    return state.questionAnswers.length
  }
}
