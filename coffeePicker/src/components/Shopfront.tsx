import { type ICoffeeType } from '../types'
import star from '../assets/star.png'
import greyStar from '../assets/greyStar.png'
import './shopfront.css'

interface IData {
  data: ICoffeeType
  filter: boolean
}

function CoffeeTile({ data, filter }: IData) {
  if (filter && data.available === false) {
    ;<div className="coffee_tile" key={data.name}>
      <div className="content">
        <img src={data.image} alt="" />
        <div className="content_name_price">
          <h4 className="coffee_name">{data.name}</h4>
          <p className="coffee_price">{data.price}</p>
        </div>
        {data.popular ? <p className="content_popular">Popular</p> : null}
        <div className="content_meta_data">
          {data.votes > 0 ? (
            <img className="star" src={star} />
          ) : (
            <img className="star" src={greyStar} />
          )}
          <p className="coffee_rating">{data.rating}</p>
          {data.rating > 0 ? (
            <p className="coffee_votes">({data.votes} votes)</p>
          ) : (
            <p className="coffee_votes">No Ratings</p>
          )}
        </div>
      </div>
    </div>
  } else
    return (
      <div className="coffee_tile" key={data.name}>
        <div className="content">
          <img src={data.image} alt="" />
          <div className="content_name_price">
            <h4 className="coffee_name">{data.name}</h4>
            <p className="coffee_price">{data.price}</p>
          </div>
          {data.popular ? <p className="content_popular">Popular</p> : null}
          <div className="content_meta_data">
            {data.votes > 0 ? (
              <img className="star" src={star} />
            ) : (
              <img className="star" src={greyStar} />
            )}
            <p className="coffee_rating">{data.rating}</p>
            {data.rating > 0 ? (
              <p className="coffee_votes">({data.votes} votes)</p>
            ) : (
              <p className="coffee_votes">No Ratings</p>
            )}
          </div>
        </div>
      </div>
    )
}

function ShopFront({ coffeeData, filter }: any) {
  return (
    <div className="flex_container">
      {!coffeeData.wait
        ? coffeeData.coffee.map((itm: ICoffeeType) => (
            <CoffeeTile key={itm.id} data={itm} filter={filter} />
          ))
        : null}
    </div>
  )
}

export default ShopFront
