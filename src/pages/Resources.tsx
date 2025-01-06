import React from 'react';
import { motion } from 'framer-motion';

const Resources: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-[85px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <p className="text-xl text-center max-w-2xl">
          Explore our collection of helpful resources, guides, and materials to make the most of our 3D tiffin service.
        </p>
      </motion.div>
    </div>
  );
};

export default Resources;

