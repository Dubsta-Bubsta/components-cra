import React, { useState } from 'react'
import './TableHead.scss'

type PropsType = {
	children: any	
}


export const TableHead = ({ ...props }: PropsType) => {
	return (
		<thead className="custom-table-head">
			{props.children}
		</thead>
	)
}