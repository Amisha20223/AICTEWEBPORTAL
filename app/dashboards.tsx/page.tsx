import Link from 'next/link'
import { FileText, Users, BookOpen, Activity, Plus, Search } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link href="/collaborate/new" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<FileText />}
          title="Total Curricula"
          value="24"
          description="Active curriculum designs"
        />
        <StatCard 
          icon={<Users />}
          title="Collaborators"
          value="156"
          description="Active participants"
        />
        <StatCard 
          icon={<BookOpen />}
          title="Resources"
          value="1,234"
          description="Available materials"
        />
        <StatCard 
          icon={<Activity />}
          title="Activities"
          value="89"
          description="This week"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-bold mb-4">Recent Curricula</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div>
                  <h4 className="font-semibold">Computer Science Curriculum {i}</h4>
                  <p className="text-sm text-gray-500">Last edited 2 days ago</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/collaborate/view`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    View
                  </Link>
                  <Link href={`/collaborate/edit`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-4 bg-white rounded-lg shadow">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">New collaborator joined</h4>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, title, value, description }: { 
  icon: React.ReactNode, 
  title: string, 
  value: string, 
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-100 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  )
}

