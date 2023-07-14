import { Reducer } from 'react'
import { IUser } from '../../types/IUser'
import { EActions } from '../rootReducer'
import {
  IChangeLikeUserPageAction,
  ISetCurrentPageAction,
  IUsersRequestAction,
  IUsersRequestErrorAction,
  IUsersRequestSuccessAction,
} from './usersActions'

export type TDataLike = {
  id: number
  like: boolean
}
export interface IUsersState {
  page: number
  data: IUser[]
  total_pages: number
  error: string
  loading: boolean
  dataLike: TDataLike[]
}

type TUsersActions =
  | IUsersRequestAction
  | IUsersRequestSuccessAction
  | IUsersRequestErrorAction
  | ISetCurrentPageAction
  | IChangeLikeUserPageAction

export const usersReducer: Reducer<IUsersState, TUsersActions> = (state, action) => {
  switch (action.type) {
    case EActions.USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case EActions.USERS_REQUEST_SUCCESS:
      return {
        ...state,
        page: action.usersData.page,
        data: action.usersData.data,
        total_pages: action.usersData.total_pages,
        loading: false,
      }

    case EActions.USERS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    case EActions.SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      }

    case EActions.CHANGE_LIKE_USER:
      return {
        ...state,
        dataLike: [action.payload],
      }

    default:
      return state
  }
}

