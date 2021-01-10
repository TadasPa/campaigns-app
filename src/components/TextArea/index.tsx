import React, { ChangeEvent, FC, useCallback } from "react";
import styled from "styled-components";

interface ITextArea {
  value?: string;
  setValue: (newValue: string) => void;
}

const TextArea: FC<ITextArea> = ({ setValue, ...rest }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      return setValue(event.target.value);
    },
    [setValue]
  );

  return <textarea onChange={handleChange} {...rest} />;
};

const StyledTextArea = styled(TextArea)`
  min-width: 600px;
  min-height: 600px;
`;

export default StyledTextArea;
