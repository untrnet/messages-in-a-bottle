import { Box, Title } from "bloomer";
import * as React from "react";

export interface MessageProps {
  currentMessage?: string;
  errorText: string;
}

export const Message = (props: MessageProps): JSX.Element => (
  <Box>
    {(props.currentMessage)
      ?
      <Title
        isSize={2}
        hasTextAlign="centered"
      >
        {props.currentMessage}
      </Title>
      :
      <Title
        isSize={2}
        hasTextAlign="centered"
        hasTextColor="info"
      >
        {props.currentMessage}
      </Title>
    }
  </Box>
);