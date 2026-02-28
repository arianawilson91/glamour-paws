export const LOCATIONS = {
  capeCoral: {
    name: "Cape Coral",
    address: "1715 Cape Coral Pkwy W, #17",
    city: "Cape Coral, FL 33914",
    landmark: "In the Lobster Lady Plaza at Chiquita Blvd & Cape Coral Pkwy W",
    phone: "(239) 225-9665",
    phoneHref: "tel:2392259665",
    mapsUrl: "https://goo.gl/maps/a8GT3BunkBA2",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 6:00 PM",
      Saturday: "8:00 AM - 3:00 PM",
      Sunday: "Closed",
    },
  },
  fortMyers: {
    name: "Fort Myers",
    address: "6810 Shoppes at Plantation Dr, #10",
    city: "Fort Myers, FL 33912",
    landmark: "Shoppes at Plantation Plaza on Daniels Pkwy",
    phone: "(239) 225-9663",
    phoneHref: "tel:2392259663",
    mapsUrl: "https://goo.gl/maps/gX8MKNL2nybEU9tNA",
    hours: {
      Monday: "6:00 AM - 6:00 PM",
      Tuesday: "6:00 AM - 6:00 PM",
      Wednesday: "6:00 AM - 6:00 PM",
      Thursday: "6:00 AM - 6:00 PM",
      Friday: "6:00 AM - 6:00 PM",
      Saturday: "8:00 AM - 4:00 PM",
      Sunday: "Closed",
    },
    features: ["3,200 sq ft", "Fire alarm & sprinkler", "24hr security", "Video surveillance"],
  },
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/MyGlamourPaws",
  instagram: "http://instagram.com/myglamourpaws",
  twitter: "https://twitter.com/myglamourpaws",
} as const;

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
