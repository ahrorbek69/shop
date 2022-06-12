import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <div className="ui pointing menu" style={{padding: "4px 30px"}}>
                        <Link to='/' className="ui animated button" tabIndex="0">
                <div className="visible content">Next</div>
                <div className="hidden content">
                    <i className="right arrow icon"></i>
                </div>
                </Link>
            <div className="right menu">
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
                </div>
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
                </div>
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
                </div>
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
                </div>
            </div>
            <div className="right menu">
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
                </div>
            </div>
            
        </div>
            
  )
}

export default Header