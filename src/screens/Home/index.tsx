import { Container } from "./styles";

import { Header } from "@components/Header";
import { Card } from "@components/Card";
import { View } from "react-native";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/Meal";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Card
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        bg="green"
        iconPosition="right"
        onPress={() => console.log("Clicou !")}
      />

      <View style={{ marginTop: 40 }}>
        <Typography fontSize="title_sm" style={{ marginBottom: 8 }}>
          Refeições
        </Typography>

        <Button 
        title="Nova refeição" 
        icon={<Plus color="white" size={18} />} 
        isActive
        onPress={() => console.log('Nova refeição')}
        type="solid"
        />
      </View>

      <Meal 
      id="01"
      hour="20:00"
      description="X-Tudo"
      isOnTheDiet={false}
      />
    </Container>
  );
};
