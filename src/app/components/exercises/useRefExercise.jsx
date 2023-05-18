import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const itemRef = useRef("");
    const handleClick = () => {
        console.log(itemRef.current);
        itemRef.current.textContent = "text";
        itemRef.current.style.width = "150px";
        itemRef.current.style.height = "80px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={itemRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={itemRef}>Блок</small>
            </div>
            <button className="mt-4 btn btn-primary" onClick={handleClick}>
                Изменить Блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
