import React from 'react'
import classNames from 'classnames'
import './Button.scss'
import styled from 'styled-components'
type PropsType = {
	children: any,
	onClick?: () => void
	bordered?: boolean
	theme?: "blue" | "white"
	variant?: "filled" | "outlined"
	borderRadius?: "default" | "small" | number 
	margin?: number | string
	padding?: number | string
}




export const Button = ({ children, onClick = () => {}, bordered = false, theme = "white", variant = "filled", borderRadius = "default", margin, padding, ...props }: PropsType) => {
	return (
		<button 
			onClick={onClick}
			className={classNames(`default-button ${theme} ${variant} border-${borderRadius}`, { "bordered": bordered })}
			style={{ 
				borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : "",
				margin,
				padding,
			}}
		>
			{children}
		</button>
	)
}