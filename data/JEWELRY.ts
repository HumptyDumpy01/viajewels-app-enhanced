import { ItemTagType } from '../src/app/UI/cards/item-card/item-card.component';

export type JewelryType = {
  id: number,
  addedToWishlist: boolean,
  imgData: {
    src: string,
    alt: string
  }[],
  itemDetails: {
    heading: string,
    price: number,
    rating: number,
    reviewCount: number,
    description: string,
    tag: ItemTagType[],
    info: JewelryInfoType
  },
  href: string,
  itemsLeft: number,
  reviews: JewelryReviewType[] | null
}

export type JewelryReviewType = {
  initials: string;
  email?: string;
  rated: number;
  review: string;
  createdAt: string;
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
    imgData: [
      { src: './jewelry/classic-gold-bracelet/classic-gold-bracelet-1.png', alt: 'Classic Gold Bracelet 1' },
      { src: './jewelry/classic-gold-bracelet/classic-gold-bracelet-2.png', alt: 'Classic Gold Bracelet 2' },
      { src: './jewelry/classic-gold-bracelet/classic-gold-bracelet-3.png', alt: 'Classic Gold Bracelet 3' },
      { src: './jewelry/classic-gold-bracelet/classic-gold-bracelet-4.png', alt: 'Classic Gold Bracelet 4' }
    ],
    itemDetails: {
      heading: 'Classic Golden Bracelet made of perfect stone',
      price: 1229,
      rating: 4.44,
      reviewCount: 132,
      description: 'Crafted with the finest diamonds, this necklace is designed to make you stand out at every occasion. Adorn your neckline with these symbols of sophistication and timeless beauty.',
      tag: ['new', 'bracelets'],
      info: {
        description: 'A classic golden bracelet designed to enhance elegance with every wear. Features intricate detailing and a smooth finish.',
        material: '18k Gold and Premium Stones',
        dimensions: 'Length: 7.5 inches, Width: 0.3 inches',
        warranty: 'Includes a 2-year manufacturer warranty.',
        delivery: 'Free standard shipping within 5-7 business days. Express delivery options available at checkout.'
      }
    },
    href: '/jewelry/1',
    itemsLeft: 4,
    reviews: [
      {
        initials: 'John Smith',
        email: 'johnsmith@example.com',
        rated: 5,
        review: 'Absolutely stunning! The gold finish is perfect, and the design is timeless.',
        createdAt: '2025-01-01'
      },
      {
        initials: 'Emily Davis',
        email: 'emilyd@example.com',
        rated: 4,
        review: 'Beautiful bracelet, but I wish the clasp was a bit sturdier.',
        createdAt: '2024-12-30'
      },
      {
        initials: 'Sophia Johnson',
        email: 'sophiaj@example.com',
        rated: 5,
        review: 'Love it! Perfect for everyday wear or special occasions.',
        createdAt: '2024-12-25'
      },
      {
        initials: 'Michael Brown',
        email: 'michaelb@example.com',
        rated: 4,
        review: 'Great quality, but slightly smaller than I expected.',
        createdAt: '2024-12-20'
      },
      {
        initials: 'Olivia Wilson',
        email: 'oliviaw@example.com',
        rated: 5,
        review: 'A gift for my mom, and she adores it!',
        createdAt: '2024-12-18'
      },
      {
        initials: 'Daniel Martinez',
        email: 'danielm@example.com',
        rated: 5,
        review: 'Exceptional craftsmanship, worth every penny.',
        createdAt: '2024-12-15'
      },
      {
        initials: 'Liam Garcia',
        email: 'liamg@example.com',
        rated: 4,
        review: 'Lovely bracelet but took longer to arrive than expected.',
        createdAt: '2024-12-10'
      }
    ]
  },
  {
    id: 2,
    addedToWishlist: true,
    imgData: [
      { src: './jewelry/diamond-necklace/diamond-necklace-1.png', alt: 'Diamond Necklace 1' },
      { src: './jewelry/diamond-necklace/diamond-necklace-2.png', alt: 'Diamond Necklace 2 ' },
      { src: './jewelry/diamond-necklace/diamond-necklace-3.png', alt: 'Diamond Necklace 3' },
      { src: './jewelry/diamond-necklace/diamond-necklace-4.png', alt: 'Diamond Necklace 4 ' }
    ],
    itemDetails: {
      heading: 'Diamond Necklace - Elegance and Brilliance Combined',
      price: 2499,
      rating: 4.8,
      reviewCount: 210,
      description: 'This stunning diamond necklace is a masterpiece of design and craftsmanship. Perfect for enhancing your beauty at weddings, galas, or any special event.',
      tag: ['necklaces'],
      info: {
        description: 'A breathtaking diamond necklace featuring a cascade of brilliant-cut diamonds. A symbol of eternal elegance.',
        material: 'Platinum and High-Grade Diamonds',
        dimensions: 'Chain Length: 16 inches, Pendant Size: 1 inch',
        warranty: 'Comes with a 3-year manufacturer warranty for peace of mind.',
        delivery: 'Complimentary insured delivery within 3-5 business days. Priority shipping available.'
      }
    },
    href: '/jewelry/2',
    itemsLeft: 10,
    reviews: [
      {
        initials: 'Emma Harris',
        email: 'emmah@example.com',
        rated: 5,
        review: 'Gorgeous necklace, the diamonds sparkle beautifully.',
        createdAt: '2025-01-02'
      },
      {
        initials: 'William Clark',
        email: 'williamc@example.com',
        rated: 4,
        review: 'Very elegant but slightly expensive.',
        createdAt: '2024-12-29'
      },
      {
        initials: 'Ava Lewis',
        email: 'aval@example.com',
        rated: 5,
        review: 'I wore this to a gala, and everyone complimented me!',
        createdAt: '2024-12-27'
      },
      {
        initials: 'James Robinson',
        email: 'jamesr@example.com',
        rated: 5,
        review: 'A perfect anniversary gift for my wife. She loves it!',
        createdAt: '2024-12-22'
      },
      {
        initials: 'Isabella Walker',
        email: 'isabellaw@example.com',
        rated: 4,
        review: 'Stunning necklace but came in a slightly damaged box.',
        createdAt: '2024-12-17'
      },
      {
        initials: 'Benjamin Hall',
        email: 'benjaminh@example.com',
        rated: 5,
        review: 'The craftsmanship is unmatched. Highly recommend!',
        createdAt: '2024-12-12'
      },
      {
        initials: 'Mia Young',
        email: 'miay@example.com',
        rated: 5,
        review: 'Absolutely love this necklace, it’s my favorite piece now.',
        createdAt: '2024-12-08'
      }
    ]
  },
  {
    id: 3,
    addedToWishlist: true,
    imgData: [
      { src: './jewelry/exquisite-pearl-earrings/exquisite-pearl-earrings-1.png', alt: 'Exquisite Pearl Earrings 1' },
      { src: './jewelry/exquisite-pearl-earrings/exquisite-pearl-earrings-2.png', alt: 'Exquisite Pearl Earrings 2' },
      { src: './jewelry/exquisite-pearl-earrings/exquisite-pearl-earrings-3.png', alt: 'Exquisite Pearl Earrings 3' },
      { src: './jewelry/exquisite-pearl-earrings/exquisite-pearl-earrings-4.png', alt: 'Exquisite Pearl Earrings 4' }
    ],
    itemDetails: {
      heading: 'Exquisite Pearl Earrings - Timeless Sophistication',
      price: 899,
      rating: 4.7,
      reviewCount: 176,
      description: 'These exquisite pearl earrings radiate grace and charm. Perfect for any occasion, they add a touch of timeless elegance to your ensemble.',
      tag: ['collection', 'earrings'],
      info: {
        description: 'Delicately designed pearl earrings that exude timeless sophistication. A must-have for every jewelry collection.',
        material: 'Cultured Pearls and Sterling Silver',
        dimensions: 'Earring Drop: 1 inch, Pearl Diameter: 8mm',
        warranty: 'Protected by a 1-year craftsmanship warranty.',
        delivery: 'Standard delivery within 4-6 business days. Express options available for faster shipping.'
      }
    },
    href: '/jewelry/3',
    itemsLeft: 8,
    reviews: [
      {
        initials: 'Charlotte King',
        email: 'charlottek@example.com',
        rated: 5,
        review: 'These earrings are absolutely beautiful and lightweight.',
        createdAt: '2024-12-30'
      },
      {
        initials: 'Henry Scott',
        email: 'henrys@example.com',
        rated: 4,
        review: 'Lovely pearls but a bit smaller than expected.',
        createdAt: '2024-12-28'
      },
      {
        initials: 'Amelia Adams',
        email: 'ameliaa@example.com',
        rated: 5,
        review: 'They add a perfect touch of elegance to any outfit.',
        createdAt: '2024-12-25'
      },
      {
        initials: 'Lucas Baker',
        email: 'lucasb@example.com',
        rated: 5,
        review: 'Bought these as a gift, and the recipient loved them!',
        createdAt: '2024-12-21'
      },
      {
        initials: 'Harper Carter',
        email: 'harperc@example.com',
        rated: 4,
        review: 'Very pretty, but the backing could be more secure.',
        createdAt: '2024-12-15'
      },
      {
        initials: 'Evelyn Murphy',
        email: 'evelynm@example.com',
        rated: 5,
        review: 'Timeless and elegant, perfect for every occasion.',
        createdAt: '2024-12-10'
      }
    ]
  },
  {
    id: 4,
    addedToWishlist: false,
    imgData: [
      { src: './jewelry/sapphire-encrusted-ring/sapphire-encrusted-ring-1.png', alt: 'Sapphire Encrusted Ring 1' },
      { src: './jewelry/sapphire-encrusted-ring/sapphire-encrusted-ring-2.png', alt: 'Sapphire Encrusted Ring 2' },
      { src: './jewelry/sapphire-encrusted-ring/sapphire-encrusted-ring-3.png', alt: 'Sapphire Encrusted Ring 3' },
      { src: './jewelry/sapphire-encrusted-ring/sapphire-encrusted-ring-4.png', alt: 'Sapphire Encrusted Ring 4' }
    ],
    itemDetails: {
      heading: 'Sapphire Encrusted Ring - A Royal Statement',
      price: 1599,
      rating: 4.9,
      reviewCount: 98,
      description: 'Adorned with dazzling sapphires, this ring is a true symbol of luxury and refinement. A perfect choice for those who seek exclusivity and style.',
      tag: ['new', 'rings'],
      info: {
        description: 'A stunning sapphire-encrusted ring crafted to make a royal statement. Designed for those who appreciate unparalleled luxury.',
        material: 'White Gold and Natural Sapphires',
        dimensions: 'Ring Size: Adjustable, Band Width: 3mm',
        warranty: 'Includes a 5-year gemstone authenticity guarantee.',
        delivery: 'Secure and insured shipping within 5-7 business days.'
      }
    },
    href: '/jewelry/4',
    itemsLeft: 2,
    reviews: [
      {
        initials: 'Ella Turner',
        email: 'ellat@example.com',
        rated: 5,
        review: 'A ring fit for royalty! Absolutely love the sapphires.',
        createdAt: '2024-12-31'
      },
      {
        initials: 'Alexander Mitchell',
        email: 'alexanderm@example.com',
        rated: 4,
        review: 'Beautiful ring but a bit pricey.',
        createdAt: '2024-12-28'
      },
      {
        initials: 'Grace Perez',
        email: 'gracep@example.com',
        rated: 5,
        review: 'The sapphires are stunning, and the design is elegant.',
        createdAt: '2024-12-24'
      },
      {
        initials: 'Samuel Roberts',
        email: 'samuelr@example.com',
        rated: 5,
        review: 'Purchased for my wife, and she hasn’t taken it off since!',
        createdAt: '2024-12-20'
      },
      {
        initials: 'Luna Evans',
        email: 'lunale@example.com',
        rated: 4,
        review: 'Love the ring, but the delivery was delayed.',
        createdAt: '2024-12-17'
      },
      {
        initials: 'Jack Phillips',
        email: 'jackp@example.com',
        rated: 5,
        review: 'A truly luxurious ring, worth the investment.',
        createdAt: '2024-12-13'
      }
    ]
  },
  {
    id: 5,
    addedToWishlist: false,
    imgData: [
      { src: './jewelry/spellbinding-ring/spellbinding-ring-1.png', alt: 'Spellbinding Ring 1' },
      { src: './jewelry/spellbinding-ring/spellbinding-ring-2.png', alt: 'Spellbinding Ring 2' },
      { src: './jewelry/spellbinding-ring/spellbinding-ring-3.png', alt: 'Spellbinding Ring 3' },
      { src: './jewelry/spellbinding-ring/spellbinding-ring-4.png', alt: 'Spellbinding Ring 4' }
    ],
    itemDetails: {
      heading: 'Spellbinding Ring - Captivate and Mesmerize',
      price: 1349,
      rating: 4.6,
      reviewCount: 143,
      description: 'A unique design that exudes magic and allure. The spellbinding ring is perfect for making a memorable statement.',
      tag: ['rings'],
      info: {
        description: 'An enchanting ring that captivates with its intricate design and mesmerizing beauty. A true conversation starter.',
        material: 'Rose Gold and Moissanite',
        dimensions: 'Ring Size: Customizable, Stone Diameter: 6mm',
        warranty: 'Backed by a 2-year satisfaction guarantee.',
        delivery: 'Fast and secure shipping within 3-5 business days.'
      }
    },
    href: '/jewelry/5',
    itemsLeft: 5,
    reviews: [
      {
        initials: 'Aria Rodriguez',
        email: 'ariar@example.com',
        rated: 5,
        review: 'This ring is simply magical. I’m mesmerized by its beauty.',
        createdAt: '2024-12-30'
      },
      {
        initials: 'Matthew Anderson',
        email: 'matthewa@example.com',
        rated: 5,
        review: 'The design is unique, and the quality is top-notch.',
        createdAt: '2024-12-26'
      },
      {
        initials: 'Scarlett Moore',
        email: 'scarlettm@example.com',
        rated: 4,
        review: 'Amazing ring, but the size adjustment was tricky.',
        createdAt: '2024-12-22'
      },
      {
        initials: 'Elijah Thomas',
        email: 'elijaht@example.com',
        rated: 5,
        review: 'I get compliments every time I wear this ring.',
        createdAt: '2024-12-18'
      },
      {
        initials: 'Avery Martinez',
        email: 'averym@example.com',
        rated: 5,
        review: 'An excellent addition to my jewelry collection.',
        createdAt: '2024-12-14'
      },
      {
        initials: 'Sofia Thompson',
        email: 'sofiat@example.com',
        rated: 5,
        review: 'Enchants everyone who sees it. Highly recommend!',
        createdAt: '2024-12-12'
      }
    ]
  },
  {
    id: 6,
    addedToWishlist: true,
    imgData: [
      { src: './jewelry/wedding-ring/wedding-ring-1.png', alt: 'Wedding Ring 1' },
      { src: './jewelry/wedding-ring/wedding-ring-2.png', alt: 'Wedding Ring 2' },
      { src: './jewelry/wedding-ring/wedding-ring-3.png', alt: 'Wedding Ring 3' },
      { src: './jewelry/wedding-ring/wedding-ring-4.png', alt: 'Wedding Ring 4' }
    ],
    itemDetails: {
      heading: 'Wedding Ring - The Perfect Symbol of Love',
      price: 1899,
      rating: 4.9,
      reviewCount: 254,
      description: 'Celebrate your special day with this elegantly crafted wedding ring. A timeless symbol of your love and commitment.',
      tag: ['coming-soon', 'rings'],
      info: {
        description: 'A beautifully designed wedding ring symbolizing eternal love and devotion. Ideal for your most cherished moments.',
        material: '14k White Gold and Conflict-Free Diamonds',
        dimensions: 'Band Width: 2.5mm, Available in Various Sizes',
        warranty: 'Lifetime warranty on diamond quality and craftsmanship.',
        delivery: 'Pre-order now for priority delivery within 6-8 weeks.'
      }
    },
    href: '/jewelry/6',
    itemsLeft: 0,
    reviews: [
      {
        initials: 'Chloe White',
        email: 'chloew@example.com',
        rated: 5,
        review: 'The perfect symbol of our love. Couldn’t be happier!',
        createdAt: '2024-12-31'
      },
      {
        initials: 'Mason Green',
        email: 'masong@example.com',
        rated: 5,
        review: 'Elegant, timeless, and absolutely beautiful.',
        createdAt: '2024-12-27'
      },
      {
        initials: 'Zoe Hernandez',
        email: 'zoeh@example.com',
        rated: 4,
        review: 'Amazing ring, but it took a while to arrive.',
        createdAt: '2024-12-23'
      },
      {
        initials: 'Logan Walker',
        email: 'loganw@example.com',
        rated: 5,
        review: 'My partner loves it! Thank you for this masterpiece.',
        createdAt: '2024-12-20'
      },
      {
        initials: 'Ella Allen',
        email: 'ellaa@example.com',
        rated: 5,
        review: 'The craftsmanship is superb. Highly recommend.',
        createdAt: '2024-12-15'
      },
      {
        initials: 'James Wright',
        email: 'jamesw@example.com',
        rated: 5,
        review: 'This ring is everything we wanted and more.',
        createdAt: '2024-12-10'
      },
      {
        initials: 'Abigail King',
        email: 'abigailk@example.com',
        rated: 5,
        review: 'An exquisite piece. Couldn’t have chosen better.',
        createdAt: '2024-12-08'
      }
    ]
  }
];
