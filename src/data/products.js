// Product Data for Kenny's Powerhouse
export const products = [
  {
    id: 1,
    name: "Oraimo AniFast Wall Charger",
    category: "Chargers",
    rating: 4.8,
    image: "/product-1.jpg",
    description: "Compact wall charger for fast daily charging with stable output and heat protection.",
    specs: {
      power: "Up to 18W",
      portType: "USB-A",
      safety: "Over-voltage and over-current protection",
      warranty: "12 months"
    }
  },
  {
    id: 2,
    name: "Oraimo Single Port Travel Charger",
    category: "Chargers",
    rating: 4.7,
    image: "/product-2.jpg",
    description: "Portable travel charger with a durable body built for regular plug-in use.",
    specs: {
      power: "5V/2A",
      portType: "USB-A",
      plugType: "UK 3-pin",
      warranty: "12 months"
    }
  },
  {
    id: 3,
    name: "Oraimo Built-to-Last Cable",
    category: "Charger Cords",
    rating: 4.8,
    image: "/product-3.jpg",
    description: "Flexible braided charger cord designed for steady charging and reliable syncing.",
    specs: {
      connector: "USB-A to Type-C",
      length: "1 meter",
      maxCurrent: "3A",
      warranty: "180 days"
    }
  },
  {
    id: 4,
    name: "Oraimo Ultra Durable Type-C Cord",
    category: "Charger Cords",
    rating: 4.9,
    image: "/product-4.jpg",
    description: "High-speed Type-C charging cord with reinforced braided jacket for longer lifespan.",
    specs: {
      connector: "USB-A to Type-C",
      length: "1 meter",
      maxCurrent: "3A (60W)",
      warranty: "180 days"
    }
  },
  {
    id: 5,
    name: "Oraimo Type-C Braided Cable",
    category: "Charger Cords",
    rating: 4.7,
    image: "/product-5.jpg",
    description: "Durable everyday Type-C cord with fast charging support and tangle-resistant braid.",
    specs: {
      connector: "USB-A to Type-C",
      length: "1 meter",
      maxCurrent: "3A",
      warranty: "180 days"
    }
  },
  {
    id: 6,
    name: "Oraimo SpaceBuds Lite",
    category: "Chargers",
    rating: 4.6,
    image: "/product-6.jpg",
    description: "Wireless earbuds with long play time and a compact charging case for all-day use.",
    specs: {
      batteryLife: "Up to 40 hours",
      fit: "In-ear",
      chargingCase: "USB charging case included",
      warranty: "12 months"
    }
  },
  {
    id: 7,
    name: "Oraimo Highway 15.5W Car Charger",
    category: "Chargers",
    rating: 4.8,
    image: "/product-7.jpg",
    description: "Dual USB car charger built for fast charge performance while driving.",
    specs: {
      power: "15.5W",
      ports: "Dual USB-A",
      useCase: "12V car socket",
      warranty: "12 months"
    }
  },
  {
    id: 8,
    name: "Oraimo Type-C to Lightning Cord",
    category: "Charger Cords",
    rating: 4.7,
    image: "/product-8.jpg",
    description: "Reliable charging cable with reinforced structure and stable transfer performance.",
    specs: {
      connector: "Type-C to Lightning",
      length: "1 meter",
      maxCurrent: "Up to 3A",
      warranty: "180 days"
    }
  }
];

export const categories = [
  { id: 1, name: "Chargers", icon: "CHG" },
  { id: 2, name: "Charger Cords", icon: "CORD" }
];

export const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id, 10));
};

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const filterProducts = (searchTerm, category) => {
  return products.filter((product) => {
    const matchesSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !category || product.category === category;

    return matchesSearch && matchesCategory;
  });
};
