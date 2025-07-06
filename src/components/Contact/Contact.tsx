import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube
} from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title
} from "@mantine/core";
import { ContactList } from "./ContactList";
import classes from "./Contact.module.css";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function Contact() {
  const icons = social.map((Icon, index) =>
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            If you have any questions, get in touch!
          </Text>

          <ContactList />

          <Group mt="xl">
            {icons}
          </Group>
        </div>

        <div className={classes.form} style={{ overflow: "hidden" }}>
          <iframe
            title="Warwick Golf Centre Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4777.913080224372!2d-1.6000698819604804!3d52.281024535896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870cb6bdea58aaf%3A0x86c76d4d51bd2e12!2sWarwick%20Golf%20Centre!5e1!3m2!1sen!2sus!4v1751822894989!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 300 }}
            loading="lazy"
          />
        </div>
      </SimpleGrid>
    </div>
  );
}
