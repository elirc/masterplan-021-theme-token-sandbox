# Build journal: Theme Token Sandbox

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A page maintainer needs to change spacing and colors without searching through every selector.

The main temptation was to make the project larger than its learning target. The useful boundary is **css tokens and consistency**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Two components consume the same complete token map for surface, text, accent, accent text and spacing. Supplied paper, night and partial themes merge over base tokens, so omitted overrides fall back deterministically. Card and button padding both use the shared spacing token. The preview reports contrast for two opaque six-digit hex color pairs; each supplied pair exceeds 4.5:1. This limited check does not certify the entire interface, focus treatment or every accessibility requirement.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Resolve a complete map before applying it

If an adapter set only changed overrides, switching from night to partial could leave night values behind. The reference resolves every required token for every selection, then sets the full map. This makes the fallback depend on the base definition rather than on whichever theme happened to run previously.

**What a learner should challenge:** Which switching sequence would reveal stale custom properties?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Share semantic tokens across components

The card border and button background use accent, while text pairs have explicit foreground and background roles. A token name expresses a role rather than a particular green value. The example has only two components so you can inspect every consumer before adding a theme editor or design system.

**What a learner should challenge:** When would two uses of accent need separate semantic tokens?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Keep contrast evidence scoped

The helper converts opaque hex channels to relative luminance and compares two pairs. Known black/white and equal-color cases anchor its arithmetic. The chosen 4.5 target follows the normal-text minimum explained by W3C, but other visual and interaction concerns still require separate checks.

**What a learner should challenge:** Why does a passing pair ratio not prove keyboard accessibility?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `resolveTheme`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
