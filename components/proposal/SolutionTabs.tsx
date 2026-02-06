"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  Megaphone,
  Share2,
  BarChart3,
  Calendar,
  MessageCircle,
  Bell,
  LayoutDashboard,
  Building2,
  Lock,
} from "lucide-react";
import { Box, Flex, Heading, Text, Card, CardHeader, CardBody, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid, Container } from "@chakra-ui/react";
import type { LucideIcon } from "lucide-react";

const marketingItems = [
  { icon: MapPin, title: "Google Business Profile (GMB)", points: ["Regular posts and photos", "Review plan and response workflow", "Local ranking optimisation", "Competitor tracking"] },
  { icon: Search, title: "SEO", points: ["Service pages and local SEO", "Schema markup", "Blogs and backlinks", "Technical SEO audits"] },
  { icon: Megaphone, title: "Google Ads", points: ["Search campaigns", "Call and WhatsApp conversions", "Landing pages", "Tracking and attribution"] },
  { icon: Share2, title: "Social Media", points: ["Reels and carousels", "Brand design consistency", "Monthly content calendar"] },
  { icon: BarChart3, title: "Reporting", points: ["Weekly insights", "KPI dashboard"] },
];

const bookingItems = [
  { icon: Calendar, title: "Online booking", points: ["Dedicated booking page per doctor or clinic"] },
  { icon: Lock, title: "Slot rules and duplicates", points: ["Slot rules", "Prevention of duplicate bookings"] },
  { icon: MessageCircle, title: "WhatsApp confirmations", points: ["Confirmations, reschedule and cancellation via WhatsApp"] },
  { icon: Bell, title: "Reminders and feedback", points: ["Reminder automation", "Feedback reminder after visit"] },
  { icon: MapPin, title: "Reserve with Google (RWG)", points: ["Integration with Google for in-search booking"] },
  { icon: LayoutDashboard, title: "Admin and reception dashboard", points: ["Appointments view", "Patient notes and sources", "Export and reporting"] },
  { icon: Building2, title: "Multi-branch and multi-doctor", points: ["Support for multiple locations and practitioners"] },
  { icon: Lock, title: "Data privacy and storage", points: ["Secure storage and best practices"] },
];

function ItemCard({ icon: Icon, title, points }: { icon: LucideIcon; title: string; points: string[] }) {
  return (
    <Card borderWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} shadow="sm">
      <CardHeader pb={2}>
        <Flex align="center" gap={3}>
          <Flex h={10} w={10} align="center" justify="center" rounded="lg" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}>
            <Icon size={20} />
          </Flex>
          <Heading size="sm">{title}</Heading>
        </Flex>
      </CardHeader>
      <CardBody pt={0}>
        <Box as="ul" listStyleType="none" m={0} p={0} fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }} sx={{ "& > li": { display: "flex", alignItems: "flex-start", gap: 2, mb: 1.5 } }}>
          {points.map((point) => (
            <Box as="li" key={point}>
              <Box as="span" mt={1.5} h={1.5} w={1.5} flexShrink={0} rounded="full" bg="teal.400" opacity={0.7} />
              {point}
            </Box>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
}

export function SolutionTabs() {
  return (
    <Box id="solution" borderTopWidth="1px" borderColor="gray.200" bg="gray.50" _dark={{ borderColor: "whiteAlpha.200", bg: "whiteAlpha.50" }} py={20} px={{ base: 4, sm: 6 }}>
      <Container maxW="5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <Box mb={14} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="semibold" letterSpacing="tight" mb={3}>
              Proposed Solution
            </Heading>
            <Text maxW="xl" mx="auto" color="gray.600" _dark={{ color: "gray.400" }}>
              Two pillars: digital marketing and smart appointment booking.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Tabs variant="soft-rounded" colorScheme="teal" isFitted>
            <TabList mb={8} maxW="md" mx="auto" gridTemplateColumns="repeat(2, 1fr)" display="grid">
              <Tab>Digital Marketing</Tab>
              <Tab>Appointment Booking</Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
                  {marketingItems.map((item) => (
                    <ItemCard key={item.title} icon={item.icon} title={item.title} points={item.points} />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
                  {bookingItems.map((item) => (
                    <ItemCard key={item.title} icon={item.icon} title={item.title} points={item.points} />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </motion.div>
      </Container>
    </Box>
  );
}
