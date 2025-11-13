import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const NoteNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className="relative" style={{ width: "150px", minHeight: "100px" }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div
        className={`relative bg-yellow-50 border-2 border-yellow-400 p-3 transition-all ${
          selected ? "ring-2 ring-primary shadow-lg" : "shadow-sm"
        }`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
        }}
      >
        {/* Folded corner effect */}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-200 border-l-2 border-t-2 border-yellow-400"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          }}
        />
        
        <div className="text-xs text-foreground">
          {data.label || "Note"}
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

NoteNode.displayName = "NoteNode";
