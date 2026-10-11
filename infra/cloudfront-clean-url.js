/* eslint-disable no-unused-vars -- `handler` is the CloudFront Functions entry point, invoked by the edge runtime */
// CloudFront Viewer Request function: map clean URLs to their prerendered .html files.
//
// This site is a fully-prerendered multi-page app (adapter-static, strict: true).
// Every page exists as a distinct .html file, e.g.:
//   /about                          -> about.html
//   /blog/linkedin-job-skill-gap-n8n -> blog/linkedin-job-skill-gap-n8n.html
//
// This runs BEFORE the request reaches S3, so S3 never returns 403 for a
// missing object and no custom error response is needed.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Anything with a file extension is a real asset (js/css/img/xml) — leave it.
  if (uri.includes('.')) {
    return request;
  }

  // Root maps to the index document.
  if (uri === '/') {
    request.uri = '/index.html';
    return request;
  }

  // Clean URL (with or without trailing slash) -> matching .html file.
  if (uri.endsWith('/')) {
    uri = uri.slice(0, -1);
  }
  request.uri = uri + '.html';

  return request;
}
