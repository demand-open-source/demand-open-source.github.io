function getOS() {
    const ua = navigator.userAgent;

    if (/Windows NT/i.test(ua)) return 'windows';
    if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(ua)) return 'macos';
    if (/Linux/i.test(ua)) return 'linux';

    return 'unknown';
}

document.addEventListener('DOMContentLoaded', function() {
    const os = getOS();
    const links = {
        windows: 'https://github.com/demand-open-source/demand-cli/releases/download/v0.1.5/demand-cli-windows.exe',
        linux: 'https://github.com/demand-open-source/demand-cli/releases/download/v0.1.5/demand-cli-linux',
        macos: 'https://github.com/demand-open-source/demand-cli/releases/download/v0.1.5/demand-cli-macos',
        unknown: 'https://github.com/demand-open-source/demand-cli/releases'
    };

    const buttons = document.querySelectorAll('.download-proxy-button');
    buttons.forEach(button => {
        button.setAttribute('href', links[os] || links['unknown']);
    });
});