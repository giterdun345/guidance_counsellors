
import React from "react"
import {Link} from "react-router-dom"
import "../reportStyling.css"

const Sidebar = (props) => {
    return(
        <div className={props.sidebar}>
            <div className="sidebar">
                <ul className="nav sidebar-nav">
                    <li className="pt-4" >
                        <Link to="/" onClick={props.close}>
                            <h4 className="counsellorTitle" style={{color:"white"}}>
                                <i className="fas fa-tachometer-alt"></i><span>&nbsp;&nbsp;Dashboard</span>
                            </h4>
                        </Link>
                    </li>
                    <li className="pt-4">
                        <Link to="/FullTable" onClick={props.close}>
                            <h4 className="counsellorTitle" style={{color:"white"}}>
                                <i className="fas fa-table"></i><span>&nbsp;&nbsp;Full Table</span>
                            </h4>
                        </Link>
                    </li> 
                    <li className="pt-4">
                        <div className="accordion-heading" href='/' data-toggle="collapse" data-target="#submenu1">
                            <h4 className="counsellorTitle" style={{color:"white"}}>    
                                    <i className="fas fa-users"></i><span>&nbsp;&nbsp;Counsellors</span> <span className="pull-right"><b className="caret"></b></span>                         
                            </h4>
                        </div>
                            <ul className="nav nav-list collapse" id="submenu1" >
                                <li className="pt-4">
                                    <Link to="/hud/Sarah Dewson" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Sarah Dewson</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Maren Walker" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Maren Walker</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Daryl Pierre-Louis" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Daryl Pierre-Louis</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Rodeshia Richards-Thomas" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Rodeshia Richards-Thomas</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Gina Argenzio-Gayle" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Gina Argenzio-Gayle</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Monique Anderson-Coke" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Monique Anderson-Coke</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Elysia Murray" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Elysia Murray</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Christopher Murray" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Christopher Murray</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Conway King" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Conway King</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Heather Ketterer" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Heather Ketterer</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Meila Johnson" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Meila Johnson</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Tanesha Richards" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Tanesha Richards</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Susan Lees" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Susan Lees</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Ian Godet" className='text-left' onClick={props.close}>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Ian Godet</span>
                                        </h5>
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link to="/hud/Amy Hunt" className='text-left'>
                                        <h5>
                                            <i className="fa fa-universal-access" ></i><span>&nbsp;&nbsp;Amy Hunt</span>
                                        </h5>
                                    </Link>
                                </li>
                            </ul>      
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar