
import { Container } from "./styles";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &  {
    title: string,
    loading?: boolean
}

export function Button ({title, loading = false, ...rest}: ButtonProps) {
    return <Container type="button" disabled={loading} {...rest}>
        {loading ? 'Carregando' : title}
    </Container>
}