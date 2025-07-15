import type { IContent, IContentProps } from './dataType';

export const TitleData2 = {
  number: '01',
  title: '공급 수요 불균형 가설',
  summary: {
    title: 'IT 인력 공급이 수요를 초과하여 취업 경쟁이 심화되고 있다.',
    contents: [
      '부트캠프, 코딩 교육 증가로 인한 신규 인력 급증으로 취업이 힘들어지고 있다.',
      '기업의 실제 채용 규모와 지원자 수의 격차가 현저히 좁아져 취업이 힘들다.',
      '구직자들의 AI 대체 불안감이 취업 준비 방향성에 미치는 영향',
    ],
  },
  chartData: {
    title: 'KDT 예산 급증\n(교육 프로그램 급속 확대)',
    label: '예산(억원)',
    labels: [2021, 2022, 2023, 2024, 2025],
    values: [2224, 3068, 4142, 4732, 4781],
    color: [
      '#FFB1C1',
      '#FFD6E0',
      '#FFDEB4',
      '#F9D57E',
      '#B6E89A',
      '#A8E4EC',
      '#AFCBFF',
      '#C6B7FF',
    ],
  },
};

export const dummyData: IContent = {
  id: 'c1',
  title: '수요 분석',
  contents: [
    {
      id: 'b1',
      title: '산업별 인력 부족률 분석',
      contents: [
        {
          id: 'b1i1',
          type: 'text',
          data: 'SW 산업은 12대 산업군 중 가장 높은 부족률을 기록하고 있으며, 시장 전망을 고려할 때 IT 인력에 대한 지속적인 수요가 예상된다. 이는 공급 과잉보다는 오히려 수요 초과 상황을 시사한다.',
        },
      ],
    },
    {
      id: 'b2',
      title: '채용률 변화 추이',
      contents: [
        {
          id: 'b2i1',
          type: 'text',
          data: '전체 채용률은 2022년 11월 ChatGPT 출시와 2023년 4월 GPT-4 출시 이후에도 약 95% 수준을 유지하여 급격한 변동을 보이지 않았다. 이는 AI 기술 발전이 채용 시장에 즉각적인 부정적 영향을 미치지 않았음을 보여준다.',
        },
      ],
    },
    {
      id: 'b3',
      title: "인식과 현실의 괴리: ‘AI 일자리 대체' 담론 분석",
      contents: [
        {
          id: 'b3i1',
          type: 'text',
          data: "'AI 구조조정' 관련 언론 보도를 분석한 결과, 대부분의 기사가 '빅테크' 기업에 집중되어 있었다. 이는 전체 IT 산업의 현실을 대변하지 못하는 선택적 보도로 인한 인식 왜곡 가능성을 시사한다.",
        },
        {
          id: 'b3i2',
          type: 'text',
          data: '산업통상자원부의 2024년 인력수급실태조사에 따르면, 기업 규모별 부족률은 다음과 같다.',
        },
        {
          id: 'b3i3',
          type: 'ul',
          data: [
            { id: 'b3i3u1', item: '대기업: 0.5%' },
            { id: 'b3i3u2', item: '중소기업: 3.0%' },
            { id: 'b3i3u3', item: '10인~29인 기업: 3.8%' },
            { id: 'b3i3u4', item: '30인~99인 기업: 3.1%' },
            { id: 'b3i3u5', item: '100인~299인 기업: 2.0%' },
          ],
        },
        {
          id: 'b3i4',
          type: 'text',
          data: '이 데이터는 기업 규모가 작을수록 인력 부족 현상이 심화됨을 보여주며, 전체 시장에서는 여전히 공급 부족 상황이 지속되고 있음을 나타낸다.',
        },
        {
          id: 'b3i5',
          type: 'text',
          data: "현재까지의 데이터 분석 결과, AI 기술 변화가 채용 시장에 미치는 즉각적이고 급격한 영향은 제한적인 것으로 판단된다. DX(Digital Transformation) 및 AX (AI Transformation) 전환으로 인한 디지털 일자리 수급 변화가 진행되고 있는 상황에서, 'AI로 인한 급격한 일자리 감소로 디지털 인재 수요가 줄었다'라는 결론은 보다 신중한 접근이 필요하다.",
        },
        {
          id: 'b3i6',
          type: 'text',
          data: "지금까지의 분석을 통해 공급-수요 불균형 가설의 '수요' 측면을 검토한 결과, 다음과 같은 현황이 확인되었다.",
        },
        {
          id: 'b3i7',
          // ol 테스트용
          type: 'ol',
          data: [
            {
              id: 'b3i7u1',
              item: 'SW 산업은 12대 산업군 중 가장 높은 인력 부족률을 기록하여 지속적인 인재 수요가 존재한다.',
            },
            {
              id: 'b3i7u2',
              item: 'AI 기술 발전에도 불구하고 전체 채용률은 95% 수준을 유지하며 급격한 변동이 없었다.',
            },
            {
              id: 'b3i7u3',
              item: "빅테크 기업 중심의 'AI 구조조정' 보도가 전체 IT 산업의 현실과 다른 인식을 형성하고 있으며, 실제 산업 전반에서는 여전히 인력 부족 상황이 지속되고 있다.",
            },
          ],
        },
      ],
    },
  ],
};

