import "./TaskCard.css";

import { ToDoStructure } from "../../types";

interface CardTaskProps {
  toDo: ToDoStructure;
}

const CardTask = ({
  toDo: { id, isDone, name },
}: CardTaskProps): JSX.Element => {
  return (
    <>
      <article className="task-card">
        <div className="task-card__task">
          <h2 aria-label="Task description">
            {id} {name}
          </h2>
          <span>{isDone}✅</span>
        </div>
        <div className="task-card__actions">
          <button>Edit</button> <button> Delete</button>
        </div>
      </article>
    </>
  );
};

export default CardTask;