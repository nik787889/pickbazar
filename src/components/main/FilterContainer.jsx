import React from 'react'
import MakeupHeader from './MakeupHeader'
import logoImg from '../../Images/Logo-new.png'
import Blusher from '../../Images/blush-makeup.svg'
import Mascara from '../../Images/mascara.svg'
import Lipstick from '../../Images/lipstick-makeup.svg'
import LittleMakeup from '../../Images/little-makeup-box.svg'
import Shaving from '../../Images/shaving-shave.svg'
import OralCare from '../../Images/care-health-hygienic.svg'
import MakeupBrushes from '../../Images/makeup-brushes.svg'
import Deodorant from '../../Images/deodorant-perfume.svg'
import Bath from '../../Images/bath-bathtub.svg'
import { RiEqualizer2Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const FilterContainer = () => {

  const [toggled, setToggled] = React.useState(false);

  return (
    <div className='filtercontainer-main-container' >

      <div className='filtercontainer-container'>

        <div className='sidebar-container'>
          <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
            <div className='menu-container'>
              <Menu className='css-dip3t8'>
                <div className='logoImg-container'>
                  <span>
                    <img src={logoImg} alt="" className='logoImg' />
                  </span>
                  <h4 onClick={() => setToggled(false)}><MdCancel /></h4>
                </div>
                <div style={{ display: "flex" }}>
                  <img src={Blusher} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <SubMenu label="Face">
                    <MenuItem> Blusher </MenuItem>
                    <MenuItem> Foundation </MenuItem>
                    <MenuItem> Face Powder </MenuItem>
                  </SubMenu>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={Mascara} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <SubMenu label="Eyes">
                    <MenuItem> Eye Shadow </MenuItem>
                    <MenuItem> Glitter </MenuItem>
                    <MenuItem>  Mascara </MenuItem>
                  </SubMenu>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={Lipstick} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <SubMenu label="Lips">
                    <MenuItem> Lip Gloss </MenuItem>
                    <MenuItem> Lip Stick </MenuItem>
                    <MenuItem>  Lip Kit </MenuItem>
                  </SubMenu>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={LittleMakeup} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <MenuItem> Accessories </MenuItem>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={Shaving} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <MenuItem> Shaving Needs </MenuItem>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={OralCare} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <MenuItem>  Oral Care </MenuItem>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={MakeupBrushes} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <MenuItem>  Facial Care </MenuItem>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={Deodorant} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <MenuItem> Deodorant </MenuItem>
                </div>

                <div style={{ display: "flex" }}>
                  <img src={Bath} style={{ height: "20px", width: "20px", margin: "15px 0px 0px 15px" }} alt="" />
                  <MenuItem> Bath & Oil </MenuItem>
                </div>
              </Menu>
            </div>
          </Sidebar>
          <main style={{ display: 'flex' }}>
            <div className="sb-button">
              <button className='filterContainer-btn' onClick={() => setToggled(!toggled)}>
                <RiEqualizer2Fill className='filter-icon' />
                Filter
              </button>
            </div>
          </main>
        </div>

      </div>

      <MakeupHeader />
    </div>
  )
}

export default FilterContainer
