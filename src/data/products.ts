const categoryContent = [
  {
    name: "Exclusive Series",
    slug: "exclusive-series",
    description: "Statement quartz surfaces with premium veining for high-visibility projects.",
    buyerValue:
      "For buyers comparing hero countertop, island, vanity, and feature-wall surfaces with a luxury finish.",
    image: "/advantis/page-07.jpg",
  },
  {
    name: "Luxe Series",
    slug: "luxe-series",
    description: "Luxury quartz colors with marble-inspired movement and polished project appeal.",
    buyerValue:
      "A strong fit for distributors, fabricators, architects, and project buyers seeking refined quartz slabs.",
    image: "/advantis/page-08.jpg",
  },
  {
    name: "Calacatta Series",
    slug: "calacatta-series",
    description: "Calacatta-inspired quartz surfaces spanning gold, grey, white, and dramatic dark designs.",
    buyerValue:
      "Prepared for premium residential, hospitality, retail, and commercial interiors where surface choice matters.",
    image: "/advantis/page-13.jpg",
  },
  {
    name: "Pastel Series",
    slug: "pastel-series",
    description: "Soft colored quartz options for distinctive counters, reception desks, and design-led spaces.",
    buyerValue:
      "Useful for buyers looking beyond standard neutrals into calm blue, jade, blush, and mist palettes.",
    image: "/advantis/page-17.jpg",
  },
  {
    name: "Dynamic Series",
    slug: "dynamic-series",
    description: "Textured neutral quartz surfaces for adaptable residential and commercial applications.",
    buyerValue:
      "Built for practical project selection where subtle movement, neutral color, and repeatability are important.",
    image: "/advantis/page-20.jpg",
  },
  {
    name: "Suave Series",
    slug: "suave-series",
    description: "Solid and softly grained quartz colors for minimal, work-focused interiors.",
    buyerValue:
      "A practical range for counters, worktops, offices, retail fixtures, and high-volume specification needs.",
    image: "/advantis/page-23.jpg",
  },
  {
    name: "Carrara Series",
    slug: "carrara-series",
    description: "Carrara-style quartz designs in classic light and dark stone-inspired looks.",
    buyerValue:
      "For buyers who want familiar marble aesthetics with the consistency of engineered quartz surfaces.",
    image: "/advantis/page-24.jpg",
  },
  {
    name: "Celestial Series",
    slug: "celestial-series",
    description: "Sparkle quartz surfaces for bold counters, bars, vanities, and statement interiors.",
    buyerValue:
      "Ideal for domestic and international buyers comparing dramatic light, grey, and black sparkle finishes.",
    image: "/advantis/page-25.jpg",
  },
] as const;

export type ProductCategory = (typeof categoryContent)[number]["name"];

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

type ProductSeed = {
  name: string;
  category: ProductCategory;
  page: string;
  tone: string;
};

