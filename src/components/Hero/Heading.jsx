export default function Heading({ className, line1, line2, breakOnSmall }) {
  return (


    <div className={className}>
      {line1}
      {breakOnSmall ? (
        <br className="hidden sm:block" />
      ) : (
        <br />
      )}
      {line2}
    </div>
  );
}