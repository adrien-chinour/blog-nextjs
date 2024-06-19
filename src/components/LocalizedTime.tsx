export default function LocalizedTime({dateTime, className}: {dateTime: Date, className?: string}) {
    const date = new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'medium',
        timeStyle: 'medium',
        timeZone: 'Europe/Paris',
    }).format(dateTime);

    return (
        <time className={className} dateTime={dateTime.toISOString()}>{date}</time>
    )
}
