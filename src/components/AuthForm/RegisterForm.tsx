import React from 'react'
import './AuthForm.scss'
import { FormTitle, AuthPhaseEnum } from './AuthForm'
import { Button } from '../Common/Button/Button'
import { AuthInput } from './AuthInput/AuthInput'

import userIcon from '../../assets/img/user-icon.svg'
import emailIcon from '../../assets/img/email-icon.svg'
import lockIcon from '../../assets/img/lock-icon.svg'

type PropsType = {
	setAuthPhase: (authPhase: AuthPhaseEnum) => void
}



const RegisterForm = ({ setAuthPhase, ...props }: PropsType) => {
	return (
		<div className="body__content">
			<div className="content__form">
				<FormTitle title="Регистрация" />

				<AuthInput icon={userIcon} placeholder="Имя пользователя" />
				<AuthInput icon={emailIcon} placeholder="Электронная почта" />
				<AuthInput icon={lockIcon} placeholder="Пароль" />
				<AuthInput icon={lockIcon} placeholder="Повторите пароль" />


				<div className="form__buttons">
					<Button variant="filled" theme="blue" padding={'15px 60px'} borderRadius={25}>Зарегистрироваться</Button>
				</div>
				<button className="form__service-link" onClick={() => { setAuthPhase(AuthPhaseEnum.login) }}>Войти</button>

			</div>
		</div>
	)
}

export default RegisterForm