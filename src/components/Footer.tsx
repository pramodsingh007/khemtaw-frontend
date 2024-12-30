import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '/logo/khemtawLogo.png';
import khemtaw15 from '../assets/khemtaw15.jpeg';
import ios from '../assets/iOStore.png';
import android from '../assets/googlePlaystore.png'

export default function Footer() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <footer className="relative bg-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div 
                {...fadeInUp}
                className="space-y-4"
            >
                <img
                    src={Logo}
                    alt="Mealawe Logo"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                />
                <p className="text-gray-600 text-sm leading-relaxed">
                    At Khemtaw, we harness technology to create a healthier society by connecting you with the best homemade meals crafted with love by nearby home chefs.
                </p>
                <h4>Company Address :-</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                    C/o Geeta Devi Dumravn, Mau, Mau, Sadar, Uttar Pradesh, India, 275101
                </p>
                <div className="flex space-x-4">
                {[
                    { icon: Facebook, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Youtube, href: '#' },
                    { icon: Linkedin, href: '#' },
                ].map((social, index) => (
                    <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <social.icon className="w-4 h-4" />
                    </motion.a>
                ))}
                </div>
            </motion.div>

            {/* Company Links */}
            <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.1 }}
            >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Company</h3>
                <ul className="space-y-2">
                {['About us', 'Why us', 'Join Us', 'Careers', 'Contact Us'].map((item, index) => (
                    <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    >
                    <Link to="#" className="text-gray-600 hover:text-green-600 transition-colors">
                        {item}
                    </Link>
                    </motion.li>
                ))}
                </ul>
            </motion.div>

            {/* Information Links */}
            <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Information</h3>
                <ul className="space-y-2">
                {[
                    'Privacy Policy',
                    'Terms & Conditions',
                    'Cancellation & Refunds',
                    'Blogs'
                ].map((item, index) => (
                    <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    >
                    <Link to="#" className="text-gray-600 hover:text-green-600 transition-colors">
                        {item}
                    </Link>
                    </motion.li>
                ))}
                </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact us</h3>
                <div className="space-y-4">
                <motion.a
                    href="tel:+919665888488"
                    className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors"
                    whileHover={{ x: 5 }}
                >
                    <Phone className="w-5 h-5" />
                    <span>+91-9555359523</span>
                </motion.a>
                <motion.a
                    href="mailto:help@mealawe.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors"
                    whileHover={{ x: 5 }}
                >
                    <Mail className="w-5 h-5" />
                    <span>support@khemtaw.com</span>
                </motion.a>
                </div>
            </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-600 text-sm">
                Khemtaw Tiffin Centre Interprises Ltd. 2024 All rights reserved
                </p>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <span className="text-xl font-semibold text-gray-800">Download Now</span>
                <div className="flex space-x-4">
                    <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <img
                        src={ios}
                        alt="Download on App Store"
                        width={140}
                        height={42}
                        className="h-10 w-auto"
                    />
                    </motion.a>
                    <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <img
                        src={android}
                        alt="Get it on Google Play"
                        width={140}
                        height={42}
                        className="h-10 w-auto"
                    />
                    </motion.a>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Footer Over Decoration */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-16 sm:w-24 md:w-32">
            <img
                src={khemtaw15}
                alt="Footer Over decoration"
                width={120}
                height={120}
                className="w-full h-auto rounded-3xl animate-pulse"
            />
        </div>
        </footer>
    )
}
