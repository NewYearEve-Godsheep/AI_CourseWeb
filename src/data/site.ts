export const site = {
  name: 'PChiang Lab',
  courseCode: 'ICSE70011.01',
  courseName: '人工智能设计与应用',
  courseNameEn: 'AI-Design: Introduction & Fundamentals',
  term: '2026-2027 学年第一学期',
  termEn: '2026-2027 Academic Year · Semester 1',
  url: 'https://pchianglab.com',
  description: '面向研究生的人工智能设计与应用课程，覆盖核心模型、AI Agent、推理系统与前沿硬件实践。',
  instructor: 'Patrick Chiang（姜培）',
  instructorTitle: '姜培教授',
  instructorTitleEn: 'Full Professor Patrick Chiang',
  school: '复旦大学微电子学院',
  schoolEn: 'Fudan University School of Microelectronics',
  email: 'pchiang@fudan.edu.cn',
  instructorHomepage: '',
  instructorPhoto: '/5aaba526-a871-4707-b285-c3ef103a03d1_s.jpg',
  researchPoster: '/fudan-undergraduate-research-flyer-pchiangREV.jpg',
};

export type Course = {
  slug: string;
  code: string;
  title: string;
  term: string;
  description: string;
  level: '研究生';
  status: '本学期课程';
  accent: 'coral' | 'yellow' | 'green';
  topics: string[];
};

export const courses: Course[] = [{
  slug: 'ai-design-application', code: 'ICSE70011.01', title: '人工智能设计与应用',
  term: '2026-2027 学年第一学期',
  description: '从 Transformer、Diffusion 到多模态 Agent、推理扩展与 AI 硬件，完成从原理到应用的学习闭环。',
  level: '研究生', status: '本学期课程', accent: 'coral', topics: ['Transformer', 'Diffusion', 'AI Agent', 'AI 硬件'],
}];

export const featuredCourse = courses[0];

export type Project = {
  slug: string; number: string; title: string; shortTitle: string; track: string;
  difficulty: string; resources: string; summary: string; deliverable: string;
  metrics: string[]; accent: 'coral' | 'yellow' | 'green'; source: string;
};

