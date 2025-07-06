import { IconAt, IconMapPin, IconPhone, IconSun } from "@tabler/icons-react";
import { Box, Stack, Text } from "@mantine/core";
import classes from "./ContactList.module.css";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>
          {description}
        </Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "info@warwickgolfcentre.co.uk", icon: IconAt },
  { title: "Phone", description: "01926 494316", icon: IconPhone },
  {
    title: "Address",
    description:
      "Warwick Golf Centre, The Racecourse, Hampton Street, Warwick, CV34 6HW",
    icon: IconMapPin
  },
  { title: "Working hours", description: "8 a.m. – 7 p.m.", icon: IconSun }
];

export function ContactList() {
  const items = MOCKDATA.map((item, index) =>
    <ContactIcon key={index} {...item} />
  );
  return (
    <Stack>
      {items}
    </Stack>
  );
}
