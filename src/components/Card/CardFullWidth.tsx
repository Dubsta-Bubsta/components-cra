import React from 'react'
import './Card.scss'
import { Box } from '../Common/Box/Box'
import { Button } from '../Common/Button/Button'
import { IconButton } from '../Common/IconButton/IconButton'
import { MonitorIcon } from '../Common/Svg/Svg'
import { Typography } from '../Common/Typography/Typography'
import Flex from '../Common/Layouts/Flex/Flex'


type PropsType = {
}

const CardStringBold = ({ text = "" }) => (
    <Typography variant="p" fontSize={14} lineHeight={27} bold={true} theme="black" margin={"0 5px 0 0"}>{text}</Typography>
)
const CardStringDefault = ({ text = "" }) => (
    <Typography variant="p" fontSize={14} lineHeight={27} theme="black">{text}</Typography>
)



export const CardFullWidth = ({ ...props }: PropsType) => {
    return (
        <div className={`card fullWidth`}>
            <div className="card__content">
                <Typography variant="h3" fontSize={24} margin={"0 0 10px 0"} theme="black">Исследования наноструктурных, углеродных и сверхтвердых материалов</Typography>

                <Flex jusifyContent={'sb'} alignItems="end">
                   <div style={{ width: '100%' }}>
                   <div className="content__string">
                        <CardStringBold text="Базовая организация:" />
                        <CardStringDefault text="Федеральное государственное бюджетное" />
                    </div>
                    <div className="content__string">
                        <CardStringBold text="Ф.И.О. руководителя ЦКП:" />
                        <CardStringDefault text="Прохоров Вячеслав Максимович" />
                    </div>
                    <div className="content__string">
                        <CardStringBold text="Телефон:" />
                        <CardStringDefault text="+7 (499) 2722314" />
                    </div>
                    <div className="content__string">
                        <CardStringBold text="Электронная почта руководителя ЦКП:" />
                        <CardStringDefault text="pvm@tisnum.ru" />
                    </div>
                    <div className="content__string">
                        <CardStringBold text="Федеральный округ:" />
                        <CardStringDefault text="Центральный" />
                    </div>

                    <div className="content__string">
                        <CardStringBold text="Регион:" />
                        <CardStringDefault text="г. Москва" />
                    </div>
                    <div className="content__string">
                        <CardStringBold text="Адрес ЦКП:" />
                        <CardStringDefault text="142190, г. Троицк, ул. Центральная, д. 7а" />
                    </div>
                   </div>

                <Button themeColor="#6FCF97" size="small" Icon={MonitorIcon}>Удаленный доступ</Button>

                </Flex>

            </div>
        </div>
    )
}