import React from "react";

import {
  UilBrightnessLow,
  UilRocket,
  UilAdjustHalf,
  Uil16Plus,
  UilSwimmer,
  UilFolderLock,
} from "@iconscout/react-unicons";

const items = [
  {
    icon: UilSwimmer,
    text: "swim",
  },
  {
    icon: UilBrightnessLow,
    text: "brightness",
  },
  {
    icon: UilRocket,
    text: "rocket",
  },
  {
    icon: UilAdjustHalf,
    text: "adjust",
  },
  {
    icon: Uil16Plus,
    text: "age",
  },
];

const b = ({ props }) => {
  let class1 =
    " trans-a hover-child-text-bold child-white fadeInUp pointer pa3 br3 mr3 w4 h4 items-center justify-center flex ";
  let class2 =
    " trans-a hover-child-text-bold child-white pointer hover-slide-up -grow -dim pa3 br3 mr3 w4 h4 items-center justify-center flex ";

  let extra1 =
    " bg-transparent hover-bg-white-10 white flex flex-column hover-child-o-1 ";
  let extra2 = " bg-white  blue child-blue flex flex-column hover-child-o-1 ";

  // classn = ended[] ? class2 : class1

  return (
    <>
      <div
        className="flex flex-row flex-wrap justify-start-ns justify-between  f4 fw6 black  
   pa4 "
      >
        {props.self.state.d4 &&
          items.map((item, index) => (
            <div
              onMouseEnter={(e) => {
                // e.target.className = class2 + extra1;
                // ( props.self.state.d4 ? class1 : class2 )
              }}
              onClick={(e) => {
                e.target.className = class2 + extra2;
              }}
              onMouseLeave={ (e) => {
                // e.target.className = class2
                // ( props.self.state.d4 ? class1 : class2 )
              }}

              style={{ animationDelay: index * "0.1" + "s" }}
              className={ ( props.self.state.active_menu === index ? ( class2 + " bg-white-20 " ) : ( class2 + "  " ) ) }
            >
              <>
                <item.icon
                  className=" child-icon "
                  style={{
                    pointerEvents: "none",
                  }}
                  size={40}
                  color={"blue"}
                />
              </>

              <span
                style={{
                  bottom: "2vh",
                }}
                className="trans-a  absolute child flex hover-child o-0- f6 fw3 white-50"
              >
                {item.text}
              </span>
            </div>
          ))}
      </div>
    </>
  );
};

export default b;
