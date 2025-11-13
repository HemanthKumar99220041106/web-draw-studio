import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { EditableText } from "../EditableText";
import { useNodeEdit } from "../DiagramCanvas";

export const DiamondNode = memo(({ data, selected, id }: NodeProps) => {
  const { editingNodeId, setEditingNodeId, updateNodeData } = useNodeEdit();
  const isEditing = editingNodeId === id;

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
        <EditableText
          value={data.label || ""}
          onChange={(value) => updateNodeData(id, { label: value })}
          isEditing={isEditing}
          onEditingChange={(editing) => setEditingNodeId(editing ? id : null)}
          fontSize={data.fontSize}
          fontWeight={data.fontWeight}
          fontStyle={data.fontStyle}
          color={data.textColor}
          textAlign={data.textAlign}
          className="font-medium text-foreground px-2"
        />
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 z-10" />
    </div>
  );
});

DiamondNode.displayName = "DiamondNode";
