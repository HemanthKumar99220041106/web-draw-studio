import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";

export const ActorNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className="relative flex flex-col items-center" style={{ width: "80px" }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className={`transition-all ${selected ? "opacity-100" : "opacity-90"}`}>
        {/* Head */}
        <div className="w-8 h-8 rounded-full border-2 border-purple-500 bg-purple-50 mx-auto" />
        {/* Body */}
        <div className="w-0.5 h-12 bg-purple-500 mx-auto" />
        {/* Arms */}
        <div className="relative -mt-8">
          <div className="absolute w-16 h-0.5 bg-purple-500 left-1/2 -translate-x-1/2" />
        </div>
        {/* Legs */}
        <div className="flex justify-center gap-4 mt-0">
          <div className="w-0.5 h-10 bg-purple-500 rotate-[20deg] origin-top" />
          <div className="w-0.5 h-10 bg-purple-500 -rotate-[20deg] origin-top" />
        </div>
      </div>
      <div className="mt-2 text-xs font-medium text-center text-foreground">
        {data.label || "Actor"}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
      {selected && <div className="absolute inset-0 ring-2 ring-primary rounded-lg -z-10" />}
    </div>
  );
});

ActorNode.displayName = "ActorNode";
