import './App.css'
import { Route, Routes } from 'react-router'
import AllUsers from './routes/AllUsers'
import Dashboard from './routes/Dashboard'
import SideBar from './resusableComponents/SideBar'
import Recipes from './routes/Recipes'
import Restaurants from './routes/Restaurants'

function App() {
  return (
    <>
      <Routes>

        {/* Route for Dashboard */}
        <Route
          path={"/"}
          element={
            <Dashboard />
          }
        />

        {/* Route for Users to  preview all users */}
        <Route path={"/users"}
          element={
            <AllUsers />
          } />

        {/* Route for all recipes to preview */}
        <Route
          path={"/recipes"}
          element={
            <Recipes />
          } />

        {/* Route for all the existing Restaurants to preview  */}
        <Route path={"/restaurants"}
          element={
            <Restaurants />
          } />
      </Routes>
    </>
  )
}

export default App
