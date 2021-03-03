import { Button, Icon } from "native-base";
import React from "react";

export function MenuButton({ toggleDrawer }: { toggleDrawer: any }) {
  return (
    <Button
      onPress={toggleDrawer}
      p={0}
      variant="ghost"
      startIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
    ></Button>
  );
}
