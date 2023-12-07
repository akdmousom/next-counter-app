'use client'

import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    const increase = () =>{
       setCount(count + 1)
    }

    const decrease = () =>{
        if (count === 0) {

            return
            
        }
        setCount(count - 1)
    }

    return (
        <div >
            <h1 className=" text-3xl text-center font-bold">Count: {count} </h1>
            <div className="flex gap-4 justify-center my-4">
                <button onClick={decrease} className="btn btn-primary">Decrease </button>
                <button onClick={increase} className="btn btn-primary">Increase </button>
            </div>
        </div>
    );
};

export default Counter;