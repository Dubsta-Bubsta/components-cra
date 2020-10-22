import React, { useState, useEffect, useRef, Children, FC } from 'react'
import classNames from 'classnames'
import './Input.scss'

import successIcon from '../../../../assets/img/success-status-label.svg'
import errorIcon from '../../../../assets/img/error-status-label.svg'

type PropsType = {
    isSuccess?: boolean
    isError?: boolean
    statusIconVisible?: boolean

    beforeIcon?: React.ReactNode
    afterIcon?: React.ReactNode

    filled?: boolean

    inputProps?: any

    helperText?: string
    helperTextPosition?: "left" | "center" | "right"
}

const Input: FC<PropsType> = (props) => {
	const { isSuccess, isError, filled, statusIconVisible = true, beforeIcon, afterIcon, inputProps } = props
	const { helperText = "", helperTextPosition = "left", ...restProps } = props


    let statusIcon 
    if (isSuccess) {
        statusIcon = successIcon
    } else {
        statusIcon = errorIcon
    }
    

	return (
        <div className={classNames("custom-input-block", {
            "success": isSuccess,
            "error": isError,
            "filled": filled
        })}>
            <div className="input-block__content">
                <div className="input-block__icon icon_before">
                    {beforeIcon}
                </div>

                <input {...inputProps} {...restProps} className="input-block__input" />
                
                <div className="input-block__icon icon_after">
                    {afterIcon}
                </div>
                {statusIconVisible && <div className="input-block__icon icon_after">
                    <img src={statusIcon} alt="status-icon"/>
                </div>}
            </div>
            {helperText && <p className={`input-block__helperText position-${helperTextPosition}`}>{helperText}</p>}
        </div>
	)
}

export default Input