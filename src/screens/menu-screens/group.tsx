import React from "react";
import { Menu, Divider, IconButton, Icon } from "native-base";
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
        <Menu.Group title="Profile">
          <Menu.Item>Menu item 1</Menu.Item>
          <Menu.Item>Menu item 2</Menu.Item>
        </Menu.Group>
        <Divider />
        <Menu.Group title="Help">
          <Menu.Item disabled>Menu item 3</Menu.Item>
          <Menu.Item>Menu item 4</Menu.Item>
        </Menu.Group>
      </Menu>
    </Wrapper>
  );
};
