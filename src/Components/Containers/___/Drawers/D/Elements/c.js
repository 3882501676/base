import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import {
  UilBrightnessLow,
  UilRocket,
  UilAdjustHalf,
  Uil16Plus,
  UilSwimmer,
  UilFolderLock,
} from "@iconscout/react-unicons";
import { Popover } from 'antd'

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

const Menu = ({ props }) => {

  console.log('Menu : props ----> ', props )

  const _pages_menu = [
    {
      label: "Home",
      link: "/",
      icon: "home",
    },
    {
      label: "About",
      link: "/about",
      icon: "info-sign",
    },
    {
      label: "Contact",
      link: "/contact",
      icon: "ring",
    },
  ]

  const submenu = [
    {
      label: 'One',
      link: '/one',
      icon: 'info-sign'
    },
    {
      label: 'One',
      link: '/one',
      icon: 'info-sign'
    },
  ]
  const reduce = (a) => {
    return { label: a.title, link: "/page/" + a.title.toLowerCase(), icon: a.icon, submenu }
  }
  const pages_menu = props.state.pages.map( a => reduce(a) )

  // const add_sub_menu = (a) => {
  //   return a.
  // }

  // const pages_menu = pages_menu_.map( a => add_sub_menu(a) )
// 
  pages_menu.unshift({
    label: "Home",
    link: "/",
    icon: "home",
  })


  const cms_menu = [];

  const map_menu = [
    {
      label: "One",
      link: "/",
      icon: "geosearch",
    },
    // {
    //   label: "Two",
    //   link: "/",
    //   icon: "intersection",
    // },
    // {
    //   label: "Three",
    //   link: "/",
    //   icon: "predictive-analysis",
    // },
    // {
    //   label: "Four",
    //   link: "/",
    //   icon: "social-media",
    // },
  ];

  const menus = [pages_menu, cms_menu, map_menu]

  console.log("c: menu : props : pages ---> ", props.state.pages )

  const active = props.state.active_menu

  const active_menu = menus[active]

  return (
    <div className="flex flex-row-ns flex-column w-100 items-center-ns items-start justify-start  h-100">
      {active_menu.map((item, index) => (
      
       
        <Link
          to={item.link}
          key={index}
          style={{
            animationDelay: ( index * 0.1) + 's'
          }}
          onClick={ () => {
            props.self.setState({
              d5: false
            })
          }}
          onHover={() => {
            props.self.context.self.setState({ d6: true })
          }}
          className="fadeInUp link pointer flex flex-row items-center justify-start ph4 pv3- h-100 "
        >
        
          <Icon
            icon={item.icon}
            iconSize={16}
            style={{
              color: "rgba(255, 255, 255, 0.2)",
              fill: "rgba(255, 255, 255, 0.2)",
            }}
          />

          <span className=" dim sans-serif f5 fw6 white -black-30 ml3">
            {item.label}
          </span>
          
        </Link>
        
      ))}
    </div>
  );
};

const c = ({ props }) => {
  let class1 =
    "child-white fadeInUp pointer pa3 br3 mr3 w4 h4 items-center justify-center flex";
  let class2 =
    " child-white pointer hover-slide-up -grow -dim pa3 br3 mr3 w4 h4 items-center justify-center flex";

  let extra1 =
    " bg-transparent hover-bg-white-10 white flex flex-column hover-child-o-1 ";
  let extra2 = " bg-white  blue child-blue flex flex-column hover-child-o-1 ";

  // classn = ended[] ? class2 : class1

  return (
    <>
      <div
        className="flex flex-row justify-start f4 fw6 bg-black-40 black pa4 h-100 w-100 "
      >
        
        {props.self.state.d5 && <Menu props={props} />}
   
      </div>
    </>
  );
};

export default c;
