import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  background: white;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
  margin: 10px;

  .title {
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  img {
    display: block;
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;
