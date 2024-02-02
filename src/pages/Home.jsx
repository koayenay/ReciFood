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

      <section
        id='recipes'
        className='md:max-w-[1440px] mx-auto px-4 md:px-20'
      ></section>
    </main>
  )
}

export default Home
