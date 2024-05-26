// //
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchProducts = () => {
    return (
        <div className='serchproducts-main-container'>
            <div className='serchproducts-container'>
                <h1 className='serchproducts-h1'>Branded & imported makeups</h1>
                <p className='serchproducts-p'>Easiest and cheapest way to get your branded & imported makeups</p>
                <div className='serchproducts-input-search'>
                    <input className='serchproducts-input' type="text" placeholder='Search your products from here' />
                       <button className='serchproducts-button'> <IoSearchSharp  className='IoSearchSharp'/> Search </button>
                </div>
            </div>

        </div>
    )
}

export default SearchProducts
