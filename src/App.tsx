import { motion } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  ArrowRight, 
  Github, 
  Twitter, 
  Layers,
  Code
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Layers className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">MODERNA<span className="text-indigo-600">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Performance</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-500 font-medium text-sm hover:text-indigo-600 transition-colors">Login</button>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
              Deploy to Vercel
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-24 px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-8"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            V0.4.2 Now live on Edge
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900"
          >
            Build at the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">speed of thought.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The comprehensive starter kit for high-performance React applications. 
            Optimized for Vercel, designed for speed, and ready for production.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 active:scale-[0.98] transition-all border border-gray-200 flex items-center justify-center gap-2 shadow-sm">
              <Github className="w-5 h-5" />
              View Source
            </button>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { label: 'Latency', value: '< 20ms', icon: Cpu },
              { label: 'Uptime', value: '99.99%', icon: Shield },
              { label: 'Build Time', value: '1.2s', icon: Zap },
              { label: 'Global Nodes', value: '250+', icon: Globe },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-3xl font-extrabold tracking-tight text-slate-900">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Built for elite performance.</h2>
              <p className="text-lg text-slate-500">Every component is engineered for maximum throughput and minimum overhead.</p>
            </div>
            <div className="shrink-0">
              <button className="text-sm font-bold text-indigo-600 flex items-center gap-2 group">
                Explore Documentation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Infrastructure as Code',
                description: 'Seamless deployment with Terraform and Pulumi integrations out of the box.',
                icon: Code
              },
              {
                title: 'Advanced Caching',
                description: 'Global edge caching ensures your content is always near your users.',
                icon: Zap
              },
              {
                title: 'Security First',
                description: 'DDoS protection, SOC2 compliance, and end-to-end encryption by default.',
                icon: Shield
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-indigo-600 transition-all group flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight"> {feature.title} </h3>
                <p className="text-slate-500 leading-relaxed text-sm"> {feature.description} </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Terminal Style */}
      <section className="py-24 px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl ring-8 ring-slate-100">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <code className="text-indigo-400 font-mono text-sm ml-2 overflow-hidden text-ellipsis whitespace-nowrap">
                npx create-moderna-app@latest my-project
              </code>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 border border-slate-700 w-full md:w-auto justify-center">
              Deploy to Vercel
            </button>
          </div>
          <div className="text-center mt-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Ready to scale your infrastructure?</h2>
            <p className="text-slate-500">Join thousands of developers building the future of the web with Moderna.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 bg-white border-t border-gray-200 text-xs text-slate-400 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Layers className="text-white w-3.5 h-3.5" />
              </div>
              <span className="font-display font-bold text-sm tracking-tight text-slate-900">MODERNA<span className="text-indigo-600">.</span></span>
            </div>
            <span className="flex items-center gap-2 text-green-600 font-semibold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Vercel Edge Network: Online
            </span>
            <span>Version 1.2.0-beta</span>
          </div>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Support</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
