"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {
    opacity: 0,
    // y: 50,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      //   duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 mb-16 bg-white"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            Find your Dream Property Today!
          </p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis
            accusantium perferendis repellat consequatur dignissimos
            voluptatibus repellendus consectetur impedit nam. Hic in molestiae,
            distinctio consequatur aliquid repellat ex quibusdam eos?\
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {/* {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Trustworthy and Verified Listings",
                    "Browse Rental Listings with Ease",
                    "Simplify Your Rental Search with Advanvced",
                  ][index]
                }
                description={
                  [
                    "Discover the best rental options with user reviews and ratings",
                    "Get access to user reviews and ratings for a better understanding of rental options",
                    "Find trustworthy and verified rental listings to ensure a hassle-free experience",
                  ][index]
                }
                linkText={["Explore", "Search", "Discover"][index]}
                linkHref={["/explore", "/search", "/discover"][index]}
              />
            </motion.div>
          ))} */}
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Search for Properties",
              description:
                "Browse through our extensive collection of rental properties in your area",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Book your Rental",
              description:
                "Once you found the perfect rental property, easily book it online",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Enjoy your New Home",
              description: "Move into your new property and enjoy it",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center px-4 py-12 shadow-lg bg-primary-50 rounded-lg md:h-72">
      <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
        <Image
          src={imageSrc}
          width={30}
          height={30}
          alt=""
          className="w-full h-full "
        />
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default DiscoverSection;
