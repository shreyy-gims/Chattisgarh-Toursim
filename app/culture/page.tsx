"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Music, Palette, ChefHat, Users, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useStateContext } from "@/contexts/state-context"

const stateCultureData = {
  chhattisgarh: {
    festivals: [
      {
        id: 1,
        title: "Bastar Dussehra",
        description:
          "The world's longest festival celebrated for 75 days, showcasing unique tribal traditions and rituals.",
        image: "/placeholder.svg?height=400&width=600&text=Bastar+Dussehra",
        duration: "75 days",
        location: "Bastar",
        season: "September - November",
        highlights: ["Rath Yatra", "Tribal Dances", "Traditional Rituals", "Cultural Processions"],
      },
      {
        id: 2,
        title: "Hareli Festival",
        description:
          "Agricultural festival marking the beginning of farming season with bullock worship and folk performances.",
        image: "/placeholder.svg?height=400&width=600&text=Hareli+Festival",
        duration: "1 day",
        location: "Statewide",
        season: "July - August",
        highlights: ["Bullock Decoration", "Folk Songs", "Traditional Games", "Community Feasts"],
      },
      {
        id: 3,
        title: "Madai Festival",
        description:
          "Tribal fair celebrated by Gond and Maria tribes with colorful processions and handicraft markets.",
        image: "/placeholder.svg?height=400&width=600&text=Madai+Festival",
        duration: "3-5 days",
        location: "Bastar Region",
        season: "December - February",
        highlights: ["Tribal Markets", "Folk Dances", "Traditional Crafts", "Cultural Exchange"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Panthi Dance",
        description:
          "Traditional dance form performed during religious festivals, especially associated with Satnami community.",
        image: "/placeholder.svg?height=400&width=600&text=Panthi+Dance",
        origin: "Satnami Community",
        occasion: "Religious Festivals",
        characteristics: ["Rhythmic Movements", "Group Performance", "Devotional Songs", "Traditional Costumes"],
      },
      {
        id: 2,
        title: "Raut Nacha",
        description: "Folk dance performed by Yadav community depicting stories of Lord Krishna and his adventures.",
        image: "/placeholder.svg?height=400&width=600&text=Raut+Nacha",
        origin: "Yadav Community",
        occasion: "Dev Uthani Ekadashi",
        characteristics: ["Krishna Stories", "Colorful Costumes", "Musical Instruments", "Dramatic Performance"],
      },
      {
        id: 3,
        title: "Karma Dance",
        description: "Tribal dance celebrating the worship of Karma tree, performed during Karma festival.",
        image: "/placeholder.svg?height=400&width=600&text=Karma+Dance",
        origin: "Tribal Communities",
        occasion: "Karma Festival",
        characteristics: ["Nature Worship", "Circular Formation", "Traditional Songs", "Seasonal Celebration"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Chila",
        description: "Traditional rice pancake served with various chutneys and curries, a staple breakfast dish.",
        image: "/placeholder.svg?height=400&width=600&text=Chila",
        type: "Breakfast",
        ingredients: ["Rice", "Lentils", "Spices"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Farra",
        description: "Steamed rice flour dumplings stuffed with spiced lentils, a popular snack and festival food.",
        image: "/placeholder.svg?height=400&width=600&text=Farra",
        type: "Snack",
        ingredients: ["Rice Flour", "Lentils", "Spices"],
        region: "Central Chhattisgarh",
      },
      {
        id: 3,
        title: "Bafauri",
        description: "Steamed lentil cakes served with spicy chutney, a healthy and nutritious traditional dish.",
        image: "/placeholder.svg?height=400&width=600&text=Bafauri",
        type: "Main Course",
        ingredients: ["Chana Dal", "Spices", "Herbs"],
        region: "Bastar",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Dhokra Art",
        description: "Ancient lost-wax metal casting technique used to create intricate brass and bronze artifacts.",
        image: "/placeholder.svg?height=400&width=600&text=Dhokra+Art",
        technique: "Lost-wax casting",
        materials: ["Brass", "Bronze", "Wax"],
        products: ["Figurines", "Jewelry", "Decorative Items"],
      },
      {
        id: 2,
        title: "Bamboo Craft",
        description:
          "Traditional bamboo weaving creating functional and decorative items using locally sourced bamboo.",
        image: "/placeholder.svg?height=400&width=600&text=Bamboo+Craft",
        technique: "Weaving",
        materials: ["Bamboo", "Natural Dyes"],
        products: ["Baskets", "Furniture", "Decorative Items"],
      },
      {
        id: 3,
        title: "Godna Art",
        description:
          "Traditional tattoo art form now adapted to canvas and walls, featuring geometric and nature patterns.",
        image: "/placeholder.svg?height=400&width=600&text=Godna+Art",
        technique: "Pattern Drawing",
        materials: ["Natural Pigments", "Canvas"],
        products: ["Wall Art", "Canvas Paintings", "Body Art"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Pandavani",
        description: "Musical storytelling tradition narrating tales from Mahabharata, performed by traveling artists.",
        image: "/placeholder.svg?height=400&width=600&text=Pandavani",
        style: "Narrative Singing",
        instruments: ["Tambura", "Manjira"],
        themes: ["Mahabharata", "Moral Stories"],
      },
      {
        id: 2,
        title: "Bihav Geet",
        description: "Traditional wedding songs sung during marriage ceremonies, expressing joy and blessings.",
        image: "/placeholder.svg?height=400&width=600&text=Bihav+Geet",
        style: "Folk Songs",
        instruments: ["Dhol", "Manjeera"],
        themes: ["Wedding", "Celebration", "Blessings"],
      },
      {
        id: 3,
        title: "Sohar Geet",
        description: "Songs sung during childbirth and naming ceremonies, celebrating new life and family joy.",
        image: "/placeholder.svg?height=400&width=600&text=Sohar+Geet",
        style: "Ceremonial Songs",
        instruments: ["Traditional Drums"],
        themes: ["Birth", "Family", "Celebration"],
      },
    ],
  },
  rajasthan: {
    festivals: [
      {
        id: 1,
        title: "Desert Festival",
        description:
          "Colorful festival in Jaisalmer showcasing Rajasthani folk culture, camel races, and desert camping.",
        image: "/placeholder.svg?height=400&width=600&text=Desert+Festival",
        duration: "3 days",
        location: "Jaisalmer",
        season: "February",
        highlights: ["Camel Races", "Folk Music", "Desert Safari", "Cultural Programs"],
      },
      {
        id: 2,
        title: "Pushkar Camel Fair",
        description:
          "World's largest camel fair combining livestock trading with cultural festivities and spiritual activities.",
        image: "/placeholder.svg?height=400&width=600&text=Pushkar+Fair",
        duration: "5 days",
        location: "Pushkar",
        season: "November",
        highlights: ["Camel Trading", "Folk Performances", "Holy Dip", "Cultural Events"],
      },
      {
        id: 3,
        title: "Teej Festival",
        description: "Monsoon festival celebrated by women with traditional songs, dances, and colorful processions.",
        image: "/placeholder.svg?height=400&width=600&text=Teej+Festival",
        duration: "2 days",
        location: "Statewide",
        season: "August",
        highlights: ["Women's Celebration", "Traditional Swings", "Folk Songs", "Colorful Attire"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Ghoomar",
        description:
          "Traditional folk dance performed by women in flowing ghagras, creating mesmerizing circular movements.",
        image: "/placeholder.svg?height=400&width=600&text=Ghoomar+Dance",
        origin: "Royal Courts",
        occasion: "Festivals & Celebrations",
        characteristics: ["Circular Movements", "Colorful Ghagras", "Group Performance", "Graceful Gestures"],
      },
      {
        id: 2,
        title: "Kalbeliya",
        description: "UNESCO recognized dance form performed by Kalbeliya community, mimicking serpent movements.",
        image: "/placeholder.svg?height=400&width=600&text=Kalbeliya+Dance",
        origin: "Kalbeliya Community",
        occasion: "Cultural Events",
        characteristics: ["Serpent Movements", "Black Costumes", "Musical Instruments", "Acrobatic Skills"],
      },
      {
        id: 3,
        title: "Bhavai",
        description:
          "Acrobatic dance performed while balancing multiple pots on the head, showcasing incredible skill.",
        image: "/placeholder.svg?height=400&width=600&text=Bhavai+Dance",
        origin: "Folk Tradition",
        occasion: "Entertainment",
        characteristics: ["Pot Balancing", "Acrobatic Skills", "Folk Music", "Entertainment"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Dal Baati Churma",
        description: "Iconic Rajasthani dish with baked wheat balls, lentil curry, and sweet crumbled wheat.",
        image: "/placeholder.svg?height=400&width=600&text=Dal+Baati+Churma",
        type: "Main Course",
        ingredients: ["Wheat", "Lentils", "Ghee", "Jaggery"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Laal Maas",
        description: "Spicy mutton curry cooked with red chilies and traditional Rajasthani spices.",
        image: "/placeholder.svg?height=400&width=600&text=Laal+Maas",
        type: "Main Course",
        ingredients: ["Mutton", "Red Chilies", "Spices"],
        region: "Jodhpur",
      },
      {
        id: 3,
        title: "Ghevar",
        description: "Traditional sweet made during festivals, with honeycomb-like texture and sugar syrup.",
        image: "/placeholder.svg?height=400&width=600&text=Ghevar",
        type: "Dessert",
        ingredients: ["Flour", "Ghee", "Sugar", "Milk"],
        region: "Jaipur",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Miniature Paintings",
        description:
          "Intricate paintings depicting royal life, mythology, and nature in vibrant colors and fine details.",
        image: "/placeholder.svg?height=400&width=600&text=Miniature+Paintings",
        technique: "Fine Brush Work",
        materials: ["Natural Pigments", "Paper", "Gold Leaf"],
        products: ["Paintings", "Manuscripts", "Decorative Art"],
      },
      {
        id: 2,
        title: "Blue Pottery",
        description: "Distinctive pottery from Jaipur featuring blue and white designs with Persian influence.",
        image: "/placeholder.svg?height=400&width=600&text=Blue+Pottery",
        technique: "Glazing",
        materials: ["Clay", "Blue Glaze", "White Base"],
        products: ["Vases", "Tiles", "Decorative Items"],
      },
      {
        id: 3,
        title: "Bandhani",
        description:
          "Traditional tie-dye technique creating colorful patterns on fabrics, especially sarees and turbans.",
        image: "/placeholder.svg?height=400&width=600&text=Bandhani",
        technique: "Tie-Dye",
        materials: ["Cotton", "Silk", "Natural Dyes"],
        products: ["Sarees", "Turbans", "Scarves"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Manganiyar Music",
        description:
          "Traditional folk music performed by Manganiyar community with soulful melodies and ancient instruments.",
        image: "/placeholder.svg?height=400&width=600&text=Manganiyar+Music",
        style: "Folk Music",
        instruments: ["Kamaycha", "Khartal", "Dholak"],
        themes: ["Love", "Valor", "Desert Life"],
      },
      {
        id: 2,
        title: "Langa Music",
        description:
          "Sufi-influenced music tradition performed by Langa community with mystical and devotional themes.",
        image: "/placeholder.svg?height=400&width=600&text=Langa+Music",
        style: "Sufi Music",
        instruments: ["Sarangi", "Algoza", "Tabla"],
        themes: ["Spirituality", "Devotion", "Mysticism"],
      },
      {
        id: 3,
        title: "Rajasthani Folk Songs",
        description: "Traditional ballads and songs celebrating heroic tales, love stories, and desert life.",
        image: "/placeholder.svg?height=400&width=600&text=Rajasthani+Folk",
        style: "Ballads",
        instruments: ["Dhol", "Shehnai", "Harmonium"],
        themes: ["Heroism", "Romance", "Folk Tales"],
      },
    ],
  },
  kerala: {
    festivals: [
      {
        id: 1,
        title: "Onam",
        description:
          "Kerala's harvest festival celebrated with flower carpets, traditional feast, and cultural programs.",
        image: "/placeholder.svg?height=400&width=600&text=Onam+Festival",
        duration: "10 days",
        location: "Statewide",
        season: "August - September",
        highlights: ["Pookalam", "Onam Sadhya", "Kathakali", "Boat Races"],
      },
      {
        id: 2,
        title: "Thrissur Pooram",
        description: "Spectacular temple festival featuring decorated elephants, traditional music, and fireworks.",
        image: "/placeholder.svg?height=400&width=600&text=Thrissur+Pooram",
        duration: "1 day",
        location: "Thrissur",
        season: "April - May",
        highlights: ["Elephant Procession", "Traditional Music", "Fireworks", "Temple Rituals"],
      },
      {
        id: 3,
        title: "Nehru Trophy Boat Race",
        description: "Famous snake boat race on Vembanad Lake attracting thousands of spectators annually.",
        image: "/placeholder.svg?height=400&width=600&text=Boat+Race",
        duration: "1 day",
        location: "Alappuzha",
        season: "August",
        highlights: ["Snake Boats", "Traditional Songs", "Water Sports", "Cultural Events"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Kathakali",
        description: "Classical dance-drama with elaborate costumes, makeup, and storytelling through expressions.",
        image: "/placeholder.svg?height=400&width=600&text=Kathakali",
        origin: "Classical Tradition",
        occasion: "Cultural Performances",
        characteristics: ["Elaborate Makeup", "Storytelling", "Classical Music", "Dramatic Expressions"],
      },
      {
        id: 2,
        title: "Mohiniyattam",
        description: "Classical dance form performed by women with graceful movements and traditional Kerala music.",
        image: "/placeholder.svg?height=400&width=600&text=Mohiniyattam",
        origin: "Classical Tradition",
        occasion: "Cultural Events",
        characteristics: ["Graceful Movements", "Traditional Costumes", "Classical Music", "Solo Performance"],
      },
      {
        id: 3,
        title: "Theyyam",
        description: "Ritualistic dance form where performers embody deities with elaborate costumes and makeup.",
        image: "/placeholder.svg?height=400&width=600&text=Theyyam",
        origin: "Folk Tradition",
        occasion: "Religious Festivals",
        characteristics: ["Divine Embodiment", "Ritualistic", "Elaborate Costumes", "Spiritual Significance"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Kerala Sadhya",
        description: "Traditional vegetarian feast served on banana leaf with multiple curries and accompaniments.",
        image: "/placeholder.svg?height=400&width=600&text=Kerala+Sadhya",
        type: "Feast",
        ingredients: ["Rice", "Coconut", "Vegetables", "Spices"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Fish Curry",
        description: "Spicy fish curry cooked in coconut milk with traditional Kerala spices and curry leaves.",
        image: "/placeholder.svg?height=400&width=600&text=Fish+Curry",
        type: "Main Course",
        ingredients: ["Fish", "Coconut Milk", "Spices", "Curry Leaves"],
        region: "Coastal Kerala",
      },
      {
        id: 3,
        title: "Payasam",
        description: "Traditional sweet dessert made with rice, milk, and jaggery, served during festivals.",
        image: "/placeholder.svg?height=400&width=600&text=Payasam",
        type: "Dessert",
        ingredients: ["Rice", "Milk", "Jaggery", "Cardamom"],
        region: "Statewide",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Coir Craft",
        description: "Traditional craft using coconut fiber to create mats, ropes, and decorative items.",
        image: "/placeholder.svg?height=400&width=600&text=Coir+Craft",
        technique: "Fiber Weaving",
        materials: ["Coconut Fiber", "Natural Dyes"],
        products: ["Mats", "Ropes", "Decorative Items"],
      },
      {
        id: 2,
        title: "Kathakali Masks",
        description: "Intricate masks and makeup used in Kathakali performances, representing different characters.",
        image: "/placeholder.svg?height=400&width=600&text=Kathakali+Masks",
        technique: "Mask Making",
        materials: ["Wood", "Natural Pigments", "Paper"],
        products: ["Masks", "Headgear", "Costumes"],
      },
      {
        id: 3,
        title: "Aranmula Mirrors",
        description: "Unique metal mirrors made using ancient techniques, considered auspicious and decorative.",
        image: "/placeholder.svg?height=400&width=600&text=Aranmula+Mirrors",
        technique: "Metal Casting",
        materials: ["Bronze", "Copper", "Tin"],
        products: ["Mirrors", "Decorative Items", "Gifts"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Carnatic Music",
        description: "Classical South Indian music tradition with complex ragas and devotional themes.",
        image: "/placeholder.svg?height=400&width=600&text=Carnatic+Music",
        style: "Classical Music",
        instruments: ["Veena", "Mridangam", "Violin"],
        themes: ["Devotion", "Classical Ragas", "Spiritual"],
      },
      {
        id: 2,
        title: "Sopana Sangeetham",
        description: "Temple music tradition performed during religious ceremonies and festivals.",
        image: "/placeholder.svg?height=400&width=600&text=Sopana+Music",
        style: "Temple Music",
        instruments: ["Chenda", "Madhalam", "Conch"],
        themes: ["Religious", "Temple Rituals", "Devotional"],
      },
      {
        id: 3,
        title: "Mappila Songs",
        description: "Folk songs of the Muslim community in Kerala, blending Arabic and Malayalam influences.",
        image: "/placeholder.svg?height=400&width=600&text=Mappila+Songs",
        style: "Folk Music",
        instruments: ["Harmonium", "Tabla", "Violin"],
        themes: ["Love", "Religion", "Social Life"],
      },
    ],
  },
  himachal: {
    festivals: [
      {
        id: 1,
        title: "Kullu Dussehra",
        description:
          "Unique Dussehra celebration in Kullu valley with processions of local deities and cultural programs.",
        image: "/placeholder.svg?height=400&width=600&text=Kullu+Dussehra",
        duration: "7 days",
        location: "Kullu",
        season: "October",
        highlights: ["Deity Processions", "Folk Dances", "Traditional Music", "Cultural Events"],
      },
      {
        id: 2,
        title: "Shimla Summer Festival",
        description: "Cultural festival showcasing Himachali folk culture, handicrafts, and traditional performances.",
        image: "/placeholder.svg?height=400&width=600&text=Shimla+Festival",
        duration: "3 days",
        location: "Shimla",
        season: "May - June",
        highlights: ["Folk Performances", "Handicraft Exhibition", "Cultural Programs", "Local Cuisine"],
      },
      {
        id: 3,
        title: "Losar Festival",
        description:
          "Tibetan New Year celebrated in Spiti and Lahaul valleys with traditional rituals and festivities.",
        image: "/placeholder.svg?height=400&width=600&text=Losar+Festival",
        duration: "3 days",
        location: "Spiti & Lahaul",
        season: "February - March",
        highlights: ["Tibetan Rituals", "Monastery Celebrations", "Traditional Food", "Cultural Exchange"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Nati Dance",
        description:
          "Traditional folk dance of Himachal Pradesh performed in groups with rhythmic steps and folk songs.",
        image: "/placeholder.svg?height=400&width=600&text=Nati+Dance",
        origin: "Folk Tradition",
        occasion: "Festivals & Celebrations",
        characteristics: ["Group Performance", "Rhythmic Steps", "Folk Songs", "Traditional Costumes"],
      },
      {
        id: 2,
        title: "Chham Dance",
        description: "Masked dance performed in Buddhist monasteries depicting the victory of good over evil.",
        image: "/placeholder.svg?height=400&width=600&text=Chham+Dance",
        origin: "Buddhist Tradition",
        occasion: "Monastery Festivals",
        characteristics: ["Masked Performance", "Religious Significance", "Colorful Costumes", "Spiritual Themes"],
      },
      {
        id: 3,
        title: "Kayang Dance",
        description: "Traditional dance of Kinnaur region performed during harvest festivals and celebrations.",
        image: "/placeholder.svg?height=400&width=600&text=Kayang+Dance",
        origin: "Kinnaur Region",
        occasion: "Harvest Festivals",
        characteristics: ["Harvest Celebration", "Traditional Music", "Regional Costumes", "Community Participation"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Dham",
        description:
          "Traditional feast prepared by special cooks called 'botis' served during festivals and ceremonies.",
        image: "/placeholder.svg?height=400&width=600&text=Himachali+Dham",
        type: "Feast",
        ingredients: ["Rice", "Lentils", "Vegetables", "Yogurt"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Chana Madra",
        description: "Chickpea curry cooked in yogurt and spices, a signature dish of Himachali cuisine.",
        image: "/placeholder.svg?height=400&width=600&text=Chana+Madra",
        type: "Main Course",
        ingredients: ["Chickpeas", "Yogurt", "Spices", "Ghee"],
        region: "Central Himachal",
      },
      {
        id: 3,
        title: "Siddu",
        description: "Steamed bread stuffed with poppy seeds or walnuts, served with ghee and dal.",
        image: "/placeholder.svg?height=400&width=600&text=Siddu",
        type: "Bread",
        ingredients: ["Wheat Flour", "Poppy Seeds", "Walnuts"],
        region: "Shimla & Kinnaur",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Chamba Rumal",
        description: "Embroidered handkerchiefs from Chamba featuring intricate designs and mythological themes.",
        image: "/placeholder.svg?height=400&width=600&text=Chamba+Rumal",
        technique: "Embroidery",
        materials: ["Silk", "Cotton", "Colored Threads"],
        products: ["Handkerchiefs", "Wall Hangings", "Decorative Items"],
      },
      {
        id: 2,
        title: "Kinnauri Shawls",
        description: "Handwoven woolen shawls from Kinnaur region known for their geometric patterns and warmth.",
        image: "/placeholder.svg?height=400&width=600&text=Kinnauri+Shawls",
        technique: "Hand Weaving",
        materials: ["Wool", "Natural Dyes"],
        products: ["Shawls", "Blankets", "Woolen Garments"],
      },
      {
        id: 3,
        title: "Wood Carving",
        description:
          "Traditional wood carving from temples and houses featuring intricate designs and religious motifs.",
        image: "/placeholder.svg?height=400&width=600&text=Himachal+Wood+Carving",
        technique: "Wood Carving",
        materials: ["Deodar Wood", "Pine Wood"],
        products: ["Temple Decorations", "Furniture", "Decorative Items"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Himachali Folk Songs",
        description: "Traditional songs celebrating nature, love, and mountain life with simple melodies.",
        image: "/placeholder.svg?height=400&width=600&text=Himachali+Folk",
        style: "Folk Music",
        instruments: ["Dhol", "Shehnai", "Flute"],
        themes: ["Nature", "Love", "Mountain Life"],
      },
      {
        id: 2,
        title: "Buddhist Chants",
        description: "Sacred chants performed in monasteries of Spiti and Lahaul valleys during religious ceremonies.",
        image: "/placeholder.svg?height=400&width=600&text=Buddhist+Chants",
        style: "Religious Music",
        instruments: ["Horns", "Drums", "Bells"],
        themes: ["Spirituality", "Meditation", "Religious Rituals"],
      },
      {
        id: 3,
        title: "Jhoori Songs",
        description: "Traditional work songs sung during agricultural activities and community work.",
        image: "/placeholder.svg?height=400&width=600&text=Jhoori+Songs",
        style: "Work Songs",
        instruments: ["Simple Percussion", "Voice"],
        themes: ["Agriculture", "Community Work", "Daily Life"],
      },
    ],
  },
  goa: {
    festivals: [
      {
        id: 1,
        title: "Carnival",
        description: "Colorful festival with parades, music, dance, and elaborate floats celebrating Goan culture.",
        image: "/placeholder.svg?height=400&width=600&text=Goa+Carnival",
        duration: "4 days",
        location: "Statewide",
        season: "February - March",
        highlights: ["Colorful Parades", "Music & Dance", "Elaborate Floats", "Street Celebrations"],
      },
      {
        id: 2,
        title: "Shigmo",
        description: "Spring festival celebrated with folk dances, traditional music, and colorful processions.",
        image: "/placeholder.svg?height=400&width=600&text=Shigmo+Festival",
        duration: "14 days",
        location: "Statewide",
        season: "March",
        highlights: ["Folk Dances", "Traditional Music", "Colorful Processions", "Cultural Programs"],
      },
      {
        id: 3,
        title: "Feast of St. Francis Xavier",
        description: "Religious festival honoring the patron saint of Goa with prayers, processions, and celebrations.",
        image: "/placeholder.svg?height=400&width=600&text=St+Francis+Feast",
        duration: "10 days",
        location: "Old Goa",
        season: "December",
        highlights: ["Religious Processions", "Prayers", "Cultural Events", "Traditional Food"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Fugdi",
        description: "Traditional folk dance performed by women in a circle with rhythmic clapping and singing.",
        image: "/placeholder.svg?height=400&width=600&text=Fugdi+Dance",
        origin: "Folk Tradition",
        occasion: "Festivals & Celebrations",
        characteristics: ["Circular Formation", "Rhythmic Clapping", "Group Singing", "Traditional Costumes"],
      },
      {
        id: 2,
        title: "Dhalo",
        description: "Traditional dance performed during harvest season with songs praising Hindu deities.",
        image: "/placeholder.svg?height=400&width=600&text=Dhalo+Dance",
        origin: "Folk Tradition",
        occasion: "Harvest Season",
        characteristics: ["Harvest Celebration", "Devotional Songs", "Group Performance", "Traditional Music"],
      },
      {
        id: 3,
        title: "Corridinho",
        description: "Portuguese-influenced dance form popular during Carnival and festive occasions.",
        image: "/placeholder.svg?height=400&width=600&text=Corridinho+Dance",
        origin: "Portuguese Influence",
        occasion: "Carnival & Festivals",
        characteristics: ["Portuguese Influence", "Partner Dance", "Festive Music", "Cultural Fusion"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Fish Curry Rice",
        description: "Goa's staple dish with spicy fish curry cooked in coconut milk served with steamed rice.",
        image: "/placeholder.svg?height=400&width=600&text=Goan+Fish+Curry",
        type: "Main Course",
        ingredients: ["Fish", "Coconut", "Spices", "Rice"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Bebinca",
        description: "Traditional Goan dessert with multiple layers made from coconut milk, eggs, and sugar.",
        image: "/placeholder.svg?height=400&width=600&text=Bebinca",
        type: "Dessert",
        ingredients: ["Coconut Milk", "Eggs", "Sugar", "Flour"],
        region: "Statewide",
      },
      {
        id: 3,
        title: "Vindaloo",
        description: "Spicy curry dish with Portuguese influence, traditionally made with pork and vinegar.",
        image: "/placeholder.svg?height=400&width=600&text=Vindaloo",
        type: "Main Course",
        ingredients: ["Pork", "Vinegar", "Spices", "Garlic"],
        region: "Statewide",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Azulejo Tiles",
        description: "Portuguese-style decorative tiles featuring blue and white patterns used in architecture.",
        image: "/placeholder.svg?height=400&width=600&text=Azulejo+Tiles",
        technique: "Tile Painting",
        materials: ["Ceramic", "Blue Pigments", "White Base"],
        products: ["Wall Tiles", "Decorative Panels", "Architectural Elements"],
      },
      {
        id: 2,
        title: "Shell Craft",
        description: "Decorative items made from seashells collected from Goan beaches, popular tourist souvenirs.",
        image: "/placeholder.svg?height=400&width=600&text=Shell+Craft",
        technique: "Shell Decoration",
        materials: ["Seashells", "Adhesives", "Decorative Elements"],
        products: ["Decorative Items", "Jewelry", "Souvenirs"],
      },
      {
        id: 3,
        title: "Coconut Palm Craft",
        description:
          "Traditional craft using coconut palm leaves and fibers to create functional and decorative items.",
        image: "/placeholder.svg?height=400&width=600&text=Coconut+Craft",
        technique: "Palm Weaving",
        materials: ["Coconut Palm", "Natural Fibers"],
        products: ["Baskets", "Mats", "Decorative Items"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Fado",
        description: "Portuguese-influenced melancholic music tradition with guitar accompaniment and soulful vocals.",
        image: "/placeholder.svg?height=400&width=600&text=Goan+Fado",
        style: "Portuguese Music",
        instruments: ["Guitar", "Mandolin", "Violin"],
        themes: ["Love", "Longing", "Portuguese Heritage"],
      },
      {
        id: 2,
        title: "Konkani Folk Songs",
        description: "Traditional songs in Konkani language celebrating local culture, festivals, and daily life.",
        image: "/placeholder.svg?height=400&width=600&text=Konkani+Folk",
        style: "Folk Music",
        instruments: ["Ghumot", "Shehnai", "Dhol"],
        themes: ["Local Culture", "Festivals", "Daily Life"],
      },
      {
        id: 3,
        title: "Mando",
        description:
          "Traditional Goan song form with romantic themes, often performed during weddings and celebrations.",
        image: "/placeholder.svg?height=400&width=600&text=Mando+Songs",
        style: "Traditional Songs",
        instruments: ["Guitar", "Violin", "Tabla"],
        themes: ["Romance", "Weddings", "Celebrations"],
      },
    ],
  },
  "tamil-nadu": {
    festivals: [
      {
        id: 1,
        title: "Pongal",
        description: "Harvest festival celebrated with rice dishes, decorated cattle, and traditional games.",
        image: "/placeholder.svg?height=400&width=600&text=Pongal+Festival",
        duration: "4 days",
        location: "Statewide",
        season: "January",
        highlights: ["Rice Cooking", "Cattle Decoration", "Traditional Games", "Cultural Programs"],
      },
      {
        id: 2,
        title: "Meenakshi Thirukalyanam",
        description:
          "Grand temple festival celebrating the divine marriage of Goddess Meenakshi and Lord Sundareswarar.",
        image: "/placeholder.svg?height=400&width=600&text=Meenakshi+Festival",
        duration: "10 days",
        location: "Madurai",
        season: "April - May",
        highlights: ["Temple Processions", "Classical Music", "Traditional Dance", "Religious Ceremonies"],
      },
      {
        id: 3,
        title: "Karthigai Deepam",
        description: "Festival of lights celebrated with oil lamps, especially spectacular at Tiruvannamalai.",
        image: "/placeholder.svg?height=400&width=600&text=Karthigai+Deepam",
        duration: "10 days",
        location: "Statewide",
        season: "November - December",
        highlights: ["Oil Lamps", "Hill Lighting", "Temple Festivals", "Cultural Events"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Bharatanatyam",
        description: "Classical dance form with precise movements, expressions, and spiritual themes.",
        image: "/placeholder.svg?height=400&width=600&text=Bharatanatyam",
        origin: "Classical Tradition",
        occasion: "Cultural Performances",
        characteristics: ["Precise Movements", "Facial Expressions", "Classical Music", "Spiritual Themes"],
      },
      {
        id: 2,
        title: "Karagattam",
        description: "Folk dance performed with decorated pots balanced on the head, celebrating rain goddess.",
        image: "/placeholder.svg?height=400&width=600&text=Karagattam",
        origin: "Folk Tradition",
        occasion: "Rain Festivals",
        characteristics: ["Pot Balancing", "Acrobatic Skills", "Folk Music", "Rain Worship"],
      },
      {
        id: 3,
        title: "Oyilattam",
        description: "Traditional dance performed with colorful scarves, depicting various emotions and stories.",
        image: "/placeholder.svg?height=400&width=600&text=Oyilattam",
        origin: "Folk Tradition",
        occasion: "Festivals & Celebrations",
        characteristics: ["Colorful Scarves", "Emotional Expression", "Group Performance", "Traditional Music"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Sambar Rice",
        description: "Traditional lentil curry with vegetables served over rice, a staple of Tamil cuisine.",
        image: "/placeholder.svg?height=400&width=600&text=Sambar+Rice",
        type: "Main Course",
        ingredients: ["Lentils", "Vegetables", "Tamarind", "Spices"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Chettinad Chicken",
        description: "Spicy chicken curry from Chettinad region known for its unique blend of spices.",
        image: "/placeholder.svg?height=400&width=600&text=Chettinad+Chicken",
        type: "Main Course",
        ingredients: ["Chicken", "Chettinad Spices", "Coconut", "Curry Leaves"],
        region: "Chettinad",
      },
      {
        id: 3,
        title: "Mysore Pak",
        description: "Traditional sweet made with gram flour, ghee, and sugar, originating from Mysore.",
        image: "/placeholder.svg?height=400&width=600&text=Mysore+Pak",
        type: "Dessert",
        ingredients: ["Gram Flour", "Ghee", "Sugar", "Cardamom"],
        region: "Statewide",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Tanjore Paintings",
        description: "Classical paintings with gold foil work depicting Hindu deities and mythological scenes.",
        image: "/placeholder.svg?height=400&width=600&text=Tanjore+Paintings",
        technique: "Gold Foil Work",
        materials: ["Canvas", "Gold Foil", "Natural Pigments"],
        products: ["Religious Paintings", "Decorative Art", "Wall Hangings"],
      },
      {
        id: 2,
        title: "Kanchipuram Silk",
        description: "Handwoven silk sarees known for their rich colors, gold borders, and intricate designs.",
        image: "/placeholder.svg?height=400&width=600&text=Kanchipuram+Silk",
        technique: "Hand Weaving",
        materials: ["Pure Silk", "Gold Thread", "Natural Dyes"],
        products: ["Sarees", "Silk Fabrics", "Traditional Wear"],
      },
      {
        id: 3,
        title: "Bronze Sculptures",
        description: "Traditional bronze casting creating exquisite sculptures of deities and cultural figures.",
        image: "/placeholder.svg?height=400&width=600&text=Bronze+Sculptures",
        technique: "Lost-wax Casting",
        materials: ["Bronze", "Wax", "Clay Molds"],
        products: ["Religious Sculptures", "Decorative Items", "Art Pieces"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Carnatic Classical Music",
        description: "South Indian classical music tradition with complex ragas and devotional compositions.",
        image: "/placeholder.svg?height=400&width=600&text=Carnatic+Classical",
        style: "Classical Music",
        instruments: ["Veena", "Mridangam", "Violin", "Flute"],
        themes: ["Devotional", "Classical Ragas", "Spiritual"],
      },
      {
        id: 2,
        title: "Nadaswaram Music",
        description: "Traditional wind instrument music performed during temple festivals and weddings.",
        image: "/placeholder.svg?height=400&width=600&text=Nadaswaram",
        style: "Temple Music",
        instruments: ["Nadaswaram", "Thavil", "Drums"],
        themes: ["Temple Festivals", "Weddings", "Religious Ceremonies"],
      },
      {
        id: 3,
        title: "Tamil Folk Songs",
        description: "Traditional songs celebrating rural life, harvest, and local deities in Tamil language.",
        image: "/placeholder.svg?height=400&width=600&text=Tamil+Folk",
        style: "Folk Music",
        instruments: ["Parai", "Thappu", "Folk Instruments"],
        themes: ["Rural Life", "Harvest", "Local Deities"],
      },
    ],
  },
  karnataka: {
    festivals: [
      {
        id: 1,
        title: "Mysore Dasara",
        description:
          "Grand festival celebrating the victory of good over evil with royal processions and cultural events.",
        image: "/placeholder.svg?height=400&width=600&text=Mysore+Dasara",
        duration: "10 days",
        location: "Mysore",
        season: "September - October",
        highlights: ["Royal Procession", "Decorated Elephants", "Cultural Programs", "Palace Illumination"],
      },
      {
        id: 2,
        title: "Hampi Festival",
        description:
          "Cultural festival showcasing classical music, dance, and arts against the backdrop of ancient ruins.",
        image: "/placeholder.svg?height=400&width=600&text=Hampi+Festival",
        duration: "3 days",
        location: "Hampi",
        season: "November",
        highlights: ["Classical Performances", "Heritage Setting", "Cultural Events", "Art Exhibitions"],
      },
      {
        id: 3,
        title: "Karaga Festival",
        description: "Traditional festival in Bangalore honoring Goddess Draupadi with fire walking and processions.",
        image: "/placeholder.svg?height=400&width=600&text=Karaga+Festival",
        duration: "9 days",
        location: "Bangalore",
        season: "March - April",
        highlights: ["Fire Walking", "Traditional Processions", "Religious Rituals", "Cultural Unity"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Yakshagana",
        description: "Traditional dance-drama with elaborate costumes, makeup, and storytelling from epics.",
        image: "/placeholder.svg?height=400&width=600&text=Yakshagana",
        origin: "Folk Tradition",
        occasion: "Cultural Performances",
        characteristics: ["Elaborate Costumes", "Epic Stories", "Traditional Music", "Dance-Drama"],
      },
      {
        id: 2,
        title: "Dollu Kunitha",
        description: "Drum dance performed by men with large drums, showcasing rhythm and coordination.",
        image: "/placeholder.svg?height=400&width=600&text=Dollu+Kunitha",
        origin: "Folk Tradition",
        occasion: "Festivals & Celebrations",
        characteristics: ["Drum Performance", "Group Coordination", "Rhythmic Movements", "Traditional Costumes"],
      },
      {
        id: 3,
        title: "Kamsale",
        description: "Traditional dance performed with bronze cymbals, often associated with religious processions.",
        image: "/placeholder.svg?height=400&width=600&text=Kamsale",
        origin: "Religious Tradition",
        occasion: "Religious Festivals",
        characteristics: ["Bronze Cymbals", "Religious Themes", "Group Performance", "Devotional Music"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Bisi Bele Bath",
        description: "Traditional rice dish cooked with lentils, vegetables, and aromatic spices.",
        image: "/placeholder.svg?height=400&width=600&text=Bisi+Bele+Bath",
        type: "Main Course",
        ingredients: ["Rice", "Lentils", "Vegetables", "Spice Powder"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Mysore Pak",
        description: "Famous sweet from Mysore made with gram flour, ghee, and sugar.",
        image: "/placeholder.svg?height=400&width=600&text=Karnataka+Mysore+Pak",
        type: "Dessert",
        ingredients: ["Gram Flour", "Ghee", "Sugar", "Cardamom"],
        region: "Mysore",
      },
      {
        id: 3,
        title: "Coorg Pandi Curry",
        description: "Spicy pork curry from Coorg region cooked with traditional Kodava spices.",
        image: "/placeholder.svg?height=400&width=600&text=Pandi+Curry",
        type: "Main Course",
        ingredients: ["Pork", "Kodava Spices", "Coconut", "Curry Leaves"],
        region: "Coorg",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Mysore Paintings",
        description: "Traditional paintings with intricate details, gold leaf work, and mythological themes.",
        image: "/placeholder.svg?height=400&width=600&text=Mysore+Paintings",
        technique: "Gold Leaf Work",
        materials: ["Canvas", "Gold Leaf", "Natural Pigments"],
        products: ["Religious Art", "Decorative Paintings", "Cultural Art"],
      },
      {
        id: 2,
        title: "Channapatna Toys",
        description: "Colorful wooden toys and dolls made using traditional lacquerware techniques.",
        image: "/placeholder.svg?height=400&width=600&text=Channapatna+Toys",
        technique: "Lacquerware",
        materials: ["Soft Wood", "Natural Lacquer", "Vegetable Dyes"],
        products: ["Toys", "Dolls", "Decorative Items"],
      },
      {
        id: 3,
        title: "Bidriware",
        description: "Metal handicraft with silver inlay work on blackened alloy, originated in Bidar.",
        image: "/placeholder.svg?height=400&width=600&text=Bidriware",
        technique: "Metal Inlay",
        materials: ["Zinc Alloy", "Silver", "Copper"],
        products: ["Decorative Items", "Jewelry", "Artifacts"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Carnatic Music",
        description: "South Indian classical music tradition with emphasis on improvisation and devotional themes.",
        image: "/placeholder.svg?height=400&width=600&text=Karnataka+Carnatic",
        style: "Classical Music",
        instruments: ["Veena", "Violin", "Mridangam", "Ghatam"],
        themes: ["Devotional", "Classical Ragas", "Spiritual"],
      },
      {
        id: 2,
        title: "Sugama Sangeetha",
        description: "Light music genre in Kannada language with melodious tunes and meaningful lyrics.",
        image: "/placeholder.svg?height=400&width=600&text=Sugama+Sangeetha",
        style: "Light Music",
        instruments: ["Harmonium", "Tabla", "Violin"],
        themes: ["Love", "Nature", "Philosophy"],
      },
      {
        id: 3,
        title: "Folk Music",
        description: "Traditional Kannada folk songs celebrating rural life, festivals, and local deities.",
        image: "/placeholder.svg?height=400&width=600&text=Karnataka+Folk",
        style: "Folk Music",
        instruments: ["Chande", "Dollu", "Folk Instruments"],
        themes: ["Rural Life", "Festivals", "Local Traditions"],
      },
    ],
  },
  maharashtra: {
    festivals: [
      {
        id: 1,
        title: "Ganesh Chaturthi",
        description:
          "Grand festival celebrating Lord Ganesha with elaborate decorations, processions, and cultural events.",
        image: "/placeholder.svg?height=400&width=600&text=Ganesh+Chaturthi",
        duration: "11 days",
        location: "Statewide",
        season: "August - September",
        highlights: ["Ganesh Idols", "Grand Processions", "Cultural Programs", "Community Celebrations"],
      },
      {
        id: 2,
        title: "Gudi Padwa",
        description:
          "Marathi New Year celebrated with traditional decorations, special foods, and cultural activities.",
        image: "/placeholder.svg?height=400&width=600&text=Gudi+Padwa",
        duration: "1 day",
        location: "Statewide",
        season: "March - April",
        highlights: ["Gudi Decoration", "Traditional Food", "Cultural Programs", "New Year Celebrations"],
      },
      {
        id: 3,
        title: "Wari Pilgrimage",
        description: "Annual pilgrimage to Pandharpur with devotional singing, walking, and spiritual activities.",
        image: "/placeholder.svg?height=400&width=600&text=Wari+Pilgrimage",
        duration: "21 days",
        location: "Pandharpur",
        season: "June - July",
        highlights: ["Devotional Walking", "Bhajans", "Spiritual Discourse", "Community Bonding"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Lavani",
        description: "Traditional folk dance with energetic movements, colorful costumes, and rhythmic music.",
        image: "/placeholder.svg?height=400&width=600&text=Lavani+Dance",
        origin: "Folk Tradition",
        occasion: "Cultural Performances",
        characteristics: ["Energetic Movements", "Colorful Costumes", "Rhythmic Music", "Expressive Performance"],
      },
      {
        id: 2,
        title: "Koli Dance",
        description: "Folk dance of the fishing community depicting their daily life and relationship with the sea.",
        image: "/placeholder.svg?height=400&width=600&text=Koli+Dance",
        origin: "Fishing Community",
        occasion: "Festivals & Celebrations",
        characteristics: ["Sea-themed Movements", "Traditional Costumes", "Folk Music", "Community Performance"],
      },
      {
        id: 3,
        title: "Dhangari Gaja",
        description: "Shepherd community dance performed during festivals with traditional instruments and songs.",
        image: "/placeholder.svg?height=400&width=600&text=Dhangari+Gaja",
        origin: "Shepherd Community",
        occasion: "Festivals",
        characteristics: ["Traditional Instruments", "Folk Songs", "Community Dance", "Cultural Heritage"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Vada Pav",
        description: "Popular street food consisting of spiced potato fritter in bread bun with chutneys.",
        image: "/placeholder.svg?height=400&width=600&text=Vada+Pav",
        type: "Street Food",
        ingredients: ["Potato", "Bread", "Spices", "Chutneys"],
        region: "Mumbai",
      },
      {
        id: 2,
        title: "Puran Poli",
        description: "Traditional sweet flatbread stuffed with jaggery and lentil filling, served during festivals.",
        image: "/placeholder.svg?height=400&width=600&text=Puran+Poli",
        type: "Dessert",
        ingredients: ["Wheat Flour", "Chana Dal", "Jaggery", "Ghee"],
        region: "Statewide",
      },
      {
        id: 3,
        title: "Misal Pav",
        description: "Spicy curry made with sprouted lentils served with bread and various toppings.",
        image: "/placeholder.svg?height=400&width=600&text=Misal+Pav",
        type: "Main Course",
        ingredients: ["Sprouted Lentils", "Spices", "Bread", "Onions"],
        region: "Pune",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Warli Painting",
        description: "Tribal art form using simple geometric shapes to depict daily life and nature.",
        image: "/placeholder.svg?height=400&width=600&text=Warli+Painting",
        technique: "Geometric Art",
        materials: ["Natural Pigments", "Bamboo Brushes", "Mud Base"],
        products: ["Wall Paintings", "Canvas Art", "Decorative Items"],
      },
      {
        id: 2,
        title: "Paithani Sarees",
        description: "Handwoven silk sarees with intricate gold borders and traditional motifs.",
        image: "/placeholder.svg?height=400&width=600&text=Paithani+Sarees",
        technique: "Hand Weaving",
        materials: ["Pure Silk", "Gold Thread", "Natural Dyes"],
        products: ["Sarees", "Traditional Wear", "Silk Fabrics"],
      },
      {
        id: 3,
        title: "Kolhapuri Chappals",
        description: "Traditional leather footwear known for durability and craftsmanship.",
        image: "/placeholder.svg?height=400&width=600&text=Kolhapuri+Chappals",
        technique: "Leather Craft",
        materials: ["Leather", "Natural Dyes", "Traditional Tools"],
        products: ["Footwear", "Leather Goods", "Traditional Chappals"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Bhavageet",
        description: "Marathi light music genre with meaningful lyrics and melodious compositions.",
        image: "/placeholder.svg?height=400&width=600&text=Bhavageet",
        style: "Light Music",
        instruments: ["Harmonium", "Tabla", "Violin"],
        themes: ["Love", "Philosophy", "Social Issues"],
      },
      {
        id: 2,
        title: "Powada",
        description: "Heroic ballads celebrating Maratha warriors and historical events.",
        image: "/placeholder.svg?height=400&width=600&text=Powada",
        style: "Heroic Ballads",
        instruments: ["Dhol", "Tasha", "Traditional Drums"],
        themes: ["Heroism", "History", "Maratha Glory"],
      },
      {
        id: 3,
        title: "Abhang",
        description: "Devotional songs dedicated to Lord Vitthal, composed by saint-poets.",
        image: "/placeholder.svg?height=400&width=600&text=Abhang",
        style: "Devotional Music",
        instruments: ["Manjira", "Harmonium", "Tabla"],
        themes: ["Devotion", "Spirituality", "Lord Vitthal"],
      },
    ],
  },
  "madhya-pradesh": {
    festivals: [
      {
        id: 1,
        title: "Khajuraho Dance Festival",
        description:
          "Classical dance festival showcasing various Indian dance forms against the backdrop of ancient temples.",
        image: "/placeholder.svg?height=400&width=600&text=Khajuraho+Dance+Festival",
        duration: "7 days",
        location: "Khajuraho",
        season: "February - March",
        highlights: ["Classical Dances", "Temple Setting", "Cultural Performances", "Art Exhibitions"],
      },
      {
        id: 2,
        title: "Malwa Utsav",
        description:
          "Cultural festival celebrating the rich heritage of Malwa region with folk performances and crafts.",
        image: "/placeholder.svg?height=400&width=600&text=Malwa+Utsav",
        duration: "5 days",
        location: "Indore",
        season: "December",
        highlights: ["Folk Performances", "Traditional Crafts", "Local Cuisine", "Cultural Programs"],
      },
      {
        id: 3,
        title: "Tansen Music Festival",
        description:
          "Classical music festival honoring the legendary musician Tansen with performances by renowned artists.",
        image: "/placeholder.svg?height=400&width=600&text=Tansen+Festival",
        duration: "4 days",
        location: "Gwalior",
        season: "November - December",
        highlights: ["Classical Music", "Renowned Artists", "Musical Heritage", "Cultural Legacy"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Bundeli Dance",
        description: "Folk dance of Bundelkhand region depicting stories of local heroes and cultural traditions.",
        image: "/placeholder.svg?height=400&width=600&text=Bundeli+Dance",
        origin: "Bundelkhand Region",
        occasion: "Cultural Festivals",
        characteristics: ["Heroic Stories", "Traditional Costumes", "Folk Music", "Regional Culture"],
      },
      {
        id: 2,
        title: "Matki Dance",
        description: "Traditional dance performed with earthen pots, showcasing balance and grace.",
        image: "/placeholder.svg?height=400&width=600&text=Matki+Dance",
        origin: "Folk Tradition",
        occasion: "Festivals & Celebrations",
        characteristics: ["Pot Balancing", "Graceful Movements", "Traditional Music", "Skill Display"],
      },
      {
        id: 3,
        title: "Karma Dance",
        description: "Tribal dance celebrating the worship of Karma tree, performed during harvest season.",
        image: "/placeholder.svg?height=400&width=600&text=MP+Karma+Dance",
        origin: "Tribal Communities",
        occasion: "Harvest Festival",
        characteristics: ["Nature Worship", "Tribal Traditions", "Seasonal Celebration", "Community Bonding"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Dal Bafla",
        description: "Traditional dish with steamed and baked wheat cakes served with lentil curry and ghee.",
        image: "/placeholder.svg?height=400&width=600&text=Dal+Bafla",
        type: "Main Course",
        ingredients: ["Wheat", "Lentils", "Ghee", "Spices"],
        region: "Malwa",
      },
      {
        id: 2,
        title: "Poha",
        description: "Popular breakfast dish made with flattened rice, vegetables, and aromatic spices.",
        image: "/placeholder.svg?height=400&width=600&text=MP+Poha",
        type: "Breakfast",
        ingredients: ["Flattened Rice", "Vegetables", "Spices", "Peanuts"],
        region: "Indore",
      },
      {
        id: 3,
        title: "Malpua",
        description: "Sweet pancake made with flour and milk, served with sugar syrup and nuts.",
        image: "/placeholder.svg?height=400&width=600&text=Malpua",
        type: "Dessert",
        ingredients: ["Flour", "Milk", "Sugar", "Nuts"],
        region: "Statewide",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Gond Paintings",
        description: "Tribal art form using dots and lines to create intricate patterns and nature motifs.",
        image: "/placeholder.svg?height=400&width=600&text=Gond+Paintings",
        technique: "Dot Art",
        materials: ["Natural Pigments", "Canvas", "Traditional Brushes"],
        products: ["Canvas Paintings", "Wall Art", "Decorative Items"],
      },
      {
        id: 2,
        title: "Chanderi Fabric",
        description: "Handwoven textiles known for their sheer texture and traditional motifs.",
        image: "/placeholder.svg?height=400&width=600&text=Chanderi+Fabric",
        technique: "Hand Weaving",
        materials: ["Cotton", "Silk", "Gold Thread"],
        products: ["Sarees", "Fabrics", "Traditional Wear"],
      },
      {
        id: 3,
        title: "Stone Carving",
        description: "Traditional stone carving art seen in temples and monuments across the state.",
        image: "/placeholder.svg?height=400&width=600&text=MP+Stone+Carving",
        technique: "Stone Carving",
        materials: ["Sandstone", "Marble", "Traditional Tools"],
        products: ["Temple Art", "Sculptures", "Architectural Elements"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Alha-Udal Ballads",
        description: "Heroic ballads narrating the tales of brave warriors Alha and Udal.",
        image: "/placeholder.svg?height=400&width=600&text=Alha+Udal",
        style: "Heroic Ballads",
        instruments: ["Dhol", "Manjira", "Traditional Drums"],
        themes: ["Heroism", "Bravery", "Historical Tales"],
      },
      {
        id: 2,
        title: "Nirguni",
        description: "Devotional songs with philosophical themes, often performed by wandering minstrels.",
        image: "/placeholder.svg?height=400&width=600&text=Nirguni",
        style: "Devotional Music",
        instruments: ["Harmonium", "Tabla", "Manjira"],
        themes: ["Philosophy", "Spirituality", "Devotion"],
      },
      {
        id: 3,
        title: "Pandwani",
        description: "Musical storytelling tradition narrating tales from Mahabharata.",
        image: "/placeholder.svg?height=400&width=600&text=MP+Pandwani",
        style: "Musical Storytelling",
        instruments: ["Tambura", "Manjira", "Traditional Drums"],
        themes: ["Mahabharata", "Epic Stories", "Moral Tales"],
      },
    ],
  },
  odisha: {
    festivals: [
      {
        id: 1,
        title: "Jagannath Rath Yatra",
        description: "Grand chariot festival of Lord Jagannath attracting millions of devotees from around the world.",
        image: "/placeholder.svg?height=400&width=600&text=Jagannath+Rath+Yatra",
        duration: "9 days",
        location: "Puri",
        season: "June - July",
        highlights: ["Giant Chariots", "Mass Participation", "Religious Fervor", "Cultural Unity"],
      },
      {
        id: 2,
        title: "Konark Dance Festival",
        description: "Classical dance festival held at the Sun Temple showcasing various Indian dance forms.",
        image: "/placeholder.svg?height=400&width=600&text=Konark+Dance+Festival",
        duration: "5 days",
        location: "Konark",
        season: "December",
        highlights: ["Classical Dances", "Temple Backdrop", "Cultural Performances", "Heritage Setting"],
      },
      {
        id: 3,
        title: "Kali Puja",
        description: "Festival dedicated to Goddess Kali with elaborate decorations and cultural programs.",
        image: "/placeholder.svg?height=400&width=600&text=Kali+Puja",
        duration: "3 days",
        location: "Statewide",
        season: "October - November",
        highlights: ["Goddess Worship", "Cultural Programs", "Traditional Rituals", "Community Celebrations"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Odissi",
        description: "Classical dance form with graceful movements, expressions, and spiritual themes.",
        image: "/placeholder.svg?height=400&width=600&text=Odissi+Dance",
        origin: "Classical Tradition",
        occasion: "Cultural Performances",
        characteristics: ["Graceful Movements", "Spiritual Themes", "Classical Music", "Temple Dance"],
      },
      {
        id: 2,
        title: "Chhau Dance",
        description: "Martial dance form with masks depicting stories from epics and mythology.",
        image: "/placeholder.svg?height=400&width=600&text=Chhau+Dance",
        origin: "Martial Tradition",
        occasion: "Festivals",
        characteristics: ["Masked Performance", "Martial Movements", "Epic Stories", "Traditional Costumes"],
      },
      {
        id: 3,
        title: "Sambalpuri Dance",
        description: "Folk dance of western Odisha performed during festivals and celebrations.",
        image: "/placeholder.svg?height=400&width=600&text=Sambalpuri+Dance",
        origin: "Folk Tradition",
        occasion: "Festivals & Celebrations",
        characteristics: ["Folk Movements", "Traditional Costumes", "Regional Music", "Community Performance"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Dalma",
        description: "Traditional lentil curry with vegetables, a staple dish of Odia cuisine.",
        image: "/placeholder.svg?height=400&width=600&text=Dalma",
        type: "Main Course",
        ingredients: ["Lentils", "Vegetables", "Spices", "Turmeric"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Pakhala Bhata",
        description: "Fermented rice dish served with various accompaniments, perfect for hot weather.",
        image: "/placeholder.svg?height=400&width=600&text=Pakhala+Bhata",
        type: "Main Course",
        ingredients: ["Rice", "Water", "Salt", "Curd"],
        region: "Statewide",
      },
      {
        id: 3,
        title: "Rasgulla",
        description: "Famous sweet made with cottage cheese balls in sugar syrup, originated in Odisha.",
        image: "/placeholder.svg?height=400&width=600&text=Odisha+Rasgulla",
        type: "Dessert",
        ingredients: ["Cottage Cheese", "Sugar", "Cardamom", "Rose Water"],
        region: "Statewide",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Pattachitra Paintings",
        description: "Traditional cloth paintings depicting mythological stories and religious themes.",
        image: "/placeholder.svg?height=400&width=600&text=Pattachitra",
        technique: "Cloth Painting",
        materials: ["Cloth", "Natural Pigments", "Traditional Brushes"],
        products: ["Religious Art", "Decorative Paintings", "Cultural Art"],
      },
      {
        id: 2,
        title: "Silver Filigree",
        description: "Intricate silver work creating delicate jewelry and decorative items.",
        image: "/placeholder.svg?height=400&width=600&text=Silver+Filigree",
        technique: "Metal Work",
        materials: ["Silver Wire", "Traditional Tools"],
        products: ["Jewelry", "Decorative Items", "Artifacts"],
      },
      {
        id: 3,
        title: "Stone Carving",
        description: "Traditional stone carving art seen in temples and sculptures across Odisha.",
        image: "/placeholder.svg?height=400&width=600&text=Odisha+Stone+Carving",
        technique: "Stone Carving",
        materials: ["Sandstone", "Granite", "Traditional Tools"],
        products: ["Temple Art", "Sculptures", "Architectural Elements"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Odissi Music",
        description: "Classical music tradition of Odisha with devotional themes and temple connections.",
        image: "/placeholder.svg?height=400&width=600&text=Odissi+Music",
        style: "Classical Music",
        instruments: ["Veena", "Mardala", "Flute"],
        themes: ["Devotional", "Temple Music", "Classical Ragas"],
      },
      {
        id: 2,
        title: "Bhajans",
        description: "Devotional songs dedicated to Lord Jagannath and other deities.",
        image: "/placeholder.svg?height=400&width=600&text=Odisha+Bhajans",
        style: "Devotional Music",
        instruments: ["Harmonium", "Tabla", "Manjira"],
        themes: ["Lord Jagannath", "Devotion", "Spirituality"],
      },
      {
        id: 3,
        title: "Folk Songs",
        description: "Traditional Odia folk songs celebrating rural life, festivals, and local traditions.",
        image: "/placeholder.svg?height=400&width=600&text=Odia+Folk",
        style: "Folk Music",
        instruments: ["Dhol", "Jhanj", "Folk Instruments"],
        themes: ["Rural Life", "Festivals", "Local Traditions"],
      },
    ],
  },
  jharkhand: {
    festivals: [
      {
        id: 1,
        title: "Sarhul Festival",
        description: "Tribal festival celebrating the worship of nature and trees, marking the beginning of spring.",
        image: "/placeholder.svg?height=400&width=600&text=Sarhul+Festival",
        duration: "3 days",
        location: "Tribal Areas",
        season: "March - April",
        highlights: ["Nature Worship", "Tribal Dances", "Traditional Rituals", "Community Bonding"],
      },
      {
        id: 2,
        title: "Karma Festival",
        description: "Harvest festival celebrated by tribal communities with dance, music, and traditional rituals.",
        image: "/placeholder.svg?height=400&width=600&text=Jharkhand+Karma",
        duration: "2 days",
        location: "Statewide",
        season: "August - September",
        highlights: ["Harvest Celebration", "Tribal Dances", "Folk Music", "Traditional Food"],
      },
      {
        id: 3,
        title: "Tusu Festival",
        description: "Folk festival celebrated during winter with songs, dances, and cultural performances.",
        image: "/placeholder.svg?height=400&width=600&text=Tusu+Festival",
        duration: "1 month",
        location: "Statewide",
        season: "December - January",
        highlights: ["Folk Songs", "Traditional Dances", "Cultural Programs", "Winter Celebration"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Jhumar Dance",
        description: "Traditional folk dance performed during festivals with rhythmic movements and folk songs.",
        image: "/placeholder.svg?height=400&width=600&text=Jhumar+Dance",
        origin: "Folk Tradition",
        occasion: "Festivals & Celebrations",
        characteristics: ["Rhythmic Movements", "Folk Songs", "Group Performance", "Traditional Costumes"],
      },
      {
        id: 2,
        title: "Paika Dance",
        description: "Martial dance form depicting warrior traditions and heroic tales.",
        image: "/placeholder.svg?height=400&width=600&text=Paika+Dance",
        origin: "Martial Tradition",
        occasion: "Cultural Events",
        characteristics: ["Martial Movements", "Warrior Themes", "Traditional Weapons", "Heroic Stories"],
      },
      {
        id: 3,
        title: "Chhau Dance",
        description: "Masked dance form depicting stories from epics and mythology.",
        image: "/placeholder.svg?height=400&width=600&text=Jharkhand+Chhau",
        origin: "Folk Tradition",
        occasion: "Festivals",
        characteristics: ["Masked Performance", "Epic Stories", "Traditional Music", "Cultural Heritage"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Litti Chokha",
        description: "Traditional dish with roasted wheat balls served with mashed vegetables and ghee.",
        image: "/placeholder.svg?height=400&width=600&text=Litti+Chokha",
        type: "Main Course",
        ingredients: ["Wheat", "Vegetables", "Ghee", "Spices"],
        region: "Statewide",
      },
      {
        id: 2,
        title: "Handia",
        description: "Traditional rice beer prepared by tribal communities for festivals and celebrations.",
        image: "/placeholder.svg?height=400&width=600&text=Handia",
        type: "Beverage",
        ingredients: ["Rice", "Traditional Herbs", "Natural Fermentation"],
        region: "Tribal Areas",
      },
      {
        id: 3,
        title: "Pittha",
        description: "Traditional steamed rice cakes served with jaggery and ghee during festivals.",
        image: "/placeholder.svg?height=400&width=600&text=Pittha",
        type: "Dessert",
        ingredients: ["Rice Flour", "Jaggery", "Ghee", "Coconut"],
        region: "Statewide",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Sohrai Paintings",
        description: "Tribal wall paintings created during harvest festivals using natural pigments.",
        image: "/placeholder.svg?height=400&width=600&text=Sohrai+Paintings",
        technique: "Wall Painting",
        materials: ["Natural Pigments", "Clay", "Traditional Brushes"],
        products: ["Wall Art", "Decorative Paintings", "Tribal Art"],
      },
      {
        id: 2,
        title: "Bamboo Craft",
        description: "Traditional bamboo weaving creating functional and decorative items.",
        image: "/placeholder.svg?height=400&width=600&text=Jharkhand+Bamboo",
        technique: "Bamboo Weaving",
        materials: ["Bamboo", "Natural Dyes", "Traditional Tools"],
        products: ["Baskets", "Furniture", "Decorative Items"],
      },
      {
        id: 3,
        title: "Dokra Art",
        description: "Ancient metal casting technique creating brass artifacts and decorative items.",
        image: "/placeholder.svg?height=400&width=600&text=Jharkhand+Dokra",
        technique: "Lost-wax Casting",
        materials: ["Brass", "Bronze", "Wax"],
        products: ["Figurines", "Decorative Items", "Traditional Art"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Tribal Folk Songs",
        description: "Traditional songs of various tribal communities celebrating nature and life.",
        image: "/placeholder.svg?height=400&width=600&text=Tribal+Folk+Songs",
        style: "Tribal Music",
        instruments: ["Dhol", "Mandar", "Traditional Instruments"],
        themes: ["Nature", "Tribal Life", "Festivals"],
      },
      {
        id: 2,
        title: "Jhumair Songs",
        description: "Folk songs sung during Jhumair dance performances and cultural celebrations.",
        image: "/placeholder.svg?height=400&width=600&text=Jhumair+Songs",
        style: "Folk Music",
        instruments: ["Dhol", "Manjira", "Folk Instruments"],
        themes: ["Love", "Nature", "Rural Life"],
      },
      {
        id: 3,
        title: "Domkach Songs",
        description: "Traditional songs performed during wedding ceremonies and social gatherings.",
        image: "/placeholder.svg?height=400&width=600&text=Domkach+Songs",
        style: "Ceremonial Music",
        instruments: ["Traditional Drums", "Folk Instruments"],
        themes: ["Weddings", "Social Life", "Community Bonding"],
      },
    ],
  },
  "andhra-pradesh": {
    festivals: [
      {
        id: 1,
        title: "Brahmotsavam",
        description: "Grand festival at Tirupati temple with elaborate processions and religious ceremonies.",
        image: "/placeholder.svg?height=400&width=600&text=Brahmotsavam",
        duration: "9 days",
        location: "Tirupati",
        season: "September - October",
        highlights: ["Temple Processions", "Religious Ceremonies", "Cultural Programs", "Devotional Activities"],
      },
      {
        id: 2,
        title: "Ugadi",
        description: "Telugu New Year celebrated with traditional decorations, special foods, and cultural events.",
        image: "/placeholder.svg?height=400&width=600&text=Ugadi",
        duration: "1 day",
        location: "Statewide",
        season: "March - April",
        highlights: ["New Year Celebrations", "Traditional Food", "Cultural Programs", "Festive Decorations"],
      },
      {
        id: 3,
        title: "Deccan Festival",
        description:
          "Cultural festival showcasing the rich heritage of Deccan region with performances and exhibitions.",
        image: "/placeholder.svg?height=400&width=600&text=Deccan+Festival",
        duration: "5 days",
        location: "Hyderabad",
        season: "February - March",
        highlights: ["Cultural Performances", "Art Exhibitions", "Traditional Crafts", "Regional Heritage"],
      },
    ],
    dances: [
      {
        id: 1,
        title: "Kuchipudi",
        description: "Classical dance form with graceful movements, expressions, and storytelling elements.",
        image: "/placeholder.svg?height=400&width=600&text=Kuchipudi",
        origin: "Classical Tradition",
        occasion: "Cultural Performances",
        characteristics: ["Graceful Movements", "Storytelling", "Classical Music", "Traditional Costumes"],
      },
      {
        id: 2,
        title: "Lambadi Dance",
        description: "Folk dance of the nomadic Lambadi community with colorful costumes and energetic movements.",
        image: "/placeholder.svg?height=400&width=600&text=Lambadi+Dance",
        origin: "Nomadic Community",
        occasion: "Festivals & Celebrations",
        characteristics: ["Colorful Costumes", "Energetic Movements", "Folk Music", "Community Performance"],
      },
      {
        id: 3,
        title: "Perini Sivatandavam",
        description: "Ancient dance form performed by warriors, dedicated to Lord Shiva with vigorous movements.",
        image: "/placeholder.svg?height=400&width=600&text=Perini+Dance",
        origin: "Warrior Tradition",
        occasion: "Religious Festivals",
        characteristics: ["Vigorous Movements", "Warrior Dance", "Lord Shiva", "Traditional Costumes"],
      },
    ],
    food: [
      {
        id: 1,
        title: "Hyderabadi Biryani",
        description: "Famous aromatic rice dish cooked with meat and spices, a signature of Hyderabadi cuisine.",
        image: "/placeholder.svg?height=400&width=600&text=Hyderabadi+Biryani",
        type: "Main Course",
        ingredients: ["Basmati Rice", "Meat", "Saffron", "Spices"],
        region: "Hyderabad",
      },
      {
        id: 2,
        title: "Pesarattu",
        description: "Traditional green gram dosa served with ginger chutney, a popular breakfast dish.",
        image: "/placeholder.svg?height=400&width=600&text=Pesarattu",
        type: "Breakfast",
        ingredients: ["Green Gram", "Rice", "Ginger", "Spices"],
        region: "Statewide",
      },
      {
        id: 3,
        title: "Qubani Ka Meetha",
        description: "Traditional dessert made with dried apricots, served with cream and nuts.",
        image: "/placeholder.svg?height=400&width=600&text=Qubani+Meetha",
        type: "Dessert",
        ingredients: ["Dried Apricots", "Sugar", "Cream", "Nuts"],
        region: "Hyderabad",
      },
    ],
    arts: [
      {
        id: 1,
        title: "Kalamkari",
        description: "Traditional hand-painted textile art depicting mythological stories and floral patterns.",
        image: "/placeholder.svg?height=400&width=600&text=Kalamkari",
        technique: "Hand Painting",
        materials: ["Cotton Fabric", "Natural Dyes", "Traditional Brushes"],
        products: ["Textiles", "Wall Hangings", "Decorative Art"],
      },
      {
        id: 2,
        title: "Bidriware",
        description: "Metal handicraft with silver inlay work on blackened alloy, originated in Bidar.",
        image: "/placeholder.svg?height=400&width=600&text=AP+Bidriware",
        technique: "Metal Inlay",
        materials: ["Zinc Alloy", "Silver", "Copper"],
        products: ["Decorative Items", "Jewelry", "Artifacts"],
      },
      {
        id: 3,
        title: "Kondapalli Toys",
        description: "Colorful wooden toys and dolls made from soft wood, painted with natural colors.",
        image: "/placeholder.svg?height=400&width=600&text=Kondapalli+Toys",
        technique: "Wood Carving",
        materials: ["Soft Wood", "Natural Colors", "Traditional Tools"],
        products: ["Toys", "Dolls", "Decorative Items"],
      },
    ],
    music: [
      {
        id: 1,
        title: "Carnatic Music",
        description: "South Indian classical music tradition with emphasis on devotional compositions.",
        image: "/placeholder.svg?height=400&width=600&text=AP+Carnatic",
        style: "Classical Music",
        instruments: ["Veena", "Violin", "Mridangam", "Flute"],
        themes: ["Devotional", "Classical Ragas", "Spiritual"],
      },
      {
        id: 2,
        title: "Burra Katha",
        description: "Traditional storytelling art form with musical accompaniment narrating historical tales.",
        image: "/placeholder.svg?height=400&width=600&text=Burra+Katha",
        style: "Musical Storytelling",
        instruments: ["Tambura", "Tabla", "Traditional Drums"],
        themes: ["Historical Tales", "Moral Stories", "Social Issues"],
      },
      {
        id: 3,
        title: "Telugu Folk Songs",
        description: "Traditional songs in Telugu language celebrating rural life, festivals, and local deities.",
        image: "/placeholder.svg?height=400&width=600&text=Telugu+Folk",
        style: "Folk Music",
        instruments: ["Dhol", "Shehnai", "Folk Instruments"],
        themes: ["Rural Life", "Festivals", "Local Deities"],
      },
    ],
  },
}

export default function CulturePage() {
  const { selectedState } = useStateContext()
  const cultureData =
    stateCultureData[selectedState.id as keyof typeof stateCultureData] || stateCultureData.chhattisgarh

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
              <span className="text-lg font-bold">{selectedState.name} Culture & Heritage</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/destination" className="text-sm font-medium hover:underline underline-offset-4">
              Destinations
            </Link>
            <Link href="/experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experiences
            </Link>
            <Link href="/plan" className="text-sm font-medium hover:underline underline-offset-4">
              Plan Your Trip
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src={selectedState.image || "/placeholder.svg?height=800&width=1600&text=Culture+Heritage"}
            alt={`${selectedState.name} Culture`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{selectedState.name} Cultural Heritage</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Discover the vibrant traditions, festivals, arts, and customs of {selectedState.name}
              </p>
            </div>
          </div>
        </section>

        <div className="container py-12">
          {/* Culture Categories */}
          <Tabs defaultValue="festivals" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="festivals" className="gap-2">
                <Calendar className="h-4 w-4" />
                Festivals
              </TabsTrigger>
              <TabsTrigger value="dances" className="gap-2">
                <Users className="h-4 w-4" />
                Dance
              </TabsTrigger>
              <TabsTrigger value="food" className="gap-2">
                <ChefHat className="h-4 w-4" />
                Food
              </TabsTrigger>
              <TabsTrigger value="arts" className="gap-2">
                <Palette className="h-4 w-4" />
                Arts
              </TabsTrigger>
              <TabsTrigger value="music" className="gap-2">
                <Music className="h-4 w-4" />
                Music
              </TabsTrigger>
            </TabsList>

            {/* Festivals */}
            <TabsContent value="festivals" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Vibrant Festivals</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Experience the colorful celebrations that showcase {selectedState.name}'s rich cultural diversity
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.festivals.map((festival) => (
                  <Card key={festival.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={festival.image || "/placeholder.svg"}
                        alt={festival.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 right-3">{festival.duration}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{festival.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{festival.location}</span>
                        <span>•</span>
                        <span>{festival.season}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{festival.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {festival.highlights.map((highlight, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Dance */}
            <TabsContent value="dances" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Traditional Dance Forms</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover the rhythmic expressions of {selectedState.name}'s diverse communities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.dances.map((dance) => (
                  <Card key={dance.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={dance.image || "/placeholder.svg"}
                        alt={dance.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{dance.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{dance.origin}</span>
                        <span>•</span>
                        <span>{dance.occasion}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{dance.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Characteristics:</h4>
                        <div className="flex flex-wrap gap-1">
                          {dance.characteristics.map((char, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {char}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        Watch Performance <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Food */}
            <TabsContent value="food" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Traditional Cuisine</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Savor the authentic flavors of {selectedState.name}'s traditional dishes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.food.map((dish) => (
                  <Card key={dish.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 right-3">{dish.type}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{dish.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">{dish.region}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{dish.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Main Ingredients:</h4>
                        <div className="flex flex-wrap gap-1">
                          {dish.ingredients.map((ingredient, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        Get Recipe <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Arts */}
            <TabsContent value="arts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Traditional Arts & Crafts</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore the exquisite handicrafts and artistic traditions of {selectedState.name}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.arts.map((art) => (
                  <Card key={art.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={art.image || "/placeholder.svg"}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{art.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">Technique: {art.technique}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{art.description}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm">Materials:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {art.materials.map((material, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Products:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {art.products.map((product, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        Learn Craft <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Music */}
            <TabsContent value="music" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Folk Music Traditions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Listen to the melodious folk music that echoes through {selectedState.name}'s regions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.music.map((music) => (
                  <Card key={music.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={music.image || "/placeholder.svg"}
                        alt={music.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{music.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">Style: {music.style}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{music.description}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm">Instruments:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {music.instruments.map((instrument, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {instrument}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Themes:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {music.themes.map((theme, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {theme}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        Listen Now <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Cultural Experiences CTA */}
          <div className="mt-16 text-center">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Experience {selectedState.name} Culture</h3>
                <p className="text-muted-foreground mb-6">
                  Immerse yourself in authentic cultural experiences through workshops, performances, and local stays.
                  Connect with local artisans and learn traditional crafts firsthand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/plan">
                    <Button size="lg" className="gap-2">
                      Plan Cultural Tour <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/experience">
                    <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                      Read Experiences <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
