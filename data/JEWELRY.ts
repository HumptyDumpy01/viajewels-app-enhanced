import { ItemTagType } from '../src/app/UI/cards/item-card/item-card.component';

export type JewelryType = {
  id: number,
  addedToWishlist: boolean,
  imgData: {
    src: string,
    alt: string
  },
  itemDetails: {
    heading: string,
    price: number,
    rating: number,
    reviewCount: number,
    description: string,
    tag: ItemTagType,
    info: JewelryInfoType
  },
  href: string
}

export type JewelryInfoType = {
  description: string;
  material: string;
  dimensions: string;
  warranty: string;
  delivery: string;
}

export const JEWELRY: JewelryType[] = [
  {
    id: 1,
    addedToWishlist: false,
    imgData: { src: './jewelry/classic-gold-bracelet/classic-gold-bracelet-1.png', alt: 'Classic Gold Bracelet' },
    itemDetails: {
      heading: 'Classic Golden Bracelet made of perfect stone',
      price: 1229,
      rating: 4.44,
      reviewCount: 132,
      description: 'Crafted with the finest diamonds, this necklace is designed to make you stand out at every occasion. Adorn your neckline with these symbols of sophistication and timeless beauty.',
      tag: 'new',
      info: {
        description: 'A classic golden bracelet designed to enhance elegance with every wear. Features intricate detailing and a smooth finish.',
        material: '18k Gold and Premium Stones',
        dimensions: 'Length: 7.5 inches, Width: 0.3 inches',
        warranty: 'Includes a 2-year manufacturer warranty.',
        delivery: 'Free standard shipping within 5-7 business days. Express delivery options available at checkout.'
      }
    },
    href: '/jewelry/1'
  },
  {
    id: 2,
    addedToWishlist: true,
    imgData: { src: './jewelry/diamond-necklace/diamond-necklace-1.png', alt: 'Diamond Necklace' },
    itemDetails: {
      heading: 'Diamond Necklace - Elegance and Brilliance Combined',
      price: 2499,
      rating: 4.8,
      reviewCount: 210,
      description: 'This stunning diamond necklace is a masterpiece of design and craftsmanship. Perfect for enhancing your beauty at weddings, galas, or any special event.',
      tag: null,
      info: {
        description: 'A breathtaking diamond necklace featuring a cascade of brilliant-cut diamonds. A symbol of eternal elegance.',
        material: 'Platinum and High-Grade Diamonds',
        dimensions: 'Chain Length: 16 inches, Pendant Size: 1 inch',
        warranty: 'Comes with a 3-year manufacturer warranty for peace of mind.',
        delivery: 'Complimentary insured delivery within 3-5 business days. Priority shipping available.'
      }
    },
    href: '/jewelry/2'
  },
  {
    id: 3,
    addedToWishlist: true,
    imgData: {
      src: './jewelry/exquisite-pearl-earrings/exquisite-pearl-earrings-1.png',
      alt: 'Exquisite Pearl Earrings'
    },
    itemDetails: {
      heading: 'Exquisite Pearl Earrings - Timeless Sophistication',
      price: 899,
      rating: 4.7,
      reviewCount: 176,
      description: 'These exquisite pearl earrings radiate grace and charm. Perfect for any occasion, they add a touch of timeless elegance to your ensemble.',
      tag: 'collection',
      info: {
        description: 'Delicately designed pearl earrings that exude timeless sophistication. A must-have for every jewelry collection.',
        material: 'Cultured Pearls and Sterling Silver',
        dimensions: 'Earring Drop: 1 inch, Pearl Diameter: 8mm',
        warranty: 'Protected by a 1-year craftsmanship warranty.',
        delivery: 'Standard delivery within 4-6 business days. Express options available for faster shipping.'
      }
    },
    href: '/jewelry/3'
  },
  {
    id: 4,
    addedToWishlist: false,
    imgData: { src: './jewelry/sapphire-encrusted-ring/sapphire-encrusted-ring-1.png', alt: 'Sapphire Encrusted Ring' },
    itemDetails: {
      heading: 'Sapphire Encrusted Ring - A Royal Statement',
      price: 1599,
      rating: 4.9,
      reviewCount: 98,
      description: 'Adorned with dazzling sapphires, this ring is a true symbol of luxury and refinement. A perfect choice for those who seek exclusivity and style.',
      tag: 'new',
      info: {
        description: 'A stunning sapphire-encrusted ring crafted to make a royal statement. Designed for those who appreciate unparalleled luxury.',
        material: 'White Gold and Natural Sapphires',
        dimensions: 'Ring Size: Adjustable, Band Width: 3mm',
        warranty: 'Includes a 5-year gemstone authenticity guarantee.',
        delivery: 'Secure and insured shipping within 5-7 business days.'
      }
    },
    href: '/jewelry/4'
  },
  {
    id: 5,
    addedToWishlist: false,
    imgData: { src: './jewelry/spellbinding-ring/spellbinding-ring-1.png', alt: 'Spellbinding Ring' },
    itemDetails: {
      heading: 'Spellbinding Ring - Captivate and Mesmerize',
      price: 1349,
      rating: 4.6,
      reviewCount: 143,
      description: 'A unique design that exudes magic and allure. The spellbinding ring is perfect for making a memorable statement.',
      tag: null,
      info: {
        description: 'An enchanting ring that captivates with its intricate design and mesmerizing beauty. A true conversation starter.',
        material: 'Rose Gold and Moissanite',
        dimensions: 'Ring Size: Customizable, Stone Diameter: 6mm',
        warranty: 'Backed by a 2-year satisfaction guarantee.',
        delivery: 'Fast and secure shipping within 3-5 business days.'
      }
    },
    href: '/jewelry/5'
  },
  {
    id: 6,
    addedToWishlist: true,
    imgData: { src: './jewelry/wedding-ring/wedding-ring-1.png', alt: 'Wedding Ring' },
    itemDetails: {
      heading: 'Wedding Ring - The Perfect Symbol of Love',
      price: 1899,
      rating: 4.9,
      reviewCount: 254,
      description: 'Celebrate your special day with this elegantly crafted wedding ring. A timeless symbol of your love and commitment.',
      tag: 'coming-soon',
      info: {
        description: 'A beautifully designed wedding ring symbolizing eternal love and devotion. Ideal for your most cherished moments.',
        material: '14k White Gold and Conflict-Free Diamonds',
        dimensions: 'Band Width: 2.5mm, Available in Various Sizes',
        warranty: 'Lifetime warranty on diamond quality and craftsmanship.',
        delivery: 'Pre-order now for priority delivery within 6-8 weeks.'
      }
    },
    href: '/jewelry/6'
  }
];
