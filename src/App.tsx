import React, { useState } from 'react';
import './App.scss';
import { Button } from './components/Common/Button/Button';
import { DefaultHeader, CustomHeader } from './components/Header/DefaultHeader/Headers';
import AuthForm from './components/AuthForm/AuthForm';

function App() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="App">
            <DefaultHeader />
            <CustomHeader />


            <Button variant="filled" theme="blue" onClick={() => { setModalOpen(true) }}>ФОРМА</Button>
            <AuthForm open={modalOpen} setOpen={setModalOpen} />

        </div>
    );
}

export default App;
