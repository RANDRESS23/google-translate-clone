import { ChangeLanguage, SectionLanguage } from './components'
import { useStore } from '../../hooks/useStore'

export const Home: React.FC = () => {
  const {
    fromLanguage, toLanguage, setFromLanguage, setToLanguage, setChangeLanguage
  } = useStore()

  return (
    <main className='w-3/5 m-auto flex justify-between items-center gap-4'>
      <SectionLanguage
        isFromLanguage={true}
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
        setFromLanguage={setFromLanguage}
        setToLanguage={setToLanguage}
      />
      <ChangeLanguage
        fromLanguage={fromLanguage}
        setChangeLanguage={setChangeLanguage}
      />
      <SectionLanguage
        isFromLanguage={false}
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
        setFromLanguage={setFromLanguage}
        setToLanguage={setToLanguage}
      />
    </main>
  )
}
