import React from 'react'
import "./sidebarStyle.css"
import {Link} from "react-router-dom"

const SidebarMeat = () => {
    return(
       
        <div className="sidebar">
            <ul className="sidebar-menu">
                 <li className="item">
                    <Link to="/dashboard" className="menu-btn">
                        <i className="fas fa-tachometer-alt"></i><span>&nbsp;&nbsp;Dashboard</span>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/dashboard/FullTable" className="menu-btn">
                            <i className="fas fa-table"></i><span>&nbsp;&nbsp;Full Table</span>
                    </Link>
                </li>
                {/* <li className="item" id="profile">
                    <a href="#profile" className="menu-btn">
                        <i className="fas fa-user-circle"></i><span>&nbsp;&nbsp;Users<i className="fas fa-chevron-down drop-down"></i></span>
                    </a>
                    <div className="sub-menu">
                        <Link to="user1"><i className="far fa-user"></i><span>User1</span></Link>
                        <Link to="user2"><i className="far fa-user"></i><span>User2</span></Link>
                        <Link to="user3"><i className="far fa-user"></i><span>User3</span></Link>
                        <Link to="user4"><i className="far fa-user"></i><span>User4</span></Link>
                    </div>
                </li> */}
                {/* <li className="item" id="profile">
                    <a href="#profile" className="menu-btn">
                        <i className="fa-user-circle"></i><span>&nbsp;&nbsp;Custom Reports<i className="fas fa-chevron-down drop-down"></i></span>
                    </a>
                    <div className="sub-menu">
                        <Link to="dashboard/user1"><i className="far fa-user"></i><span>User1</span></Link>
                        <Link to="dashboard/user2"><i className="far fa-user"></i><span>User2</span></Link>
                        <Link to="dashboard/user3"><i className="far fa-user"></i><span>User3</span></Link>
                        <Link to="dashboard/user4"><i className="far fa-user"></i><span>User4</span></Link>
                    </div>
                </li> */}

              {/* <li className="item" id="profile">
                    <a to="#profile" className="menu-btn">
                        <i className="fas fa-cog"></i><span>&nbsp;&nbsp;Custom Reports<i className="fas fa-chevron-down drop-down"></i></span>
                    </a>
                    <div className="sub-menu">
                        <Link to="/ComingSoon"><i className="fas fa-calendar-day"></i><span>Date</span></Link>
                        <Link to="/ComingSoon"><i className="fas fa-school"></i><span>School</span></Link>
                        <Link to="/ComingSoon"><i className="fas fa-user-graduate"></i><span>Student</span></Link>
                        <Link to="/ComingSoon"><i className="fas fa-chalkboard-teacher"></i><span>Year</span></Link>
                        <Link to="/ComingSoon"><i className="fas fa-venus-mars"></i><span>Gender</span></Link>
                        <Link to="/ComingSoon"><i className="fas fa-address-book"></i><span>Type</span></Link>
                        <Link to="/ComingSoon"><i className="fas fa-address-card"></i><span>Method</span></Link>
                    </div>
                </li> */}



                {/* <li className="item">
                    <Link to="#" className="menu-btn">
                        <i className="fas fa-times-circle"></i><span>&nbsp;&nbsp;Close Options
                        </span>
                    </Link>
                </li> */}
            </ul>

            <hr />
            
        </div>
        
        )
}

export default SidebarMeat