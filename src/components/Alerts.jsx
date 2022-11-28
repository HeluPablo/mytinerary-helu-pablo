import { ToastContainer, toast } from "react-toastify";
import React from "react";

export default function (props) {
  console.log(props)
  toast(props.message);
  return 
  <>
  <ToastContainer />;
  </>
}
