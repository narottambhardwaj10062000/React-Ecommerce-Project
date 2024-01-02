import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const CartAmountToggle = ({ amount, setDecrease, setIncrease}) => {
  return (
    <div className='cart-button'>
      <div className='amount-toggle'>
        <button onClick={() => setDecrease(amount)}>
            <FaMinus />
        </button>

        <div className='amount-style'>{ amount }</div>

        <button onClick={() => setIncrease(amount)}>
            <FaPlus />
        </button>

      </div>

    </div>
  )
}

export default CartAmountToggle