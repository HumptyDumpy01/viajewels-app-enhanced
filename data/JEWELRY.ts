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
    tag: ItemTagType
  },
  href: string
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
      description: 'Crafted with the finest diamonds, this necklace is designed to make you stand out at every occasion. adorn your neckline with these symbols of sophistication.',
      tag: 'new'
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
      tag: null
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
      tag: 'collection'
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
      tag: 'new'
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
      tag: null
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
      tag: 'coming-soon'
    },
    href: '/jewelry/6'
  }
];
