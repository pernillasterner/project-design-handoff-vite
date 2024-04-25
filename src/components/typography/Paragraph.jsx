export const Paragraph = ({ className, text }) => {
  return (
    <p className={`text-pl-tab-mob lg:text-pl-desktop ${className}`}>{text}</p>
  );
};
