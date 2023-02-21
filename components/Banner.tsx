"use client";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="max-w-7xl mx-auto mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-7xl noselect">
          Sayan&apos;s <span className="text-[#e07a5f]">Blog</span>
        </h1>
        <h2 className="noselect mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-[#F7AB0A] decoration-2 hover:decoration-4">
            Every Developer's & creative writer's
          </span>{" "}
          favorite portal!
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="noselect mt-5 max-w-sm text-gray-500 md:mt-2">
          New product features | The latest in technology | Creative Writings
          and more!
        </p>
      </motion.div>
    </div>
  );
}
export default Banner;
