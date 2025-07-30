'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TbPointFilled } from 'react-icons/tb';
import { IoChevronDownOutline } from 'react-icons/io5';

const TitleScrollDisplay = ({ title, number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 10 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-12 relative top-4 flex items-center justify-center  rounded-full gap-2 z-10 bg-fresh px-10 py-3">
        <p className="font-black">{number}</p>
        <TbPointFilled />
        <p>{title}</p>
        <IoChevronDownOutline size={20} />
      </div>
    </motion.div>
  );
};

export default TitleScrollDisplay;
