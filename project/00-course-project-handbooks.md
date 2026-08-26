# AI Systems, Hardware, and Physical Intelligence Studio

## 项目手册总览

这套手册面向第一次接触这些主题的学生。你不需要一开始就理解所有术语；每个项目都从一个可以在电脑上跑起来的最小版本开始，再逐步增加真实约束。

## 共同要求

每个小组都需要：

- 明确一个具体用户或工程场景，而不是只展示一个模型或一个电路。
- 先实现一个简单基线，再证明新方法带来了什么变化。
- 记录模型、数据、提示词、硬件或仿真参数，保证别人可以复现。
- 至少报告两类指标，例如准确率、成功率、延迟、成本、功耗、内存、稳定性或人工介入率。
- 展示失败案例，并解释系统为什么失败。
- 不把真实密码、个人隐私、未公开数据或企业机密放进公共模型、训练数据或演示系统。

## 推荐时间表

1. 第 1 周：读背景、选场景、完成技术调研。
2. 第 2 周：跑通基线，建立最小数据集和评测脚本。
3. 第 3 周：加入核心技术，做第一次对比实验。
4. 第 4 周：压力测试、修复失败、准备 Demo。

Physical AI、光模块和芯片项目可以把第 3、4 周换成数据采集、仿真、参数扫描和设计验证。

## 共同交付物

- 一页项目说明：问题、用户、输入、输出和成功标准。
- 一个可运行的代码仓库或仿真工程。
- 一份实验记录，至少包含基线和三组对比结果。
- 一个 5 分钟 Demo。
- 一份 2 至 4 页技术报告：方法、结果、失败案例、限制和下一步。

## 项目选择建议

如果你刚开始接触 AI 系统，可以选择“Model Router + RSL”或低成本视频生成；如果你喜欢数据和模型迭代，可以选择小模型后训练；如果你想接触现实世界数据、光学或芯片，优先选择 LiDAR 3D 世界模型、Optical Module Tuning 或权重固化芯片。

## 六个项目

1. [Model Router Self-Learning + RSL](01-model-router-rsl.md)
2. [AI-Tuning of Optical Modules](02-ai-tuning-optical-modules.md)
3. [Physical Intelligence: LiDAR 3D World Model Data Collection](03-physical-intelligence-lidar-data.md)
4. [Hardened-Weights Model Chip Design](04-hardened-weights-model-chip-design.md)
5. [Video Generation on Low-Cost GPUs](05-video-generation-low-cost-gpus.md)
6. [Small Coding Model with Data Post-Training](06-small-coding-model-data-post-training.md)

> 外部代码、模型、数据集和平台的使用须遵守其对应许可证、服务条款及适用法律；课程不授予第三方资源额外的再分发或商业使用权。
