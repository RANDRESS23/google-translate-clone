import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from '../constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface Translator {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export enum TRANSLATOR_ACTION_TYPES {
  SET_CHANGE_LANGUAGE = 'SET_CHANGE_LANGUAGE',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_RESULT = 'SET_RESULT'
}

export type ACTION =
  { type: TRANSLATOR_ACTION_TYPES.SET_CHANGE_LANGUAGE } |
  { type: TRANSLATOR_ACTION_TYPES.SET_FROM_LANGUAGE, payload: FromLanguage } |
  { type: TRANSLATOR_ACTION_TYPES.SET_TO_LANGUAGE, payload: Language } |
  { type: TRANSLATOR_ACTION_TYPES.SET_FROM_TEXT, payload: string } |
  { type: TRANSLATOR_ACTION_TYPES.SET_RESULT, payload: string }

export interface ACTIONS_DISPATCH {
  setChangeLanguage: () => void
  setFromLanguage: (payload: FromLanguage) => void
  setToLanguage: (payload: Language) => void
  setFromText: (payload: string) => void
  setResult: (payload: string) => void
}

export type STORE = Translator & ACTIONS_DISPATCH
