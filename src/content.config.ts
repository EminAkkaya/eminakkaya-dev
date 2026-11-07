import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const shot = z.object({ src: z.string(), alt: z.string() });

const calismalar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/calismalar' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    kind: z.enum(['vitrin', 'urun', 'diger']),
    /** Kısa iddia/başlık cümlesi (müşteri dili) */
    headline: z.string(),
    status: z.string(),
    sector: z.string(),
    period: z.string().optional(),
    summary: z.string(),
    /** Yalnız ölçülmüş rakamlar: { value: '26', label: 'sahada güncelleme' } */
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    tech: z.array(z.string()).default([]),
    techDetails: z.array(z.string()).default([]),
    quote: z.object({ text: z.string(), author: z.string() }).optional(),
    cover: z.string().optional(),
    shots: z.array(shot).default([]),
    demo: z
      .object({ mp4: z.string().optional(), webm: z.string().optional(), poster: z.string().optional() })
      .optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { calismalar };
