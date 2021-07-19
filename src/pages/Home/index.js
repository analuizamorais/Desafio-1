import React, { useState, useEffect, useRef } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import lottie from 'lottie-web';

export default function App(props) {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const container = useRef(null);
    
    const history = useHistory();

    function enviarEmail() {
        localStorage.setItem("email", email);
        localStorage.setItem("nome", nome);
        history.push('/thanks');
    };

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./coffee.json')
        })
    }, [])

    return (
        <S.Content ref={container}>
            <h1>ALICE IN COFFEELAND - Canecas Personalizadas</h1>
            <h2>Aqui acreditamos que seja possível mudar o mundo após uma xícara de café - de preferência com a sua personalidade estampada nela!
                Afinal, a única forma de chegar ao impossível, é acreditar que é possível.</h2>
            <S.FormContainer>
                <h2>Ei, CoffeeLover! Receba as novidades diretamente no seu e-mail!</h2>
                <h3>Como podemos te chamar?</h3>
                <S.Input className="nome" placeholder="Seu nome ou apelido" value={nome} onChange={e => setNome(e.target.value)} />
                <h3>Insira o seu melhor e-mail!</h3>
                <S.Input className="email" placeholder="exemplo@provedor.com" value={email} onChange={e => setEmail(e.target.value)} />
                <p></p><S.Button type="button" onClick={enviarEmail}> Enviar </S.Button>
            </S.FormContainer>
        
        </S.Content>
    );
}