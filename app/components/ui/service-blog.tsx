import { ArrowRight } from "lucide-react";

import { Card } from "./card";

interface Post {
 
  title: string;
  summary: string;
  image: string;
  
}

interface Blog8Props {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Blog8 = ({
  heading = "Our Services",
  description = "Delivering Reliable Steel Structure Solutions for Industrial and Commercial Projects.",
  posts = [
    {
     
      title:
        "Comprehensive Structural Steel Design & Engineering Solutions",
      summary:
        "We provide end-to-end structural steel design services for industrial, commercial, and residential projects. Our expert engineers ensure each structure is safe, durable, and optimized for cost, material efficiency, and load-bearing capacity, meeting all international and local building standards.",
      
    
     
     
      image: "/service-1.jpg",
      
    },
    {
    
      title: "Precision Steel Fabrication with Cutting-Edge Technology",
      summary:
        "From cutting and bending to welding and assembly, our steel fabrication services guarantee high precision and top-notch quality. Every component is manufactured in-house under strict quality control, ensuring consistency, durability, and seamless installation on-site.",
      
     
     
      image: "/service-2.jpg",
     
    },
    {
    
      title: "Industrial & Commercial Steel Building Construction",
      summary:
        "Specializing in constructing warehouses, factories, and large commercial structures with steel frameworks that support heavy loads. We design structures to be functional, sustainable, and expandable to meet evolving business needs.",
      
     
     
      image: "/service-3.jpg",
     
    },
    {
    
      title: "Bridges, Overpasses, & Infrastructure Steel Projects",
      summary:
        "Design and construction of steel bridges, flyovers, and other infrastructure projects. Using advanced engineering techniques, we ensure durability, safety, and minimal maintenance for long-term performance under heavy traffic loads.",
      
     
     
      image: "/service-4.jpg",
     
    },
     {
    
      title: "High-Quality Steel Roofing, Cladding & Paneling",
      summary:
        "Durable roofing and wall cladding solutions for steel structures. We provide installation of premium steel panels, ensuring protection against harsh weather, insulation, and a modern industrial aesthetic.",
      
     
     
      image: "/service-5.jpg",
     
    },
    {
    
      title: "Custom Steel Trusses & Frame Fabrication",
      summary:
        "Design and manufacture of tailor-made steel trusses and frames for all types of construction projects. Engineered for stability, load-bearing capacity, and architectural elegance, enhancing both safety and visual appeal.",
      
     
     
      image: "/service-6.jpg",
     
    },
     {
    
      title: "Project Management & Construction Consultancy",
      summary:
        "End-to-end project management for steel construction, including concept design, engineering, fabrication, erection, and quality assurance. We also provide expert consultancy to optimize timelines, reduce costs, and mitigate risks.",
      
     
     
      image: "/service-7.jpg",
     
    },


  ],
}: Blog8Props) => {
  return (
    <section className="py-32 p-3" id="services">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20 ">
          {posts.map((post, index) => (
            <Card
             key={index}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12 p-2">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                    
                    </div>
                  </div>
                 <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
  {post.title}
</h3>

                  <p className="mt-4 text-gray-600 md:mt-5">
                    {post.summary}
                  </p>
                  
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                
                    <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog8 };
