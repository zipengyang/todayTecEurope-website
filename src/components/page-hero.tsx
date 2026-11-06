import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-deep text-white">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
      ) : (
        <div className="surface-grid absolute inset-0 opacity-40" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-deep/50" />
      <Container className="relative py-16 sm:py-24">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {body ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {body}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
