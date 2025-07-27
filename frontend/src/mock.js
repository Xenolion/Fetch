// Mock data for Michango App Landing Page

export const mockData = {
  app: {
    name: "Michango App",
    tagline: "Simplify Event Planning with Smart Contributions",
    description: "The ultimate platform to manage group contributions for events, trips, and celebrations. Make planning effortless and transparent.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.michango.app",
    features: [
      "Real-time contribution tracking",
      "Transparent expense management", 
      "Group event planning",
      "Secure payment processing"
    ]
  },
  services: [
    {
      id: 1,
      title: "Event Contribution Management",
      description: "Seamlessly collect and track contributions from group members for any event or occasion.",
      icon: "Users"
    },
    {
      id: 2,
      title: "Expense Transparency",
      description: "Keep everyone informed with real-time updates on how contributions are being used.",
      icon: "PieChart"
    },
    {
      id: 3,
      title: "Secure Payments",
      description: "Protected payment processing ensures your money is safe and transactions are secure.",
      icon: "Shield"
    },
    {
      id: 4,
      title: "Group Planning Tools",
      description: "Collaborate with your group to plan the perfect event with built-in planning features.",
      icon: "Calendar"
    }
  ],
  contact: {
    email: "hello@michangoapp.com",
    phone: "+254 700 123 456",
    address: "Nairobi, Kenya",
    coordinates: {
      lat: -1.2921,
      lng: 36.8219
    },
    businessHours: "Monday - Friday: 9:00 AM - 6:00 PM"
  },
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Event Organizer",
      content: "Michango made organizing our company retreat so much easier. Everyone could see exactly where their money was going!",
      rating: 5
    },
    {
      id: 2,
      name: "David Kimani",
      role: "Wedding Planner",
      content: "This app transformed how we handle group contributions. No more awkward money conversations!",
      rating: 5
    }
  ],
  stats: {
    activeUsers: "10,000+",
    eventsManaged: "5,000+",
    totalContributions: "$2M+"
  }
};

// Mock function to simulate waitlist signup
export const mockWaitlistSignup = (phoneNumber) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Waitlist signup for phone: ${phoneNumber}`);
      resolve({
        success: true,
        message: "Thank you! You've been added to our iOS waitlist. We'll notify you when the app is available!"
      });
    }, 1000);
  });
};