"use client";
import React from "react";
import { Box, Text, Flex, Divider, Anchor } from "@mantine/core";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
export default function Footer() {
  return (
    <Box bg="#000000" c="red" mt={50}>
      {/* Top Section */}
      <Flex
        px={{ base: 50, md: 100 }}
        py={20}
        justify="space-between"
        wrap="wrap"
        gap={30}
      >
        {/* Brand */}
        <Box w={250}>
          <Flex align="center" gap={8}>
            <FaYoutube size={32} color="red" />
            <Text fz={21} fw={900} c={"blue"}>
              Rk swami
              <Divider /><Divider /><Divider /> <Divider />
            </Text>
          </Flex>
          <Text fz={14} mt={10} c="gray.5" fw={900}>
            Singer/Lyrics/Compose/Music/Mix&Master- RK SWAMI <br />
            Singer & Lyrics: rk swami
            <br /> MUSIC & MIX MASTER : rk swami <br />
            Editor : rk swami <br />
          </Text>
        </Box>

        {/* Explore Links */}
        <Box>
          <Text fw={900} mb={10} c={"blue"}>
            Part=1
            <Divider /><Divider /><Divider /> <Divider />          </Text>
          <Anchor href="https://prince-pardhan.github.io/farming/" c="gray.5" display="block" target="_blank" fw={900}>Farma</Anchor>
          <Anchor href="https://www.rahulswami.online/" c="gray.5" display="block" target="_blank" fw={900}>Rahul</Anchor>
          <Anchor href="https://prince-pardhan.github.io/rameshkumar/" c="gray.5" display="block" target="_blank" fw={900}>Ramesh</Anchor>

        </Box>


        <Box>
          <Text fw={900} mb={10} c={"blue"}>
            Part=2
            <Divider /><Divider /><Divider /> <Divider />          </Text>
          <Anchor href="https://github.com/prince-pardhan" c="gray.5" display="block" target="_blank" fw={900}>Git</Anchor>
          <Anchor href="https://news-ten-beige.vercel.app/" c="gray.5" display="block" target="_blank" fw={900}>News</Anchor>
          <Anchor href="https://www.snapchat.com/add/user984333902?share_id=Dp7iJJr_VR8&locale=en-IN" c="gray.5" display="block" target="_blank" fw={900}>snapchat</Anchor>
        </Box>
        <Box>
          <Text fw={900} mb={10} c={"blue"}>
            Follow Us
            <Divider /><Divider /><Divider /> <Divider />
          </Text>
          <Flex gap={15}>
            <Anchor href="https://x.com/Rkswami001" c="gray.5" display="block" target="_blank" fw={900}> <FaTwitter size={30} color="blue" /> </Anchor>
            <Anchor href="https://www.facebook.com/share/r/1DAxEtF2s5/" c="gray.5" display="block" target="_blank" fw={900}><FaFacebook size={30} color="blue" /></Anchor>
            <Anchor href="https://www.instagram.com/prince_pardhan_325?igsh=dTNqMnEybndmc3c2" c="gray.5" display="block" target="_blank" fw={900}><FaInstagram size={30} color="red"/>1</Anchor>
            <Anchor href="https://www.instagram.com/rk_shiyar_001?igsh=MWNzeW5sZ3ZqZDdscw==" c="gray.5" display="block" target="_blank" fw={900}><FaInstagram size={30}color="red" />2</Anchor>
            <Anchor href="https://www.youtube.com/@Heartshiyar0010" c="gray.5" display="block" target="_blank" fw={900}><FaYoutube size={30} color="red" /></Anchor>
            <Anchor href="https://www.linkedin.com/in/rk-swami-b63251379/" c="gray.5" display="block" target="_blank" fw={900} ><GrLinkedin color="blue" size={30}/></Anchor>
          </Flex>
        </Box>
      </Flex>
        <Divider/><Divider /><Divider /> <Divider /><Divider /><Divider /><Divider /> <Divider />  
      <Text style={{display:"flex", alignItems:"center", justifyContent:"center"}} fw={900} c={"red"}>My chanal all links </Text>
      
      <Divider color="gray" />
      <Flex
        py={15}
        px={{ base: 20, md: 60 }}
        justify="space-between"
        wrap="wrap"
      >
        <Text fz={13} c="gray" fw={900} >
          © {new Date().getFullYear()} Rk swami.
          Singer/Lyrics/Compose/Music/Mix&Master- RK SWAMI
          <Divider /><Divider /><Divider />
        </Text>
      </Flex>
    </Box>
  );
}
