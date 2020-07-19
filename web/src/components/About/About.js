import React from 'react';
import './styles.css';

const About = () => {

    return (
        <div className='home-about'>
            <main>
                <h1> Sobre (About)</h1>
                <br/>
                <p>OneTask é uma aplicação WEB para gerenciamento de tarefas que foi desenvolvido utilizando React JS (FrontEnd) e NodeJS (BackEnd), também utiliza o MongoDB para armazenamento de Dados. Esta aplicação foi desenvolvida
                    sem fins lucrativos, seu único intuito foi o de aprendizado das ferramentas utilizadas em seu desenvolvimento. Essa aplicação foi desenvolvida por Alan Almeida (<a href="https://github.com/alan-dx">https://github.com/alan-dx</a>)
                </p>
                <br/>
                <p>OneTask is a web application for task management that was developed using React JS (FrontEnd) and NodeJS (BackEnd), also uses MongoDB for data storage. This application was developed on a non-profit basis, 
                    its only purpose was to learn the tools used in its development. This application was developed by Alan Almeida (<a href="https://github.com/alan-dx">https://github.com/alan-dx</a>)
                </p>
            </main>
        </div>
    );
}

export default About;