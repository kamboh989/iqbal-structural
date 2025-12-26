import { FeatureSteps } from "./ui/feature"

const features = [
  { 
    step: 'Step 1', 
    title: 'Engineering & Technical Planning',
    content: 'Our engineering team analyzes project requirements, site conditions, and structural loads to develop safe, efficient, and cost-effective steel structure designs.', 
    image: '/feature-1.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'Fabrication & Quality Control',
    content: 'Using advanced fabrication technology, we manufacture steel components with strict quality checks to ensure strength, precision, and long-term durability.',
    image: '/feature-2-new.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Execution, Erection & Delivery',
    content: 'Our experienced construction team manages on-site erection, safety compliance, and timely project delivery, ensuring flawless execution from start to finish.',
    image: '/feature-3-new.jpg'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Engineering to Execution"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}