import styled from "styled-components";
import { Paragraph } from "components/core/Typography";

export const ColumnTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0 0 0;
  padding: 1rem 2rem;
  border: 1px solid var(--color-primary);
`;

export const ColumnTitle = styled(Paragraph)`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: var(--color-primary);
`;

export const Starships = styled.div`
  margin: 1rem 0;
  padding: 0 2rem;
  max-height: 30rem;
  overflow-y: scroll;
`;

export const Starship = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  justify-content: space-between;
  &:hover {
    color: var(--color-primary);
  }
`;
