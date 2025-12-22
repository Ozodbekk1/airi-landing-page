/** @format */

"use client";

import { motion } from "framer-motion";
import { researchAreas } from "@/data/research";
import { fadeUp } from "@/lib/motion";

export default function Research() {
  return (
    <section className='py-24 px-6 bg-white/5'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12'>Research Directions</h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {researchAreas.map((area) => (
            <motion.div
              key={area}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className='p-6 rounded-2xl bg-[#11162A] border border-white/10'>
              <h3 className='text-xl font-semibold'>{area}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
