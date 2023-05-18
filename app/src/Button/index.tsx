import classNames from "classnames";
import "./Button.scss";

function Button(props: ButtonProps) {
  const { variant = "primary", type = "button", children } = props;

  const buttonClass = classNames({
    btn: true,
    [`btn--${variant}`]: true,
  });

  return (
    <button {...props} className={buttonClass} type={type}>
      {children}
    </button>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children?: React.ReactNode | string;
  extraClasses?: string;
}

export default Button;
