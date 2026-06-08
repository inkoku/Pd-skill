# PD-design - Software Product Design Full-Process Skill

![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)

PD-design is an automated software product design full-process tool that starts from requirement input and sequentially executes requirement cleaning, functional design, prototype generation, PRD generation, and summary, forming a complete product design closed-loop.

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