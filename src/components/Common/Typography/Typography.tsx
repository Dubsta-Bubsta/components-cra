import React, { useState, useEffect, useRef, Children } from 'react'
import classNames from 'classnames'
import './Typography.scss'

type PropsType = {
	children: any
	className?: string
	Component?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
	color?: ""
	theme?: "black" | "gray" | "white"
	bold?: boolean
	fontSize?: number
	fontFamily?: string
	margin?: number | string
	padding?: number | string
}


export const Typography = ({ Component = "p", className, theme = "gray", bold = false, fontSize = 14, color, fontFamily = "Open Sans", padding, margin, ...props }: PropsType) => {

	return (
		<Component			
			className={`${className} typography typography-${Component} ${theme} ${bold ? "bold" : ""}`}

			style={{
				fontSize,
				color,
				fontFamily,
				padding,
				margin
			}}
		>
			{props.children}
		</Component>
	)
}