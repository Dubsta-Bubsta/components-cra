import React, { useState } from 'react'
import classNames from 'classnames'
import './AuthForm.scss'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import defaultLogo from '../../assets/logo-vertical-white.svg'


import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


type PropsType = {
	open: boolean
	setOpen: (open: boolean) => void
}

export enum AuthPhaseEnum {
	login,
	register
}

const AuthForm = ({ open, setOpen, ...props }: PropsType) => {
	const [authPhase, setAuthPhase] = useState(AuthPhaseEnum.login)

	let renderComponent
	if (authPhase === AuthPhaseEnum.login) {
		renderComponent = <LoginForm setAuthPhase={setAuthPhase}/>
	} else if (authPhase === AuthPhaseEnum.register) {
		renderComponent = <RegisterForm setAuthPhase={setAuthPhase}/>
	}


	return (
		<div className={`auth__modal  ${open ? "active" : ""}`}>
			<div className="modal__bg" onClick={() => setOpen(false) }></div>
			<div className="modal__body">
				<div className="body__preview">
					<img src={defaultLogo} alt="itmo-logo"/>
				</div>

				{renderComponent}
			</div>
		</div>
	)
}

export const FormTitle = ({ title = "" }) => (
	<div className="form__title">
		<div className="title__line"></div>
		<p className="title__text">{title}</p>
		<div className="title__line"></div>
	</div>
)

export default AuthForm