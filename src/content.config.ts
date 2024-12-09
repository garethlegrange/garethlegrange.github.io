// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const jobs = defineCollection({
  loader: file("./src/data/jobs.json"),
  schema: z.object({
    id: z.number(),
    companyName: z.string(),
    title: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().nullable(),
  }),
});

export const collections = { blog, jobs };