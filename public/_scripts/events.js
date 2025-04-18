/**
 * @param event : KeyboardEvent
 */
const searchHandler = (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        window.location.href = '/recherche';
    }
}

document.addEventListener('keydown', searchHandler);
