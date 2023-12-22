import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "@dtos/MealDTO";

export const mealsGetAll = async () => {
  try {
    //Eu recupero todos os itens
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    //se tiver itens, execute uma análise; caso contrário, ele retornará um array vazio
    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
};
