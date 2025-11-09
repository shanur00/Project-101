import { Fragment } from "react";
import { socials } from "../../Data/sharedData";
import SocialSvg from "./SocialSvg";

export default function Social(){
  return (
    <Fragment>
      {socials.map((social)=>(
        <SocialSvg
        key={social.id}
        classname={"classSocial"}
        width={social.width}
        height={social.height}
        viewBox={social.viewBox}
        fill={social.fill}
        xmnls={social.xmlns}
        d={social.d}
        pathFill={social.pathFill}
        />
      ))}
    </Fragment>
  );
}