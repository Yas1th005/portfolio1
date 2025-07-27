import AICuriosityPost from './artificial-ai-post';
import PoetryCleanCodePost from './clean-code-post';

export default async function Blog(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  // Handle custom styled blog posts
  if (params.slug === 'artificial-ai') {
    return <AICuriosityPost />;
  }

  if (params.slug === 'clean-code') {
    return <PoetryCleanCodePost />;
  }

}
