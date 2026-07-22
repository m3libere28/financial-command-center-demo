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
      "Can we afford another vacation?": "Yes—within the current plan, the Morgans can allocate up to $4,200 for an additional trip without reducing the emergency reserve or delaying the Portugal goal. The strongest option is using $2,080 of this month's unassigned cash and saving the balance over the next two months.",
      "How close are we to retiring at 55?": "You are currently 29.6% funded toward the $1.8M financial-independence target. At the present contribution rate, the plan remains on track, with a projected range of $1.82M–$2.04M by age 55.",
      "What changed this month?": "Net worth increased by $18,740. Investments contributed $14,900 of that growth, while household spending finished $620 below plan. The largest new decision is whether to raise the Portugal transfer by $420 per month.",
      "Review our Portugal relocation plan": "The relocation fund is 58% complete. Keeping the current transfer creates an estimated $9,800 shortfall by 2029. Raising the monthly contribution from $1,040 to $1,460 closes the gap without affecting the tax reserve."
    }
  }
});