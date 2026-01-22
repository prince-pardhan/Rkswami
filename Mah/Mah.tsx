"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Divider, Anchor } from "@mantine/core";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  const [location, setLocation] = useState<string>("Haryaan Sirsa Madhosinghana");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(4);
        const lng = position.coords.longitude.toFixed(4);
        setLocation(`Lat: ${lat}, Lng: ${lng}`);
      },
      () => {
        setLocation("Location permission denied");
      }
    );
  }, []);

  return (
    <Box
      bg="#0b0b0b"
      c="white"
      mt={60}
      px={{ base: 20, md: 80 }}
      py={50}
    >
      {/* 🔝 Top Section */}
      <Flex justify="space-between" wrap="wrap" gap={40}>
        {/* Brand */}
        <Box w={260}>
          <Flex align="center" gap={10}>
            <FaYoutube size={36} color="red" />
            <Text fz={24} fw={900}>
              RK <span style={{ color: "red" }}>Swami</span>
            </Text>

          </Flex>
                      <Divider fw={900}/>

          <Text fz={14} mt={15} c="gray.5">
            Singer • Lyrics • Composer • Music <br />
            Mix & Master – RK Swami <br />
            Editor – RK Swami
          </Text>

          {/* 📍 Live Location */}
          <Flex align="center" gap={6} mt={12}>
            <MdLocationOn color="red" />
            <Text fz={12} c="gray.4">
              {location}
            </Text>
          </Flex>
        </Box>

        {/* Links Part 1 */}
        <Box>
          <Text fw={800} mb={12} c="blue">
            PART – 1
          </Text>
                    <Divider fw={900}/>

          <Anchor href="https://prince-pardhan.github.io/farming/" target="_blank" c="gray.5">Farming</Anchor><br/>
          <Anchor href="https://www.rahulswami.online/" target="_blank" c="gray.5">Rahul</Anchor><br/>
          <Anchor href="https://prince-pardhan.github.io/rameshkumar/" target="_blank" c="gray.5">Ramesh</Anchor>
        </Box>

        {/* Links Part 2 */}
        <Box>
          <Text fw={800} mb={12} c="blue">
            PART – 2
          </Text>
                    <Divider fw={900}/>

          <Anchor href="https://github.com/prince-pardhan" target="_blank" c="gray.5">GitHub</Anchor><br/>
          <Anchor href="https://news-ten-beige.vercel.app/" target="_blank" c="gray.5">News</Anchor><br/>
          <Anchor href="https://www.snapchat.com/add/user984333902" target="_blank" c="gray.5">Snapchat</Anchor>
        </Box>

        {/* Social */}
        <Box>
          <Text fw={800} mb={12} c="blue">
            FOLLOW US
          <Divider fw={900}/>
          </Text>
          <Flex gap={16}>
            <Anchor href="https://x.com/Rkswami001" target="_blank">
              <FaTwitter size={26} />
            </Anchor>
            <Anchor href="https://www.facebook.com/share/r/1DAxEtF2s5/" target="_blank">
              <FaFacebook size={26} />
            </Anchor>
            <Anchor href="https://www.instagram.com/prince_pardhan_325" target="_blank">
              <FaInstagram size={26} color="red" />
            </Anchor>
            <Anchor href="https://www.instagram.com/rk_shiyar_001" target="_blank">
              <FaInstagram size={26} color="red" />
            </Anchor>
            <Anchor href="https://www.youtube.com/@Heartshiyar0010" target="_blank">
              <FaYoutube size={26} color="red" />
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/rk-swami-b63251379/" target="_blank">
              <GrLinkedin size={26} />
            </Anchor>
          </Flex>
        </Box>
      </Flex>

      {/* Divider */}
      <Divider my={40} color="gray.8" />

      {/* Bottom */}
      <Flex justify="center">
        <Text fz={13} c="gray.6" ta="center">
          © {new Date().getFullYear()} RK Swami — Full Stack Developer <br />
          Singer • Lyrics • Composer • Music • Mix & Master • Editor
        </Text>
      </Flex>
    </Box>
  );
}
