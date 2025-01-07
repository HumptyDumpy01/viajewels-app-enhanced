export type CollectionType = {
  imgData: {
    alt: string;
    src: string;
  },
  href: string;
  heading: string;
  text: string;
}

export const COLLECTIONS: CollectionType[] = [
  {
    heading: `Venera Collection`,
    text: `Elevate your elegance with the Venera Collection, a timeless selection of handcrafted jewelry inspired by celestial beauty. Each piece reflects exquisite craftsmanship and attention to detail, designed to add a touch of sophistication to your everyday moments and special occasions.`,
    href: `/jewelry?collection=venera`,
    imgData: {
      src: `./collections/venera-collection-preview.png`,
      alt: `Venera Collection`
    }
  },
  {
    heading: `Apollo Collection`,
    text: `Unleash the brilliance of bold design with the Apollo Collection. Inspired by the majesty of the sun and the strength of ancient gods, this collection embodies power and radiance. Perfect for making a statement, these pieces merge modern aesthetics with timeless allure.`,
    href: `/jewelry?collection=apollo`,
    imgData: {
      src: `./collections/apollo-collection-preview.png`,
      alt: `Apollo Collection`
    }
  },
  {
    heading: `Didona Collection`,
    text: `Celebrate the essence of romance and grace with the Didona Collection. Drawing from the timeless tales of love and beauty, these delicately designed pieces exude charm and elegance, making them an exquisite choice for those unforgettable moments.`,
    href: `/jewelry?collection=didona`,
    imgData: {
      src: `./collections/didona-collection-preview.png`,
      alt: `Didona Collection`
    }
  },
  {
    heading: `Odysseus Collection`,
    text: `Embark on a journey of discovery with the Odysseus Collection. Inspired by epic adventures and heroic tales, this collection features bold, distinctive designs that capture the spirit of exploration and resilience, perfect for the modern adventurer.`,
    href: `/jewelry?collection=odysseus`,
    imgData: {
      src: `./collections/odysseus-collection-preview.png`,
      alt: `Odysseus Collection`
    }
  }
];
