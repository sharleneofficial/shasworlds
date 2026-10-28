<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep visual theme colors and effects in src/styles.css and use Button variants for controls so the cinematic hero and solid content sections share one theme.
- Mount the shared SiteHeader in the root layout so homepage and standalone content pages have consistent navigation.
- Keep contact destinations in src/lib/contact-links.ts so the contact page preserves the existing live site's links independently of homepage social destinations.
- Render navigation brand lettering with the hero font token rather than a separate graphic so the site maintains a cohesive typographic identity.
