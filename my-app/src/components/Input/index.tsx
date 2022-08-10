import { InputStyle } from "./styles";

type Props = {
  placeholder: string;
  setInput?: any;
  inputValue?: string;
};

export const Input = ({ placeholder, setInput, inputValue }: Props) => {
  return (
    <InputStyle
      placeholder={placeholder}
      onChange={(e: any) => setInput(e.target.value)}
      value={inputValue}
    />
  );
};

export default Input;
