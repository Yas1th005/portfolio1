'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// Types
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

// Styled Components
const PageWrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  padding: 2rem;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 0;
`;

const NavLink = styled.a`
  position: fixed;
  top: 2rem;
  left: 2rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  opacity: 1;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    color: #ff69b4;
  }
`;

const Header = styled.header`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  margin-bottom: 0.3rem;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  font-style: italic;
`;

const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const PostBlock = styled.div<{ $featured?: boolean }>`
  border: 1px solid
    ${(props) =>
      props.$featured
        ? 'rgba(255, 105, 180, 0.3)'
        : 'rgba(255, 255, 255, 0.1)'};
  background: ${(props) =>
    props.$featured
      ? 'linear-gradient(135deg, rgba(255, 105, 180, 0.02), transparent)'
      : 'transparent'};
  padding: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #ff69b4;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(255, 105, 180, 0.1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 105, 180, 0.03),
        transparent
      );
      pointer-events: none;
    }

    .post-tag {
      opacity: 1;
      border-color: rgba(255, 105, 180, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ff69b4;
  opacity: 0.8;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  opacity: 0.6;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const PostDate = styled.div`
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
`;

const PostReadTime = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
`;

const PostTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const PostExcerpt = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`;

const blogPosts: BlogPost[] = [
  {
    id: 'artificial-ai',
    title: 'on building ai that feels less artificial',
    excerpt:
      "spent the last few months thinking about why most ai interactions feel so hollow. turns out, the problem isn't intelligence, it's the absence of genuine curiosity. what if we built systems that asked questions not because they were programmed to, but because they genuinely wanted to understand?",
    date: '2025.07.11',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'clean-code',
    title: 'the poetry of clean code',
    excerpt:
      'good code reads like good prose; each line flows into the next, every variable name chosen with intention. but unlike poetry, code has to work. exploring the balance between elegance and functionality, and why the most beautiful code often solves the ugliest problems.',
    date: '2025.07.06',
    readTime: '2 min read',
  },
];

// Page Component
export default function ThoughtsPage() {
  const router = useRouter();

  const handlePostClick = (postId: string): void => {
    // Navigate to the blog post page using Next.js router
    router.push(`/thoughts/${postId}`);
  };

  const handleBackClick = (): void => {
    window.history.back();
  };

  return (
    <PageWrapper>
      <NavLink onClick={handleBackClick}>/home</NavLink>

      <Container>
        <Header>
          <Title>thoughts</Title>
          <Subtitle>
            scattered reflections on code, consciousness, and the curious spaces
            between
          </Subtitle>
        </Header>

        <PostsGrid>
          {blogPosts.map((post) => (
            <PostBlock
              key={post.id}
              $featured={post.featured}
              onClick={() => handlePostClick(post.id)}
            >
              {post.featured && <FeaturedBadge>featured</FeaturedBadge>}
              <PostMeta>
                <PostDate>{post.date}</PostDate>
                <PostReadTime>{post.readTime}</PostReadTime>
              </PostMeta>
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
            </PostBlock>
          ))}
        </PostsGrid>
      </Container>
    </PageWrapper>
  );
}
