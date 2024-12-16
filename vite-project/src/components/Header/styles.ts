import styled, {css} from "styled-components";

import { Link } from "react-router-dom";


export const Container = styled.header`
    ${({theme}) => css`
        grid-area: header;

        height: 105px;
        width: 100%;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${theme.BACKGROUND_700};

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 80px;
    `}
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span { 
            font-size: 14px;
            color: ${({theme}) => theme.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: 0;
    background: none;

    > svg {
        color: ${({theme}) => theme.ORANGE};
        font-size: 24px;
    }
`