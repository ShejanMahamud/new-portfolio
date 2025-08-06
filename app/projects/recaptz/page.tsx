"use client";

import MotionPath from "@/components/WavyLine";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaletteIcon from "@mui/icons-material/Palette";
import SecurityIcon from "@mui/icons-material/Security";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Page() {
  // Section refs for scroll tracking
  const featuresSection1Ref = useRef(null);
  const featuresSection2Ref = useRef(null);

  // Scroll progress values for each section
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: featuresSection1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: featuresSection2Ref,
    offset: ["start end", "end start"],
  });

  // Smooth the scroll progress values
  const smoothProgress1 = useSpring(scrollYProgress1, {
    stiffness: 1000,
    damping: 30,
  });
  const smoothProgress2 = useSpring(scrollYProgress2, {
    stiffness: 100,
    damping: 30,
  });

  // Parallax function
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  // Create parallax transformation values
  const imageYTransform1 = useParallax(smoothProgress1, -80);
  const imageYTransform2 = useParallax(smoothProgress2, -80);

  return (
    <div>
      <MotionPath
        shape={0}
        className="top-[800px] md:top-[1200px] z-0"
        color="#3b82f6"
      />
      <section className="container mx-auto px-4 pt-5 md:pt-20 pb-10 md:pb-20 text-center">
        <h1 className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 font-display">
          <span className="text-5xl font-bold text-blue-600 md:text-6xl">
            ReCAPTZ
          </span>
          <span className="text-2xl font-medium text-blue-600 md:text-3xl">
            MODERN CAPTCHA COMPONENT
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed opacity-75">
          A modern, customizable CAPTCHA component for React applications with
          TypeScript support. This package provides multiple CAPTCHA types,
          validation rules, and a beautiful UI out of the box. Features include
          dark mode support, accessibility features, audio support, and
          extensive customization options. 🚀
        </p>
      </section>

      <section
        ref={featuresSection1Ref}
        className="container flex flex-col md:flex-row gap-28 sm:gap-0 items-center justify-center overflow-hidden pb-[40px] md:pb-0 z-50"
      >
        <motion.div
          className="relative mx-auto px-4"
          style={{ y: imageYTransform1 }}
        >
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[1200px] z-10">
              <Image
                src="/recaptz-mockup-1.png"
                width={800}
                height={800}
                alt="recaptz component mockup 1"
                className=""
              />
            </div>
          </div>
        </motion.div>

        <div className="mx-auto px-4 flex flex-col justify-center items-center md:w-1/3 min-w-[250px]">
          <h2 className="mb-10 text-2xl font-bold text-blue-600">
            CORE FEATURES
          </h2>
          <ul className="space-y-6 text-base">
            <li className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
              <span>
                Multiple CAPTCHA types: numbers, letters, mixed, or custom
                characters.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
              <span>
                Extensive validation rules with custom validators support.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
              <span>
                Beautiful modern UI with dark mode and gradient effects.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section
        ref={featuresSection2Ref}
        className="container flex flex-col md:flex-row gap-10 items-center justify-center overflow-hidden py-[50px] md:py-0"
      >
        <div className="mx-auto px-4 flex flex-col justify-center items-center md:w-1/2 min-w-[250px]">
          <h2 className="mb-10 text-2xl font-bold text-blue-600">
            ADVANCED FEATURES
          </h2>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10">
                <AccessibilityIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span>Screen reader support and keyboard navigation.</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10">
                <SecurityIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span>
                Audio support with text-to-speech for visually impaired users.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10">
                <PaletteIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span>Highly customizable with extensive styling options.</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10">
                <CheckCircleIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span>Zero dependencies with minimal bundle size.</span>
            </li>
          </ul>
        </div>
        <motion.div
          className="relative mx-auto px-4"
          style={{ y: imageYTransform2 }}
        >
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[1200px]">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    🎨 Advanced Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-green-600 font-semibold">
                        Audio Support
                      </div>
                      <div className="text-gray-600">
                        Text-to-speech for accessibility
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-blue-600 font-semibold">
                        Custom Styling
                      </div>
                      <div className="text-gray-600">
                        Extensive customization options
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-purple-600 font-semibold">
                        Zero Dependencies
                      </div>
                      <div className="text-gray-600">Minimal bundle size</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-orange-600 font-semibold">
                        TypeScript
                      </div>
                      <div className="text-gray-600">Full type safety</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
