import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem/indx";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";

export function New () {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título"/>

                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem isNew placeholder="https://exemplo.com"/>
                        <NoteItem value="https://asernet.com.br"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem isNew placeholder="express"/>
                            <NoteItem value="React"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}