import { MealDTO } from "@dtos/MealDTO";
import { mealRemove } from "./mealRemove";
import { mealCreate } from "./mealCreate";

export const mealUpdate = async (id: string, meal: MealDTO) => {
  try {
    await mealRemove(id);

    await mealCreate(meal);
  } catch (error) {
    throw error;
  }
};
