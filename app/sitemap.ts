import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://iqbalstructuralsolutions.com",
      lastModified: new Date(),
    },
    {
      url: "https://iqbalstructuralsolutions.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://iqbalstructuralsolutions.com/projects",
      lastModified: new Date(),
    },
  ];
}
