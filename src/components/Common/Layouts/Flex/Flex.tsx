import React from 'react'
import './Flex.scss'

type PropsType = {
	children: any
	jusifyContent?: "sb" | "sa" | "center" | "stretch" | "start" | "end"
	alignItems?: "center" | "stretch" | "start" | "end"
	flexDirection?: "row" | "row-rev" | "column" | "column-rev"
}



const Flex = ({ jusifyContent, flexDirection, alignItems, ...props }: PropsType) => (
	<div className={`custom-flex justify-content-${jusifyContent} align-items-${alignItems} flex-direction-${flexDirection}`}>
		{props.children}
	</div>
)
export default Flex