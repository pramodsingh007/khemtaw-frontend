import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import khemtaw17 from '../assets/khemtaw17.jpeg'
import khemtaw16 from '../assets/khemtaw16.jpeg'
import khemtaw18 from '../assets/khemtaw18.jpeg'
import khemtaw19 from '../assets/khemtaw19.jpeg'
import khemtaw14 from '../assets/khemtaw14.jpeg'
import Christmas from '../assets/chrismas.jpg'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#FFF5EB] via-[#FFF] to-[#FFE1E8] overflow-hidden -mt-44">
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left max-w-xl"
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="block">100%</span>
                <TypeAnimation
                    sequence={["Homemade", 2000, "Hygenic", 2000]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className=" lg:text-7xl text-5xl max-sm:text-4xl md:text-7xl text-[#5ba829] font-bold"
                />
                <span className="block">Meal is</span>
                <span className="block">Waiting For You</span>
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed">
                Enjoy soulful, healthy, and delicious homemade meals prepared by talented chefs right from your neighborhood.
                </p>
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <Button 
                    size="lg"
                    className="bg-[#5BA829] hover:bg-[#4A8A20] text-white text-lg px-8 py-6 rounded-full"
                >
                    Order Now
                </Button>
                </motion.div>
            </motion.div>

            {/* Right Column - Food Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                {/* Pink Background Circle */}
                <div className="absolute inset-0 bg-pink-100 rounded-full transform scale-125" />
                
                {/* Main Thali Image */}
                <motion.div
                // animate={{rotate: 360}}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="relative"
                >
                <img
                    src={khemtaw17}
                    alt="Indian Thali with various dishes"
                    width={600}
                    height={600}
                    className="relative z-10 w-full h-auto rounded-full"
                />
                </motion.div>

                {/* Connected Dishes */}
                <motion.div
                    className='absolute top-[-65px]'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 , rotate:360}}
                    transition={{ delay: 0.2 }}
                >
                    <img
                    src={khemtaw16}
                    alt={``}
                    width={120}
                    height={120}
                    className="w-24 sm:w-32 h-auto rounded-3xl"
                    />
                    {/* Connecting Lines */}
                    <div className="absolute inset-0 bg-pink-200 h-1 transform rotate-45 origin-left" />
                </motion.div>
                <motion.div
                    className='absolute bottom-[-65px]'
                    
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, rotate:360 }}
                    transition={{ delay: 0.2 }}
                >
                    <img
                    src={khemtaw19}
                    alt={``}
                    width={120}
                    height={120}
                    className="w-24 sm:w-32 h-auto rounded-3xl"
                    />
                    {/* Connecting Lines */}
                    <div className="absolute inset-0 bg-pink-200 h-1 transform rotate-45 origin-left" />
                </motion.div>
                <motion.div
                    className='absolute right-[0px] bottom-[-65px]'
                    
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, rotate:360 }}
                    transition={{ delay: 0.2 }}
                >
                    <img
                    src={khemtaw18}
                    alt={``}
                    width={120}
                    height={120}
                    className="w-24 sm:w-32 h-auto rounded-3xl"
                    />
                    {/* Connecting Lines */}
                    <div className="absolute inset-0 bg-pink-200 h-1 transform rotate-45 origin-left" />
                </motion.div>
            </motion.div>
            </div>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute"
                animate={{
                y: [0, -30, 0],
                x: [0, 30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                }}
                transition={{
                duration: 20,
                repeat: Infinity,
                delay: i * 2,
                }}
                style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                }}
            >
                <img
                src={khemtaw14}
                alt=""
                width={20}
                height={20}
                className="opacity-20"
                />
            </motion.div>
            ))}
        </div>

        {/* Christmas Decoration */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-16 sm:w-24 md:w-32">
            <img
            src={Christmas}
            alt="Christmas decoration"
            width={120}
            height={120}
            className="w-full h-auto rounded-full animate-pulse"
            />
        </div>
        </section>
    )
}