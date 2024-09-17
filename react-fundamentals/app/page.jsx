import LikeButton from './like-button';

function Header({title, title2}) {
    return (
        <div>
            <h1>{title ? title : "Default title"}</h1>
            <h1>{title2}</h1>
        </div>
    );
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." title2="is great." />
            <ul>
                {names.map((name) => <li key={name}>{name}</li>)}
            </ul>
            <LikeButton />
        </div>
    );
}