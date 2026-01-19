"use client";

import React from "react";
import {
  Card,
  Text,
  Box,
  SimpleGrid,
  Avatar,
  Button,
  Group,
  Badge,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

const Profile = () => {
  return (
    <Box p="xl" maw={900} mx="auto">
      {/* Profile Card */}
      <Card radius="xl" shadow="md" p="xl" withBorder>
        <Group align="center" wrap="nowrap">
          {/* Avatar */}
          <Avatar
            size={120}
            radius="xl"
            src=""
            styles={{
              image: { objectFit: "cover" },
            }}
          />

          {/* Info */}
          <Box>
            <Text fz={26} fw={900}>
              RK Swami
            </Text>

            <Group mt="md">
              <Button
                leftSection={<IconBrandYoutube size={18} />}
                color="red"
                radius="xl"
                fw={900}
              >
                subscribers
              </Button>

              <Button
                leftSection={<IconBrandInstagram size={18} fontWeight={900} />}
                variant="outline"
                radius="xl"
                fw={900}
              >
                Follow
              </Button>
            </Group>
            <Text c="dimmed" mt={8}>
              Music • DJ • Shorts Creator (Uk)
            </Text>
          </Box>
        </Group>
      </Card>

      {/* Stats Section */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} mt="xl">
        {[
          { label: "Subscribers", value: "1M" },
          { label: "Videos", value: "8" },
          // { label: "Total Views", value: "5.2M" },
        ].map((item, i) => (
          <Card key={i} withBorder radius="lg" p="md">
            <Text ta="center" fw={900} fz={24}>
              {item.value}
            </Text>
            <Text ta="center" c="dimmed">
              {item.label}
            </Text>
          </Card>
        ))}
      </SimpleGrid>

      {/* About Section */}
      <Card radius="xl" shadow="sm" p="xl" withBorder mt="xl">
        <Text fw={900} fz={40}>
          About Me
        </Text>
        <Text c="dimmed" mt="sm">
          Hello  I am RK Swami, a professional DJ & music creator.
          I upload remix songs, mashups & viral shorts  <br />

          Chanakya said that the one who controls Sama, Dana, Danda, and Bhed is called a
          king — what we now call a hacker. And I control all three of them <br /> <br />
          Hii, I am Editing (and) Full Stack Developer

          With 8 month of experience Editing, working with (Cult Music Production) and (Ks Junction Sirsa),
          I bring together creativity, structure, and precision to every project I take on. <br /><br />

          200+ Long video 300+ Short Video
          Editing ki h (And) 2 years complite in Editing Cours
          Every project is a new experience for me, where I use my creativity, timing, and passion to make every moment special.
          The one behind the camera, showing the world a new perspective. (Editor)

        </Text>
      </Card>
    </Box>
  );
};

export default Profile;
