import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu.tsx";
import { Contact } from "./components/Contact/Contact.tsx";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderMenu />
      <Contact />
    </MantineProvider>
  );
}
