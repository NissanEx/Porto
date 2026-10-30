// data/nodes.ts
export type NodeType = 'center' | 'initiatives' | 'research' | 'artifacts' | 'paths';

export interface PortfolioNode {
  id: string;
  label: string;
  type: NodeType;
  position: { x: number; y: number };
  description: string;
  year?: string;
  number?: string;
  marker?: 'filled' | 'dot';
  faded?: boolean;
  strikethrough?: boolean;
  dashedOutline?: boolean;
}

export interface EdgeData {
  id: string;
  source: string;
  target: string;
  style: 'solid' | 'dashed';
}

export const TYPE_LABEL: Record<Exclude<NodeType, 'center'>, string> = {
  initiatives: 'INITIATIVES',
  research: 'RESEARCH',
  artifacts: 'ARTIFACTS',
  paths: 'PATHS',
};

export const initialNodes: PortfolioNode[] = [
  {
    id: 'center',
    label: 'Sandy Wiraabdy', // <--- SUDAH DIGANTI
    type: 'center',
    position: { x: 408, y: 331 },
    year: 'b. 1995',
    description: 'Sandy is a researcher and designer. His initiatives and projects bridge positive psychology, human-computer interaction, and the creative arts', // <--- SUDAH DIGANTI
  },
  {
    id: 'info',
    label: 'Information',
    type: 'artifacts',
    marker: 'filled',
    position: { x: 427, y: 149 },
    description: 'Exploring the flow of information in digital ecosystems.',
  },
  {
    id: 'char-dev',
    label: 'Character\nDevelopment',
    type: 'research',
    position: { x: 144, y: 173 },
    description: 'Developing character traits through interactive narratives.',
  },
  {
    id: 'pos-psy',
    label: 'Positive Psychology',
    type: 'paths',
    number: '2',
    position: { x: 218, y: 300 },
    description: 'Applying positive psychology principles to everyday interface design.',
  },
  {
    id: 'social',
    label: 'Social Intervention',
    type: 'paths',
    number: '1',
    position: { x: 588, y: 331 },
    description: 'Designing systems for social impact and community building.',
  },
  {
    id: 'friction',
    label: 'Friction Paper',
    type: 'research',
    marker: 'dot',
    position: { x: 252, y: 427 },
    description: 'A research paper on the positive effects of friction in UI.',
  },
  {
    id: 'interactive',
    label: 'Interactive\nMachines',
    type: 'paths',
    number: '3',
    position: { x: 480, y: 470 },
    description: 'Building physical computing interfaces.',
  },
  {
    id: 'possible',
    label: 'APOSSIBLE',
    type: 'initiatives',
    position: { x: 701, y: 209 },
    description: 'A speculative design project about future realities.',
    strikethrough: true,
    dashedOutline: true,
  },
  {
    id: 'reventions',
    label: 'The Festival of Urgent\nReinventions',
    type: 'initiatives',
    position: { x: 720, y: 468 },
    description: 'A festival dedicated to rapid prototyping of solutions.',
  },
  {
    id: 'personal',
    label: 'Personal Narratives',
    type: 'research',
    position: { x: 70, y: 396 },
    description: 'Exploring storytelling as a tool for self-discovery.',
    faded: true,
    dashedOutline: true,
  },
  {
    id: 'human-exp',
    label: 'Human Expression',
    type: 'paths',
    number: '1',
    position: { x: 372, y: 547 },
    description: 'Path dedicated to the intersection of technology and art.',
  },
  {
    id: 'evolutionary',
    label: 'Evolutionary\nSystems',
    type: 'paths',
    number: '2',
    position: { x: 271, y: 617 },
    description: 'Studying generative algorithms and complex systems.',
    strikethrough: true,
  },
];

export const initialEdges: EdgeData[] = [
  { id: 'e1', source: 'center', target: 'info', style: 'solid' },
  { id: 'e2', source: 'char-dev', target: 'pos-psy', style: 'solid' },
  { id: 'e3', source: 'pos-psy', target: 'center', style: 'solid' },
  { id: 'e4', source: 'pos-psy', target: 'friction', style: 'solid' },
  { id: 'e5', source: 'center', target: 'social', style: 'solid' },
  { id: 'e6', source: 'center', target: 'interactive', style: 'solid' },
  { id: 'e7', source: 'center', target: 'human-exp', style: 'solid' },
  { id: 'e8', source: 'human-exp', target: 'evolutionary', style: 'solid' },
  { id: 'e9', source: 'social', target: 'possible', style: 'dashed' },
  { id: 'e10', source: 'social', target: 'reventions', style: 'dashed' },
  { id: 'e11', source: 'pos-psy', target: 'personal', style: 'dashed' },
];