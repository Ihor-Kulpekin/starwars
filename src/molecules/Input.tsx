import React from 'react';
import styled from 'styled-components';

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .wrapperLabel {
    display: flex;
    justify-content: space-between;
  }

  .input {
    border-radius: 3px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }

  .label {
    margin-bottom: 20px;
    color: white;
    
    :nth-child(2){
      color: rgba(255,255,255,0.25);
    }
  }
`;

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  optional?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type,
  name,
  optional
}) => (
  <WrapperInput>
    <div className="wrapperLabel">
      <label className="label">{label}</label>
      {optional ? <label className="label">optional</label> : null}
    </div>
    <input
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      name={name}
      className="input"
    />
  </WrapperInput>
);

export default Input;
