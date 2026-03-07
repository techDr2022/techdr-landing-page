"use client";

import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  Card,
  CardBody,
  SimpleGrid,
  Wrap,
  WrapItem,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import {
  MessageCircle,
  ArrowRight,
  BarChart3,
  Search,
  CalendarCheck,
  Target,
  LayoutDashboard,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { HeroGraphics } from "@/components/HeroGraphics";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

const stats = [
  { value: "200+", label: "Clients" },
  { value: "Healthcare", label: "Specialisation" },
  { value: "Hyderabad", label: "& beyond" },
];

const services = [
  {
    icon: Search,
    title: "SEO & Google visibility",
    description: "Rank higher so patients find you first.",
  },
  {
    icon: BarChart3,
    title: "Google Ads & GMB",
    description: "Paid reach and local presence that converts.",
  },
  {
    icon: CalendarCheck,
    title: "Smart booking & automation",
    description: "Appointments, reminders, and follow-ups on autopilot.",
  },
];

const whyUs = [
  {
    icon: Target,
    title: "Healthcare only",
    text: "Strategies built for how patients search and clinics operate.",
  },
  {
    icon: LayoutDashboard,
    title: "Transparent reporting",
    text: "Clear dashboards and regular reports   no black box.",
  },
  {
    icon: Zap,
    title: "Long-term focus",
    text: "SEO, GMB, and automation that compound over time.",
  },
  {
    icon: CheckCircle2,
    title: "Easy to work with",
    text: "Dedicated contact, plain language, WhatsApp access.",
  },
];

const howSteps = [
  { step: "1", title: "Strategy call", text: "We understand your practice, goals, and setup." },
  { step: "2", title: "Tailored plan", text: "SEO, Ads, GMB, or booking   mixed to fit you." },
  { step: "3", title: "Ongoing support", text: "Regular reports, one point of contact, no jargon." },
];

const clientTypes = ["Solo practitioners", "Clinics", "Dental", "Diagnostics", "Hospitals"];

const serviceDetails = [
  {
    icon: Search,
    title: "SEO & Google visibility",
    body: "Your practice shows up when patients search for a doctor or \"clinic near me.\" We optimise your site and content so you get more organic traffic and calls   without paying per click for every visit.",
  },
  {
    icon: BarChart3,
    title: "Google Ads & GMB",
    body: "Targeted Ads plus an optimised Google Business Profile. You appear on Search and Maps with accurate info and photos, in front of high-intent patients when they're deciding where to go.",
  },
  {
    icon: CalendarCheck,
    title: "Smart booking & automation",
    body: "Online booking, WhatsApp confirmations, reminders, and follow-ups. Fewer missed calls and no-shows, less manual work   we work with the tools that fit your practice.",
  },
];

export function HomePage() {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Box
        as="header"
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
          <Flex h="16" align="center" justify="space-between" px={{ base: 4, sm: 6 }} py={2}>
            <ChakraLink as={Link} href="/" fontWeight="semibold" fontSize="lg" _hover={{ textDecoration: "none" }}>
              TechDr
            </ChakraLink>
            <Flex gap={2} align="center">
              <Button variant="ghost" size="sm" as={Link} href="/proposal">
                Healthcare Proposal
              </Button>
              <Button size="sm" colorScheme="teal" as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" leftIcon={<MessageCircle size={16} />}>
                {isMobile ? "WhatsApp" : "WhatsApp"}
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box as="main">
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
                <Text fontSize="sm" fontWeight="medium" letterSpacing="wider" textTransform="uppercase" color="teal.600" _dark={{ color: "teal.400" }}>
                  Digital Marketing Agency
                </Text>
                <Heading as="h1" size={{ base: "xl", sm: "2xl", md: "3xl" }} fontWeight="semibold" letterSpacing="tight">
                  TechDr   Growth for healthcare brands
                </Heading>
                <Text maxW="2xl" fontSize={{ base: "lg", sm: "xl" }} color="gray.600" _dark={{ color: "gray.400" }}>
                  SEO, Google Ads, GMB, and smart appointment systems. Trusted by 200+ clinics and hospitals.
                </Text>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Flex flexWrap="wrap" justify="center" gap={{ base: 8, sm: 12 }} pt={4}>
                    {stats.map((stat) => (
                      <Box key={stat.label} textAlign="center">
                        <Text fontSize={{ base: "2xl", sm: "3xl" }} fontWeight="bold" color="teal.600" _dark={{ color: "teal.400" }}>
                          {stat.value}
                        </Text>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{stat.label}</Text>
                      </Box>
                    ))}
                  </Flex>
                </motion.div>

                <Flex direction={{ base: "column", sm: "row" }} gap={3} pt={4} w={{ base: "100%", sm: "auto" }}>
                  <Button size="lg" colorScheme="teal" as={Link} href="/proposal" rightIcon={<ArrowRight size={18} />} w={{ base: "full", sm: "auto" }}>
                    View Healthcare Proposal
                  </Button>
                  <Button size="lg" variant="outline" colorScheme="teal" as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" leftIcon={<MessageCircle size={18} />} w={{ base: "full", sm: "auto" }}>
                    Get in touch
                  </Button>
                </Flex>
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <SimpleGrid columns={{ base: 1, sm: 3 }} gap={4} mt={20}>
                {services.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="card-3d" borderWidth="1px" borderColor="gray.200" shadow="md" overflow="hidden" bg="white" _dark={{ borderColor: "whiteAlpha.200", bg: "gray.800" }}>
                      <CardBody p={6}>
                        <Flex direction="column" gap={3}>
                          <Flex h={10} w={10} align="center" justify="center" rounded="full" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }}>
                            <Icon size={20} />
                          </Flex>
                          <Heading as="h3" size="sm" fontWeight="medium">{item.title}</Heading>
                          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{item.description}</Text>
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

        <Box id="about" borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={14} px={{ base: 4, sm: 6 }}>
          <Container maxW="4xl">
            <Heading as="h2" size="xl" fontWeight="semibold" mb={4}>About TechDr</Heading>
            <Text maxW="2xl" fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }} lineHeight="tall" mb={3}>
              We're a digital marketing agency built only for healthcare   doctors, clinics, and hospitals. No retail or e‑commerce. That focus has taken us to <Text as="strong" color="gray.800" _dark={{ color: "white" }}>200+ clients</Text> across Hyderabad and beyond.
            </Text>
            <Text maxW="2xl" color="gray.600" _dark={{ color: "gray.400" }} lineHeight="tall">
              We combine SEO, Google Ads, GMB, and smart booking so you get more visibility, more enquiries, and more filled slots   without becoming a marketer yourself. You run the clinic; we run the rest.
            </Text>
          </Container>
        </Box>

        <Box id="what-we-do" bg="gray.50" _dark={{ bg: "whiteAlpha.50" }} py={14} px={{ base: 4, sm: 6 }}>
          <Container maxW="5xl">
            <Heading as="h2" size="xl" fontWeight="semibold" mb={2}>What we do</Heading>
            <Text maxW="xl" color="gray.600" _dark={{ color: "gray.400" }} mb={10}>
              A full stack for healthcare: run one service or combine them for maximum impact.
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={6}>
              {serviceDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="card-3d" borderWidth="1px" borderColor="gray.200" shadow="md" bg="white" _dark={{ borderColor: "whiteAlpha.200", bg: "gray.800" }}>
                    <CardBody p={6}>
                      <Flex h={11} w={11} align="center" justify="center" rounded="xl" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }} mb={4}>
                        <Icon size={20} />
                      </Flex>
                      <Heading as="h3" size="sm" fontWeight="semibold" mb={2}>{item.title}</Heading>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }} lineHeight="tall">{item.body}</Text>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>

        <Box id="why-choose-us" borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={14} px={{ base: 4, sm: 6 }}>
          <Container maxW="5xl">
            <Heading as="h2" size="xl" fontWeight="semibold" mb={2}>Why practices choose TechDr</Heading>
            <Text maxW="xl" color="gray.600" _dark={{ color: "gray.400" }} mb={8}>
              Built for healthcare. Transparent. Long-term.
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
              {whyUs.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="card-3d" borderWidth="1px" borderColor="gray.200" bg="white" _dark={{ borderColor: "whiteAlpha.200", bg: "gray.800" }} shadow="sm">
                    <CardBody p={5}>
                      <Flex h={10} w={10} align="center" justify="center" rounded="lg" bg="teal.50" color="teal.600" _dark={{ bg: "whiteAlpha.200", color: "teal.300" }} mb={3}>
                        <Icon size={20} />
                      </Flex>
                      <Heading as="h3" size="sm" fontWeight="medium" mb={1}>{item.title}</Heading>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{item.text}</Text>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>

        <Box id="how-we-work" bg="gray.50" _dark={{ bg: "whiteAlpha.50" }} py={14} px={{ base: 4, sm: 6 }}>
          <Container maxW="4xl">
            <Heading as="h2" size="xl" fontWeight="semibold" mb={2}>How we work</Heading>
            <Text maxW="xl" color="gray.600" _dark={{ color: "gray.400" }} mb={10}>
              Simple process. No one-size-fits-all   we tailor the plan to you.
            </Text>
            <Flex direction={{ base: "column", sm: "row" }} gap={6}>
              {howSteps.map((item) => (
                <Flex key={item.step} gap={4} flex={1} align="flex-start">
                  <Flex h={10} w={10} shrink={0} align="center" justify="center" rounded="full" bg="teal.500" color="white" fontSize="sm" fontWeight="semibold">
                    {item.step}
                  </Flex>
                  <Box>
                    <Heading as="h3" size="sm" fontWeight="semibold">{item.title}</Heading>
                    <Text mt={1} fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>{item.text}</Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Container>
        </Box>

        <Box id="who-we-work-with" borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={14} px={{ base: 4, sm: 6 }}>
          <Container maxW="4xl">
            <Heading as="h2" size="xl" fontWeight="semibold" mb={3}>Who we work with</Heading>
            <Text maxW="xl" color="gray.600" _dark={{ color: "gray.400" }} mb={6}>
              Our 200+ clients are across Hyderabad and India. You don't need to be a tech expert   just clear on what success looks like (more patients, fewer missed calls, stronger brand). We adapt to your speciality and size.
            </Text>
            <Wrap spacing={2}>
              {clientTypes.map((type) => (
                <WrapItem key={type}>
                  <Box
                    px={4}
                    py={1.5}
                    rounded="full"
                    borderWidth="1px"
                    borderColor="gray.200"
                    bg="gray.50"
                    _dark={{ borderColor: "whiteAlpha.200", bg: "whiteAlpha.100" }}
                    fontSize="sm"
                  >
                    {type}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Container>
        </Box>

        <Box id="faq" bg="gray.50" _dark={{ bg: "whiteAlpha.50" }} py={14} px={{ base: 4, sm: 6 }}>
          <Container maxW="6xl">
            <Heading as="h2" size="xl" fontWeight="semibold" mb={3}>FAQ</Heading>
            <Text color="gray.600" _dark={{ color: "gray.400" }} mb={8}>
              10 quick answers at a glance.
            </Text>

            {(() => {
              const faqs = [
                { q: "Timeline to go live?", a: "Typically ~4 weeks from onboarding to launch, depending on access and content readiness." },
                { q: "Separate Google Ads budget?", a: "Yes. Ad spend is separate from our management fee. We recommend a starting budget and optimise." },
                { q: "What is RWG?", a: "Reserve with Google enables in-search booking. We connect booking so slots and confirmations stay in sync." },
                { q: "WhatsApp automation?", a: "Confirmations, reschedules/cancellations, reminders, and feedback prompts can be automated." },
                { q: "Support after launch?", a: "Weekly reporting + dashboard access. Higher tiers include more hands-on support and a dedicated contact." },
                { q: "Content & creatives?", a: "We create GMB posts, ad copy, landing pages. Full creative production is available in higher tiers." },
                { q: "Report frequency?", a: "Weekly insights plus KPI dashboard. Optional short review call if you prefer." },
                { q: "Pause or cancel?", a: "Yes, with notice. Terms are outlined in the agreement so you’re not locked in long term." },
                { q: "Healthcare only?", a: "Yes. Healthcare-only focus helps optimise for patient search behaviour and clinic operations." },
                { q: "Start small and scale?", a: "Yes. Start with SEO or Ads+GMB, then add booking/automation once results and workflow are stable." },
              ];

              const renderCard = (faq: { q: string; a: string }) => (
                <Card
                  key={faq.q}
                  className="card-3d"
                  borderWidth="1px"
                  borderColor="gray.200"
                  bg="white"
                  _dark={{ borderColor: "whiteAlpha.200", bg: "gray.800" }}
                  shadow="sm"
                >
                  <CardBody p={4}>
                    <Heading as="h3" size="xs" mb={2}>{faq.q}</Heading>
                    <Text fontSize="xs" color="gray.600" _dark={{ color: "gray.400" }} lineHeight="tall">
                      {faq.a}
                    </Text>
                  </CardBody>
                </Card>
              );

              return (
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                  <Flex direction="column" gap={3}>
                    {faqs.slice(0, 5).map(renderCard)}
                  </Flex>
                  <Flex direction="column" gap={3}>
                    {faqs.slice(5, 10).map(renderCard)}
                  </Flex>
                </SimpleGrid>
              );
            })()}
          </Container>
        </Box>

        <Box borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={16} px={{ base: 4, sm: 6 }}>
          <Container maxW="5xl">
            <Flex direction="column" align="center" textAlign="center">
              <Heading as="h2" size={{ base: "lg", sm: "xl" }} fontWeight="semibold" mb={2}>
                Ready to grow your practice?
              </Heading>
              <Text maxW="xl" color="gray.600" _dark={{ color: "gray.400" }} mb={6}>
                See our full healthcare proposal   digital marketing and smart booking for doctors, clinics, and hospitals.
              </Text>
              <Button size="lg" colorScheme="teal" as={Link} href="/proposal" rightIcon={<ArrowRight size={18} />}>
                View full proposal
              </Button>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
}
