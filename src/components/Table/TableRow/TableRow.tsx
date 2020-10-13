import React, { useState } from 'react'
import './TableRow.scss'
import { Typography } from '../../Common/Typography/Typography'



type PropsType = {
	children: any	
}


const TableRow = ({ ...props }: PropsType) => {

	return (
		<tr className="custom-table-row">
			{props.children}
		</tr>
	)
	
}

export default TableRow