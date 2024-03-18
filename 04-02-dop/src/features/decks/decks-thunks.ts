import {Dispatch} from 'redux';
import {createDeckAC, getDecksAC} from './decks-reducer.ts';
import {createDeckParams, decksApi} from './decks-api.ts';
import {useAppDispatch} from '../../app/store.ts';

export const getDecksTC = () => (dispatch: Dispatch) => {
	decksApi.getDecks().then((res) => {
		dispatch(getDecksAC(res.data.items))
	})
}

export const createDeckTC = (params: createDeckParams) => (dispatch: Dispatch) => {
	return decksApi.createDeck(params).then(res => {
		dispatch(createDeckAC(res.data))
	})
}