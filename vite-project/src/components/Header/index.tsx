import { Container, Profile, Logout } from "./styles";

import {RiShutDownLine} from 'react-icons/ri'

export function Header () {
    return <Container>
        <Profile>
            <img src="https://github.com/igor.png" />

            <div>
                <span>Bem-vindo</span>
                <strong>Igor Matioli</strong>
            </div>
        </Profile>

        <Logout type="button">
            <RiShutDownLine />
        </Logout>
    </Container>
}