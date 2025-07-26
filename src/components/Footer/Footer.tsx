import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube
} from "@tabler/icons-react";
import { ActionIcon, Anchor, Group } from "@mantine/core";
import classes from "./Footer.module.css";
import logoright from "../../assets/logoright.png";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "News" },
  { link: "#", label: "Terms & Conditions" }
];

export function Footer() {
  const items = links.map(link =>
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={event => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  );

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <img src={logoright} height={60} />

        <Group className={classes.links}>
          {items}
        </Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
