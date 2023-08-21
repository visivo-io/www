import { useEffect, useState } from 'react'
import styled from 'styled-components';

const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = ['Open Source', 'Scalable', 'Testable', 'Customizable']

export const AnimatedText = () => {
    const [fade, setFade] = useState<boolean>(true)
    const [wordOrder, setWordOrder] = useState(0)

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            setFade(!fade)
        }, FADE_INTERVAL_MS)

        return () => clearInterval(fadeTimeout)
    }, [fade])

    useEffect(() => {
        const wordTimeout = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
        }, WORD_CHANGE_INTERVAL_MS)

        return () => clearInterval(wordTimeout)
    }, [])


    let fadeClass = "fade-in";
    if (!fade) {
        fadeClass = "fade-out";
    }
    return (
        <span className={fadeClass}>{WORDS_TO_ANIMATE[wordOrder]}</span>
    )
}