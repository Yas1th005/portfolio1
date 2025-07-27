'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// Types
interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

// Styled Components (reusing the same styles as AI Curiosity post)
const PageWrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Times New Roman', serif;
  line-height: 1.7;
  padding: 2rem;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const ReadingProgress = styled.div<{ progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.progress}%;
  height: 2px;
  background: linear-gradient(90deg, #ff69b4, rgba(255, 105, 180, 0.7));
  z-index: 1000;
  transition: width 0.1s ease;
`;

const ArticleHeader = styled.header`
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 2rem;
`;

const ArticleMeta = styled.div`
  margin-bottom: 1.5rem;
  opacity: 0.6;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const ArticleDate = styled.div`
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
`;

const ArticleReadTime = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
`;

const ArticleTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: normal;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ArticleSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  font-style: italic;
  line-height: 1.4;
`;

const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const ArticleTag = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  opacity: 0.7;
`;

const ArticleContent = styled.article`
  font-size: 1.15rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 2.5rem 0 1.5rem 0;
    color: #ff69b4;
    opacity: 0.9;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: normal;
    margin: 2rem 0 1rem 0;
    opacity: 0.9;
  }

  blockquote {
    border-left: 2px solid #ff69b4;
    padding-left: 2rem;
    margin: 2rem 0;
    font-style: italic;
    opacity: 0.8;
    background: rgba(255, 105, 180, 0.02);
    padding: 1.5rem 0 1.5rem 2rem;
  }

  code {
    font-family: 'Courier New', monospace;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9em;
    color: #ff69b4;
  }

  pre {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 2rem 0;
    border: 1px solid rgba(255, 255, 255, 0.1);

    code {
      background: none;
      padding: 0;
      color: #fff;
    }
  }

  em {
    color: #ff69b4;
    font-style: italic;
  }

  strong {
    font-weight: bold;
    opacity: 1;
  }

  ul,
  ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.8rem;
  }
`;

const ArticleFooter = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  p {
    opacity: 0.6;
    font-style: italic;
    font-size: 1rem;
  }
`;

const BackToBlog = styled.button`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: #fff;
  font-family: 'Times New Roman', serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff69b4;
    background: rgba(255, 105, 180, 0.1);
    color: #ff69b4;
  }
`;

// Sample blog post data
const defaultPost: BlogPostData = {
  id: 'poetry-clean-code',
  title: 'the poetry of clean code',
  excerpt:
    'good code reads like good prose; each line flows into the next, every variable name chosen with intention. but unlike poetry, code has to work.',
  content: '',
  date: '2025.07.06',
  readTime: '2 min read',
  tags: ['code', 'philosophy', 'craft', 'design'],
};

export default function PoetryCleanCodePost() {
  const router = useRouter();
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);

      setReadingProgress(Math.min(100, Math.max(0, scrollPercentRounded)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToBlog = (): void => {
    router.push('/thoughts');
  };

  return (
    <PageWrapper>
      <ReadingProgress progress={readingProgress} />

      <Container>
        <ArticleHeader>
          <ArticleMeta>
            <ArticleDate>{defaultPost.date}</ArticleDate>
            <ArticleReadTime>{defaultPost.readTime}</ArticleReadTime>
          </ArticleMeta>
          <ArticleTitle>{defaultPost.title}</ArticleTitle>
          <ArticleSubtitle>{defaultPost.excerpt}</ArticleSubtitle>
          <ArticleTags>
            {defaultPost.tags.map((tag, index) => (
              <ArticleTag key={index}>{tag}</ArticleTag>
            ))}
          </ArticleTags>
        </ArticleHeader>

        <ArticleContent>
          <p>
            there&apos;s something almost <em>musical</em> about well-written
            code. the way functions compose, how variables flow through
            transformations, the rhythm of indentation and spacing. it&apos;s
            not just functional, it&apos;s <strong>beautiful</strong>.
          </p>

          <p>
            but unlike poetry, code has to work. it has to compile, execute,
            handle edge cases, scale under load. beauty without function is just
            decoration. function without beauty is just... well, most of the
            code i&apos;ve seen in production.
          </p>

          <h2>the craft of naming</h2>

          <p>
            the first lesson in writing poetic code:{' '}
            <strong>names matter</strong>. every variable, every function, every
            class is a word in your story. choose them like a poet chooses
            words: for precision, for rhythm, for the way they feel when you
            read them aloud.
          </p>

          <blockquote>
            &ldquo;programs must be written for people to read, and only
            incidentally for machines to execute.&rdquo;
          </blockquote>

          <p>
            i&apos;ve spent hours debating whether a function should be called{' '}
            <code>processData</code> or <code>transformInput</code> or{' '}
            <code>parseUserRequest</code>. it matters. the name shapes how you
            think about the function, how others understand it, how it fits into
            the larger narrative of your codebase.
          </p>
        </ArticleContent>

        <ArticleFooter>
          <p>
            thoughts? disagreements? half-formed ideas? i&apos;d love to hear
            them.
          </p>
          <BackToBlog onClick={handleBackToBlog}>← back to thoughts</BackToBlog>
        </ArticleFooter>
      </Container>
    </PageWrapper>
  );
}
