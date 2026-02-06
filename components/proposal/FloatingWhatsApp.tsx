"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { IconButton, Link } from "@chakra-ui/react";
import { WHATSAPP_NUMBER } from "@/lib/config";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      position="fixed"
      bottom={6}
      right={6}
      zIndex={50}
      _hover={{ textDecoration: "none" }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
      >
        <IconButton
          aria-label="Chat on WhatsApp"
          icon={<MessageCircle size={28} />}
          size="lg"
          w={14}
          h={14}
          rounded="full"
          bg="#25D366"
          color="white"
          shadow="lg"
          _hover={{ bg: "#20BD5A" }}
          _focus={{ ring: "2px", ringColor: "#25D366", ringOffset: "2px" }}
        />
      </motion.div>
    </Link>
  );
}
