export interface Slide {
  id: string
  title: string
  subtitle?: string
  duration: number // minutes
  type: 'title' | 'content' | 'demo' | 'interactive' | 'comparison' | 'quote' | 'code'
  content: SlideContent
  notes?: string[]
  animations?: AnimationType[]
}

export interface SlideContent {
  main?: string
  points?: string[]
  sections?: Section[]
  comparison?: ComparisonData
  quote?: QuoteData
  code?: CodeSnippet[]
  metrics?: Metric[]
}

export interface Section {
  title: string
  content: string | string[]
  highlight?: boolean
}

export interface ComparisonData {
  headers: string[]
  rows: ComparisonRow[]
}

export interface ComparisonRow {
  label: string
  values: string[]
  highlight?: boolean
}

export interface QuoteData {
  text: string
  author?: string
  context?: string
}

export interface CodeSnippet {
  language: string
  code: string
  title?: string
}

export interface Metric {
  label: string
  value: string | number
  trend?: 'up' | 'down' | 'neutral'
  unit?: string
}

export type AnimationType = 'fade' | 'slide' | 'zoom' | 'glitch' | 'typewriter' | 'matrix'

export const slides: Slide[] = [
  {
    id: 'intro',
    title: 'AI-First Engineering',
    subtitle: 'For People Who Actually Ship Software',
    duration: 1,
    type: 'title',
    content: {
      main: 'Who gets replaced, who gets amplified — and why I don\'t hire traditional junior developers anymore',
      points: [
        'IT practitioners in Australia',
        'PMs, POs, developers, testers/QA, analysts, new grads',
        '60-min presentation + extended Q&A'
      ]
    },
    animations: ['glitch', 'fade']
  },
  {
    id: 'session-map',
    title: 'Session Map',
    duration: 1,
    type: 'content',
    content: {
      sections: [
        {
          title: '5 min',
          content: 'Set the stakes: AI isn\'t just a copilot; it\'s the team by default',
          highlight: true
        },
        {
          title: '10 min',
          content: 'AI-First for teams: the operating model'
        },
        {
          title: '15 min',
          content: 'The sharp point: I don\'t hire traditional juniors'
        },
        {
          title: '15 min',
          content: 'Role-by-role reality check: hire humans vs. use AI'
        },
        {
          title: '15-20 min',
          content: 'Demo: AI does software engineering, not just coding'
        },
        {
          title: 'Q&A',
          content: 'As long as you want'
        }
      ]
    }
  },
  {
    id: 'cold-open',
    title: 'The Uncomfortable Claim',
    duration: 5,
    type: 'quote',
    content: {
      quote: {
        text: 'I no longer hire traditional junior developers.',
        context: 'Because it forces the real question: which outputs should we still pay humans for?'
      },
      points: [
        'We\'re talking about process outputs, risk, and irreversibility',
        'My lens: CIO/Head of Tech responsible for cost, speed, compliance, and outcomes',
        'The goal: change how you practice engineering so much that people would pay for the new capability'
      ]
    },
    animations: ['typewriter']
  },
  {
    id: 'ai-first-definition',
    title: 'What "AI-First" Really Means',
    subtitle: 'At the Team Level',
    duration: 10,
    type: 'comparison',
    content: {
      comparison: {
        headers: ['Model', 'Description', 'Impact'],
        rows: [
          {
            label: 'Tooling-first',
            values: [
              'Tooling-first',
              'People do the same work with fancier tools',
              'Bottlenecks stay. Some efficiency gains'
            ]
          },
          {
            label: 'Augmented',
            values: [
              'Augmented',
              'Humans lead; AI assists',
              'Productivity up; process shape mostly unchanged'
            ]
          },
          {
            label: 'AI-First',
            values: [
              'AI-First',
              'Start from what AI can do end-to-end, place humans for judgment',
              'Rewrite the workflow. Transform outcomes'
            ],
            highlight: true
          }
        ]
      },
      quote: {
        text: 'AI is a default teammate. Choosing not to use it is an exception that must be justified.',
        author: 'The One-Sentence Policy'
      }
    }
  },
  {
    id: 'day-to-day-changes',
    title: 'Day-to-Day Engineering Changes',
    duration: 5,
    type: 'content',
    content: {
      main: 'What changes when AI becomes the default teammate',
      sections: [
        {
          title: 'Every Ticket',
          content: 'Begins with AI plan → code → tests → docs → PR'
        },
        {
          title: 'AI Generates',
          content: 'First draft of everything: scaffolds, tests, ADRs, CI, runbooks'
        },
        {
          title: 'Humans Edit & Decide',
          content: 'Boundaries, security, performance, privacy, rollouts'
        },
        {
          title: 'Traceability',
          content: 'Prompts, artifacts, ADRs, and generated docs live in the repo'
        }
      ]
    }
  },
  {
    id: 'junior-role-traditional',
    title: 'What Traditional Juniors Did',
    subtitle: 'The Classic SDLC',
    duration: 5,
    type: 'content',
    content: {
      points: [
        'Break down small tickets; implement CRUD endpoints/pages',
        'Write unit tests; add/adjust integration tests',
        'Fix low-severity bugs; refactor low-risk code; do linting chores',
        'Wire UI components; do basic state management and API calls',
        'Write/readme docs, changelogs, simple diagrams',
        'Follow patterns chosen by seniors; escalate uncommon edge cases'
      ]
    }
  },
  {
    id: 'ai-replaces-outputs',
    title: 'Where AI Now Produces Those Outputs',
    subtitle: 'Faster, More Consistently',
    duration: 5,
    type: 'content',
    content: {
      sections: [
        {
          title: 'Scaffolding & Glue Code',
          content: 'Project skeletons, services, DTOs, serializers, mapping layers'
        },
        {
          title: 'Tests',
          content: 'Unit/integration test suites from code/requirements/diffs'
        },
        {
          title: 'Bugfixes & Refactors',
          content: 'Propose patches, explain diffs, run static checks'
        },
        {
          title: 'Docs',
          content: 'READMEs, API docs, ADR drafts, runbooks from code'
        },
        {
          title: 'Infra Chores',
          content: 'Dockerfiles, docker-compose, IaC boilerplate, CI workflows'
        }
      ],
      quote: {
        text: 'The outputs we expected from a junior are now a button-press away',
        context: 'Provided a senior defines boundaries and a human verifies'
      }
    }
  },
  {
    id: 'ai-native-apprentice',
    title: 'What I Hire Instead',
    subtitle: 'AI-Native Apprentices',
    duration: 5,
    type: 'content',
    content: {
      main: 'Not "no juniors" — no traditional juniors',
      sections: [
        {
          title: 'Design Prompted Workflows',
          content: 'Turn requirements into plans, code, tests, docs via AI',
          highlight: true
        },
        {
          title: 'Prepare Context',
          content: 'Specs, examples, domain constraints so AI outputs are relevant'
        },
        {
          title: 'Verify & Extend',
          content: 'Validate AI outputs; escalate edge cases sensibly'
        },
        {
          title: 'System Thinking',
          content: 'Learn boundaries, data contracts, failure modes, tradeoffs'
        }
      ],
      quote: {
        text: 'Their job isn\'t to type the code; it\'s to produce the code via AI and own its quality',
        author: 'Working Title: Orchestrator Apprentice (AI-native)'
      }
    }
  },
  {
    id: 'role-matrix',
    title: 'Role-by-Role Decision Matrix',
    subtitle: 'Hire Human vs. Use AI',
    duration: 15,
    type: 'comparison',
    content: {
      comparison: {
        headers: ['Role', 'AI Does Well', 'Humans Earn Their Keep', 'Decision Rule'],
        rows: [
          {
            label: 'Product Owner',
            values: [
              'PO/BA',
              'User stories, journey maps, release notes',
              'Prioritization, stakeholder alignment, tradeoffs',
              'AI for writing; Human for ambiguity + politics'
            ]
          },
          {
            label: 'Project Manager',
            values: [
              'PM/Delivery',
              'RAID logs, schedules, status packs',
              'Escalations, dependency negotiation',
              'Lean PM; AI handles admin'
            ]
          },
          {
            label: 'Developers',
            values: [
              'FE/BE/Mobile',
              'Scaffolds, patterns, migrations, tests',
              'System boundaries, data contracts, SLAs',
              'Fewer seniors; zero traditional juniors'
            ],
            highlight: true
          },
          {
            label: 'QA/SDET',
            values: [
              'QA/SDET',
              'Test cases, mocks, fuzzing, regression',
              'Test strategies, adversarial thinking',
              'Keep senior QA as quality architects'
            ]
          },
          {
            label: 'SRE/DevOps',
            values: [
              'SRE/DevOps',
              'Infra scaffolding, runbooks, alerts',
              'Reliability economics, capacity planning',
              'Small SRE core; push toil to AI'
            ]
          }
        ]
      }
    }
  },
  {
    id: 'decision-quadrant',
    title: 'The 2×2 Decision Framework',
    duration: 5,
    type: 'interactive',
    content: {
      main: 'When to use AI vs. Humans',
      sections: [
        {
          title: 'Low Ambiguity + Low Irreversibility',
          content: '→ AI',
          highlight: true
        },
        {
          title: 'High Ambiguity + High Irreversibility',
          content: '→ Human (senior) decides; AI prepares options',
          highlight: true
        }
      ]
    }
  },
  {
    id: 'workflow-per-ticket',
    title: 'Default Workflow Per Ticket',
    duration: 5,
    type: 'content',
    content: {
      sections: [
        {
          title: '1. Clarify & Plan (AI)',
          content: 'Propose architecture/changes, risks, questions, ADR draft'
        },
        {
          title: '2. Scaffold (AI)',
          content: 'Code skeletons, tests, CI, docs'
        },
        {
          title: '3. Constrain (Human)',
          content: 'Confirm boundaries, data contracts, SLAs, PII rules'
        },
        {
          title: '4. Implement & Test (AI)',
          content: 'Generate code + tests until green locally/CI'
        },
        {
          title: '5. Review (Human)',
          content: 'Adversarial review; add the non-obvious bits'
        },
        {
          title: '6. Release (AI+Human)',
          content: 'Changelog, release notes, runbook; human owns go/no-go'
        }
      ]
    }
  },
  {
    id: 'case-study-intro',
    title: 'Case Study',
    subtitle: 'AI Did the Engineering, Not Just Coding',
    duration: 15,
    type: 'demo',
    content: {
      main: 'Customer Profile Service + Basic UI',
      sections: [
        {
          title: 'Inputs',
          content: [
            '1-page problem statement with acceptance criteria',
            'Empty mono-repo skeleton: /backend, /frontend, /infra',
            'Sandbox cloud project + throwaway DB'
          ]
        },
        {
          title: 'Outcomes',
          content: [
            'Time: spec → running service in hours, not weeks',
            'Coverage: target met; bugs found by AI fuzzing',
            'Human interventions: # of judgment decisions that mattered'
          ]
        }
      ]
    }
  },
  {
    id: 'case-study-steps',
    title: 'Step-by-Step Engineering Process',
    duration: 10,
    type: 'content',
    content: {
      sections: [
        {
          title: '1. Architecture & ADR',
          content: 'AI proposes; Human sets PII boundaries, SLAs, auth strategy'
        },
        {
          title: '2. Backend Scaffold',
          content: 'FastAPI/Express, entities, repository pattern, 80% test coverage'
        },
        {
          title: '3. Frontend Page',
          content: 'React page with validation, API hooks, accessibility'
        },
        {
          title: '4. Infra & CI',
          content: 'Docker, GitHub Actions, coverage gates, IaC'
        },
        {
          title: '5. Quality Strategy',
          content: 'Human defines critical flows; AI generates test plans'
        },
        {
          title: '6. Docs & Runbooks',
          content: 'README, API docs, on-call runbook, release notes'
        }
      ]
    }
  },
  {
    id: 'career-path',
    title: 'Career Design',
    subtitle: 'From Traditional Junior to AI-Native Orchestrator',
    duration: 5,
    type: 'content',
    content: {
      main: '30-60-90 Day Path',
      sections: [
        {
          title: 'Days 1-30',
          content: 'Ship one small feature/week end-to-end with AI. Log prompts, outputs, fixes',
          highlight: true
        },
        {
          title: 'Days 31-60',
          content: 'Own a service boundary; introduce performance budget; add observability'
        },
        {
          title: 'Days 61-90',
          content: 'Run mini-migration using AI; write ADR; present lessons learned'
        }
      ],
      points: [
        'PRs where AI generated bulk + you demonstrate judgment',
        'ADRs you authored; test strategies you enforced',
        'Incidents you handled with AI assistance'
      ]
    }
  },
  {
    id: 'templates',
    title: 'Practical Templates',
    duration: 5,
    type: 'code',
    content: {
      code: [
        {
          language: 'markdown',
          title: 'ADR Template',
          code: `# ADR: <Decision Title>
## Context
<Problem, constraints, compliance/PII notes>

## Decision
<Chosen approach; boundaries; SLAs>

## Consequences
<Tradeoffs; risks; rollback strategy>

## Alternatives
<A, B, C with pros/cons>`
        },
        {
          language: 'text',
          title: 'AI Non-Use Exception',
          code: `Reason: <novel IP | privacy | training>
Scope: <files/services>
Mitigation: <pair review | extra tests>
Reviewer: <senior approver>`
        }
      ]
    }
  },
  {
    id: 'prompt-library',
    title: 'Prompt Library',
    subtitle: 'Copy & Paste Ready',
    duration: 5,
    type: 'code',
    content: {
      code: [
        {
          title: 'Plan & ADR',
          language: 'text',
          code: 'Turn these acceptance criteria into an architecture plan (boundaries, data model, API endpoints), list risks and open questions, and draft an ADR with context/decision/consequences.'
        },
        {
          title: 'Backend Scaffold',
          language: 'text',
          code: 'Generate <stack> service skeleton with validation, repository pattern, OpenAPI, and unit tests for ≥80% coverage.'
        },
        {
          title: 'CI Pipeline',
          language: 'text',
          code: 'Write a GitHub Actions workflow that builds, tests, lints, and blocks merge if coverage <80%.'
        }
      ]
    }
  },
  {
    id: 'pushback-faq',
    title: 'Anticipating the Pushback',
    duration: 5,
    type: 'content',
    content: {
      sections: [
        {
          title: '"Isn\'t this replacing people?"',
          content: 'It\'s replacing tasks, not responsibility. Headcount shifts from typing to judgment.'
        },
        {
          title: '"Won\'t juniors stop learning?"',
          content: 'They\'ll learn faster by operating the whole system with AI.'
        },
        {
          title: '"What about quality/security?"',
          content: 'We raise the bar: coverage gates, threat checks, human approval, traceable ADRs.'
        },
        {
          title: '"Will AI hallucinate?"',
          content: 'Yes. That\'s why we constrain context, verify outputs, keep humans on irreversible decisions.'
        }
      ]
    }
  },
  {
    id: 'closing',
    title: 'The Bottom Line',
    duration: 2,
    type: 'quote',
    content: {
      quote: {
        text: 'Use AI to redesign a process so deeply that it makes new value people will pay real money for.',
        context: 'Don\'t buy tools to look modern. Change how you work so the output is unrecognizably better.'
      },
      main: 'Hiring Rule of Thumb',
      points: [
        'Don\'t hire people to do what AI already does well',
        'Hire people to decide, verify, and design',
        'Your next step: Pick one workflow this week and apply AI-First'
      ]
    },
    animations: ['zoom', 'fade']
  }
]

export const getSlideById = (id: string): Slide | undefined => {
  return slides.find(slide => slide.id === id)
}

export const getSlideIndex = (id: string): number => {
  return slides.findIndex(slide => slide.id === id)
}

export const getTotalDuration = (): number => {
  return slides.reduce((total, slide) => total + slide.duration, 0)
}