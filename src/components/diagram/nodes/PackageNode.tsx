import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const PackageNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className="relative" style={{ width: "160px", minHeight: "120px" }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div
        className={`transition-all ${
          selected ? "ring-2 ring-primary shadow-lg" : "shadow-sm"
        }`}
      >
        {/* Tab */}
        <div className="w-16 h-6 bg-primary/20 border-2 border-primary rounded-t-md border-b-0" />
        
        {/* Body */}
        <div className="w-full min-h-[100px] bg-primary/10 border-2 border-primary rounded-md rounded-tl-none p-4">
          <div className="text-sm font-medium text-foreground text-center">
            {data.label || "Package"}
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

PackageNode.displayName = "PackageNode";
