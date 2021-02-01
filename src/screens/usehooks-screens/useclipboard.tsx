import React from 'react';
import {
  Button,
  HStack,
  VStack,
  Text,
  Input,
  useClipboard,
  Box,
} from 'native-base';
import { Wrapper } from '../../components';

export const UseClipboardUsage = function () {
  const [copyText, setCopyText] = React.useState('Copy Me');
  const [pasteText, setPasteText] = React.useState('');
  const { value, onCopy, hasCopied } = useClipboard();

  return (
    <Wrapper>
      <VStack space={2}>
        <Box space={3} flexDirection={'row'}>
          <Input
            w='60%'
            placeholder='Copy From'
            onChangeText={(v: any) => setCopyText(v)}
            value={copyText}
          />
          <Button onPress={() => onCopy(copyText)}>Copy</Button>
        </Box>
        <Box space={3} flexDirection={'row'}>
          <Text>{hasCopied ? 'Copied' : 'Press here'}</Text>
          <Input
            w='60%'
            placeholder='Paste To'
            onChangeText={(v: any) => setPasteText(v)}
            value={pasteText}
          />
          <Button onPress={() => setPasteText(value)}>Paste</Button>
        </Box>
      </VStack>
    </Wrapper>
  );
};
