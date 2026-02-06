"use client";

import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Card,
  CardBody,
} from "@chakra-ui/react";

const faqs = [
  { q: "What is the typical timeline to go live?", a: "We aim for a four-week path from onboarding to launch. Exact timelines depend on your current setup and content availability." },
  { q: "Do I need a separate budget for Google Ads?", a: "Yes. Ads spend is separate from our management fee. We will recommend a starting budget and optimise from there." },
  { q: "What is Reserve with Google (RWG)?", a: "RWG lets patients book directly from Google Search and Maps. We integrate your booking system so slots and confirmations stay in sync." },
  { q: "How does WhatsApp automation work?", a: "Confirmations, reschedule and cancellation links are sent via WhatsApp. Reminders and feedback prompts can be automated after the visit." },
  { q: "What support do I get after launch?", a: "You get weekly reporting and access to your dashboard. Growth and Premium plans include more hands-on support and a dedicated contact." },
  { q: "Who handles content and creatives?", a: "We create GMB posts, ad copy and landing pages. For social media, we can provide a content calendar and templates; full creative production is available in higher tiers." },
  { q: "How often do I see reports?", a: "Weekly insights and a KPI dashboard are included. We can schedule a short call to review results if you prefer." },
  { q: "What if I need to cancel or pause?", a: "Terms are outlined in the agreement. We support pausing or winding down with notice so you are not locked in long term." },
];

export function FAQ() {
  return (
    <Box id="faq" borderTopWidth="1px" borderColor="gray.200" bg="gray.50" _dark={{ borderColor: "whiteAlpha.200", bg: "whiteAlpha.50" }} py={20} px={{ base: 4, sm: 6 }}>
      <Container maxW="3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }}>
          <Box mb={14} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="semibold" letterSpacing="tight" mb={3}>Frequently Asked Questions</Heading>
            <Text color="gray.600" _dark={{ color: "gray.400" }}>Common questions about timelines, budgets and support.</Text>
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: 0.1 }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 5, xl: 10 }} spacing={2}>
            {faqs.slice(0, 10).map((faq, i) => (
              <Card key={i} className="card-3d" borderWidth="1px" borderColor="gray.200" bg="white" _dark={{ borderColor: "whiteAlpha.200", bg: "gray.800" }} shadow="sm">
                <CardBody p={4}>
                  <Heading as="h3" size="xs" mb={2}>{faq.q}</Heading>
                  <Text fontSize="xs" color="gray.600" _dark={{ color: "gray.400" }} lineHeight="tall">
                    {faq.a}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}
