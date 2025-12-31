// Blog post data
// This can be replaced with a CMS or MDX later

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'ai-infrastructure-software-trends-2024',
        title: 'AI Infrastructure Software: The Next Wave of Enterprise Value Creation',
        date: '2024-12-15',
        excerpt: 'Analyzing the shift from AI application layer to infrastructure investments, and why enterprise software incumbents are best positioned to capture value.',
        readTime: '8 min',
        tags: ['AI', 'Enterprise Software', 'Investment Banking'],
        content: `
# AI Infrastructure Software: The Next Wave of Enterprise Value Creation

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

Companies like Databricks (my team's Series L deal) exemplify this - they're not just building new technology, they're becoming the data platform layer for AI.

## Investment Implications

For growth equity and late-stage VC:
- Look for revenue retention >130%
- Focus on net new ARR growth
- Evaluate multiproduct attach rates

The infrastructure layer offers better unit economics and more predictable growth than the application layer—exactly what institutional investors want to see.
    `,
    },
    {
        slug: 'structured-equity-term-loan-financing',
        title: 'Structured Equity vs. Term Loan Financing: A Practical Guide',
        date: '2024-11-28',
        excerpt: 'Breaking down the trade-offs between growth debt, structured equity, and traditional term loans for late-stage startups.',
        readTime: '6 min',
        tags: ['Corporate Finance', 'Debt Financing', 'Startups'],
        content: `
# Structured Equity vs. Term Loan Financing: A Practical Guide

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

Understanding these instruments is crucial for anyone in growth-stage tech finance.
    `,
    },
    {
        slug: 'machine-learning-sales-analytics',
        title: 'Building ML Models for Sales Performance: Lessons from RillaVoice',
        date: '2024-10-12',
        excerpt: 'How I improved unsupervised topic modeling accuracy by 72% using BERT, dialogue act tagging, and domain-specific features.',
        readTime: '10 min',
        tags: ['Machine Learning', 'NLP', 'Startups'],
        content: `
# Building ML Models for Sales Performance: Lessons from RillaVoice

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

This project taught me that the best technical solutions come from deep understanding of the business problem.
    `,
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
