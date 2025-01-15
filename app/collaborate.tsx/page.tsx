import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function Collaborate() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Curriculum Projects</h1>
        <Link href="/collaborate/new" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ProjectCard
            key={i}
            title={`Computer Science ${i}`}
            description="Bachelor's degree curriculum"
            collaborators={5}
            lastUpdated="2 days ago"
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ 
  title, 
  description, 
  collaborators, 
  lastUpdated 
}: { 
  title: string
  description: string
  collaborators: number
  lastUpdated: string
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>{collaborators} collaborators</span>
        <span>Updated {lastUpdated}</span>
      </div>
      <div className="flex gap-2">
        <Link href={`/collaborate/view`} className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          View
        </Link>
        <Link href={`/collaborate/edit`} className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Edit
        </Link>
      </div>
    </div>
  )
}

