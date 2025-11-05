import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Tv, Smartphone, Monitor, Star } from "lucide-react"

export default function StreamingLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-white">Stream</span>
            <span className="text-red-500 ml-2">MASTER</span>
          </div>
          <Button
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300"
            asChild
          >
            <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
              Join Telegram
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/collage-of-trending-movies-and-tv-shows-posters-da.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in">
            Unlimited Movies, Series & Live TV — Anytime, Anywhere.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 text-balance">
            All your entertainment in one subscription.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
              <Play className="mr-2 h-5 w-5" />
              Start Watching Now on Telegram
            </a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10,000+ Movies & Series</h3>
              <p className="text-gray-400">Endless entertainment at your fingertips</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Tv className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Sports & TV Channels</h3>
              <p className="text-gray-400">Never miss your favorite shows</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Works on Any Device</h3>
              <p className="text-gray-400">Stream anywhere, anytime</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-400">Premium content, budget-friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Something for Everyone</h2>
            <p className="text-xl text-gray-400 text-balance">From Hollywood blockbusters to TV classics.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="group cursor-pointer">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                  alt="Avengers: Infinity War"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                  alt="The Dark Knight"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
                  alt="Black Panther"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://image.tmdb.org/t/p/w500/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg"
                  alt="Spider-Man: Into the Spider-Verse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
                  alt="Top Gun: Maverick"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
                  alt="The Fast and the Furious"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/multiple-devices-showing-streaming-service-tv-lapt.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Watch Anywhere, Anytime.</h2>
              <p className="text-xl text-gray-300 mb-8 text-balance">
                Compatible with Smart TVs, Android, iOS, Firestick, and more. Your entertainment follows you everywhere.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700">
                  <Tv className="h-6 w-6 text-red-500" />
                  <span className="font-medium">Smart TV</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700">
                  <Smartphone className="h-6 w-6 text-red-500" />
                  <span className="font-medium">Mobile & Tablet</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700">
                  <Monitor className="h-6 w-6 text-red-500" />
                  <span className="font-medium">Desktop</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700">
                  <Play className="h-6 w-6 text-red-500" />
                  <span className="font-medium">Firestick</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
                  Get Started Today
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-red-600/20 to-transparent p-8 rounded-lg backdrop-blur-sm border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Stream in 4K Quality</h3>
                <p className="text-gray-300">
                  Experience crystal-clear picture quality on any device, anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Entertainment Solutions</h2>
            <p className="text-xl text-gray-400 text-balance">Flexible options to fit your streaming needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-gray-800 hover:border-red-500 transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Subscription</h3>
                <p className="text-gray-400 mb-4">
                  Full access to our entertainment library with unlimited streaming subscriptions
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-red-500 transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Panel Provision</h3>
                <p className="text-gray-400 mb-4">Complete streaming panel solutions for businesses and resellers</p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
                    Explore
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-red-500 transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Credit System</h3>
                <p className="text-gray-400 mb-4">Flexible payment options with our digital credit system</p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
                    Get Credits
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-red-500 transition-colors duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Tv className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rebrand Services</h3>
                <p className="text-gray-400 mb-4">Personalized streaming experience with your own custom branding</p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
                    Customize
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/user-profile-avatar-1.jpg" alt="User 1" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Sarah Johnson</h4>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">"Way better than cable! I love having all my shows in one place."</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/user-profile-avatar-2.jpg" alt="User 2" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Mike Chen</h4>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">"I can watch my shows anywhere. Perfect for my commute!"</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/user-profile-avatar-3.jpg" alt="User 3" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Emma Davis</h4>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">"Great service, highly recommend. Amazing value for money!"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-red-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Ready to Start Watching?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 text-balance">
            Join thousands of happy streamers today.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-semibold rounded-md transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
              Chat with Us on Telegram
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-white">Stream</span>
                <span className="text-red-500 ml-2">UK VIP</span>
              </div>
              <p className="text-gray-400">
                Your premium destination for unlimited entertainment. Stream movies, series, and live TV anywhere.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Premium Subscriptions</li>
                <li>Panel Provision</li>
                <li>Rebrand Services</li>
                <li>Credit System</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300"
                asChild
              >
                <a href="https://t.me/ipiptvtv" target="_blank" rel="noopener noreferrer">
                  Join Our Telegram
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 Stream UK VIP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
