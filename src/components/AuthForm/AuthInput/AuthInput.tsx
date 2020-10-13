import React from 'react'
import classNames from 'classnames'
import './AuthInput.scss'



type PropsType = {
	icon?: string
	placeholder?: string
}

export const AuthInput = ({ icon, placeholder,...props }: PropsType) => {
	return (
		<div className="input-block">
			<div className="input-block__icon">
				<img src={icon} alt="input-icon"/>
			</div>
			<input className="input-block__input" placeholder={placeholder}/>
		</div>
					
	)
}