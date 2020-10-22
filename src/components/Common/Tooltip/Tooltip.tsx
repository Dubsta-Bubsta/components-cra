import React, { FC, useState, useEffect, useRef } from 'react';
import './Tooltip.scss';
import { TooltipTriangle } from './TooltipTriangle'

import tooltipBulb from '../../../assets/img/tooltip-bulb.svg'
import tooltipWarning from '../../../assets/img/tooltip-warning.svg'
import { Typography } from '../Typography/Typography';

type PropsType = {
    type?: "success" | "error" | "default"
    title?: string
    description?: string
}

const Tooltip: FC<PropsType> = ({ type = "default", title, description, ...props }) => {

    let icon = tooltipBulb
    if (type === "error") {
        icon = tooltipWarning
    }

	return (
        <div className={`custom-tooltip ${type}`}>
            <div className="tooltip__triangle">
                <TooltipTriangle />
            </div>
            <div className="tooltip__content">
                <div className="content__logo">
                    <img src={icon} alt="tooltip-icon"/>
                </div>
                <div className="tooltip__info">
                    <Typography variant="p" theme="white" bold={true}>{title}</Typography>
                    <Typography variant="small" theme="white">{description}</Typography>
                </div>
            </div>
		</div>
	)
}

export default Tooltip