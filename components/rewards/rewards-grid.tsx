"use client";
import { motion } from "framer-motion";
import RewardCard from "./reward-card";

interface RewardsGridProps {
  title: string;
  rewards: { 
    id: string; 
    titulo: string;  
    dia: string;   
    imagen: string;  
    descripcion: string; 
  }[];
  isLoading: boolean;
  error?: string;
  message?: string;
}

export default function RewardsGrid({
  title,
  rewards,
  isLoading,
  error
}: RewardsGridProps) {
  return (
    <section className="py-12 container mx-auto px-4 font-nunito">
      <motion.div
        className="bg-[#E67E22] rounded-[2rem] p-8 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-black text-black text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="perspective"
            >
              <RewardCard
                title={reward.titulo} 
                days={reward.dia} 
                image={reward.imagen}
                description={reward.descripcion} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
