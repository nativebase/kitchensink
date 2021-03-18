import React from "react";
import { Menu, IconButton, Divider, Icon } from "native-base";
import { Wrapper } from "../../components";

export const MenuOGExample = function (props: any) {
  return (
    <Wrapper {...props}>
      <Menu
        closeOnSelect={false}
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        trigger={(triggerProps: any) => {
          return (
            <IconButton icon={<Icon name="menu" />} {...triggerProps}>
              Show Menu
            </IconButton>
          );
        }}
      >
        <Menu.OptionGroup defaultValue="asc" title="Order" type="radio">
          <Menu.ItemOption value="asc">Ascending</Menu.ItemOption>
          <Menu.ItemOption value="desc">Descending</Menu.ItemOption>
        </Menu.OptionGroup>
        <Divider />
        <Menu.OptionGroup title="Country" type="checkbox">
          <Menu.ItemOption value="email" _text={{ fontWeight: "bold" }}>
            Email
          </Menu.ItemOption>
          <Menu.ItemOption value="phone">Phone</Menu.ItemOption>
          <Menu.ItemOption value="country">Country</Menu.ItemOption>
        </Menu.OptionGroup>
      </Menu>
    </Wrapper>
  );
};
