import { styled } from "linaria/react";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;
