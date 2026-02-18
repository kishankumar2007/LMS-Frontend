import { BookOpen, Users, DollarSign, Video, Eye, Edit } from "lucide-react"

export default function AdminDashboard() {

  /* ---------- MOCK LMS DATA ---------- */
  const stats = {
    totalCourses: 18,
    totalStudents: 1246,
    totalRevenue: 345680,
    totalVideos: 212
  }

  const recentEnrollments = [
    {
      id: "ENR-001",
      student: "Aman Kumar",
      course: "Full Stack MERN",
      date: "2024-02-12",
      amount: 2499,
      progress: 45
    },
    {
      id: "ENR-002",
      student: "Riya Sharma",
      course: "React Mastery",
      date: "2024-02-11",
      amount: 1999,
      progress: 100
    },
    {
      id: "ENR-003",
      student: "Mohit Verma",
      course: "Node.js Backend",
      date: "2024-02-10",
      amount: 2999,
      progress: 12
    }
  ]

  const getProgressColor = (progress) => {
    if (progress === 100) return "bg-green-600"
    if (progress > 30) return "bg-yellow-600"
    return "bg-red-600"
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">
            Monitor courses, students, and learning progress
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <StatCard
            label="Total Courses"
            value={stats.totalCourses}
            icon={<BookOpen className="w-8 h-8 text-blue-500" />}
          />

          <StatCard
            label="Total Students"
            value={stats.totalStudents}
            icon={<Users className="w-8 h-8 text-purple-500" />}
          />

          <StatCard
            label="Total Revenue"
            value={`₹${stats.totalRevenue.toLocaleString()}`}
            icon={<DollarSign className="w-8 h-8 text-green-500" />}
          />

          <StatCard
            label="Total Videos"
            value={stats.totalVideos}
            icon={<Video className="w-8 h-8 text-yellow-500" />}
          />
        </div>

        {/* ENROLLMENTS */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            Recent Enrollments
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 text-sm">
                  <th className="text-left py-3 px-2">Student</th>
                  <th className="text-left py-3 px-2">Course</th>
                  <th className="text-left py-3 px-2">Date</th>
                  <th className="text-left py-3 px-2">Amount</th>
                  <th className="text-left py-3 px-2">Progress</th>
                  <th className="text-left py-3 px-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {recentEnrollments.map((enr) => (
                  <tr
                    key={enr.id}
                    className="border-b border-gray-800 text-sm"
                  >
                    <td className="py-4 px-2 font-medium">
                      {enr.student}
                    </td>

                    <td className="py-4 px-2">
                      {enr.course}
                    </td>

                    <td className="py-4 px-2 text-gray-400">
                      {enr.date}
                    </td>

                    <td className="py-4 px-2">
                      ₹{enr.amount}
                    </td>

                    <td className="py-4 px-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs text-white ${getProgressColor(enr.progress)}`}
                      >
                        {enr.progress}%
                      </span>
                    </td>

                    <td className="py-4 px-2">
                      <div className="flex gap-2">
                        <button className="p-1 text-blue-400 hover:text-blue-300">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-300">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

/* ---------- STAT CARD COMPONENT ---------- */
function StatCard({ label, value, icon }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  )
}
