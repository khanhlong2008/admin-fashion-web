import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/favicon.png'

import sidebar_items_menu from '../../assets/JsonData/sidebar_routes.json'
import sidebar_items_auth from '../../assets/JsonData/auth.json'
import AuthContext from '../../context/auth'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = (props) => {
    const authCtx = useContext(AuthContext)

    const activeItem = sidebar_items_menu.findIndex(item => item.route === props.location.pathname)
    // console.log(authCtx.user)
    return (
        <>
            {
                authCtx.user ? (
                    <div className='sidebar'>
                        <div className="sidebar__logo">
                            <img src={logo} alt="company logo" />
                        </div>
                        {
                            sidebar_items_menu.map((item, index) => (
                                <Link to={item.route} key={index}>
                                    <SidebarItem
                                        title={item.display_name}
                                        icon={item.icon}
                                        active={index === activeItem}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                ) : (
                    <div className='sidebar'>
                        <div className="sidebar__logo">
                            <img src={logo} alt="company logo" />
                        </div>
                        {
                            sidebar_items_auth.map((item, index) => (
                                <Link to={item.route} key={index}>
                                    <SidebarItem
                                        title={item.display_name}
                                        icon={item.icon}
                                        active={index === activeItem}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </>

    )
}

export default Sidebar
