# M021: architecture decision laboratory

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Architecture at this scale means assigning responsibilities and avoiding unnecessary synchronization. You do not need a distributed system diagram to make a consequential design choice. A small function boundary, a stable identifier or one CSS owner can determine whether a later change stays understandable.

## Decision review 1: Resolve a complete map before applying it

**Reference rationale:** If an adapter set only changed overrides, switching from night to partial could leave night values behind. The reference resolves every required token for every selection, then sets the full map. This makes the fallback depend on the base definition rather than on whichever theme happened to run previously.

**Question to resolve:** Which switching sequence would reveal stale custom properties?

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `public/core.js` and `public/app.js`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## Decision review 2: Share semantic tokens across components

**Reference rationale:** The card border and button background use accent, while text pairs have explicit foreground and background roles. A token name expresses a role rather than a particular green value. The example has only two components so you can inspect every consumer before adding a theme editor or design system.

**Question to resolve:** When would two uses of accent need separate semantic tokens?

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `public/core.js` and `public/app.js`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## Decision review 3: Keep contrast evidence scoped

**Reference rationale:** The helper converts opaque hex channels to relative luminance and compares two pairs. Known black/white and equal-color cases anchor its arithmetic. The chosen 4.5 target follows the normal-text minimum explained by W3C, but other visual and interaction concerns still require separate checks.

**Question to resolve:** Why does a passing pair ratio not prove keyboard accessibility?

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `public/core.js` and `public/app.js`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## A compact decision record you can copy

```text
Context and user need:
Current invariant:
Proposal A:
Proposal B:
Discriminating example:
Observed or predicted outcomes, clearly labeled:
Decision and reason:
Cost accepted:
Revisit when:
Verification still needed:
```

## Avoid accidental scope expansion

A new abstraction should answer a problem you can name in the current code or selected story. If the main benefit is that it looks more professional, ask what specific change becomes easier and what new concepts a junior now has to learn. Keep the reference small enough to trace.

## Transfer the review habit

Which values should be shared and which should remain local to one component?

Use that question to compare this project with its paired curriculum repository. Cite the actual source or guide you inspected; do not claim the other repository uses a pattern merely because its name sounds related. Your comparison may conclude that the shared learning concept appears in a different implementation.
