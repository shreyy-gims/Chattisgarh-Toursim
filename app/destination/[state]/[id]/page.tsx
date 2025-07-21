"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Star, Users, Camera, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useStateContext } from "@/contexts/state-context"

const destinationDetails = {
  chhattisgarh: {
    1: {
      title: "Chitrakote Falls",
      description:
        "India's widest waterfall, often called the 'Niagara of India'. Experience the thunderous roar and misty spray of this magnificent natural wonder.",
      longDescription:
        "Chitrakote Falls is a spectacular natural wonder located in the Bastar district of Chhattisgarh. During monsoon season, the waterfall spans nearly 300 meters in width, making it the widest waterfall in India. The falls cascade down from a height of 30 meters, creating a mesmerizing curtain of water that produces a thunderous roar audible from kilometers away. The surrounding area is rich in biodiversity, with dense forests home to various wildlife species. The best time to visit is during the monsoon and post-monsoon months when the water flow is at its peak.",
      images: [
        "/chitrakote.jpg",
        "/placeholder.svg?height=400&width=600&text=Chitrakote+Falls+Monsoon",
        "/placeholder.svg?height=400&width=600&text=Chitrakote+Falls+Rainbow",
        "/placeholder.svg?height=400&width=600&text=Chitrakote+Falls+Sunset",
      ],
      category: "waterfall",
      location: "Bastar, Chhattisgarh",
      rating: 4.8,
      reviews: 245,
      duration: "4-6 hours",
      bestTime: "July to February",
      entryFee: "₹20 per person",
      timings: "6:00 AM - 6:00 PM",
      highlights: [
        "India's widest waterfall",
        "Rainbow formation during sunny days",
        "Boat rides available",
        "Photography paradise",
        "Tribal culture nearby",
      ],
      activities: ["Photography", "Boating", "Nature walks", "Bird watching", "Cultural tours"],
      nearbyAttractions: ["Tirathgarh Falls - 45 km", "Kanger Valley National Park - 60 km", "Bastar Palace - 40 km"],
      howToReach:
        "Chitrakote Falls is located 39 km from Jagdalpur. The nearest airport is Raipur (300 km) and the nearest railway station is Jagdalpur (39 km). Regular buses and taxis are available from Jagdalpur.",
      accommodation: [
        "CGSTDC Tourist Lodge, Jagdalpur",
        "Hotel Rainbow, Jagdalpur",
        "Various budget hotels in Jagdalpur",
      ],
    },
    2: {
      title: "Tirathgarh Falls",
      description:
        "A spectacular multi-tiered waterfall cascading down from a height of 300 feet, surrounded by lush green forests.",
      longDescription:
        "Tirathgarh Falls is one of the most beautiful waterfalls in Chhattisgarh, located in the Kanger Valley National Park. The waterfall cascades down in multiple tiers from a height of approximately 300 feet, creating a series of natural pools. The falls are surrounded by dense forests that are home to diverse flora and fauna. The area offers excellent trekking opportunities and is a paradise for nature photographers. The sound of cascading water combined with the chirping of birds creates a symphony that soothes the soul.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Tirathgarh+Falls+Main",
        "/placeholder.svg?height=400&width=600&text=Tirathgarh+Falls+Tiers",
        "/placeholder.svg?height=400&width=600&text=Tirathgarh+Falls+Pool",
        "/placeholder.svg?height=400&width=600&text=Tirathgarh+Falls+Trek",
      ],
      category: "waterfall",
      location: "Kanger Valley, Bastar",
      rating: 4.6,
      reviews: 189,
      duration: "3-4 hours",
      bestTime: "October to March",
      entryFee: "₹25 per person",
      timings: "7:00 AM - 5:00 PM",
      highlights: [
        "Multi-tiered waterfall",
        "Natural swimming pools",
        "Trekking trails",
        "Rich biodiversity",
        "Photography spots",
      ],
      activities: ["Trekking", "Swimming", "Photography", "Nature walks", "Bird watching"],
      nearbyAttractions: ["Kanger Valley National Park - 5 km", "Kutumsar Caves - 10 km", "Chitrakote Falls - 45 km"],
      howToReach:
        "Located 35 km from Jagdalpur via Kanger Valley National Park. The nearest airport is Raipur and railway station is Jagdalpur. Local transport available from Jagdalpur.",
      accommodation: ["Forest Rest House, Kanger Valley", "Hotels in Jagdalpur (35 km)", "Eco-tourism camps"],
    },
  },
  rajasthan: {
    1: {
      title: "Jaipur City Palace",
      description:
        "Magnificent royal palace complex showcasing Rajasthani and Mughal architecture with stunning courtyards and museums.",
      longDescription:
        "The City Palace in Jaipur is a magnificent complex of palaces, gardens, and courtyards that served as the seat of the Maharaja of Jaipur. Built in the 18th century, it represents a perfect blend of Rajasthani and Mughal architecture. The palace complex houses several museums displaying royal artifacts, weapons, costumes, and paintings. The Chandra Mahal, still home to the royal family, offers guided tours of its opulent rooms. The palace's intricate architecture, with its carved pillars, beautiful frescoes, and ornate gates, tells the story of Jaipur's rich royal heritage.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Jaipur+City+Palace+Main",
        "/placeholder.svg?height=400&width=600&text=City+Palace+Courtyard",
        "/placeholder.svg?height=400&width=600&text=City+Palace+Museum",
        "/placeholder.svg?height=400&width=600&text=City+Palace+Architecture",
      ],
      category: "temple",
      location: "Jaipur, Rajasthan",
      rating: 4.9,
      reviews: 1245,
      duration: "3-4 hours",
      bestTime: "October to March",
      entryFee: "₹200 for Indians, ₹500 for foreigners",
      timings: "9:30 AM - 5:00 PM",
      highlights: [
        "Chandra Mahal palace",
        "Mubarak Mahal museum",
        "Diwan-i-Khas hall",
        "Royal artifacts collection",
        "Peacock Gate",
      ],
      activities: ["Palace tour", "Museum visit", "Photography", "Cultural shows", "Shopping at palace shops"],
      nearbyAttractions: ["Hawa Mahal - 1 km", "Jantar Mantar - 0.5 km", "Amber Fort - 11 km"],
      howToReach:
        "Located in the heart of Jaipur city. Nearest airport is Jaipur International Airport (12 km). Jaipur Junction railway station is 6 km away. Local buses, auto-rickshaws, and taxis are readily available.",
      accommodation: ["Taj Rambagh Palace", "The Oberoi Rajvilas", "Various heritage hotels in Jaipur"],
    },
    2: {
      title: "Udaipur Lake Palace",
      description:
        "Floating marble palace on Lake Pichola, now a luxury hotel offering breathtaking views and royal experiences.",
      longDescription:
        "The Lake Palace, also known as Jag Niwas, is an architectural marvel built in 1746 on a natural island in Lake Pichola. This white marble palace appears to float on the lake's surface, creating one of the most romantic and picturesque settings in the world. Originally built as a summer palace for the royal family, it has been converted into a luxury hotel while maintaining its royal grandeur. The palace features beautiful courtyards, terraces, and gardens, all offering stunning views of the lake and surrounding Aravalli hills. The intricate marble work, mirror mosaics, and traditional Rajasthani architecture make it a masterpiece of Indian craftsmanship.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Lake+Palace+Udaipur+Main",
        "/placeholder.svg?height=400&width=600&text=Lake+Palace+Sunset",
        "/placeholder.svg?height=400&width=600&text=Lake+Palace+Interior",
        "/placeholder.svg?height=400&width=600&text=Lake+Palace+Courtyard",
      ],
      category: "temple",
      location: "Udaipur, Rajasthan",
      rating: 4.8,
      reviews: 892,
      duration: "2-3 hours (day visit)",
      bestTime: "October to March",
      entryFee: "Boat ride ₹400, Palace visit varies",
      timings: "Boat services: 9:00 AM - 6:00 PM",
      highlights: [
        "Floating marble palace",
        "Lake Pichola views",
        "Royal architecture",
        "Luxury dining",
        "Sunset views",
      ],
      activities: ["Boat rides", "Palace tour", "Fine dining", "Photography", "Sunset viewing"],
      nearbyAttractions: ["City Palace Udaipur - 2 km", "Jag Mandir - 1 km", "Saheliyon Ki Bari - 3 km"],
      howToReach:
        "Accessible only by boat from City Palace jetty in Udaipur. Nearest airport is Maharana Pratap Airport (22 km). Udaipur City railway station is 4 km from the jetty.",
      accommodation: ["Taj Lake Palace (on-site)", "The Oberoi Udaivilas", "Various heritage hotels in Udaipur"],
    },
  },
  kerala: {
    1: {
      title: "Athirappilly Falls",
      description: "Kerala's largest waterfall, known as the 'Niagara of India', surrounded by lush tropical forests.",
      longDescription:
        "Athirappilly Falls, often called the 'Niagara of India', is the largest waterfall in Kerala and one of the most spectacular natural attractions in South India. Located on the Chalakudy River, the falls cascade down from a height of 80 feet, creating a breathtaking spectacle especially during the monsoon season. The surrounding area is part of the Sholayar forest range, home to diverse wildlife including elephants, tigers, leopards, and various species of birds. The falls have been featured in numerous Indian films and are a popular destination for nature lovers, photographers, and adventure enthusiasts.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Athirappilly+Falls+Main",
        "/placeholder.svg?height=400&width=600&text=Athirappilly+Monsoon",
        "/placeholder.svg?height=400&width=600&text=Athirappilly+Rainbow",
        "/placeholder.svg?height=400&width=600&text=Athirappilly+Forest",
      ],
      category: "waterfall",
      location: "Thrissur, Kerala",
      rating: 4.8,
      reviews: 456,
      duration: "4-5 hours",
      bestTime: "June to January",
      entryFee: "₹30 per person",
      timings: "8:00 AM - 6:00 PM",
      highlights: [
        "Kerala's largest waterfall",
        "Tropical forest setting",
        "Wildlife spotting",
        "Film shooting location",
        "Trekking trails",
      ],
      activities: ["Waterfall viewing", "Trekking", "Wildlife photography", "Nature walks", "River bathing"],
      nearbyAttractions: ["Vazhachal Falls - 5 km", "Charpa Falls - 2 km", "Thumboormuzhi Dam - 15 km"],
      howToReach:
        "Located 60 km from Thrissur and 70 km from Kochi. Nearest airport is Kochi International Airport. Chalakudy railway station is 30 km away. Regular buses and taxis available.",
      accommodation: [
        "Rainforest Resort, Athirappilly",
        "River Retreat Heritage Ayurvedic Resort",
        "Various resorts near the falls",
      ],
    },
  },
  himachal: {
    1: {
      title: "Jogini Falls",
      description: "Beautiful waterfall near Manali offering trekking opportunities and stunning mountain views.",
      longDescription:
        "Jogini Falls is a hidden gem located just 3 km from Manali, offering a perfect blend of adventure and natural beauty. The waterfall cascades down from a height of 160 feet, surrounded by lush green forests and snow-capped mountains. The trek to Jogini Falls is relatively easy and takes about 30-45 minutes through apple orchards and pine forests. The area around the falls is considered sacred by locals, with a small temple dedicated to Jogini Mata nearby. The falls are particularly beautiful during spring when the surrounding area is covered with wildflowers, and in winter when the water freezes creating ice formations.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Jogini+Falls+Main",
        "/placeholder.svg?height=400&width=600&text=Jogini+Falls+Trek",
        "/placeholder.svg?height=400&width=600&text=Jogini+Falls+Winter",
        "/placeholder.svg?height=400&width=600&text=Jogini+Falls+Temple",
      ],
      category: "waterfall",
      location: "Manali, Himachal Pradesh",
      rating: 4.6,
      reviews: 234,
      duration: "2-3 hours",
      bestTime: "March to June, September to November",
      entryFee: "Free",
      timings: "Sunrise to Sunset",
      highlights: [
        "Easy trekking trail",
        "Mountain views",
        "Sacred temple nearby",
        "Apple orchards",
        "Photography spots",
      ],
      activities: ["Trekking", "Photography", "Temple visit", "Nature walks", "Meditation"],
      nearbyAttractions: ["Vashisht Hot Springs - 2 km", "Hadimba Temple - 4 km", "Old Manali - 3 km"],
      howToReach:
        "3 km from Manali town center. Nearest airport is Bhuntar Airport (50 km). Manali bus stand is the nearest transport hub. Local taxis and auto-rickshaws available.",
      accommodation: ["Hotels in Manali (3 km)", "Vashisht village homestays", "Various resorts in Manali"],
    },
  },
  goa: {
    1: {
      title: "Dudhsagar Falls",
      description: "Spectacular four-tiered waterfall cascading from 310 meters, accessible by train or trek.",
      longDescription:
        "Dudhsagar Falls, meaning 'Sea of Milk', is one of India's tallest waterfalls and Goa's most spectacular natural attraction. Located on the Mandovi River in the Bhagwan Mahavir National Park, the falls cascade down in four tiers from a height of 310 meters (1017 feet). The waterfall gets its name from its milky white appearance as water gushes down the rocky terrain. The area is rich in biodiversity, being part of the Western Ghats, and offers excellent opportunities for wildlife spotting. The famous railway bridge over the falls provides a unique vantage point, and the train journey through the falls is an unforgettable experience.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Dudhsagar+Falls+Main",
        "/placeholder.svg?height=400&width=600&text=Dudhsagar+Train",
        "/placeholder.svg?height=400&width=600&text=Dudhsagar+Trek",
        "/placeholder.svg?height=400&width=600&text=Dudhsagar+Pool",
      ],
      category: "waterfall",
      location: "Mollem, Goa",
      rating: 4.7,
      reviews: 789,
      duration: "Full day",
      bestTime: "June to January",
      entryFee: "₹30 per person (forest entry)",
      timings: "6:00 AM - 5:00 PM",
      highlights: [
        "India's tallest waterfall",
        "Train journey through falls",
        "Four-tiered cascade",
        "Wildlife sanctuary",
        "Trekking adventure",
      ],
      activities: ["Train ride", "Trekking", "Swimming", "Wildlife spotting", "Photography"],
      nearbyAttractions: [
        "Bhagwan Mahavir National Park - 0 km",
        "Tambdi Surla Temple - 15 km",
        "Spice Plantations - 10 km",
      ],
      howToReach:
        "60 km from Panaji. Accessible by train (Konkan Railway) or by road to Collem, then trek/jeep safari. Nearest airport is Goa International Airport (60 km).",
      accommodation: ["Forest Rest House, Mollem", "Resorts in Mollem", "Hotels in Panaji (60 km)"],
    },
  },
  maharashtra: {
    1: {
      title: "Ajanta Caves",
      description:
        "UNESCO World Heritage site featuring ancient Buddhist rock-cut caves with exquisite paintings and sculptures.",
      longDescription:
        "The Ajanta Caves are a collection of 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. These caves are masterpieces of Buddhist religious art that influenced Indian art for centuries. The caves contain some of the finest examples of ancient Indian art, particularly expressive paintings that present emotions through gesture, pose, and form. The caves were carved out of volcanic lava rock in the Waghora river valley. They were abandoned around 650 CE and forgotten until their rediscovery by a British officer in 1819. The site is now protected as a UNESCO World Heritage Site.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Ajanta+Caves+Main",
        "/placeholder.svg?height=400&width=600&text=Ajanta+Paintings",
        "/placeholder.svg?height=400&width=600&text=Ajanta+Buddha",
        "/placeholder.svg?height=400&width=600&text=Ajanta+Architecture",
      ],
      category: "temple",
      location: "Aurangabad, Maharashtra",
      rating: 4.9,
      reviews: 1567,
      duration: "4-5 hours",
      bestTime: "October to March",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      timings: "9:00 AM - 5:30 PM (Closed on Mondays)",
      highlights: [
        "UNESCO World Heritage Site",
        "Ancient Buddhist paintings",
        "Rock-cut architecture",
        "Historical significance",
        "Artistic masterpieces",
      ],
      activities: ["Cave exploration", "Photography", "Historical tours", "Art appreciation", "Cultural learning"],
      nearbyAttractions: ["Ellora Caves - 100 km", "Aurangabad Caves - 12 km", "Bibi Ka Maqbara - 104 km"],
      howToReach:
        "Located 104 km from Aurangabad. Nearest airport is Aurangabad Airport. Jalgaon railway station is 60 km away. Regular buses and taxis available from Aurangabad.",
      accommodation: ["MTDC Holiday Resort, Ajanta", "Hotels in Aurangabad", "Various budget accommodations"],
    },
    2: {
      title: "Ellora Caves",
      description:
        "Magnificent rock-cut caves representing Hindu, Buddhist, and Jain monuments carved from basaltic cliffs.",
      longDescription:
        "The Ellora Caves are a UNESCO World Heritage Site featuring 34 monasteries and temples extending over 2 km. These caves represent the epitome of Indian rock-cut architecture, carved out of the vertical face of the Charanandri hills between the 6th and 10th centuries CE. The caves are divided into three groups representing Buddhism (caves 1-12), Hinduism (caves 13-29), and Jainism (caves 30-34). The most famous is Cave 16, known as the Kailasa temple, which is the largest single monolithic rock excavation in the world. The site demonstrates the religious harmony that existed in ancient India.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Ellora+Caves+Main",
        "/placeholder.svg?height=400&width=600&text=Kailasa+Temple",
        "/placeholder.svg?height=400&width=600&text=Ellora+Sculptures",
        "/placeholder.svg?height=400&width=600&text=Ellora+Architecture",
      ],
      category: "temple",
      location: "Aurangabad, Maharashtra",
      rating: 4.8,
      reviews: 1234,
      duration: "5-6 hours",
      bestTime: "October to March",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      timings: "6:00 AM - 6:00 PM",
      highlights: [
        "UNESCO World Heritage Site",
        "Kailasa Temple",
        "Multi-religious caves",
        "Monolithic architecture",
        "Ancient sculptures",
      ],
      activities: ["Cave exploration", "Photography", "Historical tours", "Architecture study", "Cultural learning"],
      nearbyAttractions: ["Ajanta Caves - 100 km", "Daulatabad Fort - 15 km", "Grishneshwar Temple - 2 km"],
      howToReach:
        "Located 30 km from Aurangabad. Nearest airport is Aurangabad Airport. Aurangabad railway station is 30 km away. Regular buses and taxis available.",
      accommodation: ["MTDC Holiday Resort, Ellora", "Hotels in Aurangabad", "Various heritage hotels"],
    },
  },
  "madhya-pradesh": {
    1: {
      title: "Khajuraho Temples",
      description:
        "UNESCO World Heritage site famous for intricately carved temples showcasing medieval Indian art and architecture.",
      longDescription:
        "The Khajuraho Group of Monuments is a collection of Hindu and Jain temples famous for their nagara-style architectural symbolism and erotic sculptures. Built between 950 and 1050 CE by the Chandela dynasty, these temples represent the pinnacle of medieval Indian architecture. Originally there were 85 temples, of which only 25 survive today. The temples are divided into three groups: Western, Eastern, and Southern. The Western group, which includes the famous Kandariya Mahadeva Temple, is the largest and most ornate. The intricate carvings depict various aspects of life including spiritual teachings, meditation, kinship, wrestling, royalty, and most famously, erotic art.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Khajuraho+Temples+Main",
        "/placeholder.svg?height=400&width=600&text=Khajuraho+Sculptures",
        "/placeholder.svg?height=400&width=600&text=Kandariya+Mahadeva",
        "/placeholder.svg?height=400&width=600&text=Khajuraho+Architecture",
      ],
      category: "temple",
      location: "Khajuraho, Madhya Pradesh",
      rating: 4.9,
      reviews: 1876,
      duration: "4-5 hours",
      bestTime: "October to March",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      timings: "Sunrise to Sunset",
      highlights: [
        "UNESCO World Heritage Site",
        "Erotic sculptures",
        "Nagara architecture",
        "Chandela dynasty heritage",
        "Light and sound show",
      ],
      activities: ["Temple tours", "Photography", "Cultural shows", "Archaeological study", "Art appreciation"],
      nearbyAttractions: ["Panna National Park - 45 km", "Raneh Falls - 20 km", "Ajaigarh Fort - 80 km"],
      howToReach:
        "Khajuraho has its own airport with regular flights from Delhi and Mumbai. Nearest railway station is Mahoba (63 km). Regular buses and taxis available from major cities.",
      accommodation: ["Taj Chandela", "The Lalit Temple View", "Various heritage and budget hotels"],
    },
    2: {
      title: "Sanchi Stupa",
      description:
        "Ancient Buddhist monument and UNESCO World Heritage site with the oldest stone structures in India.",
      longDescription:
        "The Sanchi Stupa is one of the oldest stone structures in India and an important Buddhist pilgrimage site. Built by Emperor Ashoka in the 3rd century BCE, it commemorates the Buddha and houses his relics. The Great Stupa at Sanchi is the most famous of the structures here, with its hemispherical dome representing the cosmic mountain. The site contains several stupas, monasteries, temples, and pillars dating from the 3rd century BCE to the 12th century CE. The intricate carvings on the gateways (toranas) depict scenes from the Buddha's life and Jataka tales. The site was abandoned after the 13th century and rediscovered by British archaeologists in 1818.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Sanchi+Stupa+Main",
        "/placeholder.svg?height=400&width=600&text=Sanchi+Gateway",
        "/placeholder.svg?height=400&width=600&text=Sanchi+Carvings",
        "/placeholder.svg?height=400&width=600&text=Sanchi+Monastery",
      ],
      category: "temple",
      location: "Sanchi, Madhya Pradesh",
      rating: 4.7,
      reviews: 567,
      duration: "2-3 hours",
      bestTime: "October to March",
      entryFee: "₹30 for Indians, ₹500 for foreigners",
      timings: "Sunrise to Sunset",
      highlights: [
        "UNESCO World Heritage Site",
        "Emperor Ashoka's creation",
        "Buddhist architecture",
        "Ancient stone carvings",
        "Archaeological museum",
      ],
      activities: ["Historical tours", "Photography", "Museum visit", "Meditation", "Archaeological study"],
      nearbyAttractions: ["Udayagiri Caves - 13 km", "Vidisha - 10 km", "Gyaraspur - 40 km"],
      howToReach:
        "Located 46 km from Bhopal. Nearest airport is Bhopal Airport. Vidisha railway station is 10 km away. Regular buses and taxis available from Bhopal.",
      accommodation: ["Tourist facilities in Sanchi", "Hotels in Bhopal (46 km)", "Various budget accommodations"],
    },
  },
  odisha: {
    1: {
      title: "Jagannath Temple Puri",
      description: "Sacred Hindu temple dedicated to Lord Jagannath, famous for the annual Rath Yatra festival.",
      longDescription:
        "The Jagannath Temple in Puri is one of the most sacred Hindu temples and a major pilgrimage destination. Built in the 12th century by King Anantavarman Chodaganga Deva, the temple is dedicated to Lord Jagannath, a form of Lord Vishnu. The temple is famous for its annual Rath Yatra (Chariot Festival), where the deities are taken out in grand processions on elaborately decorated chariots. The temple's architecture is a fine example of Kalinga style, with its towering spire (vimana) reaching 214 feet. The temple kitchen is considered the world's largest, feeding thousands of devotees daily. Non-Hindus are not allowed inside the main temple, but the spiritual atmosphere of the town is palpable.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Jagannath+Temple+Main",
        "/placeholder.svg?height=400&width=600&text=Rath+Yatra",
        "/placeholder.svg?height=400&width=600&text=Temple+Architecture",
        "/placeholder.svg?height=400&width=600&text=Temple+Spire",
      ],
      category: "temple",
      location: "Puri, Odisha",
      rating: 4.9,
      reviews: 3456,
      duration: "2-3 hours",
      bestTime: "October to March",
      entryFee: "Free (Donations welcome)",
      timings: "5:00 AM - 12:00 AM (with breaks)",
      highlights: [
        "Sacred Char Dham pilgrimage",
        "Annual Rath Yatra festival",
        "Kalinga architecture",
        "World's largest kitchen",
        "Spiritual significance",
      ],
      activities: [
        "Temple darshan",
        "Rath Yatra participation",
        "Beach visit",
        "Cultural exploration",
        "Spiritual practices",
      ],
      nearbyAttractions: ["Puri Beach - 2 km", "Konark Sun Temple - 35 km", "Chilika Lake - 50 km"],
      howToReach:
        "Puri has its own railway station well connected to major cities. Nearest airport is Bhubaneswar (60 km). Regular buses and taxis available from Bhubaneswar.",
      accommodation: ["Hotel Gandhara", "Mayfair Heritage", "Various pilgrim accommodations and hotels"],
    },
    2: {
      title: "Konark Sun Temple",
      description:
        "UNESCO World Heritage site, magnificent 13th-century temple designed as a colossal chariot of the Sun God.",
      longDescription:
        "The Konark Sun Temple, also known as the Black Pagoda, is a 13th-century CE sun temple built by King Narasimhadeva I of the Eastern Ganga Dynasty. The temple is conceived as a gigantic chariot with elaborately carved stone wheels, pillars, and walls. The entire temple is designed in the form of a colossal chariot dedicated to the Sun God, Surya, with 24 wheels and pulled by seven spirited horses. The temple is renowned for its exquisite stone carvings that cover the entire structure, depicting various aspects of life, celestial beings, animals, and erotic sculptures. The temple's architecture represents the pinnacle of Kalinga architecture and is considered one of the finest examples of temple architecture in India.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Konark+Sun+Temple+Main",
        "/placeholder.svg?height=400&width=600&text=Konark+Wheels",
        "/placeholder.svg?height=400&width=600&text=Konark+Sculptures",
        "/placeholder.svg?height=400&width=600&text=Konark+Architecture",
      ],
      category: "temple",
      location: "Konark, Odisha",
      rating: 4.8,
      reviews: 1567,
      duration: "2-3 hours",
      bestTime: "October to March",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      timings: "6:00 AM - 8:00 PM",
      highlights: [
        "UNESCO World Heritage Site",
        "Chariot-shaped temple",
        "Intricate stone carvings",
        "Kalinga architecture",
        "Archaeological museum",
      ],
      activities: ["Temple exploration", "Photography", "Museum visit", "Cultural tours", "Archaeological study"],
      nearbyAttractions: ["Chandrabhaga Beach - 3 km", "Jagannath Temple Puri - 35 km", "Ramchandi Temple - 8 km"],
      howToReach:
        "Located 65 km from Bhubaneswar and 35 km from Puri. Nearest airport is Bhubaneswar. Regular buses and taxis available from both cities.",
      accommodation: ["Panthanivas Konark", "Various hotels in Puri (35 km)", "Beach resorts nearby"],
    },
  },
  jharkhand: {
    1: {
      title: "Hundru Falls",
      description: "Spectacular waterfall on river Subarnarekha, cascading from 320 feet height near Ranchi.",
      longDescription:
        "Hundru Falls is one of the most spectacular waterfalls in Jharkhand, located about 45 km from Ranchi. The waterfall is formed by the river Subarnarekha as it cascades down from a height of 320 feet (98 meters). The falls are particularly impressive during the monsoon season when the water flow is at its peak. The surrounding area is covered with dense forests and rocky terrain, making it a popular destination for nature lovers and adventure enthusiasts. The falls create a natural pool at the bottom, which is ideal for swimming during the appropriate season. The site offers excellent opportunities for photography and is a favorite spot for picnics and day trips from Ranchi.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Hundru+Falls+Main",
        "/placeholder.svg?height=400&width=600&text=Hundru+Falls+Monsoon",
        "/placeholder.svg?height=400&width=600&text=Hundru+Falls+Pool",
        "/placeholder.svg?height=400&width=600&text=Hundru+Falls+Rocks",
      ],
      category: "waterfall",
      location: "Ranchi, Jharkhand",
      rating: 4.6,
      reviews: 456,
      duration: "3-4 hours",
      bestTime: "July to February",
      entryFee: "₹10 per person",
      timings: "6:00 AM - 6:00 PM",
      highlights: [
        "320 feet high waterfall",
        "Natural swimming pool",
        "Rocky terrain",
        "Photography paradise",
        "Monsoon spectacle",
      ],
      activities: ["Waterfall viewing", "Swimming", "Photography", "Trekking", "Picnicking"],
      nearbyAttractions: ["Jonha Falls - 40 km", "Dassam Falls - 40 km", "Ranchi Lake - 45 km"],
      howToReach:
        "Located 45 km from Ranchi. Nearest airport is Birsa Munda Airport, Ranchi. Ranchi railway station is 45 km away. Regular buses and taxis available from Ranchi.",
      accommodation: ["Hotels in Ranchi (45 km)", "Forest guest houses", "Various budget accommodations"],
    },
    2: {
      title: "Dassam Falls",
      description: "Beautiful waterfall formed by river Kanchi, popular picnic spot with natural swimming pools.",
      longDescription:
        "Dassam Falls, also known as Dassam Ghagh, is a beautiful waterfall located about 40 km from Ranchi. The waterfall is formed by the river Kanchi as it plunges down from a height of 144 feet (44 meters). The falls are surrounded by dense forests and create a series of natural pools at different levels, making it an ideal spot for swimming and relaxation. The area around the falls is rich in biodiversity and offers excellent opportunities for nature photography. During the monsoon season, the falls become more spectacular with increased water flow. The site is easily accessible and has become a popular destination for day trips, picnics, and weekend getaways from Ranchi.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Dassam+Falls+Main",
        "/placeholder.svg?height=400&width=600&text=Dassam+Falls+Pools",
        "/placeholder.svg?height=400&width=600&text=Dassam+Falls+Forest",
        "/placeholder.svg?height=400&width=600&text=Dassam+Falls+Monsoon",
      ],
      category: "waterfall",
      location: "Ranchi, Jharkhand",
      rating: 4.5,
      reviews: 234,
      duration: "2-3 hours",
      bestTime: "July to March",
      entryFee: "₹5 per person",
      timings: "6:00 AM - 6:00 PM",
      highlights: [
        "144 feet waterfall",
        "Natural swimming pools",
        "Dense forest setting",
        "Easy accessibility",
        "Picnic destination",
      ],
      activities: ["Swimming", "Photography", "Picnicking", "Nature walks", "Relaxation"],
      nearbyAttractions: ["Hundru Falls - 40 km", "Jonha Falls - 25 km", "Taimara Falls - 15 km"],
      howToReach:
        "Located 40 km from Ranchi on Ranchi-Jamshedpur highway. Nearest airport is Birsa Munda Airport. Regular buses and taxis available from Ranchi.",
      accommodation: ["Hotels in Ranchi (40 km)", "Local guest houses", "Various accommodations in Ranchi"],
    },
  },
  "andhra-pradesh": {
    1: {
      title: "Tirupati Balaji Temple",
      description: "World's most visited Hindu temple dedicated to Lord Venkateswara, located on the Tirumala hills.",
      longDescription:
        "The Sri Venkateswara Temple at Tirumala is one of the most sacred and visited Hindu temples in the world. Located on the Tirumala hills in the Eastern Ghats, the temple is dedicated to Lord Venkateswara, a form of Lord Vishnu. The temple receives millions of pilgrims annually, making it the richest temple in the world in terms of donations received. The temple's architecture is a fine example of Dravidian style, with its towering gopurams and intricate carvings. The main deity is believed to be self-manifested (Swayambhu) and is adorned with precious jewels and ornaments. The temple's prasadam, especially the famous Tirupati laddu, is considered highly sacred. The temple also runs various charitable activities including free meals, education, and healthcare services.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Tirupati+Temple+Main",
        "/placeholder.svg?height=400&width=600&text=Tirumala+Hills",
        "/placeholder.svg?height=400&width=600&text=Temple+Gopuram",
        "/placeholder.svg?height=400&width=600&text=Temple+Interior",
      ],
      category: "temple",
      location: "Tirupati, Andhra Pradesh",
      rating: 4.9,
      reviews: 5678,
      duration: "4-6 hours (including travel)",
      bestTime: "September to March",
      entryFee: "Free (Special darshan tickets available)",
      timings: "2:30 AM - 1:00 AM (next day)",
      highlights: [
        "World's richest temple",
        "Most visited Hindu temple",
        "Dravidian architecture",
        "Sacred Tirumala hills",
        "Famous Tirupati laddu",
      ],
      activities: ["Temple darshan", "Hill climbing", "Spiritual practices", "Cultural exploration", "Pilgrimage"],
      nearbyAttractions: ["Sri Kapileswara Swamy Temple - 5 km", "Chandragiri Fort - 15 km", "Talakona Falls - 50 km"],
      howToReach:
        "Tirupati has its own airport and railway station. The temple is located on Tirumala hills, accessible by road (ghat road) or special buses. Regular buses and taxis available.",
      accommodation: ["TTD guest houses", "Various hotels in Tirupati", "Dharamshala accommodations"],
    },
    2: {
      title: "Araku Valley",
      description: "Scenic hill station known for coffee plantations, tribal culture, and pleasant climate.",
      longDescription:
        "Araku Valley is a picturesque hill station located in the Eastern Ghats of Andhra Pradesh, about 120 km from Visakhapatnam. Known as the 'Ooty of Andhra Pradesh', this valley is famous for its coffee plantations, pleasant climate, and rich tribal culture. The valley is home to several indigenous tribes who maintain their traditional lifestyle and customs. The area is covered with lush green forests, waterfalls, and coffee estates that produce some of India's finest coffee. The journey to Araku Valley by train is particularly scenic, passing through numerous tunnels and bridges. The valley also houses the Tribal Museum, which showcases the culture and lifestyle of local tribes. The annual Araku Balloon Festival adds to its tourist appeal.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Araku+Valley+Main",
        "/placeholder.svg?height=400&width=600&text=Coffee+Plantations",
        "/placeholder.svg?height=400&width=600&text=Tribal+Culture",
        "/placeholder.svg?height=400&width=600&text=Valley+Views",
      ],
      category: "packages",
      location: "Visakhapatnam, Andhra Pradesh",
      rating: 4.7,
      reviews: 1234,
      duration: "2-3 days",
      bestTime: "October to March",
      entryFee: "No entry fee",
      timings: "Open 24 hours",
      highlights: ["Coffee plantations", "Tribal culture", "Scenic train journey", "Pleasant climate", "Tribal Museum"],
      activities: ["Coffee plantation tours", "Tribal village visits", "Train journey", "Trekking", "Photography"],
      nearbyAttractions: ["Borra Caves - 30 km", "Katiki Waterfalls - 15 km", "Chaparai Water Cascade - 10 km"],
      howToReach:
        "Accessible by train from Visakhapatnam (scenic route) or by road. Nearest airport is Visakhapatnam Airport (120 km). Regular buses and taxis available.",
      accommodation: ["Haritha Valley Resort", "Various hotels and resorts", "Tribal homestays available"],
    },
  },
}

