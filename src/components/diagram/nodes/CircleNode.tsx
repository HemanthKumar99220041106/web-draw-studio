import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const CircleNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-shape-fill border-2 border-shape-stroke transition-all ${
        selected ? "ring-2 ring-primary" : ""
      }`}
      style={{ width: "120px", height: "120px" }}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-sm font-medium text-foreground text-center px-2">
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

CircleNode.displayName = "CircleNode";
