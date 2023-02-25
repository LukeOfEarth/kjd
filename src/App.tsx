import { Banner, Navbar, ServicesSection, CaseStudiesSection, ClientsSections, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ServicesSection />
      <CaseStudiesSection />
      <ClientsSections />
      <Footer />
    </div>
  )
}

export default App;