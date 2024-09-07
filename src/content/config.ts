import { z, defineCollection } from "astro:content";

const snippets = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    sortOrder: z.number(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    author: z.string().default("Anonymous"),
    language: z.enum(["en", "es"]),
    tags: z.array(z.string()),
    // An optional frontmatter property. Very common!
    footnote: z.string().optional(),
    // In frontmatter, dates written without quotes around them are interpreted as Date objects
    publishDate: z.date(),
    // You can also transform a date string (e.g. "2022-07-08") to a Date object
    // publishDate: z.string().transform((str) => new Date(str)),
    // Advanced: Validate that the string is also an email
    authorContact: z.string().email(),
    // Advanced: Validate that the string is also a URL
    canonicalURL: z.string().url(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    title: z.string(),
    startDate: z.date(),
    endDate: z.date(),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    /* ... */
  }),
});

export const collections = {
  snippets: snippets,
  work: work,
  projects: projects,
};
