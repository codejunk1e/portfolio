export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Grey Finance",
    year: 2025,
    description: "Fintech",
    url: "https://play.google.com/store/apps/details?id=co.grey.mobile.android&hl=en&pli=1",
  },
  {
    title: "JustEase",
    year: 2023,
    description: "Lawtech",
    url: "https://play.google.com/store/apps/details?id=com.lawpavilion.lr&hl=en",
  },
];
