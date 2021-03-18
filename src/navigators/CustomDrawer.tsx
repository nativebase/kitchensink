import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  Heading,
  Icon,
  Accordion,
} from "native-base";
import { routes } from "./routes";

// Drawer Needs stack navigator to display headers
// https://github.com/react-navigation/react-navigation/issues/1632

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <DrawerContentScrollView {...props}>
      <Box py={8}>
        <VStack>
          <Box px={6}>
            <Heading>Nativebase V3</Heading>
          </Box>

          <Box px={6} pt={2} pb={4}>
            <Text fontWeight={"500"}>KitchenSink</Text>
          </Box>

          {routes.map((item, index) => {
            return (
              <Accordion border={0} mx={2}>
                <Accordion.Item>
                  <Accordion.Summary
                    _expanded={{ backgroundColor: "teal.100" }}
                  >
                    <Box>
                      <HStack
                        key={index}
                        py={2}
                        pl={0}
                        space={3}
                        alignItems="center"
                      >
                        <Icon name={item.icon} type="MaterialIcons" />
                        <Text fontSize="md" pl={4}>
                          {item.title}
                        </Text>
                      </HStack>
                    </Box>
                    <Accordion.Icon />
                  </Accordion.Summary>
                  <Accordion.Details borderWidth={0}>
                    {item.variants.map((variant, ind) => {
                      return (
                        <Button
                          key={ind}
                          pl={8}
                          justifyContent="space-between"
                          onPress={() =>
                            props.navigation.navigate(variant.name, {
                              title: item.title,
                            })
                          }
                          variant="ghost"
                        >
                          <Text fontSize="sm">{variant.title}</Text>
                        </Button>
                      );
                    })}
                  </Accordion.Details>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </VStack>
      </Box>
    </DrawerContentScrollView>
  );
}
