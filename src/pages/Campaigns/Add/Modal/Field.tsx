import React from "react";
import styled from "styled-components";

const Field = ({ ...rest }) => {
  return <textarea {...rest} />;
};

const StyledField = styled(Field)`
  min-width: 600px;
  min-height: 600px;
`;

export default StyledField;
