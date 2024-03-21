export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET_APP_STATUS':
      return {...state, status: action.status}
    case 'APP/SET_APP_ERROR':
      return {...state, error: action.error}
    default:
      return state
  }
}

export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET_APP_STATUS', status} as const)
export const setAppError = (error: any) => ({type: 'APP/SET_APP_ERROR', error} as const)

export type SetAppStatusType = ReturnType<typeof setAppStatus>
export type SetAppErrorType = ReturnType<typeof setAppError>

type ActionsType = SetAppStatusType | SetAppErrorType
