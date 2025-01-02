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
        review: 'I bought this bracelet as a gift for my wife, and she has been raving about it ever since. The golden finish is absolutely flawless and gives a premium feel that makes it perfect for both everyday wear and formal events. The design is intricate, and you can tell that a lot of thought went into crafting it. She has received numerous compliments, and it has become her go-to accessory. Highly recommend this for anyone looking to add a touch of elegance to their jewelry collection.',
        createdAt: '2025-01-01'
      },
      {
        initials: 'Emily Davis',
        email: 'emilyd@example.com',
        rated: 4,
        review: 'The bracelet is undoubtedly beautiful, and I love how it looks on my wrist. The gold color is vibrant and doesn’t fade even after multiple wears. However, I found the clasp to be a little tricky to fasten on my own, which can be slightly frustrating. That being said, the craftsmanship is exceptional, and I’ve already recommended it to a few friends who were admiring it during a recent dinner party.',
        createdAt: '2024-12-30'
      },
      {
        initials: 'Sophia Johnson',
        email: 'sophiaj@example.com',
        rated: 5,
        review: 'This bracelet is a true masterpiece! I was searching for something elegant yet subtle, and this fits the bill perfectly. The design is timeless and pairs beautifully with both casual and formal outfits. It feels lightweight on my wrist, which is a big plus for me since I wear it daily. I’m especially impressed with how durable it is, as it has shown no signs of wear despite frequent use.',
        createdAt: '2024-12-25'
      },
      {
        initials: 'Michael Brown',
        email: 'michaelb@example.com',
        rated: 4,
        review: 'The quality of the bracelet is outstanding, and you can tell that it’s made from high-grade materials. It shines beautifully under light and feels great on the wrist. My only issue is that it’s a bit smaller than I expected, so it doesn’t have as much of a presence as I’d hoped. Nevertheless, it’s a wonderful piece that I’ll cherish.',
        createdAt: '2024-12-20'
      },
      {
        initials: 'Olivia Wilson',
        email: 'oliviaw@example.com',
        rated: 5,
        review: 'I gifted this bracelet to my mom for her birthday, and she absolutely adores it. She’s been wearing it non-stop and says it’s one of the most comfortable pieces of jewelry she’s ever owned. The design is timeless, and it feels incredibly sturdy. It arrived in a beautiful box, making it feel even more special. This is a piece that’s sure to remain a favorite in our family for years to come.',
        createdAt: '2024-12-18'
      },
      {
        initials: 'Daniel Martinez',
        email: 'danielm@example.com',
        rated: 5,
        review: 'I couldn’t be happier with this purchase. The bracelet is a perfect blend of sophistication and simplicity, making it suitable for any occasion. The golden hue is rich and vibrant, and the detailing on the chain is mesmerizing. It feels luxurious to the touch and has quickly become one of my favorite accessories. The packaging was also top-notch, adding to the overall experience.',
        createdAt: '2024-12-15'
      },
      {
        initials: 'Liam Garcia',
        email: 'liamg@example.com',
        rated: 4,
        review: 'This bracelet is absolutely stunning, and I love the way it catches the light. It adds a touch of class to any outfit, and I’ve received numerous compliments while wearing it. My only complaint is that the delivery took longer than expected, which was a bit disappointing. But the quality of the product more than makes up for it.',
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
        review: 'The necklace is absolutely gorgeous! The diamonds catch the light perfectly and sparkle in a way that makes it look even more exquisite than in the pictures. I am thrilled with my purchase and would highly recommend it to anyone looking for a stunning piece of jewelry to add to their collection.',
        createdAt: '2025-01-02'
      },
      {
        initials: 'William Clark',
        email: 'williamc@example.com',
        rated: 3,
        review: 'The necklace itself is very elegant, and the design is quite refined. However, I do feel that it is a bit on the expensive side for what it is. While the quality is good, I wasn’t completely sold on the value for money. Still, if you’re willing to splurge, it’s a beautiful piece to own.',
        createdAt: '2024-12-29'
      },
      {
        initials: 'Ava Lewis',
        email: 'aval@example.com',
        rated: 5,
        review: 'I wore this stunning necklace to a gala, and I received an overwhelming number of compliments throughout the evening! The design is so eye-catching, and it really elevated my outfit. I felt like the center of attention in the best way possible. Definitely a must-have for special occasions.',
        createdAt: '2024-12-27'
      },
      {
        initials: 'James Robinson',
        email: 'jamesr@example.com',
        rated: 5,
        review: 'This necklace made for the perfect anniversary gift for my wife. She absolutely loves it, and I can see why. The quality is exceptional, and it feels so personal and thoughtful. It really made our celebration memorable, and she’s been wearing it almost every day since.',
        createdAt: '2024-12-22'
      },
      {
        initials: 'Isabella Walker',
        email: 'isabellaw@example.com',
        rated: 4,
        review: 'The necklace is absolutely stunning and looks even better in person. It’s elegant, delicate, and the diamonds are sparkling. My only issue was that the packaging was slightly damaged when it arrived, which was a bit disappointing considering the price. However, the necklace itself is still perfect, and I love wearing it.',
        createdAt: '2024-12-17'
      },
      {
        initials: 'Benjamin Hall',
        email: 'benjaminh@example.com',
        rated: 5,
        review: 'The craftsmanship of this necklace is simply unmatched. From the smoothness of the chain to the perfect setting of the diamonds, everything is meticulously designed. It feels like a high-end, timeless piece of jewelry, and I highly recommend it to anyone looking for an elegant and durable addition to their jewelry box.',
        createdAt: '2024-12-12'
      },
      {
        initials: 'Mia Young',
        email: 'miay@example.com',
        rated: 3,
        review: 'I absolutely love this necklace; it’s quickly become my favorite piece of jewelry! The design is beautiful, and it goes with almost everything I wear. However, I did expect the quality to be slightly better for the price. While I still wear it daily, I hope the durability proves itself over time.',
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
        rated: 3,
        review: 'These earrings are absolutely stunning! They have a delicate design, and I love how lightweight they are, making them comfortable to wear for long periods. However, I was hoping for them to be a bit more substantial in size, as they appear slightly smaller than I expected based on the photos. Still, they’re lovely and I wear them often.',
        createdAt: '2024-12-30'
      },
      {
        initials: 'Henry Scott',
        email: 'henrys@example.com',
        rated: 4,
        review: 'The pearls on these earrings are truly lovely—very lustrous and refined. However, they are a bit smaller than I anticipated, which was a slight disappointment. That said, they still look elegant when worn, and the quality is definitely there. I’m happy with my purchase overall.',
        createdAt: '2024-12-28'
      },
      {
        initials: 'Amelia Adams',
        email: 'ameliaa@example.com',
        rated: 5,
        review: 'These earrings are absolutely perfect! They add the ideal touch of elegance to any outfit, whether I’m dressing up for a special occasion or wearing them with something more casual. The quality is excellent, and they really enhance my overall look. I can’t recommend them enough!',
        createdAt: '2024-12-25'
      },
      {
        initials: 'Lucas Baker',
        email: 'lucasb@example.com',
        rated: 5,
        review: 'I bought these earrings as a gift for a friend, and they were absolutely loved! The recipient was over the moon with the design and quality. The earrings are both elegant and versatile, making them a perfect gift for any occasion. I’m so glad I chose these—they definitely made the recipient’s day!',
        createdAt: '2024-12-21'
      },
      {
        initials: 'Harper Carter',
        email: 'harperc@example.com',
        rated: 4,
        review: 'These earrings are very pretty and the design is just what I was looking for. However, I found that the backing could be more secure. While they stay on well enough, I worry about losing one if I’m not careful. Otherwise, they are gorgeous and I enjoy wearing them on a regular basis.',
        createdAt: '2024-12-15'
      },
      {
        initials: 'Evelyn Murphy',
        email: 'evelynm@example.com',
        rated: 5,
        review: 'These earrings are timeless and incredibly elegant! They’re perfect for just about any occasion, from everyday wear to formal events. The design is classic yet modern, and they elevate any outfit instantly. I’m thrilled with this purchase and can already tell they’ll be a staple in my jewelry collection for years to come.',
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
        review: 'This ring is absolutely breathtaking—it feels like a piece fit for royalty! The sapphires are so vivid and stunning, and they really make the ring stand out. The design is timeless, and it adds a touch of sophistication to any outfit. I’m completely in love with it, and it’s definitely one of my most treasured pieces of jewelry!',
        createdAt: '2024-12-31'
      },
      {
        initials: 'Alexander Mitchell',
        email: 'alexanderm@example.com',
        rated: 4,
        review: 'This ring is undeniably beautiful, and the craftsmanship is top-notch. The sapphires are stunning and the overall design is elegant. However, it is a bit on the expensive side, and I found myself debating whether it was worth the price. That being said, I’m still happy with my purchase and think it’s a beautiful piece to own.',
        createdAt: '2024-12-28'
      },
      {
        initials: 'Grace Perez',
        email: 'gracep@example.com',
        rated: 5,
        review: 'I’m absolutely in love with this ring! The sapphires are incredibly stunning, with a vibrant hue that really catches the eye. The design is so elegant and timeless, making it suitable for both everyday wear and special occasions. It’s a luxurious piece that I’m so glad I invested in. I’ve received so many compliments already!',
        createdAt: '2024-12-24'
      },
      {
        initials: 'Samuel Roberts',
        email: 'samuelr@example.com',
        rated: 5,
        review: 'I bought this ring as a surprise gift for my wife, and she hasn’t taken it off since! She absolutely loves it. The sapphires are so beautiful, and the ring is just the right balance of elegance and sparkle. It has become her favorite piece of jewelry, and I’m so happy with the reaction. It was a perfect gift that will hold a special place in her heart.',
        createdAt: '2024-12-20'
      },
      {
        initials: 'Luna Evans',
        email: 'lunale@example.com',
        rated: 4,
        review: 'I absolutely love the design of this ring—it’s both elegant and eye-catching. The sapphires are gorgeous, and the craftsmanship is impeccable. My only issue was with the delivery, as it was delayed a bit longer than I expected. While the wait was frustrating, the ring itself is everything I hoped for and more. I’m still very pleased with my purchase.',
        createdAt: '2024-12-17'
      },
      {
        initials: 'Jack Phillips',
        email: 'jackp@example.com',
        rated: 5,
        review: 'This ring is the epitome of luxury! From the stunning sapphires to the intricate design, everything about it screams elegance. It’s definitely a high-end piece, and while it’s an investment, it is absolutely worth it. I feel confident that it will last for many years and be a statement piece in my collection. I highly recommend it to anyone looking for something truly special.',
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
        review: 'This ring is absolutely magical! The moment I laid eyes on it, I was mesmerized by its incredible beauty. The design is so intricate, and the sparkle is simply mesmerizing. It’s become one of my most cherished pieces in my jewelry collection. Every time I wear it, I can’t help but feel a sense of elegance and grace. I’m completely in love with it!',
        createdAt: '2024-12-30'
      },
      {
        initials: 'Matthew Anderson',
        email: 'matthewa@example.com',
        rated: 5,
        review: 'The design of this ring is incredibly unique, unlike anything I’ve seen before. The quality is outstanding—every detail has been carefully crafted, and the materials are top-notch. It’s the kind of piece that stands out, and I feel confident wearing it. I’m beyond satisfied with my purchase and would highly recommend it to anyone looking for a statement piece.',
        createdAt: '2024-12-26'
      },
      {
        initials: 'Scarlett Moore',
        email: 'scarlettm@example.com',
        rated: 4,
        review: 'This ring is absolutely stunning—the design is gorgeous, and it truly catches the light in the most beautiful way. My only issue was with the size adjustment, which I found a bit tricky. It took me some time to figure out the best fit, but once I got it right, the ring was perfect. Overall, I’m very happy with this purchase and would recommend it to others.',
        createdAt: '2024-12-22'
      },
      {
        initials: 'Elijah Thomas',
        email: 'elijaht@example.com',
        rated: 5,
        review: 'Every time I wear this ring, I get so many compliments! It’s a real conversation starter. The design is bold yet elegant, and it really makes a statement. I’m constantly amazed by how it adds the perfect finishing touch to any outfit. This ring is a true treasure in my collection, and I’m always excited to wear it.',
        createdAt: '2024-12-18'
      },
      {
        initials: 'Avery Martinez',
        email: 'averym@example.com',
        rated: 5,
        review: 'This ring is an excellent addition to my jewelry collection! The craftsmanship is flawless, and it has a timeless elegance that makes it perfect for any occasion. Whether I’m dressing up for a special event or wearing it casually, it always adds the right touch. I’m absolutely delighted with this purchase and know it will remain a staple piece in my collection for years to come.',
        createdAt: '2024-12-14'
      },
      {
        initials: 'Sofia Thompson',
        email: 'sofiat@example.com',
        rated: 5,
        review: 'This ring is absolutely enchanting! Every person who sees it is captivated by its beauty. The design is so intricate and sophisticated, and the sparkle is just breathtaking. It truly stands out in a crowd and has quickly become one of my favorite pieces of jewelry. I highly recommend it to anyone looking for something special that will turn heads and leave a lasting impression.',
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
      // {
      //   initials: 'Chloe White',
      //   email: 'chloew@example.com',
      //   rated: 5,
      //   review: 'The perfect symbol of our love. Couldn’t be happier!',
      //   createdAt: '2024-12-31'
      // },
      // {
      //   initials: 'Mason Green',
      //   email: 'masong@example.com',
      //   rated: 5,
      //   review: 'Elegant, timeless, and absolutely beautiful.',
      //   createdAt: '2024-12-27'
      // },
      // {
      //   initials: 'Zoe Hernandez',
      //   email: 'zoeh@example.com',
      //   rated: 4,
      //   review: 'Amazing ring, but it took a while to arrive.',
      //   createdAt: '2024-12-23'
      // },
      // {
      //   initials: 'Logan Walker',
      //   email: 'loganw@example.com',
      //   rated: 5,
      //   review: 'My partner loves it! Thank you for this masterpiece.',
      //   createdAt: '2024-12-20'
      // },
      // {
      //   initials: 'Ella Allen',
      //   email: 'ellaa@example.com',
      //   rated: 5,
      //   review: 'The craftsmanship is superb. Highly recommend.',
      //   createdAt: '2024-12-15'
      // },
      // {
      //   initials: 'James Wright',
      //   email: 'jamesw@example.com',
      //   rated: 5,
      //   review: 'This ring is everything we wanted and more.',
      //   createdAt: '2024-12-10'
      // },
      // {
      //   initials: 'Abigail King',
      //   email: 'abigailk@example.com',
      //   rated: 5,
      //   review: 'An exquisite piece. Couldn’t have chosen better.',
      //   createdAt: '2024-12-08'
      // }
    ]
  }
];
