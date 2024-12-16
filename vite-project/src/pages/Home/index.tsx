import { useState } from "react";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { FiPlus, FiSearch } from "react-icons/fi"; 

import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";


const itemsMenu = ['Todos', 'React', 'Nodejs']
export function Home () {
    const [active, setActive] = useState('Todos')

    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            
            <Header />

            <Menu>
                {itemsMenu.map(item => (
                    <li key={item}>
                        <ButtonText title={item} onClick={() => setActive(item)} isActive={active === item} />
                    </li>)
                )}
            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título"/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{title: "React", tags: [{id: '1', name: 'Express'}, {id: '2', name: 'Nodejs'}]}}/>
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    )
}