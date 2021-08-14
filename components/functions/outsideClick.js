import { useEffect, useState, useRef } from "react";
export default function OutsideClick(handler) {
  let domNode = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return domNode;
}
