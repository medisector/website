const PageText = ({
  leadingText,
  className,
  children,
}: {
  leadingText?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className={`relative pb-2 text-base leading-relaxed! text-black/80 hyphens-auto ${className}`} lang={"de"}>
        {leadingText && (
          <span className="block pt-3 pb-2 leading-6 font-bold">
            {leadingText}
            <br />
          </span>
        )}
        {children}
      </div>
    </>
  );
};

export default PageText;
