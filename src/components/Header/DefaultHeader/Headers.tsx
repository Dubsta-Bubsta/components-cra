import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import defaultLogo from '../../../assets/img/logo-horizontal-blue.svg'
import libraryLogo from '../../../assets/img/itmo-library-logo.svg'
import { SearchInput } from '../SearchInput/SearchInput'
import { Button } from '../../Common/Button/Button'
import Dropdown from '../../Common/Dropdown/Dropdown'
import AuthForm from '../../AuthForm/AuthForm'

type PropsType = {
	
}


export const DefaultHeader = ({ ...props }: PropsType) => {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<div className="header__holder">
			<header className="header__content white">
				<Link to="/" className="header__logo">
					<img src={defaultLogo} alt="itmo-logo"/>
				</Link>

				<SearchInput theme="gray" borderRadius="small" placeholder="Поиск по сайту"/>

				<Dropdown 
					theme="blue"
					selectors={[
						{ id: 'ru', label: 'RU' }, 
						{ id: 'en', label: 'EN' }, 
					]}
				/>

				<Button onClick={() => { setModalOpen(true) }} theme="blue" variant="outlined" margin={'0 0 0 12.5px'}>Войти</Button>
			</header>
			<AuthForm open={modalOpen} setOpen={setModalOpen} />

		</div>
	)
}

export const CustomHeader = ({ ...props }: PropsType) => {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<div className="header__holder">
			<header className="header__content blue">
				<Link to="/" className="header__logo">
					<img src={libraryLogo} alt="itmo-logo"/>
				</Link>

				<SearchInput theme="gray" borderRadius="default" placeholder="Поиск по сайту" collapsed={true}/>
				<Button theme="white" variant="outlined" margin={'0 12.5px 0 0'}>Расширенный поиск</Button>
            	<Button theme="white" variant="outlined" margin={'0 12.5px'}>Атрибутный поиск</Button>
				<Dropdown 
					theme="white"
					selectors={[
						{ id: 'ru', label: 'RU' }, 
						{ id: 'en', label: 'EN' }, 
					]}
				/>

				<Button onClick={() => { setModalOpen(true) }} theme="white" variant="outlined" margin={'0 0 0 12.5px'}>Войти</Button>
			<AuthForm open={modalOpen} setOpen={setModalOpen} />
				
			</header>
		</div>
	)
}