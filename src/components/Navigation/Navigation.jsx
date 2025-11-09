import { navLinks } from "../../Data/sharedData";
import Header from "./Header";

export default function Navigation() {
  return (
    <div className="class-nav">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

      <div className="class-navBar">
        <div className="class-flexCenter">
          <div className="class-flexCenter">
            <div className="class-brilliance class-commonFlex">
              Brillance
            </div>
          </div>
          <div className="class-othersNavElement">
            {navLinks.map((navLink)=> (
              <Header
              key={navLink.id}
              name={navLink.label} 
              />
            ))}
          </div>
        </div>
        <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
          <div className="class-logIn class-buttonCommon">
            <div className="class-commonFlex text-[#37322F] text-xs md:text-[13px] class-buttonFl">
              Log in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}