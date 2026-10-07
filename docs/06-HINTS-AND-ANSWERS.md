# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add a third component

**Hint 1 — ownership:** Begin from the `var(--…)` consumers in `public/style.css`. Create a small status badge consuming existing tokens before inventing new ones.

**Hint 2 — reasoning:** Revisit the decision “Share semantic tokens across components”. Ask yourself: When would two uses of accent need separate semantic tokens?

**Answer direction:** A defensible solution demonstrates this observable result: It changes with every theme and remains understandable without color alone. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Show fallback origins

**Hint 1 — ownership:** Begin from the spread in `resolveTheme`. Return or derive a per-token source label indicating base or override.

**Hint 2 — reasoning:** Revisit the decision “Resolve a complete map before applying it”. Ask yourself: Which switching sequence would reveal stale custom properties?

**Answer direction:** A defensible solution demonstrates this observable result: Partial theme explicitly identifies accent as inherited from base. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Add a new authored theme

**Hint 1 — ownership:** Begin from the `themes` object in `public/core.js`. Choose a small complete or partial override set and verify both displayed color pairs.

**Hint 2 — reasoning:** Revisit the decision “Keep contrast evidence scoped”. Ask yourself: Why does a passing pair ratio not prove keyboard accessibility?

**Answer direction:** A defensible solution demonstrates this observable result: The new theme passes exact pair checks and long-content/narrow-view inspection. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Add a theme reset button

**Hint 1 — ownership:** Begin from `render` in `public/app.js`. Return to paper through the same resolve-and-render route.

**Hint 2 — reasoning:** Revisit the decision “Resolve a complete map before applying it”. Ask yourself: Which switching sequence would reveal stale custom properties?

**Answer direction:** A defensible solution demonstrates this observable result: Reset after night or partial produces identical computed token values. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Explain unsupported colors

**Hint 1 — ownership:** Begin from the hex check in `contrast`. Add examples documenting why named colors, alpha colors and gradients are outside the contrast helper.

**Hint 2 — reasoning:** Revisit the decision “Keep contrast evidence scoped”. Ask yourself: Why does a passing pair ratio not prove keyboard accessibility?

**Answer direction:** A defensible solution demonstrates this observable result: Invalid formats produce explicit errors instead of misleading numeric ratios. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Create a manual focus worksheet

**Hint 1 — ownership:** Begin from the `#preview` components in `public/index.html`. Record Tab order, visible focus and the same long label under each theme.

**Hint 2 — reasoning:** Revisit the decision “Keep contrast evidence scoped”. Ask yourself: Why does a passing pair ratio not prove keyboard accessibility?

**Answer direction:** A defensible solution demonstrates this observable result: The worksheet reports actual observations and does not treat contrast arithmetic as an accessibility certification. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Select theme → resolveTheme copies base plus allowed overrides → adapter sets CSS custom properties on preview → card and button inherit the same variables → contrast computes the two displayed text/background ratios.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
