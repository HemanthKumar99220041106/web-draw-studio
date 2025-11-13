import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MousePointer2,
  Hand,
  Type,
  Move,
  Square,
  Circle,
  Diamond,
  ArrowRight,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Download,
  Save,
  Copy,
  Trash2,
  AlignHorizontalJustifyCenter,
  AlignVerticalJustifyCenter,
  Grid3x3,
} from "lucide-react";
import type { Tool } from "@/pages/Index";
import { toast } from "sonner";

interface ToolbarProps {
  activeTool: Tool;
  onToolChange: (tool: Tool) => void;
}

export const Toolbar = ({ activeTool, onToolChange }: ToolbarProps) => {
  const tools = [
    { id: "select" as Tool, icon: MousePointer2, label: "Select" },
    { id: "pan" as Tool, icon: Hand, label: "Pan" },
    { id: "text" as Tool, icon: Type, label: "Text" },
    { id: "connector" as Tool, icon: Move, label: "Connector" },
  ];

  const shapes = [
    { id: "rectangle" as Tool, icon: Square, label: "Rectangle" },
    { id: "circle" as Tool, icon: Circle, label: "Circle" },
    { id: "diamond" as Tool, icon: Diamond, label: "Diamond" },
    { id: "arrow" as Tool, icon: ArrowRight, label: "Arrow" },
  ];

  const handleCopy = () => {
    toast.info("Copy functionality coming soon");
  };

  const handleDelete = () => {
    toast.info("Delete selected items");
  };

  const handleAlignHorizontal = () => {
    toast.info("Align horizontally");
  };

  const handleAlignVertical = () => {
    toast.info("Align vertically");
  };

  const handleSave = () => {
    toast.success("Diagram saved successfully!");
  };

  const handleExport = () => {
    toast.success("Exporting diagram...");
  };

  return (
    <div className="h-16 bg-toolbar border-b border-toolbar-border flex items-center px-4 gap-2 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Grid3x3 className="h-5 w-5 text-primary" />
          <h1 className="text-lg font-semibold text-foreground">Diagram Editor</h1>
        </div>
        
        <Separator orientation="vertical" className="h-8" />
        
        <div className="flex items-center gap-1">
          {tools.map((tool) => (
            <Button
              key={tool.id}
              variant={activeTool === tool.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onToolChange(tool.id)}
              className="h-9 w-9 p-0 toolbar-item-hover"
              title={tool.label}
            >
              <tool.icon className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex items-center gap-1">
        {shapes.map((shape) => (
          <Button
            key={shape.id}
            variant={activeTool === shape.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onToolChange(shape.id)}
            className="h-9 w-9 p-0 toolbar-item-hover"
            title={shape.label}
          >
            <shape.icon className="h-4 w-4" />
          </Button>
        ))}
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Undo (Ctrl+Z)">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Redo (Ctrl+Y)">
          <Redo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Copy (Ctrl+C)" onClick={handleCopy}>
          <Copy className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Delete (Del)" onClick={handleDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Align Horizontal" onClick={handleAlignHorizontal}>
          <AlignHorizontalJustifyCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Align Vertical" onClick={handleAlignVertical}>
          <AlignVerticalJustifyCenter className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Zoom In">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 toolbar-item-hover" title="Zoom Out">
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="sm" className="toolbar-item-hover" title="Save (Ctrl+S)" onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button variant="default" size="sm" className="toolbar-item-hover" title="Export Diagram" onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
};
