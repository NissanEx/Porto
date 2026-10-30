"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Handle,
  Position,
  NodeProps,
  useNodesState,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Grid, ArrowUpRight } from 'lucide-react';
import {
  initialNodes,
  initialEdges,
  PortfolioNode,
  NodeType,
} from '../data/nodes';

const ORANGE = '#f26a21';
const INK = '#111111';
const HALF = 20;

const SelectionContext = createContext<string | null>(null);

function TypeIcon({ type, size = 14 }: { type: Exclude<NodeType, 'center'>; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 10 10', fill: INK } as const;
  if (type === 'initiatives') return <svg {...p}><path d="M5 0.5 L9.5 9 L0.5 9 Z" /></svg>;
  if (type === 'research') return <svg {...p}><rect x="1" y="1" width="8" height="8" /></svg>;
  if (type === 'artifacts') return <svg {...p}><circle cx="5" cy="5" r="4.2" /></svg>;
  return <svg {...p}><polygon points="5 0.5 9.3 2.8 9.3 7.2 5 9.5 0.7 7.2 0.7 2.8" /></svg>;
}

function CustomNode({ data }: NodeProps) {
  const n = data as unknown as PortfolioNode;
  const selectedId = useContext(SelectionContext);
  const selected = selectedId === n.id;
  const isCenter = n.type === 'center';

  const stroke = n.faded ? '#a3a3a3' : INK; 
  const labelColor = n.faded ? 'text-neutral-400' : selected ? 'text-black font-bold' : 'text-neutral-800';

  const svgProps = {
    width: 40, height: 40, viewBox: '0 0 36 36', fill: 'none',
    stroke, strokeWidth: 1.5, strokeDasharray: n.dashedOutline ? '3 3' : undefined,
    className: "transition-all duration-300" 
  } as const;

  let shape: React.ReactNode;
  if (isCenter) {
    shape = <svg {...svgProps} stroke="none"><circle cx="18" cy="18" r="8" fill={INK} /></svg>;
  } else if (n.type === 'initiatives') {
    shape = <svg {...svgProps}><path d="M18 5 L31 31 L5 31 Z" fill="#fff" fillOpacity="0.9" /></svg>;
  } else if (n.type === 'research') {
    shape = (
      <svg {...svgProps}>
        <rect x="8" y="8" width="20" height="20" fill="#fff" fillOpacity="0.9" />
        {n.marker === 'dot' && <rect x="15" y="15" width="6" height="6" fill={stroke} stroke="none" />}
      </svg>
    );
  } else if (n.type === 'artifacts') {
    shape = (
      <svg {...svgProps}>
        <circle cx="18" cy="18" r={n.marker === 'filled' ? 7 : 11} fill={n.marker === 'filled' ? stroke : '#fff'} fillOpacity={n.marker === 'filled' ? 1 : 0.9} />
      </svg>
    );
  } else {
    shape = (
      <svg {...svgProps}>
        <polygon points="18 4 30.5 11 30.5 25 18 32 5.5 25 5.5 11" fill="#fff" fillOpacity="1" />
        <text x="18" y="22" textAnchor="middle" fontSize="13" fill={stroke} stroke="none" fontWeight="600">{n.number}</text>
      </svg>
    );
  }

  const handleStyle: React.CSSProperties = {
    left: '50%', top: '50%', width: 1, height: 1, minWidth: 0, minHeight: 0,
    border: 0, opacity: 0, pointerEvents: 'none', transform: 'translate(-50%, -50%)',
  };

  const floatAnimation = selected
    ? { y: 0, scale: 1.15, rotate: 0 } 
    : { y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5], scale: [1, 1.02, 1] };

  const floatTransition = React.useMemo(() => {
    if (selected) return { duration: 0.4, type: "spring" as const };
    
    // Angka acak dihitung sekali saja per node
    const delay1 = Math.random() * 2;
    const delay2 = Math.random() * 2;
    const delay3 = Math.random() * 2;

    return { 
      y: { repeat: Infinity, duration: 4 + (n.id.length % 3), ease: "easeInOut", delay: delay1 },
      rotate: { repeat: Infinity, duration: 5 + (n.id.length % 2), ease: "easeInOut", delay: delay2 },
      scale: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: delay3 }
    };
  }, [selected, n.id]);

  return (
    <div className={`group relative h-10 w-10 cursor-grab active:cursor-grabbing ${selected ? 'z-50' : 'z-10'}`}>
      <Handle type="target" position={Position.Top} style={handleStyle} isConnectable={false} />
      <Handle type="source" position={Position.Top} style={handleStyle} isConnectable={false} />

      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.25, rotate: [0, -8, 8, -8, 0], transition: { duration: 0.5 } }}
        whileDrag={{ scale: 1.1, rotate: 0 }}
        transition={floatTransition}
        className={`flex h-10 w-10 flex-col items-center origin-center ${n.faded && !selected ? 'opacity-50' : ''}`}
      >
        <div className="flex h-10 w-10 items-center justify-center transition-all duration-300">{shape}</div>
        <div className="pointer-events-none absolute left-1/2 top-full mt-1 w-32 -translate-x-1/2 text-center">
          <p className={`whitespace-pre-line text-[13px] leading-[1.3] transition-colors duration-300 ${labelColor} ${isCenter ? 'text-[14px]' : ''} ${n.strikethrough ? 'line-through text-neutral-400' : ''}`}>
            {n.label}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const nodeTypes = { custom: CustomNode };

