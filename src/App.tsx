import React, { useState } from 'react';
import './App.scss';
import { Button } from './components/Common/Button/Button';
import { DefaultHeader, CustomHeader } from './components/Header/DefaultHeader/Headers';
import AuthForm from './components/AuthForm/AuthForm';
import { Menu } from './components/Menus/Menu/Menu';


import {
    SearchIcon,
    ArrowsIcon,
    ChartIcon,
    SettingsIcon,
    BookIcon,
    UserIcon,
    PictureIcon
} from './components/Common/Svg/Svg';
import { StepsMenu } from './components/Menus/StepsMenu/StepsMenu';
import { Card } from './components/Card/Card';
import { Selectors, SelectorType } from './components/Common/HorizontalSelectors/HorizontalSelectors';
import { TableHead } from './components/Table/TableHead/TableHead';
import TableRow from './components/Table/TableRow/TableRow';
import { TableCell } from './components/Table/TableCell/TableCell';
import { Table } from './components/Table/Table/Table';
import { TableBody } from './components/Table/TableBody/TableBody';
import { CardFullWidth } from './components/Card/CardFullWidth';
import Input from './components/Common/FormComponents/Input/Input';
import Dropdown from './components/Common/FormComponents/Dropdown/Dropdown';
import Tooltip from './components/Common/Tooltip/Tooltip';


function App() {

    const selectors = [
        { id: 1, label: 'Ожидаемые', borderColor: "#FFD22F" },
        { id: 2, label: 'Одобренные', borderColor: "#38C463" },
        { id: 3, label: 'Отклоненные', borderColor: "#FF3448" },
    ] as Array<SelectorType>
    const [activeSelector, setActiveSelector] = useState(selectors[0])



    const dropdownData = [
        { id: 1, value: 'А', disabled: true },
        { id: 2, value: 'Б' },
        { id: 3, value: 'С' }
    ]
    const [selectedValue, setSelectedValue] = useState(dropdownData[0].id)

    return (
        <div className="App">
            <DefaultHeader />
            <CustomHeader />

            <div style={{ margin: '20px' }}>
                <Menu
                    links={[
                        { title: "Описание", link: "/", exact: true, icon: <SearchIcon /> },
                        { title: "Направления", link: "/a", icon: <ArrowsIcon /> },
                        { title: "График занятости", link: "/b", icon: <ChartIcon /> },
                        { title: "Услуги", link: "/c", icon: <SettingsIcon />, iconFill: 'none' },
                        { title: "Методика", link: "/d", icon: <BookIcon /> },
                        { title: "Контакты", link: "/e", icon: <UserIcon /> },
                        { title: "Фотографии", link: "/e", icon: <PictureIcon /> },
                    ]}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <StepsMenu
                    steps={[
                        { title: '1. Отправка на публикацию ' },
                        { title: '2. Проверка качества' },
                        { title: '3. Назначение редакторов' },
                        { title: '4. Назначение рецензентов' },
                    ]}
                    currentStep={2}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <Card />
            </div>

            <div style={{ margin: '100px' }}>
                <CardFullWidth />
            </div>

            <div style={{ margin: '30px' }}>
                <Selectors selectors={selectors} activeSelector={activeSelector} setActiveSelector={setActiveSelector}/>
            </div>

            <div style={{ margin: '30px' }}>
                <Selectors
                    selectors={selectors}
                    activeSelector={activeSelector}
                    setActiveSelector={setActiveSelector}
                    collapsed={true}
                />
            </div>
            <div style={{ margin: 30 }}>
                <Input
                    inputProps={{
                        placeholder: 'Введите строку'
                    }}
                    isSuccess={true}
                    helperText="Подсказка"
                />
            </div>

            <div style={{ margin: 30 }}>
                <Dropdown
                    data={dropdownData}
                    selectedID={selectedValue}
                    handleChange={setSelectedValue}
                />
            </div>

            <div style={{ margin: '30px' }}>
           <Table>
                <TableHead>
                    <TableRow>
                        <TableCell variant="head">Имя</TableCell>
                        <TableCell variant="head">Почта</TableCell>
                        <TableCell variant="head">Приоритет</TableCell>
                        <TableCell variant="head">Принял / Дата</TableCell>
                        <TableCell variant="head">Статус</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Vladimir V Vitkin</TableCell>
                        <TableCell>ex@m.com</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>25.06.2020</TableCell>
                        <TableCell>В работе</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Vladimir V Vitkin</TableCell>
                        <TableCell>ex@m.com</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>25.06.2020</TableCell>
                        <TableCell>В работе</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>
            
            <div style={{ margin: 30 }}>
                <Tooltip
                    type="error"
                    title="Lorem ipsum dolor sit amet consectetur"               
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quaerat! Magnam excepturi illum quibusdam. Enim consequatur quidem assumenda maxime eaque?"
                />
            </div>
            <div style={{ margin: 30 }}>
                <Tooltip
                    type="default"
                    title="Lorem ipsum dolor sit amet consectetur"               
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quaerat! Magnam excepturi illum quibusdam. Enim consequatur quidem assumenda maxime eaque?"
                />
            </div>
            <div style={{ margin: 30 }}>
                <Tooltip
                    type="success"
                    title="Lorem ipsum dolor sit amet consectetur"               
                    description=" Lorem ipsum dolor sit amet consecuri illum qassumenda maxime eaque?"
                />
           </div>
           
        </div>
    );
}

export default App;
