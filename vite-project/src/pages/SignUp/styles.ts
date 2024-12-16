import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 { 
        font-size: 48px;
        color: ${({theme}) => theme.ORANGE};
    }

    > h2 {
        font-size: 24px;
        margin-top: 44px;
        margin-bottom: 24px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.GRAY_100};
    }

    > a {
        margin-top: 124px;
        color: ${({theme}) => theme.ORANGE};
    }
`