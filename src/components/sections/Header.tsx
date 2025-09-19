"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Growth Agent", href: "#", hasDropdown: true },
    { label: "Platforms", href: "#" },
    { label: "Resources", href: "#" },
    { label: "About Us", href: "#" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container size="content" className="py-4 px-4" noPadding={true}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/logo.webp"
              alt="VideoFusion Logo"
              width={182}
              height={40}
              className="max-w-[181.614px] w-auto h-auto"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" style={{ gap: "60px" }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium flex items-center space-x-1 font-sf-pro"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Get Started Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg font-sf-pro"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-home-gradient bg-clip-text text-transparent">
                Get Started →
              </span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden mt-4 py-4 border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold self-start mt-4 bg-home-gradient">
                Get Started →
              </button>
            </div>
          </motion.nav>
        )}
      </Container>
    </motion.header>
  );
}
