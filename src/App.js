import { Routes, Route, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import RecipeDetail from "./pages/RecipeDetail"

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='recipes/:id' element={<RecipeDetail />} />
      </Routes>
    </div>
  )
}

export default App
// https://www.youtube.com/watch?v=Z3hihUtihDk