import React from 'react';
import { ProcessSection } from './ui/how-we-do';
import { BrainCircuit, Target, PenTool, Code, ShieldCheck, Megaphone } from 'lucide-react';

// Demo component to showcase the ProcessSection
const ProcessSectionDemo = () => {
  const processItems = [
    {
      icon: BrainCircuit,
      title: 'Project Consultation',
      description: 'We start by understanding your vision, requirements, and budget',
    },
    {
      icon: Target,
      title: 'Conceptual & Structural Design',
      description: 'Our design team creates detailed structural layouts, 3D models, and engineering plans',
    },
    {
      icon: PenTool,
      title: 'Material Procurement',
      description: 'We source high-quality steel and materials from trusted suppliers',
    },
    {
      icon: Code,
      title: 'Precision Fabrication',
      description: 'Steel components are fabricated in our state-of-the-art facility using CNC cutting, welding, and finishing processes',
    },
    {
      icon: ShieldCheck,
      title: 'On-Site Erection',
      description: 'Our skilled team assembles the steel structure on-site with precision',
    },
    {
      icon: Megaphone,
      title: 'Final Inspection & Handover',
      description: 'After construction, we conduct rigorous quality checks, structural inspections, and finishing touches',
    },
  ];

  return (
    <div className="w-full">
      <ProcessSection
        subtitle="Our Model"
        title="How We Do It"
        description="From concept to completion, we follow a structured, detail-oriented process that ensures high-quality, durable, and safe steel structures."
        
        items={processItems}
      />
    </div>
  );
};

export default ProcessSectionDemo;