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
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
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
            my={8}
            rightIcon={
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
              toggleColorMode();
            }}
          >
            {`${colorMode === "light" ? "Dark" : "Light"} Mode`}
          </Button>
          <Box p={4} />
          {routes.map((item, index) => {
            return (
              <Accordion>
                <AccordionItem>
                  <AccordionButton>
                    <Box>
                      <HStack
                        key={index}
                        py={2}
                        pl={0}
                        space={3}
                        alignItems="center"
                      >
                        <Icon
                          color={useColorModeValue("black", "gray.100")}
                          name={item.icon}
                          type="MaterialIcons"
                        />
                        <Text fontSize="lg">{item.title}</Text>
                      </HStack>
                    </Box>
                    <AccordionIcon
                      color={useColorModeValue("black", "gray.100")}
                    />
                  </AccordionButton>
                  <AccordionPanel borderWidth={0}>
                    {item.variants.map((variant, ind) => {
                      const isSelected = selectedIndex === ind;
                      return (
                        <Button
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
                    })}
                  </AccordionPanel>
                </AccordionItem>
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
