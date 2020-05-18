export default function(nodeVersion) {
  if (window.wtModuleList) {
    return $.Deferred().resolve(window.wtModuleList)
  }

  const defaultNodeVersion = 12;
  const nodeUrls = {
    "8": "https://auth0-internal.us8.webtask.io/canirequire",
    "12": "https://auth0-internal.us12.webtask.io/canirequire",
  };

  return $.ajax({
      url: nodeUrls[nodeVersion] || nodeUrls[defaultNodeVersion],
      method: 'GET'
    });
}
