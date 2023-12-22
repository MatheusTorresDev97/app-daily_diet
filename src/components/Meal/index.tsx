import { Typography } from "@components/Typography";
import { Container, Divider, Status } from "./styles";

export type MealStatus = {isOnTheDiet: boolean}

type MealProps = MealStatus & {
  id: string,
  hour: string,
  description: string
}

export const Meal = ({id, hour, description, isOnTheDiet}: MealProps) => {
  return (
    <Container id={id}>
      <Typography fontSize="body_xs" family="bold">
        {hour}
      </Typography>
      <Divider />
      <Typography style={{ flex: 1 }} numberOfLines={1}>
       {description}
      </Typography>
      <Status isOnTheDiet={isOnTheDiet}/>
    </Container>
  );
};
