import AddTask from "../AddTask";
import AddUser from "../AddUser";
import TasksList from "../TasksList";
import UsersList from "../UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
