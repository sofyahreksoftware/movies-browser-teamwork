import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding-bottom: 32px;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 18px;
    line-height: 1.2;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;

  ${({ people }) =>
    people &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    grid-gap: 16px;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
`;
