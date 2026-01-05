// src/content/config.ts
import { defineCollection, z } from "astro:content";

export const collections = {
  novels: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      type: z.string(),
      series: z.string().optional(),
      published: z.date().optional(),
    }),
  }),
};
