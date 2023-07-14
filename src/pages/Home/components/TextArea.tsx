import { type FromLanguage, type Language } from '../../../models/Translator'

interface Props {
  isFromLanguage: boolean
  fromLanguage: FromLanguage
  toLanguage: Language
}

export const TextArea: React.FC<Props> = ({ isFromLanguage, fromLanguage, toLanguage }) => {
  return (
    <div>{isFromLanguage ? fromLanguage : toLanguage}</div>
  )
}
