# Debugging laboratory

[Concepts](02-CONCEPTS-AND-TRACES.md) · [Practice stories](05-PRACTICE-STORIES.md)

These are deliberately proposed defects for a scratch branch. They are not claims that the shipped reference still contains these bugs. Keep main working and introduce only one change at a time.

## Case 1: Partial theme retains the previous night accent

**Introduce or discuss this mistake:** Apply only override keys without clearing or resolving defaults.

**Discriminating experiment:** Switch night then partial and inspect the button background.

### Worked diagnosis

First state the expected contract: Two components consume the same complete token map for surface, text, accent, accent text and spacing. Supplied paper, night and partial themes merge over base tokens, so omitted overrides fall back deterministically. Card and button padding both use the shared spacing token. The preview reports contrast for two opaque six-digit hex color pairs; each supplied pair exceeds 4.5:1. This limited check does not certify the entire interface, focus treatment or every accessibility requirement. Then create the smallest example from the experiment above. Compare the observed result with the contract before changing more code. The likely cause is at this boundary: **public/core.js resolveTheme and public/app.js complete-map application.** Repair that boundary, rerun the example, and check one neighboring valid case so the repair does not merely special-case the chosen input.

The completed reasoning record is: symptom → contract violated → input that distinguishes hypotheses → owning line or rule → minimal repair → regression evidence. This is a worked diagnostic route; fill in your actual outputs when you run it. No invented console transcript is supplied.

## Case 2: Contrast passes after rounding a near miss

**Introduce or discuss this mistake:** Round the ratio before comparing it with the target.

**Discriminating experiment:** Use a fixture just below a threshold and compare raw versus displayed values.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/core.js contrast returns unrounded data; formatting belongs in app.js.

## Case 3: Long action text widens the page

**Introduce or discuss this mistake:** Force white-space: nowrap on the token button.

**Discriminating experiment:** Use the supplied long label at 320px.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/style.css: allow wrapping inside available width.

## If the first repair does not work

Do not pile on another unrelated edit. Read the diff and check whether the observed failure changed. If the hypothesis was wrong, write that down and restore only your own experimental change before testing the next hypothesis. A rejected hypothesis is useful progress when its evidence is clear.

When asking an assistant for help, provide the exact input, expected and observed result, the current diff and the file you believe owns the rule. Ask for one counterexample or diagnostic question first. Keep proposed causes separate from demonstrated causes.
