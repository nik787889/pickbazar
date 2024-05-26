
import React, { useState } from 'react'
import { IoBagCheck } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { Sidebar, Menu } from 'react-pro-sidebar';
import { EmptyBag } from '../../Images/EmptyBag';
import { BsBagCheckFill } from "react-icons/bs";

const CartComp = () => {

    const [toggled, setToggled] = useState(false);


    return (

        <div className="cartcomp-main-container">
            <div className="cartcomp-container">
                <Sidebar rtl onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                    <div className="cart-main-container">
                        <div className="cart-container">
                            <div>
                                <div className="cart-header">
                                    <h2 className="close-button" onClick={() => setToggled(false)}><MdCancel /></h2>
                                    <span className="item-count"> <span>Item</span> <div>0</div> <span><BsBagCheckFill style={{ marginTop: "-8px", fontSize: "23px" }} /></span> </span>
                                </div>
                            </div>

                            <div className="cart-body">
                                <div className="empty-cart">
                                    <div className="cart-icon"><EmptyBag /></div>
                                    <p>No products found</p>
                                </div>
                            </div>
                            <div className="cart-footer">
                                <button className='cart-checkout-btn'>
                                    <span>$0.00</span>
                                </button>
                                <span className='checkout'>Checkout</span>
                            </div>
                        </div>
                    </div>
                </Sidebar>

                <main style={{ display: 'flex', padding: "2px" }} >
                    <button onClick={() => setToggled(true)} className='cartcomp-main-btn '>
                        <span className='cartcomp-span'><span className='bag-icon'><IoBagCheck /> </span>0 Item</span>
                        <div className='cartcomp-price'>
                            <span>$0.00</span>
                        </div>
                    </button>
                </main>
            </div>
        </div>
    )
}

export default CartComp
