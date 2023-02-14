import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("Given the TaskCard component", () => {
  describe("When it renders with card description", () => {
    test("Then it should have a label with the text 'Task description'", () => {
      const label = "Task description";
      const task = {
        id: 1,
        name: "Buy bread",
        isDone: false,
      };

      render(<TaskCard toDo={task} />);

      const taskDescription = screen.getByRole("heading", {
        name: label,
      });

      expect(taskDescription).toBeVisible();
    });
  });
});