export const projects: Project[] = [
  { slug: 'model-router-rsl', number: '01', shortTitle: 'Model Router + RSL', title: 'Model Router Self-Learning + RSL', track: 'AI 系统', difficulty: '适合系统与模型入门', resources: '模型 API 或可控模拟服务', summary: '构建一个根据任务、预算、延迟和风险选择模型，并通过独立评测受控改进的 AI 网关。', deliverable: '模型网关、路由基线、轨迹日志、冻结评测集、版本对比仪表板和故障降级 Demo。', metrics: ['任务成功率', '成本与 p95 延迟', '候选策略接受率', '故障降级成功率'], accent: 'coral', source: 'project/01-model-router-rsl.md' },
  { slug: 'optical-module-tuning', number: '02', shortTitle: 'Optical Module Tuning', title: 'AI-Tuning of Optical Modules', track: 'AI for Hardware', difficulty: '适合数据与优化方向', resources: '教师数据集或受限仿真器', summary: '使用机器学习和实验数据，寻找同时满足误码率、功耗、温度与稳定性约束的光模块参数。', deliverable: '离线调参或仿真 Demo、数据字典、基线结果、约束检查和 Pareto 曲线。', metrics: ['可行点所需实验次数', '误码率与功耗', '跨设备泛化', '越界建议比例'], accent: 'yellow', source: 'project/02-ai-tuning-optical-modules.md' },
  { slug: 'lidar-3d-world-model', number: '03', shortTitle: 'LiDAR 3D World Model', title: 'Physical Intelligence: LiDAR 3D World Model Data Collection', track: 'Physical AI', difficulty: '适合数据与空间感知', resources: '公开数据集、仿真器或经批准的采集设备', summary: '建立从 LiDAR 点云采集、同步、标注、质量检查到 3D 世界模型评测的可追溯数据管线。', deliverable: '数据卡、采集/仿真协议、点云 schema、可视化工具、质量报告和下游基线。', metrics: ['有效帧与时间戳完整率', '配准误差', '标注质量', '下游 3D 任务指标'], accent: 'green', source: 'project/03-physical-intelligence-lidar-data.md' },
  { slug: 'hardened-weights-chip', number: '04', shortTitle: 'Hardened-Weights Chip', title: 'Hardened-Weights Model Chip Design', track: 'AI Hardware', difficulty: '适合芯片与体系结构', resources: 'RTL/HLS 仿真器或 FPGA 工具', summary: '将训练完成、权重固定的小模型映射为专用推理硬件，分析面积、延迟、吞吐和能耗取舍。', deliverable: '量化脚本、硬件源代码、可复现仿真、综合/FPGA 报告和软硬件一致性测试。', metrics: ['准确率一致性', '硬件资源', '吞吐与延迟', '权重访问与能效'], accent: 'coral', source: 'project/04-hardened-weights-model-chip-design.md' },
  { slug: 'video-generation-low-cost-gpu', number: '05', shortTitle: 'Video Generation on Low-Cost GPUs', title: 'Video Generation on Low-Cost GPUs', track: '生成式 AI', difficulty: '适合 Diffusion 与推理优化', resources: '单张消费级 GPU', summary: '在有限显存与预算下优化视频生成或视频到视频工作流，建立质量、速度、显存与成本的可复现取舍。', deliverable: '环境说明、测试输入、运行日志、显存/速度/质量对比、代表性输出和许可证清单。', metrics: ['峰值显存与 OOM 率', '端到端生成时间', '时间一致性', '提示词一致性'], accent: 'yellow', source: 'project/05-video-generation-low-cost-gpus.md' },
  { slug: 'small-coding-model-post-training', number: '06', shortTitle: 'Small Coding Model Post-Training', title: 'Small Coding Model with Data Post-Training', track: '代码智能', difficulty: '适合模型训练与数据治理', resources: '单张消费级 GPU 的 QLoRA 范围', summary: '用合法、可追溯的数据对开源代码模型进行参数高效后训练，并在独立测试集上证明目标任务的改善。', deliverable: '模型与数据卡、许可证清单、泄漏检查、训练配置、基线对比和资源账本。', metrics: ['pass@1 或任务通过率', '目标任务泛化', '能力退化', '训练成本与推理延迟'], accent: 'green', source: 'project/06-small-coding-model-data-post-training.md' },
];

export type EnglishProjectCopy = {
  shortTitle: string;
  title: string;
  track: string;
  difficulty: string;
  resources: string;
  summary: string;
  deliverable: string;
  metrics: string[];
  sections: { title: string; body: string; bullets?: string[] }[];
};

