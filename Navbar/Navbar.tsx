"use client";

import React, { Profiler, useState } from "react";
import { Flex, Text, Input, ActionIcon } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaYoutube, FaSearch, FaMicrophone, FaTimes } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";

const Navbar = () => {
  const navigation = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Flex
      w="100%"
      h="100%"
      px={10}
      align="center"
      justify="space-between"
      bg="white.9"
      style={{ borderBottom: "4px solid #000000" }}
    >
      {/* Left Logo */}
      <Flex
        h='85'
        align="center"
        gap={3}
        style={{ cursor: "pointer" }}
      >
        <FaYoutube size={32} color="red" />
        <Text fz={30} fw={900}>
          Rk swami
        </Text>
      </Flex>

      {/* Center Search */}
      <Flex align="center">
        {searchOpen && (
          <Flex align="center" mr={10}>
            <Input
              placeholder="Search"
              radius="xl"
              w={150}
              autoFocus
            />

            {/* Mic Button */}
            <ActionIcon radius="xl" ml={6} size="lg" variant="light">
              <FaMicrophone />
            </ActionIcon>

            {/* Close Button */}
            <ActionIcon
              radius="xl"
              ml={5}
              size="lg"
              color="red"
              variant="light"
              onClick={() => setSearchOpen(false)}
            >
              <FaTimes />
            </ActionIcon>
          </Flex>
        )}

        {/* Search Open Button */}
        {!searchOpen && (
          <ActionIcon
            radius="sl"
            size="xl"
            onClick={() => setSearchOpen(true)}
          >
            <FaSearch />
          </ActionIcon>
        )}
      </Flex>

      <MdNotificationsActive size={30} />
      <BsPersonCircle
        size={30}
        style={{ cursor: "pointer" }}
        onClick={() => navigation.push("/profile")}
      />

    </Flex>
  );
};

export default Navbar;

