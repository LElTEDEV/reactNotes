import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { FiLock, FiLogIn } from "react-icons/fi";
import { Button } from "../../components/Button";

export function SignIn () {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="text" icon={FiLogIn}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Entrar"/>

                <a href="#">
                    Criar conta
                </a>
            </Form>
        </Container>
    )
}