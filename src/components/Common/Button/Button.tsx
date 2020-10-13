import React from 'react'
import classNames from 'classnames'
import './Button.scss'

type PropsType = {
	children: any,
	onClick?: () => void
	bordered?: boolean
	theme?: "blue" | "white"
	themeColor?: string
	variant?: "filled" | "outlined"
	size?: "small" | "default"
	borderRadius?: "default" | "small" | number 
	margin?: number | string
	padding?: number | string
}




export const Button = ({ children, onClick = () => {}, bordered = false, theme = "white", themeColor="", size = "default", variant = "filled", borderRadius = "default", margin, padding, ...props }: PropsType) => {
	let styleObject = {}
	if (themeColor) {
		if (variant === "filled") {
			styleObject = {
				color: "#fff",
				backgroundColor: themeColor,
				borderColor: themeColor,
			}
		} else {
			styleObject = {
				color: themeColor,
				backgroundColor: 'transparent',
				borderColor: themeColor,
			}
		}
		
	}
	
	return (
		<button 
			onClick={onClick}
			className={classNames(`default-button ${theme} ${variant} border-${borderRadius} size-${size}`, { "bordered": bordered })}
			style={{ 
				borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : "",
				margin,
				padding,
				...styleObject
			}}
		>
			{children}
		</button>
	)
}