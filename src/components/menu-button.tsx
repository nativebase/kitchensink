import { IconButton, Icon } from "native-base";
import React from "react";

export function MenuButton({ toggleDrawer }: { toggleDrawer: any }) {
  return (
    <IconButton
      onPress={toggleDrawer}
      // size={6}
      // variant="unstyled"
      colorScheme="dark"
      icon={<Icon name={"menu"} />}
    />
  );
}
