import React from 'react'
import classNames from 'classnames'
import './IconButton.scss'

type PropsType = {
	children: any,
	onClick?: () => void
	themeColor?: string
}




export const IconButton = ({ children, onClick = () => {}, themeColor = "",  ...props }: PropsType) => {
	return (
		<button 
			onClick={onClick}
			className={classNames(`icon-button`)}
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