const productSeeds: ProductSeed[] = [
  { name: "Calacatta Gold", category: "Exclusive Series", page: "07", tone: "premium white quartz with bold gold veining" },

  { name: "Raining Gold", category: "Luxe Series", page: "08", tone: "luxury quartz with flowing gold accents" },
  { name: "Miraggio Duo", category: "Luxe Series", page: "08", tone: "refined dual-tone quartz for premium interiors" },
  { name: "White Vortex", category: "Luxe Series", page: "09", tone: "white quartz with active stone-inspired movement" },
  { name: "Ice Berg", category: "Luxe Series", page: "09", tone: "cool white quartz with crisp visual depth" },
  { name: "Supreme White", category: "Luxe Series", page: "09", tone: "clean white quartz for elegant surfaces" },
  { name: "Perla Veneta", category: "Luxe Series", page: "09", tone: "soft pearl-toned quartz for refined spaces" },
  { name: "Castana Grey", category: "Luxe Series", page: "10", tone: "grey quartz with warm contemporary character" },
  { name: "Raining Grey", category: "Luxe Series", page: "10", tone: "grey quartz with flowing linear movement" },
  { name: "Calacatta Avana", category: "Luxe Series", page: "10", tone: "calacatta-style quartz with warm veining" },

  { name: "Antique Grey", category: "Calacatta Series", page: "11", tone: "grey-veined calacatta quartz" },
  { name: "Black River", category: "Calacatta Series", page: "11", tone: "dramatic black-veined quartz for statement projects" },
  { name: "Antique Gold", category: "Calacatta Series", page: "12", tone: "gold-veined calacatta quartz" },
  { name: "Venetian White", category: "Calacatta Series", page: "12", tone: "white calacatta quartz with refined veining" },
  { name: "Venetian Gold", category: "Calacatta Series", page: "13", tone: "white quartz with warm gold calacatta movement" },
  { name: "Dazzle Grey", category: "Calacatta Series", page: "13", tone: "grey quartz with a polished calacatta look" },
  { name: "Misterio Gold", category: "Calacatta Series", page: "13", tone: "mystery-inspired quartz with gold highlights" },
  { name: "Dazzle Gold", category: "Calacatta Series", page: "13", tone: "gold-accent quartz for premium surfaces" },
  { name: "Taj Mahal", category: "Calacatta Series", page: "14", tone: "warm neutral quartz inspired by natural stone" },
  { name: "Liri Gold", category: "Calacatta Series", page: "14", tone: "gold-veined quartz with elegant movement" },
  { name: "Liri Grey", category: "Calacatta Series", page: "14", tone: "grey-veined quartz for sophisticated interiors" },
  { name: "Avenza Gold", category: "Calacatta Series", page: "15", tone: "gold-veined quartz with premium calacatta styling" },
  { name: "Avenza Grey", category: "Calacatta Series", page: "15", tone: "grey calacatta quartz for modern projects" },
  { name: "Dolce Vita", category: "Calacatta Series", page: "15", tone: "expressive quartz surface for design-led interiors" },
  { name: "Kendel Blue", category: "Calacatta Series", page: "16", tone: "blue-toned quartz with soft stone movement" },
  { name: "Nero Marquina", category: "Calacatta Series", page: "16", tone: "black quartz with high-contrast white veining" },

  { name: "Caribbean", category: "Pastel Series", page: "17", tone: "turquoise pastel quartz for distinctive interiors" },
  { name: "Aqua Blue", category: "Pastel Series", page: "18", tone: "soft blue quartz with a calm surface character" },
  { name: "Pastel Jade", category: "Pastel Series", page: "18", tone: "jade green quartz for hospitality and retail counters" },
  { name: "Peach Blush", category: "Pastel Series", page: "18", tone: "warm blush quartz for custom design palettes" },
  { name: "Rose Mist", category: "Pastel Series", page: "19", tone: "misty rose quartz with subtle surface movement" },

  { name: "Alphine Winter", category: "Dynamic Series", page: "20", tone: "winter-white quartz with soft dynamic texture" },
  { name: "Bruley", category: "Dynamic Series", page: "20", tone: "light quartz with natural granular movement" },
  { name: "Monte Clair Valley", category: "Dynamic Series", page: "21", tone: "light quartz surface for counters and tabletops" },
  { name: "Skyee", category: "Dynamic Series", page: "21", tone: "blue quartz with fine mineral-style texture" },
  { name: "Eterna Valley", category: "Dynamic Series", page: "21", tone: "pale neutral quartz for calm interiors" },
  { name: "Wonder White", category: "Dynamic Series", page: "22", tone: "soft white quartz for versatile specifications" },
  { name: "LG Clarino", category: "Dynamic Series", page: "22", tone: "light quartz with delicate grey movement" },
  { name: "Wonder Grey", category: "Dynamic Series", page: "22", tone: "subtle grey quartz for everyday project use" },
  { name: "Dark Silt", category: "Dynamic Series", page: "22", tone: "deep grey quartz with a restrained solid look" },

  { name: "Pure White", category: "Suave Series", page: "23", tone: "plain white quartz for minimal worktops" },
  { name: "Latte", category: "Suave Series", page: "23", tone: "warm cream quartz with a soft neutral finish" },
  { name: "Bostan Grey", category: "Suave Series", page: "23", tone: "balanced grey quartz for modern counters" },
  { name: "Cemento Grey", category: "Suave Series", page: "23", tone: "cement-inspired grey quartz for clean interiors" },
  { name: "Concrete", category: "Suave Series", page: "23", tone: "concrete-look quartz for contemporary projects" },
  { name: "Hermes", category: "Suave Series", page: "23", tone: "cool grey quartz for understated applications" },
  { name: "Atlantis", category: "Suave Series", page: "23", tone: "deep grey-blue quartz with a smooth surface look" },

  { name: "Carrara Hilos", category: "Carrara Series", page: "24", tone: "classic carrara-style quartz with light veining" },
  { name: "Classic Irodov", category: "Carrara Series", page: "24", tone: "dark carrara-inspired quartz with subtle texture" },
  { name: "Belgium", category: "Carrara Series", page: "24", tone: "warm light quartz for kitchens and project counters" },

  { name: "Black Sparkle", category: "Celestial Series", page: "25", tone: "bold black sparkle quartz for bars and feature counters" },
  { name: "Grey Sparkle", category: "Celestial Series", page: "26", tone: "grey sparkle quartz for distinctive surfaces" },
  { name: "Ice White", category: "Celestial Series", page: "26", tone: "white quartz with light aggregate sparkle" },
  { name: "Mapple White", category: "Celestial Series", page: "26", tone: "warm white sparkle quartz with visible chips" },
  { name: "Sparkle White", category: "Celestial Series", page: "27", tone: "white sparkle quartz for bright interiors" },
  { name: "Snow White", category: "Celestial Series", page: "27", tone: "clean white quartz with a fine sparkle surface" },
];

