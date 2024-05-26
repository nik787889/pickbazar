import React, { useState } from 'react'
import HeaderSidebar from './main/HeaderSidebar';
import MakeupHeader from './main/MakeupHeader';
import logoImg from '../Images/Logo-new.png'
import { FaChevronDown } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import Signin from './main/Signin';


const Header = () => {

    const [isSearch, setIsSearch] = useState(false)

    const [isLogin, setLogin] = useState(false)

    const handleIsLogin = (data) => {
        setLogin(data)
    }

    return (
        <>
            <div className='header-main-container bg-white' >
                <div className={!isSearch ? `header-container ` : `blur-header`} >
                    <div className='header-main-div1'>
                        <div className='headersidebar-div'>
                            <HeaderSidebar />
                        </div>
                        <a href="">
                            <span>
                                <img src={logoImg} alt="" className='div1-img' />
                            </span>
                        </a>
                        <div className='div1-button-container selecter'>
                            <MakeupHeader />
                        </div>
                    </div>

                    <div className='header-main-div2'>
                        <ul className='div2-ul selecter' >
                            <li className='div2-ul-li'>
                                <h6>Shope</h6>
                            </li>
                            <li className='div2-ul-li'>
                                <h6>Offers</h6>
                            </li>
                            <li className='div2-ul-li'>
                                <h6>Contact</h6>
                            </li>
                            <li>
                                <div class="dropdown ">
                                    <h6 class="dropbtn">Pages <FaChevronDown /></h6>
                                    <div class="dropdown-content">
                                        <div style={{ width: "15rem" }}>
                                            <a href="#">Flash Sale</a>
                                            <a href="#">Manufacturers/Publishers</a>
                                            <a href="#">Authors</a>
                                            <a href="#">FAQ</a>
                                            <a href="#">Terms & Conditions</a>
                                            <a href="#">Customer Refund Policy</a>
                                            <a href="#">Vendor Refund Policy</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className='header-main-div3'>

                            <button onClick={() => setIsSearch(true)} className='div3-search-btn'><GoSearch /></button>
                            <button onClick={() => setLogin(true)} className='div3-user-btn'  >Join</button>
                            <button className='div3-seller-btn'>Become a Seller</button>
                        </div>
                    </div>

                </div>


            </div>

            {
                isSearch &&
                <div className=' '>
                    <div className='search-btn-container '>
                        <div className='search-btn'>
                            <GoSearch className='search-btn-icon' />
                            <input className='search-btn-input' type="text" placeholder='Search your products from here' />
                        </div>
                        <div className='search-btn-close'>
                            <button onClick={() => setIsSearch(false)}> <IoMdClose className='close-btn-icon' /> </button>
                        </div>
                    </div>
                </div>
            }

            {
                isLogin &&
                <div style={{ position: "fixed", background: "#00000075", zIndex: "13", top: "0", width: "100%" }}>
                    <Signin login={handleIsLogin} />
                </div>
            }

        </>



    )
}

export default Header

