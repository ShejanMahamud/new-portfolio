"use client";

import MotionPath from "@/components/WavyLine";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
        color="#10b981"
      />
      <section className="container mx-auto px-4 pt-5 md:pt-20 pb-10 md:pb-20 text-center">
        <h1 className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 font-display">
          <span className="text-5xl font-bold text-emerald-600 md:text-6xl">
            AuthFlow
          </span>
          <span className="text-2xl font-medium text-emerald-600 md:text-3xl">
            AUTHENTICATION API
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed opacity-75">
          A production-ready, plug-and-play authentication & authorization API
          built with NestJS, PostgreSQL, Prisma, and PassportJS. Designed to
          eliminate repetitive auth boilerplate in your projects with
          comprehensive features including JWT, OAuth, email verification, and
          file uploads. 🚀
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
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                    🔐 Authentication API
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-green-600 font-semibold">
                        JWT Tokens
                      </div>
                      <div className="text-gray-600">Secure authentication</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-blue-600 font-semibold">OAuth2</div>
                      <div className="text-gray-600">Google & GitHub login</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-purple-600 font-semibold">
                        Email Verification
                      </div>
                      <div className="text-gray-600">Account confirmation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto px-4 flex flex-col justify-center items-center md:w-1/3 min-w-[250px]">
          <h2 className="mb-10 text-2xl font-bold text-emerald-600">
            CORE FEATURES
          </h2>
          <ul className="space-y-6 text-base">
            <li className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
              <span>
                Multiple authentication strategies: JWT, Google OAuth2, GitHub
                OAuth2.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
              <span>Email verification and password reset workflows.</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
              <span>
                Token refresh mechanism with secure session management.
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
          <h2 className="mb-10 text-2xl font-bold text-emerald-600">
            ADVANCED FEATURES
          </h2>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10">
                <StorageIcon className="h-5 w-5 text-emerald-600" />
              </div>
              <span>
                PostgreSQL database with Prisma ORM for type-safe queries.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10">
                <CloudIcon className="h-5 w-5 text-emerald-600" />
              </div>
              <span>
                File uploads via AWS S3 and CloudFront CDN integration.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10">
                <SecurityIcon className="h-5 w-5 text-emerald-600" />
              </div>
              <span>
                Background jobs with BullMQ and Redis for email processing.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10">
                <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
              </div>
              <span>
                Rate limiting, cron jobs, and comprehensive API documentation.
              </span>
            </li>
          </ul>
        </div>
        <motion.div
          className="relative mx-auto px-4"
          style={{ y: imageYTransform2 }}
        >
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[1200px]">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                    ⚙️ Backend Infrastructure
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-green-600 font-semibold">
                        PostgreSQL
                      </div>
                      <div className="text-gray-600">
                        Type-safe with Prisma ORM
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-blue-600 font-semibold">AWS S3</div>
                      <div className="text-gray-600">
                        File uploads & CloudFront
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-purple-600 font-semibold">
                        BullMQ
                      </div>
                      <div className="text-gray-600">
                        Background job processing
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-orange-600 font-semibold">
                        Rate Limiting
                      </div>
                      <div className="text-gray-600">API protection</div>
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
