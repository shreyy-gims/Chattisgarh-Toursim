"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useStateContext } from "@/contexts/state-context"

const stateDestinations = {
  chhattisgarh: [
    {
      id: 1,
      title: "Chitrakote Falls",
      description:
        "India's widest waterfall, often called the 'Niagara of India'. Experience the thunderous roar and misty spray of this magnificent natural wonder.",
      image: "/chitrakote.jpg",
      category: "waterfall",
      location: "Bastar",
      rating: 4.8,
      reviews: 245,
    },
    {
      id: 2,
      title: "Tirathgarh Falls",
      description:
        "A spectacular multi-tiered waterfall cascading down from a height of 300 feet, surrounded by lush green forests.",
      image: "/tirathgarh169.png",
      category: "waterfall",
      location: "Bastar",
      rating: 4.6,
      reviews: 189,
    },
    {
      id: 3,
      title: "Kanger Valley National Park",
      description:
        "Home to diverse wildlife, stunning caves, and pristine waterfalls. A paradise for nature lovers and adventure enthusiasts.",
      image: "/national-parks-india-1.jpg",
      category: "national-park",
      location: "Bastar",
      rating: 4.9,
      reviews: 312,
    },
    {
      id: 4,
      title: "Jatmai Ghatarani Falls",
      description:
        "Discover diverse wildlife including leopards, bears, and hundreds of bird species in their natural habitat.",
      image: "/ghatarani.png",
      category: "national-park",
      location: "Raipur",
      rating: 4.5,
      reviews: 156,
    },
    {
      id: 5,
      title: "Bhoramdeo Temple",
      description:
        "11th century temple known as the 'Khajuraho of Chhattisgarh' featuring intricate stone carvings and architectural marvels.",
      image: "/bhoramdev.jpg",
      category: "temple",
      location: "Kawardha",
      rating: 4.7,
      reviews: 203,
    },
    {
      id: 6,
      title: "Barnawapara Wildlife Sanctuary Tour",
      description: "Ancient Buddhist and Hindu archaeological site with temples dating back to the 5th-8th century.",
      image: "/sher3.jpg",
      category: "temple",
      location: "Mahasamund",
      rating: 4.6,
      reviews: 178,
    },
    {
      id: 7,
      title: "Onakona Temple",
      description:
        "Raipur's premier water park featuring thrilling water slides, wave pools, and family-friendly attractions.",
      image: "/Onakona Temple.jpg",
      category: "waterpark",
      location: "Raipur",
      rating: 4.3,
      reviews: 89,
    },
    {
      id: 8,
      title: "Bastar Heritage Package",
      description:
        "7-day comprehensive tour covering tribal villages, waterfalls, and cultural experiences in the heart of Bastar.",
      image: "/dushera.png",
      category: "packages",
      location: "Bastar Region",
      rating: 4.8,
      reviews: 145,
    },
  ],
  rajasthan: [
    {
      id: 1,
      title: "Jaipur City Palace",
      description:
        "Magnificent royal palace complex showcasing Rajasthani and Mughal architecture with stunning courtyards and museums.",
      image: "/placeholder.svg?height=400&width=600&text=Jaipur+City+Palace",
      category: "temple",
      location: "Jaipur",
      rating: 4.9,
      reviews: 1245,
    },
    {
      id: 2,
      title: "Udaipur Lake Palace",
      description:
        "Floating marble palace on Lake Pichola, now a luxury hotel offering breathtaking views and royal experiences.",
      image: "/placeholder.svg?height=400&width=600&text=Lake+Palace+Udaipur",
      category: "temple",
      location: "Udaipur",
      rating: 4.8,
      reviews: 892,
    },
    {
      id: 3,
      title: "Ranthambore National Park",
      description:
        "Famous tiger reserve offering excellent wildlife safaris and ancient fort ruins within the park boundaries.",
      image: "/placeholder.svg?height=400&width=600&text=Ranthambore+Tigers",
      category: "national-park",
      location: "Sawai Madhopur",
      rating: 4.7,
      reviews: 567,
    },
    {
      id: 4,
      title: "Thar Desert Safari",
      description:
        "Experience the golden sands of Thar Desert with camel safaris, cultural performances, and desert camping.",
      image: "/placeholder.svg?height=400&width=600&text=Thar+Desert+Safari",
      category: "packages",
      location: "Jaisalmer",
      rating: 4.6,
      reviews: 423,
    },
    {
      id: 5,
      title: "Hawa Mahal",
      description: "Iconic pink sandstone palace with intricate lattice work, known as the Palace of Winds.",
      image: "/placeholder.svg?height=400&width=600&text=Hawa+Mahal",
      category: "temple",
      location: "Jaipur",
      rating: 4.5,
      reviews: 789,
    },
    {
      id: 6,
      title: "Mehrangarh Fort",
      description:
        "Imposing hilltop fort offering panoramic views of Jodhpur's blue city and housing magnificent palaces.",
      image: "/placeholder.svg?height=400&width=600&text=Mehrangarh+Fort",
      category: "temple",
      location: "Jodhpur",
      rating: 4.8,
      reviews: 634,
    },
    {
      id: 7,
      title: "Royal Rajasthan Package",
      description: "10-day luxury tour covering major palaces, forts, and cultural experiences across Rajasthan.",
      image: "/placeholder.svg?height=400&width=600&text=Royal+Rajasthan",
      category: "packages",
      location: "Multiple Cities",
      rating: 4.9,
      reviews: 298,
    },
    {
      id: 8,
      title: "Pushkar Camel Fair",
      description: "Annual cultural festival featuring camel trading, folk performances, and spiritual experiences.",
      image: "/placeholder.svg?height=400&width=600&text=Pushkar+Camel+Fair",
      category: "packages",
      location: "Pushkar",
      rating: 4.7,
      reviews: 156,
    },
  ],
  kerala: [
    {
      id: 1,
      title: "Athirappilly Falls",
      description: "Kerala's largest waterfall, known as the 'Niagara of India', surrounded by lush tropical forests.",
      image: "/placeholder.svg?height=400&width=600&text=Athirappilly+Falls",
      category: "waterfall",
      location: "Thrissur",
      rating: 4.8,
      reviews: 456,
    },
    {
      id: 2,
      title: "Alleppey Backwaters",
      description: "Serene network of canals, rivers, and lakes offering houseboat cruises through coconut groves.",
      image: "/placeholder.svg?height=400&width=600&text=Alleppey+Backwaters",
      category: "packages",
      location: "Alappuzha",
      rating: 4.9,
      reviews: 1123,
    },
    {
      id: 3,
      title: "Periyar National Park",
      description: "Wildlife sanctuary famous for elephant herds, boat safaris on Periyar Lake, and spice plantations.",
      image: "/placeholder.svg?height=400&width=600&text=Periyar+Elephants",
      category: "national-park",
      location: "Thekkady",
      rating: 4.7,
      reviews: 678,
    },
    {
      id: 4,
      title: "Padmanabhaswamy Temple",
      description:
        "Ancient Hindu temple dedicated to Lord Vishnu, known for its Dravidian architecture and spiritual significance.",
      image: "/placeholder.svg?height=400&width=600&text=Padmanabhaswamy+Temple",
      category: "temple",
      location: "Thiruvananthapuram",
      rating: 4.6,
      reviews: 234,
    },
    {
      id: 5,
      title: "Munnar Tea Gardens",
      description: "Rolling hills covered with tea plantations offering breathtaking views and tea factory visits.",
      image: "/placeholder.svg?height=400&width=600&text=Munnar+Tea+Gardens",
      category: "packages",
      location: "Munnar",
      rating: 4.8,
      reviews: 892,
    },
    {
      id: 6,
      title: "Kumarakom Bird Sanctuary",
      description: "Paradise for bird watchers with over 180 species of birds in their natural habitat.",
      image: "/placeholder.svg?height=400&width=600&text=Kumarakom+Birds",
      category: "national-park",
      location: "Kottayam",
      rating: 4.5,
      reviews: 345,
    },
    {
      id: 7,
      title: "Wonderla Kochi",
      description: "Premier amusement and water park with thrilling rides and water attractions for all ages.",
      image: "/placeholder.svg?height=400&width=600&text=Wonderla+Kochi",
      category: "waterpark",
      location: "Kochi",
      rating: 4.4,
      reviews: 567,
    },
    {
      id: 8,
      title: "Kerala Ayurveda Retreat",
      description: "Authentic Ayurvedic treatments and wellness programs in traditional Kerala style resorts.",
      image: "/placeholder.svg?height=400&width=600&text=Kerala+Ayurveda",
      category: "packages",
      location: "Kovalam",
      rating: 4.7,
      reviews: 289,
    },
  ],
  himachal: [
    {
      id: 1,
      title: "Jogini Falls",
      description: "Beautiful waterfall near Manali offering trekking opportunities and stunning mountain views.",
      image: "/placeholder.svg?height=400&width=600&text=Jogini+Falls",
      category: "waterfall",
      location: "Manali",
      rating: 4.6,
      reviews: 234,
    },
    {
      id: 2,
      title: "Great Himalayan National Park",
      description: "UNESCO World Heritage site with diverse flora, fauna, and trekking trails in the Himalayas.",
      image: "/placeholder.svg?height=400&width=600&text=Great+Himalayan+Park",
      category: "national-park",
      location: "Kullu",
      rating: 4.8,
      reviews: 456,
    },
    {
      id: 3,
      title: "Hadimba Temple",
      description: "Ancient wooden temple dedicated to Hadimba Devi, surrounded by cedar forests in Manali.",
      image: "/placeholder.svg?height=400&width=600&text=Hadimba+Temple",
      category: "temple",
      location: "Manali",
      rating: 4.5,
      reviews: 678,
    },
    {
      id: 4,
      title: "Shimla Heritage Walk",
      description: "Explore the colonial architecture and heritage buildings of the former British summer capital.",
      image: "/placeholder.svg?height=400&width=600&text=Shimla+Heritage",
      category: "packages",
      location: "Shimla",
      rating: 4.4,
      reviews: 345,
    },
    {
      id: 5,
      title: "Spiti Valley Adventure",
      description: "High-altitude desert valley offering monasteries, ancient villages, and breathtaking landscapes.",
      image: "/placeholder.svg?height=400&width=600&text=Spiti+Valley",
      category: "packages",
      location: "Spiti",
      rating: 4.9,
      reviews: 189,
    },
    {
      id: 6,
      title: "Rohtang Pass",
      description: "High mountain pass offering snow activities and panoramic views of the Himalayan ranges.",
      image: "/placeholder.svg?height=400&width=600&text=Rohtang+Pass",
      category: "packages",
      location: "Manali",
      rating: 4.3,
      reviews: 567,
    },
    {
      id: 7,
      title: "Chail Wildlife Sanctuary",
      description: "Hill station wildlife sanctuary known for its palace, cricket ground, and diverse wildlife.",
      image: "/placeholder.svg?height=400&width=600&text=Chail+Wildlife",
      category: "national-park",
      location: "Chail",
      rating: 4.2,
      reviews: 123,
    },
    {
      id: 8,
      title: "Kasauli Hills Resort",
      description: "Peaceful hill station retreat with colonial charm and panoramic valley views.",
      image: "/placeholder.svg?height=400&width=600&text=Kasauli+Hills",
      category: "packages",
      location: "Kasauli",
      rating: 4.6,
      reviews: 234,
    },
  ],
  goa: [
    {
      id: 1,
      title: "Dudhsagar Falls",
      description: "Spectacular four-tiered waterfall cascading from 310 meters, accessible by train or trek.",
      image: "/placeholder.svg?height=400&width=600&text=Dudhsagar+Falls",
      category: "waterfall",
      location: "Mollem",
      rating: 4.7,
      reviews: 789,
    },
    {
      id: 2,
      title: "Basilica of Bom Jesus",
      description: "UNESCO World Heritage site housing the mortal remains of St. Francis Xavier.",
      image: "/placeholder.svg?height=400&width=600&text=Basilica+Bom+Jesus",
      category: "temple",
      location: "Old Goa",
      rating: 4.6,
      reviews: 456,
    },
    {
      id: 3,
      title: "Bhagwan Mahavir National Park",
      description: "Largest wildlife sanctuary in Goa with diverse flora, fauna, and the famous Dudhsagar Falls.",
      image: "/placeholder.svg?height=400&width=600&text=Mahavir+National+Park",
      category: "national-park",
      location: "Mollem",
      rating: 4.5,
      reviews: 234,
    },
    {
      id: 4,
      title: "Splashdown Water Park",
      description: "Goa's premier water park with exciting slides, wave pools, and family entertainment.",
      image: "/placeholder.svg?height=400&width=600&text=Splashdown+Goa",
      category: "waterpark",
      location: "Anjuna",
      rating: 4.3,
      reviews: 567,
    },
    {
      id: 5,
      title: "Goa Beach Hopping",
      description: "Explore the pristine beaches from Baga to Palolem with water sports and beach shacks.",
      image: "/placeholder.svg?height=400&width=600&text=Goa+Beaches",
      category: "packages",
      location: "Coastal Goa",
      rating: 4.8,
      reviews: 1234,
    },
    {
      id: 6,
      title: "Spice Plantation Tour",
      description: "Guided tour through organic spice plantations with traditional Goan lunch and elephant rides.",
      image: "/placeholder.svg?height=400&width=600&text=Goa+Spice+Plantation",
      category: "packages",
      location: "Ponda",
      rating: 4.4,
      reviews: 345,
    },
    {
      id: 7,
      title: "Se Cathedral",
      description: "One of the largest churches in Asia, showcasing Portuguese colonial architecture.",
      image: "/placeholder.svg?height=400&width=600&text=Se+Cathedral",
      category: "temple",
      location: "Old Goa",
      rating: 4.5,
      reviews: 289,
    },
    {
      id: 8,
      title: "Goa Heritage Walk",
      description: "Explore the Portuguese colonial heritage through Old Goa's churches and historical sites.",
      image: "/placeholder.svg?height=400&width=600&text=Goa+Heritage",
      category: "packages",
      location: "Old Goa",
      rating: 4.2,
      reviews: 178,
    },
  ],
  maharashtra: [
    {
      id: 1,
      title: "Ajanta Caves",
      description:
        "UNESCO World Heritage site featuring ancient Buddhist rock-cut caves with exquisite paintings and sculptures.",
      image: "/placeholder.svg?height=400&width=600&text=Ajanta+Caves",
      category: "temple",
      location: "Aurangabad",
      rating: 4.9,
      reviews: 1567,
    },
    {
      id: 2,
      title: "Ellora Caves",
      description:
        "Magnificent rock-cut caves representing Hindu, Buddhist, and Jain monuments carved from basaltic cliffs.",
      image: "/placeholder.svg?height=400&width=600&text=Ellora+Caves",
      category: "temple",
      location: "Aurangabad",
      rating: 4.8,
      reviews: 1234,
    },
    {
      id: 3,
      title: "Gateway of India",
      description: "Iconic arch monument overlooking the Arabian Sea, symbol of Mumbai and colonial heritage.",
      image: "/placeholder.svg?height=400&width=600&text=Gateway+of+India",
      category: "temple",
      location: "Mumbai",
      rating: 4.5,
      reviews: 2345,
    },
    {
      id: 4,
      title: "Lonavala Hill Station",
      description:
        "Popular hill station known for its scenic valleys, waterfalls, and pleasant climate near Mumbai and Pune.",
      image: "/placeholder.svg?height=400&width=600&text=Lonavala+Hills",
      category: "packages",
      location: "Lonavala",
      rating: 4.4,
      reviews: 987,
    },
    {
      id: 5,
      title: "Mahabaleshwar",
      description: "Queen of hill stations offering strawberry farms, scenic viewpoints, and cool mountain air.",
      image: "/placeholder.svg?height=400&width=600&text=Mahabaleshwar",
      category: "packages",
      location: "Mahabaleshwar",
      rating: 4.6,
      reviews: 756,
    },
    {
      id: 6,
      title: "Shirdi Sai Baba Temple",
      description:
        "Sacred pilgrimage site dedicated to Sai Baba, attracting millions of devotees from around the world.",
      image: "/placeholder.svg?height=400&width=600&text=Shirdi+Temple",
      category: "temple",
      location: "Shirdi",
      rating: 4.8,
      reviews: 3456,
    },
    {
      id: 7,
      title: "Imagica Theme Park",
      description: "India's premier theme park with thrilling rides, entertainment shows, and family attractions.",
      image: "/placeholder.svg?height=400&width=600&text=Imagica+Theme+Park",
      category: "waterpark",
      location: "Khopoli",
      rating: 4.3,
      reviews: 567,
    },
    {
      id: 8,
      title: "Maharashtra Heritage Package",
      description: "Comprehensive tour covering caves, forts, hill stations, and cultural heritage of Maharashtra.",
      image: "/placeholder.svg?height=400&width=600&text=Maharashtra+Heritage",
      category: "packages",
      location: "Multiple Cities",
      rating: 4.7,
      reviews: 234,
    },
  ],
  "madhya-pradesh": [
    {
      id: 1,
      title: "Khajuraho Temples",
      description:
        "UNESCO World Heritage site famous for intricately carved temples showcasing medieval Indian art and architecture.",
      image: "/placeholder.svg?height=400&width=600&text=Khajuraho+Temples",
      category: "temple",
      location: "Khajuraho",
      rating: 4.9,
      reviews: 1876,
    },
    {
      id: 2,
      title: "Sanchi Stupa",
      description:
        "Ancient Buddhist monument and UNESCO World Heritage site with the oldest stone structures in India.",
      image: "/placeholder.svg?height=400&width=600&text=Sanchi+Stupa",
      category: "temple",
      location: "Sanchi",
      rating: 4.7,
      reviews: 567,
    },
    {
      id: 3,
      title: "Kanha National Park",
      description:
        "Premier tiger reserve and inspiration for Rudyard Kipling's Jungle Book, known for its diverse wildlife.",
      image: "/placeholder.svg?height=400&width=600&text=Kanha+Tigers",
      category: "national-park",
      location: "Mandla",
      rating: 4.8,
      reviews: 1234,
    },
    {
      id: 4,
      title: "Bandhavgarh National Park",
      description: "Famous tiger reserve with the highest density of tigers in India and ancient fort ruins.",
      image: "/placeholder.svg?height=400&width=600&text=Bandhavgarh+Tigers",
      category: "national-park",
      location: "Umaria",
      rating: 4.8,
      reviews: 987,
    },
    {
      id: 5,
      title: "Ujjain Mahakaleshwar Temple",
      description:
        "One of the twelve Jyotirlingas, sacred temple dedicated to Lord Shiva on the banks of river Shipra.",
      image: "/placeholder.svg?height=400&width=600&text=Mahakaleshwar+Temple",
      category: "temple",
      location: "Ujjain",
      rating: 4.8,
      reviews: 2345,
    },
    {
      id: 6,
      title: "Gwalior Fort",
      description: "Magnificent hilltop fort known as the 'Gibraltar of India' with palaces, temples, and museums.",
      image: "/placeholder.svg?height=400&width=600&text=Gwalior+Fort",
      category: "temple",
      location: "Gwalior",
      rating: 4.6,
      reviews: 678,
    },
    {
      id: 7,
      title: "Pachmarhi Hill Station",
      description: "Only hill station in Madhya Pradesh, known as 'Queen of Satpura' with waterfalls and caves.",
      image: "/placeholder.svg?height=400&width=600&text=Pachmarhi+Hills",
      category: "packages",
      location: "Pachmarhi",
      rating: 4.5,
      reviews: 456,
    },
    {
      id: 8,
      title: "MP Wildlife Package",
      description: "Comprehensive wildlife tour covering Kanha, Bandhavgarh, and Pench national parks.",
      image: "/placeholder.svg?height=400&width=600&text=MP+Wildlife",
      category: "packages",
      location: "Multiple Parks",
      rating: 4.7,
      reviews: 345,
    },
  ],
  odisha: [
    {
      id: 1,
      title: "Jagannath Temple Puri",
      description: "Sacred Hindu temple dedicated to Lord Jagannath, famous for the annual Rath Yatra festival.",
      image: "/placeholder.svg?height=400&width=600&text=Jagannath+Temple",
      category: "temple",
      location: "Puri",
      rating: 4.9,
      reviews: 3456,
    },
    {
      id: 2,
      title: "Konark Sun Temple",
      description:
        "UNESCO World Heritage site, magnificent 13th-century temple designed as a colossal chariot of the Sun God.",
      image: "/placeholder.svg?height=400&width=600&text=Konark+Sun+Temple",
      category: "temple",
      location: "Konark",
      rating: 4.8,
      reviews: 1567,
    },
    {
      id: 3,
      title: "Chilika Lake",
      description: "Asia's largest brackish water lagoon, paradise for migratory birds and dolphin watching.",
      image: "/placeholder.svg?height=400&width=600&text=Chilika+Lake",
      category: "national-park",
      location: "Chilika",
      rating: 4.6,
      reviews: 789,
    },
    {
      id: 4,
      title: "Simlipal National Park",
      description: "Biosphere reserve known for tigers, elephants, and spectacular waterfalls in the Eastern Ghats.",
      image: "/placeholder.svg?height=400&width=600&text=Simlipal+National+Park",
      category: "national-park",
      location: "Mayurbhanj",
      rating: 4.5,
      reviews: 456,
    },
    {
      id: 5,
      title: "Udayagiri and Khandagiri Caves",
      description:
        "Ancient Jain rock-cut caves dating back to 2nd century BCE with intricate carvings and inscriptions.",
      image: "/placeholder.svg?height=400&width=600&text=Udayagiri+Caves",
      category: "temple",
      location: "Bhubaneswar",
      rating: 4.4,
      reviews: 234,
    },
    {
      id: 6,
      title: "Lingaraj Temple",
      description: "11th-century Hindu temple dedicated to Lord Shiva, masterpiece of Kalinga architecture.",
      image: "/placeholder.svg?height=400&width=600&text=Lingaraj+Temple",
      category: "temple",
      location: "Bhubaneswar",
      rating: 4.7,
      reviews: 567,
    },
    {
      id: 7,
      title: "Puri Beach",
      description: "Golden sand beach on the Bay of Bengal, perfect for sunrise views and beach activities.",
      image: "/placeholder.svg?height=400&width=600&text=Puri+Beach",
      category: "packages",
      location: "Puri",
      rating: 4.3,
      reviews: 678,
    },
    {
      id: 8,
      title: "Odisha Golden Triangle Package",
      description: "Complete tour covering Bhubaneswar temples, Puri beaches, and Konark Sun Temple.",
      image: "/placeholder.svg?height=400&width=600&text=Odisha+Golden+Triangle",
      category: "packages",
      location: "Multiple Cities",
      rating: 4.6,
      reviews: 345,
    },
  ],
  jharkhand: [
    {
      id: 1,
      title: "Hundru Falls",
      description: "Spectacular waterfall on river Subarnarekha, cascading from 320 feet height near Ranchi.",
      image: "/placeholder.svg?height=400&width=600&text=Hundru+Falls",
      category: "waterfall",
      location: "Ranchi",
      rating: 4.6,
      reviews: 456,
    },
    {
      id: 2,
      title: "Dassam Falls",
      description: "Beautiful waterfall formed by river Kanchi, popular picnic spot with natural swimming pools.",
      image: "/placeholder.svg?height=400&width=600&text=Dassam+Falls",
      category: "waterfall",
      location: "Ranchi",
      rating: 4.5,
      reviews: 234,
    },
    {
      id: 3,
      title: "Betla National Park",
      description:
        "First national park of Jharkhand, home to tigers, elephants, and diverse wildlife in Palamu district.",
      image: "/placeholder.svg?height=400&width=600&text=Betla+National+Park",
      category: "national-park",
      location: "Palamu",
      rating: 4.4,
      reviews: 345,
    },
    {
      id: 4,
      title: "Parasnath Hill",
      description: "Highest peak in Jharkhand and sacred Jain pilgrimage site with 24 Jain temples on the summit.",
      image: "/placeholder.svg?height=400&width=600&text=Parasnath+Hill",
      category: "temple",
      location: "Giridih",
      rating: 4.7,
      reviews: 567,
    },
    {
      id: 5,
      title: "Deoghar Baidyanath Temple",
      description:
        "One of the twelve Jyotirlingas, sacred temple dedicated to Lord Shiva attracting millions of devotees.",
      image: "/placeholder.svg?height=400&width=600&text=Baidyanath+Temple",
      category: "temple",
      location: "Deoghar",
      rating: 4.8,
      reviews: 1234,
    },
    {
      id: 6,
      title: "Ranchi Hill Station",
      description: "Capital city known as the 'City of Waterfalls' with pleasant climate and scenic beauty.",
      image: "/placeholder.svg?height=400&width=600&text=Ranchi+Hills",
      category: "packages",
      location: "Ranchi",
      rating: 4.3,
      reviews: 678,
    },
    {
      id: 7,
      title: "Netarhat",
      description: "Queen of Chhota Nagpur, hill station famous for sunrise and sunset views from the hilltop.",
      image: "/placeholder.svg?height=400&width=600&text=Netarhat",
      category: "packages",
      location: "Latehar",
      rating: 4.5,
      reviews: 289,
    },
    {
      id: 8,
      title: "Jharkhand Tribal Package",
      description: "Cultural tour exploring tribal villages, handicrafts, and traditional lifestyle of Jharkhand.",
      image: "/placeholder.svg?height=400&width=600&text=Jharkhand+Tribal",
      category: "packages",
      location: "Multiple Districts",
      rating: 4.4,
      reviews: 156,
    },
  ],
  "andhra-pradesh": [
    {
      id: 1,
      title: "Tirupati Balaji Temple",
      description: "World's most visited Hindu temple dedicated to Lord Venkateswara, located on the Tirumala hills.",
      image: "/placeholder.svg?height=400&width=600&text=Tirupati+Temple",
      category: "temple",
      location: "Tirupati",
      rating: 4.9,
      reviews: 5678,
    },
    {
      id: 2,
      title: "Araku Valley",
      description: "Scenic hill station known for coffee plantations, tribal culture, and pleasant climate.",
      image: "/placeholder.svg?height=400&width=600&text=Araku+Valley",
      category: "packages",
      location: "Visakhapatnam",
      rating: 4.7,
      reviews: 1234,
    },
    {
      id: 3,
      title: "Borra Caves",
      description:
        "Million-year-old limestone caves with stalactite and stalagmite formations in the Ananthagiri Hills.",
      image: "/placeholder.svg?height=400&width=600&text=Borra+Caves",
      category: "temple",
      location: "Visakhapatnam",
      rating: 4.5,
      reviews: 567,
    },
    {
      id: 4,
      title: "Horsley Hills",
      description: "Summer retreat hill station with eucalyptus trees, pleasant climate, and adventure activities.",
      image: "/placeholder.svg?height=400&width=600&text=Horsley+Hills",
      category: "packages",
      location: "Chittoor",
      rating: 4.4,
      reviews: 345,
    },
    {
      id: 5,
      title: "Srisailam Temple",
      description:
        "One of the twelve Jyotirlingas, ancient temple dedicated to Lord Mallikarjuna on the banks of Krishna river.",
      image: "/placeholder.svg?height=400&width=600&text=Srisailam+Temple",
      category: "temple",
      location: "Kurnool",
      rating: 4.8,
      reviews: 1567,
    },
    {
      id: 6,
      title: "Nagarjuna Sagar Dam",
      description: "One of India's largest dams with a beautiful reservoir, island museum, and boating facilities.",
      image: "/placeholder.svg?height=400&width=600&text=Nagarjuna+Sagar",
      category: "packages",
      location: "Nalgonda",
      rating: 4.3,
      reviews: 456,
    },
    {
      id: 7,
      title: "Vizag Beaches",
      description: "Beautiful coastal city with pristine beaches, submarine museum, and scenic coastal drives.",
      image: "/placeholder.svg?height=400&width=600&text=Vizag+Beaches",
      category: "packages",
      location: "Visakhapatnam",
      rating: 4.6,
      reviews: 789,
    },
    {
      id: 8,
      title: "Andhra Pradesh Spiritual Package",
      description: "Pilgrimage tour covering Tirupati, Srisailam, and other sacred temples of Andhra Pradesh.",
      image: "/placeholder.svg?height=400&width=600&text=AP+Spiritual",
      category: "packages",
      location: "Multiple Cities",
      rating: 4.7,
      reviews: 234,
    },
  ],
}

