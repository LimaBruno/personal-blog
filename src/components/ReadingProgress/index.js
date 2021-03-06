import React, { useState, useEffect } from "react"
import {
  ReadingProgressBar,
} from "./styled"

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const scrollListener = () => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  })

  return <ReadingProgressBar width={scrolled ? `${readingProgress}%` : `0%`} />
}

export default ReadingProgress