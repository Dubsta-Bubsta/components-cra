import React from 'react'
import './Card.scss'
import { Box } from '../Common/Box/Box'
import { Button } from '../Common/Button/Button'
import { IconButton } from '../Common/IconButton/IconButton'
import { CheckIcon } from '../Common/Svg/Svg'
import { Typography } from '../Common/Typography/Typography'



type PropsType = {
}

const CardStringBold = ({ text = "" }) => (
    <Typography variant="p" fontSize={12} lineHeight={22.5} bold={true} margin={"0 5px 0 0"}>{text}</Typography>
)
const CardStringDefault = ({ text = "" }) => (
    <Typography variant="p" fontSize={12} lineHeight={22.5} theme="black">{text}</Typography>
)



export const Card = ({...props }: PropsType) => {

    return (
        <Box padding={"38px 19px 19px 19px"} className="card">
            <div className="card__content">
                <Typography variant="h3" fontSize={18} margin={"0 0 10px 0"} theme="black">Исследования наноструктурных, углеродных и сверхтвердых материалов</Typography>
                
                <div className="content__string">
                    <CardStringBold text="Базовая организация:"/>
                    <CardStringDefault text="Федеральное государственное бюджетное"/>
                </div>
                <div className="content__string">   
                    <CardStringBold text="Ф.И.О. руководителя ЦКП:"/>
                    <CardStringDefault text="Прохоров Вячеслав Максимович"/>
                </div>
                <div className="content__string">
                    <CardStringBold text="Телефон:"/>
                    <CardStringDefault text="+7 (499) 2722314" />
                </div>
                <div className="content__string">
                    <CardStringBold text="Электронная почта руководителя ЦКП:" />
                    <CardStringDefault text="pvm@tisnum.ru" />
                </div>
                <div className="content__string">
                    <CardStringBold text="Федеральный округ:"/>
                    <CardStringDefault text="Центральный" />
                </div>

                <div className="content__string">
                    <CardStringBold text="Регион:"/>
                    <CardStringDefault text="г. Москва" />
                </div>
                <div className="content__string">
                    <CardStringBold text="Адрес ЦКП:"/>
                    <CardStringDefault text="142190, г. Троицк, ул. Центральная, д. 7а" />
                </div>
            
            </div>

            <div className="card__buttons">
                <div>
                    <Button themeColor="#6FCF97" size="small">28.08.20</Button>
                    <Button themeColor="#4EBBDB" size="small">10:00 - 22:00</Button>
               </div>

                <IconButton themeColor="#F21F5B">
                    <CheckIcon />
                </IconButton>
            </div>
        </Box>
	)
}