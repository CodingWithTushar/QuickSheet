import { isDev } from "./helpers";

export const PricingPlans = [
  {
    id: "Basic",
    name: "Basic",
    paragraph: "Perfect for Beginners",
    price: 70,
    feature: [
      "5 PDF Uploads",
      "Standard Processing Speed ",
      "Email Support",
      "Simple & Intuitive Interface",
    ],
    paymentLink: isDev ? "https://rzp.io/rzp/4XTOulG" : "",
    priceId: isDev ? "plink_QVXZyNlz7mQGb3" : "",
  },
  {
    id: "Pro",
    name: "Pro",
    paragraph: "Perfect for Personal",
    price: 130,
    feature: [
      "30 PDF Uploads",
      "Priority Processing",
      "Dedicated Support (24/7)",
      "Easy Markdown Export",
    ],
    paymentLink: isDev ? "https://rzp.io/rzp/7JYksUU" : "",
    priceId: isDev ? "plink_QVXaJSTYa6DQ2G" : "",
  },
  {
    id: "Premium",
    name: "Premium",
    paragraph: "Perfect for Enterprise",
    price: 190,
    feature: [
      "Unlimited PDF Uploads",
      "Limitless Data Processing",
      "24/7 Priority Support",
      "One-Click Markdown Exports",
    ],
    paymentLink: isDev ? "https://rzp.io/rzp/GXpQJMK" : "",
    priceId: isDev ? "plink_QVXab184lEIZJ3" : "",
  },
];

export const ContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
export const ItemsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.9,
    },
  },
};

export const ButtonVariants = {
  scale: 1.25,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export const ListVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 100,
  },
};
