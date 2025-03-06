import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
const Container = ({ children, className = '' }) => (
  <div className={`container mx-auto px-4 ${className}`}>
    {children}
  </div>
);
const ProductSection = ({ id, title, tagline, number, description, features }) => {
  return (
    <div id={id} className="mb-16 scroll-mt-20">
      <div className="flex items-start mb-4">
        <div className="min-w-[3rem] w-12 h-12 aspect-square bg-[#E16B3B] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-4xl mb-2 leading-tight">{title}</h3>
          <h3 className="text-3xl mb-0 leading-tight text-[#E16B3B]">{tagline}</h3>
        </div>
      </div>
      <div className="ml-16">
        <p className="text-2xl text-[#1B3942] mb-6">{description}</p>
        <div className="border-l-2 border-solid border-[#E16B3B] p-6 bg-gray-50">
          <h4 className="text-lg font-semibold text-[#1B3942] mb-4">KEY FEATURES</h4>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="inline-flex min-w-[1.25rem] w-5 h-5 rounded-full border-4 border-[#1B3942] mr-3 flex-shrink-0"></span>
                <span className="text-xl text-[#1B3942]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const Products = () => {
  useEffect(() => {
    const handleScrollToAnchor = () => {
      const url = window.location.href;
      const parts = url.split('#');
      if (parts.length > 2) {
        const anchorId = parts[parts.length - 1];
        const element = document.getElementById(anchorId);

        if (element) {
          const headerOffset = 140;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };
    handleScrollToAnchor();
    window.addEventListener('hashchange', handleScrollToAnchor);
    return () => {
      window.removeEventListener('hashchange', handleScrollToAnchor);
    };
  }, []);
  const features = [
    {
      id: "InstructoGen",
      number: "01",
      title: "InstructoGen – Empower Educators, Effortlessly",
      tagline: "AI-Powered Course Creator",
      description: "Designing a high-quality course has never been easier. With InstructoGen, educators can generate structured, curriculum-aligned content with just a few inputs—while retaining complete control.",
      features: [
        "Choose from proven methodologies like Bloom's Taxonomy or customize your own",
        "Define modules, topics, and lessons with ease",
        "Fine-tune AI-generated content with teacher-driven prompts",
        "Seamlessly enrich courses with AI-suggested images, videos, and media",
        "Intuitive, educator-friendly interface with no technical complexity"
      ]
    },
    {
      id: "InstructoBoost",
      number: "02",
      title: "InstructoBoost – Turn Any Course into an AI-Powered Learning Hub",
      tagline: "AI-Based Course Enhancer",
      description: "Supercharge existing courses with engaging AI-driven activities. Whether it's a course built using InstructoGen or an existing LMS course, instructors can instantly enhance their content with quizzes, assignments, and discussions—perfectly aligned with learning objectives.",
      features: [
        "Launch the InstructoBoost inside Canvas and other popular LMS platforms",
        "Generate quizzes, assignments, and discussions that align with learning objectives",
        "Enhance existing courses without rebuilding from scratch",
        "Transform static content into interactive learning experiences",
        "Increase student engagement and participation with AI-powered activities"
      ]
    },
    {
      id: "InstructoEcho",
      number: "03",
      title: "InstructoEcho – Your 24/7 Smart Learning",
      tagline: "Student Assistant",
      description: "Students deserve instant, judgment-free support—whenever they need it. Our AI-powered Chatbot is context-aware, ensuring responses remain relevant to the course where it's launched.",
      features: [
        "Provide private and secure question-answering for students",
        "Eliminate peer pressure while gaining real-time assistance",
        "Clarify concepts and answer common queries instantly",
        "Reduce repetitive questions for educators",
        "Support diverse learning needs and paces"
      ]
    },
    {
      id: "InstructoPulse",
      number: "04",
      title: "InstructoPulse – Learn by Doing with AI-Powered Adaptation",
      tagline: "Practice Mode",
      description: "Traditional study methods fall short in personalization. InstructoPulse dynamically adjusts to student responses, providing context-based Q&A exercises tailored to LMS modules, pages, and activities.",
      features: [
        "The AI adapts based on accuracy and response time",
        "Provides interactive, personalized learning experiences",
        "Enables conversational AI discussions to deepen understanding",
        "Makes learning more engaging and effective",
        "Reinforces concepts through active practice"
      ]
    },
    {
      id: "InstructoGrade",
      number: "05",
      title: "InstructoGrade – Cuts Grading Time Drastically",
      tagline: "Auto Grader",
      description: "Grading shouldn't be a bottleneck. InstructoGrade eliminates the tediousness of manual assessment by providing instant, rubric-based grading suggestions with teacher review capabilities.",
      features: [
        "Evidence-based marking suggestions for teacher final review and approval",
        "Review AI-generated grading insights with a user-friendly interface",
        "Make adjustments where needed without spending hours reviewing submissions",
        "Focus on meaningful feedback while AI handles routine assessment",
        "Process large volumes of submissions efficiently"
      ]
    },
    {
      id: "InstructoNex",
      number: "06",
      title: "InstructoNex – AI Management, Fully in Your Control",
      tagline: "Admin Control Panel",
      description: "With centralized AI controls, administrators can customize AI settings for their institution. Enable AI for specific courses, set per-user AI token limits, choose preferred AI models, and even integrate custom AI APIs—all from one powerful dashboard.",
      features: [
        "Gain insights into feature adoption, ROI, and overall efficiency",
        "Ensure your AI strategy delivers real impact",
        "Monitor usage metrics across departments and courses",
        "Implement institution-wide AI policies consistently",
        "Make data-driven decisions about educational technology"
      ]
    }
  ];
  return (
    <div style={{ fontFamily: 'PT Serif', color: "#1B3942" }} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen bg-white">
          <section className="pt-20 pb-16 bg-gray-50">
            <Container>
              <div className="text-center w-full mx-auto">
                <h1 className="text-7xl mb-6">
                  <span className="relative">
                    Transform education with <span className='text-[#E16B3B]'>AI-Powered</span> tools
                  </span>
                </h1>
                <p className="text-2xl pt-4">
                  <div className='text-[#1B3942] pb-2'>The future of education is adaptive, personalized, and intelligent.</div>
                  <div className='text-[#E16B3B]'>Discover how our AI-powered suite can revolutionize your institution.</div>
                </p>
              </div>
            </Container>
          </section>
          <section className="py-20">
            <Container>
              <h2 className="text-5xl mb-8 leading-tight">
                Overview
              </h2>
              <p className="text-2xl mb-12">
                Explore our AI-powered solutions designed to enhance every aspect of education. From automating course creation to improving student engagement and streamlining administration, our tools bring efficiency, intelligence, and innovation to your LMS experience.
              </p>
              <div className="space-y-16">
                {features.map((feature, index) => (
                  <ProductSection
                    key={index}
                    id={feature.id}
                    number={feature.number}
                    title={feature.title}
                    tagline={feature.tagline}
                    description={feature.description}
                    features={feature.features}
                  />
                ))}
              </div>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Products;