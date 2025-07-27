'use client';

import React from 'react';
import styled from 'styled-components';

// Types
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

interface ProjectBlockProps {
  project: Project;
  onClick: (url: string) => void;
}

// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem 0 4rem 0;
`;

const PageWrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  padding: 2rem;
  min-height: 100vh;
`;

const Header = styled.header`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  margin-bottom: 0.25rem;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  font-style: italic;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectBlock = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
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

    .tech-tag {
      opacity: 1;
      border-color: rgba(255, 105, 180, 0.3);
    }
  }
`;

const ProjectTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.8rem;
`;

const ProjectDescription = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  opacity: 0.9;
  line-height: 1.5;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  padding: 0.2rem 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
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

// Project data
const projects: Project[] = [
  {
    id: 'Pharmora',
    title: 'Pharmora',
    description:
      'AI-powered bioinformatics research suite designed to assist drug discovery and molecular analysis. Integrates LLMs for sequence analysis and real-time 3D protein visualization with secure microservice architecture.',
    technologies: ['react.js', 'node.js', 'mongoDB', 'openai', 'aws', 'docker'],
    githubUrl: 'https://github.com/Yas1th005/Pharmora-Final',
  },
  {
    id: 'Drishya',
    title: 'Drishya',
    description:
      'AI-powered product replacement tool for images using Meta’s SAM model with ViT-B backbone. Features include interactive canvas-based selection, OpenCV blending, edge feathering, and GPU-accelerated inference.',
    technologies: ['flask', 'python', 'SAM', 'opencv', 'html5', 'canvas'],
    githubUrl: 'https://github.com/Yas1th005/Drishya_Flask',
  },
  {
    id: 'WebChat',
    title: 'WebChat',
    description:
      'Real-time full-duplex chat application built with WebSockets. Supports multiple users, live messaging, auto-updating UI, and optimized performance.',
    technologies: ['next.js', 'socket.io', 'websockets', 'react.js', 'css'],
    githubUrl: 'https://github.com/Yas1th005/WebSockets_Chat',
  },
  {
    id: 'FileOS',
    title: 'FileOS',
    description:
      'AI-powered file management system featuring a natural language command interface for executing file operations, semantic file search, and real-time auto-categorization.',
    technologies: ['python', 'tkinter', 'sqlite', 'watchdog', 'nlp'],
    githubUrl: 'https://github.com/Yas1th005/AI-Powered-File-Management',
  },
  {
    id: 'THBB',
    title: 'THBB',
    description:
      'Full-stack food delivery application with scalable backend, efficient API architecture, and secure data handling optimized for performance and reliability.',
    technologies: ['node.js', 'api', 'database', 'architecture', 'security'],
    githubUrl: 'https://thbb.in',
  },
  {
    id: 'NotesVit',
    title: 'NotesVit',
    description:
      'Student notes sharing platform tailored for VIT students. Enables academic content uploads, secure file sharing, and real-time search by subject, semester, and course.',
    technologies: ['php', 'mysql', 'html', 'css', 'javascript'],
    githubUrl: 'https://vnotes.infy.uk/html/signin.php',
  },
];


// Components
const ProjectBlockComponent: React.FC<ProjectBlockProps> = ({
  project,
  onClick,
}) => {
  const handleClick = () => {
    onClick(project.githubUrl);
  };

  return (
    <ProjectBlock onClick={handleClick}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <TechTags>
        {project.technologies.map((tech, index) => (
          <TechTag key={index} className="tech-tag">
            {tech}
          </TechTag>
        ))}
      </TechTags>
    </ProjectBlock>
  );
};

const ProjectsPage: React.FC = () => {
  const handleProjectClick = (url: string): void => {
    window.open(url, '_blank');
  };

  const handleBackClick = (): void => {
    // Navigate back to home page
    window.history.back();
  };

  return (
    <PageWrapper>
      <NavLink href="#" onClick={handleBackClick}>
        /home
      </NavLink>

      <Container>
        <Header>
          <Title>projects</Title>
          <Subtitle>playground for ideas i couldn&apos;t ignore</Subtitle>
        </Header>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectBlockComponent
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </ProjectsGrid>
      </Container>
    </PageWrapper>
  );
};

export default ProjectsPage;
