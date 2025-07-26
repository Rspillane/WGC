import { Card, Text, Title, Group, List, ThemeIcon, Grid } from "@mantine/core";

import { Table, TableData } from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons-react";

type PricingPlan = {
  id: number;
  name: string;
  price: string;
  features: string[];
};

const pricingData: PricingPlan[] = [
  {
    id: 1,
    name: "Full Membership",
    price: "£ 579",
    features: ["Uliminated Golf", "6 1/2 per week", "Email Support"]
  },
  {
    id: 2,
    name: "Senior Membership",
    price: "£ 425",
    features: [
      "Unlimited Golf",
      "Mon - Fri, 7am to 3pm",
      "Gents 65+ Ladies 60+"
    ]
  }
];

const weekdayData: TableData = {
  head: ["Weekday Prices", "Green Fee"],
  caption: "Senior prices, tee off before 3pm, Gents 65+ Ladies 60+",
  body: [
    ["9 Holes", "£ 14.00"],
    ["18 Holes", "£ 17.00"],
    ["Junior 9 Holes", "£ 10.50"],
    ["Junior 18 Holes", "£ 13.00"],
    ["Senior 9 Holes", "£ 11.50"],
    ["Senior 18 Holes", "£ 14.00"]
  ]
};

const weekendData: TableData = {
  head: ["Weekend Prices", "Green Fee"],
  body: [
    ["9 Holes", "£ 16.00"],
    ["18 Holes", "£ 20.00"],
    ["Junior 9 Holes", "£ 11.50"],
    ["Junior 18 Holes", "£ 14.00"]
  ]
};

const extrasData: TableData = {
  head: ["Equipment", "Hire Cost"],
  caption: "Equipment is available to hire at the club shop",
  body: [
    ["Club Hire (half set)", "£ 6.00"],
    ["Trolley Hire", "£ 4.00"],
    ["Bag Hire", "£ 4.00"]
  ]
};

const Pricing = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title>Memberships</Title>
      <Group align="center" justify="center" gap="md">
        {pricingData.map(plan =>
          <Card
            key={plan.id}
            shadow="sm"
            padding="lg"
            radius="md"
            style={{ width: 300 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Title order={3} size={16}>
                {plan.name}
              </Title>
              <Text
                size="xl"
                fw={700}
                ta="center"
                variant="gradient"
                gradient={{ from: "teal", to: "cyan", deg: 90 }}
              >
                {plan.price}
              </Text>
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                }
              >
                {plan.features.map((feature, idx) =>
                  <List.Item key={idx}>
                    <Text size="sm">
                      {feature}
                    </Text>
                  </List.Item>
                )}
              </List>
            </div>
          </Card>
        )}
      </Group>
      <Title>Green Fees</Title>
      <Grid>
        <Grid.Col span={{ base: 9, sm: 6, md: 6, lg: 6 }}>
          <Table data={weekdayData} highlightOnHover />
        </Grid.Col>
        <Grid.Col span={{ base: 9, sm: 6, md: 6, lg: 6 }}>
          <Table data={weekendData} highlightOnHover />
        </Grid.Col>
        <Grid.Col span={{ base: 9, sm: 12, md: 12, lg: 12 }}>
          <Table data={extrasData} highlightOnHover width={400} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Pricing;
