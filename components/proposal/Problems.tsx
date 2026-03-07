"use client";

import { motion } from "framer-motion";
import {
  Users,
  Search,
  PhoneMissed,
  CalendarX2,
  CalendarCheck,
  MessageSquareOff,
} from "lucide-react";
import { Box, Flex, Heading, Text, Card, CardBody, SimpleGrid, Container } from "@chakra-ui/react";

const problems = [
  { icon: Users, problem: "Low patient flow", impact: "Empty slots and underused capacity." },
  { icon: Search, problem: "Weak Google ranking", impact: "Patients find competitors first." },
  { icon: MessageSquareOff, problem: "Poor enquiry conversion", impact: "Leads drop off before booking." },
  { icon: PhoneMissed, problem: "Missed calls", impact: "No callback system or follow-up." },
  { icon: CalendarX2, problem: "Double bookings", impact: "Manual diaries and no slot rules." },
  { icon: CalendarCheck, problem: "No follow-ups", impact: "Post-visit feedback and recall missed." },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Problems() {
  return (
    <Box id="problems" borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={20} px={{ base: 4, sm: 6 }}>
      <Container maxW="5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <Box mb={14} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="semibold" letterSpacing="tight" mb={3}>
              Client Problems
            </Heading>
            <Text maxW="xl" mx="auto" color="gray.600" _dark={{ color: "gray.400" }}>
              Common pain points we help practices solve.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={4}>
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.problem} variants={item}>
                  <Card
                    h="full"
                    borderWidth="1px"
                    borderColor="gray.200"
                    _dark={{ borderColor: "whiteAlpha.200" }}
                    shadow="sm"
                    _hover={{ shadow: "md" }}
                    transition="box-shadow 0.2s"
                  >
                    <CardBody p={6}>
                      <Flex direction="column" gap={3}>
                        <Flex h={10} w={10} align="center" justify="center" rounded="lg" bg="gray.100" color="gray.600" _dark={{ bg: "whiteAlpha.200", color: "gray.400" }}>
                          <Icon size={20} aria-hidden />
                        </Flex>
                        <Heading as="h3" size="sm" fontWeight="medium">{p.problem}</Heading>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{p.impact}</Text>
                      </Flex>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}
