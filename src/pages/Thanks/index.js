import React, { useEffect, useRef } from 'react';
import * as S from './styled';
import lottie from 'lottie-web';


export default function Thanks() {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./thanks.json')
        })
    }, [])
    return (
        <S.Content>
            <S.Thanks> Obrigada pela visita! </S.Thanks>
            <S.ThanksContainer ref={container}></S.ThanksContainer>
        </S.Content>

    );
}