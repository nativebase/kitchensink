import "intl";
import "intl/locale-data/jsonp/en";

import React from "react";
import { NativeBaseProvider, useColorModeValue } from "native-base";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./src/navigators/CustomDrawer";
import ScreenMap from "./ScreenMap";

enableScreens();

const Drawer = createDrawerNavigator();

const NavigationProvider = (props: any) => {
  return (
    <NavigationContainer
      theme={useColorModeValue(DefaultTheme, DarkTheme)}
      {...props}
    />
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationProvider>
        <Drawer.Navigator drawerContent={CustomDrawerContent}>
          {ScreenMap.map((screen: { name: string; screen: any }) => (
            <Drawer.Screen name={screen.name} component={screen.screen} />
          ))}
        </Drawer.Navigator>
      </NavigationProvider>
    </NativeBaseProvider>
  );
}
