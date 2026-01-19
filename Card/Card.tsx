"use client";

import React from "react";
import {
  Card,
  Text,
  Box,
  SimpleGrid,
  Group,
  Avatar,
} from "@mantine/core";
import { IconEye } from "@tabler/icons-react";

// 🔁 YouTube link → Embed link (ERROR FREE)
const getEmbedUrl = (url: string): string => {
  try {
    // Shorts
    if (url.includes("youtube.com/shorts/")) {
      const id = url.split("shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    // youtu.be
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    // Normal watch
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  } catch {
    return "";
  }
};

const Cardd = () => {
  const videos: string[] = [
    "https://youtube.com/shorts/17hZBwT0a-0",
    "https://youtube.com/shorts/JLjtDTt-V-M",
    "https://youtube.com/shorts/BacIJW0WD30",
    "https://youtube.com/shorts/SkVWkDc8hL0",
    "https://youtube.com/shorts/ba8tX4QzQas",
    "https://youtube.com/shorts/fGkKlaQCS8o",
    "https://youtube.com/shorts/Ze7SaZvodhw",
    "https://youtube.com/shorts/hVz4fnioeqw",
  ];

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      spacing="xl"
    >
      {videos.map((link, index) => (
        <Card
          key={index}
          radius="lg"
          p="xs"
          withBorder
          style={{
            cursor: "pointer",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* VIDEO (Shorts Ratio) */}
          <Box
            style={{
              position: "relative",
              paddingBottom: "177%",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <iframe
              src={getEmbedUrl(link)}
              title={`video-${index}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />

            {/* Duration badge */}
            <Box
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                background: "rgba(0,0,0,0.8)",
                color: "#fff",
                fontSize: 11,
                padding: "2px 6px",
                borderRadius: 6,
              }}
            >
              0:30
            </Box>
          </Box>

          {/* INFO */}
          <Group mt="sm" align="flex-start">
            <Avatar radius="xl" size="sm" />

            <Box>
              <Text fw={600} size="sm" lineClamp={2}>
                RK Swami Viral Song 2026 • #{index + 1}
              </Text>

              <Text size="xs" c="dimmed">
                RK Swami Music
              </Text>

              <Group  mt={2}>
                <IconEye size={14} />
                <Text size="xs" c="dimmed">
                  1.2k views • 2 days ago
                </Text>
              </Group>
            </Box>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Cardd;
