import { Container } from "./styles";
 
type ButtonTextProps = React.ComponentPropsWithoutRef<"button"> & {
    title: string,
    isActive?: boolean
}
 
export function ButtonText ({title, isActive = false, ...rest}: ButtonTextProps) {
    return <Container type="button" $isactive={isActive.toString()} {...rest}>
        {title}
    </Container>
}