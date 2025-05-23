const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-20 xl:pl-32 mt-64">{children}</section>
  );
};

export default SectionWrapper;
