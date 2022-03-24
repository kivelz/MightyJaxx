import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
  
import HomeScreen from "../Coding-Challenge-for-Mobile-Engineers/app/view/HomeScreen";
import { configureStore } from "./store/configureStore";

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    Gallery: HomeScreen,
   
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 24,
      },
      headerTintColor: "#FFF",
    },
  },
 
);
  
const Navigator = createAppContainer(AppNavigator);
  
export default function App() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}