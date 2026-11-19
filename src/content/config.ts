import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    issue: z.string().optional(),
    publishedDate: z.coerce.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { posts };
