import React from 'react'
import { useSelector } from 'react-redux'

const Productcomponents = () => {

    const products = useSelector(state => state.allProducts.product)
    const {id,title,category} = products

  return (
    <div className="four column wide" style={{margin: "10px 30px"}}>
        <div className="ui link cards">
            <div className="card">
                <div className="image"></div>
                <div className="content">
                    <div className="header">{title}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productcomponents