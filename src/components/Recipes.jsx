import React, { useEffect, useState } from "react"
import { BiSearchAlt2 } from "react-icons/bi"
import Loading from "./Loading"
import Searchbar from "./SearchBar"
import RecipeCard from "./RecipeCard"
import Button from "./Button"
import { fetchRecipes } from "../utils"

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("Vegan")
  const [limit, setLimit] = useState(30)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit })
      setRecipes(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handledSearchedRecipe = async (e) => {
    e.preventDefault()
    fetchRecipe()
  }

  const showMore = () => {
    setLimit((prev) => parseInt(prev, 10) + 10)
    fetchRecipe()
  }

  useEffect(() => {
    setLoading(true)
    fetchRecipe()
  }, [])
  if (loading) {
    return <Loading />
  }

  return (
    <div className='w-full'>
      <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
        <form className='w-full lg:w-2/4' onSubmit={handledSearchedRecipe}>
          <Searchbar
            placeholder='eg. Cake, Vegan, Chicken'
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className='text-gray-600' />}
          />
        </form>
      </div>

      {recipes?.length > 0 ? (
        <>
          <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>

          <div className='flex w-full items-center justify-center py-10'>
            <Button
              title='Show More'
              containerStyle='bg-green-800 text-white px-3 py-1 rounded-full text-sm'
              handleClick={showMore}
            />
          </div>
        </>
      ) : (
        <div className='text-white w-full items-center justify-center py-10'>
          <p className='text-center'>No Recipe Found</p>
        </div>
      )}
    </div>
  )
}

export default Recipes

// https://www.youtube.com/watch?v=Z3hihUtihDk&t=3501s
