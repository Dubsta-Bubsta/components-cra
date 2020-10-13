import React, { useState } from 'react'
import classNames from 'classnames'
import './SearchInput.scss'
import { CloseIcon, SearchIcon } from '../../Common/Svg/Svg'
import { Button } from '../../Common/Button/Button'


type PropsType = {
	theme?: "white" | "gray"
	borderRadius?: "default" | "small"
	placeholder?: string
	collapsed?: boolean
}


export const SearchInput = ({ theme="white", borderRadius="default", placeholder = "", collapsed = false, ...props }: PropsType) => {
	const [searchText, setSearchText] = useState('')

	return (
		<div className={classNames(`header__search-block ${theme} border-${borderRadius}`, {'collapsed': collapsed})}>
			
			<input 
				placeholder={placeholder}
				className="search-block__input" 
				value={searchText} 
				onChange={(e) => setSearchText(e.target.value)}
			/>
			

			<button className="search-block__icon close" onClick={() => { setSearchText("") }}>
				<CloseIcon />
			</button>

			<button className="search-block__icon search">
				<SearchIcon />
			</button>

		</div>
	)
}