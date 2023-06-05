import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Loading from './components/Loading'

// we only lazy load loggen in pages since they will be required later, once the user is already logged.
const CharactersListPage = lazy(() => import('./pages/CharactersListPage'))
const CharactersInfoPage = lazy(() => import('./pages/CharactersInfoPage'))

const Home = () => (
  <Suspense fallback={<Loading />}>
    <CharactersListPage />
  </Suspense>
)

const Info = () => (
  <Suspense fallback={<Loading />}>
    <CharactersInfoPage />
  </Suspense>
)

const MainApp = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/info/:characterId" element={<Info />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default MainApp
