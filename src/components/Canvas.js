import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DraggableObject from "./DraggableObject";
import {
  updateObjectPosition,
  updateObjectSize,
} from "../store/actions/objectActions";

const Canvas = () => {
  const objects = useSelector((state) => state.objects.selectedObjects);
  const dispatch = useDispatch();

  const handleDrop = (node, obj) => {
    dispatch(updateObjectPosition(obj.id, { x: node.x, y: node.y }));
  };

  const handleResize = (node, obj) => {
    dispatch(
      updateObjectSize(obj.id, { width: node.width, height: node.height })
    );
  };

  return (
    <div>
      <h2>Схема зала</h2>
      <div
        style={{
          width: "800px",
          height: "600px",
          border: "1px dashed black",
          position: "relative",
        }}
      >
        {objects.map((obj) => (
          <DraggableObject
            key={obj.id}
            obj={obj}
            onDragStop={(_, node) => {
              handleDrop(node, obj);
            }}
            onResizeStop={(_, type, node, size) => {
              handleResize(size, obj);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Canvas;
