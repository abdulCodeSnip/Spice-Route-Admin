import './App.css'
import { Route, Routes } from 'react-router'
import AllUsers from './routes/AllUsers'
import Dashboard from './routes/Dashboard'
import SideBar from './resusableComponents/SideBar'
import Recipes from './routes/Recipes'
import Restaurants from './routes/Restaurants'
import AddNewRecipe from './components/recipes/add recipe/AddNewRecipe'
import AddNewRestaurant from './routes/Add-New-Restaurant'
import Menus from './routes/Menus'

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

        {/* Route for Adding new Recipe to the server */}
        <Route path={"/add-new-recipe"}
          element={
            <AddNewRecipe />
          }
        />

        {/* Route for Adding new restaurant to the server */}
        <Route path={"/add-new-restaurant"}
          element={<AddNewRestaurant />}
        />

        {/* Route for all menus, this can have the link for a route to add new menu to a restaurant */}
        <Route
          path={"/menu"}
          element={<Menus />}
        />
      </Routes>
    </>
  )
}

export default App
