export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  image: string;
  target?: '_blank' | '_self';
}

export const projects: Project[] = [
  {
    title: "Grey Finance",
    year: 2025,
    description: "Fintech",
    url: "https://play.google.com/store/apps/details?id=co.grey.mobile.android&hl=en&pli=1",
    image: "https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/6563c15e45db91a91be06021_card%203%20Img.svg",
    target: "_self"
  },
  {
    title: "JustEase",
    year: 2023,
    description: "Lawtech",
    url: "https://play.google.com/store/apps/details?id=com.lawpavilion.lr&hl=en",
    image: "https://lawrights.lawpavilion.com/images/phone.png",
    target: "_self"
  },
];

export const personalProjects: Project[] = [
  {
    title: "Star Wars",
    year: 2025,
    description: "[ 🚧 Work in progress ]",
    url: "https://github.com/codejunk1e/StarWars",
    image: "https://raw.githubusercontent.com/codejunk1e/StarWars/refs/heads/master/images/collapsing_menu.png",
    target: "_self"
  },
];
