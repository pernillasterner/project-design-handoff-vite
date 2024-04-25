export const Heading = ({ heading, text, className }) => {
  const HeadingTag = heading;

  return (
    <>
      <HeadingTag className={`text-h2-tab-mob lg:text-h2-desktop ${className}`}>
        {text}
      </HeadingTag>
    </>
  );
};
