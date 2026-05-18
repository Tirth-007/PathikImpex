export type ProductCategory = "Agriculture" | "Chemicals" | "Marble & Granite";

export type Category = {
  name: ProductCategory;
  slug: string;
  description: string;
  buyerValue: string;
  image: string;
  products: string[];
};

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  moq: string;
  origin: string;
  summary: string;
  details: string;
  applications: string[];
  specifications: string[];
  image: string;
};

export const categories: Category[] = [
  {
    name: "Agriculture",
    slug: "agriculture",
    description: "Export-ready grains, spices, and farm commodities with practical MOQ options.",
    buyerValue:
      "Built for importers, wholesalers, and private-label buyers who need consistent Indian farm supply.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    products: ["Basmati Rice", "Organic Turmeric", "Cumin Seeds"],
  },
  {
    name: "Chemicals",
    slug: "chemicals",
    description: "Industrial materials sourced for manufacturing, cleaning, and processing needs.",
    buyerValue:
      "Structured for B2B buyers who need documentation-led sourcing and compliant shipment coordination.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
    products: ["Soda Ash Light", "Caustic Soda Flakes", "Industrial Salt"],
  },
  {
    name: "Marble & Granite",
    slug: "marble-granite",
    description: "Natural Indian stone for construction, interiors, counters, and projects.",
    buyerValue:
      "Prepared for contractors, distributors, and project buyers comparing finishes, sizes, and container loads.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    products: ["Granite Slabs", "Marble Tiles", "Sandstone Pavers"],
  },
];

export const products: Product[] = [
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    category: "Agriculture",
    moq: "1 container",
    origin: "India",
    summary: "Long-grain aromatic rice for retail packing, wholesale supply, and food service.",
    details:
      "Sourced from established milling partners with export documentation support, practical packing options, and quality checks before dispatch.",
    applications: ["Retail packs", "Wholesale distribution", "Hotels and catering"],
    specifications: ["Long-grain rice", "Custom packing available", "Export documentation support"],
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "organic-turmeric",
    name: "Organic Turmeric",
    category: "Agriculture",
    moq: "500 kg",
    origin: "India",
    summary: "Bright turmeric fingers or powder for food, wellness, and ingredient buyers.",
    details:
      "Available in bulk formats for importers looking for consistent color, aroma, and reliable packing standards.",
    applications: ["Food ingredients", "Spice brands", "Wellness products"],
    specifications: ["Finger or powder format", "Bulk packing", "Quality checked lots"],
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    category: "Agriculture",
    moq: "500 kg",
    origin: "India",
    summary: "Whole cumin seeds for spice importers, processors, and private label buyers.",
    details:
      "Cleaned and packed for export orders with buyer-specific packing and shipment coordination.",
    applications: ["Spice processing", "Private label packing", "Food manufacturing"],
    specifications: ["Whole seed", "Bulk bags", "Buyer packing support"],
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "granite-slabs",
    name: "Granite Slabs",
    category: "Marble & Granite",
    moq: "100 sqm",
    origin: "India",
    summary: "Durable granite slabs for countertops, flooring, and commercial projects.",
    details:
      "Selected natural stone slabs can be supplied in polished, honed, or project-specific finishes depending on buyer requirements.",
    applications: ["Countertops", "Flooring", "Wall cladding"],
    specifications: ["Polished or honed finish", "Project sizing support", "Container shipment"],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "marble-tiles",
    name: "Marble Tiles",
    category: "Marble & Granite",
    moq: "100 sqm",
    origin: "India",
    summary: "Natural marble tiles for residential and commercial interior projects.",
    details:
      "Available for project orders with finish, size, and packing coordination handled before export.",
    applications: ["Interior floors", "Bathrooms", "Feature walls"],
    specifications: ["Natural stone", "Multiple finishes", "Project packing"],
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sandstone-pavers",
    name: "Sandstone Pavers",
    category: "Marble & Granite",
    moq: "150 sqm",
    origin: "India",
    summary: "Outdoor stone pavers for landscaping, pathways, and exterior flooring.",
    details:
      "A strong option for exterior projects where natural texture, durability, and container-ready packing matter.",
    applications: ["Landscaping", "Patios", "Garden pathways"],
    specifications: ["Outdoor use", "Textured finish", "Crate packing"],
    image:
      "https://images.unsplash.com/photo-1590644365607-1aeb91d5d2f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "soda-ash-light",
    name: "Soda Ash Light",
    category: "Chemicals",
    moq: "1 MT",
    origin: "India",
    summary: "Industrial-grade soda ash for glass, detergent, and process applications.",
    details:
      "Supplied for B2B buyers with documentation, packing, and shipment coordination based on destination requirements.",
    applications: ["Glass manufacturing", "Detergents", "Water treatment"],
    specifications: ["Industrial grade", "Bulk bags", "COA on request"],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "caustic-soda-flakes",
    name: "Caustic Soda Flakes",
    category: "Chemicals",
    moq: "1 MT",
    origin: "India",
    summary: "Caustic soda flakes for industrial cleaning, textile, and processing sectors.",
    details:
      "Handled as a regulated industrial product with buyer-specific documentation and shipment requirements reviewed before quoting.",
    applications: ["Textile processing", "Cleaning products", "Industrial processing"],
    specifications: ["Flake format", "Industrial packing", "Documentation support"],
    image:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "industrial-salt",
    name: "Industrial Salt",
    category: "Chemicals",
    moq: "5 MT",
    origin: "India",
    summary: "Bulk industrial salt for processing, treatment, and manufacturing use cases.",
    details:
      "A practical bulk commodity option for buyers needing consistent supply and straightforward export coordination.",
    applications: ["Water treatment", "Chemical processing", "Industrial use"],
    specifications: ["Bulk packing", "Custom order sizes", "Export-ready lots"],
    image:
      "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category?: string) {
  if (!category) {
    return products;
  }

  return products.filter((product) => product.category === category);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
