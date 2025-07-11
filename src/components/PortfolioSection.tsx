import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { Button } from "./ui/button";
import { ExternalLink } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const portfolioItems = i18n.exists('portfolio.items') ? t('portfolio.items', { returnObjects: true }) as any[] : [];

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <Carousel setApi={setApi} opts={{ loop: true, direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }} className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${current === index + 1 ? 'p-1 bg-[#a456f6]' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="bg-[#231c29] border border-gray-700/50 p-6 md:p-8 rounded-2xl h-auto md:h-[500px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4 h-full">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-7 h-7 bg-yellow-500 rounded-md flex items-center justify-center font-bold text-black text-sm">$</div>
                          <div>
                            <h3 className="font-bold text-sm">{item.name}</h3>
                            <p className="text-xs text-white/80">{item.category}</p>
                          </div>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#a456f6]">
                          {item.title}
                        </h2>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#a456f6] mb-1 text-xs">{t('portfolio.challenge')}</h4>
                        <p className="text-white text-xs">{item.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#a456f6] mb-1 text-xs">{t('portfolio.solution')}</h4>
                        <p className="text-white text-xs">{item.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#a456f6] mb-1 text-xs">{t('portfolio.additional_results')}</h4>
                        <ul className="list-disc list-inside text-white text-xs flex flex-col gap-1">
                          {item.results.map((result: string) => <li key={result}>{result}</li>)}
                        </ul>
                      </div>
                      <div className="mt-auto pt-4">
                        <Button variant="link" asChild className="p-0 text-[#a456f6] hover:text-[#c17af8]">
                          <a href={item.caseStudyLink} target="_blank" rel="noopener noreferrer">
                            {t('portfolio.read_case_study')} <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col items-center justify-center gap-8 bg-black/20 p-8 rounded-lg">
                      <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#a456f6]">{item.mainMetric}</p>
                        <p className="text-sm font-semibold text-white">{t(item.metricDescriptionKey)}</p>
                        <p className="text-xs text-white/80">{t(item.metricTimelineKey)}</p>
                      </div>
                      <div className="w-full">
                        <p className="text-center text-sm text-white/80 mb-2">{t('portfolio.performance_over_time')}</p>
                        <svg viewBox="0 0 100 40" className="w-full h-auto">
                           <path d="M 5 35 Q 25 20, 45 25 T 85 10" fill="none" stroke="#6b7280" strokeWidth="2" />
                           <path d="M 5 35 Q 25 20, 45 25 T 85 10" fill="none" stroke="#a456f6" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white disabled:hidden" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white disabled:hidden" />
        </Carousel>
      </div>
    </section>
  );
};

export default PortfolioSection;
