import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import joinBgImage from '../assets/joinbg.jpeg';
import joinFeature from '../assets/joinFeature1.jpeg';
import joinFeature2 from '../assets/joinFeature2.jpeg';
import joinFeature3 from '../assets/joinFeature3.jpeg';
import { Button } from "@/components/ui/button";
import khemtaw1 from '../assets/khemtaw1.jpeg';
import khemtaw2 from '../assets/khemtaw2.jpeg';
import khemtaw3 from '../assets/khemtaw3.jpeg';
import khemtaw4 from '../assets/khemtaw4.jpeg';
import khemtaw5 from '../assets/khemtaw5.jpeg';
import khemtaw6 from '../assets/khemtaw6.jpeg';
import khemtaw7 from '../assets/khemtaw7.jpeg';
import khemtaw8 from '../assets/khemtaw8.jpeg';
import khemtaw9 from '../assets/khemtaw9.jpeg';
import khemtaw10 from '../assets/khemtaw10.jpeg';
import khemtaw11 from '../assets/khemtaw11.jpeg';
import khemtaw13 from '../assets/khemtaw13.jpeg';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const cities = [
    'Noida',
    'Prayagraj'
    ];

const benefits = [
    {
        title: "You are more than a homemaker",
        description: "Time has come to reward you for your cooking skills which has till date made your family happy.",
        icon: "../assets/joinFeature2.jpeg",
    },
    {
        title: "Become an entrepreneur sitting at home",
        description: "Just by registering as a home chef with us, you will have your own business sitting at home.",
        icon: "../assets/joinFeature3.jpeg"
    },
    {
        title: "Khemtaw will do the heavy lifting",
        description: "We will take care of all logistics requirements, packaging material, training, etc.",
        icon: "../assets/joinFeature1.jpeg"
    }
    ];

    // FAQ data
