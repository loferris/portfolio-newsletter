import { styled } from "linaria/react";

export const Grid = styled.div``;

export const Row = styled.div`
  clear: both;
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto !important;
`;
