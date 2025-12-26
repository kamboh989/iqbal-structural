import React from 'react';
import { CircularGallery, GalleryItem } from './circular-gallery';

const galleryData: GalleryItem[] = [
  {
    common: 'High-Rise Structure',
    binomial: 'Reinforced Concrete Framework',
    photo: {
      url: '/projects/p16.jpg',
      text: 'high-rise building reinforced concrete structure under construction',
      pos: '50% 40%',
      by: 'Project Site Team'
    }
  },
  {
    common: 'Commercial Complex',
    binomial: 'Steel Frame Construction',
    photo: {
      url: '/projects/p17.jpg',
      text: 'steel structural framework of a commercial building under development',
      pos: '70% 60%',
      by: 'Structural Engineering Unit'
    }
  },
  {
    common: 'Bridge Structure',
    binomial: 'Pre-Stressed Concrete',
    photo: {
      url: '/projects/p18.jpg',
      text: 'bridge deck and supporting piers during construction phase',
      pos: '55% 45%',
      by: 'Infrastructure Division'
    }
  },
  {
    common: 'Industrial Facility',
    binomial: 'Heavy Steel Fabrication',
    photo: {
      url: '/projects/p19.jpg',
      text: 'industrial plant steel fabrication and assembly on construction site',
      pos: '65% 65%',
      by: 'Industrial Projects Team'
    }
  },
  {
    common: 'Residential Development',
    binomial: 'Multi-Storey Housing',
    photo: {
      url: '/projects/p20.jpg',
      text: 'multi-storey residential building structural work in progress',
      pos: '50% 30%',
      by: 'Residential Construction Unit'
    }
  },
  {
    common: 'Foundation Works',
    binomial: 'Deep Piling System',
    photo: {
      url: '/projects/p21.jpg',
      text: 'deep foundation piling and excavation work for high-load structures',
      pos: '45% 35%',
      by: 'Geotechnical Team'
    }
  },
  {
    common: 'Warehouse Facility',
    binomial: 'Pre-Engineered Building',
    photo: {
      url: '/projects/p22.jpg',
      text: 'pre-engineered steel warehouse structure under assembly',
      pos: '60% 40%',
      by: 'Logistics Infrastructure Team'
    }
  },
  {
    common: 'Road Infrastructure',
    binomial: 'Asphalt & Concrete Works',
    photo: {
      url: '/projects/p23.jpg',
      text: 'road construction with asphalt layering and concrete curb works',
      by: 'Civil Works Department'
    }
  },
  {
    common: 'Structural Retrofit',
    binomial: 'Seismic Strengthening',
    photo: {
      url: '/projects/p24.jpg',
      text: 'structural strengthening and retrofitting for seismic resistance',
      pos: '40% 30%',
      by: 'Structural Safety Engineers'
    }
  },
  {
    common: 'Site Development',
    binomial: 'Earthwork & Grading',
    photo: {
      url: '/projects/p25.jpg',
      text: 'large-scale earthwork, grading, and site preparation activities',
      by: 'Site Development Team'
    }
  },
];

const CircularGalleryDemo = () => {
  return (
    // This outer container provides the scrollable height
    <div className="w-full  text-foreground" style={{ height: '500vh' }}>
      {/* This inner container sticks to the top while scrolling */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
         <h1 className="text-4xl font-bold">Our Construction Projects</h1>
<p className="text-muted-foreground">Scroll to explore the structural gallery</p>

        </div>
        <div className="w-full h-full">
          <CircularGallery items={galleryData} />
        </div>
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
