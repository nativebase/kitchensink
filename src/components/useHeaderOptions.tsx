import React from "react";
import { IconButton, Icon, useColorMode } from "native-base";

export const useHeaderOptions = function (title: string, props: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  return {
    headerTitle: title,
    headerLeft: () => (
      <IconButton
        pl={5}
        onPress={props.navigation.toggleDrawer}
        icon={<Icon name="md-menu" type="Ionicons" size={6} />}
      />
    ),
    headerRight: () => (
      <IconButton
        pr={5}
        onPress={toggleColorMode}
        icon={
          <Icon
            name={colorMode === "dark" ? "md-sunny" : "md-moon"}
            type="Ionicons"
            size={6}
          />
        }
      />
    ),
  };
};
