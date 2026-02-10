import { useEffect, useCallback, useRef } from 'react';
import type { EventData } from '../data/events';
import EventIllustration from './EventIllustration';

interface EventModalProps {
    event: EventData | null;
    onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }

            /* Focus trap */
            if (e.key === 'Tab' && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last?.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first?.focus();
                }
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (event) {
            document.body.classList.add('modal-open');
            document.addEventListener('keydown', handleKeyDown);

            requestAnimationFrame(() => {
                closeButtonRef.current?.focus();
            });
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [event, handleKeyDown]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`modal-overlay ${event ? 'modal-overlay--active' : ''}`}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-label={event ? `${event.title} details` : undefined}
            aria-hidden={!event}
        >
            {event && (
                <div className="modal" ref={modalRef}>
                    <button
                        className="modal__close"
                        onClick={onClose}
                        ref={closeButtonRef}
                        aria-label="Close dialog"
                    >
                        ✕
                    </button>

                    <div className="modal__image">
                        {event.image ? (
                            <img src={event.image} alt={`Visual for ${event.title}`} />
                        ) : (
                            <EventIllustration eventId={event.id} title={event.title} />
                        )}
                    </div>

                    <div className="modal__body">
                        <h2 className="modal__title">{event.title}</h2>

                        <div className="modal__section">
                            <p className="modal__text">{event.detailed}</p>
                        </div>

                        <div className="modal__section">
                            <h3 className="modal__section-title">Team Size</h3>
                            <div className="modal__meta">
                                <span aria-hidden="true">👥</span> {event.teamSize}
                            </div>
                        </div>

                        <div className="modal__section">
                            <h3 className="modal__section-title">Rules</h3>
                            <ul className="modal__list">
                                {event.rules.map((rule, idx) => (
                                    <li key={idx}>{rule}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal__section">
                            <h3 className="modal__section-title">Judging Criteria</h3>
                            <ul className="modal__list">
                                {event.judgingCriteria.map((criterion, idx) => (
                                    <li key={idx}>{criterion}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
