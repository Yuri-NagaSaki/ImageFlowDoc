import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Define the main documentation collection
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
