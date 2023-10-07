import { memo } from "react";
import IButton from "./button.types";
import { StyledButton } from "./styledButton";

const Button = ({ onClick, children, title, isLoading, color }: IButton) => {
  return (
    <StyledButton color={color} disabled={isLoading} onClick={onClick}>
      <>
        {isLoading ? (
          <span>"loading ...."</span>
        ) : (
          <span>{children ? children : <span>{title}</span>}</span>
        )}
      </>
    </StyledButton>
  );
};
export default memo(Button);
