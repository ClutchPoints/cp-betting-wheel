import React, { useState } from "react";

import styled from "styled-components";

const StyledInput = styled.input`
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #3c3939;
  margin-bottom: 16px;
  margin-right: 16px;
  flex: 1;
`;

function Input({ val, ind, updateTeams, teams }) {
  const [value, setValue] = useState("");
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    setValue(value);
    let tempTeams = [...teams];
    tempTeams[ind] = value;
    updateTeams(tempTeams);
  };

  return <StyledInput value={val || value} onChange={handleInputChange} />;
}

export default Input;
