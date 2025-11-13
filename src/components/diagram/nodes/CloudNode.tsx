import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const CloudNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className="relative" style={{ width: "160px", height: "100px" }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 z-10" />
      <svg
        width="160"
        height="100"
        viewBox="0 0 160 100"
        className={`transition-all ${selected ? "drop-shadow-lg" : ""}`}
      >
        <path
          d="M 40 70 Q 20 70 20 50 Q 20 30 40 30 Q 40 15 60 15 Q 80 15 85 30 Q 100 25 110 35 Q 130 35 130 50 Q 130 65 115 70 Z"
          fill="hsl(199 89% 95%)"
          stroke="hsl(199 89% 48%)"
          strokeWidth="2"
        />
        <text
          x="75"
          y="55"
          textAnchor="middle"
          className="text-sm font-medium fill-foreground"
        >
          {data.label || "Cloud"}
        </text>
      </svg>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 z-10" />
      {selected && (
        <div className="absolute inset-0 ring-2 ring-primary rounded-lg pointer-events-none" />
      )}
    </div>
  );
});

CloudNode.displayName = "CloudNode";
