import { ContentSection, Statistic, ComparisonRow, Sector, CEOQuestion } from '@/lib/types'

export const keyStatistics: Statistic[] = [
  {
    id: 'ai-productivity-gain',
    label: 'Tăng năng suất AI',
    value: '20-50%',
    description: 'Cải thiện năng suất lập trình với AI Assistants',
    trend: 'up'
  },
  {
    id: 'tpg-cost-elimination',
    label: 'Tiết kiệm chi phí',
    value: '150M→0',
    description: 'Dự án website từ 150 triệu thành 0 đồng chi phí',
    trend: 'up'
  },
  {
    id: 'decision-speed',
    label: 'Tăng tốc quyết định',
    value: '95%',
    description: 'Từ 2-3 ngày xuống 30 phút với AI insights',
    trend: 'up'
  },
  {
    id: 'vietnam-leaders-ai-hiring',
    label: 'Lãnh đạo VN ưu tiên AI',
    value: '91%',
    description: 'Vượt mức trung bình toàn cầu trong tuyển dụng AI',
    trend: 'up'
  },
  {
    id: 'ai-agent-automation',
    label: 'Tự động hóa với AI Agent',
    value: '80-90%',
    description: 'Cải thiện hiệu quả tạo mã cơ sở dữ liệu',
    trend: 'up'
  },
  {
    id: 'ceo-ai-readiness',
    label: 'CEO sẵn sàng AI',
    value: '32%',
    description: 'Chỉ 32% nhà lãnh đạo tự tin triển khai AI',
    trend: 'down'
  }
]

export const aiModelComparison: ComparisonRow[] = [
  {
    aspect: 'Cách tiếp cận cốt lõi',
    aiSupported: 'Tăng cường các quy trình hiện có do con người dẫn dắt bằng công cụ AI.',
    aiFirst: 'Xây dựng các quy trình và mô hình kinh doanh mới từ đầu với AI là trung tâm.'
  },
  {
    aspect: 'Mục tiêu chính',
    aiSupported: 'Tăng hiệu quả, năng suất và độ chính xác của nhân viên.',
    aiFirst: 'Tạo ra những cách thức mới, tự động và thông minh để mang lại giá trị; định nghĩa lại quy mô và hiệu quả.'
  },
  {
    aspect: 'Ví dụ',
    aiSupported: 'Công ty luật dùng AI để rà soát hợp đồng; ngân hàng dùng AI hỗ trợ chuyên viên tài chính.',
    aiFirst: 'Hệ thống gợi ý của Netflix; logistics dựa trên AI của Amazon; nền tảng cho vay tự động của startup fintech.'
  },
  {
    aspect: 'Tốc độ thay đổi',
    aiSupported: 'Đổi mới từng bước, cải tiến dần dần.',
    aiFirst: 'Chuyển đổi đột phá, có khả năng gây biến động thị trường.'
  },
  {
    aspect: 'Mức độ rủi ro',
    aiSupported: 'Ít đột phá, lợi nhuận trên đầu tư tăng dần.',
    aiFirst: 'Đột phá cao, tiềm năng lợi nhuận cấp số nhân, nhưng rủi ro thất bại cũng cao hơn.'
  },
  {
    aspect: 'Văn hóa tổ chức',
    aiSupported: 'Con người dẫn dắt, công nghệ hỗ trợ.',
    aiFirst: 'Lấy dữ liệu làm gốc, vận hành theo thuật toán.'
  }
]

