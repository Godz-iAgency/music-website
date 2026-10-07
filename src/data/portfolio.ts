export type Product = {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  capability: string;
  features: readonly string[];
  url: string | null;
  logo: { src: string; width: number; height: number } | null;
  artwork?: { src: string; width: number; height: number; alt: string };
  background?: string;
  theme: "bookworm" | "splitmic" | "plants" | "cashflow";
};

// Only supplied or verified URLs and original brand assets belong here.
export const products: readonly Product[] = [
  {
    id: "bookworm", name: "Bookworm AI", category: "AI + Education",
    headline: "Turn any book into a 7-day course.",
    description: "Learn the ideas that matter. One day at a time.",
    capability: "AI-powered education and personalized learning systems.",
    features: ["AI-generated courses", "Multiple reading levels", "AI book assistant", "Flashcards", "Multilingual learning", "Book clubs"],
    url: "https://bookworm-ai.app/",
    logo: { src: "/products/bookworm-ai.png", width: 1024, height: 1024 },
    artwork: { src: "/products/bookworm-poster.png", width: 1080, height: 1350, alt: "Bookworm AI. Making every book smarter. Turn your favorite book into a 7-day learning experience." },
    theme: "bookworm",
  },
  {
    id: "splitmic", name: "SplitMic", category: "Marketplace + Network",
    headline: "Music Industry Connected.",
    description: "Bands, venues and the people who make live music happen.",
    capability: "Multi-sided marketplaces, professional networks and discovery systems.",
    features: ["Bands", "Venues", "Talent buyers", "Record labels", "Festivals", "Backline companies", "Instrument rental", "Rehearsal studios", "Live-show discovery"],
    url: "https://www.splitmic.com/",
    logo: { src: "/products/splitmic.png", width: 1024, height: 1024 },
    theme: "splitmic",
  },
  {
    id: "six-plants", name: "Six Plants", category: "Health + Personalization",
    headline: "Healthy eating made simple.",
    description: "Choose your plants. Get your plan.",
    capability: "Personalized consumer health, recommendation systems and structured planning tools.",
    features: ["Six plant-food categories", "Personalized selections", "7-day planning", "Recipes", "Grocery lists"],
    url: "https://www.gbombs.app/",
    logo: { src: "/products/six-plants-logo.png", width: 1024, height: 1024 },
    artwork: { src: "/products/six-plants-food-art.png", width: 2065, height: 761, alt: "Six Plants lettering made from colorful plant foods." },
    theme: "plants",
  },
  {
    id: "cash-flow-tracker", name: "Cash Flow Tracker", category: "Finance + Data",
    headline: "Every dollar counts.",
    description: "Income. Expenses. Accounts. One clear view.",
    capability: "Financial workflows, structured data, account allocation and business intelligence interfaces.",
    features: ["Income tracking", "Expense tracking", "Account balances", "Account allocation", "Transfers", "Personal vs. business classification", "Cash-flow visibility"],
    url: "https://cash-flow-tracker-godz-i.vercel.app/",
    logo: { src: "/products/cash-flow-original.png", width: 1254, height: 1254 },
    background: "/products/cash-flow-water.webp",
    theme: "cashflow",
  },
];

export const capabilities = [
  { name: "AI + Education", description: "Personalized learning systems powered by AI." },
  { name: "Marketplace + Network", description: "Platforms that connect people, businesses and services." },
  { name: "Health + Personalization", description: "Consumer applications built around individual needs." },
  { name: "Finance + Data", description: "Systems that turn financial activity into clear information." },
] as const;

export const technologies = [
  { name: "Codex", category: "AI Development", logo: "/technology/openai.svg" },
  { name: "Claude Code", category: "AI Development", logo: "/technology/claude.svg" },
  { name: "Claude Design", category: "Design", logo: "/technology/claude.svg" },
  { name: "Gemini API", category: "AI", logo: "/technology/googlegemini.svg" },
  { name: "Supabase", category: "Backend + Database", logo: "/technology/supabase.svg" },
  { name: "Firestore", category: "Database", logo: "/technology/firestore.svg" },
  { name: "Vercel", category: "Infrastructure + Deployment", logo: "/technology/vercel.svg" },
  { name: "Stripe", category: "Payments", logo: "/technology/stripe.svg" },
  { name: "Google Workspace", category: "Productivity + Workflow", logo: "/technology/google.svg" },
  { name: "Higgsfield", category: "Creative AI", logo: "/technology/higgsfield.png" },
  { name: "Google Vids", category: "Video + Communication", logo: "/technology/google-vids.png" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  biography?: string;
  image?: { src: string; width: number; height: number; alt: string };
};

// Populate only with the staff information supplied for this portfolio.
export const team: readonly TeamMember[] = [];
