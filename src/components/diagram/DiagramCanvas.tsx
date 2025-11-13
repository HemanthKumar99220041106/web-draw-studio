import { useCallback, useRef, useState, createContext, useContext } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  addEdge,
  Connection,
  Edge,
  Node,
  useNodesState,
  useEdgesState,
  NodeTypes,
} from "reactflow";
import "reactflow/dist/style.css";
import type { Tool } from "@/pages/DiagramEditor";
import { RectangleNode } from "./nodes/RectangleNode";
import { CircleNode } from "./nodes/CircleNode";
import { DiamondNode } from "./nodes/DiamondNode";
import { ActorNode } from "./nodes/ActorNode";
import { DatabaseNode } from "./nodes/DatabaseNode";
import { CloudNode } from "./nodes/CloudNode";
import { ComponentNode } from "./nodes/ComponentNode";
import { InterfaceNode } from "./nodes/InterfaceNode";
import { PackageNode } from "./nodes/PackageNode";
import { NoteNode } from "./nodes/NoteNode";
import { ServerNode } from "./nodes/ServerNode";

interface DiagramCanvasProps {
  activeTool: Tool;
  onNodeSelect: (nodeId: string | null) => void;
}

interface NodeEditContextType {
  editingNodeId: string | null;
  setEditingNodeId: (id: string | null) => void;
  updateNodeData: (nodeId: string, data: any) => void;
}

const NodeEditContext = createContext<NodeEditContextType | null>(null);

export const useNodeEdit = () => {
  const context = useContext(NodeEditContext);
  if (!context) {
    throw new Error("useNodeEdit must be used within NodeEditContext.Provider");
  }
  return context;
};

const nodeTypes: NodeTypes = {
  rectangle: RectangleNode,
  circle: CircleNode,
  diamond: DiamondNode,
  actor: ActorNode,
  database: DatabaseNode,
  cloud: CloudNode,
  component: ComponentNode,
  interface: InterfaceNode,
  package: PackageNode,
  note: NoteNode,
  server: ServerNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

let id = 0;
const getId = () => `node_${id++}`;

export const DiagramCanvas = ({ activeTool, onNodeSelect }: DiagramCanvasProps) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);

  const updateNodeData = useCallback(
    (nodeId: string, data: any) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
        )
      );
    },
    [setNodes]
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type || !reactFlowInstance) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: {
          label: `${type} node`,
          fontSize: 14,
          fontWeight: "normal",
          fontStyle: "normal",
          textColor: "#000000",
          textAlign: "center",
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const onNodeDoubleClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      setEditingNodeId(node.id);
    },
    []
  );

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      onNodeSelect(node.id);
    },
    [onNodeSelect]
  );

  const onPaneClick = useCallback(() => {
    onNodeSelect(null);
  }, [onNodeSelect]);

  return (
    <NodeEditContext.Provider value={{ editingNodeId, setEditingNodeId, updateNodeData }}>
      <div ref={reactFlowWrapper} className="w-full h-full bg-canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeClick={onNodeClick}
          onNodeDoubleClick={onNodeDoubleClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          fitView
          panOnDrag={activeTool === "pan"}
          selectionOnDrag={activeTool === "select"}
        >
          <Controls />
          <MiniMap 
            nodeColor="#3b82f6"
            maskColor="rgba(0, 0, 0, 0.1)"
            className="bg-card border border-border"
          />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e5e7eb" />
        </ReactFlow>
      </div>
    </NodeEditContext.Provider>
  );
};
