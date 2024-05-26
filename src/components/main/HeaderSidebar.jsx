import React from 'react'
import logoImg from '../../Images/Logo-new.png'
import { BsFilterLeft } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const HeaderSidebar = () => {

    const [toggled, setToggled] = React.useState(false);

    return (
        <div className='headersidebar-main-container'>

            <div className='sidebar-container'>
                <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                    <div className='menu-container'>
                        <Menu className='css-dip3t8'>
                            <div className='logoImg-container'>
                                <span>
                                    <img src={logoImg} alt="" className='logoImg' />
                                </span>
                                <h4 onClick={()=>setToggled(false)}><MdCancel/></h4>
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
                            <h2 className='sidebar-icon'><BsFilterLeft/></h2>
                        </button>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default HeaderSidebar
