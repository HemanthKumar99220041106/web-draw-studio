import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Package } from "lucide-react";
import { EditableText } from "../EditableText";
import { useNodeEdit } from "../DiagramCanvas";

export const ComponentNode = memo(({ data, selected, id }: NodeProps) => {
  const { editingNodeId, setEditingNodeId, updateNodeData } = useNodeEdit();
  const isEditing = editingNodeId === id;

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
      
      <EditableText
        value={data.label || "Component"}
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
      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  );
});

ComponentNode.displayName = "ComponentNode";
