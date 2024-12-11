import React from "react";
import { Rnd } from "react-rnd";

const DraggableObject = ({ obj, onDragStop, onResizeStop }) => {
  return (
    <Rnd
      onDragStop={onDragStop}
      onResizeStop={onResizeStop}
      bounds="parent"
      default={{
        x: obj.position.x,
        y: obj.position.y,
        width: obj.size?.width || 50,
        height: obj.size?.height || 50,
      }}
    >
      <img
        src={obj.src}
        alt={obj.name}
        style={{ width: "inherit", height: "inherit" }}
      />
    </Rnd>
  );
};

export default DraggableObject;
