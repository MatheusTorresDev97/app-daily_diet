import { TextProps } from "react-native"
import { Container } from "./styles"

type Props = TextProps

export const Typography = ({...props}:Props) => {
    return (
        <Container {...props} >
            {props.children}
        </Container>
    )
}