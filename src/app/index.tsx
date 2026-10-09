const materials = [
  {
    id: "1",
    title: "React Native Dasar",
    course: "Pemrograman Mobile",
    studied: true,
  },
  {
    id: "2",
    title: "Database Normalization",
    course: "Basis Data",
    studied: false,
  },
  {
    id: "3",
    title: "Introduction to AI",
    course: "Kecerdasan Buatan",
    studied: false,
  },
];

const countStudiedMaterials = (data) =>
  data.filter((item) => item.studied).length;
