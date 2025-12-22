/** @format */

"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { fadeUp, stagger } from "@/lib/motion";

export default function Stats() {
  return (
    <section className='py-20 px-6'>
      <motion.div
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className='text-center'>
            <div className='text-4xl font-bold text-blue-500'>{stat.value}</div>
            <p className='mt-2 text-gray-400'>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
