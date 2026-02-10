import type { EventData } from '../data/events';
import EventIllustration from './EventIllustration';

interface EventCardProps {
    event: EventData;
    onViewDetails: (event: EventData) => void;
}

export default function EventCard({ event, onViewDetails }: EventCardProps) {
    return (
        <article className="event-card">
            <h2 className="event-card__title">{event.title}</h2>

            <div className="event-card__image">
                {event.image ? (
                    <img
                        src={event.image}
                        alt={`Visual for ${event.title}`}
                        loading="lazy"
                    />
                ) : (
                    <EventIllustration eventId={event.id} title={event.title} />
                )}
            </div>

            <span className="event-card__about-label">About the event</span>
            <p className="event-card__description">{event.brief}</p>

            <button
                className="event-card__cta"
                onClick={() => onViewDetails(event)}
                aria-label={`View details for ${event.title}`}
            >
                View details
                <span className="event-card__cta-arrow" aria-hidden="true">
                    →
                </span>
            </button>
        </article>
    );
}
