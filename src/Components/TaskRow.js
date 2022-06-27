export const TaskRow = ({ task, toggleTask }) => (

  <tr key={task.name}>
    <td className="d-flex justify-content-betweeen">
      <span className="flex-grow-1">{task.name}</span>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task)}
      />
    </td>
  </tr>
)