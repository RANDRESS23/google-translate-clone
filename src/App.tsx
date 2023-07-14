import { Home } from './pages/Home'
import { Typography } from '@mui/material'
import './App.css'

export default function App (): JSX.Element {
  return (
    <div className='pt-5 flex flex-col gap-5'>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center', color: '#fff' }}
      >
        Google Translate
      </Typography>
      <Home />
    </div>
  )
}
