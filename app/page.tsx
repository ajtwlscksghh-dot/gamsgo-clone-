import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, reviews } from "@/lib/data";

const popularProducts = products.slice(0, 6);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4" fill={star <= Math.round(rating) ? "#c9a84c" : "none"} stroke="#c9a84c" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-3.885a.563.563 0 00-.652 0L4.773 20.14a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L.633 10.19a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const lowestPrice = (p: typeof products[0]) => Math.min(...p.plans.map((pl) => pl.price));
  const highestOriginal = (p: typeof products[0]) => Math.max(...p.plans.map((pl) => pl.originalPrice));
  const discount = (p: typeof products[0]) => Math.round((1 - lowestPrice(p) / highestOriginal(p)) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ background: "#0a0a0a" }}>
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(201,168,76,0.06)" }} />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(201,168,76,0.04)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full"
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "#c9a84c" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#c9a84c" }} />
              🎉 지금 가입 시 첫 구매 10% 추가 할인
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">프리미엄 구독 서비스를</span>
            <br />
            <span className="gradient-text">최대 85% 저렴하게</span>
          </h1>

          <p className="text-center text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Netflix, ChatGPT Plus, YouTube Premium, Spotify 등<br className="hidden sm:block" />
            인기 구독 서비스를 합리적인 가격에 이용하세요
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-black font-semibold text-base transition-all hover:opacity-90 glow-gold"
              style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}
            >
              지금 구매하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #333", color: "#d4d4d8" }}
            >
              이용 방법 보기
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "350,000+", label: "누적 판매" },
              { value: "4.8 ★", label: "평균 평점" },
              { value: "즉시", label: "자동 배송" },
              { value: "100%", label: "정품 보증" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl" style={{ background: "#161616", border: "1px solid #222" }}>
                <div className="font-bold text-xl mb-1" style={{ color: "#c9a84c" }}>{stat.value}</div>
                <div className="text-zinc-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">인기 구독 서비스</h2>
            <p className="text-zinc-500">가장 많이 찾는 프리미엄 서비스들을 한눈에 확인하세요</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {popularProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="card-hover rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#161616", border: "1px solid #222" }}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl ${product.bgColor} flex items-center justify-center text-white font-bold text-lg`}>
                    {product.icon}
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80" }}>
                    -{discount(product)}%
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{product.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <StarRating rating={product.rating} />
                  <span className="text-zinc-600 text-xs">({product.reviews.toLocaleString()})</span>
                </div>

                <div className="pt-4 flex items-end justify-between" style={{ borderTop: "1px solid #222" }}>
                  <div>
                    <div className="text-zinc-600 text-xs line-through">정가 {highestOriginal(product).toLocaleString()}원/월</div>
                    <div className="text-white font-bold text-xl">
                      <span style={{ color: "#c9a84c" }}>{lowestPrice(product).toLocaleString()}원</span>
                      <span className="text-zinc-500 text-sm font-normal">/월부터</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.25)" }}>
                    구매하기 →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#c9a84c" }}
            >
              전체 서비스 보기 ({products.length}개)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">왜 SubsShare인가요?</h2>
            <p className="text-zinc-500">합리적인 가격, 안전한 거래, 빠른 서비스</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "즉시 자동 배송", description: "결제 완료 즉시 계정 정보가 자동으로 전송됩니다. 24/7 언제든지 구매 가능합니다." },
              { icon: "🔐", title: "안전한 거래", description: "SSL 암호화로 모든 결제 정보를 안전하게 보호합니다. 개인정보는 절대 공유하지 않습니다." },
              { icon: "💰", title: "최대 85% 할인", description: "그룹 구독을 통해 최대 85%까지 절약할 수 있습니다. 동일한 서비스를 훨씬 저렴하게 이용하세요." },
              { icon: "🛡️", title: "30일 환불 보장", description: "서비스 이용에 문제가 생기면 30일 이내 전액 환불해 드립니다. 안심하고 구매하세요." },
              { icon: "📱", title: "모든 기기 지원", description: "스마트폰, 태블릿, PC, TV 등 모든 기기에서 동일하게 이용할 수 있습니다." },
              { icon: "🎧", title: "24/7 고객지원", description: "문제가 생기면 언제든지 연락주세요. 빠른 시간 내에 해결해 드리겠습니다." },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl" style={{ background: "#161616", border: "1px solid #1e1e1e" }}>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">이용 방법</h2>
            <p className="text-zinc-500">4단계로 간단하게 프리미엄 서비스를 시작하세요</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "서비스 선택", desc: "원하는 구독 서비스와 기간을 선택하세요" },
              { step: "02", title: "결제 완료", desc: "카드, 계좌이체 등 다양한 방법으로 안전하게 결제" },
              { step: "03", title: "계정 수령", desc: "결제 즉시 이메일로 계정 정보 자동 발송" },
              { step: "04", title: "바로 이용", desc: "받은 정보로 로그인 후 즉시 프리미엄 이용 시작" },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)" }} />
                )}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-black font-bold text-xl mx-auto mb-4 relative z-10"
                  style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">고객 후기</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <StarRating rating={5} />
              <span className="text-white font-bold">4.8</span>
              <span className="text-zinc-500 text-sm">/ 5.0</span>
            </div>
            <p className="text-zinc-600 text-sm">3,674개의 리뷰 기준</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "#161616", border: "1px solid #1e1e1e" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{review.name}</div>
                    <div className="text-zinc-600 text-xs">{review.date}</div>
                  </div>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c" }}>
                    {review.service}
                  </span>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-zinc-400 text-sm leading-relaxed mt-3">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">자주 묻는 질문</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "공유 계정은 안전한가요?", a: "네, 안전합니다. 저희는 각 서비스의 공식 패밀리/그룹 구독 기능을 이용하기 때문에 서비스 약관을 위반하지 않습니다. 개인 프로필이 분리되어 다른 사람의 시청 기록을 볼 수 없습니다." },
              { q: "구매 후 언제 계정 정보를 받을 수 있나요?", a: "결제 완료 즉시 자동으로 이메일 또는 SMS로 계정 정보가 전송됩니다. 보통 1분 이내에 받을 수 있습니다." },
              { q: "서비스 이용 중 문제가 생기면 어떻게 하나요?", a: "30일 이내에 문제가 발생하면 전액 환불 또는 재발급을 해드립니다. 고객센터로 문의해 주세요." },
              { q: "여러 기기에서 동시에 사용할 수 있나요?", a: "서비스별로 허용 기기 수가 다릅니다. 각 서비스의 기기 정책을 따르며, 대부분 개인 기기에서 자유롭게 사용할 수 있습니다." },
              { q: "결제 수단은 무엇이 있나요?", a: "신용카드, 체크카드, 계좌이체, 카카오페이, 토스 등 다양한 결제 수단을 지원합니다." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "#161616", border: "1px solid #1e1e1e" }}>
                <h3 className="text-white font-semibold mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 text-black" style={{ background: "#c9a84c" }}>Q</span>
                  {faq.q}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ background: "#0d0d0d" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))", border: "1px solid rgba(201,168,76,0.2)" }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">지금 바로 시작하세요</h2>
            <p className="text-zinc-400 text-lg mb-8">수십만 명이 이미 SubsShare로 비용을 절약하고 있습니다</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-black font-bold text-lg transition-all hover:opacity-90 glow-gold"
              style={{ background: "linear-gradient(135deg, #e8c97a, #c9a84c)" }}
            >
              서비스 둘러보기 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
