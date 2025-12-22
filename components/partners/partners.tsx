/** @format */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";
import { fadeUp, stagger } from "@/lib/motion";

export default function Partners() {
  return (
    <section className='py-24 px-6 bg-white/5'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mb-14'>
          <h2 className='text-3xl font-bold'>Partners & Collaborations</h2>
          <p className='mt-4 text-gray-400 max-w-2xl'>
            AIRI collaborates with leading government institutions,
            universities, and international organizations to advance artificial
            intelligence and digital innovation.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center'>
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className='group flex items-center justify-center p-6 rounded-2xl bg-[#0B0F1A] border border-white/10 hover:border-blue-500/40 transition'>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={60}
                className='opacity-70 group-hover:opacity-100 transition duration-300 grayscale group-hover:grayscale-0'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