export const sectors: Sector[] = [
  {
    id: 'manufacturing',
    name: 'Sản xuất & Chuỗi cung ứng',
    icon: '⚙️',
    description: 'Chuyển đổi sang nhà máy thông minh với AI',
    statistics: [
      {
        id: 'downtime-reduction',
        label: 'Giảm thời gian chết',
        value: '30%',
        description: 'Bảo trì dự đoán giúp giảm thời gian ngừng sản xuất'
      },
      {
        id: 'quality-accuracy',
        label: 'Độ chính xác kiểm tra',
        value: '97%',
        description: 'Hệ thống thị giác máy tính xác định lỗi sản phẩm'
      },
      {
        id: 'demand-forecast',
        label: 'Cải thiện dự báo',
        value: '50%',
        description: 'Giảm sai số dự báo nhu cầu'
      }
    ],
    useCases: [
      {
        id: 'predictive-maintenance',
        title: 'Bảo trì dự đoán',
        description: 'Phân tích dữ liệu cảm biến để dự đoán hỏng hóc trước khi xảy ra',
        benefits: [
          'Giảm 30% thời gian ngừng sản xuất',
          'Tối ưu hóa lịch trình bảo trì',
          'Duy trì lịch sản xuất ổn định'
        ],
        implementation: 'Lắp đặt cảm biến IoT và hệ thống phân tích AI'
      },
      {
        id: 'quality-control',
        title: 'Kiểm soát chất lượng bằng AI',
        description: 'Sử dụng thị giác máy tính để kiểm tra sản phẩm tự động',
        benefits: [
          'Độ chính xác lên đến 97%',
          'Giảm sản phẩm lỗi',
          'Tăng uy tín trên thị trường quốc tế'
        ],
        implementation: 'Triển khai camera AI và thuật toán nhận dạng hình ảnh'
      },
      {
        id: 'supply-chain-optimization',
        title: 'Tối ưu hóa chuỗi cung ứng',
        description: 'AI phân tích dữ liệu để dự báo nhu cầu và tối ưu tồn kho',
        benefits: [
          'Giảm 50% sai số dự báo',
          'Tối ưu hóa mức tồn kho',
          'Tránh thiếu hàng và thừa hàng'
        ],
        implementation: 'Tích hợp AI vào hệ thống ERP và quản lý kho'
      }
    ]
  },
  {
    id: 'agriculture',
    name: 'Nông nghiệp',
    icon: '🌾',
    description: 'Từ làm nông truyền thống đến nông nghiệp chính xác',
    statistics: [
      {
        id: 'productivity-increase',
        label: 'Tăng năng suất',
        value: '300%',
        description: 'Hệ thống AI của Netafim giúp nông dân cà phê'
      },
      {
        id: 'agriculture-labor',
        label: 'Lao động nông nghiệp',
        value: '43%',
        description: 'Tỷ lệ lao động trong nông nghiệp'
      },
      {
        id: 'gdp-contribution',
        label: 'Đóng góp GDP',
        value: '18%',
        description: 'Đóng góp hiện tại vào GDP'
      }
    ],
    useCases: [
      {
        id: 'precision-farming',
        title: 'Canh tác chính xác',
        description: 'AI tối ưu hóa tưới tiêu và chăm sóc cây trồng giá trị cao',
        benefits: [
          'Tăng 300% năng suất cà phê',
          'Tối ưu hóa sử dụng nước',
          'Cải thiện chất lượng sản phẩm'
        ],
        implementation: 'Lắp đặt cảm biến đất và hệ thống tưới thông minh'
      },
      {
        id: 'weather-pest-prediction',
        title: 'Dự báo thời tiết và sâu bệnh',
        description: 'Sử dụng AI để dự báo và phòng chống rủi ro',
        benefits: [
          'Giảm rủi ro mất mùa',
          'Lập kế hoạch canh tác tốt hơn',
          'Chuyển từ bị động sang chủ động'
        ],
        implementation: 'Triển khai máy ghi dữ liệu và hệ thống cảnh báo'
      },
      {
        id: 'traceability',
        title: 'Truy xuất nguồn gốc',
        description: 'AI đảm bảo giám sát và chứng nhận chất lượng',
        benefits: [
          'Đáp ứng tiêu chuẩn quốc tế',
          'Xây dựng lòng tin người mua',
          'Tiếp cận thị trường mới'
        ],
        implementation: 'Blockchain và AI cho theo dõi sản phẩm'
      }
    ]
  },
  {
    id: 'banking',
    name: 'Ngân hàng & Tài chính',
    icon: '🏦',
    description: 'Xây dựng trung tâm tài chính thông minh toàn diện',
    statistics: [
      {
        id: 'digital-transactions',
        label: 'Giao dịch số',
        value: '95%',
        description: 'Tỷ lệ giao dịch được xử lý kỹ thuật số'
      },
      {
        id: 'techcombank-revenue',
        label: 'Doanh thu AI',
        value: '40 triệu USD',
        description: 'Techcombank tạo ra từ AI năm 2024'
      },
      {
        id: 'funding-gap',
        label: 'Khoảng trống tài trợ',
        value: '90 tỷ USD',
        description: 'Thiếu hụt tài trợ thương mại tại Việt Nam'
      }
    ],
    useCases: [
      {
        id: 'ai-lending',
        title: 'Cho vay dựa trên AI',
        description: 'Phân tích dữ liệu thay thế để đánh giá tín nhiệm SME',
        benefits: [
          'Tiếp cận vốn cho SME',
          'Giảm rủi ro cho ngân hàng',
          'Giải quyết khoảng trống 90 tỷ USD'
        ],
        implementation: 'Thuật toán AI phân tích dữ liệu thay thế'
      },
      {
        id: 'personalization',
        title: 'Siêu cá nhân hóa',
        description: 'AI cung cấp dịch vụ và tư vấn cá nhân hóa',
        benefits: [
          'Tăng trải nghiệm khách hàng',
          'Tăng doanh thu cross-sell',
          'Cải thiện lòng trung thành'
        ],
        implementation: 'Machine learning cho phân tích hành vi khách hàng'
      },
      {
        id: 'risk-fraud-detection',
        title: 'Quản lý rủi ro và phát hiện gian lận',
        description: 'AI phân tích giao dịch thời gian thực',
        benefits: [
          'Phát hiện gian lận tức thì',
          'Tuân thủ quy định tốt hơn',
          'Bảo vệ tài sản khách hàng'
        ],
        implementation: 'Hệ thống AI giám sát giao dịch 24/7'
      }
    ]
  }
]

