
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

export interface Loan {
  id: string;
  borrowerId: string;
  type: LoanType;
  amount: number;
  interestRate: number;
  tenureMonths: number;
  status: LoanStatus;
  appliedAt: string;
  virtualAccount: string;
  outstandingBalance: number;
  nextRepaymentDate?: string;
}
