# Six junior practice stories

[Debugging lab](04-DEBUGGING-LAB.md) · [Hints — use after an attempt](06-HINTS-AND-ANSWERS.md)

These are new exercises beyond the finished reference. No story is marked complete for you. Start a branch such as practice/story-01 and write acceptance examples before editing. Each plan leaves the actual code, wording and one design choice to you.

## Story 01: Add a third component

**User need:** As a learner or user of Theme Token Sandbox, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Create a small status badge consuming existing tokens before inventing new ones.

**Implementation plan:**

1. Trace `resolveTheme` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: It changes with every theme and remains understandable without color alone.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** It changes with every theme and remains understandable without color alone.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 02: Show fallback origins

**User need:** As a learner or user of Theme Token Sandbox, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Return or derive a per-token source label indicating base or override.

**Implementation plan:**

1. Trace `resolveTheme` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Partial theme explicitly identifies accent as inherited from base.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Partial theme explicitly identifies accent as inherited from base.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 03: Add a new authored theme

**User need:** As a learner or user of Theme Token Sandbox, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Choose a small complete or partial override set and verify both displayed color pairs.

**Implementation plan:**

1. Trace `resolveTheme` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The new theme passes exact pair checks and long-content/narrow-view inspection.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The new theme passes exact pair checks and long-content/narrow-view inspection.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 04: Add a theme reset button

**User need:** As a learner or user of Theme Token Sandbox, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Return to paper through the same resolve-and-render route.

**Implementation plan:**

1. Trace `resolveTheme` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Reset after night or partial produces identical computed token values.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Reset after night or partial produces identical computed token values.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 05: Explain unsupported colors

**User need:** As a learner or user of Theme Token Sandbox, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Add examples documenting why named colors, alpha colors and gradients are outside the contrast helper.

**Implementation plan:**

1. Trace `resolveTheme` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Invalid formats produce explicit errors instead of misleading numeric ratios.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Invalid formats produce explicit errors instead of misleading numeric ratios.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 06: Create a manual focus worksheet

**User need:** As a learner or user of Theme Token Sandbox, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Record Tab order, visible focus and the same long label under each theme.

**Implementation plan:**

1. Trace `resolveTheme` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The worksheet reports actual observations and does not treat contrast arithmetic as an accessibility certification.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The worksheet reports actual observations and does not treat contrast arithmetic as an accessibility certification.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.
