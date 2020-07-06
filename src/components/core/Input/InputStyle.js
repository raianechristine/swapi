import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: -2.6rem;
  line-height: 1.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-size: 1rem;
  color: var(--color-primary);
  pointer-events: none;
`;

export const Field = styled.input`
  padding: 1rem 0;
  width: 100%;
  font-family: var(--font-family-default);
  font-size: var(--font-size-default);
  text-indent: 1rem;
  color: var(--color-back-primary);
  background: var(--color-black);
  border: 1px solid transparent;
  appearance: none;
  outline: 0;
  transition: all 0.3s ease-in-out;
`;
