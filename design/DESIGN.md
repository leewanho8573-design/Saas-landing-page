---
name: WriteFlow
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#464555'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#8f0055'
  on-tertiary: '#ffffff'
  tertiary-container: '#b6166f'
  on-tertiary-container: '#ffcede'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  section-gap-mobile: 64px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 20px
---

## Brand & Style
이 디자인 시스템은 AI 글쓰기 어시스턴트의 전문성과 창의성을 동시에 전달하기 위해 **Minimalist Modern** 스타일을 채택합니다. 핵심 가치는 '명료함'과 '지능적인 흐름'입니다. 

전체적으로 깨끗한 화이트 배경을 유지하며, 딥 인디고에서 바이올렛으로 이어지는 그라데이션을 통해 인공지능의 역동성을 표현합니다. 레이아웃은 관대한 여백(Generous Whitespace)을 활용하여 프리미엄한 감각을 강조하며, 핵심 기능이 강조되도록 시각적 노이즈를 최소화합니다. 유연한 유리 질감(Glassmorphism)과 부드러운 그림자 효과를 적재적소에 배치하여 현대적인 SaaS의 세련미를 완성합니다.

## Colors
기본 팔레트는 깊은 신뢰감을 주는 **Deep Indigo**(#4F46E5)를 메인으로 하며, 이를 **Vibrant Purple**(#8B5CF6)과 혼합하여 브랜드만의 독특한 그라데이션을 형성합니다. 

- **Primary**: 브랜드의 핵심 액션과 강조 요소에 사용됩니다.
- **Secondary/Accent**: 보조적인 시각 흐름이나 창의적 요소를 강조할 때 활용합니다.
- **Neutral**: 텍스트 계층 구조와 보조 인터페이스 요소를 위해 세분화된 그레이 스케일을 사용합니다. 
- **Background**: `Pure White`를 기본으로 하여 청결함을 유지하고, 카드나 섹션 구분 시 아주 연한 `Cool Gray` 계열의 서피스 컬러를 사용하여 깊이감을 줍니다.

## Typography
**Inter** 폰트를 사용하여 기술적인 정밀함과 가독성을 확보합니다. 한국어 가독성을 위해 문장 간격을 최적화하고, 헤드라인에는 `Bold` 이상의 두께를 적용하여 명확한 정보 위계를 설정합니다. 

주요 카피에는 `Display` 스타일을 적용해 시선을 사로잡으며, 본문 텍스트는 충분한 행간(1.6)을 두어 읽기 쉬운 환경을 제공합니다. 모바일 환경에서는 폰트 크기를 유동적으로 조절하여 가독성을 유지합니다.

## Layout & Spacing
12컬럼 그리드 시스템을 기반으로 한 **Fixed Grid** 레이아웃을 사용합니다. 데스크탑 기준 최대 가로폭은 1200px로 제한하여 시선의 분산을 막습니다. 

- **Vertical Rhythm**: 섹션 사이에는 120px 이상의 충분한 여백을 두어 콘텐츠의 호흡을 조절합니다. 
- **Internal Spacing**: 요소 간의 간격은 8px의 배수를 기본 단위로 사용하며, 카드 내부 패딩은 `32px` 이상으로 설정하여 쾌적한 느낌을 줍니다. 
- **Mobile Adaptation**: 모바일에서는 여백을 50% 수준으로 축소하고, 그리드를 1컬럼으로 리플로우합니다.

## Elevation & Depth
물리적인 깊이감보다는 공중에 떠 있는 듯한 가벼운 느낌을 지향합니다.

1.  **Soft Shadows**: 카드 요소에는 매우 부드럽고 넓게 퍼지는 그림자(Blur: 40px, Opacity: 6%, Color: Indigo-tinted Gray)를 적용합니다.
2.  **Hover State**: 카드에 마우스를 올리면 `scale(1.02)` 효과와 함께 그림자의 농도가 짙어져 사용자 피드백을 강화합니다.
3.  **Glassmorphism**: 내비게이션 바와 모달 배경에는 `Backdrop Blur(12px)`와 반투명 화이트(`white/80%`) 레이어를 사용하여 배경과의 레이어 관계를 명확히 합니다.

## Shapes
이 디자인 시스템은 전체적으로 **Rounded** 스타일을 유지하여 친근하고 현대적인 이미지를 구축합니다.

- **Buttons/Inputs**: 기본 `0.5rem(8px)`의 곡률을 가집니다.
- **Cards**: 대형 콘텐츠를 담는 카드는 `1.5rem(24px)`의 곡률을 적용하여 부드러운 인상을 줍니다.
- **Badges**: 상태 표시용 칩이나 태그는 완전한 `Pill-shape`를 사용하여 구분감을 높입니다.

## Components
지정된 컴포넌트들은 다음과 같은 가이드라인을 따릅니다.

- **Primary Buttons**: 브랜드 그라데이션이 적용된 채워진 버튼입니다. `box-shadow`를 통해 입체감을 부여하며, 텍스트는 화이트로 고정합니다.
- **Secondary Buttons**: 1.5px 두께의 인디고 컬러 보더를 가진 아웃라인 스타일입니다. 호버 시 배경색이 옅은 인디고 톤으로 채워집니다.
- **Accordion FAQs**: 텍스트 위주의 깔끔한 구성이며, 질문 클릭 시 하단 내용이 `ease-out` 트랜지션과 함께 부드럽게 펼쳐집니다. 테두리 없이 하단 보더만으로 구분합니다.
- **Pricing Cards**: 'Pro' 플랜 카드는 다른 카드보다 상단에 위치시키거나, 인디고 그라데이션 테두리를 사용하여 시각적으로 강조합니다. 상단에 "가장 인기 있는 플랜"이라는 배지를 추가합니다.
- **Glass Input Fields**: 입력 필드는 아주 옅은 그레이 배경이나 반투명한 화이트를 사용하며, 포커스 시 인디고 컬러의 글로우(Glow) 효과를 테두리에 적용합니다.