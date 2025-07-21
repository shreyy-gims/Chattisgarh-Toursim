"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Heart, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { useStateContext } from "@/contexts/state-context"

const stateExperiences = {
  chhattisgarh: [
    {
      id: 1,
      title: "My Magical Journey to Chitrakote Falls",
      summary:
        "An unforgettable experience witnessing the thunderous beauty of India's widest waterfall. The mist, the rainbows, and the sheer power of nature left me speechless.",
      content:
        "I had heard about Chitrakote Falls being called the 'Niagara of India', but nothing prepared me for the actual experience. The sound of the water crashing down could be heard from kilometers away...",
      author: "Priya Sharma",
      authorImage: "/placeholder.svg?height=100&width=100&text=PS",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600&text=Chitrakote+Experience",
      category: "Nature",
      likes: 124,
      comments: 18,
      tags: ["Waterfall", "Bastar", "Photography", "Nature"],
    },
    {
      id: 2,
      title: "Living with the Gond Tribe: A Cultural Immersion",
      summary:
        "Three days spent with a Gond tribal family opened my eyes to a completely different way of life. Their warmth, traditions, and connection with nature was truly inspiring.",
      content:
        "The invitation came unexpectedly. While exploring the villages around Kanker, I met Ramesh, a Gond tribal elder who invited me to stay with his family...",
      author: "Rajesh Kumar",
      authorImage: "/placeholder.svg?height=100&width=100&text=RK",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Gond+Tribe+Experience",
      category: "Culture",
      likes: 89,
      comments: 12,
      tags: ["Tribal Culture", "Gond", "Village Life", "Traditions"],
    },
    {
      id: 3,
      title: "Wildlife Safari at Kanger Valley: Spotting the Elusive Leopard",
      summary:
        "After three attempts, I finally managed to spot a leopard in its natural habitat at Kanger Valley National Park. The patience was worth every moment.",
      content:
        "Dawn was breaking as our jeep entered the dense forests of Kanger Valley. Our guide, Suresh, had promised that today might be the day we spot the leopard...",
      author: "Dr. Meera Patel",
      authorImage: "/placeholder.svg?height=100&width=100&text=MP",
      date: "January 20, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Kanger+Valley+Safari",
      category: "Wildlife",
      likes: 156,
      comments: 24,
      tags: ["Wildlife", "Leopard", "Safari", "Photography"],
    },
  ],
  rajasthan: [
    {
      id: 1,
      title: "Royal Stay at Udaipur's Lake Palace",
      summary:
        "Spending a night at the floating marble palace was like living in a fairy tale. The sunset views over Lake Pichola were absolutely magical.",
      content:
        "As our boat approached the Lake Palace, I couldn't believe this was real. The white marble structure seemed to float on the serene waters of Lake Pichola...",
      author: "Ananya Singh",
      authorImage: "/placeholder.svg?height=100&width=100&text=AS",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Lake+Palace+Experience",
      category: "Luxury",
      likes: 298,
      comments: 45,
      tags: ["Palace", "Udaipur", "Luxury", "Heritage"],
    },
    {
      id: 2,
      title: "Camel Safari in the Thar Desert",
      summary:
        "Three days in the golden sands of Thar Desert with camel companions, starlit nights, and Rajasthani folk music around the campfire.",
      content:
        "The camel caravan started at dawn from Jaisalmer. As we rode deeper into the Thar Desert, the city's sounds faded into peaceful silence...",
      author: "Vikram Rathore",
      authorImage: "/placeholder.svg?height=100&width=100&text=VR",
      date: "February 18, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600&text=Thar+Desert+Safari",
      category: "Adventure",
      likes: 187,
      comments: 32,
      tags: ["Desert", "Camel Safari", "Jaisalmer", "Adventure"],
    },
    {
      id: 3,
      title: "Tiger Spotting at Ranthambore",
      summary:
        "My first tiger sighting at Ranthambore National Park was an adrenaline rush. The majestic big cat appeared just 20 meters from our jeep.",
      content:
        "We had been tracking tiger pugmarks for over an hour when our guide suddenly signaled us to stop. There, emerging from the tall grass, was a magnificent tigress...",
      author: "Kavita Joshi",
      authorImage: "/placeholder.svg?height=100&width=100&text=KJ",
      date: "January 25, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Ranthambore+Tiger",
      category: "Wildlife",
      likes: 234,
      comments: 28,
      tags: ["Tiger", "Ranthambore", "Wildlife", "Safari"],
    },
  ],
  kerala: [
    {
      id: 1,
      title: "Houseboat Journey Through Alleppey Backwaters",
      summary:
        "Floating through Kerala's backwaters on a traditional houseboat was pure serenity. Coconut palms, local fishermen, and endless waterways created perfect tranquility.",
      content:
        "Our houseboat, crafted from bamboo and coir, gently glided through the narrow canals of Alleppey. The rhythmic sound of water against the hull was incredibly soothing...",
      author: "Deepika Nair",
      authorImage: "/placeholder.svg?height=100&width=100&text=DN",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Alleppey+Backwaters",
      category: "Nature",
      likes: 345,
      comments: 52,
      tags: ["Backwaters", "Houseboat", "Alleppey", "Serenity"],
    },
    {
      id: 2,
      title: "Ayurvedic Healing in Kovalam",
      summary:
        "Two weeks of authentic Ayurvedic treatment in Kovalam transformed my health and perspective. The ancient healing methods work wonders.",
      content:
        "The Ayurvedic doctor examined my pulse for what seemed like an eternity before prescribing a personalized treatment plan. Little did I know this would change my life...",
      author: "Ramesh Pillai",
      authorImage: "/placeholder.svg?height=100&width=100&text=RP",
      date: "February 12, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600&text=Kerala+Ayurveda",
      category: "Wellness",
      likes: 189,
      comments: 31,
      tags: ["Ayurveda", "Healing", "Kovalam", "Wellness"],
    },
    {
      id: 3,
      title: "Tea Plantation Trek in Munnar",
      summary:
        "Trekking through Munnar's rolling tea gardens at sunrise was breathtaking. The mist-covered hills and fresh mountain air were rejuvenating.",
      content:
        "We started our trek at 5 AM, just as the first rays of sunlight began to pierce through the morning mist. The tea gardens stretched endlessly across the hills...",
      author: "Arjun Menon",
      authorImage: "/placeholder.svg?height=100&width=100&text=AM",
      date: "January 30, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Munnar+Tea+Gardens",
      category: "Adventure",
      likes: 267,
      comments: 38,
      tags: ["Tea Gardens", "Munnar", "Trekking", "Hills"],
    },
  ],
  himachal: [
    {
      id: 1,
      title: "Spiti Valley: Land of Lamas and Monasteries",
      summary:
        "Journey through the high-altitude desert of Spiti Valley was otherworldly. Ancient monasteries, friendly locals, and stunning landscapes at every turn.",
      content:
        "The road to Spiti Valley is not for the faint-hearted, but the destination makes every hairpin turn worth it. At 12,000 feet, the air is thin but the views are infinite...",
      author: "Rohit Sharma",
      authorImage: "/placeholder.svg?height=100&width=100&text=RS",
      date: "March 8, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg?height=400&width=600&text=Spiti+Valley",
      category: "Adventure",
      likes: 412,
      comments: 67,
      tags: ["Spiti", "Monasteries", "High Altitude", "Adventure"],
    },
    {
      id: 2,
      title: "Manali to Rohtang: A Snow Adventure",
      summary:
        "My first experience with snow at Rohtang Pass was magical. Skiing, snowball fights, and panoramic mountain views made it unforgettable.",
      content:
        "As we climbed higher towards Rohtang Pass, the landscape transformed from green valleys to snow-covered peaks. The excitement was building with every kilometer...",
      author: "Priyanka Thakur",
      authorImage: "/placeholder.svg?height=100&width=100&text=PT",
      date: "February 20, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Rohtang+Pass",
      category: "Adventure",
      likes: 298,
      comments: 43,
      tags: ["Snow", "Rohtang", "Manali", "Mountains"],
    },
    {
      id: 3,
      title: "Heritage Walk Through Colonial Shimla",
      summary:
        "Exploring Shimla's colonial architecture and heritage buildings was like stepping back in time. The Mall Road and Ridge area are perfectly preserved.",
      content:
        "Walking down the Mall Road in Shimla, I could almost hear the echoes of the British Raj. The colonial buildings stand as silent witnesses to a bygone era...",
      author: "Neha Gupta",
      authorImage: "/placeholder.svg?height=100&width=100&text=NG",
      date: "January 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600&text=Shimla+Heritage",
      category: "Heritage",
      likes: 156,
      comments: 22,
      tags: ["Shimla", "Colonial", "Heritage", "Architecture"],
    },
  ],
  goa: [
    {
      id: 1,
      title: "Beach Hopping Across North and South Goa",
      summary:
        "Seven days exploring Goa's diverse beaches from party-central Baga to serene Palolem. Each beach has its own unique character and charm.",
      content:
        "My Goa adventure started at the bustling Baga Beach with its water sports and beach shacks, but it was the peaceful Palolem that stole my heart...",
      author: "Siddharth D'Souza",
      authorImage: "/placeholder.svg?height=100&width=100&text=SD",
      date: "March 12, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600&text=Goa+Beaches",
      category: "Beach",
      likes: 387,
      comments: 58,
      tags: ["Beaches", "Goa", "Coastal", "Relaxation"],
    },
    {
      id: 2,
      title: "Portuguese Heritage Trail in Old Goa",
      summary:
        "Exploring the churches and cathedrals of Old Goa revealed the rich Portuguese colonial history. The Basilica of Bom Jesus was absolutely magnificent.",
      content:
        "Old Goa is a treasure trove of Portuguese colonial architecture. Walking through the Se Cathedral and Basilica of Bom Jesus felt like traveling through time...",
      author: "Maria Fernandes",
      authorImage: "/placeholder.svg?height=100&width=100&text=MF",
      date: "February 25, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Old+Goa+Churches",
      category: "Heritage",
      likes: 234,
      comments: 35,
      tags: ["Portuguese", "Churches", "Old Goa", "Heritage"],
    },
    {
      id: 3,
      title: "Spice Plantation Adventure in Ponda",
      summary:
        "The guided tour through organic spice plantations was educational and delicious. Learning about cardamom, pepper, and cinnamon cultivation was fascinating.",
      content:
        "Our guide plucked fresh cardamom pods and let us taste them right off the plant. The aroma of various spices filled the air as we walked through the plantation...",
      author: "Ravi Naik",
      authorImage: "/placeholder.svg?height=100&width=100&text=RN",
      date: "January 28, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Goa+Spice+Plantation",
      category: "Nature",
      likes: 178,
      comments: 26,
      tags: ["Spices", "Plantation", "Ponda", "Agriculture"],
    },
  ],
  "tamil-nadu": [
    {
      id: 1,
      title: "Temple Architecture Marvel at Meenakshi Temple",
      summary:
        "The intricate sculptures and towering gopurams of Meenakshi Temple in Madurai left me awestruck. Every pillar tells a story from Hindu mythology.",
      content:
        "Standing in the Hall of Thousand Pillars, I was mesmerized by the intricate carvings. Each pillar is unique, depicting different gods, goddesses, and mythological scenes...",
      author: "Lakshmi Iyer",
      authorImage: "/placeholder.svg?height=100&width=100&text=LI",
      date: "March 18, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Meenakshi+Temple",
      category: "Heritage",
      likes: 456,
      comments: 72,
      tags: ["Temple", "Architecture", "Madurai", "Heritage"],
    },
    {
      id: 2,
      title: "Nilgiri Mountain Railway: A Journey Through Time",
      summary:
        "The UNESCO World Heritage toy train from Mettupalayam to Ooty was a nostalgic journey through misty mountains and tea gardens.",
      content:
        "The steam engine chugged slowly up the mountain, taking us through 16 tunnels and over 250 bridges. The views of the Nilgiri hills were spectacular...",
      author: "Venkat Krishnan",
      authorImage: "/placeholder.svg?height=100&width=100&text=VK",
      date: "February 14, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Nilgiri+Railway",
      category: "Adventure",
      likes: 289,
      comments: 41,
      tags: ["Train", "Ooty", "Mountains", "UNESCO"],
    },
    {
      id: 3,
      title: "Classical Dance Performance in Chennai",
      summary:
        "Watching a Bharatanatyam performance at the Music Academy in Chennai was a spiritual experience. The grace and precision were mesmerizing.",
      content:
        "The dancer's expressions conveyed emotions without words. Every mudra, every movement had meaning, telling stories from ancient Tamil literature...",
      author: "Priya Natarajan",
      authorImage: "/placeholder.svg?height=100&width=100&text=PN",
      date: "January 22, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Bharatanatyam",
      category: "Culture",
      likes: 198,
      comments: 29,
      tags: ["Dance", "Chennai", "Classical", "Culture"],
    },
  ],
  karnataka: [
    {
      id: 1,
      title: "Sunrise at Hampi: Walking Among Ancient Ruins",
      summary:
        "Watching the sunrise over the boulder landscape of Hampi was magical. The ancient Vijayanagara Empire ruins came alive in the golden light.",
      content:
        "I climbed Matanga Hill at 5 AM to catch the sunrise. As the first rays illuminated the ruins of Hampi, I felt transported back 500 years to the glory days of the Vijayanagara Empire...",
      author: "Arjun Rao",
      authorImage: "/placeholder.svg?height=100&width=100&text=AR",
      date: "March 22, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600&text=Hampi+Sunrise",
      category: "Heritage",
      likes: 378,
      comments: 54,
      tags: ["Hampi", "Sunrise", "Ruins", "UNESCO"],
    },
    {
      id: 2,
      title: "Coffee Plantation Stay in Coorg",
      summary:
        "Three days at a coffee plantation in Coorg taught me about coffee cultivation and gave me the most peaceful sleep surrounded by nature.",
      content:
        "Waking up to the aroma of fresh coffee and the sound of birds chirping was heavenly. The plantation owner taught me about different coffee varieties and the harvesting process...",
      author: "Sneha Kodagu",
      authorImage: "/placeholder.svg?height=100&width=100&text=SK",
      date: "February 8, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Coorg+Coffee",
      category: "Nature",
      likes: 267,
      comments: 38,
      tags: ["Coffee", "Coorg", "Plantation", "Nature"],
    },
    {
      id: 3,
      title: "Royal Grandeur at Mysore Palace",
      summary:
        "The illuminated Mysore Palace during Dussehra was a sight to behold. The royal architecture and cultural performances were spectacular.",
      content:
        "As evening fell, the palace lit up with thousands of bulbs, creating a golden glow. The Dussehra procession with decorated elephants was the highlight of my visit...",
      author: "Rajesh Mysore",
      authorImage: "/placeholder.svg?height=100&width=100&text=RM",
      date: "January 18, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Mysore+Palace",
      category: "Heritage",
      likes: 345,
      comments: 47,
      tags: ["Palace", "Mysore", "Dussehra", "Royal"],
    },
  ],
  maharashtra: [
    {
      id: 1,
      title: "Cave Paintings of Ajanta: A Journey Through Time",
      summary:
        "The 2000-year-old Buddhist cave paintings at Ajanta left me speechless. The artistry and preservation are simply incredible.",
      content:
        "Walking through the horseshoe-shaped gorge, each cave revealed masterpieces of ancient Indian art. The paintings depicting Buddha's life stories were so vivid, they seemed to come alive...",
      author: "Dr. Ashwin Patil",
      authorImage: "/placeholder.svg?height=100&width=100&text=AP",
      date: "March 25, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600&text=Ajanta+Caves",
      category: "Heritage",
      likes: 523,
      comments: 89,
      tags: ["Ajanta", "Buddhist", "Caves", "UNESCO"],
    },
    {
      id: 2,
      title: "Monsoon Magic in Lonavala",
      summary:
        "Experiencing the Western Ghats during monsoon was breathtaking. Waterfalls, misty hills, and lush greenery created a paradise.",
      content:
        "The train journey from Mumbai to Lonavala during monsoon was spectacular. Every valley had waterfalls cascading down, and the air was fresh and cool...",
      author: "Priya Marathe",
      authorImage: "/placeholder.svg?height=100&width=100&text=PM",
      date: "February 16, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Lonavala+Monsoon",
      category: "Nature",
      likes: 398,
      comments: 62,
      tags: ["Lonavala", "Monsoon", "Waterfalls", "Western Ghats"],
    },
    {
      id: 3,
      title: "Spiritual Journey to Shirdi",
      summary:
        "My pilgrimage to Shirdi Sai Baba temple was deeply moving. The devotion of fellow pilgrims and the peaceful atmosphere were transformative.",
      content:
        "Standing in the queue for darshan, I felt a sense of peace wash over me. The stories shared by other devotees about Sai Baba's miracles were inspiring...",
      author: "Ramesh Kulkarni",
      authorImage: "/placeholder.svg?height=100&width=100&text=RK",
      date: "January 12, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Shirdi+Temple",
      category: "Spiritual",
      likes: 287,
      comments: 43,
      tags: ["Shirdi", "Sai Baba", "Pilgrimage", "Spiritual"],
    },
  ],
  "madhya-pradesh": [
    {
      id: 1,
      title: "Khajuraho: Art Beyond Imagination",
      summary:
        "The intricate sculptures of Khajuraho temples showcase the pinnacle of medieval Indian art. Every carving tells a story of life, love, and spirituality.",
      content:
        "Standing before the Kandariya Mahadeva temple, I was amazed by the detailed sculptures. The craftsmanship from 1000 years ago surpasses modern artistry...",
      author: "Dr. Kavita Sharma",
      authorImage: "/placeholder.svg?height=100&width=100&text=KS",
      date: "March 20, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600&text=Khajuraho+Temples",
      category: "Heritage",
      likes: 467,
      comments: 78,
      tags: ["Khajuraho", "Temples", "Sculpture", "UNESCO"],
    },
    {
      id: 2,
      title: "Tiger Safari at Kanha National Park",
      summary:
        "My encounter with a tiger family at Kanha was the highlight of my wildlife photography career. The park's conservation efforts are commendable.",
      content:
        "Early morning in Kanha, our guide spotted fresh pugmarks. After an hour of tracking, we found a tigress with her two cubs playing near a water hole...",
      author: "Vikram Singh",
      authorImage: "/placeholder.svg?height=100&width=100&text=VS",
      date: "February 22, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Kanha+Tigers",
      category: "Wildlife",
      likes: 389,
      comments: 56,
      tags: ["Kanha", "Tiger", "Wildlife", "Photography"],
    },
    {
      id: 3,
      title: "Spiritual Sojourn in Ujjain",
      summary:
        "Attending the evening aarti at Mahakaleshwar temple in Ujjain was a deeply spiritual experience. The ancient city's energy is palpable.",
      content:
        "The sound of bells and chanting filled the air as thousands of devotees gathered for the evening aarti. The spiritual energy of this ancient city was overwhelming...",
      author: "Anita Joshi",
      authorImage: "/placeholder.svg?height=100&width=100&text=AJ",
      date: "January 28, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Ujjain+Temple",
      category: "Spiritual",
      likes: 298,
      comments: 41,
      tags: ["Ujjain", "Mahakaleshwar", "Spiritual", "Temple"],
    },
  ],
  odisha: [
    {
      id: 1,
      title: "Jagannath Rath Yatra: A Divine Spectacle",
      summary:
        "Witnessing the Jagannath Rath Yatra in Puri was overwhelming. Millions of devotees pulling the massive chariots created an unforgettable atmosphere.",
      content:
        "The three massive chariots of Lord Jagannath, Balabhadra, and Subhadra moved slowly through the streets of Puri. The devotion of millions of pilgrims was deeply moving...",
      author: "Subhash Panda",
      authorImage: "/placeholder.svg?height=100&width=100&text=SP",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Rath+Yatra",
      category: "Spiritual",
      likes: 567,
      comments: 94,
      tags: ["Jagannath", "Rath Yatra", "Puri", "Festival"],
    },
    {
      id: 2,
      title: "Sunrise at Konark Sun Temple",
      summary:
        "Watching the sunrise at the Konark Sun Temple was magical. The 13th-century chariot temple aligned perfectly with the rising sun.",
      content:
        "As the first rays of sun illuminated the intricate carvings of the Sun Temple, I understood why it's called the Black Pagoda. The architectural precision is astounding...",
      author: "Meera Das",
      authorImage: "/placeholder.svg?height=100&width=100&text=MD",
      date: "February 18, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Konark+Sunrise",
      category: "Heritage",
      likes: 423,
      comments: 67,
      tags: ["Konark", "Sun Temple", "Sunrise", "UNESCO"],
    },
    {
      id: 3,
      title: "Chilika Lake: A Birdwatcher's Paradise",
      summary:
        "The migratory birds at Chilika Lake were spectacular. Spotting flamingos and dolphins in the same ecosystem was incredible.",
      content:
        "Our boat glided through Asia's largest brackish water lagoon. Suddenly, a pod of Irrawaddy dolphins appeared, followed by a flock of flamingos taking flight...",
      author: "Rajesh Mohanty",
      authorImage: "/placeholder.svg?height=100&width=100&text=RM",
      date: "January 25, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Chilika+Birds",
      category: "Nature",
      likes: 345,
      comments: 52,
      tags: ["Chilika", "Birds", "Dolphins", "Nature"],
    },
  ],
  jharkhand: [
    {
      id: 1,
      title: "Hundru Falls: Nature's Power Display",
      summary:
        "The 320-foot Hundru Falls during monsoon was a spectacular sight. The thunderous roar and misty spray created a mystical atmosphere.",
      content:
        "Standing at the viewpoint, I felt the ground vibrate from the force of water crashing down. The rainbow formed in the mist was nature's perfect artwork...",
      author: "Amit Kumar",
      authorImage: "/placeholder.svg?height=100&width=100&text=AK",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Hundru+Falls",
      category: "Nature",
      likes: 298,
      comments: 45,
      tags: ["Hundru", "Waterfall", "Monsoon", "Nature"],
    },
    {
      id: 2,
      title: "Tribal Culture Experience in Ranchi",
      summary:
        "Living with a tribal family near Ranchi opened my eyes to their sustainable lifestyle and deep connection with nature.",
      content:
        "The tribal elder taught me about medicinal plants and their traditional farming methods. Their respect for nature and community living was inspiring...",
      author: "Priya Sinha",
      authorImage: "/placeholder.svg?height=100&width=100&text=PS",
      date: "February 8, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600&text=Tribal+Culture",
      category: "Culture",
      likes: 234,
      comments: 38,
      tags: ["Tribal", "Culture", "Ranchi", "Tradition"],
    },
    {
      id: 3,
      title: "Parasnath Hill: A Jain Pilgrimage",
      summary:
        "Climbing Parasnath Hill, the highest peak in Jharkhand, was both physically challenging and spiritually rewarding.",
      content:
        "The trek to the summit took 4 hours, passing through 20 Jain temples. The panoramic view from the top and the peaceful atmosphere made every step worthwhile...",
      author: "Deepak Jain",
      authorImage: "/placeholder.svg?height=100&width=100&text=DJ",
      date: "January 20, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Parasnath+Hill",
      category: "Spiritual",
      likes: 187,
      comments: 29,
      tags: ["Parasnath", "Jain", "Pilgrimage", "Trekking"],
    },
  ],
  "andhra-pradesh": [
    {
      id: 1,
      title: "Divine Darshan at Tirupati Balaji",
      summary:
        "My pilgrimage to Tirupati Balaji was life-changing. The devotion of millions of pilgrims and the temple's grandeur were overwhelming.",
      content:
        "After waiting 8 hours in queue, the 10-second darshan of Lord Venkateswara felt eternal. The spiritual energy and devotion of fellow pilgrims was deeply moving...",
      author: "Lakshmi Reddy",
      authorImage: "/placeholder.svg?height=100&width=100&text=LR",
      date: "March 28, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=Tirupati+Temple",
      category: "Spiritual",
      likes: 678,
      comments: 112,
      tags: ["Tirupati", "Balaji", "Pilgrimage", "Spiritual"],
    },
    {
      id: 2,
      title: "Coffee Plantations of Araku Valley",
      summary:
        "The scenic train journey to Araku Valley and the coffee plantation tour were delightful. The tribal culture added to the experience.",
      content:
        "The train wound through 58 tunnels and over 84 bridges to reach Araku. The coffee plantations, tribal museum, and cool climate made it a perfect hill station...",
      author: "Venkat Rao",
      authorImage: "/placeholder.svg?height=100&width=100&text=VR",
      date: "February 14, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Araku+Valley",
      category: "Nature",
      likes: 356,
      comments: 54,
      tags: ["Araku", "Coffee", "Train", "Hills"],
    },
    {
      id: 3,
      title: "Exploring Borra Caves: Underground Wonders",
      summary:
        "The million-year-old limestone formations in Borra Caves were fascinating. Nature's artistry underground was breathtaking.",
      content:
        "Descending into the caves, I was amazed by the stalactites and stalagmites formations. The natural lighting created an otherworldly atmosphere...",
      author: "Sita Devi",
      authorImage: "/placeholder.svg?height=100&width=100&text=SD",
      date: "January 16, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600&text=Borra+Caves",
      category: "Nature",
      likes: 267,
      comments: 41,
      tags: ["Borra", "Caves", "Limestone", "Nature"],
    },
  ],
}

