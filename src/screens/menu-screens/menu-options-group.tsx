import React from "react";
import {
  Menu,
  MenuItemOption,
  IconButton,
  MenuOptionGroup,
  Divider,
  Icon,
} from "native-base";
import { Wrapper } from "../../components";

export const MenuOGExample = function () {
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
        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
          <MenuItemOption value="asc">Ascending</MenuItemOption>
          <MenuItemOption value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
        <Divider />
        <MenuOptionGroup title="Country" type="checkbox">
          <MenuItemOption value="email">Email</MenuItemOption>
          <MenuItemOption value="phone">Phone</MenuItemOption>
          <MenuItemOption value="country">Country</MenuItemOption>
        </MenuOptionGroup>
      </Menu>
    </Wrapper>
  );
};
