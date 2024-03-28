export const copyToClipboard = () => {
    const currentUrl = window.location.pathname;
    const id = currentUrl.split("/")
    const sharedUrl = window.location.origin + "/shared/" + "blog/" + id[id.length - 1] + "?overlay=True"
    navigator.clipboard.writeText(sharedUrl)
        .then(() => {
            console.log('URL copied to clipboard', sharedUrl);
        })
        .catch((error) => {
            console.error('Failed to copy URL to clipboard', error);
        });
};