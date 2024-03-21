import {Dispatch} from 'redux';
import {ErrorType} from '../../features/decks/decks-api.ts';
import {setAppError, setAppStatus} from '../../app/app-reducer.ts';

export const handleNetworkError = (dispatch: Dispatch, error: string) => {
	dispatch(setAppError(error))
	dispatch(setAppStatus('failed'))
}