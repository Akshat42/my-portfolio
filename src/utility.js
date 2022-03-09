export function scroll(location, hash, pathname, isLoaded, ref) {
    if (
        location.hash === hash &&
        location.pathname === pathname &&
        isLoaded &&
        ref.current
    ) {
        ref.current.scrollIntoView();
    }
}
