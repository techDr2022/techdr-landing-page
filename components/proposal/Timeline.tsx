"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Box, Flex, Heading, Text, Card, CardBody, SimpleGrid, Container } from "@chakra-ui/react";

const steps = [
  { week: 1, title: "Onboarding", description: "Kick-off, access and goals alignment." },
  { week: 2, title: "Setup and tracking", description: "Profiles, pixels and conversion tracking." },
  { week: 3, title: "Creatives and launch", description: "Content, ads and booking go live." },
  { week: 4, title: "Optimisation", description: "Refinement based on early data." },
];

export function Timeline() {
  return (
    <Box id="timeline" borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={20} px={{ base: 4, sm: 6 }}>
      <Container maxW="5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <Box mb={14} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="semibold" letterSpacing="tight" mb={3}>
              Deliverables Timeline
            </Heading>
            <Text maxW="xl" mx="auto" color="gray.600" _dark={{ color: "gray.400" }}>
              A typical four-week path from onboarding to optimisation.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
            {steps.map((step, i) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card h="full" borderWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} shadow="sm">
                  <CardBody p={6}>
                    <Box display="flex" alignItems="center" gap={3} mb={3}>
                      <Flex h={10} w={10} shrink={0} align="center" justify="center" rounded="full" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}>
                        <CheckCircle2 size={20} />
                      </Flex>
                      <Text fontSize="sm" fontWeight="medium" color="gray.600" _dark={{ color: "gray.400" }}>
                        Week {step.week}
                      </Text>
                    </Box>
                    <Heading as="h3" size="sm" fontWeight="medium" mb={2}>{step.title}</Heading>
                    <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{step.description}</Text>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}
