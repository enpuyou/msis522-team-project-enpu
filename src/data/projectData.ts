export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: string[];
  methods: string[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

export const projectData: ProjectPageData = {
  slug: 'norma-ai',

  title: 'norma.ai',
  subtitle:
    'Observability, guardrails, and evaluation for LLM agents — structured traces, policy enforcement, and quality scores without changing agent code.',
  ownerLine: 'Enpu You — MSIS 522 Final Project',
  executiveSummary:
    'When LLM-powered agents run in production, it is hard to know what they actually did, whether they stayed within their intended scope, and how good their outputs were. norma.ai addresses these three problems directly: it records every agent run as a structured span tree (observability), runs deterministic policy checks before every tool call (guardrails), and scores each run with a composite quality evaluation (evaluation). It wraps existing Python agents via a one-line adapter — no agent code changes required — and provides a dashboard for engineers and managers to inspect runs, review violations, and export compliance reports.',

  instructions: [
    'Observability — every agent run is recorded as a structured span tree: session → handoff → LLM call → tool call → enforcement check, with timing, token counts, and cost per node.',
    'Guardrails — five deterministic checks run before every tool call (tool ACL, data path, PII patterns, cost SLA, latency SLA) with no LLM involvement and microsecond overhead.',
    'Evaluation — each run receives a composite quality score: deterministic checks (output length, error keywords, format, scope) combined with an optional LLM-as-judge rationale from GPT-4o-mini.',
    'Compliance — 12 rules across OWASP LLM Top 10, NIST AI RMF, and EU AI Act are evaluated continuously and exportable as a PDF audit report.',
  ],

  links: [
    { label: 'GitHub Repo', url: 'https://github.com/enpuyou/norma', primary: true },
    { label: 'Slides PDF', url: '/project-assets/final-slides.pdf' },
    { label: 'Technical Report', url: '/project-assets/report.pdf' },
  ],

  badges: [
    'Python / FastAPI',
    'Next.js 14',
    'LangChain / LangGraph',
    'OpenAI GPT-4o',
    'SQLAlchemy / PostgreSQL',
    'OWASP LLM Top 10',
    'NIST AI RMF',
    'EU AI Act',
    'Docker',
  ],

  keywords: [
    'ai-governance',
    'llm-agents',
    'policy-enforcement',
    'trust-scoring',
    'compliance',
    'observability',
    'multi-agent',
  ],

  methods: [
    'Deterministic policy enforcement (no LLM, microsecond latency)',
    'LLM-as-judge quality scoring (GPT-4o-mini)',
    'Human-in-the-loop approval for trust tier upgrades',
    'Probabilistic failure attribution in multi-agent pipelines',
    'OTel-compatible span tracing with OTLP export',
    'Regex + AST static analysis for contract auto-generation',
  ],

  metrics: [
    { label: 'Team', value: '1 student', note: 'Solo project — Enpu You' },
    { label: 'Core Users', value: 'AI Eng + Managers', note: 'Dual-mode: engineer detail view and executive summary' },
    { label: 'Test Coverage', value: '97 tests passing', note: 'pytest suite across all core engines' },
    { label: 'API Surface', value: '40+ endpoints', note: '10 FastAPI routers covering agents, runs, contracts, compliance' },
  ],

  problemStatement:
    'When you deploy LLM-powered agents in production, you lose control. Agents can call tools they are not authorized to use, access data outside their scope, produce outputs containing PII or credentials, and accumulate costs with no per-run accountability. Existing observability tools record what happened but cannot enforce what should happen. There is no standard way to define an agent\'s allowed behavior, no persistent trust record that reflects its history, and no continuous compliance mapping to regulatory frameworks like OWASP LLM Top 10 or EU AI Act \u2014 leaving organizations exposed to security, quality, and regulatory risk every time an agent runs.',
  solutionSummary:
    'norma.ai is a governance layer that wraps existing agents without changing their code. Each agent is assigned a human-readable YAML contract that defines allowed tools, permitted data paths, output constraints (PII patterns), SLA limits (cost, latency), and trust tier thresholds. Before every tool call, five deterministic checks run in microseconds — no LLM involved. Every run is recorded as a structured trace with spans, quality scores, trust score updates, and violation events. A Next.js dashboard gives engineers a force-directed agent topology, waterfall timelines, contract version diffs, and span trees; managers get cost-per-task trends, quality charts, plain-English alerts, and one-click compliance PDF exports.',
  audience: 'AI engineers deploying LLM agents in production; engineering managers and compliance leads responsible for AI oversight',
  impactGoal:
    'Reduce unauthorized tool use, PII leakage, and cost overruns in agent deployments by making policy enforcement automatic and auditable; accelerate compliance readiness for OWASP LLM Top 10, NIST AI RMF, and EU AI Act.',
  status: 'Working Prototype',

  members: [
    {
      name: 'Enpu You',
      role: 'Solo Engineer',
      focus:
        'Full-stack design and implementation — FastAPI backend, Next.js frontend, trust/enforcement/quality engines, compliance framework, multi-agent adapters, and 15+ demo agents',
    },
  ],

  gallery: [
    {
      title: 'Fleet Dashboard — Agent Overview',
      caption:
        'The Fleet Dashboard shows every monitored agent with its trust tier badge, quality score, cumulative cost, completion rate, and violation count. Cards pulse green when an agent is actively running via Server-Sent Events.',
      assetPath: '/project-assets/fleet-dashboard-card-view.png',
    },
    {
      title: 'Fleet Dashboard — Stats View',
      caption:
        'Switching to the stats view surfaces per-agent latency (P50/P95), avg token counts, violation counts, and quality trends across all runs — making it easy to spot regressions or cost hotspots across the fleet.',
      assetPath: '/project-assets/fleet-dashboard-stats-view.png',
    },
    {
      title: 'Agent Onboarding — AST Scan',
      caption:
        'Drop in a Python directory path; norma AST-scans all files for @tool-decorated functions, detects agent patterns (LangChain, LangGraph, CrewAI, AutoGen), generates contracts for every agent found, and registers them in one batch.',
      assetPath: '/project-assets/agent-onboarding-scan.png',
    },
    {
      title: 'Agent Detail — Performance Metrics',
      caption:
        'The agent detail page shows the trust score trajectory, quality score distribution across 128 runs, avg cost, latency P50/P95, total violations, and AI-generated enhancement recommendations with actionable YAML snippets.',
      assetPath: '/project-assets/agent-detail-performance-metrics.png',
    },
    {
      title: 'Analytics Trends — Quality, Cost, Latency',
      caption:
        'Time-series charts with configurable granularity (per run, per hour, per day) showing quality score, cost, and trust score on the same axis — with a separate panel for average latency. Hover tooltips show exact values per data point.',
      assetPath: '/project-assets/analytics-trends-quality-cost-latency.png',
    },
    {
      title: 'Agent Contract — YAML Viewer',
      caption:
        'Every agent contract is versioned. The contract viewer shows the active version\'s full YAML — allowed tools, data path globs, PII output deny patterns, SLA limits, trust tier thresholds, and delegation rules — with a "Generate Proposal" button to auto-draft the next version.',
      assetPath: '/project-assets/agent-contract-yaml-viewer.png',
    },
    {
      title: 'Enforcement Violations + Agent Graph',
      caption:
        'The enforcement log lists every blocked action with policy rule, tool name, action type, run ID, and timestamp. Below it, the force-directed agent graph visualizes the multi-agent topology with nodes colored by trust tier and edges showing handoff relationships.',
      assetPath: '/project-assets/enforcement-violations-agent-graph.png',
    },
    {
      title: 'Agent Graph — Topology + Sequence View',
      caption:
        'Clicking any node in the topology graph highlights its execution sequence: LangGraph nodes are parsed from .add_node() calls and appear as virtual sub-agents, with fetcher → analyzer → writer handoffs rendered as directed edges.',
      assetPath: '/project-assets/agent-graph-topology-timeline.png',
    },
    {
      title: 'Run Detail — Span Tree',
      caption:
        'Each run is broken down into a hierarchical span tree: session → agent_handoff → llm_call → tool_call → enforcement_check. Every span captures timing, input/output (truncated), token counts, cost, and model name.',
      assetPath: '/project-assets/run-detail-span-tree.png',
    },
    {
      title: 'Run Detail — Waterfall Timeline',
      caption:
        'The waterfall view shows the full execution timeline across 22 spans and 12.57 seconds — color-coded by span type (session, handoff, LLM, enforce, tool) — making it straightforward to identify latency bottlenecks and redundant enforcement checks.',
      assetPath: '/project-assets/run-waterfall-timeline.png',
    },
    {
      title: 'Quality Evaluation Panel',
      caption:
        'The quality evaluation panel breaks down the composite score: deterministic checks (output length, no error keywords, format compliance, contract scope) plus an LLM-as-judge rationale from GPT-4o-mini explaining exactly why a score of 51% was assigned.',
      assetPath: '/project-assets/quality-evaluation-panel.png',
    },
    {
      title: 'Compliance Dashboard',
      caption:
        'The compliance dashboard evaluates 12 rules across OWASP LLM Top 10, NIST AI RMF, EU AI Act, and Model Governance. Each rule shows pass/fail/warn with evidence counts. A one-click export generates a compliance PDF report via fpdf2.',
      assetPath: '/project-assets/compliance-dashboard.png',
    },
  ],

  stack: [
    {
      category: 'Frontend and Experience',
      tools: ['Next.js 14 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Server-Sent Events'],
      note: 'Five pages: Fleet Dashboard, Agent Detail, Run Detail, Compliance, and Alerts. Key components include AgentCard with TrustSparkline, SpanTree, WaterfallTimeline, AgentGraph (force-directed), QAPanel, and AttributionPanel.',
    },
    {
      category: 'AI, Logic, and Orchestration',
      tools: [
        'OpenAI GPT-4o / GPT-4o-mini',
        'LangChain ≥0.3',
        'LangGraph ≥0.2',
        'OpenAI Agents SDK ≥0.10',
        'CrewAI',
        'Microsoft AutoGen',
      ],
      note: 'Five framework adapters (NormaAgentSession, NormaOpenAIFuncSession, NormaOpenAIAgentSession, NormaCrewAISession, NormaAutoGenSession) all inherit from NormaSessionCore and produce identical Run/Span records. LLM-as-judge scoring via GPT-4o-mini.',
    },
    {
      category: 'Data, Backend, and Integrations',
      tools: [
        'Python 3.11 / FastAPI',
        'SQLAlchemy async / Pydantic v2',
        'SQLite (dev) → PostgreSQL (prod)',
        'Poetry',
        'Docker + docker-compose',
        'structlog',
        'fpdf2',
        'pytest (97 tests)',
      ],
      note: '16 ORM tables, 10 FastAPI routers, 40+ endpoints. OTel-compatible span system with optional OTLP export to Jaeger/Grafana Tempo/Datadog. CLI tools: norma, norma-import, norma-watch, norma-generate, norma-onboard.',
    },
  ],

  features: [
    {
      title: 'Agent Contracts & Runtime Enforcement',
      description:
        'Every agent is assigned a YAML contract that defines allowed tools, permitted data paths (glob patterns), PII output deny patterns, SLA limits (cost and latency), and trust tier thresholds. Five deterministic pre-execution checks run before every tool call — no LLM involved — in microsecond latency. Contracts are versioned and require human approval to activate; every privilege increase leaves an audit event.',
      highlights: [
        'Tool ACL, data path glob matching, PII regex (credit card, SSN, credentials)',
        'Cost SLA and latency SLA checks per run',
        'Never auto-activates — human approval required for every contract change',
        'AST-based contract auto-generation from @tool-decorated Python functions',
      ],
    },
    {
      title: 'Trust Score & Quality Scoring',
      description:
        'Each agent maintains a continuous trust score (0.0–1.0) updated after every run: +0.025 per clean run, −0.25 on any violation, with automatic reversion to restricted tier on violation. Three tiers (restricted, standard, trusted) never auto-promote — a human must approve every tier upgrade. Quality scoring combines deterministic checks (output length, error keywords, format compliance, contract scope) with an optional LLM-as-judge evaluation from GPT-4o-mini, yielding a 0.0–1.0 composite score with rationale.',
      highlights: [
        'Trust score starts at 0.40 (restricted tier) and tracks clean-run streaks',
        'LLM judge: relevance, completeness, accuracy, format — returns score + rationale',
        'Composite formula: 0.4 × deterministic + 0.6 × LLM score',
        'Trust trajectory stored per run for full audit history',
      ],
    },
    {
      title: 'Compliance Reporting & Multi-Agent Observability',
      description:
        'Twelve compliance rules across OWASP LLM Top 10, NIST AI RMF, EU AI Act, and Model Governance are evaluated continuously. One-click PDF export generates a compliance report via fpdf2. For multi-agent pipelines, norma builds a hierarchical span tree (session → handoff → LLM → tool → enforcement), renders a force-directed topology graph, and performs probabilistic failure attribution — identifying the most likely node responsible for a quality degradation with confidence scores and alternative hypotheses.',
      highlights: [
        '12 compliance rules: OWASP LLM01/02/06/08/09, NIST Map/Measure/Manage, EU AI Act Art. 17/18/19, Model Drift',
        'Force-directed agent topology with trust-tier color coding',
        'Waterfall timeline across all spans for latency debugging',
        'Failure attribution: attribution_prob = min(quality_delta × 1.5 + confidence penalty, 1.0)',
      ],
    },
    {
      title: 'Natural Language Q&A & Enhancement Recommendations',
      description:
        'A natural language Q&A engine classifies intent via regex, queries the database, and returns data-driven answers with sample sizes and time windows — with LLM fallback for unstructured questions. The enhancement engine identifies three patterns across run history: token waste (large input, tiny output), repeated violation patterns, and cost hotspots (single step >35% of run cost), and generates plain-English fix suggestions with YAML contract update snippets.',
      highlights: [
        'Q&A always cites sample size (n=X runs) and time window',
        'Enhancement recommendations include confidence level (high/medium/low)',
        'Generated YAML snippets are ready to paste into the contract',
        'Real-time alerts via SSE: run_started, violation_detected, trust_changed',
      ],
    },
  ],

  architecture: [
    {
      title: 'Agent Fleet (Input)',
      description:
        'Any existing Python agent — LangChain ReAct, LangGraph multi-node, OpenAI Agents SDK, CrewAI, or AutoGen — is instrumented by wrapping it in a NormaSession adapter or via the norma-watch CLI. No agent code changes are required. The adapter monkey-patches BaseTool._run (LangChain) or wraps function-calling hooks to intercept every tool invocation before it executes.',
    },
    {
      title: 'Enforcement & Tracing Layer',
      description:
        'Before every tool call, five deterministic checks run in microsecond latency: Tool ACL, Data Path glob matching, PII output regex scan, Cost SLA, and Latency SLA. Each check produces a PASS or BLOCKED result with a policy rule reference. All actions are recorded as OTel-compatible spans (16-char hex span_id, timing, input/output truncated, token counts, cost, model) and written to the database via SQLAlchemy async.',
    },
    {
      title: 'Governance Engines (Decision)',
      description:
        'Five core engines process run data: Trust Engine (score update + tier logic), Quality Engine (deterministic + LLM judge composite), Compliance Engine (12 rule evaluations), Attribution Engine (probabilistic fault localization), and Enhancement Engine (token waste / violation pattern / cost hotspot detection). All engines are deterministic except the optional LLM judge call, which uses GPT-4o-mini.',
    },
    {
      title: 'Dashboard & API (Output)',
      description:
        'A FastAPI backend exposes 40+ endpoints across 10 routers. A Next.js 14 frontend renders five pages: Fleet Dashboard (agent cards + stats view), Agent Detail (metrics, trust sparkline, contract viewer, run history, attribution, recommendations), Run Detail (span tree, waterfall timeline, quality panel, prompt inspector), Compliance (12-rule evaluation + PDF export), and Alerts (violation inbox). Real-time updates stream via SSE.',
    },
  ],

  codeHighlights: [
    {
      title: 'Agent Contract — YAML Schema',
      language: 'yaml',
      note: 'Human-readable, machine-enforceable. Contracts are versioned and require human approval before activation. Every field is enforced deterministically at runtime.',
      code: `agent_id: financial-reader
version: "2.0"
tier: standard
scope:
  description: Earnings report reader and summarizer
  allowed_tasks: [summarize_earnings, extract_financials]
authorities:
  tools:
    allow: [read_file, search_web]
    deny: [read_restricted_data, write_database]
  data:
    allow:
      - data/public/**
      - data/earnings/**
    deny:
      - data/confidential/**
      - data/internal/**
output_constraints:
  deny_patterns:
    - "\\\\b(?:\\\\d[ -]?){13,16}\\\\b"        # credit card
    - "\\\\b\\\\d{3}[- ]\\\\d{2}[- ]\\\\d{4}\\\\b"  # SSN
    - "(?i)(password|api_key)\\\\s*=\\\\s*\\\\S+"    # credentials
sla:
  max_cost_per_run: 0.05
  max_latency_seconds: 30
  min_quality_score: 0.75
trust:
  initial_score: 0.40
  tier_thresholds: {standard: 0.65, trusted: 0.82}
  violation_penalty: 0.25
  clean_run_increment: 0.025`,
    },
    {
      title: 'Framework Adapter — LangChain Integration',
      language: 'python',
      note: 'A single wrapper call is all that is needed. No changes to the agent itself. The adapter monkey-patches BaseTool._run to intercept every tool invocation and run the five enforcement checks before execution.',
      code: `from norma.integrations import NormaAgentSession

# Existing agent — unchanged
agent_executor = create_react_agent(llm, tools, prompt)

# Wrap with norma governance — one line
with NormaAgentSession(
    agent_id="financial-reader",
    contract_path="contracts/financial_reader_v2.yaml",
) as session:
    result = session.run(agent_executor, input={"input": query})
    # All tool calls, LLM calls, and enforcement checks
    # are automatically recorded as structured spans`,
    },
  ],

  roadmap: [
    {
      phase: 'Now',
      items: [
        'Working prototype with full enforcement, trust scoring, and quality evaluation',
        '5 framework adapters: LangChain, LangGraph, OpenAI Agents SDK, CrewAI, AutoGen',
        '15+ runnable demo agents including multi-node LangGraph pipelines',
        '12-rule compliance framework with PDF export',
        '97 passing tests across all core engines',
        'Docker + docker-compose deployment with PostgreSQL',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Webhook and Slack/PagerDuty alerting for violation events',
        'Role-based access control for contract approval workflows',
        'Cost attribution by business unit or project tag',
        'Deeper LangGraph introspection for conditional branch visibility',
        'Expanded LLM judge rubrics per domain (finance, legal, customer support)',
      ],
    },
    {
      phase: 'Later',
      items: [
        'SaaS multi-tenant deployment with team workspaces',
        'Native integrations with Datadog, Grafana Tempo, and Jaeger via OTLP',
        'Automated contract hardening suggestions applied via PR to agent repos',
        'Benchmark datasets for quality score calibration across agent types',
        'EU AI Act Article 13 transparency report generation for high-risk AI systems',
      ],
    },
  ],

  risks: [
    {
      title: 'No connection to real enterprise agent infrastructure',
      mitigation:
        'norma.ai currently wraps demo agents running locally. It is not yet integrated with how enterprises actually build and operate agents — proprietary orchestration platforms, internal tool registries, or cloud-hosted agent runtimes. Connecting to real deployment infrastructure would require understanding those systems first, which needs direct access to production environments.',
    },
    {
      title: 'Agent structures are more complex than tool-calling wrappers',
      mitigation:
        'The current adapters cover LangChain, LangGraph, OpenAI Agents SDK, CrewAI, and AutoGen — but agent behavior goes far beyond tool calls. Coding agents, MCP servers, skills-based agents, and multi-modal pipelines each have different execution models. Wrapping them reliably without modifying internal logic is an open problem. Coverage will need to expand significantly to be useful in practice.',
    },
    {
      title: 'Trust score thresholds are hardcoded and not validated',
      mitigation:
        'The current trust score formula (+0.025 per clean run, −0.25 on violation, tiers at 0.65 and 0.82) was chosen as reasonable defaults, not derived from real agent behavior data. There is no established benchmark for what "trustworthy" means across different agent types and tasks. Effective trust measurement likely requires domain-specific calibration and longitudinal data from real deployments.',
    },
  ],
};
