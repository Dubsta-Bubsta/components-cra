import React from 'react'
import classNames from 'classnames'
import './Button.scss'

type PropsType = {
	children: React.ReactNode,
	onClick?: () => void
	bordered?: boolean
	theme?: "blue" | "white"
	themeColor?: string
	variant?: "filled" | "outlined"
	size?: "small" | "default"
	borderRadius?: "default" | "small" | number 
	margin?: number | string
	padding?: number | string

	Icon?: any
	iconPosition?: "left" | "right"
}




export const Button = ({ children, onClick = () => {}, bordered = false, theme = "white", themeColor="", size = "default", variant = "filled", borderRadius = "default", margin, padding, Icon, iconPosition = "left", ...props }: PropsType) => {
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
			className={classNames(`default-button ${theme} ${variant} border-${borderRadius} size-${size}`, { 
				"bordered": bordered,
				[`icon-${iconPosition}`]: Icon && iconPosition 
			})}
			style={{ 
				borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : "",
				margin,
				padding,
				...styleObject
			}}
		>
			{ Icon &&  <div className="button__icon">
				<Icon />
			</div> }
			{children}
		</button>
	)
}