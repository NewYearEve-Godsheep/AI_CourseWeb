export const site = {
  name: 'AICourse',
  courseCode: 'CS 6.5940',
  courseName: '高效 AI 系统',
  term: '2026 秋季',
  url: 'https://course.example.com',
  description: '面向资源受限设备与现代云端基础设施的高效人工智能课程。',
  instructor: '课程教师',
  email: 'course@example.com',
};

export type Course = {
  slug: string;
  code: string;
  title: string;
  term: string;
  description: string;
  level: '基础' | '进阶' | '专题';
  status: '开放报名' | '即将开始' | '资料归档';
  accent: 'coral' | 'yellow' | 'green';
  topics: string[];
};

export const courses: Course[] = [
  {
    slug: 'efficient-ai-systems',
    code: 'CS 6.5940',
    title: '高效 AI 系统',
    term: '2026 秋季',
    description: '从模型压缩到部署服务，建立在受限计算资源中设计和优化 AI 系统的方法。',
    level: '进阶',
    status: '开放报名',
    accent: 'coral',
    topics: ['量化与剪枝', '推理优化', '模型部署'],
  },
  {
    slug: 'machine-learning-foundations',
    code: 'CS 6.041',
    title: '机器学习基础',
    term: '2026 春季',
    description: '以清晰的数学直觉和动手实验，理解监督学习、泛化与模型评估。',
    level: '基础',
    status: '即将开始',
    accent: 'yellow',
    topics: ['线性模型', '优化方法', '模型评估'],
  },
  {
    slug: 'edge-intelligence-lab',
    code: 'CS 6.872',
    title: '边缘智能实验室',
    term: '2025 秋季',
    description: '围绕微型设备、传感数据和实时响应，完成端到端智能应用原型。',
    level: '专题',
    status: '资料归档',
    accent: 'green',
    topics: ['TinyML', '传感计算', '端侧应用'],
  },
];

export const featuredCourse = courses[0];
