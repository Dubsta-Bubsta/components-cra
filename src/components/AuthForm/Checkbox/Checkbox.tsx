import React from 'react'
import './Checkbox.scss'
import classNames from 'classnames'

const Checkbox = ({ label = "" }) => {
	return (
			<label className="checkbox__content">
				<p className="checkbox__text">{label}</p>
				<input type="checkbox"  className="checkbox__input"/>
				<span className="checkbox__mark"></span>
			</label>
	)
}

export default Checkbox