import React, {useEffect, useState} from 'react'

function useLocalStorageTodolist(init) {
    const [todoList, setTodoList] = useState([init]);
 
    let myStorage = window.localStorage;
    useEffect(() => {
      let todoListCopy = [...todoList];
      if (myStorage.getItem("array") === null) {
        return [];
      }
      let storedArray = JSON.parse(myStorage.array);
      for (let i = 0; i < storedArray.length; i++) {
        todoListCopy[i] = {
          ...todoListCopy[i],
          text: storedArray[i],
        };
        setTodoList(todoListCopy);
      }
    }, []);
    useEffect(() => {
      function isSetLocalStorageInitStateTodoList() {
        if (todoList === null) {
          setTodoList([]);
        }
      }
      isSetLocalStorageInitStateTodoList();
      let array = todoList.map((element, index) => element.text);
      myStorage.setItem("array", JSON.stringify(array));
    }, [todoList]);
    return [todoList,setTodoList]
}

export default useLocalStorageTodolist