export const ceoQuestions: CEOQuestion[] = [
  {
    id: 'ceo-ai-ready',
    question: 'Bản thân tôi đã "chuẩn AI" chưa?',
    description: 'CEO phải làm gương bằng cách sử dụng AI hàng ngày như một "tham mưu trưởng kỹ thuật số"',
    keyPoints: [
      'Sử dụng công cụ AI hàng ngày trong công việc',
      'Hiểu cơ bản về cách AI hoạt động và học hỏi',
      'Chỉ định "huấn luyện viên AI cá nhân" trong tổ chức',
      'Gửi thông điệp mạnh mẽ rằng AI là ưu tiên chiến lược'
    ],
    assessment: {
      criteria: [
        'Tôi sử dụng ít nhất 1 công cụ AI mỗi ngày',
        'Tôi hiểu cơ bản về machine learning',
        'Tôi có người hướng dẫn AI trong công ty',
        'Tôi thường xuyên chia sẻ kinh nghiệm AI với đội ngũ'
      ],
      scoring: 'checklist'
    }
  },
  {
    id: 'quick-win-project',
    question: 'Tôi đã xác định được một dự án "dễ ăn" để chứng minh giá trị chưa?',
    description: 'Bắt đầu với dự án nhỏ, tác động cao để tạo động lực và chứng minh ROI',
    keyPoints: [
      'Tìm vấn đề kinh doanh cụ thể, tác động cao',
      'Sử dụng công cụ AI dễ tiếp cận',
      'Đo lường kết quả rõ ràng',
      'Tạo động lực cho các dự án lớn hơn'
    ],
    assessment: {
      criteria: [
        'Tôi đã xác định 1 vấn đề cụ thể có thể giải quyết bằng AI',
        'Vấn đề này có tác động đo được đến kinh doanh',
        'Tôi có ngân sách và timeline rõ ràng',
        'Dự án có thể hoàn thành trong 3-6 tháng'
      ],
      scoring: 'checklist'
    }
  },
  {
    id: 'leadership-readiness',
    question: 'Đội ngũ lãnh đạo của tôi đã thực sự sẵn sàng cho cuộc chuyển đổi này chưa?',
    description: 'Đánh giá 4 phẩm chất then chốt: động lực, tò mò, tư duy hệ thống, trí tuệ xã hội',
    keyPoints: [
      'Động lực và sự kiên cường với thử nghiệm',
      'Sự tò mò và khả năng thích ứng',
      'Tư duy hệ thống xuyên phòng ban',
      'Trí tuệ cảm xúc để dẫn dắt thay đổi'
    ],
    assessment: {
      criteria: [
        'Lãnh đạo thoải mái với thử nghiệm và thất bại',
        'Họ tư duy được các mối liên hệ phức tạp',
        'Có khả năng dẫn dắt nhân viên qua thay đổi lớn',
        'Thể hiện sự học hỏi liên tục về công nghệ'
      ],
      scoring: 'checklist'
    }
  },
  {
    id: 'communication-why',
    question: 'Tôi đã truyền đạt rõ ràng và lặp đi lặp lại "lý do tại sao" chưa?',
    description: 'Kết nối chiến lược AI với mục đích lớn hơn và giải thích lợi ích cho từng nhân viên',
    keyPoints: [
      'Kết nối AI với tầm nhìn công ty',
      'Giải thích lợi ích cho từng nhân viên',
      'Nhấn mạnh AI hỗ trợ, không thay thế',
      'Giao tiếp minh bạch và liên tục'
    ],
    assessment: {
      criteria: [
        'Nhân viên hiểu tại sao AI quan trọng cho công ty',
        'Họ thấy được lợi ích cá nhân từ AI',
        'Tôi giao tiếp về AI ít nhất hàng tuần',
        'Có kế hoạch giảm lo lắng về mất việc làm'
      ],
      scoring: 'checklist'
    }
  }
]

export const navigationItems = [
  {
    id: 'overview',
    title: 'Tổng quan',
    href: '#overview'
  },
  {
    id: 'fundamentals',
    title: 'Nền tảng AI-First',
    href: '#fundamentals',
    children: [
      { id: 'ai-first-definition', title: 'Định nghĩa AI-First', href: '#ai-first-definition' },
      { id: 'it-precedents', title: 'Tiền lệ từ ngành IT', href: '#it-precedents' }
    ]
  },
  {
    id: 'tpg-case-study',
    title: 'Case Study TPG',
    href: '#tpg-case-study'
  },
  {
    id: 'human-capital',
    title: 'Vốn con người',
    href: '#human-capital'
  },
  {
    id: 'ceo-mandate',
    title: 'Nhiệm vụ CEO',
    href: '#ceo-mandate'
  }
]