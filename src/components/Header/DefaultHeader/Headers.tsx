import React from 'react'
import classNames from 'classnames'
import './Header.scss'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import defaultLogo from '../../../assets/logo-horizontal-blue.svg'
import libraryLogo from '../../../assets/itmo-library-logo.svg'
import { SearchInput } from '../SearchInput/SearchInput'
import { Button } from '../../Common/Button/Button'
import { Dropdown } from '../../Common/Dropdown/Dropdown'

type PropsType = {
	
}


export const DefaultHeader = ({ ...props }: PropsType) => {
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

            	<Button theme="blue" variant="outlined" margin={'0 0 0 12.5px'}>Войти</Button>
			</header>
		</div>
	)
}

export const CustomHeader = ({ ...props }: PropsType) => {
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

            	<Button theme="white" variant="outlined" margin={'0 0 0 12.5px'}>Войти</Button>
			</header>
		</div>
	)
}