import "./App.css"
import Header from "./compoment/UI/Header"
import Searchh from "./compoment/UI/Searchh"
import axios from "axios"
import React, { useState, useEffect } from "react"
import CaracterGrid from "./compoment/caracter/CaracterGrid"

const App = () => {
  const [isloading, setIsloading] = useState(true)
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const resualt = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(resualt.data)
      setItems(resualt.data)
      setIsloading(true)
    }
    fetchItems()
  }, [query])

  const queryFunction = (q) => {
    setQuery(q)
  }

  return (
    <div className="App">
      <Header />
      <CaracterGrid items={items} isloading={isloading} />
      <Searchh getQuery={queryFunction} />
    </div>
  )
}

export default App
