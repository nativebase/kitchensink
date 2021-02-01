import React from 'react';
import {
  AppBar,
  IconButton,
  Icon,
  Box,
  Text,
  HStack,
  VStack,
  Button,
} from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Wrapper } from '../../components';

export const AppbarExamples = function () {
  return (
    <Wrapper>
      <ScrollView style={{ width: '100%' }}>
        <VStack space={10}>
          <Box>
            <Material />
          </Box>

          <Box>
            <IOSLike />
          </Box>

          <Box>
            <Customized />
          </Box>

          <Box>
            <CustomizedWithBorder />
          </Box>
        </VStack>
      </ScrollView>
    </Wrapper>
  );
};

function Material() {
  return (
    <AppBar shadow={1} colorScheme='lightBlue'>
      <AppBar.Left>
        <LeftArrowIconButton />
      </AppBar.Left>

      <AppBar.Content>
        <VStack space={1}>
          <Text fontWeight='bold' fontSize='lg' isTruncated color='white'>
            Title
          </Text>
          <Text isTruncated color='white'>
            Subtitle
          </Text>
        </VStack>
      </AppBar.Content>

      <AppBar.Right space={2}>
        <HeartIcon />
        <SearchIcon />
        <MoreIcon />
      </AppBar.Right>
    </AppBar>
  );
}

function IOSLike() {
  return (
    <AppBar bg='white' shadow={2}>
      <AppBar.Left>
        <TouchableOpacity>
          <HStack alignItems='center' space={1}>
            <Icon
              name='angle-left'
              type='FontAwesome'
              size={10}
              color='blue.500'
            />
            <Text fontWeight={'bold'} color='blue.500' fontSize='md'>
              Back
            </Text>
          </HStack>
        </TouchableOpacity>
      </AppBar.Left>

      <AppBar.Content justifyContent='center'>
        <Text isTruncated fontWeight='bold' fontSize={'lg'} color='gray.700'>
          Header
        </Text>
      </AppBar.Content>

      <AppBar.Right>
        <Button onPress={() => {}} colorScheme='blue' variant='ghost'>
          <Text fontWeight={'bold'} color='blue.500' fontSize='md'>
            Cancel
          </Text>
        </Button>
      </AppBar.Right>
    </AppBar>
  );
}

function Customized() {
  return (
    <AppBar bg='blue.900' shadow={1}>
      <AppBar.Left>
        <IconButton
          icon={
            <Icon
              name='angle-left'
              type='FontAwesome'
              size={10}
              color='white'
            />
          }
        />
      </AppBar.Left>
      <AppBar.Content>
        <Text isTruncated color='white' fontWeight='bold' fontSize={22}>
          Library
        </Text>
      </AppBar.Content>
      <AppBar.Right>
        <IconButton
          icon={
            <Icon name='folder-music' type='Entypo' size={8} color='white' />
          }
        />
      </AppBar.Right>
    </AppBar>
  );
}

function CustomizedWithBorder() {
  return (
    <AppBar bg='white' shadow={3} px={4} space={3}>
      <AppBar.Left>
        <IconButton icon={<Icon name='menu' type='MaterialIcons' size={6} />} />
      </AppBar.Left>
      <AppBar.Content>
        <Text isTruncated fontWeight='bold' fontSize={20}>
          Home
        </Text>
      </AppBar.Content>
      <AppBar.Right space={4}>
        <IconButton icon={<Icon name='search' size={6} />} />
        <IconButton
          icon={<Icon name='shopping-bag' type='Entypo' size={6} />}
        />
        <IconButton
          icon={<Icon name='bookmark-o' type='FontAwesome' size={6} />}
        />
      </AppBar.Right>
    </AppBar>
  );
}

const LeftArrowIconButton = () => {
  return (
    <IconButton
      icon={
        <Icon
          name='arrow-left'
          type='MaterialCommunityIcons'
          size={8}
          color='white'
        />
      }
    />
  );
};

const HeartIcon = () => {
  return (
    <IconButton
      icon={
        <Icon name='heart-outline' type='Ionicons' size={6} color='white' />
      }
    />
  );
};
const SearchIcon = () => {
  return <IconButton icon={<Icon name='search' size={6} color='white' />} />;
};
const MoreIcon = () => {
  return (
    <IconButton
      icon={
        <Icon
          name='dots-vertical'
          type='MaterialCommunityIcons'
          size={6}
          color='white'
        />
      }
    />
  );
};
