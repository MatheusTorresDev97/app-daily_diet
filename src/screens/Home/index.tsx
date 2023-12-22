import { Typography } from "@components/Typography";
import { Container } from "./styles";
import { Header } from "@components/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Typography
        textAlign="right"
        color="green_dark"
        fontSize="title_lg"
        lineHeight="lg"
      >
        Home Screen
      </Typography>
      <Typography
        family="bold"
        lineHeight="lg"
        fontSize="title_sm"
        color="red_dark"
      >
        Home Screen
      </Typography>
      <Typography>Home Screen</Typography>
    </Container>
  );
};
