const space = {
  thin: '2px',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
};
const color = {
  white: '#fff',
  gray: '#bac6ca',
  lightgray: '#ebeeef',
  darkgray: '#aab5b9',
  black: '#3c4041',
};

const app = {
  background: color.white,
  color: color.black,
};
const inputs = {
  borderColor: color.black,
  buttonColorDanger: '#be1525',
  buttonColorDefault: color.gray,
  buttonColorDisabled: color.gray,
  buttonTextColorLight: color.white,
  buttonTextColorDark: color.black,
  buttonTextColorDisabled: color.white,
};

const defaultTheme = {
  space,
  color,
  app,
  inputs,
};

export default defaultTheme;
