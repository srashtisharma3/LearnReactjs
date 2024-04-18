import React, { useState } from "react";
import Title from "./Title";
import Count from "./Countt";
import Button from "./Button";

function ParentCom() {
    const [age, setAge] = useState(23);
    const [salary, setSalary] = useState(54000);

    const incAge = () => {
        setAge(age + 1);
    };

    const incSalary = () => {
        setSalary(salary + 5000);
    };

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incSalary}>Increment Salary</Button>
        </div>
    );
}

export default ParentCom;
