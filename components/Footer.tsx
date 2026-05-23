import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060610",
        borderTop: "1px solid rgba(124,58,237,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
              >
                S
              </div>
              <span className="text-white font-bold text-lg">SubsShare</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              프리미엄 구독 서비스를 합리적인 가격으로 이용하세요.
            </p>
            <div className="flex gap-3">
              {["Y", "X", "T", "F"].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">인기 서비스</h4>
            <ul className="space-y-2">
              {["Netflix", "ChatGPT Plus", "YouTube Premium", "Spotify", "Adobe CC"].map((s) => (
                <li key={s}>
                  <Link
                    href={`/products/${s.toLowerCase().replace(" ", "-").replace("+", "plus")}`}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">고객지원</h4>
            <ul className="space-y-2">
              {["이용방법", "자주 묻는 질문", "환불 정책", "1:1 문의", "공지사항"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">SubsShare 현황</h4>
            <div className="space-y-3">
              {[
                { label: "누적 판매", value: "350,000+" },
                { label: "회원 수", value: "120,000+" },
                { label: "평균 평점", value: "4.8 / 5.0" },
                { label: "취급 서비스", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between">
                  <span className="text-gray-500 text-sm">{stat.label}</span>
                  <span className="text-purple-400 text-sm font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(124,58,237,0.1)" }}
        >
          <p className="text-gray-600 text-xs">
            © 2024 SubsShare. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["이용약관", "개인정보처리방침", "쿠키 정책"].map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
