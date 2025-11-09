import Social from "./Social";

export default function Brand() {
  return (
    <div className="class-brand">
      <div className="class-brillianceWrapper">
        <div className="text-center text-[#49423D] text-xl font-semibold leading-4">
          Brillance
        </div>
      </div>

      <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
        Coding made effortless
      </div>

      <div className="flex justify-start items-start gap-4">
        <Social/>
      </div>
    </div>
  );
}