import React from 'react'
import classNames from 'classnames'
import './IconButton.scss'

type PropsType = {
	children: any,
	onClick?: () => void
	themeColor?: string
	size?: "default" | "small"
}




export const IconButton = ({ children, onClick = () => {}, themeColor = "", size = "default",  ...props }: PropsType) => {
	return (
		<button 
			onClick={onClick}
			className={`icon-button size-${size}`}
			style={{ 
				color: "#fff",
				backgroundColor: themeColor,
				borderColor: themeColor,
			}}
		>
			{children}
		</button>
	)
}