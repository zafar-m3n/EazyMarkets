import { Icon } from '@iconify/react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';

export default function Markets() {
  const markets = [
    { icon: 'mdi:currency-usd', name: 'Forex', pairs: '70+ pairs' },
    { icon: 'mdi:chart-line', name: 'Indices', pairs: '15+ markets' },
    { icon: 'mdi:gold', name: 'Commodities', pairs: '20+ assets' },
    { icon: 'mdi:bitcoin', name: 'Crypto CFDs', pairs: '30+ coins' },
    { icon: 'mdi:oil-lamp', name: 'Energies', pairs: '5+ markets' },
    { icon: 'mdi:barley', name: 'Soft Commodities', pairs: '10+ assets' },
  ];

  return (
    <SectionContainer>
      <SectionHeader
        eyebrow="Markets"
        title="Trade Multiple Asset Classes"
        description="Access a comprehensive range of global markets with competitive spreads and deep liquidity across all instruments."
        centered
      />

      <div className="flex flex-wrap justify-center gap-4">
        {markets.map((market) => (
          <div
            key={market.name}
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[#131B2E]/90 border border-[#3B82F6]/30 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200 ease-out hover:scale-[1.05] hover:shadow-[0_0_28px_rgba(59,130,246,0.6)]"
          >
            <Icon icon={market.icon} className="w-5 h-5 text-[#3B82F6]" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#F9FAFB]">{market.name}</span>
              <span className="text-xs text-[#9CA3AF]">{market.pairs}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
