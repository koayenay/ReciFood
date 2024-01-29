import React from "react"
import Header from "../components/Header"

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header
        title={
          <p>
            Taste the World with <br /> ReciFood
          </p>
        }
        type='home'
      />
    </main>
  )
}

export default Home
// https://youtu.be/Z3hihUtihDk?t=1011
