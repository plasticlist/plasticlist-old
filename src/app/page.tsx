"use client";
import { useState } from "react";
import { IntroText } from "@/components/intro-text";
import { BlogPosts } from "@/components/blog-posts";

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);

  const handleEmailSubmit = (email: string) => {
    setEmail(email);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-between gap-8">
      <IntroText onEmailSubmit={handleEmailSubmit} />
      <BlogPosts />
    </div>
  );
}