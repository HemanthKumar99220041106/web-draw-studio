import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Server } from "lucide-react";

export const ServerNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div
      className={`relative bg-secondary/50 border-2 border-secondary-foreground rounded-lg p-4 transition-all ${
        selected ? "ring-2 ring-primary shadow-lg" : "shadow-sm"
      }`}
      style={{ minWidth: "120px", minHeight: "100px" }}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex flex-col items-center gap-2">
        <Server className="h-8 w-8 text-secondary-foreground" />
        <div className="text-sm font-medium text-foreground text-center">
          {data.label || "Server"}
        </div>
        
        {/* Server rack lines */}
        <div className="w-full space-y-1">
          <div className="h-0.5 bg-secondary-foreground/30 rounded" />
          <div className="h-0.5 bg-secondary-foreground/30 rounded" />
          <div className="h-0.5 bg-secondary-foreground/30 rounded" />
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

ServerNode.displayName = "ServerNode";
