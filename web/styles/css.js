import { styled } from "linaria/react";

//Layout
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

//Images
export const Img = styled.img`
  max-width: 100%;
  height: auto !important;
`;

export const PostHeroImg = styled.img`
  width: 100%;
  height: 100%;
  clear: both;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

//Typography
export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const Body = styled.p``;

export const Code = styled.p``;