"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Box, Flex, Heading, Text, Button, Card, CardHeader, CardBody, CardFooter, Badge, Container, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const plans = [
  { id: "starter", name: "Starter", description: "For single-doctor practices getting started.", price: "Custom", badge: null, features: ["Google Business Profile basics", "SEO audit and key pages", "Simple booking page", "WhatsApp confirmations", "Weekly reporting"], cta: "Get in touch" },
  { id: "growth", name: "Growth", description: "For clinics ready to scale patient flow.", price: "Custom", badge: "Recommended", features: ["Everything in Starter", "Google Ads (search)", "Local SEO and schema", "Slot rules and RWG", "Reminders and feedback automation", "Admin dashboard", "Monthly content calendar"], cta: "Get in touch" },
  { id: "premium", name: "Premium", description: "For multi-branch and full-service needs.", price: "Custom", badge: null, features: ["Everything in Growth", "Multi-branch and multi-doctor", "Dedicated account manager", "Social media and creatives", "Advanced tracking and attribution", "Priority support"], cta: "Get in touch" },
];

const comparisonFeatures = [
  { name: "Google Business Profile", starter: true, growth: true, premium: true },
  { name: "SEO (pages, local, schema)", starter: true, growth: true, premium: true },
  { name: "Online booking page", starter: true, growth: true, premium: true },
  { name: "WhatsApp confirmations", starter: true, growth: true, premium: true },
  { name: "Google Ads", starter: false, growth: true, premium: true },
  { name: "RWG and slot rules", starter: false, growth: true, premium: true },
  { name: "Reminders and feedback", starter: false, growth: true, premium: true },
  { name: "Admin dashboard", starter: false, growth: true, premium: true },
  { name: "Multi-branch support", starter: false, growth: false, premium: true },
  { name: "Social media and creatives", starter: false, growth: true, premium: true },
  { name: "Dedicated account manager", starter: false, growth: false, premium: true },
];

function CheckIcon() {
  return (
    <Flex h={5} w={5} shrink={0} align="center" justify="center" rounded="full" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}>
      <Check size={12} />
    </Flex>
  );
}

export function Pricing() {
  return (
    <Box id="pricing" borderTopWidth="1px" borderColor="gray.200" bg="gray.50" _dark={{ borderColor: "whiteAlpha.200", bg: "whiteAlpha.50" }} py={20} px={{ base: 4, sm: 6 }}>
      <Container maxW="5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }}>
          <Box mb={14} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="semibold" letterSpacing="tight" mb={3}>Packages and Pricing</Heading>
            <Text maxW="xl" mx="auto" color="gray.600" _dark={{ color: "gray.400" }}>Three plans that combine marketing and booking. Choose what fits your practice.</Text>
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: 0.1 }}>
          <Box display="grid" gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={6}>
            {plans.map((plan, i) => (
              <motion.div key={plan.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Card h="full" flexDirection="column" borderWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} shadow={plan.badge ? "md" : "sm"} {...(plan.badge ? { ring: "2px", ringColor: "teal.200" } : {})}>
                  <CardHeader pb={4}>
                    <Flex justify="space-between" align="center" mb={2}>
                      <Heading size="md">{plan.name}</Heading>
                      {plan.badge && <Badge colorScheme="teal" variant="subtle">{plan.badge}</Badge>}
                    </Flex>
                    <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }} mb={2}>{plan.description}</Text>
                    <Text fontSize="2xl" fontWeight="semibold">{plan.price}</Text>
                  </CardHeader>
                  <CardBody flex={1}>
                    <Flex direction="column" gap={3}>
                      {plan.features.map((f) => (
                        <Flex key={f} align="flex-start" gap={3} fontSize="sm">
                          <CheckIcon />
                          <Text color="gray.600" _dark={{ color: "gray.400" }}>{f}</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </CardBody>
                  <CardFooter>
                    <Button w="full" colorScheme="teal" as="a" href="#cta-form">{plan.cta}</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: 0.2 }}>
          <TableContainer mt={16} overflowX="auto" rounded="xl" borderWidth="1px" borderColor="gray.200" shadow="sm" bg="white" _dark={{ borderColor: "whiteAlpha.200", bg: "gray.800" }}>
            <Table size="sm" minW="600px">
              <Thead bg="gray.50" _dark={{ bg: "whiteAlpha.100" }}>
                <Tr>
                  <Th>Feature</Th>
                  <Th textAlign="center">Starter</Th>
                  <Th textAlign="center">Growth</Th>
                  <Th textAlign="center">Premium</Th>
                </Tr>
              </Thead>
              <Tbody>
                {comparisonFeatures.map((row) => (
                  <Tr key={row.name} borderBottomWidth="1px" borderColor="gray.100" _dark={{ borderColor: "whiteAlpha.100" }}>
                    <Td color="gray.600" _dark={{ color: "gray.400" }}>{row.name}</Td>
                    <Td textAlign="center">{row.starter ? <Flex display="inline-flex" align="center" justify="center" w={6} h={6} rounded="full" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}><Check size={14} /></Flex> : <Text as="span" color="gray.400"> </Text>}</Td>
                    <Td textAlign="center">{row.growth ? <Flex display="inline-flex" align="center" justify="center" w={6} h={6} rounded="full" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}><Check size={14} /></Flex> : <Text as="span" color="gray.400"> </Text>}</Td>
                    <Td textAlign="center">{row.premium ? <Flex display="inline-flex" align="center" justify="center" w={6} h={6} rounded="full" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}><Check size={14} /></Flex> : <Text as="span" color="gray.400"> </Text>}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </motion.div>
      </Container>
    </Box>
  );
}