const applicationsByCategory: Record<ProductCategory, string[]> = {
  "Exclusive Series": ["Kitchen islands", "Luxury countertops", "Feature walls"],
  "Luxe Series": ["Residential countertops", "Hospitality surfaces", "Retail counters"],
  "Calacatta Series": ["Kitchen countertops", "Bathroom vanities", "Wall cladding"],
  "Pastel Series": ["Reception counters", "Cafe and bar tops", "Design-led interiors"],
  "Dynamic Series": ["Tabletops", "Work surfaces", "Interior cladding"],
  "Suave Series": ["Commercial counters", "Office worktops", "Retail fixtures"],
  "Carrara Series": ["Kitchen surfaces", "Vanity tops", "Apartment projects"],
  "Celestial Series": ["Bar counters", "Statement vanities", "Premium display surfaces"],
};

export const products: Product[] = productSeeds.map((product) => ({
  id: slugify(product.name),
  name: product.name,
  category: product.category,
  moq: "Project/order based",
  origin: "India",
  summary: `Advantis Quartz ${product.name} is a ${product.tone}, suitable for domestic and international surface inquiries.`,
  details:
    "For quotation, share required slab size, thickness, finish, quantity, edge/processing requirement, packing expectation, destination country or port, and timeline. Availability and commercial terms can be confirmed during email follow-up.",
  applications: applicationsByCategory[product.category],
  specifications: [
    "Material: engineered quartz surface",
    `Series: ${product.category}`,
    "Finish, thickness, and slab size: confirm while quoting",
    "Brochure visual included for initial product reference",
  ],
  image: `/advantis/page-${product.page}.jpg`,
}));

export const categories: Category[] = categoryContent.map((category) => ({
  ...category,
  products: products
    .filter((product) => product.category === category.name)
    .map((product) => product.name),
}));

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

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
