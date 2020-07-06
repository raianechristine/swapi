import styled from "styled-components";

export const Title = styled.h2`
  margin: ${({ margin }) => margin ?? "0"};
  line-height: 4.4rem;
  letter-spacing: 0.03rem;
  text-align: center;
  font-size: 3.4rem;
  font-weight: 800;
  color: var(--color-text-primary);
`;

export const Paragraph = styled.p`
  display: inline-block;
  line-height: 2.6rem;
  font-size: 1.6rem;
  font-weight: normal;
`;
