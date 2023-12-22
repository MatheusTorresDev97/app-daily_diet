import { Typography } from "@components/Typography";
import { Container, Divider, Status } from "./styles";

export const Meal = () => {
  return (
    <Container>
      <Typography fontSize="body_xs" family="bold">
        20:00
      </Typography>
      <Divider />
      <Typography style={{ flex: 1 }} numberOfLines={1}>
        X-tudo
      </Typography>
      <Status />
    </Container>
  );
};
