import styled from "styled-components";

type Props = {
    $isnew: 'true' | 'false'
}

export const Container = styled.div<Props>`
    display: flex;
    align-items: center;

    background-color: ${({theme, $isnew}) => $isnew === 'true' ? "transparent" : theme.BACKGROUND_900};
    color: ${({theme}) => theme.GRAY_300};

    border: ${({theme, $isnew}) => $isnew === 'true' ? `2px dashed ${theme.GRAY_300}` : `none`};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;

        svg {
            color: ${({theme, $isnew}) => $isnew === 'true' ? theme.WHITE : theme.RED}
        }
    }

    > input { 
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({theme}) => theme.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.GRAY_300}
        }
    }
`