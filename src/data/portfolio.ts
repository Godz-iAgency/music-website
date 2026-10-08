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
  nameLogo?: { src: string; width: number; height: number };
  artwork?: { src: string; width: number; height: number; alt: string };
  background?: string;
  theme: "bookworm" | "splitmic" | "plants" | "cashflow";
};

// Only supplied or verified URLs and original brand assets belong here.
export const products: readonly Product[] = [
  {
    id: "bookworm", name: "Bookworm AI", category: "AI + Education",
    headline: "Making every book smarter.",
    description: "Turn any book into a 7-day course.",
    capability: "AI-powered education and personalized learning systems.",
    features: ["AI-generated courses", "Multiple reading levels", "AI book assistant", "Flashcards", "Multilingual learning", "Book clubs"],
    url: "https://bookworm-ai.app/",
    logo: { src: "/products/bookworm-original-mark.png", width: 1254, height: 1254 },
    artwork: { src: "/products/bookworm-poster.png", width: 1080, height: 1350, alt: "Bookworm AI. Making every book smarter. Turn your favorite book into a 7-day learning experience." },
    background: "/products/bookworm-wallpaper.png",
    theme: "bookworm",
  },
  {
    id: "splitmic", name: "SplitMic", category: "Marketplace + Network",
    headline: "Music Industry Connected.",
    description: "Connecting bands, venues, talent buyers, record labels and festivals on the same platform.",
    capability: "Multi-sided marketplaces, professional networks and discovery systems.",
    features: ["Bands", "Venues", "Talent buyers", "Record labels", "Festivals", "Backline companies", "Instrument rental", "Rehearsal studios", "Live-show discovery"],
    url: "https://www.splitmic.com/",
    logo: { src: "/products/splitmic.png", width: 1024, height: 1024 },
    nameLogo: { src: "/products/splitmic-mark.png", width: 1024, height: 1024 },
    theme: "splitmic",
  },
  {
    id: "six-plants", name: "Six Plants", category: "Health + Personalization",
    headline: "Healthy Eating Made Simple",
    description: "Get a 7-day meal plan with recipe and grocery list",
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
    description: "See income, expenses and account balances in one place.",
    capability: "Financial workflows, structured data, account allocation and business intelligence interfaces.",
    features: ["Income tracking", "Expense tracking", "Account balances", "Account allocation", "Transfers", "Personal vs. business classification", "Cash-flow visibility"],
    url: "https://cash-flow-tracker-godz-i.vercel.app/",
    logo: { src: "/products/cash-flow-original.png", width: 1254, height: 1254 },
    background: "/products/cash-flow-water.webp",
    theme: "cashflow",
  },
];

// Short card copy on the homepage. Each card opens its app page at /apps/[slug].
export const capabilities = [
  { slug: "bookworm-ai", name: "AI + Education", headline: "Readers who forget what they read.", description: "Daily lessons, assignments and flashcards make each book stick.", theme: "bookworm", background: "/descriptions/bookworm.png" },
  { slug: "splitmic", name: "Marketplace + Network", headline: "Anyone in Austin's music scene.", description: "Search by role, genre or name. Message anyone. Free to join.", theme: "splitmic", background: "/descriptions/splitmic.png" },
  { slug: "six-plants", name: "Health + Personalization", headline: "Home cooks who want to eat healthier.", description: "Pick the plants you like. It builds the meals for you.", theme: "plants", background: "/descriptions/plants.png" },
  { slug: "cash-flow-tracker", name: "Finance + Data", headline: "People who track every dollar.", description: "Every bank account, card and transfer in one private view.", theme: "cashflow", background: "/descriptions/cashflow.png" },
] as const;

export type AppPage = {
  slug: string;
  productId: string;
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  note?: string;
  benefits: readonly { title: string; text: string }[];
  metaTitle: string;
  metaDescription: string;
  schemaCategory: string;
};

// Full copy for each app page. Facts verified against each live app.
export const appPages: readonly AppPage[] = [
  {
    slug: "bookworm-ai", productId: "bookworm",
    eyebrow: "For readers who want to keep what they read",
    title: "Finish a book. Keep the ideas.",
    intro: "You finish the book and the ideas fade. Bookworm AI turns it into a 7-day course so they stay.",
    cta: "Start Learning",
    benefits: [
      { title: "One lesson a day", text: "Each day teaches one idea through a named framework." },
      { title: "Three assignments", text: "Put the idea to work the same day." },
      { title: "Flashcards and an AI tutor", text: "Test what you learned. Ask the book anything." },
    ],
    metaTitle: "Bookworm AI | Turn Any Book Into a 7-Day Course",
    metaDescription: "Bookworm AI turns any book into a 7-day course with daily lessons, assignments, flashcards and an AI tutor. Built by GODZ-i.",
    schemaCategory: "EducationalApplication",
  },
  {
    slug: "splitmic", productId: "splitmic",
    eyebrow: "For Austin's music industry",
    title: "Austin's music scene. One platform.",
    intro: "Stop juggling DMs, group chats and spreadsheets. Bands, venues, talent buyers, labels and festivals find each other on SplitMic.",
    cta: "Join Free",
    note: "Free to join. No credit card.",
    benefits: [
      { title: "Find anyone", text: "Search Austin by role, genre or name." },
      { title: "See every opportunity", text: "Gigs and shows posted live in one feed." },
      { title: "Message directly", text: "One inbox instead of five apps." },
    ],
    metaTitle: "SplitMic | Austin Music Industry Network",
    metaDescription: "SplitMic connects Austin bands, venues, talent buyers, record labels and festivals on one platform. Free to join. Built by GODZ-i.",
    schemaCategory: "SocialNetworkingApplication",
  },
  {
    slug: "six-plants", productId: "six-plants",
    eyebrow: "For home cooks who want to eat healthier",
    title: "Healthy meals, planned for you.",
    intro: "You want to eat better. Planning is the hard part. Pick the plants you like and Six Plants does the rest.",
    cta: "Start Planning",
    benefits: [
      { title: "Meals from your picks", text: "Choose the plants you like. It creates the meals and recipes." },
      { title: "A 7-day plan", text: "Review the week before you cook it." },
      { title: "A ready grocery list", text: "Shop once with everything you need." },
    ],
    metaTitle: "Six Plants | 7-Day Healthy Meal Plans and Grocery Lists",
    metaDescription: "Pick the plants you like. Six Plants builds your meals, recipes, 7-day meal plan and grocery list. Built by GODZ-i.",
    schemaCategory: "HealthApplication",
  },
  {
    slug: "cash-flow-tracker", productId: "cash-flow-tracker",
    eyebrow: "For people who track every dollar",
    title: "Know where every dollar goes.",
    intro: "Money moves across accounts and cards faster than you can follow it. Cash Flow Tracker puts it all in one private view.",
    cta: "Start Tracking",
    benefits: [
      { title: "Every account in one place", text: "Bank accounts and credit cards side by side." },
      { title: "Every move logged", text: "Income, expenses and transfers between accounts." },
      { title: "Habits you can see", text: "Spot where the money goes before it is gone." },
    ],
    metaTitle: "Cash Flow Tracker | Track Every Dollar Across Your Accounts",
    metaDescription: "Track income, expenses and transfers across every bank account and credit card in one private view. Built by GODZ-i.",
    schemaCategory: "FinanceApplication",
  },
];

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
  { name: "Resend", category: "Email Sending", logo: "/technology/resend.svg" },
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
