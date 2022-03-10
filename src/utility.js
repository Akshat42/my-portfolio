export function scroll(location, hash, isLoaded, ref, pathname = '') {
    if (
        pathname &&
        location.hash === hash &&
        location.pathname === pathname &&
        isLoaded &&
        ref.current
    ) {
        ref.current.scrollIntoView();
    } else if (isLoaded && ref.current && location.hash === hash) {
        ref.current.scrollIntoView();
    }
}
