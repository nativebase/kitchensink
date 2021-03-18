import React from "react";
import { List } from "native-base";
import { Wrapper } from "../../components";
import { VirtualizedList } from "react-native";

const DATA: any = [];

const getItem = (_data: any, index: number) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data: any) => 500;

const Item = ({ title }: any) => (
  <List.Item
    bg="emerald.200"
    borderRadius="md"
    justifyContent="center"
    _text={{ fontSize: "2xl" }}
    px={4}
    py={2}
    my={2}
  >
    {title}
  </List.Item>
);

export const ListVirtualized = function (props: any) {
  return (
    <Wrapper {...props}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item: any) => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </Wrapper>
  );
};
