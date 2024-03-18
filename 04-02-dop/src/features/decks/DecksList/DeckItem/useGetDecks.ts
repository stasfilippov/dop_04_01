import {useAppDispatch, useAppSelector} from '../../../../app/store.ts';
import {useEffect} from 'react';
import {getDecksTC} from '../../decks-thunks.ts';

export const useGetDecks = () => {
	const dispatch = useAppDispatch()
	const decks = useAppSelector(state => state.decksReducer.decks)


	useEffect(() => {
		dispatch(getDecksTC())
	}, [])

	return { decks }
}