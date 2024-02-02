import React from "react"
import { BsSearchAlt2 } from "react-icons/bs"
import Loading from "./Loading"

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("Vegan")
  const [limit, setLimit] = useState("30")
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <Loading />
  }
  return (
    <div className='w-full'>
       <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
        <form className="w-full lg:w-2/4">
            <SearchBar placeholder= "eg. cake, vegan, chicken" handleInputChange= {handleChange}/>
        </form>
    </div>
  )
}

export default Recipes
{/* https://youtu.be/Z3hihUtihDk?t=2908 */}