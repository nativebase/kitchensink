import { useColorMode, Icon, IconButton } from "native-base";
import React from "react";

export function ThemeButton({ toggleDrawer }: { toggleDrawer: any }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onPress={toggleColorMode}
      icon={
        <Icon
          name={colorMode === "dark" ? "light-up" : "md-moon"}
          type={colorMode === "dark" ? "Entypo" : "Ionicons"}
          size={6}
        />
      }
    />
  );
}
