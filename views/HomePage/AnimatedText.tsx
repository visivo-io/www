import { useEffect, useState } from 'react'
import styled from 'styled-components';

const SHOW_INTERVAL = 1750
const HIDE_INTERVAL = 750
const WORDS_TO_ANIMATE = ['Open Source', 'Scalable', 'Testable', 'Customizable']

export const AnimatedText = () => {
    const [fade, setFade] = useState<boolean>(true)
    const [wordOrder, setWordOrder] = useState(0)

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            if (!fade) {
                setWordOrder((previousWordOrder) => (previousWordOrder + 1) % WORDS_TO_ANIMATE.length)
            }
            setFade(!fade)
        }, fade ? SHOW_INTERVAL : HIDE_INTERVAL)

        return () => clearInterval(fadeTimeout)
    }, [fade])


    let fadeClass = "fade-in";
    if (!fade) {
        fadeClass = "fade-out";
    }
    return (
        <span className={fadeClass}>{WORDS_TO_ANIMATE[wordOrder]}</span>
    )
}