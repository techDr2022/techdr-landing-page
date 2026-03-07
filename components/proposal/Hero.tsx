"use client";

import { motion } from "framer-motion";
import { FileText, Shield, BarChart3, CheckCircle2 } from "lucide-react";
import { Box, Flex, Heading, Text, Button, Card, CardBody, SimpleGrid, Container, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { PROPOSAL_PDF_LINK } from "@/lib/config";
import { HeroGraphics } from "@/components/HeroGraphics";

const trustCards = [
  { icon: Shield, title: "Healthcare-only team", description: "We focus solely on clinics and hospitals." },
  { icon: BarChart3, title: "Transparent reporting", description: "Clear dashboards and weekly insights." },
  { icon: CheckCircle2, title: "Automation-ready systems", description: "Booking, reminders, and follow-ups on autopilot." },
];

export function Hero() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-b, teal.50, teal.100, white)"
      _dark={{ bgGradient: "linear(to-b, whiteAlpha.100, whiteAlpha.50, gray.900)" }}
      py={{ base: 20, sm: 28 }}
      px={{ base: 4, sm: 6 }}
    >
      <HeroGraphics />
      <Box position="relative" zIndex={10} w="100%">
      <Container maxW="5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex direction="column" align="center" textAlign="center" gap={8}>
            <Heading as="h1" size={{ base: "xl", sm: "2xl", md: "3xl" }} fontWeight="semibold" letterSpacing="tight">
              Healthcare Growth Proposal, Digital Marketing + Smart Appointment Booking
            </Heading>
            <Text maxW="2xl" fontSize={{ base: "lg", sm: "xl" }} color="gray.600" _dark={{ color: "gray.400" }}>
              Designed for doctors, clinics, and hospitals in Hyderabad and beyond.
            </Text>
            <Flex direction={{ base: "column", sm: "row" }} gap={3} w={{ base: "full", sm: "auto" }}>
              <Button size="lg" colorScheme="teal" as="a" href="#cta-form" w={{ base: "full", sm: "auto" }}>
                Book a Strategy Call
              </Button>
              <Button size="lg" variant="outline" colorScheme="teal" as="a" href={PROPOSAL_PDF_LINK} target="_blank" rel="noopener noreferrer" leftIcon={<FileText size={18} />} w={{ base: "full", sm: "auto" }}>
                Get Proposal PDF
              </Button>
            </Flex>
          </Flex>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap={4} mt={16}>
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="card-3d" borderWidth="1px" borderColor="gray.200" shadow="md" overflow="hidden" bg="white" _dark={{ borderColor: "whiteAlpha.200", bg: "gray.800" }}>
                  <CardBody p={6}>
                    <Flex direction="column" align="center" gap={3} textAlign="center">
                      <Flex h={10} w={10} align="center" justify="center" rounded="full" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}>
                        <Icon size={20} />
                      </Flex>
                      <Heading as="h3" size="sm" fontWeight="medium">{card.title}</Heading>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{card.description}</Text>
                    </Flex>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </motion.div>
      </Container>
      </Box>
    </Box>
  );
}
