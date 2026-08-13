import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: ['**/[^_]*.md', '!README.md'], base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    id: z.string(),
    active: z.enum(['active', 'activating', 'inactive']),
    sub: z.enum(['running', 'exited', 'start', 'dead']),
    description: z.string(),
    url: z.string().url().optional(),
    private: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
