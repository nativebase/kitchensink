import "intl";
import "intl/locale-data/jsonp/en";

import React from "react";
import { NativeBaseProvider, useColorModeValue } from "native-base";
import { RootStack } from "./src/navigators/RootStack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { kitchensinkTheme } from "./src/theme";
import { enableScreens } from "react-native-screens";

enableScreens(true);

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
    <NativeBaseProvider theme={kitchensinkTheme}>
      <NavigationProvider>
        <RootStack />
      </NavigationProvider>
    </NativeBaseProvider>
  );
}
