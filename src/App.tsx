import NormalizeStyles from 'app/utils/style/NormalizeStyles'
import BaseStyles from 'app/utils/style/BaseStyles'
import './App.css'
import './assets/style/fontStyles.css'
import { AppRouter } from './app/router'

function App() {

  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <AppRouter />
    </>
  )
}

export default App
