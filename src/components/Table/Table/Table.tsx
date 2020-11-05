import React, { useState } from 'react'
import './Table.scss'

type PropsType = {
	children: any
}


export const Table = ({ ...props }: PropsType) => {
	return (
		<div className="custom-table">
			{props.children}
		</div>
	)
};