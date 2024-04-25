export const Heading = ({ heading, text }) => {
  const HeadingTag = heading;

  return (
    <>
      <HeadingTag className={`text-h2-tab-mob lg:text-h2-desktop`}>
        “{text}“
      </HeadingTag>
    </>
  );
};
