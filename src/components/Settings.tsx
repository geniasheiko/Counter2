import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";


export const Settins = () => {
    const [count, setCount] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    const [error, setError] = useState<boolean>(false)  
    const [isSet, setIsSet] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const saveMin = localStorage.getItem('min');
        const saveMax = localStorage.getItem('max');
        if (saveMin && saveMax) {
            setMin(Number(saveMin));
            setMax(Number(saveMax));
            setCount(Number(saveMin));
        }
    }, []);

    const saveValues = () => {
        if (!error) {
            localStorage.setItem('min', min.toString());
            localStorage.setItem('max', max.toString());
            setCount(min);                    
            setIsSet(true);         
            navigate("/")         
        }
    }
    
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMin(value);
        validateValues(value, max);        
        setIsSet(false);                    
    }

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMax(value);
        validateValues(min, value);
        setIsSet(false);
    }
    const validateValues = (minVal: number, maxVal: number) => {
        if (minVal < 0 || maxVal <= minVal) {
            setError(true);
        } else {
            setError(false);
        }
    }
    return (
        <div>
             <div className="inputs-block">
                    <label><h2>Max value:</h2> 
                        <input type="number" 
                            value={max}
                            onChange={handleMaxChange}
                            className={error ? "error-input" : ""} />
                    </label>
                    <label><h2>Min value: </h2>
                        <input type="number"
                            value={min}
                            onChange={handleMinChange}
                            className={error ? "error-input" : ""} />
                    </label>
                </div>
                <Button
                onClick={saveValues}
                title={"set"}/>
        </div>
    )
    
}