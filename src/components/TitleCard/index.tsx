import React from "react"
import { FaReact } from "react-icons/fa";

const TitleCard: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <h1 className="text-mint font-nunito font-extrabold mr-1 align-bottom">ToDo</h1>
                <div className="flex flex-col justify-end items-start">
                    <h2 className="text-2xl font-bold">List</h2>
                    <div className="flex text-xs opacity-30 items-center">
                        <p className="mr-0.5">Powered by <b>React</b></p>
                        <FaReact/>
                    </div>
                </div>
            </div>
            <p>Made by <b>Jeremias Bulanadi</b></p>
        </div>
    )
}

export default TitleCard