import "../styles/navbar.css"
import {SearchOutlined} from '@ant-design/icons'



function Navbar() {
    return (
      <div className="header">
        <div id="logo">Inventory System</div>  
        <div class="search">
             <input class="srch" type="search" name="" placeholder="Search"/>
             <button class="btn"><SearchOutlined /></button>
                   
        </div>  
      </div>
    );
  }
export default Navbar
