const PageText = ({ text, path, target }: { text: string; path: string, target?: string; }) => {
  return (
    <>
      <a className="font-bold italic underline" href={path} target={target}>
        {text}
      </a>
    </>
  );
};

export default PageText;
