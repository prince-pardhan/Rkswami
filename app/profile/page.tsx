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
    <Box p="xl" maw={900} mx="auto">
      {/* ================= PROFILE CARD ================= */}
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

            {/* Buttons */}
            <Group mt="md">
              <Button
                leftSection={<IconBrandYoutube size={18} />}
                color="red"
                radius="xl"
                fw={900}
              >
                Subscribe
              </Button>

              <Button
                leftSection={<IconBrandInstagram size={18} />}
                variant="outline"
                radius="xl"
                fw={900}
              >
                Follow
              </Button>
            </Group>

            {/* Social Media Icons */}
            <Group mt="sm" gap="md">
              <ActionIcon
                component="a"
                href="https://www.youtube.com/@Heartshiyar0010"
                target="_blank"
                size="lg"
                radius="xl"
                color="red"
                variant="light"
                
              >
                <IconBrandYoutube size={22} />
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://www.instagram.com/prince_pardhan_325?igsh=dTNqMnEybndmc3c2"
                target="_blank"
                size="lg"
                radius="xl"
                color="pink"
                variant="light"
              >
                <IconBrandInstagram size={22} />1
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://www.instagram.com/rk_shiyar_001?igsh=MWNzeW5sZ3ZqZDdscw=="
                target="_blank"
                size="lg"
                radius="xl"
                color="pink"
                variant="light"
              >
                <IconBrandInstagram size={22} />2
              </ActionIcon>

              <ActionIcon
                component="a"
                href="https://www.facebook.com/share/r/1DAxEtF2s5/"
                target="_blank"
                size="lg"
                radius="xl"
                color="blue"
                variant="light"
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
                variant="light"
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
                variant="light"
              >
               <CgProfile  size={22}/>

              </ActionIcon>
            </Group>

            <Text c="dimmed" mt={8}>
              Music • DJ • Shorts Creator (UK)
            </Text>
          </Box>
        </Group>
      </Card>

      {/* ================= STATS ================= */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} mt="xl">
        {[
          { label: "Subscribers", value: "1M+" },
          { label: "Videos", value: "300+" },
          { label: "Experience", value: "2 Years" },
        ].map((item, i) => (
          <Card key={i} withBorder radius="lg" p="md" shadow="sm">
            <Text ta="center" fw={900} fz={24}>
              {item.value}
            </Text>
            <Text ta="center" c="dimmed">
              {item.label}
            </Text>
          </Card>
        ))}
      </SimpleGrid>

      {/* ================= ABOUT ================= */}
      <Card
        radius="xl"
        shadow="lg"
        p="xl"
        withBorder
        mt="xl"
        style={{
          background:
            "linear-gradient(180deg, #ffffff, #f8f9fa)",
        }}
      >
        <Text fw={900} fz={38} mb={6}>
          About Me
        </Text>

        <Text c="dimmed" fz={16} lh={1.8}>
          Hello, I’m <b>RK Swami</b> — a professional <b>DJ & Music Creator</b>.
          I create remix songs, mashups, and viral shorts that connect
          rhythm with emotion. 🎧
          <br /><br />

          <i>
            “The one who controls Sama, Dana, Danda, and Bhed is called a king.”
          </i>{" "}
          — Chanakya.
          <br /><br />

          I’m also a <b>Video Editor</b> and <b>Full-Stack Developer</b> with
          <b> 8+ months</b> of professional editing experience.
          I’ve worked with <b>Cult Music Production</b> and
          <b> KS Junction Sirsa</b>.
          <br /><br />

          • 200+ Long-form Videos <br />
          • 300+ Short-form Videos <br />
          • 2 Years Professional Editing Course
          <br /><br />

          Every project is a new journey — where creativity,
          timing, and passion come together to tell a powerful story. 🎬
        </Text>
      </Card>
    </Box>
  );
};

export default Profile;
