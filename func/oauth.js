export async function handler(event, context) {
    const redirectUri = new URL("/.netlify/functions/oauth-callback", DEPLOY_PRIME_URL);
    let url = `https://discord.com/api/oauth2/authorize?client_id=946152876110127114&redirect_uri=https%3A%2F%2Froblox-canada.netlify.app%2F.netlify%2Ffunctions%2Foauth-callback&response_type=code&scope=identify`;

    if (event.queryStringParameters.state !== undefined) {
        url += `&state=${encodeURIComponent(event.queryStringParameters.state)}`;
    }

    return {
        statusCode: 303,
        headers: {
            "Location": url
        }
    };
}
