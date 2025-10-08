import { HeroSection } from './hero-section'
import { LogoCloud } from './logo-cloud'
import { FeatureSection } from './feature-section'
import { SocialProof } from './social-proof'
import { CTA } from './cta'
import { FAQ } from './faq'
import { PricingSection } from './pricing'
import { Navbar } from './navbar'
import { Footer } from './footer'

function LandingPage() {
  return (
    <>
	  <Navbar />
      <HeroSection />
			{/* <LogoCloud /> */}
			<FeatureSection />
			{/* <SocialProof /> */}
			<CTA />
			{/* <FAQ /> */}
			<PricingSection />
			<Footer />

    </>
  )
}

export default LandingPage