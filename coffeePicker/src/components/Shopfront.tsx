import React from 'react'
import { type ICoffeeType } from '../types'
import useFetchData from '../hooks/useFetchData'
import './shopfront.css'

interface IData {
  data: ICoffeeType
}

function CoffeeTile({ data }: IData) {
  console.log(data.id)
  return (
    <div className="coffee_tile" key={data.name}>
      <div className="content">
        <img src={data.image} alt="" />
        <h4 className="coffee_name">{data.name}</h4>
        {data.popular ? <p className="content_popular">Popular</p> : null}
        <p>{data.rating}</p>
        <p>{data.votes}</p>
        <p>{data.price}</p>
      </div>
    </div>
  )
}

function ShopFront() {
  const { coffee, wait } = useFetchData()
  return (
    <div className="flex_container">
      {!wait
        ? coffee.map((itm) => <CoffeeTile key={itm.id} data={itm} />)
        : null}
    </div>
  )
}

export default ShopFront
