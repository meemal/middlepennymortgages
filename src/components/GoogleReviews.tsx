import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Star } from 'lucide-react';
import { googleBusinessUrl, googleReviews } from '../data/googleReviews';

interface GoogleReviewsProps {
  compact?: boolean;
}

function Stars({ small = false }: { small?: boolean }) {
  return (
    <div className={`flex items-center gap-0.5 ${small ? 'text-sm' : 'text-lg'}`} aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function GoogleReviews({ compact = false }: GoogleReviewsProps) {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    if (compact) return;
    const interval = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % googleReviews.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [compact]);

  if (compact) {
    return (
      <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-white/90">
        <span className="inline-flex items-center gap-2 font-semibold">
          <Stars small />
          <span>5.0 on Google</span>
        </span>
        <span className="h-4 w-px bg-white/40" aria-hidden="true" />
        <a
          href={googleBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-white/50 underline-offset-4 transition-colors hover:text-white"
        >
          Read our Google reviews
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    );
  }

  const review = googleReviews[activeReview];

  return (
    <section className="bg-brand-grey-light py-20" aria-labelledby="google-reviews-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-brand-teal">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-base font-bold text-brand-teal shadow-sm">G</span>
            Verified customer feedback
          </div>
          <h2 id="google-reviews-heading" className="section-heading mb-4">What Our Clients Say</h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Real experiences from clients who have worked with Emma on their mortgage journey.
          </p>
        </div>

        <div className="relative rounded-3xl border border-gray-100 bg-white p-7 shadow-sm sm:p-10">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-brand-grey">5.0</span>
                <div>
                  <Stars />
                  <p className="mt-1 text-xs text-gray-500">Based on customer reviews</p>
                </div>
              </div>
            </div>
            <a
              href={googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2.5 text-sm"
            >
              Read more on Google
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="min-h-[230px]" aria-live="polite">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-brand-grey">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.timing}</p>
              </div>
              <span className="rounded-full bg-brand-teal-light px-3 py-1 text-xs font-semibold text-brand-teal">Google review</span>
            </div>
            <Stars small />
            <p className="mt-5 text-lg leading-relaxed text-gray-700">“{review.text}”</p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
            <button
              type="button"
              onClick={() => setActiveReview((activeReview - 1 + googleReviews.length) % googleReviews.length)}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-grey transition-colors hover:bg-brand-teal-light hover:text-brand-teal"
              aria-label="Previous review"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Previous</span>
            </button>
            <div className="flex max-w-xs flex-wrap items-center justify-center gap-1.5" aria-label={`Review ${activeReview + 1} of ${googleReviews.length}`}>
              {googleReviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  className={`h-2 rounded-full transition-all ${index === activeReview ? 'w-6 bg-brand-teal' : 'w-2 bg-gray-200 hover:bg-brand-teal/50'}`}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeReview ? 'true' : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActiveReview((activeReview + 1) % googleReviews.length)}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-grey transition-colors hover:bg-brand-teal-light hover:text-brand-teal"
              aria-label="Next review"
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Reviews are reproduced from the Middlepenny Google Business Profile.
          </p>
        </div>
      </div>
    </section>
  );
}
