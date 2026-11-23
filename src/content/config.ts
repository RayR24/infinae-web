cat > src/content/config.ts << 'EOF'
// src/content/config.ts
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  date: z.date().optional(),
  image: z.string().optional(),
  draft: z.boolean().default(false),
};

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
    draft: z.boolean().optional(),
  }),
});

const experiencesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/experiences" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    status: z.enum(["upcoming", "past"]).default("upcoming"),
    series: z.string().optional(),
    coverImage: z.string().optional(),
    registrationUrl: z.string().url().optional(),
    instagramUrl: z.string().url().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages: pagesCollection,
  experiences: experiencesCollection,
};
EOF
