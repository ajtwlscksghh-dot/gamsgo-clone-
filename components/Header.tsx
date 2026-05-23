"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        background: "rgba(8,8,8,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #222222",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}
            >
              S
            </div>
            <span className="text-white font-bold text-lg tracking-tight">SubsShare</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "홈" },
              { href: "/products", label: "서비스" },
              { href: "/#features", label: "특징" },
              { href: "/#reviews", label: "후기" },
              { href: "/#faq", label: "FAQ" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-zinc-400 hover:text-white text-sm transition-colors px-3 py-2">
              로그인
            </button>
            <Link
              href="/products"
              className="text-sm font-semibold text-black px-4 py-2 rounded-lg transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}
            >
              지금 시작하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t" style={{ borderColor: "#222" }}>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "홈" },
                { href: "/products", label: "서비스" },
                { href: "/#features", label: "특징" },
                { href: "/#reviews", label: "후기" },
                { href: "/#faq", label: "FAQ" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-400 hover:text-white text-sm px-2 py-2 rounded transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="mt-2 text-sm font-semibold text-black px-4 py-2 rounded-lg text-center"
                style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}
                onClick={() => setMobileOpen(false)}
              >
                지금 시작하기
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
