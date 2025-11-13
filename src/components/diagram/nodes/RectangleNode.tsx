import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { EditableText } from "../EditableText";
import { useNodeEdit } from "../DiagramCanvas";

export const RectangleNode = memo(({ data, selected, id }: NodeProps) => {
  const { editingNodeId, setEditingNodeId, updateNodeData } = useNodeEdit();
  const isEditing = editingNodeId === id;

  return (
    <div
      className={`px-6 py-4 rounded-md bg-shape-fill border-2 border-shape-stroke transition-all ${
        selected ? "ring-2 ring-primary" : ""
      }`}
      style={{ minWidth: "150px", minHeight: "80px" }}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
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
        className="font-medium text-foreground"
      />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

RectangleNode.displayName = "RectangleNode";
