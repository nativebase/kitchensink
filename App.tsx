import React from "react";
import { NativeBaseProvider, Box, Flex, View, Text } from "native-base";
import { RootStack } from "./src/navigators/RootStack";
import { NavigationContainer } from "@react-navigation/native";
import { kitchensinkTheme } from "./src/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./src/navigators/CustomDrawer";
import { MenuButton } from "./src/components";
import ScreenMap from "./ScreenMap";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function HomeScreen1() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

import { enableScreens } from "react-native-screens";
enableScreens();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={kitchensinkTheme}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={CustomDrawerContent}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={HomeScreen1} />
          {ScreenMap.map((screen) => (
            <Drawer.Screen name={screen.name} component={screen.screen} />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
