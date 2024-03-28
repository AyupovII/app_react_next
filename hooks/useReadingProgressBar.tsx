import { useEffect, useState } from "react"

export function useReadingProgressBar() {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        const updateScrollCompletion = () => {
            const actialPosition = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight
            const percentage = (actialPosition / scrollHeight) * 100
            setCompletion(percentage)
        }

        window.addEventListener('scroll', updateScrollCompletion)
        return () => {
            window.removeEventListener('scroll', updateScrollCompletion)
        }
    })
    return completion

}