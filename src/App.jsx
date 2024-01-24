import { useReducer } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import TaskBoard from "./Components/TaskBoard";
import { IsAddedDeleteContext } from "./Context";
import isAddDeleteReducer from "./Reducers/isAddDeleteReducer";

export default function App() {
  const [isAddDelete, dispatch] = useReducer(isAddDeleteReducer, {
    show: false,
    type: "",
    task: "",
  });
  return (
    <div className="pl-10 pr-10 bg-[#191D26]">
      <div className="bg-[#191D26] font-[Inter] text-white">
        <IsAddedDeleteContext.Provider value={{ isAddDelete, dispatch }}>
          <Header />
          <Hero />
          <TaskBoard />
          <Footer />
        </IsAddedDeleteContext.Provider>
      </div>
    </div>
  );
}
