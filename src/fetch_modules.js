export default function(nodeVersion) {
  const url = nodeVersion == 4 ?
    'https://auth0-internal.us.webtask.io/canirequire' :
    'https://auth0-internal.us8.webtask.io/canirequire'
  
  return $.ajax({
      url,
      method: 'GET'
    });
}