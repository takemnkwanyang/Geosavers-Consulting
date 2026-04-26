import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description: string;
  canonicalPath?: string;
}

function upsertMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function useSeo({ title, description, canonicalPath }: SeoOptions) {
  useEffect(() => {
    const SITE = "GeoSavers";
    const fullTitle = title.includes(SITE) ? title : `${title} | ${SITE}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', "content", description);
    upsertMeta('meta[name="description"]', "name", "description");

    upsertMeta('meta[property="og:title"]', "content", fullTitle);
    upsertMeta('meta[property="og:title"]', "property", "og:title");

    upsertMeta('meta[property="og:description"]', "content", description);
    upsertMeta('meta[property="og:description"]', "property", "og:description");

    upsertMeta('meta[property="og:type"]', "content", "website");
    upsertMeta('meta[property="og:type"]', "property", "og:type");

    upsertMeta('meta[name="twitter:title"]', "content", fullTitle);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title");

    upsertMeta('meta[name="twitter:description"]', "content", description);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description");

    if (canonicalPath) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = `https://geosavers.com${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);
}
