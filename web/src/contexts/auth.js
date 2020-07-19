import React, {createContext, useState, useEffect} from 'react';
import api, {signIn} from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {//Todos os elementos filhos terão acesso as informaçõe
    
    const [token, setToken] = useState(null);

    useEffect(() => {
        async function loadStorageData() {
           const storageToken = localStorage.getItem('@OneTask:token');
           
           if (storageToken) {
               setToken(storageToken)
               api.defaults.headers['Authorization'] = `Bearer ${storageToken}`; //Definindo que todas as requisições para api subsequentes enviem como padrão um Header com o token
           }
        }

        loadStorageData();
    })


    async function signInContext(data) {
        const response = await signIn(data);

        if (response !== undefined) {
            const { token } = response.data;

            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`; //Definindo que todas as requisições para api subsequentes enviem como padrão um Header com o token

            localStorage.setItem('@OneTask:token', response.data.token);
            setToken(token)
        }
        console.log(token)

    };

    function LogoutContext() {
        setToken(null);
        localStorage.clear();
    }

    return (
        //signed é quem controlará o login
        <AuthContext.Provider value={{signed: !!token, token, signInContext, LogoutContext}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

