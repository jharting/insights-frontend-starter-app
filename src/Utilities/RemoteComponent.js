export function load (url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.append(script);
}
