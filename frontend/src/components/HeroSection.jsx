import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Sparkles,
  ArrowRight,
  Building2,
  Briefcase,
  Users,
  Layers,
  Globe,
  Rocket,
  ChevronRight,
  Zap,
  Brain,
  LineChart,
  Compass,
} from "lucide-react"

export default function HeroSection() {
  const [currentProfession, setCurrentProfession] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const professionRef = useRef(null)
  const canvasRef = useRef(null)

  const professions = [
    "Software Engineers",
    "Product Managers",
    "Data Scientists",
    "UI/UX Designers",
    "Tech Leaders"
  ]

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our intelligent algorithms connect you with perfect career opportunities tailored to your unique skills and experience."
    },
    {
      icon: LineChart,
      title: "Growth Analytics",
      description: "Gain deep insights into your career trajectory with personalized data and industry benchmarks."
    },
    {
      icon: Compass,
      title: "Career Navigation",
      description: "Discover clear pathways to achieve your professional goals with expert guidance and resources."
    }
  ]

  const categories = [
    {
      id: "tech",
      name: "Technology",
      icon: Layers,
      count: "8.5k+",
      color: "bg-blue-500"
    },
    {
      id: "remote",
      name: "Remote Work",
      icon: Globe,
      count: "5.2k+",
      color: "bg-emerald-500"
    },
    {
      id: "startup",
      name: "Startups",
      icon: Rocket,
      count: "3.8k+",
      color: "bg-amber-500"
    }
  ]

  const stats = [
    {
      value: "2,400+",
      label: "Companies",
      icon: Building2
    },
    {
      value: "12,000+",
      label: "Job Listings",
      icon: Briefcase
    },
    {
      value: "48,000+",
      label: "Professionals",
      icon: Users
    }
  ]

  useEffect(() => {
    // Initial animation
    setIsVisible(true)

    // Profession rotation
    const professionInterval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length)
    }, 3000)

    // Feature rotation
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)

    // Canvas animation
    const setupCanvas = () => {
      const canvas = canvasRef.current
      if (!canvas) return null

      const ctx = canvas.getContext("2d")
      if (!ctx) return null

      const pixelRatio = window.devicePixelRatio || 1

      const resizeCanvas = () => {
        const width = window.innerWidth
        const height = window.innerHeight

        canvas.width = width * pixelRatio
        canvas.height = height * pixelRatio

        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`

        ctx.scale(pixelRatio, pixelRatio)
        return { width, height }
      }

      const { width, height } = resizeCanvas()

      // Create grid points
      const cols = Math.floor(width / 100)
      const rows = Math.floor(height / 100)
      const cellWidth = width / cols
      const cellHeight = height / rows

      const points = []
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          const colorIntensity = Math.random() * 0.15 + 0.1
          points.push({
            x: x * cellWidth,
            y: y * cellHeight,
            originX: x * cellWidth,
            originY: y * cellHeight,
            offsetX: 0,
            offsetY: 0,
            size: Math.random() * 2 + 0.5,
            color: `rgba(120, 140, 230, ${colorIntensity})`
          })
        }
      }

      let animationFrame

      function animate() {
        animationFrame = requestAnimationFrame(animate)
        ctx.clearRect(0, 0, width, height)

        // Update points
        const time = Date.now() / 3000
        points.forEach(point => {
          // Smoother wave effect
          point.offsetX = Math.sin(time + point.originX * 0.008) * 15
          point.offsetY = Math.cos(time + point.originY * 0.008) * 15

          // Draw point
          ctx.beginPath()
          ctx.arc(point.originX + point.offsetX, point.originY + point.offsetY, point.size, 0, Math.PI * 2)
          ctx.fillStyle = point.color
          ctx.fill()
        })

        // Draw lines between points
        ctx.beginPath()
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const p1 = points[i]
            const p2 = points[j]
            const dx = (p1.originX + p1.offsetX) - (p2.originX + p2.offsetX)
            const dy = (p1.originY + p1.offsetY) - (p2.originY + p2.offsetY)
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < cellWidth * 1.5) {
              // Calculate opacity based on distance
              const opacity = 1 - (distance / (cellWidth * 1.5))
              ctx.moveTo(p1.originX + p1.offsetX, p1.originY + p1.offsetY)
              ctx.lineTo(p2.originX + p2.offsetX, p2.originY + p2.offsetY)
              ctx.strokeStyle = `rgba(100, 130, 255, ${opacity * 0.15})`
              ctx.stroke()
              ctx.beginPath()
            }
          }
        }
      }

      animate()

      window.addEventListener("resize", resizeCanvas)

      return () => {
        window.removeEventListener("resize", resizeCanvas)
        cancelAnimationFrame(animationFrame)
      }
    }

    const cleanup = setupCanvas()

    return () => {
      clearInterval(professionInterval)
      clearInterval(featureInterval)
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70 transition-opacity duration-1000 ease-in-out"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-transparent to-blue-900/10" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Main content container */}
      <div
        className="relative container mx-auto px-6 pt-32 pb-20 md:pt-36 md:pb-24"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 1s ease-out, transform 0.7s ease-out'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top badge */}
          <div className="flex justify-center mb-12">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/15"
              style={{
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)'
              }}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Next-Gen Career Platform</span>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Main content */}
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                <span className="block mb-3">Career evolution for</span>
                <div className="relative h-20 overflow-hidden">
                  <div
                    ref={professionRef}
                    className="transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${currentProfession * 100}%)` }}
                  >
                    {professions.map((profession, index) => (
                      <div key={index} className="h-20 flex items-center">
                        <span className="text-indigo-400">{profession}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </h1>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Our AI-powered platform connects exceptional talent with visionary companies,
                helping you build a career that aligns with your unique skills and aspirations.
              </p>

              {/* CTA buttons with improved styling */}
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link
                  to="/signup"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:bg-indigo-500 relative overflow-hidden"
                  style={{
                    boxShadow: '0 4px 20px rgba(79, 70, 229, 0.2)'
                  }}
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Link>

                <Link
                  to="/browse"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-transparent border border-slate-700 text-white font-medium transition-all duration-300 hover:bg-slate-800/30 hover:border-indigo-500/30 backdrop-blur-sm"
                >
                  Browse Opportunities
                </Link>
              </div>

              {/* Stats with improved styling */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 transition-all duration-300 hover:bg-slate-800/30 hover:border-indigo-500/20"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-indigo-500/10 transition-colors duration-300 group-hover:bg-indigo-500/15">
                        <stat.icon className="w-4 h-4 text-indigo-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-300">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Feature showcase */}
            <div className="relative">
              {/* Feature cards with improved 3D effect */}
              <div
                className="relative h-[500px] perspective"
                style={{ perspective: '1000px' }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 rounded-2xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-lg p-8 transition-all duration-700 ease-in-out ${activeFeature === index
                        ? "opacity-100 z-10 shadow-xl"
                        : "opacity-0 z-0"
                      }`}
                    style={{
                      transform: activeFeature === index
                        ? 'rotateY(0) scale(1)'
                        : `rotateY(${index < activeFeature ? -40 : 40}deg) scale(0.95)`,
                      boxShadow: activeFeature === index
                        ? '0 10px 40px rgba(79, 70, 229, 0.15)'
                        : 'none',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="p-3 rounded-lg bg-indigo-500/10"
                          style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)' }}
                        >
                          <feature.icon className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                      </div>

                      <p className="text-slate-300 mb-10 leading-relaxed">{feature.description}</p>

                      {/* Feature visual with improved styling */}
                      <div className="mt-auto">
                        <div className="group relative h-56 rounded-xl overflow-hidden bg-slate-900/40 border border-slate-700/50 transition-all duration-300 hover:border-indigo-500/30">
                          {/* Feature visualization background */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]"></div>

                          {/* Feature icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <feature.icon
                              className="w-16 h-16 text-indigo-400/30 transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          {/* Floating particles */}
                          <div className="absolute inset-0 opacity-40">
                            <div className="particle-1 absolute w-1.5 h-1.5 rounded-full bg-indigo-500/50"></div>
                            <div className="particle-2 absolute w-2 h-2 rounded-full bg-blue-500/50"></div>
                            <div className="particle-3 absolute w-1 h-1 rounded-full bg-purple-500/50"></div>
                          </div>

                          {/* Indicator dots */}
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                            {features.map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeFeature === i
                                    ? "bg-indigo-500 scale-110"
                                    : "bg-slate-600 scale-100"
                                  }`}
                                style={{
                                  boxShadow: activeFeature === i
                                    ? '0 0 8px rgba(99, 102, 241, 0.5)'
                                    : 'none'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category pills with improved styling */}
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="group flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-lg"
                    style={{
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                      style={{
                        boxShadow: `0 0 15px ${category.color === 'bg-blue-500'
                          ? 'rgba(59, 130, 246, 0.3)'
                          : category.color === 'bg-emerald-500'
                            ? 'rgba(16, 185, 129, 0.3)'
                            : 'rgba(245, 158, 11, 0.3)'}`
                      }}
                    >
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white">{category.name}</span>
                      <span className="text-xs text-slate-400 ml-2">{category.count}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom feature row with improved styling */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="group relative bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/30 rounded-xl p-7 transition-all duration-500 hover:shadow-xl"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-indigo-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div
                className="p-3 rounded-lg bg-indigo-500/10 w-fit mb-5 transition-all duration-300 group-hover:bg-indigo-500/15 relative"
                style={{
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)'
                }}
              >
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Instant Matching</h3>

              <p className="text-slate-300 leading-relaxed">
                Connect with opportunities that match your skills and preferences in real-time with our proprietary algorithm.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-700/50 transition-colors duration-300 group-hover:border-slate-700">
                <Link
                  to="/features/matching"
                  className="group/link inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Learn how it works
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="group relative bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 rounded-xl p-7 transition-all duration-500 hover:shadow-xl"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-purple-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div
                className="p-3 rounded-lg bg-purple-500/10 w-fit mb-5 transition-all duration-300 group-hover:bg-purple-500/15"
                style={{
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)'
                }}
              >
                <LineChart className="w-6 h-6 text-purple-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Career Insights</h3>

              <p className="text-slate-300 leading-relaxed">
                Gain valuable insights into industry trends and skill demands to stay ahead in your professional journey.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-700/50 transition-colors duration-300 group-hover:border-slate-700">
                <Link
                  to="/features/insights"
                  className="group/link inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Explore insights
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className="group relative bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 rounded-xl p-7 transition-all duration-500 hover:shadow-xl"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-blue-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div
                className="p-3 rounded-lg bg-blue-500/10 w-fit mb-5 transition-all duration-300 group-hover:bg-blue-500/15"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)'
                }}
              >
                <Compass className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Growth Pathways</h3>

              <p className="text-slate-300 leading-relaxed">
                Discover personalized development paths with expert guidance to achieve your career aspirations.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-700/50 transition-colors duration-300 group-hover:border-slate-700">
                <Link
                  to="/features/pathways"
                  className="group/link inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Plan your growth
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