const faqs = [
        {
        question: "How we are ensuring quality of home-made food?",
        answer: "We have a strict quality control process and regular kitchen inspections to ensure the highest standards of food preparation and hygiene."
        },
        {
        question: "What about packaging items that will be required to pack food?",
        answer: "We provide all necessary packaging materials that meet food safety standards. This ensures consistent quality and presentation."
        },
        {
        question: "Why a home chef will require a FSSAI license?",
        answer: "FSSAI license is a legal requirement for all food businesses in India to ensure food safety and hygiene standards are maintained."
        },
        {
        question: "What is FSSAI?",
        answer: "FSSAI (Food Safety and Standards Authority of India) is a regulatory body that ensures food safety and quality standards in India."
        },
        {
        question: "What are the charges for FSSAI license?",
        answer: "The charges vary based on the type of license required. We'll guide you through the process and help you understand the applicable fees."
        },
        {
        question: "Can I place instant home-food order?",
        answer: "Yes, you can place instant orders through our app, subject to chef availability in your area."
        },
        {
        question: "How Khemtaw will earn?",
        answer: "Khemtaw takes a small service fee from each order to maintain the platform and provide support services."
        }
    ]


    // Separate 3D text component
    const Text3DScene = () => {
    const textRef = useRef();

    useFrame(({ clock }) => {
        if (textRef.current) {
        textRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2;
        textRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.2;
        }
    });

    return (
        <>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Text
            ref={textRef}
            fontSize={3}
            color="#10B981"
            anchorX="center"
            anchorY="middle"
        >
            Join Us
        </Text>
        </>
    );
    };

    const JoinUs: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="relative min-h-screen overflow-hidden -mt-[85px]">
        {/* Background with parallax effect */}
        <motion.div
            className="absolute inset-0 z-0 "
            style={{
            backgroundImage: `url(${joinBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
        />

        {/* Content Container */}
        <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Form Section */}
            <motion.div
                className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                >
                Register as a Home-Chef Today{' '}
                <span className="text-emerald-500">FREE</span>
                <span className="text-sm align-super">*</span>!
                </motion.h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                    className="space-y-4 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Your Mobile No."
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <select
                        name="city"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                        value={formData.city}
                        onChange={handleChange}
                    >
                        <option value="">--Choose Your City--</option>
                        {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                        ))}
                    </select>
                    </div>
                </motion.div>

                <motion.button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transform transition-all hover:scale-105 active:scale-95"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    SUBMIT
                </motion.button>
                </form>
            </motion.div>

            {/* Video Section */}
            <motion.div
                className="space-y-6 z-10"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/HCQCoEQDjBk?si=MXiHXopfeH-E5GVJ"
                    title="Khemtaw Tiffins Home Chef - A Journey Worth Sharing"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
                </div>

                <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                    <motion.div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <img
                        src={joinFeature}
                        alt={`Feature ${index}`}
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                ))}
                </div>
            </motion.div>
            </div>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0">
            <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
            >
            <motion.path
                initial={{ d: "M0,64L1440,32L1440,120L0,120Z" }}
                animate={{ d: "M0,32L1440,96L1440,120L0,120Z" }}
                transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
                ease: "easeInOut"
                }}
                fill="#ffffff"
            />
            </svg>
        </div>

        {/* 3D Text Canvas */}
        <div className="fixed top-0 left-0 w-full h-full -z-20 opacity-20">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Text3DScene />
            </Canvas>
        </div>
        <section className="relative bg-black min-h-screen w-full overflow-hidden">
        {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute w-full h-full bg-[url('/spices-pattern.png')] bg-repeat opacity-30" />
                <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Floating Dots Animation */}
            <div className="absolute inset-0 overflow-hidden hidden sm:block">
                {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                    animate={{
                    y: [-10, -30, -10],
                    opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    }}
                    style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    }}
                />
                ))}
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-24">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
                    Why Become Home Chef With Us?
                    </h1>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400">
                        You are more than a homemaker
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Time has come to reward you for your cooking skills which has till date made your family happy. Once you join Khemtaw as home chef, you only have to serve a small amount of food that you are cooking on a daily basis.
                    </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-lg mx-auto"
                >
                    <img
                    src={joinFeature2}
                    alt="Chef with traditional dishes"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain rounded-xl"
                    />
                </motion.div>
                </div>

                {/* Entrepreneur Section */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-2 lg:order-1"
                >
                    <img
                    src={joinFeature3}
                    alt="Group of home chefs"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-xl"
                    />
                </motion.div>
                <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 lg:space-y-8">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8"
                    >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-4">
                        Become an entrepreneur sitting at home
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Yes, you heard it right! Just by registering home chef with us, you will have your own business sitting at home. An amazing opportunity to earn & grow with us.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8"
                    >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-4">
                    Khemtaw will do the heavy lifting
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Khemtaw will take care of all logistics requirements. We will even help you with packaging material, training, etc. Rest assured, you will be covered in any possible way.
                    </p>
                    </motion.div>
                </div>
                </div>

                {/* Over Image Decoration */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8">
                <img
                    src={joinFeature}
                    alt="Over Image decoration"
                    width={120}
                    height={120}
                    className="w-16 sm:w-24 md:w-32 rounded-full animate-bounce"
                />
                </div>
            </div>
        </section>
        <section className="relative bg-black w-full overflow-hidden py-8 sm:py-12 lg:py-24">
            {/* Healthy Nation Section */}
            <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 lg:mb-24">
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
                >
                <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                    Contribute to a healthy nation
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg">
                    Home chefs are the core essence of Khemtaw. You are one who will build a healthy society and eventually contribute to a healthy nation.
                    </p>
                </div>
                <div className="relative max-w-md mx-auto md:max-w-none">
                    <img
                    src={khemtaw1}
                    alt="Healthy nation illustration"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                    />
                </div>
                </motion.div>
            </div>

            {/* How It Works Section */}
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                <span className="text-red-500 text-sm sm:text-base font-semibold mb-2 sm:mb-4 block">HOW IT WORKS?</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-400 mb-4 sm:mb-6">
                    Register as a home chef with us in 4 easy steps
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
                    You will have to register with us & rest we will take care of. After you are enrolled, you will have access to the Khemtaw home chef app from which you can accept orders.
                </p>
                </motion.div>

                {/* Timeline Steps */}
                <div className="relative max-w-5xl mx-auto">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 hidden lg:block" />
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Step 1 */}
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-xl p-4 sm:p-6 relative z-10"
                    >
                    <div className="absolute -top-4 left-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        1
                    </div>
                    <div className="relative h-32 sm:h-40 mb-4">
                        <img
                        src={khemtaw2}
                        alt="Registration process"
                        className="object-contain rounded-xl max-sm:h-28"
                        />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Register on our website or on app
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                        You can register here on the website or download our home chef app directly from Apple Store or Google play store and fill up your details.
                    </p>
                    <Button variant="outline" className="mt-3 sm:mt-4 w-full sm:w-auto bg-teal-50 hover:bg-teal-100 text-sm sm:text-base">
                        Register Now
                    </Button>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-xl p-4 sm:p-6 relative z-10"
                    >
                    <div className="absolute -top-4 left-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        2
                    </div>
                    <div className="relative h-32 sm:h-40 mb-4">
                        <img
                        src={khemtaw3}
                        alt="Representative contact"
                        className="object-contain rounded-xl max-sm:h-28"
                        />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Our representative will contact you
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                        Our representative will contact and fix up an appointment to visit your kitchen. This is done to complete a set of formalities.
                    </p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white rounded-xl p-4 sm:p-6 relative z-10"
                    >
                    <div className="absolute -top-4 left-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        3
                    </div>
                    <div className="relative h-32 sm:h-40 mb-4">
                        <img
                        src={khemtaw4}
                        alt="FSSAI certification"
                        className="object-contain rounded-xl max-sm:h-28"
                        />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        Get your kitchen FSSAI certified
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                        We will help you to get FSSAI certification for your kitchen and all food items that you would be serving to our customer.
                    </p>
                    </motion.div>

                    {/* Step 4 */}
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white rounded-xl p-4 sm:p-6 relative z-10"
                    >
                    <div className="absolute -top-4 left-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        4
                    </div>
                    <div className="relative h-32 sm:h-40 mb-4">
                        <img
                        src={khemtaw5}
                        alt="Final onboarding"
                        className="object-contain rounded-xl max-sm:h-28"
                        />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        You are all set to become as home chef with Khemtaw
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                        Start your journey as a certified home chef and grow your business with Khemtaw.
                    </p>
                    </motion.div>
                </div>
                </div>
            </div>

            {/* Floating Elements Animation - Optimized for performance */}
            <div className="absolute inset-0 pointer-events-none hidden sm:block">
                {[...Array(8)].map((_, i) => (
                <motion.img
                    key={i}
                    src={khemtaw6}
                    alt=""
                    className="absolute w-6 sm:w-8 h-6 sm:h-8 opacity-20 rounded-3xl"
                    animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                    }}
                    transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear"
                    }}
                    style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    }}
                />
                ))}
            </div>

            {/* Image Over Decoration - Responsive positioning */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 w-16 sm:w-24 md:w-32">
                <img
                src={khemtaw7}
                alt="Image Over decoration"
                width={120}
                height={120}
                className="w-full h-auto rounded-full animate-bounce"
                />
            </div>
        </section>
        <section className="relative bg-gradient-to-b from-black to-gray-900 min-h-screen w-full overflow-hidden py-12 sm:py-16 lg:py-24">
        {/* FAQ Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
            >
                <span className="text-red-500 text-sm sm:text-base font-semibold mb-2 block">FAQ'S</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400 mb-4">
                Have any questions?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                You may find most of the common questions answered in this section. However, if you still have additional queries, then you may get in touch with us anytime with help of the chat window or{' '}
                <a href="#contact" className="text-teal-400 hover:text-teal-300 transition-colors">
                    contact us
                </a>{' '}
                page.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                <img
                src={khemtaw8}
                alt="FAQ Illustration"
                width={400}
                height={300}
                className="w-full h-auto rounded-2xl"
                />
            </motion.div>
            </div>
        </div>

        {/* FAQ Accordion */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
            >
            <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-lg overflow-hidden"
                >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-gray-800 text-sm sm:text-base font-medium">
                        {faq.question}
                    </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 text-sm sm:text-base">
                        {faq.answer}
                    </p>
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            </motion.div>
        </div>

        {/* Registration Form */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
            >
            <div className="bg-gradient-to-r from-orange-200 to-orange-300 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/spices-pattern.png')] opacity-10" />
                
                <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                    Join Us & Start Earning
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                    placeholder="Full Name"
                    className="bg-white/90 border-0"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                    
                    <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/90 border-0"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    
                    <Input
                    type="tel"
                    placeholder="Your Mobile No."
                    className="bg-white/90 border-0"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                    
                    <Select 
                        onValueChange={(value) => setFormData({...formData, city: value})}
                    >
                        <SelectTrigger className="bg-white/90 border-0">
                            <SelectValue placeholder="--Choose Your City--" />
                        </SelectTrigger>
                        <SelectContent>
                            {cities.map((city) => (
                            <SelectItem key={city} value={city.toLowerCase()}>
                                {city}
                            </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    
                    <Button 
                    type="submit" 
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    >
                    SUBMIT
                    </Button>
                </form>
                </div>

                {/* Decorative Elements */}
                <div className="absolute left-4 bottom-4">
                <img
                    src={khemtaw9}
                    alt=""
                    width={60}
                    height={60}
                    className="opacity-50 rounded-3xl animate-pulse"
                />
                </div>
                <div className="absolute right-4 bottom-4">
                <img
                    src={khemtaw13}
                    alt=""
                    width={80}
                    height={80}
                    className="opacity-30 rounded-3xl animate-pulse"
                />
                </div>
            </div>
            </motion.div>
        </div>

        {/* Image Over Decoration */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-16 sm:w-24 md:w-32">
            <img
            src={khemtaw10}
            alt="Image Over decoration"
            width={120}
            height={120}
            className="w-full h-auto rounded-full animate-bounce"
            />
        </div>

        {/* Floating Food Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute"
                animate={{
                y: [0, -30, 0],
                x: [0, 30, 0],
                rotate: [0, 360],
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
                src={khemtaw11}
                alt=""
                width={40}
                height={40}
                className="opacity-20 rounded-full"
                />
            </motion.div>
            ))}
        </div>
        </section>
        </div>
    );
    };

export default JoinUs;

