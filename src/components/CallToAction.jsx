import React from "react";

export default function CallToAction(props) {
/*     let {image,name} = props
    let { section } = props; */
    let {name} = props;
    return (
        <button className='ctac'>{name}</button>,
        {/* <button className='ctah'>HOTELS</button> */}
  );
}