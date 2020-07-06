import styled from "styled-components";

export const ButtonContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  min-width: 1.5rem;
  cursor: pointer;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-black);
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    color: var(--color-text-primary);
    background: var(--color-black);
  }
`;
