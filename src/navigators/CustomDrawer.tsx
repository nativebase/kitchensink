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
          <Box pl={8}>
            <Heading>Nativebase V3</Heading>
          </Box>

          <Box pl={8}>
            <Heading>KitchenSink</Heading>
          </Box>
          <Box p={4} />

          {routes.map((item, index) => {
            return (
              <Accordion>
                <Accordion.Item>
                  <Accordion.Summary>
                    <Box>
                      <HStack
                        key={index}
                        py={2}
                        pl={0}
                        space={3}
                        alignItems="center"
                      >
                        <Icon name={item.icon} type="MaterialIcons" />
                        <Text fontSize="lg">{item.title}</Text>
                      </HStack>
                    </Box>
                    <Accordion.Icon />
                  </Accordion.Summary>
                  <Accordion.Details borderWidth={0}>
                    {item.variants.map((variant, ind) => {
                      return (
                        <Button
                          pl={8}
                          justifyContent="space-between"
                          onPress={() =>
                            props.navigation.navigate(variant.name)
                          }
                          variant="ghost"
                        >
                          <Text fontSize="lg">{variant.title}</Text>
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
