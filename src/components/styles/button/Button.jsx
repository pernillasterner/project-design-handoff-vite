import "./Button.css";

export const Button = ({ label, classNames }) => {
  return (
    <button className={`${classNames || ""}`}>
      <span className="label">{label}</span>
    </button>
  );
};
