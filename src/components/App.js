import { Section } from "./Section/Section";
import { TodoForm } from "./TodoForm/TodoForm";
import { TodoList } from "./TodoList/TodoList";

export const App = () => {
  return (
    <div

    >
      <Section><TodoForm /></Section>
      <Section><TodoList /></Section>
    </div>
  );
};