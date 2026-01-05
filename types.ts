
export enum LoanType {
  MORTGAGE = 'Mortgage',
  PERSONAL = 'Personal',
  BUSINESS = 'Business'
}

export enum LoanStatus {
  DRAFT = 'Draft',
  PENDING_REVIEW = 'Pending Review',
  ACCEPTED = 'Accepted',
  DECLINED = 'Declined',
  ACTIVE = 'Active',
  DUE = 'Due',
  OVERDUE = 'Overdue',
  ENDED = 'Ended'
}

export enum UserRole {
  BORROWER = 'Borrower',
  GUARANTOR = 'Guarantor',
  INVESTOR = 'Investor',
  UNDERWRITER = 'Underwriter',
  FINANCE = 'Finance'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Loan {
  id: string;
  borrowerId: string;
  type: LoanType;
  amount: number;
  interestRate: number;
  tenureMonths: number;
  status: LoanStatus;
  appliedAt: string;
  approvedAt?: string;
  virtualAccount: string;
  nextRepaymentDate?: string;
  outstandingBalance: number;
}

export interface Transaction {
  id: string;
  loanId: string;
  amount: number;
  type: 'DISBURSEMENT' | 'REPAYMENT' | 'FEE';
  date: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  reference: string;
}

export interface DashboardStats {
  totalIssued: number;
  activeExposure: number;
  overdueCount: number;
  pendingApplications: number;
}
