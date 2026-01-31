import './App.css';

export const App = () => {
  return (
    <div className="App">
      <h1>TodoList</h1>
      {/* Todo追加領域 */}
      <section>
        <h2>Add TODO</h2>
        <input type="text" />
      </section>

      {/* Todo一覧表示領域 */}
      <section>
        <ul>
          <li>
            <span>タスク1</span>
            <i className="fa-solid fa-trash-can"></i>
          </li>
          <li>
            <span>タスク2</span>
            <i className="fa-solid fa-trash-can"></i>
          </li>
        </ul>
      </section>

    </div>
  );
};
