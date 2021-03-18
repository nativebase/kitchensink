import React from "react";
import { Menu, Divider, IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";

export const MenuUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Menu
        trigger={(triggerProps: any) => {
          return <IconButton icon={<Icon name="menu" />} {...triggerProps} />;
        }}
      >
        <Menu.Item isDisabled>Menu item 1</Menu.Item>
        <Menu.Item>Menu item 2</Menu.Item>
        <Menu.Item isDisabled>Menu item 3</Menu.Item>
        <Divider />
        <Menu.Item>Menu item 4</Menu.Item>
      </Menu>
    </Wrapper>
  );
};
