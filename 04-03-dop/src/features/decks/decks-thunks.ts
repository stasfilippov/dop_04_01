import { Dispatch } from 'redux'
import {_ErrorType, decksAPI, ErrorType, UpdateDeckParams} from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import {setAppError, setAppStatus} from '../../app/app-reducer.ts';
import axios from 'axios';

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    if (axios.isAxiosError<ErrorType>(e)) {
      dispatch(setAppError(e.message))
      dispatch(setAppStatus('failed'))
    } else {
      dispatch(setAppError(e))
      dispatch(setAppStatus('failed'))
    }
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  return decksAPI.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
