export interface Company {
  id: string;
  name: string;
  location: string;
  openPositions: number;
  logo?: string;
}

export const MOCK_COMPANIES: Company[] = [
  {
    id: "1",
    name: "Google",
    location: "Mountain View, CA",
    openPositions: 142,
  },
  {
    id: "2",
    name: "Microsoft",
    location: "Redmond, WA",
    openPositions: 98,
  },
  {
    id: "3",
    name: "Amazon",
    location: "Seattle, WA",
    openPositions: 215,
  },
  {
    id: "4",
    name: "IBM",
    location: "Armonk, NY",
    openPositions: 64,
  },
  {
    id: "5",
    name: "Adobe",
    location: "San Jose, CA",
    openPositions: 42,
  },
  {
    id: "6",
    name: "Atlassian",
    location: "Sydney, AU",
    openPositions: 56,
  },
];