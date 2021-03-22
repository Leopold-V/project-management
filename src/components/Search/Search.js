import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonSmall } from '../Button';

export const Search = ({ parentsubmit, width }) => {
  const [value, setValue] = useState('');

  const ref_input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    parentsubmit(value);
  };

  const handleChange = () => {
    setValue(ref_input.current.value);
  };

  useEffect(() => {
    ref_input.current.focus();
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit} width={width}>
      <Input ref={ref_input} type="text" value={value} onChange={handleChange} placeholder="Search by projects..." />
      <ButtonSmall>
        <i className="fas fa-search"></i>
      </ButtonSmall>
    </StyledForm>
  );
};

const Input = styled.input`
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  width: 100%;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  background-color: #030111;
  color: white;
  transition: all 0.2s;
  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  & > button {
    border-radius: 0 5px 5px 0;
    margin-left: 0;
  }
`;

Search.propTypes = {
  parentsubmit: PropTypes.func.isRequired,
  width: PropTypes.string,
};

Search.defaultTypes = {
  width: '',
};
