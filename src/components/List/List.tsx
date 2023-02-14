import "./List.css";
import TaskCard from "../TaskCard/TaskCard";
import ToDos from "../../store/Data/ToDos";

const List = (): JSX.Element => {
  return (
    <main>
      <ul className="task-list">
        {ToDos.map((task) => (
          <li className="task-list__task" key={task.id}>
            <TaskCard toDo={task} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default List;
