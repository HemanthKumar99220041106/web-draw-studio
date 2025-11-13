import { DiagramCanvas } from "@/components/diagram/DiagramCanvas";
import { Toolbar } from "@/components/diagram/Toolbar";
import { ShapeLibrary } from "@/components/diagram/ShapeLibrary";
import { PropertiesPanel } from "@/components/diagram/PropertiesPanel";
import { useState } from "react";

export type Tool = "select" | "pan" | "text" | "connector" | "rectangle" | "circle" | "diamond" | "arrow";

const Index = () => {
  const [activeTool, setActiveTool] = useState<Tool>("select");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden">
      <Toolbar activeTool={activeTool} onToolChange={setActiveTool} />
      
      <div className="flex-1 flex overflow-hidden">
        <ShapeLibrary />
        
        <div className="flex-1 relative">
          <DiagramCanvas 
            activeTool={activeTool} 
            onNodeSelect={setSelectedNodeId}
          />
        </div>
        
        <PropertiesPanel selectedNodeId={selectedNodeId} />
      </div>
    </div>
  );
};

export default Index;
