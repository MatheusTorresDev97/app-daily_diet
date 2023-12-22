import { Typography } from "@components/Typography";
import {
  ButtonToStaticLeft,
  ButtonToStaticRight,
  Container,
  IconArrowLeft,
  IconArrowUpRight,
  Title,
} from "./styles";
import { ViewProps } from "react-native";
import { FontSizeTitle } from "@dtos/StylesDTO";

export type CardColor = { bg?: "gray" | "green" | "red" };
export type TextSize = { titleFontSize?: FontSizeTitle };
export type ButtonFloat = { iconPosition?: "left" | "right" };

type CardProps = ViewProps &
  CardColor &
  TextSize &
  ButtonFloat & {
    title: string;
    subtitle: string;
    showIconButton?: boolean;
    onPress?: () => void;
  };

export const Card = ({
  bg = "gray",
  iconPosition = "right",
  titleFontSize = "title_lg",
  showIconButton = true,
  ...props
}: CardProps) => {
  return (
    <Container bg={bg} {...props}>
      {showIconButton &&
        (iconPosition === "left" ? (
          <ButtonToStaticLeft onPress={props.onPress}>
            <IconArrowLeft bg={bg} />
          </ButtonToStaticLeft>
        ) : (
          <ButtonToStaticRight onPress={props.onPress}>
            <IconArrowUpRight bg={bg} />
          </ButtonToStaticRight>
        ))}
      <Title titleFontSize={titleFontSize}>{props.title}</Title>
      <Typography
        color="gray_2"
        fontSize="body_sm"
        style={{ textAlign: "center" }}
      >
        {props.subtitle}
      </Typography>
    </Container>
  );
};