interface PageProps {
  params: {
    state: string
    id: string
  }
}

export default function DestinationDetailPage({ params }: PageProps) {
  const { state, id } = params
  const { selectedState } = useStateContext()

  const stateData = destinationDetails[state as keyof typeof destinationDetails]
  const destination = stateData?.[Number.parseInt(id) as keyof typeof stateData]

  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination Not Found</h1>
          <Link href="/destination">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/destination">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Destinations
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Camera className="h-4 w-4" />
              Photos
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden mb-6">
              <Image
                src={destination.images[0] || "/placeholder.svg"}
                alt={destination.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 right-4 capitalize">{destination.category.replace("-", " ")}</Badge>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {destination.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${destination.title} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{destination.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{destination.rating}</span>
                  <span className="text-muted-foreground">({destination.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-muted-foreground">{destination.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{destination.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Best Time</p>
                    <p className="text-sm text-muted-foreground">{destination.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Entry Fee</p>
                    <p className="text-sm text-muted-foreground">{destination.entryFee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link href="/plan" className="flex-1">
                <Button className="w-full">Plan Your Trip</Button>
              </Link>
              <Button variant="outline" className="flex-1 bg-transparent">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
            <TabsTrigger value="travel">Travel Info</TabsTrigger>
            <TabsTrigger value="stay">Stay</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About {destination.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{destination.longDescription}</p>

                <h4 className="font-semibold mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Visiting Information</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Timings</p>
                    <p className="text-sm text-muted-foreground">{destination.timings}</p>
                  </div>
                  <div>
                    <p className="font-medium">Entry Fee</p>
                    <p className="text-sm text-muted-foreground">{destination.entryFee}</p>
                  </div>
                  <div>
                    <p className="font-medium">Best Time to Visit</p>
                    <p className="text-sm text-muted-foreground">{destination.bestTime}</p>
                  </div>
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{destination.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Things to Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destination.activities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">{activity}</h4>
                    <p className="text-sm text-muted-foreground">
                      Enjoy {activity.toLowerCase()} at {destination.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nearby" className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Nearby Attractions</h3>
            <div className="space-y-4">
              {destination.nearbyAttractions.map((attraction, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{attraction}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="travel" className="mt-6">
            <h3 className="text-xl font-semibold mb-4">How to Reach</h3>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">{destination.howToReach}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stay" className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Where to Stay</h3>
            <div className="space-y-4">
              {destination.accommodation.map((hotel, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span>{hotel}</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
