import React from 'react'
import '../css/currency.css' 
import { FaRegArrowAltCircleRight } from "react-icons/fa";

 function Currency () {
  return (
    <div>
        <div className='currency-div'>
          <div style={{marginTop:'-40px',fontFamily:'arial'}}>
            <h3>DÖVİZ KURU</h3>
          </div>
          <div>

                      
          <input type="number" className='amount' />
            <select className='from-currency-option'>
              <option>USD</option>
              <option>EUR</option>
              <option>TL</option>
            </select>
            <FaRegArrowAltCircleRight  style={{fontSize: '25px', marginRight:'10px'}}/>

            <select className='to-currency-option'>
            <option>TL</option>
              <option>USD</option>
              <option>EUR</option>
            </select>

            <input type="number" className='result' />

          </div>

        </div>
    </div>
  )
}

export default Currency