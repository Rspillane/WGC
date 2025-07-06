import { Button, Container, Text, Title } from "@mantine/core";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#06482e", to: "#06482e" }}
              >
                Warwick Golf Centre
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              Build fully functional accessible web applications with ease –
              Mantine includes more than 100 customizable components and hooks
              to cover you in any situation
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
