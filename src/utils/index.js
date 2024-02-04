export async function fetchRecipes(filter) {
  const { query, limit } = filter

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`

  const response = await fetch(url)

  const data = await response.json()
  console.log(data)
  return data
}