// ==========================================
// ALGORITMA TATA LETAK (DIPERLEBAR)
// ==========================================
const getRadialLayout = (centerNodeId: string) => {
  const adj: Record<string, string[]> = {};
  initialNodes.forEach(n => { adj[n.id] = []; });
  initialEdges.forEach(e => {
    adj[e.source].push(e.target);
    adj[e.target].push(e.source);
  });

  const levels: Record<string, number> = { [centerNodeId]: 0 };
  const queue = [centerNodeId];
  
  while (queue.length > 0) {
    const curr = queue.shift()!;
    const neighbors = adj[curr] || [];
    for (const n of neighbors) {
      if (levels[n] === undefined) {
        levels[n] = levels[curr] + 1;
        queue.push(n);
      }
    }
  }

  const nodesByLevel: Record<number, PortfolioNode[]> = {};
  initialNodes.forEach(n => {
    const lvl = levels[n.id] !== undefined ? levels[n.id] : 9;
    if (!nodesByLevel[lvl]) nodesByLevel[lvl] = [];
    nodesByLevel[lvl].push(n);
  });

  // PERUBAHAN: Memperbesar titik tengah dan jarak antar ring
  const CENTER_X = 500;
  const CENTER_Y = 400;
  const RADIUS_STEP = 250; // Diperlebar dari 170 menjadi 250

  return initialNodes.map(n => {
    const lvl = levels[n.id] !== undefined ? levels[n.id] : 9;
    let x = CENTER_X;
    let y = CENTER_Y;

    if (lvl > 0) {
      const levelNodes = nodesByLevel[lvl];
      const indexInLevel = levelNodes.findIndex(node => node.id === n.id);
      const totalInLevel = levelNodes.length;
      
      const angleOffset = lvl * 0.8; 
      const angle = (indexInLevel / totalInLevel) * 2 * Math.PI + angleOffset;
      const radius = lvl * RADIUS_STEP;
      
      x = CENTER_X + radius * Math.cos(angle);
      y = CENTER_Y + radius * Math.sin(angle);
    }

    return { id: n.id, type: 'custom', position: { x: x - HALF, y: y - HALF }, data: n as unknown as Record<string, unknown> };
  });
};

export default function NodeGraphWrapper() {
  return (
    <ReactFlowProvider>
      <NodeGraph />
    </ReactFlowProvider>
  );
}

