import { useState } from "react";

import Input from "../../components/Input";
import Todolist from "../../components/Todolist";
import {
  Container,
  TodoParagraph,
  DoneParagraph,
  WrapperTodolist,
  Header,
  WrapperButtons,
  ButtonAdd,
} from "./styles";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState<any>([]);
  const [filterButton, setFilterButton] = useState("all");

  const handleAddTask = () => {
    if (inputText.length > 0) {
      const randomId = (n: number) => Math.floor(Math.random() * n);
      const newList = { id: randomId(10000), name: inputText, done: false };
      setTasks([...tasks, newList]);
    }
  };
  function deleteTask(DeletedId: number): void {
    setTasks(tasks.filter((t: any) => t.id !== DeletedId));
  }
  console.log(tasks);
  return (
    <Container>
      <WrapperTodolist>
        <Header>
          <TodoParagraph>My Todo List</TodoParagraph>
          <DoneParagraph>
            {tasks.filter((t: any) => t.done === false).length} more to do,
            {tasks.filter((t: any) => t.done === true).length} done
          </DoneParagraph>
        </Header>
        <Header>
          <Input
            placeholder="type to search"
            setInput={setSearchText}
            inputValue={searchText}
          />
          <WrapperButtons filter={filterButton}>
            <button onClick={() => setFilterButton("all")} id="all">
              All
            </button>
            <button onClick={() => setFilterButton("active")} id="active">
              Active
            </button>
            <button onClick={() => setFilterButton("done")} id="done">
              Done
            </button>
          </WrapperButtons>
        </Header>

        <Todolist
          tasks={tasks}
          setTasks={setTasks}
          searchText={searchText}
          filterButton={filterButton}
          deleteTask={deleteTask}
        />
        <Header>
          <Input placeholder="What needs to be done" setInput={setInputText} />
          <ButtonAdd onClick={handleAddTask}>Add Task</ButtonAdd>
        </Header>
      </WrapperTodolist>
    </Container>
  );
};

export default Home;
