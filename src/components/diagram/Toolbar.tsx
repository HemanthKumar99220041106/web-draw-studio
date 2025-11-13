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
} from "lucide-react";
import type { Tool } from "@/pages/Index";

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

  return (
    <div className="h-14 bg-toolbar border-b border-toolbar-border flex items-center px-4 gap-2">
      <div className="flex items-center gap-1">
        <h1 className="text-lg font-semibold text-foreground mr-4">Diagram Editor</h1>
        
        {tools.map((tool) => (
          <Button
            key={tool.id}
            variant={activeTool === tool.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onToolChange(tool.id)}
            className="h-9 w-9 p-0"
            title={tool.label}
          >
            <tool.icon className="h-4 w-4" />
          </Button>
        ))}
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center gap-1">
        {shapes.map((shape) => (
          <Button
            key={shape.id}
            variant={activeTool === shape.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onToolChange(shape.id)}
            className="h-9 w-9 p-0"
            title={shape.label}
          >
            <shape.icon className="h-4 w-4" />
          </Button>
        ))}
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0" title="Undo">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0" title="Redo">
          <Redo className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0" title="Zoom In">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0" title="Zoom Out">
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="sm" title="Save">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button variant="default" size="sm" title="Export">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
};
