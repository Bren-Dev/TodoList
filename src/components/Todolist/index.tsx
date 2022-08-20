import {
  WrapperTodolist,
  WrapperTodolistDone,
  WrapperTodolistTodo,
} from "./styles";
import { useEffect, useState } from "react";
import ContainerList from "../ContainerList";

type Props = {
  deleteTask(DeleteTaskById: number): void;
  tasks: any;
  setTasks: any;
  searchText: string;
  filterButton: string;
};

export const Todolist = ({
  deleteTask,
  tasks,
  setTasks,
  searchText,
  filterButton,
}: Props) => {
  const [filteredList, setFilteredList] = useState<any>([]);

  function handleCheck(index: number) {
    const newArray = [...tasks];
    newArray[index].done = !newArray[index].done;
    setTasks(newArray);
  }

  useEffect(() => {
    if (searchText.length > 0) {
      setFilteredList(
        tasks.filter((task: any) =>
          task.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  return filterButton === "all"
    ? searchText.length > 0
      ? filteredList.map((task: any, index: number) => (
          <WrapperTodolist done={task.done} key={`${task.name}/${index}`}>
            <ContainerList
              childrenTask={task.name}
              functionDelete={() => deleteTask(task.id)}
              functionCheck={() => {
                handleCheck(index);
              }}
            />
          </WrapperTodolist>
        ))
      : tasks.map((task: any, index: number) => (
          <WrapperTodolist done={task.done} key={`${task.name}/${index}`}>
            <ContainerList
              childrenTask={task.name}
              functionDelete={() => deleteTask(task.id)}
              functionCheck={() => {
                handleCheck(index);
              }}
            />
          </WrapperTodolist>
        ))
    : filterButton === "active"
    ? searchText.length > 0
      ? filteredList.map((task: any, index: number) => (
          <WrapperTodolistTodo done={task.done} key={`${task.name}/${index}`}>
            <ContainerList
              childrenTask={task.name}
              functionDelete={() => deleteTask(task.id)}
              functionCheck={() => {
                handleCheck(index);
              }}
            />
          </WrapperTodolistTodo>
        ))
      : tasks.map((task: any, index: number) => (
          <WrapperTodolistTodo done={task.done} key={`${task.name}/${index}`}>
            <ContainerList
              childrenTask={task.name}
              functionDelete={() => deleteTask(task.id)}
              functionCheck={() => {
                handleCheck(index);
              }}
            />
          </WrapperTodolistTodo>
        ))
    : searchText.length > 0
    ? filteredList.map((task: any, index: number) => (
        <WrapperTodolistDone done={task.done} key={`${task.name}/${index}`}>
          <ContainerList
            childrenTask={task.name}
            functionDelete={() => deleteTask(task.id)}
            functionCheck={() => {
              handleCheck(index);
            }}
          />
        </WrapperTodolistDone>
      ))
    : tasks.map((task: any, index: any) => (
        <WrapperTodolistDone done={task.done} key={`${task.name}/${index}`}>
          <ContainerList
            childrenTask={task.name}
            functionDelete={() => deleteTask(task.id)}
            functionCheck={() => {
              handleCheck(index);
            }}
          />
        </WrapperTodolistDone>
      ));
};

export default Todolist;
