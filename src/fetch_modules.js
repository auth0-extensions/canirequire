export default function (nodeVersion) {
  if (window.wtModuleList) {
    return $.Deferred().resolve(window.wtModuleList);
  }

  const url = "https://auth0-internal.us.webtask.io/canirequire";

  return $.ajax({
    url,
    method: "GET",
    headers: {
      "x-wt-runtime": `node${nodeVersion}`,
    },
  });
}
