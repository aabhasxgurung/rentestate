"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        fill
        alt="CTA"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
      >
        <div className="flex flex-col justify-between items-center">
          <div className="mb-6 md:mb-0 ">
            <h2 className="text-2xl font-bold text-white capitalize">
              Find your dream rental property
            </h2>
          </div>
          <div>
            <p className="text-white mb-3 ">
              Discover a wide range of rental properties in your location
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-block text-primary-700 bg-white rounded-lg py-3 px-6 font-semibold hover:bg-primary-500 hover:text-primary-50"
            >
              Search
            </button>
            <Link
              href="/signup"
              className="inline-block text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600 "
              scroll={false}
            >
              Sign up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
