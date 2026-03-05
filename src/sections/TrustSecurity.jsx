import { Icon } from '@iconify/react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';

export default function TrustSecurity() {
  const trustItems = [
    {
      icon: 'mdi:shield-check',
      title: 'Regulatory Compliance',
      description: 'Licensed and regulated by top-tier financial authorities.',
    },
    {
      icon: 'mdi:bank-lock',
      title: 'Segregated Accounts',
      description: 'Client funds held in segregated bank accounts at tier-1 institutions.',
    },
    {
      icon: 'mdi:lock-check',
      title: 'Negative Balance Protection',
      description: 'You cannot lose more than your account balance.',
    },
    {
      icon: 'mdi:certificate',
      title: 'SSL Encryption',
      description: 'Bank-grade encryption protects all data and transactions.',
    },
  ];

  return (
    <SectionContainer className="bg-[#0A0E1A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Trust & Security"
            title="Your Safety is Our Priority"
            description="We implement the highest standards of fund security, regulatory compliance, and risk management to protect your capital and ensure fair trading conditions."
          />

          <div className="space-y-4 mt-8">
            <div className="flex items-start gap-3">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#F9FAFB] mb-1">Regulated Broker</h4>
                <p className="text-sm text-[#9CA3AF]">
                  Operating under strict regulatory oversight with full compliance and regular audits.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#F9FAFB] mb-1">Transparent Execution</h4>
                <p className="text-sm text-[#9CA3AF]">
                  No dealing desk intervention, no requotes, and full execution transparency on every trade.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#F9FAFB] mb-1">Advanced Risk Controls</h4>
                <p className="text-sm text-[#9CA3AF]">
                  Comprehensive risk management tools to help you protect capital and trade responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-[#131B2E] border border-[#3B82F6]/25 rounded-2xl p-5 shadow-[0_0_22px_rgba(59,130,246,0.5)] transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(59,130,246,0.4)]">
                <Icon icon={item.icon} className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#F9FAFB] mb-1">{item.title}</h4>
                <p className="text-sm text-[#9CA3AF]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
