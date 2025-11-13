import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";
import { useReactFlow } from "reactflow";

interface PropertiesPanelProps {
  selectedNodeId: string | null;
}

export const PropertiesPanel = ({ selectedNodeId }: PropertiesPanelProps) => {
  const { getNode, setNodes } = useReactFlow();
  const [nodeData, setNodeData] = useState<any>({});

  useEffect(() => {
    if (selectedNodeId) {
      const node = getNode(selectedNodeId);
      if (node) {
        setNodeData(node.data);
      }
    }
  }, [selectedNodeId, getNode]);

  const updateNodeProperty = (property: string, value: any) => {
    if (!selectedNodeId) return;
    
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNodeId
          ? { ...node, data: { ...node.data, [property]: value } }
          : node
      )
    );
    setNodeData((prev: any) => ({ ...prev, [property]: value }));
  };

  if (!selectedNodeId) {
    return (
      <div className="w-80 bg-card border-l border-border flex items-center justify-center shadow-sm">
        <div className="text-center p-6">
          <p className="text-sm text-muted-foreground">Select a shape to edit properties</p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Double-click shapes to edit text
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-card border-l border-border flex flex-col shadow-sm">
      <div className="p-4 border-b border-border bg-muted/30">
        <h2 className="font-semibold text-sm text-foreground">Properties Panel</h2>
        <p className="text-xs text-muted-foreground mt-0.5">Customize selected shape</p>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Position</h3>
            <div className="space-y-2">
              <div>
                <Label htmlFor="x" className="text-xs">X</Label>
                <Input id="x" type="number" defaultValue="0" className="h-8 text-sm" />
              </div>
              <div>
                <Label htmlFor="y" className="text-xs">Y</Label>
                <Input id="y" type="number" defaultValue="0" className="h-8 text-sm" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Size</h3>
            <div className="space-y-2">
              <div>
                <Label htmlFor="width" className="text-xs">Width</Label>
                <Input id="width" type="number" defaultValue="150" className="h-8 text-sm" />
              </div>
              <div>
                <Label htmlFor="height" className="text-xs">Height</Label>
                <Input id="height" type="number" defaultValue="100" className="h-8 text-sm" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Appearance</h3>
            <div className="space-y-2">
              <div>
                <Label htmlFor="fill" className="text-xs">Fill Color</Label>
                <Input id="fill" type="color" defaultValue="#3b82f6" className="h-8" />
              </div>
              <div>
                <Label htmlFor="stroke" className="text-xs">Stroke Color</Label>
                <Input id="stroke" type="color" defaultValue="#1e40af" className="h-8" />
              </div>
              <div>
                <Label htmlFor="strokeWidth" className="text-xs">Stroke Width</Label>
                <Slider id="strokeWidth" defaultValue={[2]} max={10} step={1} className="mt-2" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Text</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="text" className="text-xs mb-2 block">Content</Label>
                <Input
                  id="text"
                  value={nodeData.label || ""}
                  onChange={(e) => updateNodeProperty("label", e.target.value)}
                  className="h-8 text-sm"
                  placeholder="Double-click shape to edit"
                />
              </div>

              <div>
                <Label htmlFor="fontSize" className="text-xs mb-2 block">Font Size</Label>
                <Select
                  value={String(nodeData.fontSize || 14)}
                  onValueChange={(value) => updateNodeProperty("fontSize", Number(value))}
                >
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10px</SelectItem>
                    <SelectItem value="12">12px</SelectItem>
                    <SelectItem value="14">14px</SelectItem>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                    <SelectItem value="20">20px</SelectItem>
                    <SelectItem value="24">24px</SelectItem>
                    <SelectItem value="28">28px</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-xs mb-2 block">Font Style</Label>
                <div className="flex gap-2">
                  <Button
                    variant={nodeData.fontWeight === "bold" ? "default" : "outline"}
                    size="sm"
                    className="flex-1 h-8"
                    onClick={() =>
                      updateNodeProperty(
                        "fontWeight",
                        nodeData.fontWeight === "bold" ? "normal" : "bold"
                      )
                    }
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={nodeData.fontStyle === "italic" ? "default" : "outline"}
                    size="sm"
                    className="flex-1 h-8"
                    onClick={() =>
                      updateNodeProperty(
                        "fontStyle",
                        nodeData.fontStyle === "italic" ? "normal" : "italic"
                      )
                    }
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-xs mb-2 block">Text Align</Label>
                <ToggleGroup
                  type="single"
                  value={nodeData.textAlign || "center"}
                  onValueChange={(value) => value && updateNodeProperty("textAlign", value)}
                  className="justify-start"
                >
                  <ToggleGroupItem value="left" className="h-8 w-10">
                    <AlignLeft className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" className="h-8 w-10">
                    <AlignCenter className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" className="h-8 w-10">
                    <AlignRight className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div>
                <Label htmlFor="textColor" className="text-xs mb-2 block">Text Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="textColor"
                    type="color"
                    value={nodeData.textColor || "#000000"}
                    onChange={(e) => updateNodeProperty("textColor", e.target.value)}
                    className="h-8 w-16 p-1"
                  />
                  <Input
                    type="text"
                    value={nodeData.textColor || "#000000"}
                    onChange={(e) => updateNodeProperty("textColor", e.target.value)}
                    className="h-8 flex-1 text-sm font-mono"
                    placeholder="#000000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
