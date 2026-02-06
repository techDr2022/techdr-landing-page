"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Card,
  CardHeader,
  CardBody,
  Container,
  Select as ChakraSelect,
  Spinner,
} from "@chakra-ui/react";
import { WHATSAPP_NUMBER, WHATSAPP_PREFILL } from "@/lib/config";

const serviceOptions = [
  "Digital Marketing",
  "Appointment Booking",
  "Both (Marketing + Booking)",
  "Not sure yet",
];

function buildWhatsAppMessage(name: string, phone: string, clinic: string, service: string) {
  const text = [
    WHATSAPP_PREFILL,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Clinic/Practice: ${clinic}`,
    `Service interested in: ${service}`,
  ].join("\n");
  return encodeURIComponent(text);
}

export function CTAForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clinic, setClinic] = useState("");
  const [service, setService] = useState("");
  const [touched, setTouched] = useState({ name: false, phone: false, clinic: false, service: false });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const errors = {
    name: !name.trim() && touched.name ? "Name is required" : "",
    phone: !phone.trim() && touched.phone ? "Phone is required" : "",
    clinic: !clinic.trim() && touched.clinic ? "Clinic name is required" : "",
    service: !service && touched.service ? "Please select a service" : "",
  };

  const isValid = !!name.trim() && !!phone.trim() && !!clinic.trim() && !!service;

  function handleBlur(field: keyof typeof touched) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, clinic: true, service: true });
    if (!isValid) return;

    setSubmitting(true);
    const message = buildWhatsAppMessage(name, phone, clinic, service);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <Box id="cta-form" borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} py={20} px={{ base: 4, sm: 6 }}>
      <Container maxW="5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }}>
          <Box mb={14} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="semibold" letterSpacing="tight" mb={3}>Ready to grow your practice with TechDr?</Heading>
            <Text maxW="xl" mx="auto" color="gray.600" _dark={{ color: "gray.400" }}>Share your details and we will get back with next steps.</Text>
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: 0.1 }}>
          <Flex direction={{ base: "column", lg: "row" }} gap={8} align={{ lg: "flex-start" }} justify="center">
            <Flex direction={{ base: "column", sm: "row", lg: "column" }} gap={4}>
              <Button size="lg" colorScheme="teal" leftIcon={<MessageCircle size={20} />} as="a" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                WhatsApp Now
              </Button>
              <Button size="lg" variant="outline" colorScheme="teal" leftIcon={<Calendar size={20} />} as="a" href="#cta-form">
                Schedule a Call
              </Button>
            </Flex>

            <Card flex={1} maxW="md" w="full" mx={{ base: "auto", lg: 0 }} borderWidth="1px" borderColor="gray.200" _dark={{ borderColor: "whiteAlpha.200" }} shadow="sm">
              <CardHeader>
                <Heading size="md">Quick enquiry</Heading>
                <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }} mt={1}>We will use this to reach out and send the proposal if needed.</Text>
              </CardHeader>
              <CardBody>
                {submitted ? (
                  <Box rounded="lg" borderWidth="1px" borderColor="gray.200" bg="gray.50" p={6} textAlign="center" fontSize="sm" color="gray.600" _dark={{ borderColor: "whiteAlpha.200", bg: "whiteAlpha.50", color: "gray.400" }}>
                    Thank you. We have opened WhatsApp with your details. Send the message to start the conversation.
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Flex direction="column" gap={4}>
                      <FormControl isInvalid={!!errors.name}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => handleBlur("name")} borderColor={errors.name ? "red.500" : undefined} />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.phone}>
                        <FormLabel htmlFor="phone">Phone</FormLabel>
                        <Input id="phone" type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={() => handleBlur("phone")} borderColor={errors.phone ? "red.500" : undefined} />
                        <FormErrorMessage>{errors.phone}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.clinic}>
                        <FormLabel htmlFor="clinic">Clinic / Practice name</FormLabel>
                        <Input id="clinic" placeholder="Clinic or hospital name" value={clinic} onChange={(e) => setClinic(e.target.value)} onBlur={() => handleBlur("clinic")} borderColor={errors.clinic ? "red.500" : undefined} />
                        <FormErrorMessage>{errors.clinic}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.service}>
                        <FormLabel>Service interested in</FormLabel>
                        <ChakraSelect placeholder="Select..." value={service} onChange={(e) => setService(e.target.value)} onBlur={() => handleBlur("service")} borderColor={errors.service ? "red.500" : undefined}>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </ChakraSelect>
                        <FormErrorMessage>{errors.service}</FormErrorMessage>
                      </FormControl>
                      <Button type="submit" w="full" colorScheme="teal" disabled={submitting} leftIcon={submitting ? <Spinner size="sm" /> : undefined}>
                        {submitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
                      </Button>
                    </Flex>
                  </form>
                )}
              </CardBody>
            </Card>
          </Flex>
        </motion.div>
      </Container>
    </Box>
  );
}
