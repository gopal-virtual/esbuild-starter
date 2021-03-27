import * as React from "react";
import Container from "@components/Container";
import Title from "@components/Title";
import Cover from "@components/Cover";
import Block from "@components/Block";
import Link from "@components/Link";
import Logo from "@assets/logo.svg";

const App = () => (
  <Container>
    <Cover src={Logo} />
    <Title>
      Say hello to{" "}
      <u>
        <i>Speed!</i>
      </u>
    </Title>
    <Block>
      <Link href="https://reactjs.org/">React JS</Link>
      <Link href="https://esbuild.github.io/">Esbuild</Link>
      <Link href="https://styled-components.com/">Styled Components</Link>
    </Block>
  </Container>
);

export default App;
