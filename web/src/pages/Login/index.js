import React, {useContext} from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

import InputEmail from '../../components/InputEmail';
import InputPass from '../../components/InputPass';
import { useState } from 'react';

import AuthContext from '../../contexts/auth';

const Login = () => {
    
    const {signInContext} = useContext(AuthContext);
    const [data, setData] = useState({
        email: '',
        password: '' 
    });

    function handleInputEmail(event) {
        const email = event.target.value;
        setData({...data, email});
    };

    function handleInputPassword(event) {
        const password = event.target.value;
        setData({...data, password});
    };

    async function handleSubmit(event) {
        event.preventDefault();
        if (!data.email || !data.password) {
            return alert('Verifique os campos, preencha-os corretamente!')
        }else{
            signInContext(data);
        }
    };
    
    return (
        <div id='page-login'>
            <div className="content">
                <main>
                    <h1>OneTask - Seu gerenciador de tarefas!</h1>
                    <div className="container-login">
                        <header>
                            <h2>LOGIN</h2>
                        </header>

                        <main>
                            <form onSubmit={handleSubmit} method="post">
                                <InputEmail onChange={handleInputEmail} />
                                <InputPass onChange={handleInputPassword} />
                                <button type='submit'>
                                    Logar
                                </button>
                            </form>
                        </main>
                            <label id='registry'>Não possui uma conta? <Link to='/register'>Cadastre-se</Link></label>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Login;