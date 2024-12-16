import { Container } from "./styles"

type Props = React.ComponentPropsWithoutRef<"textarea"> & {
    value?: string
}

export function TextArea ({value, ...rest}: Props) {
    return (
        <Container {...rest}>
            {value}
        </Container>
    )
}