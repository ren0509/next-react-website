export function prevNextPost(allSlugs, currentSlug) {
import { prevNextPost } from './prev-next-post';
    const umber0fPosts = allSlugs.length

    const index = allSlugs.findIndex(
        ({ slug }) => slug === currentSlug,
    )
    
    const prevPost =
        index + 1 === Number0fPosts
            ? { title: '', slug: '' }
            : allSlugs[index + 1]
    
    const prevNextPost =
        index === 0
    

}