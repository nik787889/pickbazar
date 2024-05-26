import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';

// import Grocery from '../../../pickbazar/src/Images/grocery-store-groceries.svg'
// import Bakery from '../../../pickbazar/src/Images/bakery-bread-breakfast-food.svg'
// import Lipstick from '../../../pickbazar/src/Images/lipstick-with-cover.svg'
// import Bag from '../../../pickbazar/src/Images/hand-bag.svg'
// import Dress from '../../../pickbazar/src/Images/dress.svg'
// import Chair from '../../../pickbazar/src/Images/chair.svg'
// import GroceryStore from '../../../pickbazar/src/Images/grocery-store-bakery.svg'
// import Book from '../../../pickbazar/src/Images/book.svg'
// import Headphones from '../../../pickbazar/src/Images/headphones.svg'
// import Medicine from '../../../pickbazar/src/Images/medicine.svg'

import Grocery from '../../Images/grocery-store-groceries.svg'
import Bakery from '../../Images/bakery-bread-breakfast-food.svg'
import Lipstick from '../../Images/lipstick-with-cover.svg'
import Bag from '../../Images/hand-bag.svg'
import Dress from '../../Images/dress.svg'
import Chair from '../../Images/chair.svg'
import GroceryStore from '../../Images/grocery-store-bakery.svg'
import Book from '../../Images/book.svg'
import Headphones from '../../Images/headphones.svg'
import Medicine from '../../Images/medicine.svg'

const MakeupHeader = () => {
    return (
        <div>
            <button className='div1-button'>
                <img src={Lipstick} style={{ height: "20px", width: "20px", color: "#009F7F" }} alt="" />
                <Dropdown style={{ background: "none" }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Makeup
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className='makeup-div'>

                            <div className='dropdown-menu-div'>
                                <img src={Grocery} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Grocery</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Bakery} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Bakery</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Lipstick} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Makeup</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Bag} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Bags</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Dress} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Clothing</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Chair} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Furniture</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={GroceryStore} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Daily Needs</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Book} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Books</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Headphones} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Gadget</Dropdown.Item>
                            </div>

                            <div className='dropdown-menu-div'>
                                <img src={Medicine} className='dropdown-menu-img' alt="" />
                                <Dropdown.Item href="#/action-1">Medicine</Dropdown.Item>
                            </div>

                        </div>
                    </Dropdown.Menu>

                </Dropdown>
            </button>
        </div>
    )
}

export default MakeupHeader
