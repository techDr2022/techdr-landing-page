"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Box, Flex, Button, Container, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { WHATSAPP_NUMBER, PROPOSAL_PDF_LINK } from "@/lib/config";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

export function ProposalHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Box
        position="sticky"
        top={0}
        zIndex={40}
        w="100%"
        borderBottomWidth="1px"
        borderColor="gray.200"
        bg="white"
        _dark={{ borderColor: "whiteAlpha.200", bg: "gray.900" }}
        backdropFilter="blur(8px)"
      >
      <Container maxW="5xl">
        <Flex h="16" align="center" justify="space-between" px={{ base: 4, sm: 6 }}>
          <ChakraLink as={Link} href="/proposal" fontWeight="semibold" fontSize="lg" _hover={{ textDecoration: "none" }}>
            TechDr
          </ChakraLink>
          <Flex gap={2} align="center">
            <Button variant="ghost" size="sm" as="a" href={PROPOSAL_PDF_LINK} target="_blank" rel="noopener noreferrer">
              Get Proposal PDF
            </Button>
            <Button size="sm" colorScheme="teal" as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" leftIcon={<MessageCircle size={16} />}>
              WhatsApp
            </Button>
          </Flex>
        </Flex>
      </Container>
      </Box>
    </motion.header>
  );
}
