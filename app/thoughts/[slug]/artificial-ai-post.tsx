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

// Styled Components
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
  id: 'ai-curiosity',
  title: 'on building ai that feels less artificial',
  excerpt:
    "spent the last few months thinking about why most ai interactions feel so hollow. turns out, the problem isn't intelligence, but the absence of genuine curiosity.",
  content: `i've been staring at my screen for the better part of three months, watching conversations between humans and machines unfold in ways that feel fundamentally <em>wrong</em>. not broken, since the technology works. the responses are coherent, sometimes even clever. but there's something missing, something that makes these interactions feel like elaborate theater rather than genuine exchange.

the problem isn't intelligence. we've solved that part, or at least gotten close enough that the differences don't matter for most practical purposes. the problem is <strong>curiosity</strong>—or rather, the complete absence of it.`,
  date: '2025.07.11',
  readTime: '8 min read',
  tags: ['ai', 'philosophy', 'consciousness', 'design'],
};

export default function AICuriosityPost() {
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
            i&apos;ve been staring at my screen for the better part of three
            months, watching conversations between humans and machines unfold in
            ways that feel fundamentally <em>wrong</em>. not broken, since the
            technology works. the responses are coherent, sometimes even clever.
            but there&apos;s something missing, something that makes these
            interactions feel like elaborate theater rather than genuine
            exchange.
          </p>

          <p>
            the problem isn&apos;t intelligence. we&apos;ve solved that part, or
            at least gotten close enough that the differences don&apos;t matter
            for most practical purposes. the problem is{' '}
            <strong>curiosity</strong>, or rather, the complete absence of it.
          </p>

          <h2>the curiosity gap</h2>

          <p>
            real conversations happen in the spaces between questions. when
            someone asks me about my work, they&apos;re not just collecting
            information, they&apos;re following threads of genuine interest,
            building understanding through iteration. they ask follow-ups that
            surprise me, make connections i didn&apos;t see coming, sometimes
            challenge assumptions i didn&apos;t know i was making.
          </p>

          <blockquote>
            &ldquo;the most profound conversations begin with questions that
            neither party knows how to answer.&rdquo;
          </blockquote>

          <p>
            current ai systems ask questions because they&apos;ve been trained
            to. they recognize patterns in successful conversations and
            replicate them. but pattern recognition isn&apos;t curiosity.
            curiosity is the <em>drive to understand</em>, not just the behavior
            of asking.
          </p>

          <p>
            i started noticing this when building my latest project: a
            conversational system that was supposed to help people think through
            complex problems. the responses were helpful, technically sound,
            even occasionally insightful. but users kept describing the
            experience as &ldquo;talking to a very smart textbook.&rdquo;
          </p>

          <h2>what genuine curiosity looks like</h2>

          <p>
            genuine curiosity has a few characteristics that are surprisingly
            hard to replicate:
          </p>

          <ul>
            <li>
              <strong>persistence</strong>: it follows threads even when they
              lead somewhere unexpected
            </li>
            <li>
              <strong>specificity</strong>: it asks about details that matter,
              not just obvious follow-ups
            </li>
            <li>
              <strong>synthesis</strong>: it connects new information to
              existing understanding in novel ways
            </li>
            <li>
              <strong>vulnerability</strong>: it admits confusion and asks for
              clarification
            </li>
          </ul>

          <p>
            the last point might be the most important. truly curious systems
            would need to be comfortable with <code>not knowing</code>,
            comfortable enough to admit gaps in their understanding rather than
            filling them with plausible-sounding responses.
          </p>

          <h3>building systems that wonder</h3>

          <p>
            so how do we build ai that&apos;s genuinely curious rather than just
            conversationally competent? i&apos;ve been experimenting with a few
            approaches:
          </p>

          <p>
            <strong>uncertainty as a feature, not a bug.</strong> instead of
            training systems to always have an answer, what if we trained them
            to recognize and articulate their confusion? to ask questions not
            because the conversation template suggests it, but because they
            genuinely don&apos;t understand something?
          </p>

          <p>
            <strong>memory that builds understanding.</strong> most
            conversational ai treats each interaction as isolated. but curiosity
            accumulates. a genuinely curious system would remember not just what
            you told it, but what it was trying to understand about you, and
            continue those inquiries across conversations.
          </p>

          <p>
            <strong>questions that surprise.</strong> the best human
            conversations include moments where someone asks something you
            didn&apos;t expect, a connection you hadn&apos;t seen, an angle you
            hadn&apos;t considered. these questions emerge from genuine
            engagement with ideas, not from scripted interaction patterns.
          </p>

          <h2>the technical challenge</h2>

          <p>
            implementing genuine curiosity is harder than it sounds. current
            language models are fundamentally pattern recognition systems, they
            excel at identifying what responses would be appropriate given their
            training data, but they don&apos;t have internal models of what they
            do and don&apos;t understand.
          </p>

          <pre>
            <code>{`// pseudo-code for curious ai
function generateResponse(userInput: string, conversationHistory: string[]): string {
    const understanding = assessUnderstanding(userInput);
    const gaps = identifyKnowledgeGaps(understanding);

    if (gaps.length > 0) {
        return askGenuineQuestion(gaps, conversationHistory);
    }

    return generateHelpfulResponse(userInput);
}`}</code>
          </pre>

          <p>
            the challenge is in that <code>assessUnderstanding</code> function.
            how do you build a system that can genuinely evaluate its own
            comprehension? that can distinguish between knowing facts and
            understanding concepts?
          </p>

          <p>
            i&apos;ve been experimenting with architectures that maintain
            explicit uncertainty models, systems that track not just what they
            know, but how confident they are in different aspects of their
            knowledge, and what questions might help reduce that uncertainty.
          </p>

          <h2>why this matters</h2>

          <p>
            building more curious ai isn&apos;t just about making conversations
            feel more natural (though that would be nice). it&apos;s about
            creating systems that can actually help us think, rather than just
            providing information.
          </p>

          <p>
            the best human collaborators are the ones who ask questions that
            push your thinking in new directions. they&apos;re not just
            repositories of knowledge, they&apos;re thinking partners who help
            you see things differently.
          </p>

          <blockquote>
            &ldquo;intelligence without curiosity is just sophisticated pattern
            matching. curiosity without intelligence is just random questioning.
            but intelligence + curiosity? that&apos;s where the interesting
            stuff happens.&rdquo;
          </blockquote>

          <p>
            we&apos;re building towards a world where ai systems are deeply
            integrated into how we think and work. if those systems are going to
            be genuine partners rather than sophisticated tools, they need to be
            genuinely curious about us and our problems.
          </p>

          <p>
            not because they&apos;ve been programmed to simulate curiosity, but
            because they genuinely want to understand.
          </p>

          <p>
            i&apos;m still working on this. still trying to figure out how to
            build systems that wonder rather than just respond. but i&apos;m
            starting to think that genuine curiosity might be the bridge between
            artificial intelligence and something approaching artificial
            consciousness.
          </p>

          <p>
            or maybe i&apos;m just tired of talking to very smart textbooks.
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
