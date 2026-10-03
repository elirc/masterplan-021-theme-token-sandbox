# M021: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain semantic token through this project

A name describing a styling role rather than one literal color.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain fallback through this project

The base value used when an override is absent.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain computed style through this project

The value the browser actually applies after the cascade.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain contrast pair through this project

A specific foreground/background relationship.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: Partial theme omits accent

Base #245e45 is used

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Black against white

21:1

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Long button label at 320px

Label wraps without document overflow

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Which switching sequence would reveal stale custom properties?

If an adapter set only changed overrides, switching from night to partial could leave night values behind. The reference resolves every required token for every selection, then sets the full map. This makes the fallback depend on the base definition rather than on whichever theme happened to run previously.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** When would two uses of accent need separate semantic tokens?

The card border and button background use accent, while text pairs have explicit foreground and background roles. A token name expresses a role rather than a particular green value. The example has only two components so you can inspect every consumer before adding a theme editor or design system.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Why does a passing pair ratio not prove keyboard accessibility?

The helper converts opaque hex channels to relative luminance and compares two pairs. Known black/white and equal-color cases anchor its arithmetic. The chosen 4.5 target follows the normal-text minimum explained by W3C, but other visual and interaction concerns still require separate checks.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** Which values should be shared and which should remain local to one component?

A theme should resolve to a complete set of roles before it is applied. Applying only overrides can leave values from the previous theme behind. Shared spacing and color roles let two components change coherently, while contrast arithmetic checks only the particular color pairs supplied. Inspect computed styles to connect data to actual rendering.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a spacing-only preset

**First hint:** The desired improvement is “Show that themes can change rhythm independently of color.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Override only space; resolve the full map; inspect both card and button padding.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Color tokens remain at base values while both components use the new spacing.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a readable spacing value. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a token-usage table

**First hint:** The desired improvement is “Explain where each role is consumed.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: List token names and CSS consumers; distinguish shared roles from local rules; verify references against source.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The table identifies both spacing consumers accurately.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how to show multiple consumers. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a default-theme button label

**First hint:** The desired improvement is “Make the current selection clear outside the select.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive a textual label from the selected theme; update through render; avoid a second stored theme name.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Label and computed theme agree after every switch.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose human-readable labels. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a missing-base-token experiment

**First hint:** The desired improvement is “Distinguish absent overrides from an incomplete base.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Remove one base role only in a scratch branch; inspect the resulting CSS fallback behavior; propose schema validation.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The experiment does not describe an incomplete base as a valid partial theme.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the required-token validation policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a contrast target explanation

**First hint:** The desired improvement is “Explain the chosen threshold without rounding claims.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Display the raw comparison policy; separate rounded ratio text; link the official source already cited.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A rounded label never changes whether the raw ratio meets the target.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how much precision to show. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a token-copy action

**First hint:** The desired improvement is “Export the resolved map for inspection.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Serialize complete resolved values; keep override definitions unchanged; expose plain text without modifying active styles.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Exporting partial includes base fallback values.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose JSON or CSS declaration format. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a disabled component example

**First hint:** The desired improvement is “Study state styling as a separate concern.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Add a truly disabled native button; explain its role; inspect how token choices affect readability without making it interactive.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The disabled state is semantic and not only a color change.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether a separate disabled token is justified. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Compare local and shared padding

**First hint:** The desired improvement is “Practice resisting unnecessary abstraction.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Identify one component-specific spacing need; keep a local override or introduce a new role with a reason; inspect both components.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A local adjustment does not accidentally alter every consumer of space.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the ownership boundary. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a theme-switch regression matrix

**First hint:** The desired improvement is “Cover transition order explicitly.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: List every pair of supplied themes; inspect resolved values after switching; include night-to-partial as a discriminating case.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: No transition retains a token from an earlier theme.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose which computed styles to record. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
