import React from "react";

import { Container } from "./styles";

import { Tag } from "../Tag";

type Tag = {
    id: string
    name: string
}

type Props = {
    title: string
    tags?: Tag[]
}

type NoteProps = React.ComponentPropsWithoutRef<"button"> & {
    data: Props
}

export function Note ({data, ...rest}: NoteProps) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            {
                data.tags && <footer>
                    {
                        data.tags.map(tag => <Tag title={tag.name} key={tag.id} /> ) 
                    }
                </footer>
            }
        </Container>
    )
}