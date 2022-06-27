import { useState, useEffect } from 'react';
import { Task } from './Components/Task'
import { TaskTable } from './Components/TaskTable'
import { TaskBanner } from './Components/TaskBanner'
import { VisibilityControl } from './Components/VisibilityControl'
import { Container } from './Components/Container'

function App() {

  const [userName, setUserName] = useState("CrisGC")
  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createTask = (taskName) => {
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    )
  }

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
    setUserName("CrisGC")
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (

    <main className="bg-dark vh-100 text-white">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container>
        <Task createTask={createTask} />
        <TaskTable 
          tasks={taskItems} 
          toggleTask={toggleTask} 
        />
        <VisibilityControl
          description={showCompleted}
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
