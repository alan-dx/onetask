import React from 'react';
import './styles.css'
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

import InputEmail from '../../components/InputEmail';
import InputPass from '../../components/InputPass';
import InputName from '../../components/InputName';
import { useState } from 'react';

const Register = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const history = useHistory();

    function handleInputNameChange(event) {
        const name = event.target.value;
        setData({...data, name: name})
    }

    function handleInputEmailChange(event) {
        const email = event.target.value;
        setData({...data, email: email})
    }

    function handleInputPassChange(event) {
        const password = event.target.value;
        setData({...data, password: password})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!data.name || !data.email || !data.password) {
            return alert("Você deve preencher todos os campos para finalizar o cadastro!")
        } else {
            await api.post('auth/register', data)
                .then(() => {
                    alert("Cadastro realizado com sucesso!")
                    history.push('/')
                })
                .catch((err) => {
                    if (err.response.data.error === 'Email already in use!') {
                        alert("Este email já foi cadastrado!")
                    }
                })
        }

    }
    
    return (
        <div id="page-registry">
            <div className="content">
                <main>
                    <h1>OneTask - Seu gerenciador de tarefas!</h1>

                    <div className='container-registry'>
                        <header>
                            <h2>CADASTRO</h2>
                        </header>

                        <main>
                            <form onSubmit={handleSubmit} action="" method="post">
                                <InputName onChange = {handleInputNameChange} />
                                <InputEmail onChange = {handleInputEmailChange} />
                                <InputPass onChange = {handleInputPassChange} />
                                <button type='submit'>
                                    Cadastrar
                                </button>
                            </form>
                        </main>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Register;