import Card from "@components/UI/Card"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => (
    <div className="flex w-full h-full justify-center items-center flex-col bg-primary-paper">
        <div className="flex flex-row mb-4 xl:text-base sm:text-6xl">
            <h1 className="text-primary-default">Let's plan your</h1>
            <h1 className="text-primary-default font-bold">&nbsp;loan.</h1>
        </div>
        <Card />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
