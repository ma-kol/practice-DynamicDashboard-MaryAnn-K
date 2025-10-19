/*

Render a Task List:
○ Create an array of task objects, each with a taskName and completed
status.
○ Use the map method to render each task of these in a list. Show the
task name with:
■ A ✅ emoji if it’s completed.
■ A ❌ emoji if it’s not completed.

*/

const TaskObjects = () => {

    const tasks = [
        { name: "Walk the dog", completed: true },
        { name: "Start a load of laundry", completed: false },
        { name: "Wash the dishes", completed: true },
        { name: "Take out the trash", completed: false }
    ];

    const completedTasks = tasks.filter(task => task.completed).length;
    const incompleteTasks = tasks.filter(task => !task.completed).length;

    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}
                        style={{
                            color: task.completed ? 'green' : 'white'
                        }}>
                        {task.completed ? '\u2705' : '\u274C'} {task.name}
                    </li>
                ))}
            </ul>
            <p>Completed Tasks: {completedTasks}</p>
            <p>Incomplete Tasks: {incompleteTasks}</p>
        </div>
    );
};

export default TaskObjects;