export default function ExperiencePage() {
  const { selectedState } = useStateContext()
  const experiences =
    stateExperiences[selectedState.id as keyof typeof stateExperiences] || stateExperiences.chhattisgarh

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32&text=Logo"
                alt={`${selectedState.name} Tourism Logo`}
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-lg font-bold">{selectedState.name} Travel Experiences</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/destination" className="text-sm font-medium hover:underline underline-offset-4">
              Destinations
            </Link>
            <Link href="/plan" className="text-sm font-medium hover:underline underline-offset-4">
              Plan Your Trip
            </Link>
            <Link href="/culture" className="text-sm font-medium hover:underline underline-offset-4">
              Culture
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{selectedState.name} Travel Experiences & Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Read authentic travel experiences, tips, and stories from fellow travelers who have explored the wonders of{" "}
            {selectedState.name}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <Input placeholder="Search experiences..." className="w-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="default" className="cursor-pointer">
            All
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Nature
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Culture
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Wildlife
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Heritage
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Adventure
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Spiritual
          </Badge>
        </div>

        {/* Featured Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Experience</h2>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={experiences[0].image || "/placeholder.svg"}
                  alt={experiences[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{experiences[0].category}</Badge>
                    <span className="text-sm text-muted-foreground">{experiences[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{experiences[0].title}</h3>
                  <p className="text-muted-foreground mb-4">{experiences[0].summary}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={experiences[0].authorImage || "/placeholder.svg"} alt={experiences[0].author} />
                      <AvatarFallback>{experiences[0].author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{experiences[0].author}</p>
                      <p className="text-muted-foreground">{experiences[0].date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{experiences[0].likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{experiences[0].comments}</span>
                    </div>
                  </div>
                  <Button className="gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* All Experiences */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">All Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(1).map((experience) => (
              <Card key={experience.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3">{experience.category}</Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{experience.readTime}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{experience.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-2">{experience.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{experience.summary}</p>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={experience.authorImage || "/placeholder.svg"} alt={experience.author} />
                      <AvatarFallback>{experience.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{experience.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {experience.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{experience.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{experience.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Stories
          </Button>
        </div>

        {/* Share Your Experience CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
              <p className="text-muted-foreground mb-6">
                Have you visited {selectedState.name}? Share your travel story and inspire others to explore this
                beautiful state.
              </p>
              <Button size="lg" className="gap-2">
                Write Your Story <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
