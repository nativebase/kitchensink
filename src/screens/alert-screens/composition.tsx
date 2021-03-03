import React from "react";
import { Alert, Box, VStack } from "native-base";
import { Wrapper } from "../../components";
export const AlertComposition = () => {
  return (
    <Wrapper>
      <VStack mx={3} space={3}>
        <Alert
          status="success"
          variant="subtle"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="200px"
        >
          <Alert.Icon boxSize="40px" mr={0} />
          <Alert.Title mt={4} mb={1}>
            Application submitted!
          </Alert.Title>
          <Alert.Description>
            Thanks for submitting your application. Our team will get back to
            you soon.
          </Alert.Description>
        </Alert>

        <Alert status="success">
          <Alert.Icon />
          <Box flex={1}>
            <Alert.Title>Success!</Alert.Title>
            <Alert.Description>
              Your application has been received. We will review your
              application and respond within the next 48 hours.
            </Alert.Description>
          </Box>
        </Alert>
      </VStack>
    </Wrapper>
  );
};
