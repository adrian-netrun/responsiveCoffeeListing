import { useEffect, useState } from 'react'
import { type ICoffeeType } from '../types'
import axios from 'axios'

export default function useFetchData() {
  const coffeeUrl =
    'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
  const [coffee, setCoffee] = useState<ICoffeeType[]>([])
  const [wait, setWaiting] = useState<boolean>(true)
  useEffect(() => {
    axios
      .get(coffeeUrl)
      .then((data) => {
        console.log(data.data)
        setCoffee(data.data)
        setWaiting(!wait)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return { coffee }
}
