import React from 'react'
import useFetchData from '../hooks/useFetchData'

function Main() {
  const { coffee, wait } = useFetchData()
  return <>{!wait ? <h1>hello</h1> : null}</>
}

export default Main
