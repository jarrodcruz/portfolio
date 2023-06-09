interface projectDataProps {
  id: number;
  title: string;
  description: string;
  link: string;
}

export const projectData: projectDataProps[] = [
  {
    id: 1,
    title: "Java Swing Snake",
    description:
      "First ever project in java, utilizes OOP and basic collision checks to create a snake game. GUI built with java swing",
    link: "https://github.com/jarrodcruz/JavaSwingSnake",
  },
  {
    id:2,
    title:"Covid-19 EDA",
    description:
    "Exploratory data analysis of covid-19",
    link: "https://github.com/jarrodcruz/covid19-EDA",
  },
  {
    id:3,
    title:"StockX Sneaker Data Analysis",
    description: "Data analysis of StockX sales",
    link: "https://github.com/jarrodcruz/StockX-Sneaker-Data-Analysis",
  }
];
