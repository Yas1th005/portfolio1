'use client';

import React from 'react';
import styled from 'styled-components';

// Styled Components
const PageWrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 600px;
  text-align: center;
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

const Title = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 1rem;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Page Component
export default function ReadsPage() {
  const handleBackClick = (): void => {
    window.history.back();
  };

  return (
    <PageWrapper>
      <NavLink onClick={handleBackClick}>/home</NavLink>

      <Container>
        <Title>will update soon :)</Title>
      </Container>
    </PageWrapper>
  );
}
