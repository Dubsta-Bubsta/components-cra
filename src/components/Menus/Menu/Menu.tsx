import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'
type PropsType = {
    links: Array<LinkType>
}
type LinkType = {
    icon: string | any
    iconFill?: 'none'
    title: string
    link: string
    exact?: boolean
}



export const Menu = ({ links, ...props }: PropsType) => {
	return (
		<div className="menu__links links">
            {links.map(link => (
                <NavLink exact={link.exact} to={link.link} className="menu__link" activeClassName={"active"}>
                    <div className={`link__icon ${link.iconFill === 'none' ? 'noFill' : ''}`}>{link.icon}</div>
                    <div className="link__title">{link.title}</div>
                </NavLink>
            ))}
			
		</div>
	)
}