# Building Theme Token Sandbox, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Two components consume the same complete token map for surface, text, accent, accent text and spacing. Supplied paper, night and partial themes merge over base tokens, so omitted overrides fall back deterministically. Card and button padding both use the shared spacing token. The preview reports contrast for two opaque six-digit hex color pairs; each supplied pair exceeds 4.5:1. This limited check does not certify the entire interface, focus treatment or every accessibility requirement.

The smallest useful result answers this user need: A page maintainer needs to change spacing and colors without searching through every selector. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: List token responsibilities

Read baseTokens and find each corresponding var reference in public/style.css. Write the component that consumes each token. Missing overrides are not missing base tokens; the reference always starts with a complete base. An arbitrary user-supplied theme editor is intentionally absent.

**Pause and produce evidence:** Partial theme omits accent. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Switch through three themes

Try paper, night, then partial. Inspect the partial accent and verify it returns to the base green instead of retaining night's light accent. This sequence matters because loading partial first would not expose stale values left by a previous theme.

**Pause and produce evidence:** Partial theme omits accent. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Verify arithmetic separately

Read contrast and test the two known endpoints: identical colors have ratio one and black/white have ratio twenty-one. Then inspect actual supplied token pairs. Keep the exact numeric comparison in tests and round only for display so formatting does not convert a near miss into a pass.

**Pause and produce evidence:** Black against white. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Inspect the rendered components

At 320 pixels, the deliberately long button label must wrap. Check computed background colors as well as the token object printed on screen; a correct data map does not prove CSS consumers used it. Keyboard focus and readable body text remain separate manual concerns.

**Pause and produce evidence:** Long button label at 320px. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose a small token vocabulary and justify it.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
