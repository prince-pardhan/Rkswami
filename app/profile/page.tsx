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
  ActionIcon,
  Divider,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <Box maw={1000} mx="auto" pb={80}>
      {/* ================= HERO PROFILE ================= */}
      <Card
        radius="xl"
        p="xl"
        shadow="xl"
        withBorder
        style={{
          background:
            "linear-gradient(135deg, #ff0000 50%, #0004ff 50%)",
          color: "blue",
        }}
      >
        <Group align="center" wrap="wrap" gap={30}>
          {/* Avatar */}
          <Avatar
            size={140}
            radius="xl"
            src=""
            styles={{
              root: {
                border: "5px solid white",
              },
            }}
          />

          {/* Info */}
          <Box>
            <Text fz={34} fw={900}>
              RK Swami
            </Text>

            <Text c="gray.2" fz={16} mt={4}>
              Music • DJ • Shorts Creator • Full Stack Developer
            </Text>

            {/* Buttons */}
            <Group mt="md">
              <Button
                leftSection={<IconBrandYoutube size={18} />}
                color="red"
                radius="xl"
                size="md"
                fw={900}
              >
                Subscribe
              </Button>

              <Button
                leftSection={<IconBrandInstagram size={18} />}
                variant="white"
                radius="xl"
                size="md"
                fw={900}
              >
                Follow
              </Button>
            </Group>

            {/* Social Icons */}
            <Group mt="md" gap="md">
              <ActionIcon
                component="a"
                href="https://www.youtube.com/@Heartshiyar0010"
                target="_blank"
                size="lg"
                radius="xl"
                color="red"
              >
                <IconBrandYoutube size={22} />
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://www.instagram.com/prince_pardhan_325"
                target="_blank"
                size="lg"
                radius="xl"
                color="pink"
              >
                <IconBrandInstagram size={22} />
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://www.instagram.com/rk_shiyar_001"
                target="_blank"
                size="lg"
                radius="xl"
                color="pink"
              >
                <IconBrandInstagram size={22} />
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://www.facebook.com/share/r/1DAxEtF2s5/"
                target="_blank"
                size="lg"
                radius="xl"
                color="blue"
              >
                <IconBrandFacebook size={22} />
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://x.com/Rkswami001"
                target="_blank"
                size="lg"
                radius="xl"
                color="dark"
              >
                <IconBrandTwitter size={22} />
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://www.rahulswami.online/"
                target="_blank"
                size="lg"
                radius="xl"
                color="dark"
              >
                <CgProfile size={22} />
              </ActionIcon>
            </Group>
          </Box>
        </Group>
      </Card>

      {/* ================= STATS ================= */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} mt={40}>
        {[
          { label: "Subscribers", value: "1M+" },
          // { label: "Videos", value: "300+" },
          { label: "Experience", value: "2 Years" },
        ].map((item, i) => (
          <Card
            key={i}
            radius="xl"
            shadow="md"
            withBorder
            p="lg"
            
            style={{ textAlign: "center" }}
          >
            <Text fw={900} fz={32} c="#0004ff">
              {item.value}
            </Text>
            <Text c="dimmed">{item.label}</Text>
          </Card>
        ))}
      </SimpleGrid>

      {/* ================= ABOUT ================= */}
      <Card
        radius="xl"
        shadow="xl"
        withBorder
        p={40}
        mt={50}
        style={{
          background:
            "linear-gradient(180deg, #ffffff, #f1f3f5)",
        }}
      >
        <Text fw={900} fz={40} mb={10}>
          About Me
        </Text>

        <Divider mb={20} />

        <Text c="dimmed" fz={17} lh={1.9}>
          Hello, I’m <b>RK Swami</b> — a professional <b>DJ & Music Creator</b>.
          I specialize in remix songs, mashups, and viral short-form content
          that connects rhythm with emotion 🎧.
          <br /><br />

          <i>
            “The one who controls Sama, Dana, Danda, and Bhed is called a king.”
          </i>{" "}
          — Chanakya
          <br /><br />

          I’m also a <b>Video Editor</b> and <b>Full-Stack Developer</b> with
          hands-on experience in real-world projects.
          I’ve collaborated with <b>Cult Music Production</b> and
          <b> KS Junction Sirsa</b>.
          <br /><br />

          ✔ 200+ Long-form Videos <br />
          ✔ 300+ Short-form Videos <br />
          ✔ 2 Years Professional Editing Course
          <br /><br />

          Every project is a new journey where creativity,
          timing, and passion come together to tell a powerful story 🎬.
        </Text>
      </Card>
    </Box>
  );
};

export default Profile;
