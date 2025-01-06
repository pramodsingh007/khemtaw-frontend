import { motion } from 'framer-motion'
import BackGround from '/whyusBackg.jpg';
import curryImage from '../assets/curryImage.png';
import womenKitchen from '../assets/womenKitchen.png';
import fssaiCertified from '../assets/fssaiCertified.png';

export default function WhyUsSection() {
    return (
        <>
        <section className="relative w-full min-h-screen overflow-hidden -mt-44">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
            <img
            src={BackGround}
            alt="Wooden background"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 lg:-mt-28">
            <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 mb-12 lg:mb-0"
            >
                <h2 className="text-blue-500 font-extrabold text-lg sm:text-xl mb-4">WHY US?</h2>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Because you are your own being!
                </h3>
                <p className="text-white text-lg sm:text-xl leading-relaxed max-w-xl">
                Experience the perfect blend of health and flavor with every bite of our homemade meals. At Khemtaw, we bring you a unique twist on home-cooked food, crafted to delight your taste buds and nourish your body
                </p>
            </motion.div>

            {/* Image Content */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 relative -mt-20 sm:-mt-0"
            >
                <img
                src={curryImage}
                alt="Food composition"
                width={600}
                height={400}
                className="w-full h-auto"
                />
            </motion.div>
            </div>
        </div>

        {/* Bottom Curve
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 112C120 104 240 88 360 80C480 72 600 72 720 76C840 80 960 88 1080 92C1200 96 1320 96 1380 96L1440 96V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
        </div> */}

        {/* Floating Elements */}
        {[...Array(10)].map((_, i) => (
            <motion.div
            key={i}
            className="absolute hidden sm:block"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            }}
            animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
            }}
            >
            <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-pink-500' : 'bg-green-500'}`} />
            </motion.div>
        ))}
        <div>   
        </div>
        </section>

        {/* New Section */}
        <section className=' w-full min-h-screen overflow-hidden mt-2'>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col lg:flex-row items-center bg-white rounded-xl overflow-hidden shadow-2xl"
                >
                {/* Illustration */}
                <div className="lg:w-1/2 p-8">
                    <img
                    src={womenKitchen}
                    alt="Home kitchen illustration"
                    className="w-full h-auto rounded-xl"
                    />
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2 p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-4">
                    Say goodbye to unhealthy fast food and outside meals
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Our neighborhood kitchens will prepare and serve meals just as they would for their own families.
                    </p>
                    <p className="text-gray-700 mb-4">
                        You can be confident that you'll enjoy wholesome, home-cooked meals made with care and love. Plus, all our home kitchens are fully FSSAI certified.
                    </p>
                    <div className="flex items-center">
                    <img
                        src={fssaiCertified}
                        alt="FSSAI Certified"
                        className="w-16 h-16 mr-4 rounded-full"
                    />
                    <span className="text-green-600 font-semibold">100% FSSAI Certified</span>
                    </div>
                    {/* Floating Elements */}
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                        key={i}
                        className="absolute hidden sm:block"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.2,
                        }}
                        >
                        <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-pink-500' : 'bg-green-500'}`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
        </>
    )
}

