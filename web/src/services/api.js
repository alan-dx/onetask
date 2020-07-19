import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const signIn = async (data) => {
    return await api.post("auth/login", data)
            .catch((err) => {
                if (err.response.data.error === "Invalid Password") {
                    alert("Senha Incorreta, verifique e tente novamente!")
                }
                if (err.response.data.error === "User not found") {
                    alert("Usuário não cadastrado!")
                }
            });
};

export const loadData = async (data) => {
    return await api.get('/project/')
};

export const createTask = async (data) => {
    return await api.post('/project/', data);
};

export const deleteTask = async (taskId) => {
    return await api.delete(`/project/${taskId}`);
};

export const editTask = async (data) => {
    return await api.put(`/project/${data.id}`, data)
}


export default api;