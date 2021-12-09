import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
  GetQuestions = 'GET_QUESTIONS'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.GetQuestions](context: ActionAugments): void
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetQuestions]({ commit }) {
    commit(MutationType.SetQuestions, [
      {
        id: 'test',
        questionTitle: 'Test',
        question: 'Poep'
      }
    ]);
  }
}
