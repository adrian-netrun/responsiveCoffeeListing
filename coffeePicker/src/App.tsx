import { useState } from 'react'
import ShopFront from './components/Shopfront'
import Header from './components/Header'
import useFetchData from './hooks/useFetchData'
import './App.css'

function App() {
  const coffeeData = useFetchData()
  const [filter, setFilter] = useState<boolean>(false)

  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
      <ShopFront coffeeData={coffeeData} filter={filter} />
    </>
  )
}

export default App
