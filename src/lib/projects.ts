import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'calismalar'>;

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('calismalar');
  return all.sort((a, b) => a.data.order - b.data.order);
}
