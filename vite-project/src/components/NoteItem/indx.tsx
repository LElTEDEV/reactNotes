import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

type Props = {
    isNew?: boolean,
    value?: string,
    onClick?: () => void,
    placeholder?: string
}

export function NoteItem ({isNew = false, value, onClick, placeholder, ...rest}: Props) {

    const novo = isNew === false ? 'false' : 'true'

    return (
        <Container $isnew={novo}>
            <input type="text" value={value} readOnly={!isNew} placeholder={placeholder} {...rest}/>

            <button onClick={onClick} type="button">
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}