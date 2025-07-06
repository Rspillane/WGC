import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu.tsx";
import { Hero } from "./components/Hero/Hero.tsx";
import { Contact } from "./components/Contact/Contact.tsx";
import { Intro } from "./components/Intro/Intro.tsx";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderMenu />
      <Hero />
      {/* <div style={{ paddingBottom: 32 }} /> */}
      <Intro />
      <Contact />
    </MantineProvider>
  );
}
