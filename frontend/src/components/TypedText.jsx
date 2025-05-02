"use client"

import { useState, useEffect, useRef } from "react"

export default function TypedText({ strings, typeSpeed = 50, backSpeed = 30, backDelay = 1000, loop = true }) {
    const [displayText, setDisplayText] = useState("")
    const [currentStringIndex, setCurrentStringIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const currentTextRef = useRef("")
    const timerRef = useRef(null)

    useEffect(() => {
        const type = () => {
            const currentString = strings[currentStringIndex]

            if (isDeleting) {
                currentTextRef.current = currentString.substring(0, currentTextRef.current.length - 1)
            } else {
                currentTextRef.current = currentString.substring(0, currentTextRef.current.length + 1)
            }

            setDisplayText(currentTextRef.current)

            let typingSpeed = isDeleting ? backSpeed : typeSpeed

            if (!isDeleting && currentTextRef.current === currentString) {
                // Start deleting after a delay
                typingSpeed = backDelay
                setIsDeleting(true)
            } else if (isDeleting && currentTextRef.current === "") {
                setIsDeleting(false)
                setCurrentStringIndex((currentStringIndex + 1) % strings.length)
                if (!loop && currentStringIndex === strings.length - 1) {
                    return // Stop if we've reached the end and loop is false
                }
            }

            timerRef.current = setTimeout(type, typingSpeed)
        }

        timerRef.current = setTimeout(type, typeSpeed)

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [strings, currentStringIndex, isDeleting, typeSpeed, backSpeed, backDelay, loop])

    return <span>{displayText}</span>
}

