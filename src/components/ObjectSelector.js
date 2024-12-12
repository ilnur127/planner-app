import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addObject, loadLayout } from "../store/actions/objectActions";

const objects = [
  { id: "table", src: "path_to_table_image.png", name: "Стол" },
  { id: "chair", src: "path_to_chair_image.png", name: "Стул" },
  { id: "partition", src: "path_to_partition_image.png", name: "Перегородка" },
];

const ObjectSelector = () => {
  const elements = useSelector((state) => state.objects.selectedObjects);
  const dispatch = useDispatch();

  const handleAddObject = (object) => {
    const newObject = {
      ...object,
      position: { x: 50, y: 50 },
    };
    dispatch(addObject(newObject));
  };

  const saveLayout = () => {
    const layout = JSON.stringify(elements);
    const blob = new Blob([layout], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Рассадка.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const loadLayoutFn = async (event) => {
    const file = event.target.files[0];
    const text = await file.text();
    const layout = JSON.parse(text);
    dispatch(loadLayout(layout));
  };

  return (
    <div>
      <h2>Выберите объект</h2>
      <ul className="chooseItem-menu">
        {objects.map((obj) => (
          <li key={obj.id} onClick={() => handleAddObject(obj)}>
            <div>
              <img src={obj.src} alt={obj.name} style={{ height: "50px" }} />
            </div>
            <span>{obj.name}</span>
          </li>
        ))}
      </ul>
      <small>
        Нажмите на выбранный объект и перетащите его на нужное место
      </small>

      <div className="layoutActions">
        <button onClick={saveLayout}>Сохранить расстановку</button>
        <label>
          Импортировать расстановку
          <input type="file" onChange={loadLayoutFn} hidden />
        </label>
      </div>
    </div>
  );
};

export default ObjectSelector;
