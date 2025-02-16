import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Counter.css'
import { Button } from './components/Button';



export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(5); //изначальные значния
   
    useEffect(() => {
        const savedMin = localStorage.getItem("min");
        const savedMax = localStorage.getItem("max");

        if (savedMin && savedMax) {
            setMin(Number(savedMin));
            setMax(Number(savedMax));
            setCount(Number(savedMin)); // count в min
        }
    }, []);


    const inc = () => {
        if (count < max)
            setCount(count + 1)
    }
    const reset = () => {
        setCount(min)
    }
    const settings = useNavigate();

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={inc}
            title={"inc"}
            disable={count >= 5}/>
                <Button onClick={reset}
            title={"res"}
            disable={count === 0}/>
                <Button onClick={()=>settings("/components/Settings")}
            title={"settings"}
           />

        </div>
    )
}










