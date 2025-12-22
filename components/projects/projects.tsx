/** @format */

"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeUp, stagger } from "@/lib/motion";

export default function Projects() {
  return (
    <section className='py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mb-14'>
          <h2 className='text-3xl font-bold'>Key Projects</h2>
          <p className='mt-4 text-gray-400 max-w-2xl'>
            AIRI develops and leads strategic projects that support national
            digital infrastructure and artificial intelligence initiatives.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className='relative p-6 rounded-2xl bg-[#11162A] border border-white/10 hover:border-blue-500/40 transition'>
              {/* Tag */}
              <span className='inline-block mb-4 text-xs font-medium text-blue-400 uppercase tracking-wide'>
                {project.tag}
              </span>

              {/* Title */}
              <h3 className='text-xl font-semibold mb-3'>{project.title}</h3>

              {/* Description */}
              <p className='text-gray-400 text-sm leading-relaxed'>
                {project.description}
              </p>

              {/* Hover Accent */}
              <div className='pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-linear-to-br from-blue-500/10 to-transparent' />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
