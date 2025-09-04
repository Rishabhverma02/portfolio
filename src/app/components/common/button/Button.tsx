import { ButtonText, ButtonWrapper, OnClickButtonWrapper } from "./styled";

interface ButtonProps {
  buttonText?: string;
  route?: string;
  onClick?: () => void | Promise<void>;
  children?: React.ReactNode;
}

export const Button = ({
  buttonText,
  route,
  onClick,
  children,
}: ButtonProps) => {
  const content = <ButtonText className="button-text">{children || buttonText}</ButtonText>;

  return route ? (
    <ButtonWrapper href={`/${route}`}>{content}</ButtonWrapper>
  ) : (
    <OnClickButtonWrapper onClick={onClick}>{content}</OnClickButtonWrapper>
  );
};
