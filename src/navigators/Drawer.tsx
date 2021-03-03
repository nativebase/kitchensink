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
  useColorMode,
} from "native-base";
import { routes } from "./routes";
// Drawer Needs stack navigator to display headers
// https://github.com/react-navigation/react-navigation/issues/1632
const DrawerNavigator = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const selectedIndex = props.state.index;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <DrawerContentScrollView {...props}>
      <Box py={8} bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack>
          <Box pl={8}>
            <Heading>Nativebase V3</Heading>
          </Box>
          <Box pl={8}>
            <Heading>KitchenSink</Heading>
          </Box>
          <Button
            mx={10}
            my={4}
            endIcon={
              colorMode === "light" ? (
                <Icon
                  name="brightness-3"
                  color="white"
                  size={6}
                  type="MaterialIcons"
                />
              ) : (
                <Icon
                  name="brightness-7"
                  color="gray.800"
                  size={6}
                  type="MaterialIcons"
                />
              )
            }
            colorScheme={colorMode === "light" ? "blue" : "red"}
            onPress={() => {
              toggleColorMode && toggleColorMode();
            }}
          >
            {`${colorMode === "light" ? "Dark" : "Light"} Mode`}
          </Button>
          <Box p={4} />
          {routes.map((item: any, index: number) => {
            return (
              <Accordion key={`drawer-content-${index}`} border={0}>
                <Accordion.Item>
                  <Accordion.Summary
                    // borderWidth={0}
                    // border={1}
                    borderRadius={0}
                    _expanded={{
                      bg: "blue.200",
                      _text: {
                        color: "white",
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
              </Accordion>
            );
          })}
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
