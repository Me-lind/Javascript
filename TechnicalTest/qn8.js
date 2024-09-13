/*
Write a JavaScript function to parse an URL.
*/

function parseURL(url) {
    const parsed = new URL(url);
    return {
        href: parsed.href,
        protocol: parsed.protocol,
        host: parsed.host,
        hostname: parsed.hostname,
        port: parsed.port,
        pathname: parsed.pathname,
        search: parsed.search,
        hash: parsed.hash
    };
}

console.log(parseURL('https://stackoverflow.com/questions/5223/length-of-a-javascript-object'));
