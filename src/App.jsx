import { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Plus, 
  MessageSquare, 
  Globe, 
  LayoutTemplate, 
  Users, 
  PenTool
} from 'lucide-react';
import './App.css';

function App() {
  const [isYearly, setIsYearly] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { question: "무료 체험은 어떻게 진행되나요?", answer: "가입 즉시 14일 동안 Pro 플랜의 모든 기능을 무료로 체험하실 수 있습니다. 결제 정보는 필요하지 않습니다." },
    { question: "언제든지 구독을 취소할 수 있나요?", answer: "네, 설정 페이지에서 언제든지 구독을 취소할 수 있습니다. 취소하더라도 남은 결제 기간 동안은 서비스를 계속 이용할 수 있습니다." },
    { question: "내 데이터는 안전한가요?", answer: "WriteNow는 업계 최고 수준의 보안 표준을 준수하며, 사용자의 데이터를 학습에 사용하지 않습니다." },
    { question: "환불이 가능한가요?", answer: "결제 후 7일 이내에 서비스 사용 이력이 없다면 전액 환불이 가능합니다." },
    { question: "어떤 결제 수단을 지원하나요?", answer: "신용카드, 체크카드 및 간편 결제(카카오페이, 네이버페이)를 지원합니다." },
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Navbar */}
      <nav className="navbar container">
        <div className="nav-brand">WriteNow</div>
        <div className="nav-links">
          <a href="#features" className="nav-link">기능</a>
          <a href="#pricing" className="nav-link">가격</a>
          <a href="#faq" className="nav-link">자주 묻는 질문</a>
          <a href="#about" className="nav-link">정보</a>
        </div>
        <div className="nav-actions">
          <a href="#" className="login-link">로그인</a>
          <button className="btn btn-primary">무료 시작하기</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero container">
        <h1 className="hero-title">
          AI와 함께 더 빠르게 더 잘 쓰세요
        </h1>
        <p className="hero-subtitle">
          당신의 아이디어를 완벽한 문장으로 바꿔드립니다. 직관적인 AI 보조와 함께 당신의 글쓰기 잠재력을 발견해보세요.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">무료 시작하기</button>
          <button className="btn btn-outline">데모 보기</button>
        </div>
        
        {/* Placeholder for Hero Image - We use a CSS styled div to mimic the dark techy wave */}
        <div className="hero-image-container">
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, #0F172A, #1E1B4B)',
            overflow: 'hidden'
          }}>
            {/* Simple CSS representation of the wave */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '100%',
              background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 60%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              borderTop: '2px solid rgba(99, 102, 241, 0.5)',
              boxShadow: '0 -20px 40px rgba(99, 102, 241, 0.3)',
              transform: 'perspective(1000px) rotateX(60deg) scale(2)',
              backgroundImage: 'linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title">강력한 AI 글쓰기 기능</h2>
          <p className="section-subtitle">어떤 상황에서도 완벽한 텍스트를 작성할 수 있도록 지원합니다.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h3 className="feature-title">AI 글쓰기 어시스턴트</h3>
              <p className="feature-description">글의 톤 앤 매너 전환, 문법 교정, 아이디어 제안 등 완벽한 글쓰기를 돕습니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <PenTool size={24} />
              </div>
              <h3 className="feature-title">언제나 완벽한 문법</h3>
              <p className="feature-description">오탈자와 어색한 표현을 실시간으로 교정하여 프로페셔널한 문서를 만듭니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">브랜드 목소리에 맞게 조절</h3>
              <p className="feature-description">친근하게, 전문적으로, 유머러스하게 원하는 환경에 따라 목소리를 변경하세요.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Globe size={24} />
              </div>
              <h3 className="feature-title">50개 이상의 언어로 작성합니다.</h3>
              <p className="feature-description">글로벌 커뮤니케이션의 장벽을 허무세요. 다양한 언어로의 번역 및 작성을 지원합니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <LayoutTemplate size={24} />
              </div>
              <h3 className="feature-title">100개 이상 바로 쓸 수 있는 템플릿</h3>
              <p className="feature-description">블로그, 이메일, 광고 카피 등 다양한 목적에 맞는 템플릿을 제공합니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Users size={24} />
              </div>
              <h3 className="feature-title">실시간으로 함께 작업합니다.</h3>
              <p className="feature-description">팀원들과 동일한 문서에서 실시간으로 피드백을 나누고 편집할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section pricing-section container">
        <h2 className="section-title">합리적인 요금제</h2>
        <p className="section-subtitle">당신의 필요에 맞는 플랜을 선택하세요.</p>
        
        <div className="billing-toggle">
          <button 
            className={`toggle-btn ${!isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(false)}
          >
            월간
          </button>
          <button 
            className={`toggle-btn ${isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(true)}
          >
            연간 (20% 할인)
          </button>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3 className="plan-name">Free</h3>
            <div className="plan-price">$0<span className="plan-period">/월</span></div>
            <ul className="plan-features">
              <li className="plan-feature"><Check size={20} className="icon" /> <span>핵심 AI 기능</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>자동 문법 검사</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>1만자 지원</span></li>
            </ul>
            <button className="btn btn-outline">무료 시작</button>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">가장 인기</div>
            <h3 className="plan-name">Pro</h3>
            <div className="plan-price">${isYearly ? '15' : '19'}<span className="plan-period">/월</span></div>
            <ul className="plan-features">
              <li className="plan-feature"><Check size={20} className="icon" /> <span>무제한 생성</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>고급 AI</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>우선 지원</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>API</span></li>
            </ul>
            <button className="btn btn-gradient">프로 플랜 시작</button>
          </div>

          <div className="pricing-card">
            <h3 className="plan-name">Enterprise</h3>
            <div className="plan-price">${isYearly ? '39' : '49'}<span className="plan-period">/월</span></div>
            <ul className="plan-features">
              <li className="plan-feature"><Check size={20} className="icon" /> <span>Pro 플랜 모두 포함</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>맞춤 AI 모델</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>전담 매니저</span></li>
              <li className="plan-feature"><Check size={20} className="icon" /> <span>SSO</span></li>
            </ul>
            <button className="btn btn-outline">문의하기</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section container faq-section">
        <h2 className="section-title text-center" style={{textAlign: 'center', marginBottom: '40px'}}>자주 묻는 질문</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <Plus size={20} className="faq-icon" />
              </button>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">글쓰기를 혁신할 준비가 되셨나요?</h2>
          <p className="cta-subtitle">10,000명 이상의 작가들과 함께하세요!</p>
          <button className="btn btn-gradient" style={{padding: '16px 48px', fontSize: '18px'}}>
            무료 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-copyright">
            © 2024 WriteNow AI. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">이용약관</a>
            <a href="#" className="footer-link">개인정보처리방침</a>
            <a href="#" className="footer-link">문의하기</a>
            <a href="#" className="footer-link">블로그</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
