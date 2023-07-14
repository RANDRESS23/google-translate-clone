import { FormControl, Select, MenuItem, type SelectChangeEvent } from '@mui/material'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../../../constants'
import { type FromLanguage, type Language } from '../../../models/Translator'

interface Props {
  isFromLanguage: boolean
  fromLanguage: FromLanguage
  toLanguage: Language
  setFromLanguage: (language: FromLanguage) => void
  setToLanguage: (language: Language) => void
}

export const LanguageBox: React.FC<Props> = ({
  isFromLanguage, fromLanguage, toLanguage, setFromLanguage, setToLanguage
}) => {
  const languages = Object.values(SUPPORTED_LANGUAGES)

  const handleChange = (event: SelectChangeEvent): void => {
    if (isFromLanguage) {
      const languageSelected: FromLanguage = event.target.value as FromLanguage
      setFromLanguage(languageSelected)
    } else {
      const languageSelected: Language = event.target.value as Language
      setToLanguage(languageSelected)
    }
  }

  return (
    <FormControl fullWidth>
      <Select
        id="demo-simple-select"
        value={isFromLanguage ? fromLanguage : toLanguage}
        onChange={handleChange}
        sx={{ color: '#6593d4' }}
        style={{ border: '1px solid #989ea4', borderRadius: '10px' }}
      >
        { isFromLanguage && <MenuItem value={AUTO_LANGUAGE}>Detectar idioma</MenuItem> }
        {
          languages.map((language) => {
            return (
              <MenuItem
                key={language}
                value={language}
              >
                {language}
              </MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}
