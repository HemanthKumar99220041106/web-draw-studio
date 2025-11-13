import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const InterfaceNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className="relative flex flex-col items-center" style={{ width: "100px" }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className={`flex flex-col items-center transition-all ${selected ? "scale-105" : ""}`}>
        {/* Circle with line */}
        <div className="relative mb-2">
          <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-primary" style={{ top: "100%" }} />
        </div>
        
        <div className="text-xs font-medium text-center text-foreground mt-6">
          {data.label || "Interface"}
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
      {selected && <div className="absolute inset-0 ring-2 ring-primary rounded-lg -z-10" />}
    </div>
  );
});

InterfaceNode.displayName = "InterfaceNode";
