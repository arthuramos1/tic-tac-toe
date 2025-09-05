import styled, { keyframes } from "styled-components";

const drawLine = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const WinningLine = styled.div`
  position: absolute;
  top: ${({ type }) => (type < 3 ? `${type * 33.33 + 16.66}%` : "0%")};
  left: ${({ type }) =>
    type >= 3 && type < 6 ? `${(type - 3) * 33.33 + 16.66}%` : "0%"};
  width: ${({ type }) =>
    type < 3 ? "100%" : type >= 3 && type < 6 ? "6px" : "100%"};
  height: ${({ type }) =>
    type < 3 ? "6px" : type >= 3 && type < 6 ? "100%" : "6px"};
  background: white;
  transform-origin: left center;
  animation: ${drawLine} 0.4s linear forwards;

  ${({ type }) =>
    type === 6 &&
    `
    width: 140%;
    height: 6px;
    top: 0%;
    left: 0;
    rotate: 45deg;
    transform-origin: left center;
  `}
  ${({ type }) =>
    type === 7 &&
    `
    width: 140%;
    height: 6px;
    top: 100%;
    left: 0;
    rotate: -45deg;
  `}
`;

export const WinnerCardWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: red;
`;

