# Product-design - Software Product Design Full-Process Skill

![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)

Product-design is an automated software product design full-process tool that starts from requirement input and sequentially executes requirement cleaning, functional design, prototype generation, PRD generation, 和 summary, forming a complete product design closed-loop.

## Features

- **Requirement Cleaning**: Cleanse and arbitrate conflicts in input requirements
- **Business Modeling**: Build complete business models and process diagrams
- **Functional Design**: Output structured functional specification documents
- **Prototype Generation**: Generate high-fidelity interactive prototypes ready for demonstration
- **PRD Generation**: Generate well-structured and logically rigorous Product Requirement Documents
- **Experience Accumulation**: Automatically generate Lessons.md for project experience summary

## Supported Project Types

| Project Type | Process Adaptation |
|---------|---------|
| **New System Design** | Requirement Cleaning → Requirement Analysis → Business Process Diagram → Page Function List → Prototype HTML → PRD |
| **New Function Module** | Requirement Cleaning → Requirement Analysis → Process Integration → Interface Position → Page Function List → Prototype HTML → PRD |
| **Optimize Existing Function** | Requirement Analysis → Difference Comparison → New Solution → Page Function List → Prototype HTML → PRD |

## Full Process Stages

```
Stage 0: Initialization → Stage 1: Requirement Cleaning → Stage 2: Functional Design → Stage 3: Prototype Generation → Stage 4: PRD Generation → Stage 5: Summary
```

## Output Path Rules

- **Default Root Path**: Current workspace
- **Project Directory**: `[Current Workspace]/[ProjectName]_[YYYY-MM-DD]_[HHmm]`
- Automatically create directory if it doesn't exist

## Project Structure

```
pd-design/
├── assets/              # Resource files
│   └── screenshot_prototype.js
├── references/          # Reference documents
│   ├── PRD生成校验.md
│   ├── 产品设计全流程.md
│   ├── 原型生成.md
│   ├── 阶段5总结.md
│   └── 需求采集分析.md
├── SKILL.md             # Skill definition file
├── project-counter.json # Project counter
└── README.md            # Project documentation
```

## Trigger Keywords

- Product Design
- Requirement Analysis
- PRD Generation
- Prototype Generation
- Functional Design

## Version History

| Version | Date | Changes |
|------|------|----------|
| 1.0.0 | 2026-04-22 | Initial version, Stage 1-4 full process |
| 1.1.0 | 2026-04-22 | Added Stage 5 summary and Lessons.md generation rules |
| 1.3.0 | 2026-04-22 | Modified default output path to current workspace |

## Strict Constraints

- **No Fabrication**: Inferences must be marked as "pending confirmation"
- **Closed-loop Integrity**: Every event must analyze input, process, and output
- **Mandatory Validation**: Validation steps cannot be skipped without user confirmation
- **Naming Consistency**: Naming in each stage must be consistent with the business vocabulary

## License

Apache-2.0 License


# Product-design - 软件产品设计全流程 Skill

![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)

PD-design 是一个自动化的软件产品设计全流程工具，从需求录入出发，依次执行需求清洗、功能设计、原型生成、PRD生成到总结，形成完整的产品设计闭环。
 本Skill 会自动总结复盘，有基本的进化迭代（初级进化）

## 功能特点

- **需求清洗**：对输入需求进行清洗
- **功能设计**：输出结构化的功能说明文档
- **原型生成**：生成可直接演示的高保真交互式原型
- **PRD生成**：生成结构完整、逻辑严谨的产品需求文档
- **经验沉淀**：自动生成 Lessons.md 进行项目经验总结

## 支持的项目类型

| 项目类型 | 流程适配 |
|---------|---------|
| **新系统设计** | 需求清洗 → 需求分析 → 业务流程图 → 页面功能清单 → 原型HTML → PRD |
| **新功能模块** | 需求清洗 → 需求分析 → 流程对接 → 接口位置 → 页面功能清单 → 原型HTML → PRD |
| **优化已有功能** | 需求分析 → 差异对比 → 新方案 → 页面功能清单 → 原型HTML → PRD |

## 全流程阶段

```
阶段0: 初始化 → 阶段1: 需求清洗 → 阶段2: 功能设计 → 阶段3: 原型生成 → 阶段4: PRD生成 → 阶段5: 总结
```

## 输出路径规则

- **默认根路径**：当前工作区
- **项目目录**：`[当前工作区]/[项目名]_[YYYY-MM-DD]_[HHmm]`
- 目录不存在时自动创建

## 项目结构

```
pd-design/
├── assets/              # 资源文件
│   └── screenshot_prototype.js
├── references/          # 参考文档
│   ├── PRD生成校验.md
│   ├── 产品设计全流程.md
│   ├── 原型生成.md
│   ├── 阶段5总结.md
│   └── 需求采集分析.md
├── SKILL.md             # Skill 定义文件
├── project-counter.json # 项目计数器
└── README.md            # 项目说明文档
```

## 触发关键词

- 产品设计
- 需求分析
- PRD生成
- 原型生成
- 功能设计

## 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| 1.0.0 | 2026-04-22 | 初始版本，阶段1-4全流程 |
| 1.1.0 | 2026-04-22 | 新增阶段5总结与Lessons.md生成规则 |
| 1.3.0 | 2026-04-22 | 修改默认输出路径为当前工作区 |

## 严格约束

- **禁止编造**：推断必须标记"待确认"
- **闭环完整性**：每个事件必须分析输入、处理、输出
- **检验强制性**：未经用户确认不可跳过检验步骤
- **命名一致性**：各阶段命名必须与业务词汇表保持一致

## 许可证

Apache-2.0  License
