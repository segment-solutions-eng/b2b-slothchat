const LOGGED_IN_KEY = "loggedIn";

const ACTIONS = [
  {
    title: "Open Account",
    image: "./assets/open-account.jpeg",
    description:
      "Sign up for a new online financial account, provide personal information, and set up login credentials to access financial services.",
    properties: [
      { name: "Property 1", value: "Value 1" },
      { name: "Property 2", value: "Value 2" },
    ],
  },
  {
    title: "Transfer Funds",
    image: "./assets/transfer-funds.jpeg",
    description:
      "Initiate the movement of funds between different financial accounts, whether within the same institution or to external accounts at other banks.",
    properties: [
      { name: "Property 1", value: "Value 1" },
      { name: "Property 2", value: "Value 2" },
      { name: "Property 3", value: true },
    ],
  },
  {
    title: "Purchase Crypto",
    image: "./assets/purchase-crypto.jpeg",
    description:
      "Buy digital currencies like Bitcoin, Ethereum, and more through our secure platform.",
    properties: [{ name: "Property 1", value: "Value 1" }],
  },
  {
    title: "Manage Investments",
    image: "./assets/manage-investments.jpeg",
    description:
      "Buy or sell various types of investments, such as stocks, bonds, or mutual funds, to actively manage or grow your investment portfolio.",
    properties: [
      { name: "Property 1", value: "Value 1" },
      { name: "Property 2", value: "Option 1" },
    ],
  },
  {
    title: "Pay Bills",
    image: "./assets/pay-bills.jpeg",
    description:
      "Make payments for bills, loans, or recurring expenses through your financial account, often with the option to set up automated payments for convenience.",
    properties: [],
  },
  {
    title: "Request Customer Support",
    image: "./assets/customer-support.jpeg",
    description:
      "Contact the customer support to seek assistance with account-related issues, resolve problems, or ask questions regarding products and services.",
    properties: [
      { name: "Property 1", value: "Value 1" },
      { name: "Property 2", value: "Value 2" },
      { name: "Property 3", value: "Value 3" },
    ],
  },
];

const HEADER_NAV_CONFIG = [
  { htmlId: "homeLink", pageName: "Home" },
  { htmlId: "servicesLink", pageName: "Savings" },
  { htmlId: "solutionsLink", pageName: "Investments" },
  { htmlId: "contactLink", pageName: "Crypto" },
];
