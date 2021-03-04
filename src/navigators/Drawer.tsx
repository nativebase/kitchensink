import React from "react";
import {
  createDrawerNavigator,
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
  useColorModeValue,
} from "native-base";
import { routes } from "./routes";
// Drawer Needs stack navigator to display headers
// https://github.com/react-navigation/react-navigation/issues/1632
const DrawerNavigator = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const selectedIndex = props.state.index;
  return (
    <DrawerContentScrollView {...props}>
      <Box py={8} bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack>
          <Box pl={8}>
            <Heading
              size="xl"
              color={useColorModeValue("emerald.400", "emerald.500")}
            >
              Nativebase v3
            </Heading>
          </Box>
          <Box pl={8}>
            <Heading
              size="lg"
              color={useColorModeValue("indigo.400", "indigo.500")}
            >
              KitchenSink
            </Heading>
          </Box>
          <Box p={4} />
          <Accordion allowToggle border={0}>
            {routes.map((item: any, index: number) => {
              return (
                // <Accordion allowToggle key={`drawer-content-${index}`} border={0}>
                <Accordion.Item key={`drawer-content-${index}`}>
                  <Accordion.Summary
                    // borderWidth={0}
                    // border={1}
                    borderRadius={0}
                    _expanded={{
                      bg: useColorModeValue("emerald.400", "emerald.500"),
                      _text: {
                        color: useColorModeValue("white", "black"),
                      },
                    }}
                  >
                    <Box>
                      <HStack
                        key={index}
                        // py={2}
                        pl={0}
                        space={3}
                        alignItems="center"
                      >
                        <Icon
                          color={useColorModeValue("black", "gray.100")}
                          name={item.icon}
                          type="MaterialIcons"
                        />
                        <Text fontSize="lg" bold>
                          {item.title}
                        </Text>
                      </HStack>
                    </Box>
                    <Accordion.Icon
                      color={useColorModeValue("black", "gray.100")}
                    />
                  </Accordion.Summary>
                  <Accordion.Details py={0} border={0}>
                    {item.variants.map(
                      (variant: { name: any; title: any }, ind: number) => {
                        const isSelected = selectedIndex === ind;
                        return (
                          <Button
                            key={ind}
                            // py={0}
                            pl={8}
                            justifyContent="space-between"
                            onPress={() =>
                              props.navigation.navigate(item.name, {
                                screen: variant.name,
                              })
                            }
                            variant="ghost"
                          >
                            <Text fontSize="lg">{variant.title}</Text>
                          </Button>
                        );
                      }
                    )}
                  </Accordion.Details>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </VStack>
      </Box>
    </DrawerContentScrollView>
  );
}

export function Drawer() {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="accordion"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {routes.map((route) => {
        return (
          <DrawerNavigator.Screen
            name={route.name}
            key={route.name}
            component={route.screen}
          />
        );
      })}
    </DrawerNavigator.Navigator>
  );
}
