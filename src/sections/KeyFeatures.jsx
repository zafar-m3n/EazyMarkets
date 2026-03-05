import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

export default function KeyFeatures() {
  const features = [
    {
      icon: 'mdi:lightning-bolt',
      title: 'Ultra-Fast Execution',
      description: 'Order execution in under 10 milliseconds with minimal slippage and best-in-class fill rates.',
    },
    {
      icon: 'mdi:account-multiple',
      title: 'Multiple Account Types',
      description: 'Choose from Beginner, Standard, Pro, and VIP accounts tailored to your trading style and experience.',
    },
    {
      icon: 'mdi:monitor-dashboard',
      title: 'Advanced Platforms',
      description: 'Trade on MetaTrader 5, our proprietary web trader, and mobile apps with full feature parity.',
    },
    {
      icon: 'mdi:robot',
      title: 'Bots & Automation',
      description: 'Deploy sophisticated trading bots and expert advisors with full API access for algorithmic strategies.',
    },
    {
      icon: 'mdi:shield-lock',
      title: 'Risk Management',
      description: 'Advanced risk controls including negative balance protection, stop-loss, and take-profit orders.',
    },
    {
      icon: 'mdi:finance',
      title: 'Competitive Pricing',
      description: 'Spreads from 0.0 pips, low commissions, and transparent fee structure with no hidden costs.',
    },
  ];

  return (
    <SectionContainer className="bg-[#0A0E1A]">
      <SectionHeader
        eyebrow="Features"
        title="Everything You Need to Trade"
        description="Professional-grade tools and features designed for traders who demand the best execution, pricing, and technology."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
