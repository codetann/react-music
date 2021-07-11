import React from "react";
import styled from "styled-components";
import { color, text } from "../../styles/theme";

export default function MinPlayer({ title, artist }) {
  return (
    <Container>
      <PlayBtn className="fas fa-play" />
      <Info>
        <Title>Dawn</Title>
        <Artist>Toonorth</Artist>
      </Info>
      <Time>2: 32</Time>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  padding: 2rem;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${color.ali};

  border-top: 1px solid ${color[300]};
`;

const PlayBtn = styled.button`
  min-width: 3.5rem;
  min-height: 3.5rem;
  border: 1px solid ${color[300]};
  background: none;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.p`
  color: ${color["200"]};
  font-size: ${text.md};
  margin-bottom: 0.5rem;
`;

const Artist = styled.p`
  color: ${color["300"]};
  font-size: ${text.sm};
`;

const Time = styled.p`
  width: 4rem;
  color: ${color["300"]};
  font-size: ${text.sm};
`;
