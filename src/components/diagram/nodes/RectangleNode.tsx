import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const RectangleNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div
      className={`px-6 py-4 rounded-md bg-shape-fill border-2 border-shape-stroke transition-all ${
        selected ? "ring-2 ring-primary" : ""
      }`}
      style={{ minWidth: "150px", minHeight: "80px" }}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-sm font-medium text-foreground text-center">
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

RectangleNode.displayName = "RectangleNode";
