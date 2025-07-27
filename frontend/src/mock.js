// Mock data for Michango App Landing Page

export const mockData = {
  app: {
    name: "Michango App",
    tagline: "Simplify Event Planning with Smart Contributions",
    description: "The ultimate platform to manage group contributions for events, trips, and celebrations. Share directly to WhatsApp and make planning effortless and transparent.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.michango.app",
    features: [
      "Real-time contribution tracking",
      "WhatsApp sharing integration", 
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
      title: "WhatsApp Integration",
      description: "Share contribution requests and updates directly to WhatsApp groups with one tap.",
      icon: "MessageCircle"
    },
    {
      id: 3,
      title: "Secure Payments",
      description: "Protected payment processing ensures your money is safe and transactions are secure.",
      icon: "Shield"
    },
    {
      id: 4,
      title: "Real-time Updates",
      description: "Get instant notifications and share progress updates with your WhatsApp groups.",
      icon: "Zap"
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
      content: "Michango made organizing our company retreat so much easier. The WhatsApp sharing feature kept everyone updated instantly!",
      rating: 5
    },
    {
      id: 2,
      name: "David Kimani",
      role: "Wedding Planner",
      content: "Being able to share contribution requests directly to our WhatsApp group saved us so much time. No more awkward money conversations!",
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