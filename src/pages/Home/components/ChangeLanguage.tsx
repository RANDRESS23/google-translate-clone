import { AUTO_LANGUAGE } from '../../../constants'
import { type FromLanguage } from '../../../models/Translator'

interface Props {
  fromLanguage: FromLanguage
  setChangeLanguage: () => void
}

export const ChangeLanguage: React.FC<Props> = ({ fromLanguage, setChangeLanguage }) => {
  const isDisabledChange = fromLanguage === AUTO_LANGUAGE

  const handleClick = (): void => {
    setChangeLanguage()
  }

  return (
    <button onClick={handleClick}>
      <svg focusable="false" width={24} height={24} className={isDisabledChange ? 'fill-[#606064]' : 'fill-[#a5a9ad]'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
      </svg>
    </button>
  )
}
