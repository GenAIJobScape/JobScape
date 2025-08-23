import type { IHypothesisContentProps } from '../../types/IHypothesisTextData';

// title 유무에 따라 조건부 렌더링이 되는 title
export const HypothesisData: IHypothesisContentProps = {
  // title: '',
  data: {
    id: 'comprehensive-analysis-conclusion',
    title: '분석 근거',
    type: 'ol',
    contents: [
      {
        id: 'hypothesis-verification-result-1',
        title: '1. 전체 산업의 경력 선호 추세',
        contents: [
          {
            id: 'hypothesis-verification-text-1',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage-1',
                item: '동일 기간 대비 신입보다 경력 공고의 비중이 높게 나타납니다.',
              },
              {
                id: 'sw-industry-shortage-2',
                item: '채용 단위(공고 수·모집 인원) 모두에서 경력의 비중 우위가 확인됩니다.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-2',
        title: '2. IT/SW 분야의 특이성',
        contents: [
          {
            id: 'hypothesis-verification-text-2',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage-1',
                item: '개발·데이터·인프라 등 SW 직무군은 업무 투입까지의 적응 시간과 리스크를 최소화하려는 경향이 강합니다.',
              },
              {
                id: 'sw-industry-shortage-2',
                item: '최신 프레임워크/툴 경험과 배포 운영 능력 등 현업 호환성 지표가 채용 성패를 좌우합니다.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-3',
        title: '3. 즉시 투입 가능성(Plug-and-Play) 선호',
        contents: [
          {
            id: 'hypothesis-verification-text-3',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage-1',
                item: '신입 채용 시 필요한 교육·멘토링·품질 검증 비용이 커져, 프로젝트 일정 압박이 큰 팀일수록 경력 선호가 강화됩니다.',
              },
              {
                id: 'sw-industry-shortage-2',
                item: '단기 계약·프로젝트 베이스 투입 등 유연 고용도 경력 수요를 밀어올립니다.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-4',
        title: '4. 채용 방식 변화',
        contents: [
          {
            id: 'hypothesis-verification-text-4',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage-1',
                item: '상시채용·수시채용 전환, 레퍼럴 강화, 과제 기반 실무 테스트 등 실무 검증 중심으로 바뀌고 있습니다.',
              },
              {
                id: 'sw-industry-shortage-2',
                item: '신입도 현장 호환성(코드 품질·배포 경험·협업 툴 사용)을 객관화해 보여줄 필요가 있습니다.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-5',
        title: '결론',
        contents: [
          {
            id: 'hypothesis-verification-text-5',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage-1',
                item: '전체 산업 및 IT/SW 직무에서 경력직 비중 우세가 명확합니다.',
              },
              {
                id: 'sw-industry-shortage-2',
                item: '가설 “경력직 수요는 높고, 신입 취업은 상대적으로 어렵다”는 데이터로 지지됩니다.',
              },
              {
                id: 'sw-industry-shortage-3',
                item: '신입 지원자는 실무형 포트폴리오, 인턴·알바성 실무, 오픈소스 기여, 부트캠프 후 현업 연계 프로젝트 등으로 준(準)경력 신호를 쌓는 전략이 필요합니다.',
              },
              {
                id: 'sw-industry-shortage-4',
                item: '기업은 주니어 온보딩 체계(멘토링·코드리뷰·러닝 커리큘럼)를 도입할 경우, 인재 파이프라인 확장과 조직 장기 경쟁력 확보에 유리합니다.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-6',
        title: '데이터 및 방법',
        contents: [
          {
            id: 'hypothesis-verification-text-6',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage-1',
                item: '분석 데이터: 제공된 2023년 연간 및 2025년 1분기 요약 자료 기반(공고·모집 인원·경력 구분 등).',
              },
              {
                id: 'sw-industry-shortage-2',
                item: '처리 개요: 직무/산업군 분류 정리, 경력·신입 비중 비교, 시계열 흐름 점검, 직무별 특징 서술.',
              },
              {
                id: 'sw-industry-shortage-3',
                item: '한계: 표본 구성과 분류 체계에 따라 해석 편향 가능. 지역·기업 규모·세부 직무 레벨 등의 세분 분석이 추가되면 정밀도가 높아집니다.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-7',
        title: '시사점',
        contents: [
          {
            id: 'hypothesis-verification-text-7',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage-1',
                item: '구직자(신입): 포트폴리오(실서비스·배포 링크·성능지표), 팀협업 경험, 코드 품질(테스트·CI/CD)로 현업 호환성을 증명하세요.',
              },
              {
                id: 'sw-industry-shortage-2',
                item: '기업: 주니어 온보딩과 러닝 커브 관리 체계를 갖추면 경력 의존 리스크 분산과 인건비 최적화에 기여합니다.',
              },
            ],
          },
        ],
      },
    ],
  },
};

export const HypothesisData2: IHypothesisContentProps = {
  data: {
    id: '',
    title:
      '시각화 1: IT 업계 채용 공고 수 증감률 (2024년 1분기 대비 2025년 1분기)',
    type: 'ol',
    contents: [
      {
        id: 'hypothesis-verification-1',
        title: '가설 검증',
        contents: [
          {
            id: 'hypothesis-text-1',
            type: 'text',
            data: '"신입 개발자 취업은 어려워졌지만" (채용 기회 감소)"',
          },
        ],
      },
      {
        id: 'hypothesis-description-1',
        title: '설명',
        contents: [
          {
            id: 'description-text-1',
            type: 'text',
            data: '전체 IT 업계 공고 수, 신입 공고 수, 경력직 공고 수의 전년 대비 감소폭을 직접 비교하여 신입의 감소폭이 가장 크다는 것을 보여줍니다.',
          },
        ],
      },
    ],
  },
};

export const HypothesisData3: IHypothesisContentProps = {
  data: {
    id: '',
    title:
      '시각화 2: IT 개발 직무 채용 공고 중 경력직 비중 변화 (2024년 1분기 vs. 2025년 1분기)',
    type: 'ol',
    contents: [
      {
        id: 'hypothesis-verification-1',
        title: '가설 검증',
        contents: [
          {
            id: 'hypothesis-text-1',
            type: 'text',
            data: '"경력직 수요는 여전히 높다" (상대적 수요 증가)"',
          },
        ],
      },
      {
        id: 'hypothesis-description-1',
        title: '설명',
        contents: [
          {
            id: 'description-text-1',
            type: 'text',
            data: '전체 채용 공고에서 경력직이 차지하는 비중이 2024년 1분기 대비 2025년 1분기에 어떻게 변화했는지 보여줍니다.',
          },
        ],
      },
    ],
  },
};

export const HypothesisData4: IHypothesisContentProps = {
  data: {
    id: '',
    title:
      '시각화 3: 2025년 1분기 IT 개발 및 데이터 관련 구인 공고의 경력 유형별 비중',
    type: 'ol',
    contents: [
      {
        id: 'hypothesis-verification-1',
        title: '가설 검증',
        contents: [
          {
            id: 'hypothesis-text-1',
            type: 'text',
            data: '"신입 대비 경력직의 채용공고 비율" 및 "경력직 수요는 여전히 높다"',
          },
        ],
      },
      {
        id: 'hypothesis-description-1',
        title: '설명',
        contents: [
          {
            id: 'description-text-1',
            type: 'text',
            data: '2025년 1분기 IT 개발 및 데이터 관련 직무에서 신입, 경력, 신입/경력 무관 공고가 각각 어느 정도의 비중을 차지하는지 보여줍니다.',
          },
        ],
      },
    ],
  },
};

export const HypothesisData5: IHypothesisContentProps = {
  data: {
    id: '',
    title:
      '시각화 4: 2023년 산업 분야별 경력자/신입자 채용 비중 (소프트웨어 산업 강조)',
    type: 'ol',
    contents: [
      {
        id: 'hypothesis-verification-1',
        title: '가설 검증',
        contents: [
          {
            id: 'hypothesis-text-1',
            type: 'text',
            data: '"기업들이 즉시 투입 가능한 인력을 선호하는 경향" (경력직 선호의 역사적 배경)',
          },
        ],
      },
      {
        id: 'hypothesis-description-1',
        title: '설명',
        contents: [
          {
            id: 'description-text-1',
            type: 'text',
            data: '2023년 데이터이지만, 소프트웨어 산업을 포함한 주요 산업별로 경력자와 신입자의 채용 비중을 비교하여 경력직 선호가 IT 산업에서 이미 높은 수준이었음을 보여줍니다.',
          },
        ],
      },
    ],
  },
};

export const HypothesisData6: IHypothesisContentProps = {
  data: {
    id: '',
    title: '시각화 5: 2023년 산업 대분류별 경력자/신입자 구인인력 비중',
    type: 'ol',
    contents: [
      {
        id: 'hypothesis-verification-1',
        title: '목적',
        contents: [
          {
            id: 'hypothesis-text-1',
            type: 'text',
            data: '"기업의 구인(수요) 측면에서 경력직 선호가 산업 전반, 특히 IT/SW 부문에서 어떻게 나타나는지 시각화합니다.',
          },
        ],
      },
      {
        id: 'hypothesis-description-1',
        title: '내용',
        contents: [
          {
            id: 'description-text-1',
            type: 'text',
            data: "각 산업 대분류별로 '경력자'와 '신입자' 구인인력의 절대 규모와 상대적 비중을 보여줍니다. 'IT/SW 서비스 부문'을 강조하여 경력자 구인 비중이 높다는 것을 명확히 드러낼 수 있습니다.",
          },
        ],
      },
    ],
  },
};

export const HypothesisData7: IHypothesisContentProps = {
  title: '종합 분석 및 결론 도출',
  data: {
    id: 'comprehensive-analysis',
    title: 'AI 시대, IT 개발자 채용 시장 요약 (2023년~2025년 1분기)',
    type: 'ol',
    contents: [
      {
        id: 'conclusion-1',
        title: '1. 신입 채용 기회 급감',
        contents: [
          {
            id: 'conclusion-1-text',
            type: 'text',
            data: '2025년 1분기 신입 개발자 채용 공고는 전년 대비 18.9% 감소하여, 전체 IT 업계 공고 감소폭(13.4%)보다 훨씬 컸습니다. 이는 신입 개발자의 취업 문이 좁아졌음을 명확히 보여줍니다.',
          },
        ],
      },
      {
        id: 'conclusion-2',
        title: '2. 경력직 수요 압도적 증가',
        contents: [
          {
            id: 'conclusion-2-text',
            type: 'text',
            data: '2025년 1분기 전체 IT 채용 공고 중 경력직 비중은 56%로 전년 대비 5%p 증가했으며, 특히 IT 개발/데이터 직무 구인 공고에서 신입직은 4.4%에 불과한 반면 경력직이 압도적 다수(56%)를 차지했습니다. 이는 기업들이 경력직 인력을 강력하게 선호하고 있음을 시사합니다.',
          },
        ],
      },
      {
        id: 'conclusion-3',
        title: '3. 기업의 즉시 투입 인력 선호',
        contents: [
          {
            id: 'conclusion-3-text',
            type: 'text',
            data: '2023년 구인인력 현황에서도 IT/SW 서비스 부문의 경력자 구인 비율은 63.7%에 달해, AI 등장 이전부터 기업들이 신입보다 숙련된 즉시 투입 가능한 인력을 강력히 선호하고 있었음을 보여줍니다. 이러한 기조가 2025년에도 이어지고 있음을 확인했습니다.',
          },
        ],
      },
      {
        id: 'conclusion-4',
        title: '4. 대기업 신입 공채 감소',
        contents: [
          {
            id: 'conclusion-4-text',
            type: 'text',
            data: '카카오, 엔씨소프트 등 IT 대기업들이 신입 공채 대신 경력직 채용 기조를 유지하는 것은 이러한 시장 변화를 뒷받침하며, 특히 대규모 공채를 통해 신입들이 입사할 수 있는 통로가 줄어들었음을 의미합니다.',
          },
        ],
      },
      {
        id: 'conclusion-5',
        title: '5. 결론',
        contents: [
          {
            id: 'conclusion-5-text',
            type: 'text',
            data: '종합적으로 볼 때, AI 시대에 접어들면서 IT 개발 채용 시장은 전반적으로 위축되었으나, 특히 신입에게는 진입 장벽이 더욱 높아졌습니다. 기업들은 불확실성이 커지는 환경에서 검증된 경력직, 즉시 실무에 투입 가능한 인력을 선호하는 경향이 더욱 강화되고 있습니다. 이는 "신입 개발자 취업은 어려워졌지만, 경력직 수요는 여전히 높다"는 가설을 강력하게 지지합니다.',
          },
        ],
      },
    ],
  },
};
