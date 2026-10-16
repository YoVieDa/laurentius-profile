const projects = [
  {
    id: 1,
    projectName: "Project A",
    projectClient: "Client A",
    projectDescription: "Deskripsi Project A",
    projectCategory: "Graphic",
    projectDate: "04.2026",
    projectCredit: "Brand Strategy by Owen Laurent, UX Optimization by Felix Monroe, Content Consulting by Freya Calder",
    imageTitlePath: "/Project/Project%20A1.png",
    imagePath: [
        "/Project/Project%20A1.png",
        "/Project/Project%20A1.png",
      ],
    url: ""
  },
  {
    id: 2,
    projectName: "Project B",
    projectClient: "Client B",
    projectDescription: "Deskripsi Project B",
    projectCategory: "Art",
    projectDate: "05.2026",
    projectCredit: "Brand Strategy by Owen Laurent, UX Optimization by Felix Monroe, Content Consulting by Freya Calder",
    imageTitlePath: "/Project/Project%20A1.png",
    imagePath: [
        "/Project/Project%20A1.png",
        "/Project/Project%20A1.png",
      ],
    url: ""
  },
  {
    id: 3,
    projectName: "Project C",
    projectClient: "Client C",
    projectDescription: "Deskripsi Project C",
    projectCategory: "Interior",
    projectDate: "05.2025",
    projectCredit: "Brand Strategy by Owen Laurent, UX Optimization by Felix Monroe, Content Consulting by Freya Calder",
    imageTitlePath: "/Project/Project%20A1.png",
    imagePath: [
        "/Project/Project%20A1.png",
        "/Project/Project%20A1.png",
      ],
    url: ""
  },
  {
    id: 4,
    projectName: "Project D",
    projectClient: "Client D",
    projectDescription: "Deskripsi Project D",
    projectCategory: "Interior, Art",
    projectDate: "06.2026",
    projectCredit: "Brand Strategy by Owen Laurent, UX Optimization by Felix Monroe, Content Consulting by Freya Calder",
    imageTitlePath: "/Project/Project%20A1.png",
    imagePath: [
        "/Project/Project%20A1.png",
        "/Project/Project%20A1.png",
      ],
    url: ""
  },
];

export default projects.sort((a, b) => a.id - b.id);