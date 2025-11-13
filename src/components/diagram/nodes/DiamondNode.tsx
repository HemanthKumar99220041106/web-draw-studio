import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const DiamondNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className="relative" style={{ width: "120px", height: "120px" }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 z-10" />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-shape-fill border-2 border-shape-stroke transition-all ${
          selected ? "ring-2 ring-primary" : ""
        }`}
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      >
        <div className="text-sm font-medium text-foreground text-center px-2">
          {data.label}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 z-10" />
    </div>
  );
});

DiamondNode.displayName = "DiamondNode";
