import { Square, Circle, Diamond, ArrowRight, Triangle, Hexagon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ShapeLibrary = () => {
  const shapes = [
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" },
    { id: "diamond", icon: Diamond, label: "Diamond" },
    { id: "triangle", icon: Triangle, label: "Triangle" },
    { id: "hexagon", icon: Hexagon, label: "Hexagon" },
    { id: "arrow", icon: ArrowRight, label: "Arrow" },
  ];

  const onDragStart = (event: React.DragEvent, shapeType: string) => {
    event.dataTransfer.setData("application/reactflow", shapeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-sm text-foreground">Shape Library</h2>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          <div className="space-y-1">
            <h3 className="text-xs font-medium text-muted-foreground mb-2">Basic Shapes</h3>
            {shapes.map((shape) => (
              <div
                key={shape.id}
                draggable
                onDragStart={(e) => onDragStart(e, shape.id)}
                className="flex items-center gap-3 p-3 rounded-md bg-secondary/50 hover:bg-secondary cursor-move transition-colors border border-border/50"
              >
                <shape.icon className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">{shape.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
