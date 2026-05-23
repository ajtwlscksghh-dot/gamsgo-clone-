import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const cls = size === "md" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={cls} fill={star <= Math.round(rating) ? "#c9a84c" : "none"} stroke="#c9a84c" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-3.885a.563.563 0 00-.652 0L4.773 20.14a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L.633 10.19a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const lowestPrice = Math.min(...product.plans.map((p) => p.price));
  const highestOriginal = Math.max(...product.plans.map((p) => p.originalPrice));
  const discountPct = Math.round((1 - lowestPrice / highestOriginal) * 100);

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-24 pb-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-600 mb-8">
            <Link href="/" className="hover:text-zinc-400 transition-colors">홈</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-zinc-400 transition-colors">서비스</Link>
            <span>/</span>
            <span style={{ color: "#c9a84c" }}>{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left */}
            <div className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div className="p-8 rounded-2xl" style={{ background: "#161616", border: "1px solid #222" }}>
                <div className="flex items-start gap-5">
                  <div className={`w-20 h-20 rounded-2xl ${product.bgColor} flex items-center justify-center text-white font-bold text-2xl flex-shrink-0`}>
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c" }}>{product.category}</span>
                      <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80" }}>최대 -{discountPct}% 할인</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{product.name}</h1>
                    <p className="text-zinc-400 leading-relaxed">{product.longDescription}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-6 pt-6" style={{ borderTop: "1px solid #222" }}>
                  <div className="flex items-center gap-2">
                    <StarRating rating={product.rating} size="md" />
                    <span className="text-white font-bold">{product.rating}</span>
                    <span className="text-zinc-500 text-sm">({product.reviews.toLocaleString()}개 리뷰)</span>
                  </div>
                  <div className="text-zinc-500 text-sm">
                    판매 <span className="text-white font-semibold">{product.sold.toLocaleString()}</span>건
                  </div>
                  <div className="flex items-center gap-1 text-zinc-500 text-sm">
                    <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: "#4ade80" }} />
                    재고 있음
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 rounded-2xl" style={{ background: "#161616", border: "1px solid #222" }}>
                <h2 className="text-white font-bold text-lg mb-4">포함 기능</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)" }}>
                        <svg className="w-3 h-3" style={{ color: "#c9a84c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How To Use */}
              <div className="p-6 rounded-2xl" style={{ background: "#161616", border: "1px solid #222" }}>
                <h2 className="text-white font-bold text-lg mb-4">이용 방법</h2>
                <div className="space-y-3">
                  {product.howToUse.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 text-black" style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}>
                        {i + 1}
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)", color: "#c9a84c" }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Plans */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-4">
                <h2 className="text-white font-bold text-xl mb-4">플랜 선택</h2>

                {product.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="p-5 rounded-2xl relative"
                    style={
                      plan.popular
                        ? { background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))", border: "2px solid rgba(201,168,76,0.4)" }
                        : { background: "#161616", border: "1px solid #222" }
                    }
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black" style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}>
                        🔥 인기
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-bold text-lg">{plan.name}</span>
                      <span className="text-zinc-500 text-sm">{plan.duration}</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-zinc-600 text-sm line-through">{plan.originalPrice.toLocaleString()}원</div>
                      <div className="flex items-end gap-2">
                        <span className="text-white font-bold text-2xl">{plan.price.toLocaleString()}원</span>
                        <span className="text-sm font-bold mb-1" style={{ color: "#4ade80" }}>
                          {Math.round((1 - plan.price / plan.originalPrice) * 100)}% 할인
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                          <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#c9a84c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                      style={
                        plan.popular
                          ? { background: "linear-gradient(135deg, #e8c97a, #c9a84c)", color: "#000" }
                          : { background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "#c9a84c" }
                      }
                    >
                      {plan.name} 구매하기
                    </button>
                  </div>
                ))}

                {/* Guarantees */}
                <div className="p-4 rounded-xl" style={{ background: "#161616", border: "1px solid #1e1e1e" }}>
                  {[
                    { icon: "⚡", text: "결제 즉시 자동 배송" },
                    { icon: "🛡️", text: "30일 환불 보장" },
                    { icon: "🔐", text: "안전한 암호화 결제" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 py-2">
                      <span>{item.icon}</span>
                      <span className="text-zinc-400 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-white font-bold text-2xl mb-6">관련 서비스</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((p) => {
                  const lp = Math.min(...p.plans.map((pl) => pl.price));
                  const ho = Math.max(...p.plans.map((pl) => pl.originalPrice));
                  const dc = Math.round((1 - lp / ho) * 100);
                  return (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="card-hover p-5 rounded-2xl flex items-center gap-4"
                      style={{ background: "#161616", border: "1px solid #222" }}
                    >
                      <div className={`w-12 h-12 rounded-xl ${p.bgColor} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                        {p.icon}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{p.name}</div>
                        <div className="text-sm font-bold" style={{ color: "#c9a84c" }}>
                          {lp.toLocaleString()}원
                          <span className="text-green-400 text-xs ml-1">-{dc}%</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
