// //
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Blusher from '../../Images/blush-makeup.svg'
import Mascara from '../../Images/mascara.svg'
import Lipstick from '../../Images/lipstick-makeup.svg'
import LittleMakeup from '../../Images/little-makeup-box.svg'
import Shaving from '../../Images/shaving-shave.svg'
import OralCare from '../../Images/care-health-hygienic.svg'
import MakeupBrushes from '../../Images/makeup-brushes.svg'
import Deodorant from '../../Images/deodorant-perfume.svg'
import Bath from '../../Images/bath-bathtub.svg'


const SidebarComp = () => {
    return (
        <div className='sidebarcomp-main-container' >

            <div className='sidebarcomp-container'>
                <Sidebar>
                    <Menu transitionDuration={1000}>
                        <div className='sidebar-menu'>
                            <img src={Blusher} className='menu-img' alt="" />
                            <SubMenu label="Face">
                                <MenuItem> Blusher </MenuItem>
                                <MenuItem> Foundation </MenuItem>
                                <MenuItem> Face Powder </MenuItem>
                            </SubMenu>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={Mascara} className='menu-img' alt="" />
                            <SubMenu label="Eyes">
                                <MenuItem> Eye Shadow </MenuItem>
                                <MenuItem> Glitter </MenuItem>
                                <MenuItem>  Mascara </MenuItem>
                            </SubMenu>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={Lipstick} className='menu-img' alt="" />
                            <SubMenu label="Lips">
                                <MenuItem> Lip Gloss </MenuItem>
                                <MenuItem> Lip Stick </MenuItem>
                                <MenuItem>  Lip Kit </MenuItem>
                            </SubMenu>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={LittleMakeup} className='menu-img' alt="" />
                            <MenuItem> Accessories </MenuItem>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={Shaving} className='menu-img' alt="" />
                            <MenuItem> Shaving Needs </MenuItem>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={OralCare} className='menu-img' alt="" />
                            <MenuItem>  Oral Care </MenuItem>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={MakeupBrushes} className='menu-img' alt="" />
                            <MenuItem>  Facial Care </MenuItem>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={Deodorant} className='menu-img' alt="" />
                            <MenuItem> Deodorant </MenuItem>
                        </div>

                        <div className='sidebar-menu'>
                            <img src={Bath} className='menu-img' alt="" />
                            <MenuItem> Bath & Oil </MenuItem>
                        </div>

                    </Menu>
                </Sidebar>
            </div>

        </div>
    )
}

export default SidebarComp
