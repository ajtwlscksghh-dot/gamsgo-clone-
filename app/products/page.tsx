"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, categories } from "@/lib/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-3 h-3"
          fill={star <= Math.round(rating) ? "#f59e0b" : "none"}
          stroke="#f59e0b"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-3.885a.563.563 0 00-.652 0L4.773 20.14a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L.633 10.19a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [sortBy, setSortBy] = useState("인기순");
  const [searchQuery, setSearchQuery] = useState("");

  const lowestPrice = (p: typeof products[0]) =>
    Math.min(...p.plans.map((pl) => pl.price));
  const highestOriginal = (p: typeof products[0]) =>
    Math.max(...p.plans.map((pl) => pl.originalPrice));
  const discount = (p: typeof products[0]) =>
    Math.round((1 - lowestPrice(p) / highestOriginal(p)) * 100);

  const filtered = products
    .filter((p) => activeCategory === "전체" || p.category === activeCategory)
    .filter(
      (p) =>
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.includes(searchQuery)
    )
    .sort((a, b) => {
      if (sortBy === "인기순") return b.sold - a.sold;
      if (sortBy === "낮은 가격순") return lowestPrice(a) - lowestPrice(b);
      if (sortBy === "높은 할인순") return discount(b) - discount(a);
      return b.rating - a.rating;
    });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <div
        className="pt-24 pb-12"
        style={{
          background: "linear-gradient(180deg, #0a0a14 0%, #0f0820 100%)",
          borderBottom: "1px solid rgba(124,58,237,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            전체 서비스
          </h1>
          <p className="text-gray-400">
            {products.length}개의 프리미엄 구독 서비스를 최저가로 만나보세요
          </p>
        </div>
      </div>

      <main className="flex-1 py-10" style={{ background: "#0a0a14" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="서비스 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1"
                style={{
                  background: "rgba(19,19,42,0.8)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  "--tw-ring-color": "#7c3aed",
                } as React.CSSProperties}
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl text-sm text-white outline-none cursor-pointer"
              style={{
                background: "rgba(19,19,42,0.8)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {["인기순", "낮은 가격순", "높은 할인순", "평점순"].map((s) => (
                <option key={s} value={s} style={{ background: "#13132a" }}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0"
                style={
                  activeCategory === cat
                    ? {
                        background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                        color: "white",
                      }
                    : {
                        background: "rgba(19,19,42,0.8)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        color: "#9ca3af",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-gray-600 text-sm mb-6">
            {filtered.length}개의 서비스
          </p>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-400 text-lg">검색 결과가 없습니다</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("전체"); }}
                className="mt-4 text-purple-400 text-sm hover:underline"
              >
                전체 보기
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="card-hover rounded-2xl p-5 flex flex-col gap-4"
                  style={{
                    background: "rgba(19,19,42,0.8)",
                    border: "1px solid rgba(124,58,237,0.15)",
                  }}
                >
                  {/* Icon & Discount */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl ${product.bgColor} flex items-center justify-center text-white font-bold`}
                    >
                      {product.icon}
                    </div>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full"
                      style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}
                    >
                      -{discount(product)}%
                    </span>
                  </div>

                  {/* Name & Category */}
                  <div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full mb-1.5 inline-block"
                      style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
                    >
                      {product.category}
                    </span>
                    <h3 className="text-white font-bold">{product.name}</h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.description}</p>
                  </div>

                  {/* Rating & Sales */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <StarRating rating={product.rating} />
                      <span className="text-gray-600 text-xs">({product.reviews.toLocaleString()})</span>
                    </div>
                    <span className="text-gray-600 text-xs">판매 {(product.sold / 1000).toFixed(0)}k+</span>
                  </div>

                  {/* Price */}
                  <div
                    className="pt-3"
                    style={{ borderTop: "1px solid rgba(124,58,237,0.1)" }}
                  >
                    <div className="text-gray-600 text-xs line-through">
                      {highestOriginal(product).toLocaleString()}원
                    </div>
                    <div className="text-white font-bold">
                      <span className="text-purple-400 text-lg">
                        {lowestPrice(product).toLocaleString()}원
                      </span>
                      <span className="text-gray-500 text-xs font-normal"> /월부터</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
