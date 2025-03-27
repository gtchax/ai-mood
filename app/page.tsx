import { ThemeToggle } from "@/components/general/ThemeToggle"
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { FiArrowRight, FiLock, FiBarChart2, FiActivity } from "react-icons/fi"

export default async function Home() {
  const { userId } = await auth()
  const href = userId ? "/journal" : "/new-user"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 font-sans overflow-x-hidden">
      {/* Glowing background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          AI-Mood
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-cyan-400 transition">
            Features
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            How It Works
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Pricing
          </a>
        </div>
        {userId ? (
          <UserButton />
        ) : (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/sign-in"
              className="border w-24 text-center cursor-pointer px-4 py-2 rounded-md font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="cursor-pointer px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Understand Your Emotions
            </span>
            <br />
            with AI
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Track your mood over time, gain powerful insights, and grow with
            intelligent journaling powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={href}
              className="px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition flex items-center gap-2"
            >
              Start Journaling <FiArrowRight />
            </Link>
            <button className="px-8 py-3 rounded-md border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition">
              See Demo
            </button>
          </div>
        </div>

        {/* App mockup */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden p-1">
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="text-left">
                  <h3 className="text-xl font-semibold">Your Mood Timeline</h3>
                  <p className="text-gray-500 text-sm">Last 30 days</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-900/50 text-cyan-400">
                    Happy
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-400">
                    Reflective
                  </span>
                </div>
              </div>
              {/* Mood chart placeholder */}
              <div className="h-64 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center">
                <div className="text-gray-500">
                  Interactive mood chart visualization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI-Powered Insights
            </span>
          </h2>
          <p className="text-gray-400 text-xl">
            Discover patterns in your emotions with our intelligent analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/30 transition group">
            <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500/20 transition">
              <FiActivity size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mood Detection</h3>
            <p className="text-gray-400">
              Our AI analyzes your journal entries to detect subtle emotional
              patterns you might miss.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/30 transition group">
            <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-500/20 transition">
              <FiBarChart2 size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Timeline</h3>
            <p className="text-gray-400">
              See your emotional journey mapped out with beautiful, intuitive
              visualizations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/30 transition group">
            <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500/20 transition">
              <FiLock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
            <p className="text-gray-400">
              Your thoughts stay completely private with end-to-end encryption.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-40"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Understand Yourself Better?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands who are gaining emotional clarity with AI-Mood.
            </p>
            <button className="px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition">
              Get Started - It&#39;s Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
            AI-Mood
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AI-Mood. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
