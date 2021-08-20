export default (e, direction) => {
    if (!e) return
    var scrollDirection = +1

    const ScrollTopAnime = () => {
        if (e.offsetHeight + e.scrollTop >= e.scrollHeight) {
            scrollDirection = -1
        } else if (e.scrollTop === 0) {
            scrollDirection = +1
        }

        e.scroll({ top: e.scrollTop + scrollDirection })
    }

    const ScrollLeftAnime = () => {
        if (e.offsetWidth + e.scrollLeft >= e.scrollWidth) {
            scrollDirection = -1
        } else if (e.scrollLeft === 0) {
            scrollDirection = +1
        }

        e.scroll({ left: e.scrollLeft + scrollDirection })
    }

    if (direction === 'top') {
        return setInterval(ScrollTopAnime, 50)
    } else {
        return setInterval(ScrollLeftAnime, 50)
    }
}
