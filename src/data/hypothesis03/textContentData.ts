import type { IHypothesisContentProps } from '../../types/IHypothesisTextData';

// title 유무에 따라 조건부 렌더링이 되는 title
export const HypothesisData: IHypothesisContentProps = {
  // title: 'AI 업무 활용자(IT/개발자)의 위협 인식과 구직자 불안감',
  data: {
    id: 'demand-analysis',
    title: 'AI 업무 활용자(IT/개발자)의 위협 인식과 구직자 불안감',
    contents: [
      {
        id: 'industry-shortage-analysis',
        title: '내용',
        contents: [
          {
            id: 'industry-shortage-text',
            type: 'text',
            data: '전반적인 한국인 인식과 AI를 실제로 다루는 직군(IT/개발자)의 높은 위협 인식을 대조하고, 이것이 구직자들의 행동 변화로 이어진다는 흐름을 보여줍니다.',
          },
        ],
      },
      {
        id: 'recruitment-rate-trends',
        title: '목적',
        contents: [
          {
            id: 'recruitment-rate-text',
            type: 'text',
            data: 'AI 위협 인식이 단순한 막연한 불안감이 아니라, AI를 직접 다루는 직군에서 더 높게 체감되며, 이것이 구직자들의 취업 전략 수정이라는 구체적인 행동 변화로 이어진다는 것을 강조합니다.',
          },
        ],
      },
    ],
  },
};

export const HypothesisData2: IHypothesisContentProps = {
  // title: 'IT/개발 직군 내 AI 대체 위협 체감 (업무 활용자, 관리직) 및 예상 시기',
  data: {
    id: 'demand-analysis',
    title:
      'IT/개발 직군 내 AI 대체 위협 체감 (업무 활용자, 관리직) 및 예상 시기',
    contents: [
      {
        id: 'industry-shortage-analysis',
        title: '내용',
        contents: [
          {
            id: 'industry-shortage-text',
            type: 'text',
            data: 'IT/개발자 직군의 실무자와 관리자 모두 AI 대체 위협을 체감하고 있음을 보여주며, 특히 구성원 업무의 대체가 더 빠를 것이라는 인식을 통해 기업의 채용 보류 경향을 간접적으로 뒷받침합니다.',
          },
        ],
      },
      {
        id: 'recruitment-rate-trends',
        title: '목적',
        contents: [
          {
            id: 'recruitment-rate-text',
            type: 'text',
            data: 'AI 위협 인식이 IT/개발 직군 내에서도 보편적이며, 단기적/중기적인 변화가 예상됨을 강조합니다',
          },
        ],
      },
    ],
  },
};

export const HypothesisData3: IHypothesisContentProps = {
  // title: 'AI 대체 위협 인식과 실제 IT 직무 채용 감소의 상관 관계,
  data: {
    id: 'demand-analysis',
    title: 'AI 대체 위협 인식과 실제 IT 직무 채용 감소의 상관 관계',
    contents: [
      {
        id: 'industry-shortage-analysis',
        title: '내용',
        contents: [
          {
            id: 'industry-shortage-text',
            type: 'text',
            data: '높은 AI 대체 위협 인식이 특정 IT 직무의 실제 일자리 감소로 이어지고 있음을 명확히 보여줍니다.',
          },
        ],
      },
      {
        id: 'recruitment-rate-trends',
        title: '목적',
        contents: [
          {
            id: 'recruitment-rate-text',
            type: 'text',
            data: "추상적인 '인식'이 구체적인 '일자리 감소'로 발현되고 있음을 시각적으로 연결하여 가설의 핵심을 증명합니다.",
          },
        ],
      },
    ],
  },
};

// TODO: 디자인 가장 위에 있는 가설 검증과 종합 분석 및 결론을 어떻게 쓸 지?
export const HypothesisData4: IHypothesisContentProps = {
  // title: '종합 분석 및 결론 도출',
  data: {
    id: 'comprehensive-analysis-conclusion',
    title: '종합 분석 및 결론 도출',
    type: 'ol',
    contents: [
      {
        id: 'hypothesis-verification-result-1',
        title: '1. AI 대체 위협 인식의 확산',
        contents: [
          {
            id: 'hypothesis-verification-text-1',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage',
                item: '전체 한국인의 35.4%가 AI가 자신의 업무 능력을 위협한다고 인식하고 있으며, 실제 IT/개발 직군(특히 AI를 직접 활용하는 업무자)에서는 이 비율이 48.8%로 더욱 높게 나타남.',
              },
              {
                id: 'sw-industry-shortage',
                item: '관리자 역시 구성원 업무의 AI 대체 가능성을 높게 평가(47.9%)하며, 10년 이내 대체될 것이라는 전망이 우세함.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-2',
        title: '2. 구직자 행동 변화',
        contents: [
          {
            id: 'hypothesis-verification-text-1',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage',
                item: ' AI 대체 불안감으로 인해 구직자의 73%가 취업 전략을 수정해야 한다고 응답, 이는 단순한 인식 수준을 넘어 실제 행동 변화로 이어지고 있음.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-3',
        title: '3. 실제 IT 직무 채용 감소',
        contents: [
          {
            id: 'hypothesis-verification-text-1',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage',
                item: '반복적/단순 업무(예: QA/테스터) 분야에서 채용공고가 1년 새 41% 감소하는 등, AI 대체 위협 인식이 실제 IT 채용 시장의 위축으로 연결되고 있음.',
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis-verification-result-4',
        title: '4. 시사점',
        contents: [
          {
            id: 'hypothesis-verification-text-1',
            type: 'ul',
            data: [
              {
                id: 'sw-industry-shortage',
                item: 'AI 기술 발전은 IT/개발 직군에서 일자리 대체에 대한 불안과 실제 채용 감소라는 이중적 영향을 미치고 있음.',
              },
              {
                id: 'sw-industry-shortage',
                item: '기업은 AI 도입에 따라 인력 구조 재편을 적극적으로 고려하고 있으며, 구직자 역시 이에 맞춰 역량 개발 및 전략 수정이 필수적임.',
              },
              {
                id: 'sw-industry-shortage',
                item: '반복적·단순 업무 중심의 IT 직무는 AI 대체 위험이 높으므로, 향후 IT 인재는 창의적 문제 해결, AI 활용 역량 등 차별화된 경쟁력을 갖추는 것이 중요함.',
              },
            ],
          },
        ],
      },
      {
        id: 'industry-shortage-analysis',
        title: '결론',
        contents: [
          {
            id: 'industry-shortage-text',
            type: 'text',
            data: 'AI 대체 위협 인식은 IT 채용 시장의 위축과 구직자 행동 변화, 실제 일자리 감소로 이어지고 있다. IT/개발 직군은 AI 시대에 맞는 역량 강화와 전략적 대응이 필수적이다.',
          },
        ],
      },
    ],
  },
};
