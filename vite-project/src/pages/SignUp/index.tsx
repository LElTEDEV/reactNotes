import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { FiLock, FiLogIn, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";

export function SignUp () {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="email" icon={FiLogIn}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Cadastrar"/>

                <a href="#">
                    Voltar para login
                </a>
            </Form>
        </Container>
    )
}