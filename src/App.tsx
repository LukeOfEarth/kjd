import { Banner, Navbar, ServicesSection, CaseStudiesSection, ClientsSections } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ServicesSection />
      <CaseStudiesSection />
      <ClientsSections />
    </div>
  )
}

export default App;