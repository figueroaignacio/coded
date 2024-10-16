"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { BgBlur } from "@/components/bg-blur";
import { BgBorders } from "@/components/bg-borders";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/config/navigation";
import { motion } from "framer-motion";

// Icons
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="relative">
      <BgBorders />
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 sm:py-32">
        <BgBlur />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-extrabold tracking-tight md:text-6xl lg:border-t lg:border-b lg:py-12"
            >
              {t.rich("title", {
                text: (chunks) => (
                  <span className="block gradient-text">{chunks}</span>
                ),
              })}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-sm lg:text-lg text-muted-foreground"
            >
              {t("description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex justify-center gap-4 max-w-lg mx-auto px-12"
            >
              <Link
                href="/articles"
                className={buttonVariants({
                  size: "sm",
                  className: "group",
                })}
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://github.com/figueroaignacio/websociety"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "group",
                })}
              >
                Star on GitHub
                <Star className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 text-yellow-400" />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center"
          ></motion.div>
        </div>
      </section>
    </div>
  );
}
