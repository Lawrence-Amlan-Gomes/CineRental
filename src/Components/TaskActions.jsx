import SearchTask from "./SearchTask";

export default function TaskActions({ tasks, onAddClick, onDeleteAllClick }) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">
        {tasks.length > 0 ? "Your Tasks" : "Create Your First Task"}
      </h2>
      <div className="flex items-center space-x-5">
        <form>{tasks.length > 0 ? <SearchTask /> : ""}</form>
        <button
          onClick={onAddClick}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        {tasks.length > 0 ? (
          <button
            onClick={onDeleteAllClick}
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Delete All
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
