# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Browser events, parsing, rendering and visible errors. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `resolveTheme`. Use this trace as a map: Select theme → resolveTheme copies base plus allowed overrides → adapter sets CSS custom properties on preview → card and button inherit the same variables → contrast computes the two displayed text/background ratios.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding an inline-block box or a small pure function.

## Decision: Resolve a complete map before applying it

If an adapter set only changed overrides, switching from night to partial could leave night values behind. The reference resolves every required token for every selection, then sets the full map. This makes the fallback depend on the base definition rather than on whichever theme happened to run previously.

**Review question:** Which switching sequence would reveal stale custom properties?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Share semantic tokens across components

The card border and button background use accent, while text pairs have explicit foreground and background roles. A token name expresses a role rather than a particular green value. The example has only two components so you can inspect every consumer before adding a theme editor or design system.

**Review question:** When would two uses of accent need separate semantic tokens?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Keep contrast evidence scoped

The helper converts opaque hex channels to relative luminance and compares two pairs. Known black/white and equal-color cases anchor its arithmetic. The chosen 4.5 target follows the normal-text minimum explained by W3C, but other visual and interaction concerns still require separate checks.

**Review question:** Why does a passing pair ratio not prove keyboard accessibility?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core, wording and interaction in the browser adapter, and layout in the relevant CSS rule. For the static references, semantic information belongs in HTML before styling. For the Git reference, the staged snapshot boundary belongs in the helper rather than being guessed from editor state.

If a story crosses two files, say why. A new unit, weather option or UI station may require a contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

Persistence and frameworks are explicit where used: M019 saves a namespaced local draft; M024–M025 introduce React. The remaining builds use plain JavaScript and local data. M025 saved definitions last for the current session only. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
