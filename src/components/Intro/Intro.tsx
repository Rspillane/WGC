import {
  IconCircleDotted,
  IconFileCode,
  IconFlame,
  IconReceiptOff
} from "@tabler/icons-react";
import {
  // Button,
  Grid,
  // SimpleGrid,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import classes from "./Intro.module.css";

const features = [
  {
    icon: IconReceiptOff,
    title: "9-hole Course",
    description:
      "All packages are published under MIT license, you can use Mantine in any project"
  },
  {
    icon: IconFileCode,
    title: "Driving Range",
    description:
      "Build type safe applications, all components and hooks export types"
  },
  {
    icon: IconCircleDotted,
    title: "Affordable Memberships",
    description: "Memberships starting from £425 a year"
  },
  {
    icon: IconFlame,
    title: "Social Clubhouse",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object"
  }
];

export function Intro() {
  const items = features.map(feature =>
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "green", to: "cyan" }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            Play. Practice. Relax.
          </Title>
          <Text c="dimmed">
            Located in the heart of Warwickshire, Warwick Golf Centre is your
            local destination for all things golf — whether you're just getting
            started or perfecting your game. We offer a welcoming and relaxed
            environment with a beautifully maintained 9-hole course, a fully
            equipped driving range, and affordable membership options for
            golfers of all levels. Whether you’re playing a casual round,
            practicing your swing, or bringing the family for some outdoor fun,
            Warwick Golf Centre is open to everyone.
          </Text>
        </Grid.Col>
        {/* <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col> */}
      </Grid>
    </div>
  );
}
