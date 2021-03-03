import React from "react";
import { Menu, Divider, IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";

export const MenuUsage = function () {
  return (
    <Wrapper>
      <Menu
        trigger={(triggerProps: any) => {
          return (
            <IconButton
              icon={<Icon name="menu" />}
              {...triggerProps}
              bg="teal.200"
            />
          );
        }}
      >
        <Menu.Item disabled>Menu item 1</Menu.Item>
        <Menu.Item>Menu item 2</Menu.Item>
        <Menu.Item disabled>Menu item 3</Menu.Item>
        <Divider />
        <Menu.Item>Menu item 4</Menu.Item>
      </Menu>
    </Wrapper>
  );
};
