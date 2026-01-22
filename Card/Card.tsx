"use client";

import React from "react";
import {
  Card,
  Text,
  Box,
  SimpleGrid,
  Group,
  Avatar,
  ActionIcon,
} from "@mantine/core";
import { IconEye, IconPlayerPlay } from "@tabler/icons-react";

// 🔁 YouTube link → Embed link (SAFE)
const getEmbedUrl = (url: string): string => {
  try {
    if (url.includes("youtube.com/shorts/")) {
      const id = url.split("shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
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
      spacing={28}
    >
      {videos.map((link, index) => (
        <Card
          key={index}
          radius="xl"
          p="xs"
          withBorder
          style={{
            cursor: "pointer",
            transition: "all 0.35s ease",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 20px 40px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* 🎬 VIDEO */}
          <Box
            style={{
              position: "relative",
              paddingBottom: "177%",
              borderRadius: 18,
              overflow: "hidden",
              background: "#000",
            }}
          >
            <iframe
              src={getEmbedUrl(link)}
              title={`short-${index}`}
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

            {/* ▶ Play Overlay */}
            <Box
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "0.3s",
              }}
              className="play-overlay"
            >
              <ActionIcon
                size={58}
                radius="xl"
                color="red"
                variant="filled"
              >
                <IconPlayerPlay size={30} />
              </ActionIcon>
            </Box>

            {/* ⏱ Duration */}
            <Box
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                background: "rgba(0,0,0,0.85)",
                color: "#fff",
                fontSize: 11,
                padding: "3px 8px",
                borderRadius: 8,
              }}
            >
              0:30
            </Box>
          </Box>

          {/* 📌 INFO */}
          <Group mt="md" align="flex-start" gap={10}>
            <Avatar radius="xl" size={36} />

            <Box>
              <Text fw={700} size="sm" lineClamp={2}>
                RK Swami Viral Song 2026 • #{index + 1}
              </Text>

              <Text size="xs" c="dimmed">
                RK Swami Music
              </Text>

              <Group gap={6} mt={4}>
                <IconEye size={14} />
                <Text size="xs" c="dimmed">
                  1.2M views • 2 days ago
                </Text>
              </Group>
            </Box>
          </Group>

          {/* Hover CSS */}
          <style jsx>{`
            .play-overlay:hover {
              opacity: 1;
            }
          `}</style>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Cardd;
