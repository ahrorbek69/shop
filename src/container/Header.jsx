import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="ui pointing menu" style={{padding: "4px 30px"}}>
            <a className='item active'>
                Axa USA
            </a>
            <div className="right menu" >
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Header