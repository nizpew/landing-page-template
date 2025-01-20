import React, { useState } from 'react';
import { Trophy, Users, MapPin, Globe2, MessageSquare, ArrowRight, X, Star, CreditCard } from 'lucide-react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

function JoinModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('join'); // 'join' or 'payment'

  const handleJoin = (e) => {
    e.preventDefault();
    if (email) {
      setStep('payment');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {step === 'join' ? (
        <div className="p-6">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="text-center mb-4">
            <div className="text-sm text-gray-600">Customer rating 9.0 | 7,177 reviews</div>
          </div>
          <div className="flex -space-x-2 justify-center mb-6">
            {[...Array(9)].map((_, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <div className="aspect-video relative mb-6">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="Productivity"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <ArrowRight size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <div className="bg-red-100 text-red-600 py-1 px-4 rounded-full text-sm inline-block">
              50,000+ members + 735 people joined this month
            </div>
          </div>
          <form onSubmit={handleJoin}>
            <input
              type="email"
              placeholder="Type your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 mb-4"
              required
            />
            <button 
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold"
            >
              Join Tasker →
            </button>
          </form>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/32" alt="Logo" className="w-8 h-8 rounded-full" />
              <span>Pay Tasker.ai</span>
            </div>
            <div className="text-xl font-bold">$49.00</div>
          </div>

          <button className="w-full bg-[#00D924] text-white py-3 rounded-md font-semibold mb-4 flex items-center justify-center gap-2">
            <img src="https://js.stripe.com/v3/fingerprinted/img/link-mark-5902c2ef00b4a4ee7a8bb04acb2a93d8.svg" alt="Link" className="w-4 h-4" />
            Pay with Link
          </button>

          <div className="text-center text-sm text-gray-500 mb-4">Or pay with card</div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Card information</label>
              <div className="w-full px-4 py-3 rounded-md border border-gray-300 mb-2">
                <div className="flex items-center">
                  <CreditCard className="text-gray-400 mr-2" size={20} />
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full outline-none"
                  />
                  <div className="flex gap-1">
                    <img src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" alt="Visa" className="h-4" />
                    <img src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" alt="Mastercard" className="h-4" />
                    <img src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg" alt="Amex" className="h-4" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-1/2 px-4 py-3 rounded-md border border-gray-300"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2 px-4 py-3 rounded-md border border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Name on card</label>
              <input
                type="text"
                placeholder="Full name on card"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Country or region</label>
              <select className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white">
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">Canada</option>
              </select>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label className="text-sm text-gray-600">
                Securely save my information for 1-click checkout
              </label>
            </div>

            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold">
              Pay $49.00
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <span>Powered by</span>
              <img src="https://js.stripe.com/v3/fingerprinted/img/stripe-badge-payment-c96bced75d0109f3a5a3e15bf8fb05fb.svg" alt="Stripe" className="h-4" />
              <div className="flex gap-2">
                <a href="#" className="hover:text-gray-700">Terms</a>
                <a href="#" className="hover:text-gray-700">Privacy</a>
              </div>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
}

function LoginModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Tasker.ai</h2>
        <input
          type="email"
          placeholder="Type your email..."
          className="w-full px-4 py-3 rounded-md border border-gray-300 mb-4"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold">
          Continue with Email
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          We'll send you a magic link to log in instantly
        </p>
      </div>
    </Modal>
  );
}

function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <JoinModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />

      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        </div>

        <div className="relative z-10 w-full">
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-white text-2xl font-bold">Tasker.ai</div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setLoginModalOpen(true)}
                  className="text-white hover:text-gray-200 transition"
                >
                  Billing
                </button>
                <button 
                  onClick={() => setJoinModalOpen(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                >
                  Join Tasker →
                </button>
              </div>
            </div>
          </nav>

          {/* Rest of the content remains the same */}
          {/* Award Badge */}
          <div className="container mx-auto px-4 pt-32 text-center">
            <div className="inline-block mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm flex items-center gap-2">
                <Trophy size={16} className="text-yellow-400" />
                <span>#1 AI Productivity Platform</span>
                <span className="text-gray-400">SINCE 2023</span>
              </div>
            </div>

            {/* Hero Content */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Go productive and stay<br />consistent
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join the #1 global community of 50,000+ achievers organizing their life and reaching their goals since 2023. 
              Don't go at it alone, let AI guide your journey to success!
            </p>

            {/* User Avatars */}
            <div className="flex justify-center mb-8">
              <div className="flex -space-x-4">
                {[...Array(10)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4 text-white text-lg">
              <div className="flex items-center justify-center gap-2">
                <Trophy className="text-yellow-400" />
                <a href="#" className="underline">Track 365 tasks/year</a>
                <span>in any category</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="text-red-400" />
                <a href="#" className="underline">Join community</a>
                <span>for accountability and support</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="text-green-400" />
                <a href="#" className="underline">Set milestones</a>
                <span>and track your progress</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe2 className="text-blue-400" />
                <a href="#" className="underline">Access anywhere</a>
                <span>with cloud sync</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="text-purple-400" />
                <a href="#" className="underline">Get AI feedback</a>
                <span>and improve your workflow</span>
              </div>
            </div>

            {/* Sign Up Card */}
            <div className="max-w-md mx-auto mt-12 bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                  alt="Productivity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight size={24} className="text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <input
                  type="email"
                  placeholder="Type your email..."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 mb-4"
                />
                <button 
                  onClick={() => setJoinModalOpen(true)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold"
                >
                  Join Tasker →
                </button>
                <p className="text-center text-sm text-gray-500 mt-2">
                  If you already have an account, we'll log you in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Press Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-500 mb-8">as seen on</div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png" alt="NYT" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Financial_Times_corporate_logo.svg" alt="FT" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg" alt="BBC" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg" alt="CNN" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/CNBC_logo.svg" alt="CNBC" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;