# JobScape

**IT 채용 시장의 현실을 데이터로 분석하는 오픈소스 프로젝트**

JobScape는 현재 한국 IT 취업 시장의 다양한 가설들을 데이터 기반으로 검증하고 시각화하는 프로젝트입니다. "IT 취업이 정말 어려워졌을까?"라는 질문에서 출발하여, 객관적인 데이터 분석을 통해 현 상황을 파악하고자 합니다.

## 프로젝트 목표

IT 채용 시장에 대한 다음과 같은 가설들을 데이터로 검증합니다.

- **공급-수요 불균형**: IT 인력 공급이 수요를 초과하여 취업 경쟁이 심화되고 있는가?
- **경력-신입 격차**: 신입 개발자 취업은 어려워졌지만, 경력직 수요는 여전히 높은가?
- **AI 대체 위협**: AI 기술 발전으로 인한 일자리 대체 우려가 채용 시장을 위축시키고 있는가?
- **AI 생산성 패러독스**: AI 도구로 생산성은 높아졌지만 더 높은 수준의 개발자만 채용하는가?
- **지역 불균형**: IT 일자리가 수도권에 과도하게 집중되어 지방 거주자들의 취업 장벽이 높아졌는가?
- **스펙 인플레이션**: 동일한 주니어 포지션 요구사항이 과거보다 과도하게 높아졌는가?
- **투자 위축 연쇄효과**: 벤처투자 감소와 스타트업 구조조정이 전체 IT 채용 시장을 위축시켰는가?
- **부트캠프 포화**: 부트캠프 수료생 급증으로 시장이 포화되어 경쟁이 치열해졌는가?

## 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Data Visualization**: Chart.js
- **Styling**: Tailwind CSS
- **Package Manager**: npm/yarn

## 시작하기

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/jobscape.git
cd jobscape

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 빌드

```bash
npm run build
# 또는
yarn build
```

## 프로젝트 구조

```
jobscape/
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── pages/         # 페이지 컴포넌트
│   ├── data/          # 데이터 소스 및 API
│   ├── utils/         # 유틸리티 함수
│   └── types/         # TypeScript 타입 정의
├── public/            # 정적 파일
└── docs/             # 프로젝트 문서
```

## 커밋 메시지 규칙

| 타입 이름 | 내용                                        |
| --------- | ------------------------------------------- |
| feat      | 새로운 기능 추가                            |
| fix       | 버그 수정                                   |
| docs      | 문서 수정                                   |
| style     | 코드 포맷팅, 세미콜론 누락 등 비기능적 변경 |
| refactor  | 코드 리팩토링 (기능 변화 없음)              |
| test      | 테스트 코드 추가/수정                       |
| chore     | 빌드 업무, 패키지 매니저 설정 등 기타 변경  |

## 데이터 소스

- 채용공고 플랫폼 API
- 정부 통계 데이터
- 업계 리포트 및 설문조사 결과
- 오픈소스 취업 관련 데이터셋

## 기여하기

JobScape는 오픈소스 프로젝트입니다. 기여를 환영합니다! 기타 서비스에 대한 문의는 paul-lab@naver.com 으로 연락해주세요.

1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 분석 결과

분석 결과와 인사이트는 [GitHub Pages](https://your-username.github.io/jobscape)에서 확인할 수 있습니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 Issue를 생성해 주세요. 기타 서비스에 대한 문의는 paul-lab@naver.com 으로 연락해주세요.
