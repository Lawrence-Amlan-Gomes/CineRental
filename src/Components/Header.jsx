import Logo from "../assets/icon1.png";
import AddedDeletedTask from "./AddedDeletedTask";
import { IsAddedDeleteContext } from "../Context/index.js";
import { useContext } from "react";

export default function Header(){
  const { isAddDelete } = useContext(IsAddedDeleteContext);
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full left-0 bg-[#191D26] z-50 pl-10">
          <div className="container mx-auto flex items-center justify-between gap-x-6">
            <a href="/">
              <img
                className="h-[45px]"
                src={Logo}
                alt="Lws"
              />
            </a>
            {isAddDelete.show ? <AddedDeletedTask/> : ""}
            
          </div>
        </nav>
    );
}