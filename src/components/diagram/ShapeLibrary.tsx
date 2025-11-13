import { 
  Square, Circle, Diamond, Triangle, Hexagon,
  User, Database, Cloud, Package, Server, FileText,
  Box, Boxes
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const ShapeLibrary = () => {
  const basicShapes = [
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" },
    { id: "diamond", icon: Diamond, label: "Diamond" },
  ];

  const umlShapes = [
    { id: "actor", icon: User, label: "Actor" },
    { id: "component", icon: Box, label: "Component" },
    { id: "interface", icon: Circle, label: "Interface" },
    { id: "package", icon: Package, label: "Package" },
  ];

  const systemShapes = [
    { id: "database", icon: Database, label: "Database" },
    { id: "server", icon: Server, label: "Server" },
    { id: "cloud", icon: Cloud, label: "Cloud Service" },
    { id: "note", icon: FileText, label: "Note/Comment" },
  ];

  const onDragStart = (event: React.DragEvent, shapeType: string) => {
    event.dataTransfer.setData("application/reactflow", shapeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const renderShapeSection = (title: string, shapes: typeof basicShapes) => (
    <div className="space-y-2 mb-4">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
        {title}
      </h3>
      <div className="space-y-1">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            draggable
            onDragStart={(e) => onDragStart(e, shape.id)}
            className="flex items-center gap-3 p-2.5 rounded-md bg-secondary/30 hover:bg-secondary cursor-move transition-all hover:shadow-sm border border-border/50 hover:border-border group"
          >
            <shape.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-foreground">{shape.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-72 bg-card border-r border-border flex flex-col shadow-sm">
      <div className="p-4 border-b border-border bg-muted/30">
        <h2 className="font-semibold text-sm text-foreground flex items-center gap-2">
          <Boxes className="h-4 w-4" />
          Shape Library
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Drag shapes onto canvas
        </p>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4">
          {renderShapeSection("Basic Shapes", basicShapes)}
          <Separator className="my-4" />
          {renderShapeSection("UML Diagrams", umlShapes)}
          <Separator className="my-4" />
          {renderShapeSection("System Design", systemShapes)}
        </div>
      </ScrollArea>
    </div>
  );
};
