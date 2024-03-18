import {DeckType} from './decks-api.ts';

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: UnionActionType): DecksState => {
  switch (action.type) {
    case 'GET_DECKS': {
      return {
        ...state,
        decks: action.decks
      }
    }
    case 'CREATE_DECK':
      return {...state, decks: [action.deck, ...state.decks]}
    default:
      return state
  }
}

type UnionActionType = DecksActions | createDeckActionType

type DecksActions = ReturnType<typeof getDecksAC>
type createDeckActionType = ReturnType<typeof createDeckAC>


export const getDecksAC = (decks: DeckType[]) => ({type: 'GET_DECKS', decks} as const)
export const createDeckAC = (deck: DeckType) => ( {type: 'CREATE_DECK', deck} as const )