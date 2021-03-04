import React from "react";
import { Alert, Collapse, CloseButton, Button } from "native-base";
import { Wrapper } from "../../components";
export const AlertUsage = function () {
  const [show, setShow] = React.useState(true);
  const handleToggle = (val: boolean) => setShow(val);
  return (
    <Wrapper>
      <Collapse isOpen={show}>
        <Alert
          status="error"
          action={
            <CloseButton size={"xs"} onPress={() => handleToggle(false)} />
          }
        >
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>description goes here</Alert.Description>
        </Alert>
      </Collapse>
      <Button size={"sm"} onPress={() => handleToggle(true)}>
        Re-Open
      </Button>
    </Wrapper>
  );
};
