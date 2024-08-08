import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { FaShieldAlt, FaTools, FaDatabase } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <header className="w-full p-6 bg-white shadow-md flex justify-between items-center">
        <div className="text-xl font-bold text-secondary">AICTE Curriculum Design Portal</div>
        <nav>
          <Button variant="ghost" className="mr-4"><Link href="/login">Login</Link></Button>
          <Button variant="default"><Link href="/register">Register</Link></Button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold text-secondary mb-6">
          Transforming Education Through Collaborative Curriculum Design
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Collaborate, innovate, and design the future of education with our dynamic curriculum design tool.
        </p>
        <div>
          <Button size="lg" className="mr-4">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </main>

      <section className="w-full py-12 bg-white text-center">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-start gap-8">
            <FeatureCard
              icon={<FaShieldAlt className="text-primary w-8 h-8" />}
              title="Secure Access"
              description="Ensure secure access for educators, teachers, and experts with robust authorization."
            />
            <FeatureCard
              icon={<FaTools className="text-primary w-8 h-8" />}
              title="Dynamic Tools"
              description="Use advanced tools to collaborate, restructure, and redefine educational curricula."
            />
            <FeatureCard
              icon={<FaDatabase className="text-primary w-8 h-8" />}
              title="Central Database"
              description="Access a centralized database for resources including e-textbooks, video links, and more."
            />
          </CardContent>
        </Card>
      </section>

      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        &copy; {new Date().getFullYear()} AICTE. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
