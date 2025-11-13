import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PropertiesPanelProps {
  selectedNodeId: string | null;
}

export const PropertiesPanel = ({ selectedNodeId }: PropertiesPanelProps) => {
  if (!selectedNodeId) {
    return (
      <div className="w-80 bg-card border-l border-border flex items-center justify-center shadow-sm">
        <div className="text-center p-6">
          <p className="text-sm text-muted-foreground">Select a shape to edit properties</p>
          <p className="text-xs text-muted-foreground/70 mt-2">Click on any element on the canvas</p>
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
            <div className="space-y-2">
              <div>
                <Label htmlFor="text" className="text-xs">Content</Label>
                <Input id="text" defaultValue="Shape" className="h-8 text-sm" />
              </div>
              <div>
                <Label htmlFor="fontSize" className="text-xs">Font Size</Label>
                <Select defaultValue="14">
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12px</SelectItem>
                    <SelectItem value="14">14px</SelectItem>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                    <SelectItem value="20">20px</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
