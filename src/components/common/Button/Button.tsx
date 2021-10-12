import './Button.scss';
type ButtonProps = {
  title: string;
  icon?: JSX.Element;
};

export const Button = (props: ButtonProps) => {
  return (
    <div className="button">
      <div className="icon">{props.icon}</div>
      {props.title}
    </div>
  );
};
