import styled from "styled-components";

import { Title } from "components/core/Typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: var(--color-background);
`;

export const Text = styled(Title)`
  color: var(--color-primary);
`;