export default function DestinationPage() {
  const { selectedState } = useStateContext()
  const destinations =
    stateDestinations[selectedState.id as keyof typeof stateDestinations] || stateDestinations.chhattisgarh

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
              <span className="text-lg font-bold">{selectedState.name} Destinations</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experiences
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Explore {selectedState.name} Destinations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {selectedState.description} - Discover amazing destinations across {selectedState.name}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search destinations..." className="pl-9" />
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="waterfall">Waterfalls</TabsTrigger>
            <TabsTrigger value="national-park">National Parks</TabsTrigger>
            <TabsTrigger value="temple">Heritage</TabsTrigger>
            <TabsTrigger value="waterpark">Water Parks</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="waterfall">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "waterfall")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="national-park">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "national-park")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="temple">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "temple")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="waterpark">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "waterpark")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "packages")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function DestinationCard({ destination }: { destination: any }) {
  const { selectedState } = useStateContext()

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 capitalize">{destination.category.replace("-", " ")}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{destination.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{destination.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{destination.location}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span>{destination.rating}</span>
            <span className="text-muted-foreground">({destination.reviews})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/destination/${selectedState.id}/${destination.id}`} className="flex-1">
          <Button variant="outline" className="w-full bg-transparent">
            View Details
          </Button>
        </Link>
        <Link href="/plan" className="flex-1">
          <Button className="w-full">Plan Your Trip</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
