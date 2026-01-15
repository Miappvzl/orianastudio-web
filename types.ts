export interface ServiceItem {
  id: number;
  title: string;
  price: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string; // Used for anchor tags in the live site
}

export enum ViewMode {
  PROPOSAL = 'PROPOSAL',
  LIVE_SITE = 'LIVE_SITE'
}

export interface ProposalSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}