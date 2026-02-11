import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import path from "path"
import style from "../styles/listPage.scss"
import { PageList } from "../PageList"
import { stripSlashes, simplifySlug } from "../../util/path"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"

const articlesFolderSlug = "articles"
const articlesFolderParts = articlesFolderSlug.split(path.posix.sep)

const isDirectChildOfArticlesFolder = (fullSlug?: string): boolean => {
  if (!fullSlug) return false

  const simplifiedSlug = stripSlashes(simplifySlug(fullSlug))
  const folderPrefix = `${articlesFolderSlug}${path.posix.sep}`
  if (!simplifiedSlug.startsWith(folderPrefix)) return false

  const slugParts = simplifiedSlug.split(path.posix.sep)
  return slugParts.length === articlesFolderParts.length + 1
}

const PostsContent: QuartzComponent = (props: QuartzComponentProps) => {
  const { tree, fileData, allFiles } = props
  const articleChildPages = allFiles.filter((file) =>
    isDirectChildOfArticlesFolder(file.slug),
  )
  const hasTreeContent = (tree as Root).children.length > 0
  const content =
    hasTreeContent && fileData.filePath
      ? htmlToJsx(fileData.filePath, tree)
      : fileData.description
  const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
  const classes = ["popover-hint", ...cssClasses].join(" ")
  const listProps = {
    ...props,
    allFiles: articleChildPages,
  }

  return (
    <div class={classes}>
      <article>{content}</article>
      <div class="page-listing">
        <div>
          <PageList {...listProps} />
        </div>
      </div>
    </div>
  )
}

PostsContent.css = style + PageList.css
export default (() => PostsContent) satisfies QuartzComponentConstructor
