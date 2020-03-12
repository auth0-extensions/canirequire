export default function(nodeVersion) {
  if (window.wtModuleList) {
    return $.Deferred().resolve(window.wtModuleList)
  }

  const url = nodeVersion == '8' ?
    'https://auth0-internal.us8.webtask.io/canirequire' :
    'https://auth0-internal.stage2-node12.webtask.io/canirequire'
  
  return $.ajax({
      url,
      method: 'GET'
    });
}