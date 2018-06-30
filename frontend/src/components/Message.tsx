import { Box, Title } from "bloomer";
import * as React from "react";

export interface MessageProps {
  currentMessage?: string;
  errorText: string;
}

/**
 * A component which shows the most recent message saved on the backend.
 * @param {MessageProps} props The props handed into the component.
 */
export const Message = (props: MessageProps): JSX.Element => (
  <Box>
    {(props.currentMessage)
      ?
      <Title
        isSize={2}
        hasTextAlign="centered"
        data-test-id="current-message"
      >
        {props.currentMessage}
      </Title>
      :
      <Title
        isSize={2}
        hasTextAlign="centered"
        hasTextColor="info"
      >
        {props.errorText}
      </Title>
    }
  </Box>
);