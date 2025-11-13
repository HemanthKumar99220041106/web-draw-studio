import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Package } from "lucide-react";

export const ComponentNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div
      className={`relative bg-card border-2 border-primary rounded-lg p-4 transition-all ${
        selected ? "ring-2 ring-primary shadow-lg" : "shadow-sm"
      }`}
      style={{ minWidth: "140px", minHeight: "100px" }}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <Handle type="target" position={Position.Left} className="w-3 h-3" />
      
      <div className="flex items-start gap-2 mb-2">
        <Package className="h-4 w-4 text-primary flex-shrink-0" />
        <div className="text-xs font-semibold text-primary">«component»</div>
      </div>
      
      <div className="text-sm font-medium text-foreground text-center">
        {data.label || "Component"}
      </div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  );
});

ComponentNode.displayName = "ComponentNode";