function NodeGraph() {
  const [selectedId, setSelectedId] = useState<string>('center');
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(getRadialLayout('center'));
  const targetNodesRef = useRef<Node[]>(getRadialLayout('center'));

  const selected = initialNodes.find((n) => n.id === selectedId) ?? initialNodes[0];

  useEffect(() => {
    targetNodesRef.current = getRadialLayout(selectedId);
  }, [selectedId]);

  useEffect(() => {
    let animationFrameId: number;
    const updatePositions = () => {
      setNodes((currentNodes) => {
        let hasChanged = false;
        const nextNodes = currentNodes.map((node) => {
          if (node.dragging) return node;
          const target = targetNodesRef.current.find((n) => n.id === node.id);
          if (!target) return node;

          const dx = target.position.x - node.position.x;
          const dy = target.position.y - node.position.y;
          const vx = (node as any).vx || 0;
          const vy = (node as any).vy || 0;

          const stiffness = 0.04; 
          const damping = 0.8;   

          const nextVx = (vx + dx * stiffness) * damping;
          const nextVy = (vy + dy * stiffness) * damping;

          if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && Math.abs(nextVx) < 0.01 && Math.abs(nextVy) < 0.01) {
            return { ...node, position: target.position, vx: 0, vy: 0 };
          }

          hasChanged = true;
          return { ...node, position: { x: node.position.x + nextVx, y: node.position.y + nextVy }, vx: nextVx, vy: nextVy } as Node;
        });
        if (hasChanged) { animationFrameId = requestAnimationFrame(updatePositions); return nextNodes; }
        return currentNodes;
      });
    };
    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedId, setNodes]);

  const edges: Edge[] = useMemo(
    () =>
      initialEdges.map((e) => {
        const linked = e.source === selectedId || e.target === selectedId;
        return {
          id: e.id, source: e.source, target: e.target, type: 'default', focusable: false,
          style: {
            stroke: linked ? INK : '#d4d4d4', 
            strokeWidth: linked ? 2 : 1.5, 
            strokeDasharray: e.style === 'dashed' ? '6 4' : undefined, 
            transition: 'stroke 0.3s ease, stroke-width 0.3s ease', opacity: linked ? 1 : 0.4, 
          },
        };
      }),
    [selectedId]
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedId(node.id);
  }, []);

  const backImage = `https://picsum.photos/seed/${selected.id}-back/400/500`;
  const frontImage = `https://picsum.photos/seed/${selected.id}-front/300/300`;

  return (
    <SelectionContext.Provider value={selectedId}>
      <div className="relative w-full max-w-6xl mx-auto h-[700px] flex flex-col md:flex-row bg-[#f4f4f4] overflow-hidden">
        
        {/* KANVAS GRAPH (KIRI) */}
        <div className="w-full h-[50%] md:h-full md:flex-1 relative z-0">
          <ReactFlow
            nodes={nodes} edges={edges} nodeTypes={nodeTypes}
            onNodeClick={onNodeClick} onNodesChange={onNodesChange}
            onPaneClick={() => setSelectedId('center')} 
            nodesDraggable={true} nodesConnectable={false} elementsSelectable={false}
            panOnDrag={false} panOnScroll={false} zoomOnScroll={false} zoomOnPinch={false} zoomOnDoubleClick={false}
            preventScrolling={false} 
            fitView 
            // PERUBAHAN: Padding ditambah agar tidak mepet pinggir, maxZoom diturunkan agar tidak zoom-in berlebihan
            fitViewOptions={{ padding: 0.35, maxZoom: 0.9 }} 
            proOptions={{ hideAttribution: true }} 
            style={{ background: 'transparent' }}
          />
        </div>

        {/* AREA 3-LAYER CARD (KANAN) */}
        <div className="relative w-full md:w-[480px] h-[50%] md:h-full flex justify-center items-center pointer-events-none z-10">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-[360px] h-[520px] pointer-events-auto"
            >
              
              {/* LAYER 1: Gambar Belakang Kiri Atas */}
              <div className="absolute top-0 left-0 w-[180px] h-[260px] bg-gray-200 shadow-md z-0">
                <img src={backImage} alt="Top Layer" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 bg-white text-black text-[10px] px-2.5 py-1.5 flex items-center gap-1.5 font-bold uppercase tracking-wider cursor-pointer">
                  Visit <span className="text-[12px] leading-none">&nearr;</span>
                </div>
              </div>

              {/* LAYER 2: Card Utama */}
              <div className="absolute top-[60px] left-[50px] w-[300px] bg-white z-10 shadow-2xl rounded-sm overflow-hidden flex flex-col border border-gray-100">
                
                <div className="p-5 pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TypeIcon type={selected.type as Exclude<NodeType, 'center'>} size={10} />
                    <span className="text-[9px] font-bold tracking-widest text-gray-800 uppercase">
                      {selected.type !== 'center' ? selected.type : 'INITIATIVE'}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-0.5">{selected.label.replace('\n', ' ')}</h2>
                  <p className="text-[12px] text-gray-500 mb-1">Research Lab & Creative Studio</p>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-4 leading-tight">
                    FOUNDER & DIRECTOR <br/> 2023 - PRESENT
                  </p>

                  <div className="text-[12px] leading-[1.6] text-gray-700 space-y-3">
                    <p>
                      <strong className="text-black">{selected.label.replace('\n', ' ')}</strong> is a non-profit bringing psychologists, technologists, artists and creatives together to work on applied experiments and prototypes that uplift the human spirit.
                    </p>
                    <p>{selected.description}</p>
                  </div>

                  {/* List Navigasi Bawah */}
                  <div className="mt-5 border-t border-gray-200 border-dashed">
                    {[
                      { icon: <Grid size={12} className="text-gray-500" />, text: 'DETAILS' },
                      { icon: <ArrowUpRight size={12} className="text-gray-500" />, text: 'FURTHER READING' },
                      { icon: <Plus size={12} className="text-gray-500 rotate-45" />, text: 'CONNECTIONS' }
                    ].map((menu, i) => (
                      <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-200 border-dashed last:border-0 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-2.5">
                          {menu.icon}
                          <span className="text-[9px] font-bold tracking-widest text-gray-600">{menu.text}</span>
                        </div>
                        <Plus size={12} className="text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LAYER 3: Gambar Depan Kanan Bawah */}
              <div className="absolute bottom-0 right-0 w-[200px] h-[180px] bg-black shadow-2xl z-20">
                <img src={frontImage} alt="Bottom Layer" className="w-full h-full object-cover" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SelectionContext.Provider>
  );
}