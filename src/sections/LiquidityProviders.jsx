import { Icon } from '@iconify/react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';

export default function LiquidityProviders() {
  const providers = [
    {
      icon: 'mdi:bank',
      title: 'Tier-1 Banks',
      description: 'Direct access to major global banks for institutional-grade pricing and deep liquidity pools.',
    },
    {
      icon: 'mdi:swap-horizontal',
      title: 'Prime ECNs',
      description: 'Connected to leading electronic communication networks for transparent order matching.',
    },
    {
      icon: 'mdi:chart-multiple',
      title: 'Multi-Asset Liquidity',
      description: 'Aggregated liquidity across forex, indices, commodities, and crypto CFDs.',
    },
    {
      icon: 'mdi:speedometer',
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond execution through optimized network infrastructure and data centers.',
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader
        eyebrow="Liquidity"
        title="Institutional-Grade Execution"
        description="We aggregate liquidity from tier-1 banks, prime brokers, and ECNs to ensure the best pricing, minimal slippage, and lightning-fast order execution."
        centered
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {providers.map((provider) => (
          <div
            key={provider.title}
            className="bg-[#131B2E]/90 border border-[#3B82F6]/25 rounded-2xl p-5 shadow-[0_0_24px_rgba(59,130,246,0.5)] transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(59,130,246,0.75)]"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 flex items-center justify-center mb-4 shadow-[0_0_18px_rgba(59,130,246,0.4)]">
              <Icon icon={provider.icon} className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-lg font-semibold text-[#F9FAFB] mb-2">
              {provider.title}
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {provider.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
