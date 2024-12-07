import { SessionList } from "../models/ui-model";

export const CATEGORIES: {
  name: string;
  title: string;
  value: string;
}[] = [
  {
    name: 'Finance Professional',
    title:
      'General finance professional with a broad understanding of financial concepts and practices.',
    value: 'general',
  },
  {
    name: 'Audit Assurance Specialist',
    value: 'audit_assurance_specialist',
    title:
      'Provides assurance on the accuracy and reliability of financial information. Conducts audits, reviews financial statements, and ensures compliance with auditing standards.',
  },
  {
    name: 'Audit Planner',
    value: 'audit_planner',
    title:
      'Develops audit plans and schedules. Coordinates audit activities, ensures resources are allocated effectively, and monitors audit progress.',
  },
  {
    name: 'Auditor',
    value: 'auditor',
    title:
      'Conducts audits to ensure accuracy and compliance with financial regulations. Reviews financial statements, assesses internal controls, and provides recommendations for improvements.',
  },
  {
    name: 'Bank Credit Investigator',
    value: 'bank_credit_investigator',
    title:
      'Investigates the creditworthiness of loan applicants. Reviews financial statements, conducts background checks, and provides recommendations for loan approval.',
  },
  {
    name: 'Bank Relationship Manager',
    value: 'bank_relationship_manager',
    title:
      'Manages relationships with banking clients. Provides financial advice, offers banking products and services, and ensures client satisfaction.',
  },
  {
    name: 'Chief Financial Officer',
    value: 'chief_financial_officer',
    title:
      'Oversees the financial operations of an organization. Manages financial planning, budgeting, and reporting, and ensures financial stability and compliance.',
  },
  {
    name: 'Chief Investment Officer',
    value: 'chief_investment_officer',
    title:
      'Oversees the investment strategy and portfolio management of an organization. Develops investment policies, manages investment teams, and ensures alignment with financial goals.',
  },
  {
    name: 'Chief Risk Officer',
    value: 'chief_risk_officer',
    title:
      'Manages the risk management framework of an organization. Identifies potential risks, develops risk mitigation strategies, and ensures compliance with regulatory requirements.',
  },
  {
    name: 'Credit Analyst',
    value: 'credit_analyst',
    title:
      'Assesses the creditworthiness of individuals and organizations. Reviews financial statements, evaluates credit risk, and provides recommendations for credit approval or denial.',
  },
  {
    name: 'Equity Analyst',
    value: 'equity_analyst',
    title:
      'Analyzes financial data and trends to provide investment recommendations. Evaluates company performance, conducts market research, and prepares reports to guide investment decisions.',
  },
  {
    name: 'Forensic Auditor',
    title:
      'Investigates financial discrepancies and fraud. Examines financial records, conducts interviews, and prepares reports to support legal proceedings.',
    value: 'forensic_auditor',
  },
  {
    name: 'Fraud Investigator',
    title:
      'Investigates suspected fraud and financial crimes. Collects evidence, conducts interviews, and prepares reports to support legal proceedings.',
    value: 'fraud_investigator',
  },
  {
    name: 'Internal Auditor',
    title:
      'Evaluates the effectiveness of internal controls and processes. Conducts audits, identifies areas for improvement, and provides recommendations to enhance operational efficiency.',
    value: 'internal_auditor',
  },
  {
    name: 'Portfolio Manager',
    title:
      'Manages investment portfolios to achieve financial objectives. Develops investment strategies, monitors market trends, and makes investment decisions to optimize portfolio performance.',
    value: 'portfolio_manager',
  },
  {
    name: 'Regulator',
    title:
      'Ensures compliance with financial regulations and standards. Reviews financial practices, enforces regulatory requirements, and provides guidance to organizations.',
    value: 'regulator',
  },
  {
    name: 'Risk Analyst',
    value: 'risk_analyst',
    title:
      'Identifies and evaluates potential risks to an organization. Analyzes financial data, assesses risk exposure, and develops strategies to mitigate risks.',
  },
];

export const _sessionListMock: SessionList[] = [
    {
      date: 'Today',
      sessions: [
        {
          id: '1',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: '2',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: '3',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: '4',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: '5',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
      ],
    },
    {
      date: 'Yesterday',
      sessions: [
        {
          id: 'Yesterday-1',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-2',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-3',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-4',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-5',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
      ],
    },
    {
      date: 'Yesterday',
      sessions: [
        {
          id: 'Yesterday-11',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-21',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-31',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-41',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
        {
          id: 'Yesterday-51',
          title: 'New Session',
          time: '2024-12-05 12:05:59',
        },
      ],
    },
  ];