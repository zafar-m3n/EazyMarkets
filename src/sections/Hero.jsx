import { Icon } from '@iconify/react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
      <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full blur-3xl bg-[#3B82F6]/20 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full blur-3xl bg-[#06B6D4]/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F9FAFB] mb-4">
                Trade Forex & CFDs with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
                  Institutional Power
                </span>
              </h1>
              <p className="text-sm md:text-base text-[#9CA3AF] mt-4 max-w-xl leading-relaxed">
                Access tier-1 liquidity, ultra-fast execution, and advanced trading tools. Experience transparent pricing with spreads from 0.0 pips and leverage up to 1:500.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton>
                Get Started
              </PrimaryButton>
              <SecondaryButton>
                Try Demo Account
              </SecondaryButton>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#131B2E]/90 border border-[#3B82F6]/40 text-xs text-[#F9FAFB] shadow-[0_0_18px_rgba(59,130,246,0.4)]">
                <Icon icon="mdi:shield-check" className="w-4 h-4 text-[#3B82F6]" />
                Regulated Broker
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#131B2E]/90 border border-[#3B82F6]/40 text-xs text-[#F9FAFB] shadow-[0_0_18px_rgba(59,130,246,0.4)]">
                <Icon icon="mdi:lightning-bolt" className="w-4 h-4 text-[#3B82F6]" />
                Sub-millisecond Execution
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#131B2E]/90 border border-[#3B82F6]/40 text-xs text-[#F9FAFB] shadow-[0_0_18px_rgba(59,130,246,0.4)]">
                <Icon icon="mdi:bank" className="w-4 h-4 text-[#3B82F6]" />
                Tier-1 Liquidity
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_0_28px_rgba(59,130,246,0.5)]">
              <img
                src="https://picsum.photos/seed/trading-dashboard/600/400"
                alt="Trading Dashboard"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/95 via-[#0A0E1A]/70 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-[#131B2E]/90 border border-[#3B82F6]/25 rounded-xl p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#9CA3AF]">Live Market Data</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      <span className="text-xs text-[#3B82F6]">Live</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { pair: 'EUR/USD', price: '1.0892', change: '+0.23%', positive: true },
                      { pair: 'GBP/USD', price: '1.2641', change: '+0.15%', positive: true },
                    ].map((item) => (
                      <div
                        key={item.pair}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#0A0E1A]/60 border border-[#3B82F6]/10"
                      >
                        <div className="flex items-center gap-2">
                          <Icon icon="mdi:chart-line" className="w-4 h-4 text-[#3B82F6]" />
                          <span className="font-medium text-[#F9FAFB] text-sm">{item.pair}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#F9FAFB] text-sm">{item.price}</span>
                          <span className={`text-xs font-medium ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                            {item.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#3B82F6]/10">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-xs text-[#9CA3AF] mb-1">Spread</div>
                        <div className="font-semibold text-[#3B82F6] text-sm">0.0 pips</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#9CA3AF] mb-1">Speed</div>
                        <div className="font-semibold text-[#3B82F6] text-sm">&lt;10ms</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#9CA3AF] mb-1">Slip</div>
                        <div className="font-semibold text-[#3B82F6] text-sm">Min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#131B2E]/90 border border-[#3B82F6]/25 rounded-xl p-4 shadow-[0_0_24px_rgba(59,130,246,0.5)] max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="mdi:account-group" className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-xs text-[#9CA3AF]">Active Traders</span>
              </div>
              <div className="text-2xl font-bold text-[#F9FAFB]">50,000+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
