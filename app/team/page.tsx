import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Team - Incredible India",
  description: "Meet the passionate team behind Incredible India tourism platform",
}

const teamMembers = {
  leadership: [
    {
      name: "Shreyansh Arpit Ward",
      position: "Founder & Chairman",
      image: "/shobby.jpg",
      bio: "Visionary leader with 20+ years in tourism industry. Passionate about showcasing India's incredible diversity to the world.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "shreyansharpitward0@gmail.com",
      },
    },
    {
      name: "Satyendra Prajapati",
      position: "CEO & Managing Director",
      image: "/satya.jpg",
      bio: "Strategic leader driving digital transformation in Indian tourism. Expert in sustainable tourism development.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@incredibleindia.org",
      },
    },
  ],
  tech: {
    frontend: [
      {
        name: "Arjun Patel",
        position: "Frontend Team Lead",
        image: "/placeholder.svg?height=300&width=300",
        bio: "React & Next.js expert with passion for creating beautiful user experiences. 8+ years in web development.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        social: {
          github: "#",
          linkedin: "#",
          email: "arjun@incredibleindia.org",
        },
      },
      {
        name: "Sneha Reddy",
        position: "UI/UX Designer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Creative designer focused on user-centered design. Specializes in mobile-first responsive designs.",
        skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
        social: {
          linkedin: "#",
          twitter: "#",
          email: "sneha@incredibleindia.org",
        },
      },
      {
        name: "Vikram Singh",
        position: "Frontend Developer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Full-stack developer with expertise in modern web technologies. Loves building interactive experiences.",
        skills: ["Vue.js", "React", "JavaScript", "CSS3"],
        social: {
          github: "#",
          linkedin: "#",
          email: "vikram@incredibleindia.org",
        },
      },
    ],
    backend: [
      {
        name: "Amit Gupta",
        position: "Backend Team Lead",
        image: "/placeholder.svg?height=300&width=300",
        bio: "System architect with 10+ years experience. Expert in scalable cloud solutions and microservices.",
        skills: ["Node.js", "Python", "AWS", "MongoDB"],
        social: {
          github: "#",
          linkedin: "#",
          email: "amit@incredibleindia.org",
        },
      },
      {
        name: "Kavya Nair",
        position: "DevOps Engineer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Infrastructure specialist ensuring smooth deployments and system reliability. Cloud computing expert.",
        skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
        social: {
          github: "#",
          linkedin: "#",
          email: "kavya@incredibleindia.org",
        },
      },
      {
        name: "Rohit Joshi",
        position: "Database Administrator",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Data expert managing large-scale tourism databases. Specializes in performance optimization.",
        skills: ["PostgreSQL", "Redis", "MongoDB", "Data Analytics"],
        social: {
          github: "#",
          linkedin: "#",
          email: "rohit@incredibleindia.org",
        },
      },
    ],
  },
  marketing: [
    {
      name: "Meera Iyer",
      position: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Digital marketing strategist with deep understanding of tourism industry. Expert in content marketing.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "meera@incredibleindia.org",
      },
    },
    {
      name: "Karan Malhotra",
      position: "Content Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Storyteller passionate about Indian culture and heritage. Creates engaging content for travelers.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "karan@incredibleindia.org",
      },
    },
  ],
  operations: [
    {
      name: "Sunita Agarwal",
      position: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations expert ensuring smooth customer experiences. 15+ years in hospitality and tourism.",
      social: {
        linkedin: "#",
        email: "sunita@incredibleindia.org",
      },
    },
    {
      name: "Deepak Yadav",
      position: "Customer Support Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Customer service specialist dedicated to helping travelers. Multilingual support expert.",
      social: {
        linkedin: "#",
        email: "deepak@incredibleindia.org",
      },
    },
  ],
}

function TeamMemberCard({ member, showSkills = false }: { member: any; showSkills?: boolean }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
          <p className="text-primary font-medium mb-3">{member.position}</p>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

          {showSkills && member.skills && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 justify-center">
                {member.skills.map((skill: string) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center space-x-2">
            {member.social.github && (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            )}
            {member.social.linkedin && (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            )}
            {member.social.twitter && (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            )}
            {member.social.email && (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Meet Our <span className="text-primary">Amazing Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate individuals working together to showcase the incredible beauty and diversity of India. Our team
            combines expertise in technology, tourism, and cultural heritage to create unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving the mission to promote India's tourism globally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {teamMembers.leadership.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Team */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technology Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative developers and designers creating cutting-edge digital experiences
            </p>
          </div>

          {/* Frontend Team */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">Frontend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.tech.frontend.map((member) => (
                <TeamMemberCard key={member.name} member={member} showSkills />
              ))}
            </div>
          </div>

          {/* Backend Team */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">Backend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.tech.backend.map((member) => (
                <TeamMemberCard key={member.name} member={member} showSkills />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Team */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Marketing & Content</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creative minds crafting compelling stories and strategies to promote Indian tourism
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {teamMembers.marketing.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Team */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Operations & Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals ensuring smooth operations and exceptional customer service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {teamMembers.operations.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Are you passionate about promoting Indian tourism and culture? We're always looking for talented
              individuals to join our mission.
            </p>
            <Button size="lg" className="text-lg px-8">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
