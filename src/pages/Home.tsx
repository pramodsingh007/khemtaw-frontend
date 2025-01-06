import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import khemtaw17 from '../assets/khemtaw17.jpeg'
import khemtaw16 from '../assets/khemtaw16.jpeg'
import khemtaw18 from '../assets/khemtaw18.jpeg'
import khemtaw19 from '../assets/khemtaw19.jpeg'
import khemtaw14 from '../assets/khemtaw14.jpeg'
import newYear from '../assets/newYear.jpg';

const features = [
        {  
        title: "Khemtaw Web-App",
        description: "Visit the Khemtaw Tiffins Centre web application to sign up and conveniently place your order for delicious homemade food.",
        image: "/khemtawLogo.png",
        bgColor: "bg-[#FFF5EB]"
        },
        {
        title: "No Restaurant",
        description: "Home – made food served from nearby family kitchens. They are families like yours. We do not partner with restaurants or dhaba.",
        image: '/girlWithFood.png',
        bgColor: "bg-[#FFE1E8]"
        },
        {
        title: "Reliable Home Delivery",
        description: "We have a reliable door-to-door delivery. You can even place advance or subscription food orders. Our delivery takes care of the rest.",
        image: '/deliveryBoy.jpg',
        bgColor: "bg-[#FFF5EB]"
        }
    ]

export default function HeroSection() {
    return (
        <>
        <section className=" relative min-h-screen bg-gradient-to-br from-[#FFF5EB] via-[#fcf3c6] to-[#FFE1E8] overflow-hidden -mt-[85px] pb-28 sm:pb-0 rounded-lg ">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:h-screen gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 pt-16 lg:pt-0"
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="block text-gray-800">100%</span>
                <TypeAnimation
                    sequence={["Homemade", 2000, "Hygenic", 2000]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className=" lg:text-7xl text-5xl max-sm:text-4xl md:text-7xl text-blue-700 font-bold"
                />
                <span className="block text-gray-800">Meal is</span>
                <span className="block text-gray-800">Waiting For You</span>
                </h1>
                <p className="text-gray-800 text-lg sm:text-xl mb-8 leading-relaxed">
                Enjoy soulful, healthy, and delicious homemade meals prepared by talented chefs right from your neighborhood.
                </p>
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <Button 
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-700 mb-16 lg:mb-0 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg"
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
                className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-0"
            >
                {/* Pink Background Circle */}
                <div className="absolute inset-0 sm:bg-pink-100 rounded-full transform scale-110" />
                
                {/* Main Thali Image */}
                <motion.div
                // animate={{rotate: 360}}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="relative z-10"
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
                    className='absolute sm:top-[-65px] top-[-55px]'
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
                    className='absolute sm:bottom-[-65px] bottom-[13px]'
                    
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
                    className='absolute right-[0px] sm:bottom-[-65px] bottom-3'
                    
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
        <div className="fixed z-20 w-16 sm:w-24 md:w-32">
            <img
            src={newYear}
            alt="Christmas decoration"
            width={120}
            height={120}
            className="w-full h-auto rounded-full animate-pulse absolute top-20 right-7"
            />
        </div>
        </section>
        <section className="py-16 sm:py-24 bg-white overflow-hidden bg-gradient-to-bl from-[#FFE1E8] via-[#fcf3c6] to-[#FFF5EB]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                We DO NOT serve food from{' '}
                <span className="text-red-500">Restaurants!</span>
                </h2>
            </motion.div>
    
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {features.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Image Container */}
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-full mb-6 overflow-hidden ${feature.bgColor}`}
                    >
                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="p-4 object-fill rounded-full"
                    />
                    </motion.div>
    
                    {/* Text Content */}
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-sm"
                    >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                    </p>
                    </motion.div>
                </motion.div>
                ))}
            </div>
    
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute hidden sm:block"
                    animate={{
                    y: [0, -20, 0],
                    x: [0, 20, 0],
                    rotate: [0, 360],
                    }}
                    transition={{
                    duration: 15,
                    repeat: Infinity,
                    delay: i * 2,
                    }}
                    style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    }}
                >
                    <div 
                    className="w-3 h-3 rounded-full bg-gray-200 opacity-30"
                    />
                </motion.div>
                ))}
            </div>
            </div>
        </section>
    </>
    )
}