import type { Topic, Quiz } from './types';

export const topics: Topic[] = [
  {
    id: 'budgeting',
    title: 'Budgeting Basics',
    description: 'Learn to manage your money effectively and plan your expenses.',
    longDescription: 'Budgeting is the cornerstone of financial health. It involves creating a detailed plan for how you will spend your money over a specific period. This allows you to track your income, understand your spending habits, save for future goals, and avoid unnecessary debt. A good budget helps you prioritize what\'s important and make conscious decisions about your finances.',
    examples: ['Creating a 50/30/20 budget (50% needs, 30% wants, 20% savings).', 'Using an envelope system for cash expenses.', 'Setting up automatic transfers to a savings account on payday.'],
    tips: ['Be realistic: Don\'t set overly restrictive goals you can\'t stick to.', 'Review regularly: Adjust your budget as your income or expenses change.', 'Track everything: Small expenses add up, so note them down.', 'Celebrate milestones: Reward yourself (within budget!) for achieving savings goals.'],
    iconName: 'PiggyBank',
    color: 'text-green-500',
  },
  {
    id: 'student-loans',
    title: 'Student Loans',
    description: 'Understand how student loans work for higher education.',
    longDescription: 'Student loans are a common way to finance higher education. They are funds borrowed from government or private lenders that must be repaid with interest. Understanding terms like principal, interest rate, loan term, and repayment options is crucial. Different loans have different conditions, so it\'s important to research thoroughly before borrowing.',
    examples: ['Government-subsidized loans vs. private bank loans.', 'Fixed interest rates vs. variable interest rates.', 'Income-driven repayment plans.'],
    tips: ['Borrow only what you need: Don\'t take out more than necessary for tuition and essential expenses.', 'Understand the terms: Read the fine print regarding interest rates, fees, and repayment schedules.', 'Explore scholarships and grants first: These don\'t need to be repaid.', 'Make payments on time: Late payments can negatively impact your credit score.'],
    iconName: 'School',
    color: 'text-blue-500',
  },
  {
    id: 'interest-rates',
    title: 'Interest Rates',
    description: 'Grasp the concept of interest and how it affects you.',
    longDescription: 'Interest is essentially the cost of borrowing money or the reward for saving/investing it. When you take a loan, you pay interest to the lender. When you deposit money in a savings account or invest, you earn interest. Understanding simple vs. compound interest is key, as compound interest can significantly grow your savings or increase your debt over time.',
    examples: ['Interest earned on a savings account.', 'Interest paid on a credit card balance.', 'The difference between simple and compound interest on a loan.'],
    tips: ['For savings: Look for accounts with higher compound interest rates.', 'For loans: Aim for the lowest possible interest rate and understand how it\'s calculated.', 'Compound interest is powerful: Start saving early to maximize its benefits.', 'Beware of high-interest debt: Credit cards can have very high rates if balances aren\'t paid off.'],
    iconName: 'TrendingUp',
    color: 'text-red-500',
  },
  {
    id: 'etfs',
    title: 'ETFs Explained',
    description: 'Discover Exchange-Traded Funds for diversified investing.',
    longDescription: 'Exchange-Traded Funds (ETFs) are investment funds that are traded on stock exchanges, much like individual stocks. They typically track a specific index, sector, commodity, or other asset. ETFs offer diversification because they hold a basket of underlying assets. They are generally known for lower expense ratios compared to traditional mutual funds and offer trading flexibility.',
    examples: ['An ETF tracking the Nifty 50 index.', 'A sector-specific ETF for technology companies.', 'A gold ETF that tracks the price of gold.'],
    tips: ['Understand what the ETF tracks: Know the underlying assets and index.', 'Check the expense ratio: Lower is generally better.', 'Consider your investment goals: Choose ETFs that align with your risk tolerance and objectives.', 'Diversification: ETFs can be a good way to diversify, but don\'t put all your eggs in one ETF basket.'],
    iconName: 'Landmark',
    color: 'text-purple-500',
  },
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    description: 'Learn about investing in a pool of assets managed by professionals.',
    longDescription: 'A mutual fund pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers. Mutual funds offer a way for individual investors to access a diversified portfolio with a relatively small investment. They come in various types, like equity funds, debt funds, and hybrid funds, each with different risk-return profiles.',
    examples: ['Equity Linked Savings Scheme (ELSS) for tax saving.', 'A large-cap equity fund investing in big companies.', 'A debt fund investing in government bonds.'],
    tips: ['Research the fund manager\'s track record.', 'Understand the fund\'s investment objective and risk level.', 'Pay attention to the expense ratio and any exit loads.', 'Consider Systematic Investment Plans (SIPs) for regular investing.'],
    iconName: 'FileText',
    color: 'text-yellow-600', // Darker yellow for better contrast
  },
  {
    id: 'money-management',
    title: 'Money Management',
    description: 'Essential skills for handling your finances wisely.',
    longDescription: 'Effective money management encompasses a range of skills and habits including budgeting, saving, investing, spending wisely, and managing debt. It\'s about making informed financial decisions to achieve your short-term and long-term financial goals, whether it\'s buying a gadget, funding education, or planning for retirement. Good money management leads to financial stability and freedom.',
    examples: ['Setting SMART financial goals (Specific, Measurable, Achievable, Relevant, Time-bound).', 'Distinguishing between needs and wants.', 'Building an emergency fund.'],
    tips: ['Educate yourself continuously about personal finance.', 'Automate your savings and investments.', 'Avoid impulsive spending.', 'Regularly review your financial health and goals.'],
    iconName: 'Wallet',
    color: 'text-indigo-500',
  }
];

