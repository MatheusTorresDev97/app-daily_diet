import { Container } from "./styles";

import { Header } from "@components/Header";
import { Card } from "@components/Card";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Card
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        bg="green"
        iconPosition="right"
      />
    </Container>
  );
};
