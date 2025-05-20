import Link from "next/link";
import { MotionDiv, MotionFooter, MotionH2, MotionPara } from "./motionWrapper";
import { ContainerVariants, ItemsVariants } from "@/utils/constants";

export default function Footer() {
  return (
    <MotionFooter
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-4 py-5 text-gray-300"
    >
      <MotionDiv
        variants={ContainerVariants}
        className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        {/* Brand Section */}
        <MotionDiv
          variants={ItemsVariants}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <MotionH2
            whileHover={{ scale: 1.03 }}
            className="text-lg font-semibold text-white"
          >
            Quick Sheet
          </MotionH2>
          <MotionPara
            whileHover={{ x: 3 }}
            className="mt-1 max-w-xs text-sm leading-relaxed text-gray-200"
          >
            Your ultimate reference for quick and easy web dev sheets.
          </MotionPara>
        </MotionDiv>

        {/* Social Section */}
        <MotionDiv
          variants={ItemsVariants}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <MotionH2
            whileHover={{ scale: 1.03 }}
            className="text-lg font-semibold text-white"
          >
            Follow Me
          </MotionH2>
          <MotionDiv variants={ContainerVariants} className="mt-2 flex gap-4">
            {[
              { href: "https://github.com/CodingWithTushar", label: "GitHub" },
              {
                href: "https://www.linkedin.com/in/tushar5911/",
                label: "LinkedIn",
              },
              { href: "https://x.com/hustlertushar", label: "X" },
            ].map((link) => (
              <MotionDiv
                key={link.href}
                variants={ItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>

      {/* Copyright */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-9 border-t border-white/20 pt-4 text-center text-xs text-white"
      >
        © 2025 Quick Sheet. Built with ❤️ by Tushar
      </MotionDiv>
    </MotionFooter>
  );
}
