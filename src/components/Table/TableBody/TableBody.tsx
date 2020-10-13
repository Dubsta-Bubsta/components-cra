import React, { useState } from 'react'
import './TableBody.scss'

type PropsType = {
	children: any	
}


export const TableBody = ({ ...props }: PropsType) => {
	return (
		<tbody className="custom-table-body">
			{props.children}
		</tbody>
	)
}