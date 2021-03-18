import "intl";
import "intl/locale-data/jsonp/en";

import React from "react";
import { NativeBaseProvider, Text, useColorModeValue, View } from "native-base";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./src/navigators/CustomDrawer";
import ScreenMap from "./ScreenMap";
import { useHeaderOptions } from "./src/components";

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
  enableScreens();

  return (
    <NativeBaseProvider>
      <NavigationProvider>
        <Drawer.Navigator
          drawerContent={CustomDrawerContent}
          screenOptions={{
            header: () => (
              <View>
                <Text h="100">asfds</Text>
              </View>
            ),
          }}
        >
          {ScreenMap.map((screen: { name: string; screen: any }) => (
            <Drawer.Screen
              key={screen.name}
              name={screen.name}
              component={screen.screen}
              options={useHeaderOptions("test", {})}
            />
          ))}
        </Drawer.Navigator>
      </NavigationProvider>
    </NativeBaseProvider>
  );
}
