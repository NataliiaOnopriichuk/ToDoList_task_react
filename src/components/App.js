import { TodoForm } from "./TodoForm/TodoForm";
import { TodoList } from "./TodoList/TodoList";

export const App = () => {
  return (
    <div
      style={{
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // gap: '120px',
        padding: '25px 200px',
      }}
    >
      <TodoForm />
      <TodoList />
    </div>
  );
};