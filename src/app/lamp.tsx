"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Script from "next/script";

export function LampDemo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Recruitment end date
    const targetDate = new Date("2024-09-30T23:59:59");

    // Update the timer every second
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer); // Clear interval on unmount
  }, []);

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-20 bg-clip-text text-center text-4xl font-large tracking-tight text-transparent md:text-7xl"
      >
        <div>CODENEX SRMIST</div>
      </motion.h1>

      {/* New p element added above the timer */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="text-center text-gray-600 dark:text-gray-300 text-lg font-semibold mb-4"
      >
        Registration ends in
      </motion.p>

      {/* Countdown Timer in Blocks */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="my-6 flex justify-center items-center space-x-6"
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 font-bold text-3xl w-20 h-20 flex items-center justify-center rounded-md">
              {value}
            </div>
            <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm uppercase">
              {unit}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="mb-6"></div>

      <motion.a
        href="https://lu.ma/event/evt-6XkDzxArfTQUwQ4"
        className="luma-checkout--button inline-block text-center"
        data-luma-action="checkout"
        data-luma-event-id="evt-6XkDzxArfTQUwQ4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        Register for Event
      </motion.a>

      <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
        strategy="afterInteractive"
      />
    </LampContainer>
  );
}
