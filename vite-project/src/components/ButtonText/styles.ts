import styled from "styled-components";

type ContainerProps = {
    $isactive: "true" | "false"
}

export const Container = styled.button<ContainerProps>`
    background: none;
    color: ${({theme, $isactive}) => $isactive === 'true' ? theme.ORANGE : theme.GRAY_100};

    border: none;
    font-size: 16px;

    transition: 300ms ease-in;
`