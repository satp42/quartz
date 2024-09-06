import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/satp42",
      Twitter: "https://twitter.com/therealsatwik",
      LinkedIn: "https://www.linkedin.com/in/satwik-panigrahi-90a7b1218/",
      Resume: "https://ff695b5dd2960f41cb75835a324f0804.r2.cloudflarestorage.com/drp-cl/3bc216a8-4152-421b-b228-b1c44cafdcd9/5331daa1-41ac-41a0-a44c-27d093b367ee/4631280b-0832-41ab-bcf1-c20887e98508.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fed7aac277aea51eca0c294ada409f61/20240906/auto/s3/aws4_request&X-Amz-Date=20240906T175410Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=de1130c9b4c50d20edadc2baeea284095f52315763019b690cd460c209339854"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
