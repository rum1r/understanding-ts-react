import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  // 初期値 null
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  }
  return (
  <form onSubmit={todoSubmitHandler}>
  <div>
  <label htmlFor="todo-text">Todo内容</label>
  <input type="text" id="todo-text" ref={textInputRef} />
  </div>
  </form>
  );
}
export default NewTodo;
