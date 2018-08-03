if ('serviceWorker' in navigator) {
    // Service worker should be in the root to work for the whole site:
    navigator.serviceWorker.register('sw.js')
        .then(registration => {
            console.log('Registration of the service worker succeeded!');
        })
        .catch(error => {
            console.log('Registration of the service worker failed: ', error);
        });
} else {
    document.writeln('No service worker support in this browser.');
}
const installButton = document.querySelector('#install');
let installPromptEvent;
window.addEventListener('beforeinstallprompt', function (event) {
    // Save the event to use later
    installPromptEvent = event;
    // Enable the button
    installButton.disabled = false;
});
installButton.addEventListener('click', () => {
    // Disable the button
    installButton.disabled = true;
    // Show the add to home screen dialog
    installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    installPromptEvent.userChoice.then((choice) => {
        if (choice.outcome === 'accepted') {
            //
        }
        else {
            //
        }
        // Clear the saved prompt, because it can't be used again
        installPromptEvent = null;
    });
});