export const quizzes: Quiz[] = [
  {
    topicId: 'budgeting',
    questions: [
      {
        id: 'b_q1',
        questionText: 'What is the primary purpose of a budget?',
        options: ['To restrict all spending', 'To track past spending only', 'To plan and control future income and expenses', 'To increase your income'],
        correctAnswer: 'To plan and control future income and expenses',
        explanation: 'A budget is a forward-looking plan that helps you manage your money proactively.'
      },
      {
        id: 'b_q2',
        questionText: 'Which of these is a "need" in a typical budget?',
        options: ['Latest smartphone', 'Groceries', 'Daily coffee from a cafe', 'Movie tickets'],
        correctAnswer: 'Groceries',
        explanation: 'Needs are essential expenses required for living, like food, shelter, and basic clothing.'
      },
      {
        id: 'b_q3',
        questionText: 'The 50/30/20 rule suggests allocating 20% of your income to:',
        options: ['Wants', 'Needs', 'Savings and debt repayment', 'Entertainment'],
        correctAnswer: 'Savings and debt repayment',
        explanation: 'This popular budgeting guideline suggests 50% for needs, 30% for wants, and 20% for financial goals like saving or paying off debt.'
      },
    ],
  },
  {
    topicId: 'student-loans',
    questions: [
      {
        id: 'sl_q1',
        questionText: 'What is the "principal" amount of a loan?',
        options: ['The interest rate charged', 'The initial amount of money borrowed', 'The monthly payment amount', 'The total amount repaid over the loan term'],
        correctAnswer: 'The initial amount of money borrowed',
        explanation: 'The principal is the original sum of money borrowed before any interest is added.'
      },
      {
        id: 'sl_q2',
        questionText: 'Which type of student loan typically offers more favorable terms like lower interest rates or income-driven repayment options?',
        options: ['Private bank loans', 'Credit card cash advances', 'Government-backed student loans', 'Payday loans'],
        correctAnswer: 'Government-backed student loans',
        explanation: 'Government loans often have borrower protections and benefits not always available with private loans.'
      },
    ],
  },
  {
    topicId: 'interest-rates',
    questions: [
      {
        id: 'ir_q1',
        questionText: 'What is compound interest?',
        options: ['Interest calculated only on the principal amount', 'A one-time fee for taking out a loan', 'Interest calculated on the initial principal and also on the accumulated interest', 'Interest that is paid monthly'],
        correctAnswer: 'Interest calculated on the initial principal and also on the accumulated interest',
        explanation: 'Compound interest allows your savings to grow faster, or your debt to increase more rapidly if not managed.'
      },
    ],
  },
  // Quizzes for ETFs, Mutual Funds, Money Management will be similar structure
  // For brevity, not adding all questions here.
];
