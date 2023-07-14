import { LanguageBox, TextArea } from '.'
import { type FromLanguage, type Language } from '../../../models/Translator'

interface Props {
  isFromLanguage: boolean
  fromLanguage: FromLanguage
  toLanguage: Language
  setFromLanguage: (language: FromLanguage) => void
  setToLanguage: (language: Language) => void
}

export const SectionLanguage: React.FC<Props> = ({
  isFromLanguage, fromLanguage, toLanguage, setFromLanguage, setToLanguage
}) => {
  return (
    <div className='flex-grow'>
      <LanguageBox
        isFromLanguage={isFromLanguage}
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
        setFromLanguage={setFromLanguage}
        setToLanguage={setToLanguage}
      />
      <TextArea
        isFromLanguage={isFromLanguage}
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
      />
    </div>
  )
}
