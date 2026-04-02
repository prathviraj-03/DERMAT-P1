import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import ServiceDetailPageClient from '@/components/service-detail-page';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <ServiceDetailPageClient
      service={service}
      relatedServices={relatedServices}
    />
  );
}
