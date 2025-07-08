import React, { useState } from 'react'
import './Header.css'

interface ButtonTypes {
  style: {}
  content: string
  active: boolean
  handleChange: any
}

function CustomButton({ style, content, active, handleChange }: ButtonTypes) {
  if (active) {
    return (
      <div
        className="content-filter"
        style={style}
        onClick={active ? handleChange : null}
      >
        {content}
      </div>
    )
  } else
    return (
      <div
        className="content-filter"
        style={undefined}
        onClick={!active ? handleChange : null}
      >
        {content}
      </div>
    )
}

interface HeaderProps {
  filter: boolean
  setFilter: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ filter, setFilter }: HeaderProps) {
  const [isActive, setIsActive] = useState<boolean>(true)
  const selectedStyle = {
    backgroundColor: '#4d5562',
    padding: '0.4rem 0.8rem',
    borderRadius: '0.4rem',
  }

  const handleFilterChange = () => {
    setIsActive(!isActive)
    setFilter(!filter)
  }

  return (
    <div className="header_container">
      <h1>Our Collections</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different types and origins, expertly roasted in small batches and
        shipped weekly
      </p>
      <div className="button_container">
        <CustomButton
          content={'All Products'}
          style={selectedStyle}
          active={isActive}
          handleChange={handleFilterChange}
        />
        <CustomButton
          content={'Available'}
          style={selectedStyle}
          active={!isActive}
          handleChange={handleFilterChange}
        />
      </div>
    </div>
  )
}
