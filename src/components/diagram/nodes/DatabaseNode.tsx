import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const DatabaseNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className="relative" style={{ width: "120px" }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 z-10" />
      <svg
        width="120"
        height="140"
        viewBox="0 0 120 140"
        className={`transition-all ${selected ? "drop-shadow-lg" : ""}`}
      >
        {/* Top ellipse */}
        <ellipse
          cx="60"
          cy="20"
          rx="50"
          ry="15"
          fill="hsl(142 71% 95%)"
          stroke="hsl(142 71% 45%)"
          strokeWidth="2"
        />
        {/* Cylinder body */}
        <rect
          x="10"
          y="20"
          width="100"
          height="100"
          fill="hsl(142 71% 95%)"
          stroke="none"
        />
        {/* Left side */}
        <line
          x1="10"
          y1="20"
          x2="10"
          y2="120"
          stroke="hsl(142 71% 45%)"
          strokeWidth="2"
        />
        {/* Right side */}
        <line
          x1="110"
          y1="20"
          x2="110"
          y2="120"
          stroke="hsl(142 71% 45%)"
          strokeWidth="2"
        />
        {/* Middle ellipse (optional, for detail) */}
        <ellipse
          cx="60"
          cy="50"
          rx="50"
          ry="15"
          fill="none"
          stroke="hsl(142 71% 45%)"
          strokeWidth="1"
          opacity="0.3"
        />
        {/* Bottom ellipse */}
        <ellipse
          cx="60"
          cy="120"
          rx="50"
          ry="15"
          fill="hsl(142 71% 95%)"
          stroke="hsl(142 71% 45%)"
          strokeWidth="2"
        />
        {/* Label */}
        <text
          x="60"
          y="75"
          textAnchor="middle"
          className="text-sm font-medium fill-foreground"
        >
          {data.label || "Database"}
        </text>
      </svg>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 z-10" />
      {selected && (
        <div className="absolute inset-0 ring-2 ring-primary rounded-lg pointer-events-none" />
      )}
    </div>
  );
});

DatabaseNode.displayName = "DatabaseNode";
