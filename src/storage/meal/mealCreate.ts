import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealsGetAll } from "./mealGetAll";

import { MealDTO } from "@dtos/MealDTO";

export const mealCreate = async (newMeal: MealDTO) => {
  try {
    //Eu recupero todos os itens
    const storedMeals = await mealsGetAll();

    //recupera todos os itens anteriores e adiciona a nova refeição
    const storage = JSON.stringify([...storedMeals, newMeal]);

    //armazenar em armazenamento
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
