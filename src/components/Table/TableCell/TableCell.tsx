import React, { useState } from 'react'
import './TableCell.scss'
import { Typography } from '../../Common/Typography/Typography'

type PropsType = {
	children: any	
	variant?: "body" | "head" 
}


export const TableCell = ({ variant = "body", ...props }: PropsType) => {
	if (variant === "head") {
		return (
			<td className={`custom-table-cell cell-head`}>
				<Typography bold={true} fontSize={14} fontFamily={"Muller"}>
					{props.children}
				</Typography>
			</td>
		)
	} else {
		return (
			<td className={`custom-table-cell cell-body`}>
				<Typography className="cell__content" fontSize={12} fontFamily={"Muller"} theme="black">
					{props.children}
				</Typography>
			</td>
		)
	}
};