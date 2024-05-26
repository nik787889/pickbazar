
import React, { useState } from 'react'
import HeaderSidebar from './HeaderSidebar'
import { GoSearch } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";

///////////////////////////////////
import logoImg from '../../Images/Logo-new.png'
import { BsFilterLeft } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Signin from './Signin';
import { EmptyBag } from '../../Images/EmptyBag';
import { BsBagCheckFill } from "react-icons/bs";

import CartComp from './CartComp';

const Footer = () => {

    const [isFooterSearch, setIsFooterSearch] = useState(false)

    const [isFooterSearchBg, setIsFooterSearchBg] = useState(false)

    const [toggled, setToggled] = useState(false);

    const [cartToggled, setCartToggled] = useState(false);

    const [isLogin, setLogin] = useState(false)


    const handleSearch = () => {
        setIsFooterSearch(!isFooterSearch)
        setIsFooterSearchBg(false)
    }

    const handleIsLogin = (data) => {
        setLogin(data)
    }






    return (
        <>

            <div className='footer-main-container'>

                {/* <HeaderSidebar /> */}

                {/* /////////////////////////////////////////////   HeaderSidebar  ///////////////////////////////////////////// */}

                <div className='footer-sidebar-container'>
                    <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                        <div className='menu-container'>
                            <Menu className='css-dip3t8'>
                                <div className='logoImg-container'>
                                    <span>
                                        <img src={logoImg} alt="" className='logoImg' />
                                    </span>
                                    <h4 onClick={() => setToggled(false)}><MdCancel /></h4>
                                </div>
                                <div className='menuItem-container'>
                                    <MenuItem> Shop</MenuItem>
                                    <MenuItem> Offers</MenuItem>
                                    <MenuItem> Contact</MenuItem>
                                    <MenuItem> Flash Sale</MenuItem>
                                    <MenuItem> Manufacturers/Publishers</MenuItem>
                                    <MenuItem> Authers</MenuItem>
                                    <MenuItem> FAQ</MenuItem>
                                    <MenuItem> Terms & Condition</MenuItem>
                                    <MenuItem> Customer Refund Policy</MenuItem>
                                    <MenuItem> Vendor Refund Policy</MenuItem>
                                </div>
                            </Menu>
                        </div>
                    </Sidebar>
                    <main style={{ display: 'flex' }}>
                        <div className="sb-button">
                            <button className='toggle-btn' onClick={() => setToggled(!toggled)}>
                                <h1 className='sidebar-icon'><BsFilterLeft /></h1>
                            </button>
                        </div>
                    </main>
                </div>
                {/* ///////////////////////////////////////////////  HeaderSidebar  /////////////////////////////////////////// */}


                {/* /////////////////////////////////  Search   /////////////////////////////////////////////r////////////////// */}
                <button onClick={() => handleSearch()} className='footer-element'><h4><GoSearch /></h4></button>
                {/* /////////////////////////////////  Search   /////////////////////////////////////////////////////////////// */}




                {/* ///////////////////////////////////////////////////  Home   ////////////////////////////////////////////////// */}
                <button className='footer-element'><h4><GoHome /></h4></button>
                {/* ///////////////////////////////////////////////////  Home   ////////////////////////////////////////////////// */}


                {/* ///////////////////////////////////////////////////  Cart   ////////////////////////////////////////////////// */}
                {/* <button onClick={() => handleCart()} className='footer-element'><h4><RiShoppingBag2Line /></h4></button> */}
                <div className='cart-footer-container'>
                    <Sidebar rtl onBackdropClick={() => setCartToggled(false)} toggled={cartToggled} breakPoint="always">
                        <div className="cart-main-container">
                        <div className="cart-container">
                            <div>
                                <div className="cart-header">
                                    <h2 className="close-button" onClick={() => setCartToggled(false)}><MdCancel /></h2>
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
                    <main style={{ display: 'flex' }}>
                        <div className="sb-button">
                            <button className='toggle-btn' onClick={() => setCartToggled(!cartToggled)}>
                                <h4 className='sidebar-icon'><RiShoppingBag2Line /></h4>
                            </button>
                        </div>
                    </main>
                </div>
                {/* ///////////////////////////////////////////////////  Cart   ////////////////////////////////////////////////// */}


                {/* ///////////////////////////////////////////////////  User   ////////////////////////////////////////////////// */}
                <button className='footer-element' onClick={() => setLogin(true)}><h4><FaRegUser /></h4></button>
                {
                    isLogin && <div style={{ position: "fixed", background: "#00000075", zIndex: "13", top: "0", width: "100%", left: "0" }}>
                        <Signin login={handleIsLogin} />
                    </div>
                }
                {/* ///////////////////////////////////////////////////  User   ////////////////////////////////////////////////// */}


            </div>


            {
                isFooterSearch &&
                <div className='search-footer-container '>
                    <div className={isFooterSearchBg ? `search-footer-bg` : `search-footer`} onClick={() => setIsFooterSearchBg(true)}>
                        <GoSearch className='search-footer-icon' />
                        <input className='search-footer-input' type="text" placeholder='Search your products from here' />
                    </div>
                </div>
            }

        </>
    )
}

export default Footer
