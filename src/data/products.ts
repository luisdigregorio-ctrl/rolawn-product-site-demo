
export interface Product {
  id: string;
  category: string;
  name: string;
  size: string;
  productCode: string;
  netPrice: number | string;
  grossPrice: number | string;
  imageUrl: string;
  description?: string;
}

export const productCategories = [
  "Turf",
  "Topsoil",
  "Soil",
  "Bark & Mulch",
  "Soil Improver & Topdressing",
  "Seed & Feed",
  "Bundle"
];

export const products: Product[] = [
  // Turf Category
  {
    id: "1",
    category: "Turf",
    name: "Medallion Turf",
    size: "10 - 19",
    productCode: "RB000010G",
    netPrice: 9.79,
    grossPrice: 11.75,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/05/ROLAWN-MEDALLION-600x600-1.jpg",
    description: "Our most popular, premium garden lawn turf. Hardwearing and versatile for a beautiful garden."
  },
  {
    id: "2",
    category: "Turf",
    name: "Medallion Turf",
    size: "20 - 29",
    productCode: "RB000010G",
    netPrice: 7.08,
    grossPrice: 8.50,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/05/ROLAWN-MEDALLION-600x600-1.jpg",
    description: "Our most popular, premium garden lawn turf. Hardwearing and versatile for a beautiful garden."
  },
  {
    id: "3",
    category: "Turf",
    name: "Medallion Turf",
    size: "30 - 39",
    productCode: "RB000010G",
    netPrice: 5.50,
    grossPrice: 6.60,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/05/ROLAWN-MEDALLION-600x600-1.jpg",
    description: "Our most popular, premium garden lawn turf. Hardwearing and versatile for a beautiful garden."
  },
  {
    id: "4",
    category: "Turf",
    name: "Medallion Turf",
    size: "40 - 99",
    productCode: "RB000010G",
    netPrice: 5.21,
    grossPrice: 6.25,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/05/ROLAWN-MEDALLION-600x600-1.jpg",
    description: "Our most popular, premium garden lawn turf. Hardwearing and versatile for a beautiful garden."
  },
  {
    id: "5",
    category: "Turf",
    name: "Medallion Turf",
    size: "100+",
    productCode: "RB000010G",
    netPrice: 4.71,
    grossPrice: 5.65,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/05/ROLAWN-MEDALLION-600x600-1.jpg",
    description: "Our most popular, premium garden lawn turf. Hardwearing and versatile for a beautiful garden."
  },
  {
    id: "6",
    category: "Turf",
    name: "BioScapes Biodiverse Turf",
    size: "10 - 19",
    productCode: "BIOTURF1",
    netPrice: 12.49,
    grossPrice: 14.99,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/10/Biodiverse-Turf-main-image-1.png",
    description: "Specially developed to encourage biodiversity with a mix of native wildflowers and grasses."
  },
  {
    id: "7",
    category: "Turf",
    name: "BioScapes Biodiverse Turf",
    size: "20 - 29",
    productCode: "BIOTURF1",
    netPrice: 10.00,
    grossPrice: 12.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/10/Biodiverse-Turf-main-image-1.png",
    description: "Specially developed to encourage biodiversity with a mix of native wildflowers and grasses."
  },
  {
    id: "8",
    category: "Turf",
    name: "BioScapes Biodiverse Turf",
    size: "30 - 39",
    productCode: "BIOTURF1",
    netPrice: 8.33,
    grossPrice: 10.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/10/Biodiverse-Turf-main-image-1.png",
    description: "Specially developed to encourage biodiversity with a mix of native wildflowers and grasses."
  },
  {
    id: "9",
    category: "Turf",
    name: "BioScapes Biodiverse Turf",
    size: "40 - 99",
    productCode: "BIOTURF1",
    netPrice: 7.83,
    grossPrice: 9.40,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/10/Biodiverse-Turf-main-image-1.png",
    description: "Specially developed to encourage biodiversity with a mix of native wildflowers and grasses."
  },
  {
    id: "10",
    category: "Turf",
    name: "BioScapes Biodiverse Turf",
    size: "100+",
    productCode: "BIOTURF1",
    netPrice: 7.49,
    grossPrice: 8.99,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/10/Biodiverse-Turf-main-image-1.png",
    description: "Specially developed to encourage biodiversity with a mix of native wildflowers and grasses."
  },
  {
    id: "11",
    category: "Turf",
    name: "Medallion Turfmaster",
    size: "N/A",
    productCode: "",
    netPrice: "POA",
    grossPrice: "POA",
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/11/13-sq.m-Turfmaster.jpg",
    description: "Professional-grade turf for sports fields and high-traffic areas."
  },
  
  // Topsoil Category
  {
    id: "12",
    category: "Topsoil",
    name: "Turf & Lawn Seeding Topsoil Bulk Bag",
    size: "500l",
    productCode: "ROLTLS500",
    netPrice: 104.17,
    grossPrice: 125.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_TurfLawnSeedingTopsoil_Bulk-1-e1690383538721.jpg",
    description: "Premium topsoil specially blended for turf laying and lawn seeding."
  },
  {
    id: "13",
    category: "Topsoil",
    name: "Vegetable & Fruit Topsoil Bulk Bag",
    size: "500l",
    productCode: "ROLVFT500",
    netPrice: 104.17,
    grossPrice: 125.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_VegetableFruit_Bulk-1.jpg",
    description: "Premium quality topsoil specially developed for growing fruits and vegetables."
  },
  {
    id: "14",
    category: "Topsoil",
    name: "Beds & Borders Topsoil Bulk Bag",
    size: "500l",
    productCode: "ROLBBT500",
    netPrice: 104.17,
    grossPrice: 125.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_BedsBordersTopsoil_Bulk-1.jpg",
    description: "Premium quality topsoil for garden beds and borders."
  },
  
  // Soil Category
  {
    id: "15",
    category: "Soil",
    name: "SuDS Soil Bulk Bag",
    size: "500l",
    productCode: "SOIL500",
    netPrice: "POA",
    grossPrice: "POA",
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2023/01/SuDS-Rain-Garden-Soil-Bulk-Bag-600.png",
    description: "Sustainable drainage system soil for rain gardens and water management solutions."
  },
  {
    id: "16",
    category: "Soil",
    name: "Medallion Seed",
    size: "20kg",
    productCode: "SEED20",
    netPrice: 229.00,
    grossPrice: 229.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/20kg-Medallion-seed.jpg",
    description: "Premium grass seed blend for establishing new lawns or overseeding."
  },
  {
    id: "17",
    category: "Soil",
    name: "GoRight LEF Bag",
    size: "5kg",
    productCode: "FERT05",
    netPrice: 41.67,
    grossPrice: 50.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_Lawn_Establishment_Fertiliser_Bag-1.jpg",
    description: "Specially formulated fertilizer for establishing new lawns."
  },
  
  // Bark & Mulch Category
  {
    id: "18",
    category: "Bark & Mulch",
    name: "Landscaping Bark Bulk Bag",
    size: "500l",
    productCode: "ROLLSB500",
    netPrice: 104.17,
    grossPrice: 125.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_LandscapingBark_Bulk-1.jpg",
    description: "Premium landscaping bark for garden beds and borders."
  },
  {
    id: "19",
    category: "Bark & Mulch",
    name: "Play Grade Bark Bulk Bag",
    size: "500l",
    productCode: "ROLPGB500",
    netPrice: 133.33,
    grossPrice: 160.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2023/10/Rolawn_Play_Grade_Bark_Bulk-600x600-Compressed-100x100.jpg",
    description: "Certified play-grade bark for playgrounds and play areas."
  },
  
  // Soil Improver & Topdressing Category
  {
    id: "20",
    category: "Soil Improver & Topdressing",
    name: "Compost Soil Improver",
    size: "500l",
    productCode: "ROLCSI500",
    netPrice: 87.50,
    grossPrice: 105.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_CompostSoilImprover_Bulk-2.jpg",
    description: "Premium compost for improving soil structure and fertility."
  },
  {
    id: "21",
    category: "Soil Improver & Topdressing",
    name: "Lawn Topdressing Bulk Bag",
    size: "500l",
    productCode: "ROLLTD500",
    netPrice: 140.00,
    grossPrice: 168.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Rolawn_LawnTopdressing_HoodedBulk_Edited.jpg",
    description: "Premium lawn topdressing for maintaining a healthy lawn."
  },
  
  // Seed & Feed Category
  {
    id: "22",
    category: "Seed & Feed",
    name: "Medallion Lawn Seed",
    size: "1kg",
    productCode: "ROLMSD1KG",
    netPrice: 37.50,
    grossPrice: 37.50,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2022/07/Medallion-lawn-seed-with-garden-backdrop.jpg",
    description: "Premium grass seed blend for establishing new lawns or overseeding."
  },
  
  // Bundle Category
  {
    id: "23",
    category: "Bundle",
    name: "Medallion Turf & TLST Bundle",
    size: "10m2/500L",
    productCode: "TLS500LP10",
    netPrice: 145.83,
    grossPrice: 175.00,
    imageUrl: "https://www.rolawn.co.uk/wp-content/uploads/2024/12/Rolawn_TurfLawnSeeding_MedallionTurf_Mockup-1-300x300.jpg",
    description: "Bundle of Medallion Turf and Turf & Lawn Seeding Topsoil for a complete lawn solution."
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getUniqueProductNames = (category: string): string[] => {
  const productsInCategory = getProductsByCategory(category);
  const uniqueNames = Array.from(new Set(productsInCategory.map(product => product.name)));
  return uniqueNames;
};
