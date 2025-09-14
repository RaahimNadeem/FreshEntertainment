"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\n` +
      `Email: ${formState.email}\n\n` +
      `Message:\n${formState.message}\n\n` +
      `---\n` +
      `This message was sent from the Fresh Entertainment contact form.`
    );
    
    const mailtoLink = `mailto:Info@adba-sa.com?subject=${subject}&body=${body}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
    
    // Optional: Reset form after opening email client
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen mt-8 justify-center flex flex-col md:flex-row text-[#f6f5ef]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Left Column */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 md:space-y-16 max-w-2xl mx-auto md:mx-0"
        variants={containerVariants}
      >
        {/* Quirky Message */}
        <motion.div className="w-full" variants={itemVariants}>
          <p className="text-lg sm:text-xl md:text-2xl mb-4">We genuinely care about you and your events. Let us know how we can serve you better.</p>
        </motion.div>
        {/* Socials */}
        {/* <motion.div className="w-full" variants={itemVariants}>
          <h3 className="font-bold uppercase text-xs mb-2 tracking-widest">Social Links</h3>
          <ul className="space-y-2 text-base sm:text-lg">
            <motion.li 
              className="flex items-center space-x-2"
              whileHover={{ x: 10, color: "#E1306C" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <InstagramIcon />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </motion.li>
            <motion.li 
              className="flex items-center space-x-2"
              whileHover={{ x: 10, color: "#1DA1F2" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <TwitterIcon />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            </motion.li>
            <motion.li 
              className="flex items-center space-x-2"
              whileHover={{ x: 10, color: "#0A66C2" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <LinkedinIcon />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </motion.li>
          </ul>
        </motion.div> */}
        {/* Form */}
        <motion.div className="w-full" variants={itemVariants}>
          <h3 className="font-bold uppercase text-xs mb-2 tracking-widest">Contact Form</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input 
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                className="w-full border-b border-[#f6f5ef] bg-transparent py-2 px-1 focus:outline-none placeholder:text-[#f6f5ef]/70 focus:border-[#73e0a8] transition-colors duration-300" 
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input 
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Your Email" 
                className="w-full border-b border-[#f6f5ef] bg-transparent py-2 px-1 focus:outline-none placeholder:text-[#f6f5ef]/70 focus:border-[#73e0a8] transition-colors duration-300" 
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <textarea 
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                className="w-full border-b border-[#f6f5ef] bg-transparent py-2 px-1 focus:outline-none placeholder:text-[#f6f5ef]/70 focus:border-[#73e0a8] transition-colors duration-300" 
                rows={3}
              ></textarea>
            </motion.div>
            <motion.button 
              type="submit" 
              className="mt-2 px-6 py-2 border border-[#f6f5ef] rounded-full hover:bg-[#f6f5ef] hover:text-[#1e2321] transition relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Send</span>
              <motion.div 
                className="absolute inset-0 bg-[#f6f5ef] -z-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      {/* Right Column */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 border-t md:border-t-0 relative"
        variants={containerVariants}
      >
        <motion.div 
          className="w-full max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-none tracking-tight mb-4 group">
            <motion.span 
              className="inline-block"
              whileHover={{ rotate: -2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              DROP
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              whileHover={{ rotate: 2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              US
            </motion.span>
            <div className="flex items-center">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mr-4 md:mr-6 transform group-hover:rotate-12 transition-all duration-500" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                    stroke="#f6f5ef" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#73e0a8] transition-colors duration-500"
                  />
                  <path 
                    d="M22 6L12 13L2 6" 
                    stroke="#f6f5ef" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#73e0a8] transition-colors duration-500"
                  />
                  <path 
                    d="M4 4L12 12L20 4" 
                    stroke="#f6f5ef" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#73e0a8] transition-colors duration-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Easter egg: Hidden smiley face that appears on hover */}
                  <circle 
                    cx="12" 
                    cy="12" 
                    r="2" 
                    fill="#f6f5ef" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
                  />
                </svg>
                <div className="absolute inset-0 bg-[#73e0a8]/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              </motion.div>
              <div className="relative">
                <motion.span 
                  className='ml-4 md:ml-6 text-4xl sm:text-5xl md:text-7xl lg:text-9xl transition-colors duration-500 inline-block'
                  whileHover={{ rotate: -2, scale: 1.05, color: "#73e0a8" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  A
                </motion.span>
                {" "}
                <motion.span 
                  className='text-4xl sm:text-5xl md:text-7xl lg:text-9xl transition-colors duration-500 inline-block'
                  whileHover={{ rotate: 2, scale: 1.05, color: "#73e0a8" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  LINE
                </motion.span>
              </div>
            </div>
          </h1>
          <motion.a 
            href="mailto:Info@adba-sa.com" 
            className="block mt-6 sm:mt-8 text-xl sm:text-2xl underline decoration-[#f6f5ef] underline-offset-4 hover:text-[#ff6633] transition-all duration-500 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 inline-block group-hover:scale-105 transition-transform duration-500">
              Info@adba-sa.com
            </span>
            <div className="absolute inset-0 bg-[#ff6633]/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
            <motion.span 
              className="absolute -bottom-6 left-0 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              (We promise to reply quick!)
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact 