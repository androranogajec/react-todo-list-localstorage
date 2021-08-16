import React,{useState, useEffect} from "react";

function useLocalStorageTitle(arg1, arg2, arg3) {

  return [title, setTitle, input, setInput, isTitle, setIsTitle]
}

export default useLocalStorageTitle;
