import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategoryScroll from '../components/CategoryScroll'
import ProductGrid from '../components/ProductGrid'

export default function Home() {

  return (
    <div className="bg-cream min-h-screen">

      <Navbar />

      <Hero />

      <CategoryScroll />

      <ProductGrid />

    </div>
  )
}