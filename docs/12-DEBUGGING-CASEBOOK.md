# M021: deeper debugging casebook

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

The incidents below are hypothetical teaching scenarios based on realistic mistakes in this codebase. They are not claims that the shipped reference is broken. Reproduce a proposed defect only on a disposable practice branch. Keep an observed failure separate from a likely explanation; the point of an experiment is to make those two agree or disagree.

## Incident 1: Partial theme retains the previous night accent

**Fictional report:** A learner says, “Partial theme retains the previous night accent.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Apply only override keys without clearing or resolving defaults.

**Starting experiment:** Switch night then partial and inspect the button background.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Two components consume the same complete token map for surface, text, accent, accent text and spacing. Supplied paper, night and partial themes merge over base tokens, so omitted overrides fall back deterministically. Card and button padding both use the shared spacing token. The preview reports contrast for two opaque six-digit hex color pairs; each supplied pair exceeds 4.5:1. This limited check does not certify the entire interface, focus treatment or every accessibility requirement. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `resolveTheme` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js resolveTheme and public/app.js complete-map application.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Partial theme retains the previous night accent” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 2: Contrast passes after rounding a near miss

**Fictional report:** A learner says, “Contrast passes after rounding a near miss.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Round the ratio before comparing it with the target.

**Starting experiment:** Use a fixture just below a threshold and compare raw versus displayed values.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Two components consume the same complete token map for surface, text, accent, accent text and spacing. Supplied paper, night and partial themes merge over base tokens, so omitted overrides fall back deterministically. Card and button padding both use the shared spacing token. The preview reports contrast for two opaque six-digit hex color pairs; each supplied pair exceeds 4.5:1. This limited check does not certify the entire interface, focus treatment or every accessibility requirement. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `resolveTheme` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js contrast returns unrounded data; formatting belongs in app.js.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Contrast passes after rounding a near miss” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 3: Long action text widens the page

**Fictional report:** A learner says, “Long action text widens the page.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Force white-space: nowrap on the token button.

**Starting experiment:** Use the supplied long label at 320px.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Two components consume the same complete token map for surface, text, accent, accent text and spacing. Supplied paper, night and partial themes merge over base tokens, so omitted overrides fall back deterministically. Card and button padding both use the shared spacing token. The preview reports contrast for two opaque six-digit hex color pairs; each supplied pair exceeds 4.5:1. This limited check does not certify the entire interface, focus treatment or every accessibility requirement. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `resolveTheme` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/style.css: allow wrapping inside available width.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Long action text widens the page” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## When a proposed repair fails

Stop adding edits. Compare the new symptom with the old one and inspect the diff. Decide whether the experiment rejected your hypothesis or whether the repair failed to change the intended boundary. Revert only your own experimental change if needed, preserve other work, and try the next discriminating input.

## A useful help request

```text
Project: Theme Token Sandbox; suspected owner: public/core.js / resolveTheme.
Expected / observed: [exact difference].
Smallest reproduction: [inputs, actions and environment].
Hypothesis A predicts: [observation].
Hypothesis B predicts: [different observation].
Experiment already run and real output: [fill in].
Suggest one next experiment, not a rewrite. Separate facts from hypotheses.
```
