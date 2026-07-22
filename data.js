window.DEMO_DATA = Object.freeze({
  meta: {
    mode: "demo",
    fictional: true,
    edition: "Global Household Edition",
    lastUpdated: "July 2026"
  },
  household: {
    name: "Morgan Household",
    primaryName: "Alex",
    partnerName: "Taylor",
    location: "Boulder, Colorado",
    members: 4,
    headline: "Your household is financially healthy and on track for retirement at 55."
  },
  summary: {
    financialHealth: 91,
    healthLabel: "Excellent",
    netWorth: 684320,
    monthlyIncome: 15500,
    monthlySpending: 8735,
    monthlySurplus: 6765,
    savingsRate: 43.6,
    runwayMonths: 8.4,
    taxReserve: 18400,
    investments: 532480,
    investmentChange: 2.8
  },
  accounts: [
    { name: "Household Checking", type: "Cash", balance: 18740 },
    { name: "High-Yield Reserve", type: "Cash", balance: 73360 },
    { name: "Joint Brokerage", type: "Investment", balance: 246800 },
    { name: "Alex 401(k)", type: "Retirement", balance: 178420 },
    { name: "Taylor IRA", type: "Retirement", balance: 107260 }
  ],
  goals: [
    { id: "portugal", name: "Portugal Relocation", target: 120000, current: 69600, due: "2029", icon: "✦" },
    { id: "japan", name: "Japan Family Trip", target: 18000, current: 16380, due: "Spring 2027", icon: "◌" },
    { id: "college", name: "College Funds", target: 160000, current: 78400, due: "2036", icon: "◇" },
    { id: "fire", name: "Financial Independence", target: 1800000, current: 532480, due: "Age 55", icon: "△" }
  ],
  flow: [
    { label: "Income", value: 15500 },
    { label: "Essentials", value: 5230 },
    { label: "Lifestyle", value: 2465 },
    { label: "Goals", value: 1040 },
    { label: "Invested", value: 4685 },
    { label: "Unassigned", value: 2080 }
  ],
  allocation: [
    { label: "U.S. Equities", value: 54, amount: 287539 },
    { label: "International", value: 20, amount: 106496 },
    { label: "Bonds", value: 16, amount: 85197 },
    { label: "Cash", value: 10, amount: 53248 }
  ],
  investments: {
    annualReturn: 11.8,
    benchmarkReturn: 10.6,
    fees: 0.14,
    riskLevel: "Balanced growth",
    projected55Low: 1820000,
    projected55High: 2040000,
    contributionMonthly: 4685,
    history: [412000, 426500, 438900, 451300, 467800, 474600, 489100, 501200, 517580, 532480],
    notes: [
      "Portfolio remains within 2% of its target allocation.",
      "International exposure supports the planned euro-based transition.",
      "No rebalance is required this month."
    ]
  },
  transition: {
    destination: "Portugal",
    targetDate: "September 2029",
    readinessScore: 72,
    fundTarget: 120000,
    fundCurrent: 69600,
    monthlyTransfer: 1040,
    recommendedTransfer: 1460,
    estimatedShortfall: 9800,
    currencies: [
      { code: "USD", label: "U.S. dollar", share: 88 },
      { code: "EUR", label: "Euro", share: 12 }
    ],
    milestones: [
      { label: "Destination research", status: "complete", date: "Complete" },
      { label: "Relocation reserve at 60%", status: "active", date: "Aug 2026" },
      { label: "Tax residency consultation", status: "upcoming", date: "Jan 2027" },
      { label: "School and housing shortlist", status: "upcoming", date: "Sep 2027" },
      { label: "Visa strategy confirmed", status: "upcoming", date: "Mar 2028" }
    ],
    risks: [
      { label: "Funding pace", level: "Attention", note: "Increase monthly transfer by $420." },
      { label: "Currency exposure", level: "Healthy", note: "Begin gradual EUR allocation in 2027." },
      { label: "Tax planning", level: "Planned", note: "Consultation scheduled before residency decision." }
    ]
  },
  insights: [
    { type: "positive", title: "Reserve is fully funded", body: "Your emergency reserve covers 8.4 months of core expenses." },
    { type: "positive", title: "Savings accelerated", body: "You saved $1,180 more than your six-month average." },
    { type: "attention", title: "Portugal goal needs a decision", body: "Increasing the monthly transfer by $420 keeps the 2029 timeline intact." }
  ],
  copilot: {
    prompts: [
      "Can we afford another vacation?",
      "How close are we to retiring at 55?",
      "What changed this month?",
      "Review our Portugal relocation plan"
    ],
    answers: {
      "Can we afford another vacation?": {
        recommendation: "Yes — allocate up to $4,200 from unassigned cash and short-term savings without disrupting any active goal.",
        why: "The Morgan household carries $2,080 in unassigned monthly cash and a reserve that exceeds the six-month target. A secondary trip does not threaten the emergency buffer or the Portugal fund.",
        changes: "Net worth dips by $4,200 in the month of travel. The reserve remains above the minimum. No goal timelines are affected.",
        watch: "If the Portugal transfer has not yet been increased, prioritize that decision before committing to additional travel spend."
      },
      "How close are we to retiring at 55?": {
        recommendation: "Stay the course. Continue contributing $4,685 per month and avoid early withdrawals from the brokerage account.",
        why: "At the current rate and an 11.8% annualized return, the portfolio is projected to reach $1.82–$2.04M by age 55 — meeting or exceeding the $1.8M independence target.",
        changes: "You are currently 29.6% funded. At this pace, you cross the 50% mark in approximately four years.",
        watch: "A sustained market return below 8% for two or more consecutive years would extend the timeline. Revisit the projection annually."
      },
      "What changed this month?": {
        recommendation: "Capture this month's $620 spending surplus by directing it to the relocation fund.",
        why: "Net worth increased by $18,740 — $14,900 from investment growth and $3,840 from household cash accumulation. Spending finished below plan for the third consecutive month.",
        changes: "Investments grew 2.8%. The emergency reserve is fully funded at 8.4 months. The largest open decision remains the Portugal transfer amount.",
        watch: "The relocation fund is the only area behind plan. Everything else is on or ahead of target."
      },
      "Review our Portugal relocation plan": null
    }
  },
  scenarios: {
    base: {
      readinessScore: 72,
      monthlyTransfer: 1040,
      monthlySurplus: 6765,
      runwayMonths: 8.4,
      insightThird: {
        type: "attention",
        title: "Portugal goal needs a decision",
        body: "Increasing the monthly transfer by $420 keeps the 2029 timeline intact."
      },
      conclusionText: "Alex and Taylor can still reach their goals, but the Portugal timeline remains exposed. Increasing the relocation transfer by $420\u00a0per month brings September\u00a02029 back on track.",
      copilotPortugal: {
        recommendation: "Raise the monthly relocation transfer from $1,040 to $1,460 before the end of this quarter.",
        why: "At the current rate, the relocation fund will reach only $110,200 by September 2029 — a $9,800 shortfall. The extra $420 per month closes that gap exactly on schedule.",
        changes: "Monthly surplus drops from $6,765 to $6,345. Cash runway adjusts from 8.4 to 8.1 months. Relocation readiness score rises from 72% to 88%.",
        watch: "If household expenses rise above plan in any two-month period, revisit the transfer amount to protect the emergency reserve."
      }
    },
    recommended: {
      readinessScore: 88,
      monthlyTransfer: 1460,
      monthlySurplus: 6345,
      runwayMonths: 8.1,
      insightThird: {
        type: "positive",
        title: "Portugal transfer increased",
        body: "The $1,460 monthly transfer keeps September 2029 on track. Surplus adjusts to $6,345."
      },
      conclusionText: "Alex and Taylor can fund the Portugal move, retire at 55, and take the Japan trip without liquidating investments. The increased relocation transfer keeps September\u00a02029 on track.",
      copilotPortugal: {
        recommendation: "Maintain the $1,460 monthly relocation transfer and review again in January 2027.",
        why: "The funding gap is closed. At $1,460 per month the relocation fund reaches $120,000 by August 2029 — one month ahead of target.",
        changes: "Monthly surplus is $6,345. Relocation readiness is 88%. Cash runway holds at 8.1 months — still above the six-month minimum.",
        watch: "Monitor the euro exchange rate quarterly. A shift of more than 8% in EUR/USD may require adjusting the currency allocation earlier than planned."
      }
    }
  }
});