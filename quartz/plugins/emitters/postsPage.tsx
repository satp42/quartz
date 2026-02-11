import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { ProcessedContent, defaultProcessedContent } from "../vfile"
import { FullPageLayout } from "../../cfg"
import path from "path"
import {
  FilePath,
  FullSlug,
  joinSegments,
  pathToRoot,
  simplifySlug,
  stripSlashes,
} from "../../util/path"
import { defaultListPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { PostsContent } from "../../components"
import { write } from "./helpers"
import DepGraph from "../../depgraph"

const articlesFolderSlug = "articles"
const articlesFolderParts = articlesFolderSlug.split(path.posix.sep)

const isDirectChildOfArticlesFolder = (fullSlug?: FullSlug): boolean => {
  if (!fullSlug) return false

  const simplifiedSlug = stripSlashes(simplifySlug(fullSlug))
  const folderPrefix = `${articlesFolderSlug}${path.posix.sep}`
  if (!simplifiedSlug.startsWith(folderPrefix)) return false

  const slugParts = simplifiedSlug.split(path.posix.sep)
  return slugParts.length === articlesFolderParts.length + 1
}

export const PostsPage: QuartzEmitterPlugin<Partial<FullPageLayout>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultListPageLayout,
    pageBody: PostsContent(),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()
  const postsSlug = joinSegments("posts", "index") as FullSlug

  return {
    name: "PostsPage",
    getQuartzComponents() {
      return [Head, Header, Body, ...header, ...beforeBody, pageBody, ...left, ...right, Footer]
    },
    async getDependencyGraph(ctx, content, _resources) {
      const graph = new DepGraph<FilePath>()

      for (const [_tree, file] of content) {
        const slug = file.data.slug
        if (!isDirectChildOfArticlesFolder(slug)) continue

        graph.addEdge(
          file.data.filePath!,
          joinSegments(ctx.argv.output, "posts", "index.html") as FilePath,
        )
      }

      return graph
    },
    async emit(ctx, content, resources): Promise<FilePath[]> {
      const fps: FilePath[] = []
      const allFiles = content.map((c) => c[1].data)
      const cfg = ctx.cfg.configuration

      const postsContent: ProcessedContent = defaultProcessedContent({
        slug: postsSlug,
        frontmatter: {
          title: "Posts",
          tags: [],
        },
      })

      const [tree, file] = postsContent
      const externalResources = pageResources(pathToRoot(postsSlug), resources)
      const componentData: QuartzComponentProps = {
        ctx,
        fileData: file.data,
        externalResources,
        cfg,
        children: [],
        tree,
        allFiles,
      }

      const contentPage = renderPage(cfg, postsSlug, componentData, opts, externalResources)
      const fp = await write({
        ctx,
        content: contentPage,
        slug: postsSlug,
        ext: ".html",
      })

      fps.push(fp)
      return fps
    },
  }
}