export const englishProjects: Record<string, EnglishProjectCopy> = {
  'model-router-rsl': {
    shortTitle: 'Model Router + RSL', title: 'Model Router Self-Learning + RSL', track: 'AI Systems', difficulty: 'Good for systems and model beginners', resources: 'Model APIs or controlled mock services',
    summary: 'Build an AI gateway that selects models by task, budget, latency, and risk, then improves through independently evaluated, reversible updates.', deliverable: 'A model gateway, routing baselines, trace logs, a frozen evaluation set, a version comparison dashboard, and a failure-fallback demo.', metrics: ['Task success rate', 'Cost and p95 latency', 'Candidate acceptance rate', 'Fallback success rate'],
    sections: [
      { title: 'Project brief', body: 'Create a gateway for a mixed task set such as code repair, information extraction, structured question answering, or summarization. Compare at least three model tiers or controlled strategies against a static routing baseline.' },
      { title: 'Minimum version', body: 'Start with a unified interface that records task features, model choice, output, token usage, latency, cost, and scores.', bullets: ['A static routing baseline and at least three model tiers or mock services.', 'A trace and failure taxonomy covering quality, timeout, tool, format, and budget failures.', 'An RSL loop that proposes two to five structured routing candidates.', 'An independent validation set and an immutable acceptance threshold.'] },
      { title: 'Evaluation and boundaries', body: 'Report quality, cost, and tail latency together. The system must not change its evaluation rules, delete logs, elevate tool permissions, or call real production systems. Every accepted policy needs a version, diff, and rollback path.' },
    ],
  },
  'optical-module-tuning': {
    shortTitle: 'Optical Module Tuning', title: 'AI Tuning of Optical Modules', track: 'AI for Hardware', difficulty: 'Good for data and optimization', resources: 'Instructor data or a constrained simulator',
    summary: 'Use machine learning and experimental data to find optical-module settings that satisfy bit-error, power, temperature, and stability constraints.', deliverable: 'An offline tuning or simulation demo, data dictionary, baseline search, constraint checks, and a Pareto curve.', metrics: ['Experiments to find a feasible point', 'Bit error rate and power', 'Cross-device generalization', 'Out-of-bound suggestion rate'],
    sections: [
      { title: 'Project brief', body: 'Build a data-driven tuning system. Given module state and candidate parameters, predict outcomes and recommend the next experiment. Begin with a simulator or instructor-provided historical measurements.' },
      { title: 'Minimum version', body: 'Define a parameter table for bias, modulation, equalization, and temperature, with at least three measured outputs such as BER or Q-factor, power, throughput, or eye quality.', bullets: ['A grid-search, random-search, or rule-based baseline.', 'A surrogate model such as a random forest, Gaussian process, or small neural network.', 'A single- or multi-objective parameter recommender.', 'An explicit check that rejects unsafe or out-of-range suggestions.'] },
      { title: 'Evaluation and boundaries', body: 'Use offline data or a constrained simulator. Students must not connect a model directly to a real laser, power supply, or communications link for automatic tuning. Report device, temperature, and constraint assumptions.' },
    ],
  },
  'lidar-3d-world-model': {
    shortTitle: 'LiDAR 3D World Model', title: 'Physical Intelligence: LiDAR 3D World Model Data Collection', track: 'Physical AI', difficulty: 'Good for data and spatial perception', resources: 'Public data, a simulator, or approved equipment',
    summary: 'Build a traceable pipeline from LiDAR point-cloud collection and synchronization through labeling, quality control, and a 3D world-model evaluation.', deliverable: 'A data card, collection or simulation protocol, point-cloud schema, visualization tool, quality report, and downstream baseline.', metrics: ['Valid frames and timestamp completeness', 'Registration error', 'Label quality', 'Downstream 3D task metric'],
    sections: [
      { title: 'Project brief', body: 'Choose a clear setting such as a campus path, warehouse, indoor corridor, parking area, or small robot workspace. Produce a data card and support at least one downstream task: 3D detection, segmentation, occupancy, scene flow, trajectory prediction, or reconstruction.' },
      { title: 'Minimum version', body: 'Use at least five timestamped sequences or 100 frames, from a public dataset, simulator, or approved static collection.', bullets: ['A coordinate-system and calibration description.', 'A schema for points, intensity, timestamps, poses, and scene labels.', 'Visualization for single frames, accumulated clouds, and trajectories.', 'Quality checks for empty frames, duplicates, drift, and unusual reflections.'] },
      { title: 'Privacy and safety', body: 'Do not collect in private places without permission or publish identifiable people, license plates, addresses, or sensitive areas. Follow campus and venue rules, and attach the dataset license, collection scope, and deletion policy.' },
    ],
  },
  'hardened-weights-chip': {
    shortTitle: 'Hardened-Weights Chip', title: 'Hardened-Weights Model Chip Design', track: 'AI Hardware', difficulty: 'Good for chips and computer architecture', resources: 'RTL/HLS simulators or FPGA tools',
    summary: 'Map a trained, fixed-weight neural network to dedicated inference hardware and measure the trade-offs in area, latency, throughput, and energy.', deliverable: 'Quantization scripts, hardware source, reproducible simulation, synthesis or FPGA report, and software/hardware consistency tests.', metrics: ['Accuracy consistency', 'Hardware resources', 'Throughput and latency', 'Weight access and energy efficiency'],
    sections: [
      { title: 'Project brief', body: 'Choose a small public model with a clear license, such as an MNIST or CIFAR classifier, keyword spotter, or anomaly detector. Compare programmable weight storage with a version where some or all quantized weights become RTL constants, lookup tables, or synthesis-time constants.' },
      { title: 'Minimum version', body: 'Reproduce the model accuracy on a CPU, write a fixed-point reference, and implement at least one layer in Verilog, SystemVerilog, HLS, or an equivalent hardware flow.', bullets: ['Compare FP32, INT8, or lower-bit precision.', 'Use Verilator or iverilog for functional simulation.', 'Report resource use, cycles, timing, and an energy estimate with assumptions.', 'Test software and hardware outputs for consistency.'] },
      { title: 'Evaluation and boundaries', body: 'Simulation, synthesis, or an FPGA demo is sufficient; do not claim the result is a taped-out chip. Do not use restricted PDKs, confidential weights, or unlicensed commercial IP.' },
    ],
  },
  'video-generation-low-cost-gpu': {
    shortTitle: 'Video Generation on Low-Cost GPUs', title: 'Video Generation on Low-Cost GPUs', track: 'Generative AI', difficulty: 'Good for diffusion and inference optimization', resources: 'One consumer GPU',
    summary: 'Optimize a video-generation or video-to-video workflow for predictable memory, speed, and quality on a single consumer GPU.', deliverable: 'A reproducible environment, test inputs, runtime logs, memory/speed/quality comparisons, representative outputs, and a license list.', metrics: ['Peak memory and OOM rate', 'End-to-end generation time', 'Temporal consistency', 'Prompt or input consistency'],
    sections: [
      { title: 'Project brief', body: 'Choose a focused task such as a product concept clip, shot extension, text-to-video, motion retargeting, or instructional animation. Treat memory and runtime as design constraints rather than simply generating a few attractive clips.' },
      { title: 'Minimum version', body: 'Use an open or clearly licensed video model at a fixed version with at least 20 prompts or input videos.', bullets: ['Record peak memory, generation time, duration, resolution, and random seed.', 'Establish a baseline and test at least two optimizations such as lower precision, CPU offload, tiling, chunking, quantization, or interpolation.', 'Separate generation from post-processing.', 'Use a fixed evaluation sheet or blind review, not only selected successes.'] },
      { title: 'Usage boundaries', body: 'Do not scrape copyrighted video in bulk, bypass platform restrictions, generate non-consensual intimate content, or create deceptive impersonations of real people. Follow model, input, and output licenses.' },
    ],
  },
  'small-coding-model-post-training': {
    shortTitle: 'Small Coding Model Post-Training', title: 'Small Coding Model with Data Post-Training', track: 'Code Intelligence', difficulty: 'Good for model training and data governance', resources: 'QLoRA-scale training on one consumer GPU',
    summary: 'Post-train an open coding model with traceable, permitted data and demonstrate improvement on a held-out programming task without evaluation leakage.', deliverable: 'Model and data cards, a license list, leakage checks, training configuration, baseline comparison, and a resource ledger.', metrics: ['Pass@1 or task pass rate', 'Target-task generalization', 'Capability regression', 'Training cost and inference latency'],
    sections: [
      { title: 'Project brief', body: 'Choose a narrow, automatically verifiable task such as Python bug fixing, unit-test generation, SQL, API use, code review, or repository question answering. Use a precisely versioned open model and compare it with the untouched baseline.' },
      { title: 'Minimum version', body: 'Create train, validation, and never-seen test splits. Start with a 7B-class model and LoRA, QLoRA, or an equivalent parameter-efficient method.', bullets: ['Record every data source, license, cleaning rule, and processing date.', 'Run deduplication and leakage checks before training.', 'Evaluate with tests, compilation, linting, execution, or a clear reference standard.', 'Compare target-task gains with retained general coding ability and resource cost.'] },
      { title: 'Safety and release', body: 'Run generated code in an isolated test environment and never expose production keys, private repositories, or internal services. State clearly whether the model, data, and adapters may be redistributed under their original licenses.' },
    ],
  },
};
