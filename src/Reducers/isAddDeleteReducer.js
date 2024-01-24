export default function isAddDeleteReducer(state, action) {
  switch (action.type) {
    case "added": {
      return { show: true, type: "added", task: action.task }
    }
    case "done": {
      return { show: false, type: "", task: "" }
    }
    case "edited": {
      return { show: true, type: "edited", task: action.task }
    }
    case "removed": {
      return { show: true, type: "removed", task: action.taskName }
    }
    case "deleted": {
      return { show: true, type: "deleted", task: "" }
    }
    
  }
}
