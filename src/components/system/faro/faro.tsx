import FaroInitialize from "@/components/system/faro/faro-initialize";

export default function Faro() {
    if (process.env.FARO_ENDPOINT === undefined || process.env.NODE_ENV === 'development') {
        return <></>
    }

    return (
        <FaroInitialize
            name="blog-nextjs"
            version="1.0.0"
            endpoint={process.env.FARO_ENDPOINT}
            environment={process.env.NODE_ENV}
        />
    )
}
