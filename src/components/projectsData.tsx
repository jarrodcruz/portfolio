interface projectDataProps {
  id: number;
  title: string;
  description: string;
  link: string;
}

export const projectData: projectDataProps[] = [
  {
    id: 1,
    title: "Stock Trend Prediction with Sentiment Analysis",
    description:
      "Interactive python application that scrapes social media posts for a user-defined stock. The posts are then fed into the VADER NLP model, and a sentiment score is derived. A machine Learning trading strategy determines the action (buy/sell/hold) based on the daily sentiment score and stock price data.The strategy is backtested, and results are displayed in a dashboar displaying performance (ROI, Sharpe ration, max drawdown). Users are able to define different thresholds for the model, and can compare resutls in the dashboard.",
    link: "",
  },
  {
    id: 2,
    title: "Customer Trends Predictive Analysis",
    description:
      "Python notebook that displays customer trends using machine learning and data science. Performed data preprocessing, EDA, PCA, and clustering to prepare and analyze customer data. Applied feature engineering and optimization to improve model performance. Evaluated and visualized neural network architecture performance for customer churn of an online retailer.",
    link: "",
  },
  {
    id: 3,
    title: "StockX Sneaker Data Analysis",
    description:
      "School project on data analysis of StockX sales. Created multiple charts and visualizations using R and plotly.",
    link: "https://github.com/jarrodcruz/StockX-Sneaker-Data-Analysis",
  },
  {
    id: 4,
    title: "Small Compiler",
    description:
      "Simple compiler in c++ that allows for parsing, lexical analysis, and validation",
    link: "",
  },
  {
    id: 5,
    title: "Used Cars",
    description:
      "Implementation of various machine learning models and techniques, and explores their effects on used car sale predictions.",
    link: "https://github.com/jarrodcruz/used-cars",
  },
  {
    id: 6,
    title: "Covid-19 EDA",
    description:
      "School project on an exploratory data analysis of covid-19. Created meaningful charts and graphs to assist in understanding of data",
    link: "https://github.com/jarrodcruz/covid19-EDA",
  },
  {
    id: 7,
    title: "Java Swing Snake",
    description:
      "First ever project in java, utilizes OOP and basic collision checks to create a snake game. GUI built with java swing.",
    link: "https://github.com/jarrodcruz/JavaSwingSnake",
  },
  {
    id: 8,
    title: "Workout Application",
    description:
      "Personal MERN stack project that allows for CRUD functions. Allows for users to sign in and fetch their workouts.",
    link: "https://github.com/jarrodcruz/workoutapp",
  },
];
