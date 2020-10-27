import * as React from 'react';
import { css } from 'emotion';

export type ButtonProps = {
  text: string;
  onClickEvent?: () => void;
  buttonClass?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={props.buttonClass ? props.buttonClass : buttonStyle}
      type="button"
      onClick={props.onClickEvent}
    >
      {props.text}
    </button>
  );
}

const buttonStyle = css(`
  padding: 0 13px;
  height: 25px;
  border-radius:  15px;
  color: #ffffff;
  background-color: #666666;
  margin-right: 20px;
  min-width: 52px;
`);
