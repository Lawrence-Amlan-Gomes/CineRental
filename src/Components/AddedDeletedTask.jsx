import { useContext } from "react";
import { IsAddedDeleteContext } from "../Context/index.js";

export default function AddedDeletedTask() {
  const { isAddDelete } = useContext(IsAddedDeleteContext);
  return (
    <div className=" p-2 mr-10 rounded bg-[#2a303e] text-center w-60 text-sm">
      {isAddDelete.type == "added" ? (
        <div className="text-green-600">
          Task {isAddDelete.task} has {isAddDelete.type} successfully
        </div>
      ) : (
        ""
      )}
      {isAddDelete.type == "edited" ? (
        <div className="text-yellow-500">
          Task {isAddDelete.task} has {isAddDelete.type} successfully
        </div>
      ) : (
        ""
      )}
      {isAddDelete.type == "removed" ? (
        <div className="text-red-600">
          Task {isAddDelete.task} has {isAddDelete.type} successfully
        </div>
      ) : (
        ""
      )}
      {isAddDelete.type == "deleted" ? (
        <div className="text-red-700">
          All Tasks has deleted
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
