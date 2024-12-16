import { Container } from "./styles";

type TagProps = {
    title: string
}

export function Tag ({title, ...rest}: TagProps) {
    return <Container {...rest}>
        {title}
    </Container>
}