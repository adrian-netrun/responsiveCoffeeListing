import { useEffect, useState, type SetStateAction } from 'react'
import axios from 'axios'

interface ICoffeeType {
  id: number
  image: string
  name: string
  popular: string
  price: string
  rating: number
  votes: number
}

export default function fetchData() {
  const coffeeUrl =
    'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
  const [coffee, setCoffee] = useState<ICoffeeType[]>([])
  const [wait, setWaiting] = useState<boolean>(true)
  useEffect(() => {
    axios
      .get(coffeeUrl)
      .then((data) => {
        setCoffee(data.data)
        setWaiting(!wait)
      })
      .catch((error) => {
        console.log(error)
        setWaiting(!wait)
      })
  }, [])

  return { coffee, wait }
}
