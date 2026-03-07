"use client";

import { motion } from "framer-motion";
import { TrendingUp, MapPin, MessageSquare } from "lucide-react";
import { Box, Flex, Heading, Text, Card, CardBody, SimpleGrid, Container, Badge } from "@chakra-ui/react";

const metrics = [
  { icon: TrendingUp, value: "Calls up by 2.4x", label: "After Google Ads and GMB optimisation" },
  { icon: MapPin, value: "Maps ranking improved", label: "Top 3 for key local searches" },
  { icon: MessageSquare, value: "No missed follow-ups", label: "Automated reminders and feedback" },
];

export function CaseStudy() {
  return (
    <Box id="case-study" borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={20} px={{ base: 4, sm: 6 }}>
      <Container maxW="5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }}>
          <Box mb={14} textAlign="center">
            <Badge colorScheme="teal" variant="subtle" mb={4}>Case study style</Badge>
            <Heading as="h2" size="xl" fontWeight="semibold" letterSpacing="tight" mb={3}>Example Outcomes</Heading>
            <Text maxW="xl" mx="auto" color="gray.600" _dark={{ color: "gray.400" }}>Illustrative metrics from practices we have worked with.</Text>
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: 0.1 }}>
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap={6}>
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.value} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <Card h="full" borderWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} shadow="sm">
                    <CardBody p={6}>
                      <Flex h={12} w={12} align="center" justify="center" rounded="xl" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }} mb={4}>
                        <Icon size={24} />
                      </Flex>
                      <Text fontSize="lg" fontWeight="semibold" mb={2}>{m.value}</Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{m.label}</Text>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Text mt={8} textAlign="center" fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
            Results vary by speciality and competition. We will share relevant benchmarks during your strategy call.
          </Text>
        </motion.p>
      </Container>
    </Box>
  );
}
