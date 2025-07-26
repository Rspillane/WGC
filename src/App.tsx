import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu.tsx";
import { Hero } from "./components/Hero/Hero.tsx";
import { Contact } from "./components/Contact/Contact.tsx";
import { Intro } from "./components/Intro/Intro.tsx";
import Pricing from "./components/Pricing/Pricing.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderMenu />
      <Hero />
      <Intro />
      <Pricing />
      <Contact />
      <Footer />
    </MantineProvider>
  );
}
