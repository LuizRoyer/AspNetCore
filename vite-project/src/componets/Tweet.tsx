type TweetProps = {
    text: string
}


export default function Tweet(props: TweetProps) {
    return (
        <p>
            {props.text}
        </p>
    )
}