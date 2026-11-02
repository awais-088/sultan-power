import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sultan Brothers | Power Engineering, Generator Sales & Repair',
  description: 'Sultan Brothers Power Engineering Repairing and Parts — generator sales, complete generator repair, engine overhauling and spare parts. Contact us on WhatsApp.',
  keywords: ['generator sales', 'generator repair', 'diesel engine repair', 'engine overhauling', 'generator spare parts', 'Sultan Brothers'],
  openGraph: { title: 'Sultan Brothers | Power Engineering', description: 'Power solutions, dependable repairs and generator parts.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
