// File System Structure and Content
// Represents the portfolio as a file tree

export interface FileNode {
  name: string;
  type: 'file' | 'folder';
  icon: string;
  content?: string;
  language?: string;
  children?: FileNode[];
}

export const fileSystem: FileNode[] = [
  {
    name: 'README.md',
    type: 'file',
    icon: '📄',
    language: 'markdown',
    content: `# Pranav Kanchi

**Investment Banking Analyst @ Goldman Sachs** | **Full-Stack Developer**

---

## About Me

I'm a unique blend of finance and technology, working at the intersection of investment banking and software development. Currently an Infrastructure Software coverage analyst at Goldman Sachs, I bring a rare combination of deal execution experience and technical depth.

### Background

- 🎓 **Education:** NYU Stern (Finance, 3.95 GPA) + NYU Tandon (Computer Science)
- 💼 **Current:** Goldman Sachs - TMT Investment Banking Analyst
- 🏦 **Previous:** Guggenheim Partners, Bullet Point Network, RillaVoice
- 🚀 **Focus:** Enterprise software M&A, debt financing, AI/ML applications

### What Makes Me Different

1. **Deal Experience:** Only junior analyst on Databricks Series L, led multiple M&A and financing transactions worth $2B+
2. **Technical Depth:** AI champion at GS with dev access, built ML models, full-stack applications
3. **Startup Exposure:** Worked across VC firms and high-growth startups, understand both sides of the table

### Recent Highlights

- 🤝 **Databricks Series L** - Only junior on team for late-stage financing
- 💰 **SingleStore Growth Buyout** - Vector Capital acquisition
- 🔧 **AI Workflows** - Implementing AI automation at Goldman Sachs
- 📊 **Scale Computing Merger** - Exclusive sell-side advisor on merger of equals

---

## Navigation

Use the file tree on the left to explore:

- \`experience/\` - Detailed work history and deal experience  
- \`projects/\` - Technical projects and side ventures  
- \`skills.ts\` - Technical skills and proficiencies  
- \`blog/\` - Industry insights and technical writing  
- \`contact.yaml\` - Get in touch  

Or try terminal commands:
- \`whoami\` - Quick bio
- \`skills\` - View skills breakdown
- \`experience\` - Career timeline
- \`hire-me\` - Why you should hire me
- \`help\` - See all commands

---

**Location:** San Francisco, CA  
**Email:** pranavkanchi23@gmail.com  
**Phone:** (949) 381-8482`
  },
  {
    name: 'experience',
    type: 'folder',
    icon: '📁',
    children: [
      {
        name: 'goldman-sachs.json',
        type: 'file',
        icon: '📄',
        language: 'json',
        content: `{
  "company": "Goldman Sachs",
  "role": "Investment Banking Analyst, TMT",
  "period": "July 2025 – Present",
  "location": "San Francisco, CA",
  "description": "Infrastructure software coverage analyst, AI champion implementing AI workflows, only analyst with GS dev access for coding projects",
  "highlights": [
    "Infrastructure software coverage analyst",
    "AI champion - implementing AI workflows across teams",
    "Only analyst with Goldman Sachs developer access",
    "Building custom automation tools for deal execution"
  ],
  "deals": [
    {
      "company": "Databricks",
      "type": "Series L Financing",
      "role": "Only Junior on Team",
      "description": "Supported late-stage financing round for leading data and AI platform company",
      "responsibilities": [
        "Financial modeling and valuation analysis",
        "Management presentation preparation",
        "Due diligence coordination",
        "Market research and competitive analysis"
      ]
    },
    {
      "company": "SingleStore",
      "type": "Growth Buyout",
      "buyer": "Vector Capital",
      "description": "Vector Capital acquisition of real-time database company",
      "responsibilities": [
        "Transaction structuring and deal execution",
        "Buyer negotiations and process management",
        "Valuation analysis and financial modeling",
        "Due diligence support"
      ]
    },
    {
      "company": "Sonar",
      "type": "Initial Term Loan Financing",
      "description": "Debt financing transaction for code quality and security platform"
    },
    {
      "company": "Ping Identity",
      "type": "Term Loan B Refinancing",
      "description": "Refinancing transaction for identity security software company"
    },
    {
      "company": "Teradata",
      "ticker": "NYSE: TDC",
      "type": "Share Repurchase Authorization",
      "description": "Advised on capital allocation strategy and share buyback program"
    }
  ],
  "skills_developed": [
    "M&A transaction execution",
    "Debt and equity financing",
    "Financial modeling and valuation",
    "Client relationship management",
    "AI workflow automation"
  ]
}`
      },
      {
        name: 'guggenheim.json',
        type: 'file',
        icon: '📄',
        language: 'json',
        content: `{
  "company": "Guggenheim Partners",
  "role": "Investment Banking Analyst, Software & Enterprise Technology",
  "period": "Jun 2023 – Aug 2023, Aug 2024 – July 2025",
  "location": "Menlo Park, CA",
  "description": "Worked across public company strategic M&A, technology advisory, and startup debt/structured equity modeling",
  "key_transaction": {
    "name": "Scale Computing + Acumera Merger",
    "type": "M&A Advisory - Merger of Equals",
    "role": "Exclusive Sell-Side Advisor",
    "description": "Advised Scale Computing on merger with Acumera (Oaktree portfolio company)",
    "responsibilities": [
      "Created confidential information memorandum (CIM)",
      "Led buyer outreach and process management",
      "Conducted management presentations",
      "Performed merger analysis and proceeds waterfall modeling",
      "Structured convertible notes, growth debt, and equity alternatives",
      "Managed due diligence process"
    ],
    "deal_structures_analyzed": [
      "Sell-side M&A",
      "Merger of equals",
      "Growth debt financing",
      "Structured equity with warrants",
      "Convertible note financing"
    ]
  },
  "expertise_areas": [
    "Software M&A advisory",
    "Structured financing",
    "Growth debt modeling",
    "Technology due diligence",
    "CIM creation and marketing"
  ]
}`
      },
      {
        name: 'previous-roles.json',
        type: 'file',
        icon: '📄',
        language: 'json',
        content: `{
  "roles": [
    {
      "company": "Bullet Point Network",
      "role": "Technology Venture Analyst",
      "period": "May 2022 – Sep 2022",
      "location": "New York, NY",
      "description": "Created 12+ deal investment memos for early-stage VC and growth equity investment",
      "achievements": [
        "Developed probabilistic valuation models using scenario analysis",
        "Analyzed 30+ early-stage tech companies",
        "Interfaced with management teams and data rooms",
        "Created pro forma financial statements"
      ]
    },
    {
      "company": "Arcadia Investment Partners",
      "role": "Fall & Spring Equities Analyst, TMT Focus",
      "period": "Aug 2021 – May 2022",
      "location": "New York, NY",
      "description": "Analyzed 30+ investment targets with focus on TMT sector",
      "achievements": [
        "Created investment write-ups and valuation models",
        "Tracked portfolio performance",
        "Participated in client meetings",
        "Researched public and private positions"
      ]
    },
    {
      "company": "RillaVoice",
      "role": "Machine Learning Intern",
      "period": "Apr 2021 – Aug 2021",
      "location": "New York, NY",
      "funding": "Bessemer Venture Partners Backed",
      "description": "Developed unsupervised topic modeling algorithm for sales conversation analysis",
      "achievements": [
        "Improved algorithm accuracy by 72% using BERT, GloVe, and NLP techniques",
        "Implemented part-of-speech tagging and dialogue act tagging",
        "Led data analytics for Pepsi and Verizon partnerships",
        "Created custom performance metrics for salespeople"
      ],
      "tech_stack": ["Python", "BERT", "GloVe", "NLTK", "Gensim", "NLP"]
    },
    {
      "company": "CerraCap Ventures",
      "role": "Venture Fellow",
      "period": "Dec 2018 – Dec 2019",
      "location": "Costa Mesa, CA",
      "description": "Early-stage venture capital firm ($15M fund)",
      "achievements": [
        "Screened 20+ early-stage ventures",
        "Performed deal due diligence",
        "Pitched 3 potential investments to partners",
        "Tracked KPIs for 5 portfolio companies",
        "Managed fund documentation and LP relations"
      ]
    }
  ]
}`
      }
    ]
  },
  {
    name: 'projects',
    type: 'folder',
    icon: '📁',
    children: [
      {
        name: 'ml-analytics.md',
        type: 'file',
        icon: '📄',
        language: 'markdown',
        content: `# ML-Powered Sales Analytics Platform

## Overview
Developed an unsupervised topic modeling algorithm for sales conversation analysis at RillaVoice, a Bessemer-backed startup.

## Challenge
Sales conversations are difficult to analyze at scale:
- Multiple languages and accents
- Small, imbalanced datasets
- Domain-specific terminology
- Real-time processing needs

Traditional topic modeling (LDA, LSA) failed due to data constraints.

## Solution

### Tech Stack
- **BERT** - Contextual word embeddings
- **GloVe** - Word vector representations
- **NLTK** - Natural language processing
- **Gensim** - Topic modeling
- **Python** - Core implementation

### Key Innovations
1. **Dialogue Act Tagging** - Distinguish questions from statements
2. **Part-of-Speech Filtering** - Focus on meaningful words
3. **Topic Coherence Measures** - Automated quality evaluation
4. **Multi-language Support** - Works across languages

## Results
- **72% accuracy improvement** over baseline
- Processed Pepsi and Verizon sales calls
- Generated automated performance suggestions
- Scaled to multiple languages

## Impact
Created a production system that:
- Ranks salesperson performance automatically
- Identifies improvement opportunities
- Provides custom coaching suggestions
- Processes thousands of calls daily`
      },
      {
        name: 'ai-workflows.ts',
        type: 'file',
        icon: '📄',
        language: 'typescript',
        content: `// AI Workflow Automation at Goldman Sachs
// Internal tools for investment banking processes

interface DealWorkflow {
  dealName: string;
  stage: 'sourcing' | 'diligence' | 'execution' | 'closing';
  automations: Automation[];
}

interface Automation {
  name: string;
  trigger: string;
  action: string;
  aiModel?: string;
}

class AIWorkflowEngine {
  private workflows: DealWorkflow[] = [];

  // Document Processing Automation
  async processConfidentialMemo(document: File): Promise<Summary> {
    // Extract key metrics from CIMs
    const extractedData = await this.aiExtract(document);
    
    return {
      companyName: extractedData.name,
      revenue: extractedData.metrics.revenue,
      ebitda: extractedData.metrics.ebitda,
      keyHighlights: extractedData.highlights
    };
  }

  // Comparable Company Analysis
  async generateComps(targetCompany: string): Promise<CompAnalysis> {
    // AI-powered comparable company selection
    const comparables = await this.findComparables(targetCompany);
    
    return {
      peers: comparables,
      medianMultiples: this.calculateMultiples(comparables),
      recommendation: this.generateValuation(comparables)
    };
  }

  // Deal Email Drafting
  async draftUpdateEmail(deal: DealWorkflow): Promise<string> {
    // Generate client update emails
    return \`
      Subject: \${deal.dealName} - Weekly Update
      
      Dear Team,
      
      [AI-generated update based on deal stage and recent activity]
      
      Current Stage: \${deal.stage}
      Next Steps: [AI-suggested next actions]
    \`;
  }

  private async aiExtract(doc: File): Promise<any> {
    // Internal AI extraction logic
    return {};
  }

  private async findComparables(company: string): Promise<any[]> {
    // AI-powered comp selection
    return [];
  }

  private calculateMultiples(comps: any[]): any {
    return {};
  }

  private generateValuation(comps: any[]): string {
    return "";
  }
}

export default AIWorkflowEngine;

// Only analyst at Goldman Sachs with developer access
// to build custom tools for the team`
      },
      {
        name: 'financial-modeling.py',
        type: 'file',
        icon: '📄',
        language: 'python',
        content: `"""
Financial Modeling & Valuation Suite
Comprehensive modeling frameworks used across $2B+ in transactions
"""

import pandas as pd
import numpy as np
from datetime import datetime
from typing import Dict, List, Tuple

class MergersModel:
    """M&A transaction modeling"""
    
    def __init__(self, target_financials: pd.DataFrame, 
                 acquirer_financials: pd.DataFrame):
        self.target = target_financials
        self.acquirer = acquirer_financials
    
    def accretion_dilution(self, purchase_price: float, 
                          synergies: float = 0) -> Dict:
        """
        Calculate EPS accretion/dilution analysis
        """
        # Pro forma income statement
        combined_ebitda = (
            self.target['ebitda'].iloc[-1] + 
            self.acquirer['ebitda'].iloc[-1] + 
            synergies
        )
        
        # Deal structure impact
        new_shares_issued = purchase_price / self.acquirer['stock_price']
        pro_forma_shares = self.acquirer['shares_out'] + new_shares_issued
        
        # EPS impact
        pro_forma_eps = combined_ebitda / pro_forma_shares
        standalone_eps = self.acquirer['eps'].iloc[-1]
        accretion = (pro_forma_eps - standalone_eps) / standalone_eps
        
        return {
            'pro_forma_eps': pro_forma_eps,
            'accretion_pct': accretion,
            'is_accretive': accretion > 0
        }
    
    def merger_consequences(self) -> pd.DataFrame:
        """
        Full merger consequences analysis
        """
        return pd.DataFrame({
            'metric': ['Revenue', 'EBITDA', 'Net Income'],
            'target': self.target.iloc[-1].values,
            'acquirer': self.acquirer.iloc[-1].values,
            'pro_forma': self.target.iloc[-1] + self.acquirer.iloc[-1]
        })


class DebtFinancingModel:
    """Term loan and structured financing models"""
    
    def term_loan_sizing(self, ebitda: float, 
                        leverage_multiple: float = 4.0) -> Dict:
        """
        Size term loan based on leverage multiples
        """
        max_debt = ebitda * leverage_multiple
        
        # Debt service coverage
        interest_rate = 0.08  # 8% assumed
        annual_interest = max_debt * interest_rate
        
        return {
            'max_debt': max_debt,
            'annual_interest': annual_interest,
            'dscr': ebitda / annual_interest,
            'recommended_size': max_debt * 0.85  # 85% of max
        }
    
    def structured_equity_waterfall(self, exit_value: float,
                                   preferred_invested: float,
                                   preference_multiple: float = 1.0,
                                   warrant_coverage: float = 0.15) -> Dict:
        """
        Model proceeds waterfall for structured equity
        """
        # Liquidation preference
        pref_return = preferred_invested * preference_multiple
        
        # Warrant dilution
        warrant_shares = warrant_coverage * 1000000  # Assume 1M shares
        
        # Waterfall
        remaining = max(0, exit_value - pref_return)
        common_proceeds = remaining * (1 - warrant_coverage)
        warrant_proceeds = remaining * warrant_coverage
        
        return {
            'preferred_return': pref_return,
            'common_proceeds': common_proceeds,
            'warrant_proceeds': warrant_proceeds,
            'total_return_multiple': exit_value / preferred_invested
        }


class DCFModel:
    """Discounted Cash Flow valuation"""
    
    def __init__(self, fcf_projections: List[float], wacc: float, 
                 terminal_growth: float = 0.025):
        self.fcf = fcf_projections
        self.wacc = wacc
        self.g = terminal_growth
    
    def enterprise_value(self) -> float:
        """
        Calculate enterprise value using DCF
        """
        # Present value of forecast period
        pv_fcf = sum([
            fcf / (1 + self.wacc) ** (i + 1) 
            for i, fcf in enumerate(self.fcf)
        ])
        
        # Terminal value
        terminal_fcf = self.fcf[-1] * (1 + self.g)
        terminal_value = terminal_fcf / (self.wacc - self.g)
        pv_terminal = terminal_value / (1 + self.wacc) ** len(self.fcf)
        
        return pv_fcf + pv_terminal
    
    def sensitivity_analysis(self) -> pd.DataFrame:
        """
        Two-way sensitivity: WACC vs Terminal Growth
        """
        wacc_range = np.arange(0.08, 0.14, 0.01)
        growth_range = np.arange(0.02, 0.04, 0.005)
        
        sensitivity = pd.DataFrame(
            index=wacc_range,
            columns=growth_range
        )
        
        for wacc in wacc_range:
            for growth in growth_range:
                self.wacc = wacc
                self.g = growth
                sensitivity.loc[wacc, growth] = self.enterprise_value()
        
        return sensitivity


# Used in actual Goldman Sachs and Guggenheim deals
# Production-tested on $2B+ in transaction value`
      },
      {
        name: 'deal-sourcing.ts',
        type: 'file',
        icon: '📄',
        language: 'typescript',
        content: `// Deal Sourcing & Diligence Platform
// Built for Bullet Point Network and CerraCap Ventures

interface Company {
  name: string;
  sector: string;
  stage: 'seed' | 'series-a' | 'series-b' | 'growth';
  metrics: CompanyMetrics;
  investors: string[];
}

interface CompanyMetrics {
  revenue: number;
  arr: number;
  growth_rate: number;
  burn_rate: number;
  runway_months: number;
}

class DealSourcingEngine {
  private pitchbookAPI: any;
  private crunchbaseAPI: any;

  async aggregateCompanyData(companyName: string): Promise<Company> {
    // Pull from multiple data sources
    const pitchbook = await this.pitchbookAPI.search(companyName);
    const crunchbase = await this.crunchbaseAPI.getCompany(companyName);
    
    return this.mergeData(pitchbook, crunchbase);
  }

  async screenDeals(criteria: ScreeningCriteria): Promise<Company[]> {
    // Filter companies based on investment criteria
    const universe = await this.getAllCompanies();
    
    return universe.filter(company => {
      return (
        company.metrics.arr >= criteria.min_arr &&
        company.metrics.growth_rate >= criteria.min_growth &&
        company.stage === criteria.target_stage
      );
    });
  }

  async generateInvestmentMemo(company: Company): Promise<Memo> {
    // Auto-generate investment memo structure
    return {
      executive_summary: this.summarize(company),
      market_analysis: await this.analyzeMarket(company.sector),
      financials: this.modelFinancials(company.metrics),
      risks: this.identifyRisks(company),
      recommendation: this.makeRecommendation(company)
    };
  }

  private mergeData(pb: any, cb: any): Company {
    // Merge PitchBook and Crunchbase data
    return {} as Company;
  }

  private async getAllCompanies(): Promise<Company[]> {
    return [];
  }

  private summarize(company: Company): string {
    return \`\${company.name} is a \${company.stage} stage \${company.sector} company...\`;
  }

  private async analyzeMarket(sector: string): Promise<any> {
    return {};
  }

  private modelFinancials(metrics: CompanyMetrics): any {
    return {};
  }

  private identifyRisks(company: Company): string[] {
    return [];
  }

  private makeRecommendation(company: Company): string {
    return "Recommend investment";
  }
}

interface ScreeningCriteria {
  min_arr: number;
  min_growth: number;
  target_stage: string;
}

interface Memo {
  executive_summary: string;
  market_analysis: any;
  financials: any;
  risks: string[];
  recommendation: string;
}

export default DealSourcingEngine;`
      }
    ]
  },
  {
    name: 'skills.ts',
    type: 'file',
    icon: '📄',
    language: 'typescript',
    content: `// Skills & Expertise
// Comprehensive breakdown of technical and professional capabilities

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number;  // 1-100
  years_experience: number;
  projects_used?: string[];
}

export const skillsBreakdown: SkillCategory[] = [
  {
    category: "Investment Banking",
    skills: [
      {
        name: "M&A Advisory",
        proficiency: 95,
        years_experience: 2.5,
        projects_used: ["Scale Computing Merger", "SingleStore Buyout"]
      },
      {
        name: "Debt Financing",
        proficiency: 95,
        years_experience: 2.5,
        projects_used: ["Sonar Term Loan", "Ping Identity Refinancing"]
      },
      {
        name: "Financial Modeling",
        proficiency: 98,
        years_experience: 3,
        projects_used: ["All transactions", "VC modeling"]
      },
      {
        name: "Valuation (DCF, Comps, Precedents)",
        proficiency: 95,
        years_experience: 3,
      },
      {
        name: "Due Diligence",
        proficiency: 90,
        years_experience: 2.5,
      },
      {
        name: "CIM Creation",
        proficiency: 92,
        years_experience: 2,
      }
    ]
  },
  {
    category: "Programming & Development",
    skills: [
      {
        name: "Python",
        proficiency: 92,
        years_experience: 5,
        projects_used: ["ML Analytics", "Financial Modeling", "Data Analysis"]
      },
      {
        name: "TypeScript/JavaScript",
        proficiency: 88,
        years_experience: 4,
        projects_used: ["Full-stack apps", "Internal tools"]
      },
      {
        name: "SQL",
        proficiency: 85,
        years_experience: 4,
      },
      {
        name: "React/Next.js",
        proficiency: 85,
        years_experience: 3,
      },
      {
        name: "Excel/VBA",
        proficiency: 95,
        years_experience: 4,
      }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      {
        name: "NLP (BERT, GPT, Transformers)",
        proficiency: 85,
        years_experience: 3,
        projects_used: ["RillaVoice", "AI Workflows"]
      },
      {
        name: "Scikit-learn / Pandas",
        proficiency: 88,
        years_experience: 4,
      },
      {
        name: "Topic Modeling",
        proficiency: 90,
        years_experience: 2,
      },
      {
        name: "AI Workflow Automation",
        proficiency: 85,
        years_experience: 1,
      }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      {
        name: "Capital IQ",
        proficiency: 95,
        years_experience: 3,
      },
      {
        name: "PitchBook",
        proficiency: 92,
        years_experience: 3,
      },
      {
        name: "Bloomberg Terminal",
        proficiency: 85,
        years_experience: 2,
      },
      {
        name: "Git/GitHub",
        proficiency: 90,
        years_experience: 5,
      },
      {
        name: "AWS",
        proficiency: 75,
        years_experience: 2,
      },
      {
        name: "Figma",
        proficiency: 80,
        years_experience: 2,
      }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      {
        name: "Leadership",
        proficiency: 90,
        years_experience: 4,
        projects_used: ["EEG President", "IB Mentor"]
      },
      {
        name: "Client Management",
        proficiency: 88,
        years_experience: 2.5,
      },
      {
        name: "Presentation Skills",
        proficiency: 92,
        years_experience: 4,
      },
      {
        name: "Team Collaboration",
        proficiency: 95,
        years_experience: 6,
      },
      {
        name: "Problem Solving",
        proficiency: 95,
        years_experience: 6,
      }
    ]
  }
];

// Career Stats
export const careerMetrics = {
  total_transactions: 5,
  deal_value: 2000000000,  // $2B+
  gpa: 3.95,
  ml_accuracy_improvement: 72,  // percent
  years_experience: 4,
  companies_worked: 6,
  projects_completed: 12
};

export default skillsBreakdown;`
  },
  {
    name: 'blog',
    type: 'folder',
    icon: '📁',
    children: [
      {
        name: 'ai-infrastructure.md',
        type: 'file',
        icon: '📄',
        language: 'markdown',
        content: `# AI Infrastructure Software: The Next Wave of Enterprise Value Creation

*December 15, 2024 • 8 min read*

The AI application layer has captured headlines, but savvy investors are increasingly focused on the infrastructure layer—the picks and shovels of the AI gold rush.

## The Shift to Infrastructure

After observing deal flow at Goldman Sachs and Guggenheim Partners, a clear pattern emerges: while AI applications are exciting, the real sustainable value lies in the infrastructure enabling them.

**Key trends:**
- Vector databases seeing explosive growth
- Model serving and orchestration platforms gaining traction
- Data pipeline tools becoming mission-critical

## Why Enterprise Incumbents Win

Unlike consumer AI, enterprise infrastructure rewards:

1. **Trust & Compliance**: Established vendor relationships matter
2. **Integration Complexity**: Switching costs are prohibitive  
3. **Support Infrastructure**: 24/7 support for mission-critical systems

Companies like Databricks (my team's Series L deal) exemplify this - they're not just building new technology, they're becoming the data layer for AI.

## Investment Implications

For growth equity and late-stage VC:
- Look for revenue retention >130%
- Focus on net new ARR growth
- Evaluate multiproduct attach rates

The infrastructure layer offers better unit economics and more predictable growth than the application layer—exactly what institutional investors want to see.`
      },
      {
        name: 'structured-equity.md',
        type: 'file',
        icon: '📄',
        language: 'markdown',
        content: `# Structured Equity vs. Term Loan Financing: A Practical Guide

*November 28, 2024 • 6 min read*

Having worked on both SingleStore's growth buyout and Sonar's term loan financing, I've seen firsthand how capital structure decisions can make or break value creation.

## The Landscape

Late-stage companies have more financing options than ever:
- Traditional term loans
- Structured equity (preferred + warrants)
- Growth debt with revenue-based features
- Convertible instruments

## When to Use Each

**Term Loans** (like Ping Identity's TLB refinancing):
- Predictable cash flows
- Mature business model
- Lower cost of capital
- No equity dilution

**Structured Equity** (like Scale Computing's merger):
- High growth but unpredictable
- Need flexibility in covenants
- Investors want upside exposure
- Bridge to next equity round

## The Devil's in the Details

Critical terms to negotiate:
1. **Amortization schedule**: Straight-line vs. back-loaded
2. **Covenant package**: EBITDA vs. revenue-based
3. **Warrants**: Strike price and dilution impact
4. **Prepayment penalties**: Make-whole vs. fixed percentage

## Real-World Example

On the Scale Computing deal, we modeled multiple scenarios showing how structured equity actually minimized founder dilution vs. a traditional equity round, despite the warrant coverage. The key was negotiating a favorable strike price tied to the next round.

Understanding these instruments is crucial for anyone in growth-stage tech finance.`
      },
      {
        name: 'ml-sales.md',
        type: 'file',
        icon: '📄',
        language: 'markdown',
        content: `# Building ML Models for Sales Performance: Lessons from RillaVoice

*October 12, 2024 • 10 min read*

During my time at RillaVoice (a Bessemer-backed startup), I built an unsupervised topic algorithm for analyzing sales conversations. Here's how I achieved a 72% improvement in accuracy.

## The Challenge

Sales conversations are messy:
- Multiple languages and accents
- Small, imbalanced datasets
- Domain-specific terminology
- Real-time processing requirements

Traditional topic modeling (LDA, LSA) failed because they rely on large, clean datasets.

## The Solution Stack

I combined multiple NLP techniques:

**1. BERT Embeddings**
- Contextual word representations
- Better handling of sales jargon
- Transfer learning from large corpora

**2. Dialogue Act Tagging**
- Distinguish questions from statements
- Identify objection handling
- Track conversation flow

**3. Part-of-Speech Filtering**
- Focus on nouns and verbs
- Remove filler words dynamically
- Preserve domain terms

**4. Topic Coherence Measures**
- C_v score for evaluation
- Automated hyperparameter tuning
- A/B testing different approaches

## Results & Impact

The improved model:
- Processed Pepsi and Verizon sales calls
- Generated custom performance suggestions
- Ranked salesperson performance automatically
- Scaled to multiple languages

## Key Takeaways

1. **Domain expertise matters**: Understanding sales conversations was more valuable than ML theory
2. **Start simple**: Baseline models help you understand the problem
3. **Iterate quickly**: Small improvements compound
4. **Business impact > Academic metrics**: Focus on what drives value

This project taught me that the best technical solutions come from deep understanding of the business problem.`
      }
    ]
  },
  {
    name: 'contact.yaml',
    type: 'file',
    icon: '📄',
    language: 'yaml',
    content: `# Contact Information
# Get in touch for opportunities, collaborations, or just to chat

personal:
  name: Pranav Kanchi
  title: Investment Banking Analyst
  company: Goldman Sachs
  location: San Francisco, CA

contact:
  email: pranavkanchi23@gmail.com
  phone: "+1 (949) 381-8482"
  address: "150 Van Ness, Apartment 902, San Francisco, CA, 94102"

social:
  linkedin: "https://www.linkedin.com/in/pranavkanchi"
  github: "https://github.com/pranavkanchi"

interests:
  - Investment Banking
  - Technology M&A
  - AI/ML Applications
  - Enterprise Software
  - Venture Capital
  - Full-Stack Development

availability:
  status: open_to_opportunities
  preferred_roles:
    - "Private Equity - Technology"
    - "Venture Capital - Technical roles"
    - "Growth Equity"
    - "Corporate Development - Tech companies"
  
  also_interested_in:
    - Advisory roles
    - Technical consulting
    - Guest speaking
    - Mentorship

message: |
  I'm always interested in discussing:
  - Investment banking and M&A
  - Technology trends and software markets
  - Machine learning applications
  - Career advice for finance + tech backgrounds
  
  Feel free to reach out via email or LinkedIn!`
  }
];

export default fileSystem;