// title 유무에 따라 조건부 렌더링이 되는 title
export const dummyDataProps: IContentProps = {
  title: '가설 검증 🔍',
  data: {
    id: 'demand-analysis',
    title: '수요 분석',
    contents: [
      {
        id: 'industry-shortage-analysis',
        title: '산업별 인력 부족률 분석',
        contents: [
          {
            id: 'industry-shortage-text',
            type: 'text',
            data: 'SW 산업은 12대 산업군 중 가장 높은 부족률을 기록하고 있으며, 시장 전망을 고려할 때 IT 인력에 대한 지속적인 수요가 예상된다. 이는 공급 과잉보다는 오히려 수요 초과 상황을 시사한다.',
          },
        ],
      },
      {
        id: 'recruitment-rate-trends',
        title: '채용률 변화 추이',
        contents: [
          {
            id: 'recruitment-rate-text',
            type: 'text',
            data: '전체 채용률은 2022년 11월 ChatGPT 출시와 2023년 4월 GPT-4 출시 이후에도 약 95% 수준을 유지하여 급격한 변동을 보이지 않았다. 이는 AI 기술 발전이 채용 시장에 즉각적인 부정적 영향을 미치지 않았음을 보여준다.',
          },
        ],
      },
      {
        id: 'ai-job-replacement-discourse',
        title: "인식과 현실의 괴리: 'AI 일자리 대체' 담론 분석",
        contents: [
          {
            id: 'ai-discourse-text-1',
            type: 'text',
            data: "'AI 구조조정' 관련 언론 보도를 분석한 결과, 대부분의 기사가 '빅테크' 기업에 집중되어 있었다. 이는 전체 IT 산업의 현실을 대변하지 못하는 선택적 보도로 인한 인식 왜곡 가능성을 시사한다.",
          },
          {
            id: 'ai-discourse-text-2',
            type: 'text',
            data: '산업통상자원부의 2024년 인력수급실태조사에 따르면, 기업 규모별 부족률은 다음과 같다.',
          },
          {
            id: 'company-size-shortage-list',
            type: 'ul',
            data: [
              {
                id: 'large-company',
                item: '대기업: 0.5%',
              },
              {
                id: 'sme-company',
                item: '중소기업: 3.0%',
              },
              {
                id: 'company-10-29',
                item: '10인~29인 기업: 3.8%',
              },
              {
                id: 'company-30-99',
                item: '30인~99인 기업: 3.1%',
              },
              {
                id: 'company-100-299',
                item: '100인~299인 기업: 2.0%',
              },
            ],
          },
          {
            id: 'ai-discourse-text-3',
            type: 'text',
            data: '이 데이터는 기업 규모가 작을수록 인력 부족 현상이 심화됨을 보여주며, 전체 시장에서는 여전히 공급 부족 상황이 지속되고 있음을 나타낸다.',
          },
          {
            id: 'ai-discourse-text-4',
            type: 'text',
            data: "현재까지의 데이터 분석 결과, AI 기술 변화가 채용 시장에 미치는 즉각적이고 급격한 영향은 제한적인 것으로 판단된다. DX(Digital Transformation) 및 AX(AI Transformation) 전환으로 인한 디지털 일자리 수급 변화가 진행되고 있는 상황에서, 'AI로 인한 급격한 일자리 감소로 디지털 인재 수요가 줄었다'라는 결론은 보다 신중한 접근이 필요하다.",
          },
          {
            id: 'ai-discourse-text-5',
            type: 'text',
            data: "지금까지의 분석을 통해 공급-수요 불균형 가설의 '수요' 측면을 검토한 결과, 다음과 같은 현황이 확인되었다.",
          },
          {
            id: 'demand-analysis-summary-list',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage',
                item: 'SW 산업은 12대 산업군 중 가장 높은 인력 부족률을 기록하여 지속적인 인재 수요가 존재한다',
              },
              {
                id: 'recruitment-rate-stable',
                item: 'AI 기술 발전에도 불구하고 전체 채용률은 95% 수준을 유지하며 급격한 변동이 없었다.',
              },
              {
                id: 'media-perception-gap',
                item: "빅테크 기업 중심의 'AI 구조조정' 보도가 전체 IT 산업의 현실과 다른 인식을 형성하고 있으며, 실제 산업 전반에서는 여전히 인력 부족 상황이 지속되고 있다.",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const dummyData2Props: IContentProps = {
  data: {
    id: 'supply-analysis',
    title: '공급 분석',
    contents: [
      {
        id: 'government-digital-talent-policy',
        title: '정부의 디지털 인재 양성 정책',
        contents: [
          {
            id: 'government-policy-text-1',
            type: 'text',
            data: '정부는 SW 산업의 높은 인력 부족률에 대응하기 위해 KDT(K-디지털 트레이닝) 사업을 통한 적극적인 인재 양성 정책을 추진해왔다. 이러한 정책 판단은 다음과 같은 시장 전망에 근거한다.',
          },
          {
            id: 'market-outlook-list',
            type: 'ul',
            data: [
              {
                id: 'global-market-outlook',
                item: '글로벌 시장 전망: 가트너는 글로벌 소프트웨어 산업이 2027년까지 고성장세를 지속할 것으로 예측했다.',
              },
              {
                id: 'domestic-market-outlook',
                item: '국내 시장 전망: 과기정통부 ICT주요품목동향조사에서는 2028년까지의 성장을 전망했다.',
              },
              {
                id: 'workforce-supply-limitation',
                item: '인력 공급 한계: 기존 학부 졸업생만으로는 SW 인력 수급 격차를 해소하기 어려운 상황이었다.',
              },
            ],
          },
          {
            id: 'government-policy-text-2',
            type: 'text',
            data: '이에 따라 정부는 2021년부터 2025년까지 KDT 예산을 약 115% 급증시켜 SW 인재 양성에 대한 강력한 의지를 보여주었다.',
          },
        ],
      },
      {
        id: 'education-expansion-employment-decline',
        title: '교육 확대와 취업률 하락의 역설',
        contents: [
          {
            id: 'education-expansion-text-1',
            type: 'text',
            data: '그러나 교육 규모 확대와 실제 취업 성과 사이에는 상당한 괴리가 발생하고 있다. KDT 부트캠프 수료자의 6개월 기준 취업률은 다음과 같은 하락 추세를 보인다.',
          },
          {
            id: 'employment-rate-decline-list',
            type: 'ul',
            data: [
              {
                id: 'employment-rate-2021',
                item: '2021년: 67.0%',
              },
              {
                id: 'employment-rate-2023',
                item: '2023년: 54.3%',
              },
              {
                id: 'employment-rate-decline',
                item: '하락폭: 약 12.7%p (19% 감소)',
              },
            ],
          },
        ],
      },
      {
        id: 'supply-demand-mismatch',
        title: '공급-수요 미스매치 현상',
        contents: [
          {
            id: 'supply-demand-text-1',
            type: 'text',
            data: '주의깊게 볼 점은 여전히 시장의 부족율은 12대 산업군 최고이며, 채용 시장이 23년에는 급격히 줄어들지 않았다는 점이다. 시장 수요와 채용 규모가 유지되는 상황에서 취업률이 하락한 것은 다음과 같은 구조적 문제를 시사한다.',
          },
          {
            id: 'structural-problems-list',
            type: 'ul',
            data: [
              {
                id: 'education-job-market-gap',
                item: '교육과 실제 취업 시장 간의 연계 부족',
              },
              {
                id: 'market-requirement-mismatch',
                item: '시장 요구와 공급 인력 간의 역량 미스매치',
              },
              {
                id: 'qualitative-gap',
                item: '단순한 인력 공급 증가만으로는 해결되지 않는 질적 격차',
              },
            ],
          },
        ],
      },
      {
        id: 'recruitment-market-challenges',
        title: '채용 시장의 애로사항 분석',
        contents: [
          {
            id: 'recruitment-challenges-text-1',
            type: 'text',
            data: '2024년 정보기술분야 산업인력현황 분석 보고서에 따르면, 기업들의 주요 채용 애로사항은 다음과 같다.',
          },
          {
            id: 'recruitment-challenges-list',
            type: 'ul',
            data: [
              {
                id: 'skilled-workforce-shortage',
                item: '필요한 역량을 갖춘 인력 부족 (34.9%)',
              },
              {
                id: 'labor-cost-burden',
                item: '채용에 따르는 인건비 부담 (33.3%)',
              },
              {
                id: 'excellent-talent-shortage',
                item: '우수한 인력의 입사 지원 부족 (14.8%)',
              },
            ],
          },
          {
            id: 'recruitment-challenges-text-2',
            type: 'text',
            data: "가장 큰 애로사항이 '역량 부족'인 점은 양적 공급보다 질적 역량의 중요성을 부각시킨다.",
          },
        ],
      },
      {
        id: 'education-target-composition-limitations',
        title: '교육 대상의 구성과 한계',
        contents: [
          {
            id: 'education-target-text',
            type: 'text',
            data: '2024년 재정지원 일자리사업 평가에서는 부트캠프 참여자의 약 60~70%가 비전공자로 구성되어 있으며, 이들이 고난도 교육과정을 수강하는 데 어려움을 겪고 있다고 분석했다. 이는 교육 대상의 기초 역량과 교육 과정의 수준 간 격차가 존재함을 보여준다.',
          },
        ],
      },
    ],
  },
};
export const dummyData3Props: IContentProps = {
  data: {
    id: 'major-background-analysis',
    title: '전공 배경별 취업 시장 현황과 미스매치 분석',
    contents: [
      {
        id: 'sw-industry-major-proportion',
        title: 'SW 산업 내 전공자 비중 분석',
        contents: [
          {
            id: 'sw-major-proportion-text',
            type: 'text',
            data: 'SW 전문인력의 전공 분포를 살펴보면 다음과 같은 특징을 보인다.',
          },
          {
            id: 'sw-major-distribution-list',
            type: 'ul',
            data: [
              {
                id: 'sw-major',
                item: 'SW계열: 79.5% (압도적 다수)',
              },
              {
                id: 'engineering-major',
                item: '공학계열: 9.7%',
              },
              {
                id: 'natural-science-major',
                item: '자연계열: 6.8%',
              },
              {
                id: 'other-major',
                item: '기타: 4.0%',
              },
            ],
          },
          {
            id: 'sw-major-proportion-summary',
            type: 'text',
            data: '위와 같이 산업에서 이공계열이 차지하는 비중이 SW계열, 공학계열, 자연계열을 합쳐 96%로 압도적이다.',
          },
        ],
      },
      {
        id: 'education-recruitment-mismatch',
        title: '교육과 채용 시장 간의 구조적 불일치',
        contents: [
          {
            id: 'structural-mismatch-text-1',
            type: 'text',
            data: '산업 현장에서 실제 채용하는 인력과 교육 프로그램의 공급 구조 사이에 근본적인 불일치가 존재한다. 산업 현장은 통계적으로 아래와 같은 인재를 선호한다.',
          },
          {
            id: 'industry-preferred-talent-list',
            type: 'ul',
            data: [
              {
                id: 'major-background-preference',
                item: '전공자 또는 공학·자연계열 출신',
              },
              {
                id: 'systematic-education-preference',
                item: '체계적이고 장기적인 교육을 받은 숙련된 인력',
              },
            ],
          },
          {
            id: 'structural-mismatch-text-2',
            type: 'text',
            data: '부트캠프는 구조적으로 아래와 같은 특징을 가지고 있다.',
          },
          {
            id: 'bootcamp-characteristics-list',
            type: 'ul',
            data: [
              {
                id: 'non-major-composition',
                item: '참여자의 60% ~ 70%가 비전공자로 구성',
              },
              {
                id: 'short-intensive-education',
                item: '단기 집약적 교육 방식으로 운영',
              },
              {
                id: 'uniform-curriculum',
                item: '전공자와 비전공자를 구분하지 않는 획일적 커리큘럼',
              },
            ],
          },
        ],
      },
      {
        id: 'education-program-improvement',
        title: '교육 프로그램의 개선 방안',
        contents: [
          {
            id: 'improvement-text-1',
            type: 'text',
            data: '현재 KDT 교육 체계의 한계를 극복하고 시장에서 원하는 인재를 양성하기 위해서는 다음과 같은 차등화 전략이 필요하다.',
          },
          {
            id: 'differentiated-strategy-list',
            type: 'ul',
            data: [
              {
                id: 'major-basic-track',
                item: '전공자 대상의 기초 트랙: 실무 적응을 위한 심화 과정, 포트폴리오 구축 과정, 팀프로젝트 과정',
              },
              {
                id: 'major-advanced-track',
                item: '전공자 대상의 고도화 트랙: 전문 영역 특화 과정',
              },
              {
                id: 'non-major-basic-track',
                item: '비전공자 대상의 기초 트랙: CS 기초 이론부터 체계적 학습 과정',
              },
              {
                id: 'non-major-advanced-track',
                item: '비전공자 대상의 고도화 트랙: 실무 프로젝트 중심의 포트폴리오 구축 과정, 팀프로젝트 과정, 특화 전략 프로그램 함께 운영',
              },
            ],
          },
          {
            id: 'improvement-text-2',
            type: 'text',
            data: '기존 KDT는 수강생의 배경을 고려하지 않은 커리큘럼 중심의 획일적 구성으로 운영되어, 전공자와 비전공자 모두에게 최적화되지 못한 교육 효과를 보이고 있다.',
          },
        ],
      },
      {
        id: 'non-major-specialized-strategy',
        title: '비전공자를 위한 특화 전략',
        contents: [
          {
            id: 'specialized-strategy-text-1',
            type: 'text',
            data: '비전공자의 경우 전공자 대비 불리한 취업 조건을 극복하기 위한 차별화된 접근이 필요하다.',
          },
          {
            id: 'specialized-strategy-list',
            type: 'ul',
            data: [
              {
                id: 'opensource-contribution',
                item: '오픈소스 프로젝트 기여',
              },
              {
                id: 'real-service-project',
                item: '실제 서비스 규모의 프로젝트 수행',
              },
              {
                id: 'conference-presentation',
                item: '컨퍼런스 발표',
              },
              {
                id: 'systematic-portfolio',
                item: '체계적인 포트폴리오 구축',
              },
              {
                id: 'book-publishing',
                item: '책 출판',
              },
            ],
          },
          {
            id: 'specialized-strategy-text-2',
            type: 'text',
            data: '이러한 특화 전략을 펼치더라도 실제 채용 시장에 구조로 보았을 때 전공자 대비 취업하기 힘들기 때문에 시장에 맞춰 해당 트랙의 수를 조절할 필요가 있다.',
          },
        ],
      },
    ],
  },
};
// TODO: 디자인 가장 위에 있는 가설 검증과 종합 분석 및 결론을 어떻게 쓸 지?
export const dummyData4Props: IContentProps = {
  title: '종합 분석 및 결론',
  data: {
    id: 'comprehensive-analysis-conclusion',
    title: '종합 분석 및 결론',
    contents: [
      {
        id: 'hypothesis-verification-result',
        title: '가설 검증 결과',
        contents: [
          {
            id: 'hypothesis-verification-text-1',
            type: 'text',
            data: '"IT 인력 공급이 수요를 초과하여 취업 경쟁이 심화되고 있다"는 초기 가설에 대한 분석 결과, 단순한 공급 과잉보다는 수요-공급 간 미스매치가 핵심 문제로 확인되었다. 주요 검증 근거는 아래와 같다.',
          },
          {
            id: 'verification-evidence-list',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage',
                item: 'SW 산업은 12대 산업군 중 가장 높은 인력 부족률을 지속적으로 기록',
              },
              {
                id: 'company-recruitment-difficulty',
                item: '기업 채용 애로사항 중 "필요한 역량을 갖춘 인력 부족"이 34.9%로 최고 비율',
              },
              {
                id: 'qualitative-mismatch',
                item: '양적 부족이 아닌 질적 불일치가 취업난의 근본 원인',
              },
            ],
          },
        ],
      },
      {
        id: 'education-expansion-competition-paradox',
        title: '교육 규모 확대와 경쟁 심화의 역설',
        contents: [
          {
            id: 'education-expansion-text-1',
            type: 'text',
            data: 'KDT 사업의 급속한 확장이 의도하지 않은 경쟁 구조를 형성하고 있다. 특히 현장에서 원하는 숙련된 인재가 양성되지 못한다는 구조적 한계를 가지고 있다. 산업 특화 전문 교육이 아닌 커리큘럼으로 교육받은 KDT 수료생이 2021년 11,727명에서 2024년 37,628명으로 3배 이상 급증하면서, 유사 역량을 가진 구직자들 간의 취업 경쟁이 심화되고 있다.',
          },
          {
            id: 'education-expansion-text-2',
            type: 'text',
            data: '실제로 이런 경쟁 심화는 구체적인 지표로도 확인된다. KDT 수료 후 6개월 내 취업률은 2021년 67.0%에서 2023년 54.3%로 지속적으로 하락했으며, 관련 직종 취업률 역시 78.7%에서 73.1%로 감소했다.',
          },
        ],
      },
      {
        id: 'mismatch-structural-causes',
        title: '미스매치 현상의 구조적 원인',
        contents: [
          {
            id: 'structural-causes-text-1',
            type: 'text',
            data: '현재 상황은 시장 수요는 존재하나 공급된 인력이 요구 역량을 충족하지 못하는 구조적 문제로 요약할 수 있다.',
          },
          {
            id: 'structural-causes-text-2',
            type: 'text',
            data: '수요 측면을 요약하자면 아래와 같다.',
          },
          {
            id: 'demand-side-summary-list',
            type: 'ul',
            data: [
              {
                id: 'major-skilled-workforce-preference',
                item: '산업 현장에서는 전공자 중심의 숙련된 인력 선호 (이공계 96% 비중)',
              },
              {
                id: 'sme-workforce-shortage',
                item: '중소기업일수록 심화되는 인력 부족 (대기업 대비 6배 인력 부족률)',
              },
              {
                id: 'problem-solving-talent-demand',
                item: '단순 기능보다는 문제 해결 능력을 갖춘 인재 요구',
              },
            ],
          },
          {
            id: 'structural-causes-text-3',
            type: 'text',
            data: '공급 측면을 요약하자면 아래와 같다.',
          },
          {
            id: 'supply-side-summary-list',
            type: 'ul',
            data: [
              {
                id: 'non-specialized-curriculum',
                item: '수요기업의 요구사항에 맞게 특화되지 못한 커리큘럼',
              },
              {
                id: 'standardized-approach',
                item: '전공자와 비전공자를 구분하지 않는 표준화된 접근',
              },
              {
                id: 'basic-competency-gap',
                item: '기초 역량 격차를 고려하지 않은 교육 설계',
              },
              {
                id: 'undifferentiated-budget',
                item: 'KDT 예산의 전공자/비전공자 구분되지 못한 예산 편성',
              },
            ],
          },
        ],
      },
      {
        id: 'policy-implications',
        title: '정책적 시사점',
        contents: [
          {
            id: 'policy-implications-text-1',
            type: 'text',
            data: '향후 IT 인력 양성 정책은 다음과 같은 방향으로 전환되어야 한다.',
          },
          {
            id: 'policy-direction-1',
            type: 'text',
            data: '1. 양적 확대에서 질적 향상으로 가야한다. 단순한 교육 규모 증대보다는 산업 현장의 다양한 수요를 반영한 차별화된 교육 과정 개발이 우선되어야 한다.',
          },
          {
            id: 'policy-direction-2',
            type: 'text',
            data: '2. 맞춤형 교육 체계가 구축되어야 한다. 전공자와 비전공자의 서로 다른 강점과 학습 배경을 고려한 수준별·목적별 트랙 운영을 통해 획일화된 인력 배출 구조를 개선해야 한다. 또한 부족한 역량만 들을 수 있도록 세부 과목도 쪼갤 필요가 있다. 이것이 KDT 예산에서도 구분되어 반영되어야 한다. 이미 일반 트랙과 심화 트랙으로 구분되어있는 것과 달리 일반 트랙에서부터 구분되어 반영되어야 한다.',
          },
          {
            id: 'policy-direction-3',
            type: 'text',
            data: '3. 전문성과 다양성의 균형을 갖출 수 있도록 지원해야 한다. 표준화된 기초 스킬셋에서 벗어나 개별 학습자의 특성을 살린 전문 영역 개발을 지원하여, 시장에서의 차별화된 경쟁력 확보가 가능하도록 해야 한다.',
          },
          {
            id: 'policy-implications-conclusion',
            type: 'text',
            data: '결론적으로, 현재 IT 취업 시장의 어려움은 절대적 일자리 부족보다는 교육과 산업 현장 간의 연계 부족에서 기인하며, 이를 해결하기 위해서는 교육 정책의 근본적 재설계가 필요한 시점이다.',
          },
        ],
      },
    ],
  },
};
