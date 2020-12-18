import React from "react";
import {
  Menu,
  MenuItem,
  Divider,
  IconButton,
  MenuGroup,
  Icon,
} from "native-base";
import { Wrapper } from "../../components";

export const MenuGroupExample = function () {
  return (
    <Wrapper>
      <Menu
        closeOnSelect={false}
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        trigger={(triggerProps: JSX.IntrinsicAttributes) => {
          return (
            <IconButton icon={<Icon name="menu" />} {...triggerProps}>
              Show Menu
            </IconButton>
          );
        }}
      >
        <MenuGroup title="Profile">
          <MenuItem>Menu item 1</MenuItem>
          <MenuItem>Menu item 2</MenuItem>
        </MenuGroup>
        <Divider />
        <MenuGroup title="Help">
          <MenuItem disabled>Menu item 3</MenuItem>
          <MenuItem>Menu item 4</MenuItem>
        </MenuGroup>
      </Menu>
    </Wrapper>
  );
};
