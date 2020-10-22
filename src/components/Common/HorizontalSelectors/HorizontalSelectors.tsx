import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import './HorizontalSelectors.scss'
import { DropdownArrow } from '../Svg/Svg'
import { Typography } from '../Typography/Typography'

type PropsType = {
    collapsed?: boolean

    selectors: Array<SelectorType>
    activeSelector: SelectorType
    setActiveSelector: (selector: SelectorType) => void
}

export type SelectorType = {
    id: number | string
    label: string
    borderColor?: string
}


export const Selectors = ({ collapsed = false, selectors, activeSelector, setActiveSelector, ...props }: PropsType) => {

    return (
        <div className={`selectors__list ${collapsed ? "collapsed" : ""}`}>
            {selectors.map(selector => (
                <button
                    key={selector.id}
                    onClick={() => setActiveSelector(selector)}
                    className={`selector__element ${activeSelector.id === selector.id ? "active" : ""}`}
                    data-color={selector.borderColor}
                    data-id={`selector-${selector.id}`}
                >
                    <Typography
                        variant="p"
                        fontFamily="Muller"
                        fontSize={14}
                        bold={activeSelector.id === selector.id}
                        theme={activeSelector.id === selector.id ? "black" : "gray"}
                        className="selector__text"
                    >
                        {selector.label}
                    </Typography>
                    <div className="selector-border" style={{ backgroundColor: selector.borderColor }}></div>
                </button>
            ))}
        </div>
    )
}