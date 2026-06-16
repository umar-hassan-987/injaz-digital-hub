import CompanyHero     from '../../components/Company/CompanyHero';
import CompanyIntro    from '../../components/Company/CompanyIntro';
import VisionMission   from '../../components/Company/VisionMission';
import CoreValues      from '../../components/Company/CoreValues';
import WhyChooseUs     from '../../components/Company/WhyChooseUs';
import CompanyCareers  from '../../components/Company/CompanyCareers';

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <CompanyIntro />
      <VisionMission />
      <CoreValues />
      <WhyChooseUs />
      <CompanyCareers />
    </>
  );
}
