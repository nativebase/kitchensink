import "intl";
import "intl/locale-data/jsonp/en";

import React from "react";
import { NativeBaseProvider } from "native-base";
import { RootStack } from "./src/navigators/RootStack";
import { NavigationContainer } from "@react-navigation/native";
import { kitchensinkTheme } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={kitchensinkTheme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
