import { useReducer } from 'react'
import { type ACTION, TRANSLATOR_ACTION_TYPES, type Translator, type STORE, type Language, type FromLanguage } from '../models/Translator'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'

const initialState: Translator = {
  fromLanguage: 'auto',
  toLanguage: SUPPORTED_LANGUAGES.en as Language,
  fromText: '',
  result: '',
  loading: false
}

const reducer = (state: Translator, action: ACTION): Translator => {
  const { type } = action
  const {
    SET_CHANGE_LANGUAGE,
    SET_FROM_LANGUAGE,
    SET_TO_LANGUAGE,
    SET_FROM_TEXT,
    SET_RESULT
  } = TRANSLATOR_ACTION_TYPES

  if (type === SET_CHANGE_LANGUAGE) {
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      fromText: state.result,
      result: state.fromText
    }
  }

  if (type === SET_FROM_LANGUAGE) {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === SET_TO_LANGUAGE) {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === SET_FROM_TEXT) {
    return {
      ...state,
      fromText: action.payload
    }
  }

  if (type === SET_RESULT) {
    return {
      ...state,
      result: action.payload
    }
  }

  return state
}

export const useStore = (): STORE => {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const setChangeLanguage = (): void => {
    dispatch({ type: TRANSLATOR_ACTION_TYPES.SET_CHANGE_LANGUAGE })
  }

  const setFromLanguage = (payload: FromLanguage): void => {
    dispatch({ type: TRANSLATOR_ACTION_TYPES.SET_FROM_LANGUAGE, payload })
  }

  const setToLanguage = (payload: Language): void => {
    dispatch({ type: TRANSLATOR_ACTION_TYPES.SET_TO_LANGUAGE, payload })
  }

  const setFromText = (payload: string): void => {
    dispatch({ type: TRANSLATOR_ACTION_TYPES.SET_FROM_TEXT, payload })
  }

  const setResult = (payload: string): void => {
    dispatch({ type: TRANSLATOR_ACTION_TYPES.SET_RESULT, payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    setChangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
