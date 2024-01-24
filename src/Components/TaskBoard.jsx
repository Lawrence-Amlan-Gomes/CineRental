import { useContext, useState } from "react";
import { IsAddedDeleteContext, SearchContext } from "../Context/index.js";
import TableHead from "./TableHead";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

export default function TaskBoard() {
  //   const defaultTask = {
  //     id: crypto.randomUUID(),
  //     title: "Learn React Native",
  //     description:
  //       "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
  //     tags: ["web", "react", "js"],
  //     priority: "High",
  //     isFavorite: true,
  //   };

  const [mainTasks, setMainTasks] = useState([]);
  const [tasks, setTasks] = useState(mainTasks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const { dispatch } = useContext(IsAddedDeleteContext);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      setMainTasks([...tasks, newTask]);
      dispatch({
        type: "added",
        task: newTask.title,
      });
      setTimeout(() => {
        dispatch({
          type: "done",
        });
      }, 3000);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
      setMainTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
      dispatch({
        type: "edited",
        task: newTask.title,
      });
      setTimeout(() => {
        dispatch({
          type: "done",
        });
      }, 3000);
    }
    setShowAddModal(false);
  };

  const showAddtaskModal = () => {
    setTaskToUpdate(null);
    setShowAddModal(!showAddModal);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleDeleteTask = (taskId, taskName) => {
    const value = confirm(`Are you sure to delete task ${taskName} ?`);
    if (value) {
      const taskAfterDelete = tasks.filter((task) => task.id != taskId);
      setTasks(taskAfterDelete);
      setMainTasks(taskAfterDelete);
      dispatch({
        type: "removed",
        taskName,
      });
      setTimeout(() => {
        dispatch({
          type: "done",
        });
      }, 3000);
    }
  };

  const handleDeleteAll = () => {
    const value = confirm(`Are you sure to delete all the tasks?`);
    if (value) {
      tasks.length = 0;
      setTasks([...tasks]);
      setMainTasks([...tasks]);
      dispatch({
        type: "deleted",
      });
      setTimeout(() => {
        dispatch({
          type: "done",
        });
      }, 3000);
    }
  };

  const handleFav = (taskID) => {
    const newTasks = [...tasks];
    for (let i of newTasks) {
      if (i.id === taskID) {
        i.isFavorite = !i.isFavorite;
      }
    }
    setTasks(newTasks);
    setMainTasks(newTasks);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm == "") {
      setTasks(mainTasks);
      console.log("ok");
    }
    const filtered = mainTasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);
  };

  return (
    <SearchContext.Provider value={{ handleSearch }}>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <TaskModal
            onAddClick={handleAddEditTask}
            onShow={showAddtaskModal}
            taskToUpdate={taskToUpdate}
          />
        )}
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              tasks={mainTasks}
              onAddClick={showAddtaskModal}
              onDeleteAllClick={handleDeleteAll}
            />
            <div className="overflow-auto">
              <table className="table-fixed overflow-auto xl:w-full">
                {mainTasks.length == 0 ? (
                  <div className="text-center text-3xl">
                    Task List is empty!
                  </div>
                ) : (
                  <>
                    <TableHead />
                    <TaskList
                      tasks={tasks}
                      onEdit={handleEditTask}
                      onDelete={handleDeleteTask}
                      onFav={handleFav}
                    />
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </section>
    </SearchContext.Provider>
  );
}
