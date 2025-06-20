import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Menu, X, Twitter, Facebook, Linkedin, Youtube, ChevronDown, Phone } from 'lucide-react';
const Container = ({ children, className = '' }) => (
    <div className={`container mx-auto px-4 ${className}`}>
        {children}
    </div>
);
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Mission', href: '#mission' },
        { label: 'Products', href: '#products' },
        { label: 'Features', href: '#values' },
    ];
    const socialLinks = [
        { icon: <Twitter size={16} />, label: "Twitter", href: "https://x.com/InstructoH75197" },
        { icon: <Facebook size={16} />, label: "Facebook", href: "https://www.facebook.com/people/InstructoHub/61572722776722/" },
        { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/company/instructohub" },
        { icon: <Youtube size={16} />, label: "Youtube", href: "https://www.youtube.com/@Instructo-Hub" }
    ];
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleClick = (e, href) => {
        e.preventDefault();
        if (href.includes("/")) {
            window.location.href = href;
            return;
        }
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            <div className="w-full">
                <div className="h-12 md:block hidden" />
                <div className="h-16" />
            </div>
            <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
                <div className="bg-secondary text-white py-3 hidden md:block">
                    <Container>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-8">
                                <a href="mailto:ankit@instructohub.com" className="flex items-center gap-2 text-gray-300 hover:text-brand transition-colors">
                                    <Mail size={16} />
                                    <span>ankit@instructohub.com</span>
                                </a>
                                <a href="tel:+919810206863" className="flex items-center gap-2 text-gray-300 hover:text-brand transition-colors">
                                    <Phone size={16} />
                                    <span>+919810206863</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-brand transition-colors">
                                    <MapPin size={16} />
                                    <span>Noida, UP, India</span>
                                </a>
                            </div>
                            <div className="flex gap-6">
                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="text-gray-300 hover:text-brand transition-colors"
                                        aria-label={item.label}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
                <div className={`bg-white border-b py-4 ${isScrolled ? 'border-gray-200' : 'border-transparent'}`}>
                    <Container>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-6">
                                <button
                                    className="md:hidden text-secondary-700 hover:text-brand transition-colors"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                                <a href="/" className="text-2xl font-bold">
                                    <img src="https://static.instructohub.com/staticfiles/assets/images/website/Instructo_hub_logo.png" alt="Logo" className="h-8" />
                                </a>
                            </div>
                            <nav className="hidden md:flex items-center gap-8">
                                {menuItems.map((item) => (
                                    <div key={item.label} className="relative group">
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleClick(e, item.href)}
                                            className="flex items-center gap-1 text-secondary-700 hover:text-brand transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
                                        >
                                            {item.label}
                                            {item.subItems && <ChevronDown size={16} />}
                                        </a>
                                    </div>
                                ))}
                            </nav>
                            <div className="flex items-center gap-6">
                                <button
                                    className="hidden md:block px-6 py-2.5 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors shadow-md hover:shadow-lg"
                                    onClick={()=>window.location.href = "/register"}
                                >
                                    Get Your LMS Now
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t shadow-lg">
                        {menuItems.map((item, index) => (
                            <div key={item.label} className={index !== 0 ? "border-t border-gray-100" : ""}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="block px-6 py-4 text-secondary-700 hover:bg-gray-50 hover:text-brand transition-colors"
                                >
                                    {item.label}
                                </a>
                            </div>
                        ))}
                        <div className="border-t border-gray-100 p-6">
                            <button
                                className="w-full px-6 py-3 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors shadow-md"
                                onClick={openModal}
                            >
                                View in Action
                            </button>
                            <div className="mt-6 flex justify-center gap-8">
                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="text-gray-500 hover:text-brand transition-colors"
                                        aria-label={item.label}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </header>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="relative w-full max-w-5xl mx-4">
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-brand transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                        <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/-W2h0I7xdso"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Header;