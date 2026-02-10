import { useEffect, useRef } from 'react';
import type { EventData } from '../data/events';
import EventCard from './EventCard';

interface EventGridProps {
    events: EventData[];
    onViewDetails: (event: EventData) => void;
}

export default function EventGrid({ events, onViewDetails }: EventGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-card--visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        const cards = grid.querySelectorAll('.fade-in-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [events]);

    return (
        <section className="events-section" id="events" aria-label="Events listing">
            <div className="container">
                <div className="event-grid" ref={gridRef}>
                    {events.map((event) => (
                        <div key={event.id} className="fade-in-card">
                            <EventCard event={event} onViewDetails={onViewDetails} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
