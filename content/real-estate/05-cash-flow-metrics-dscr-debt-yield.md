---
id: re-05
track: real-estate
kind: module
number: 5
title: Cash-on-Cash, DSCR, Debt Yield, and Breakeven
subtitle: The metrics that decide how big a loan you get and how long you survive a bad year
minutes: 60
objectives:
  - Calculate cash-on-cash return, debt service coverage, debt yield, and breakeven occupancy for a deal
  - Work out which of a lender's three constraints sets your maximum loan
  - Show how a change in interest rate changes the loan you can get
  - Explain why a loan that "works" in the base case can still be too big
---

# Lesson

In the middle of a cheap-money stretch I watched a young buyer I'll call Priya close on a 40-unit building with a loan at 80% of the price. The lender had a spreadsheet that said the numbers worked: the debt service coverage ratio was 1.15, comfortably over the bank's minimum of 1.10 for that product. Priya's own spreadsheet said she'd collect $1,100 a month in cash flow. She felt like she had won.

Eighteen months later, insurance repriced, two units were out for a flood repair, and the floating rate she'd chosen reset 220 basis points higher. The $1,100 a month became a $4,000-a-month shortfall. She covered it with a home equity line for a year, then sold at a loss. Her spreadsheet had been correct. What it had measured, though, was whether the deal worked in the base case. It had never measured how much the deal could be hurt before it broke.

This module is about the handful of ratios that answer that second question, and about the habit that distinguishes owners who last: sizing the debt to what you can survive, not to what the bank will allow.

## Cash-on-cash: the owner's yield

**Cash-on-cash return** is the year's pre-tax cash flow divided by the equity you actually put in. It's the number most people mean when they say "what's my return?" In Module 1, Maple Court produced $23,055 of cash flow on $592,000 of equity: 3.9%.

It's a useful measure because it's simple and it's about *your* money. Its limits are equally important. Cash-on-cash ignores principal paydown (which is real wealth), appreciation, and the tax shelter. It also ignores time: a deal with a 3% cash-on-cash and 6% annual rent growth may beat a deal with a 7% cash-on-cash that never grows. Use it as a quick yardstick on year-one income, never as the full return. The full picture comes from IRR and the equity multiple (Module 7).

## DSCR: how many times the property can pay its own loan

**Debt service coverage ratio** is NOI divided by annual debt service (principal and interest). A DSCR of 1.25 means the property earns $1.25 for every $1.00 of loan payments, a 25% cushion.

Lenders set minimums by property type and loan type. In the mid-2020s, for stabilized apartments with agency or bank loans, 1.20 to 1.30 was common; for riskier property types it ran 1.30 to 1.50. A 1.0 DSCR means the property just covers the loan with nothing left. Below 1.0, you write a check every month.

Two cautions. First, lenders compute DSCR on *their* NOI, which usually includes a management fee and reserves, often a higher vacancy than yours, and sometimes a larger tax bill. Your NOI and their NOI differ, and theirs sets the loan. Second, an interest-only period flatters DSCR. A loan that's IO for three years and then amortizes will see debt service jump 15% to 20% when amortization starts. Test the coverage on the amortizing payment too.

## Debt yield: the rate-proof ratio

**Debt yield** is NOI divided by the loan amount. It ignores interest rate and amortization entirely, so it can't be gamed. A lender with a 9% minimum debt yield wants to recover 9 cents of NOI for every dollar lent, whatever the rate is. It's the lender's answer to "if I have to foreclose and sell this thing, what's my yield on what I put out?"

Debt yield matters most when rates are low, because low rates can make DSCR and LTV look comfortable on loans that are quite large relative to income. Lenders added it as a guardrail after seeing what happened to loans sized on thin rates when the rates rose.

## Three constraints, one loan

Every lender sizes a loan against several limits at once and gives you the smallest:

1. **Loan-to-value (LTV):** the loan can't exceed a percentage of value (or price), say 70% to 75% for apartments.
2. **DSCR:** the payment can't exceed NOI divided by the minimum coverage.
3. **Debt yield:** the loan can't exceed NOI divided by the minimum debt yield.

Whichever of the three gives the smallest loan is the **binding constraint**. And which one binds tells you a story. When rates are low, LTV tends to bind. When rates are high, DSCR binds, because the payment on each dollar of loan has gone up, so the same NOI supports a smaller loan. That is why a rate move of 1.5 points can wipe out half a million dollars of proceeds on a $5 million building (you'll see this in Example 1) with no change in the property at all.

The practical consequence: **at closing, the loan you can get is determined by rates and NOI, not by what you wanted to borrow.** If the rate rises between contract and closing, you either bring more equity or renegotiate. Know this before you go hard on a deposit.

## Breakeven occupancy: how far can you fall?

The most useful ratio for sleeping at night is **breakeven occupancy**: the occupancy at which income exactly covers operating expenses plus debt service.

*Breakeven occupancy = (operating expenses + debt service) / gross potential income*

If your breakeven is 85% and the building is at 94%, you have a nine-point cushion. If breakeven is 92% and you're at 94%, a couple of bad months put you in the red. Lenders look at breakeven; so should you. I like to see breakeven under 80% for a stabilized building, and I'm uncomfortable above 88%. Run it again with rents 5% lower, because rent cuts hit breakeven harder than people expect.

## Reading the ratios together

No single ratio tells you whether a loan is safe. Together they tell a story, and the habit I'd have you build is to read them as a set:

| Ratio | What it answers | Healthy stabilized apartment (mid-2020s) |
|---|---|---|
| Cash-on-cash | What does my money earn this year? | 4% to 8%, depending on market |
| DSCR | How many times does income cover the payment? | 1.25 or higher at underwriting; 1.35+ if you want sleep |
| Debt yield | If the lender took it back, what would they earn? | 8% to 10% or higher |
| Breakeven occupancy | How far can occupancy fall before I write a check? | Under 80% to 85% |
| LTV | How much cushion is in the collateral value? | 60% to 70% |

If DSCR looks fine but breakeven is high, the building has heavy expenses relative to income, and you're exposed to a drop in occupancy. If LTV is fine but debt yield is low, the loan is large relative to income, and a cap rate move would hurt. If cash-on-cash is high but DSCR is thin, you've probably borrowed too much to produce that yield. Each ratio catches a different kind of trouble.

## The loan constant, in plain English

You'll hear lenders talk about the "constant." It's simply the annual payment (principal and interest) per dollar borrowed. At 6.75% over 30 years, the annual constant is 7.78%: a $1,000,000 loan costs $77,832 a year. At 5.5% it's 6.81%; at 8.5% it's 9.23%. Dividing your allowable debt service by the constant gives the loan size. If you remember one conversion, make it this one, because it lets you do loan sizing on the back of an envelope while a broker is still talking: NOI of $338,000 at a 1.25 coverage allows $270,400 of payment; divide by 0.0778 and you have a $3.47 million loan.

Interest-only changes the constant to simply the interest rate, so a 6.75% IO loan has a 6.75% constant, which is why borrowers love IO and why lenders limit it. The payment looks 13% smaller (6.75% versus 7.78%), but you haven't paid down a dollar of principal, and when amortization begins, the payment leaps.

## Your NOI is not their NOI

Lenders compute coverage on their own version of NOI. They typically add a management fee of 3% to 5% even if you self-manage, deduct replacement reserves of $250 to $350 per unit, use the greater of actual or market vacancy (often 5% to 7%), and apply the tax bill they expect after a sale. Suppose your underwriting shows $338,000 and the lender's version comes to $312,000. At a 1.25 minimum DSCR and a 7.78% constant, that difference alone cuts the maximum loan from $3.47 million to $3.21 million, a $267,000 reduction in proceeds. So when you build your model, run it twice: once with your NOI, once with a lender-style NOI. The second one is the one that determines your equity check.

## The mistakes I see most

**Borrowing to the lender's maximum.** The lender's maximum is where *they* are safe, not where you are. It guarantees them about 1.20 times coverage; you want to be sure of being able to feed the property in a bad year.

**Sizing on the pro forma NOI.** If you borrow against rents you haven't achieved yet, the first lease-up delay becomes a cash call. Size the loan on what the building earns, and fund the plan with equity.

**Ignoring the step-up.** Interest-only periods end. Floating rates reset. Teaser rates burn off. Ask for the payment in year four, not just year one.

**Treating DSCR as the only ratio.** DSCR can look fine when rates are low and loan size is large. Check the debt yield and breakeven alongside it.

**Forgetting closing costs when computing cash-on-cash.** Your equity isn't just the down payment. It's the down payment plus loan fees, legal, title, inspections, and initial reserves. Use the full amount.

## Judgment calls the textbooks skip

**How much leverage?** The answer depends on how much you can afford to be wrong. My own rule: size so that the deal still covers debt service if income falls 15% and expenses rise 10%. If that stress breaks the deal, the loan is too big for the building, whatever the lender allows. For most stabilized apartments that works out to a DSCR of about 1.35 to 1.45 at underwriting.

**Fixed or floating?** Floating rates are cheaper at the start and riskier in the middle. If your plan takes more than two years to stabilize, floating debt with a rate cap and an extension option can make sense. If the building is already stable, fixed-rate debt buys you something floating can't: the ability to forecast your cash flow for the next decade.

**What if the lender offers more?** A 75% LTV offer when you only need 65% is not a gift. It's a larger bet. Take it only if you have a specific reason that the extra proceeds will earn more than they cost in risk, such as a renovation with a documented return.

## If you remember nothing else

- The loan you can get is the smallest of three: LTV, DSCR, debt yield. When rates rise, DSCR becomes the one that bites.
- Breakeven occupancy tells you how far you can fall before you write checks. Aim for under 80% on stabilized deals.
- Size the loan to survive a bad year, not to fit the lender's formula.

## This week

Take any deal you've looked at. Compute the maximum loan at a 1.25 DSCR using today's actual quoted rate for a 30-year amortization (call a mortgage broker and ask). Then recompute at a rate 150 basis points higher. Write down how much extra equity the higher rate would require.

# Example 1: Which Constraint Binds?

## The setup

Cedar Ridge is a 40-unit apartment building priced at $5,200,000 with NOI of $338,000 (a 6.5% cap rate). A lender will provide a 30-year amortizing loan at 6.75% with these limits: maximum 70% LTV, minimum 1.25 DSCR, and minimum 9% debt yield. Closing costs run 2% of price.

## The numbers

The annual loan constant at 6.75% over 30 years is 7.783% (annual payments per dollar of loan).

| Constraint | Calculation | Maximum loan |
|---|---|---:|
| 70% LTV | $5,200,000 × 0.70 | $3,640,000 |
| 1.25 DSCR | ($338,000 / 1.25) / 0.07783 = $270,400 / 0.07783 | $3,474,160 |
| 9% debt yield | $338,000 / 0.09 | $3,755,556 |
| **Binding (smallest)** | **DSCR** | **$3,474,160 (66.8% of price)** |

| Resulting deal | Amount |
|---|---:|
| Loan | $3,474,160 |
| Annual debt service | $270,400 |
| DSCR | 1.25 |
| Debt yield | 9.7% |
| Closing costs (2%) | $104,000 |
| Equity required | $5,200,000 - $3,474,160 + $104,000 = $1,829,840 |
| Year-one cash flow | $338,000 - $270,400 = $67,600 |
| Cash-on-cash | $67,600 / $1,829,840 = 3.7% |

## What the veteran sees

LTV would have allowed $166,000 more than DSCR did, so at a 6.75% rate the constraint isn't how much the property is worth; it's how much income it can spare for the payment. You only learn this by working all three.

Cash-on-cash of 3.7% looks thin. It is. At a 6.5% cap rate and a 7.78% debt constant, borrowing is expensive relative to what the building yields (the negative-leverage lesson from Module 1). The deal needs growth, forced appreciation, or a lower purchase price to be worth doing.

## Change one thing

Now rates rise before you close. What does the same NOI support?

| Interest rate | Annual constant | Maximum loan at 1.25 DSCR | As % of price |
|---|---:|---:|---:|
| 5.50% | 6.813% | $3,968,610 | 76.3% |
| 6.25% | 7.389% | $3,659,689 | 70.4% |
| 6.75% | 7.783% | $3,474,160 | 66.8% |
| 7.50% | 8.391% | $3,222,664 | 62.0% |
| 8.50% | 9.227% | $2,930,542 | 56.4% |

From 6.75% to 8.50%, the loan drops by $543,618. You'd have to find that much more equity, from your own pocket or from partners, with no change to the property at all. It's also why buyers should lock rates as early as possible and why contracts need financing contingencies.

# Example 2: Breakeven and the Cushion

## The setup

Same building, same loan: $3,474,160 with annual debt service of $270,400. Rents average $1,450 a month. The building collects 94% of potential rent, with $18,000 of other income.

## The numbers

| Line | Amount |
|---|---:|
| Gross potential rent (40 × $1,450 × 12) | $696,000 |
| Vacancy and credit loss (6%) | -$41,760 |
| Other income | $18,000 |
| Effective gross income | $672,240 |
| Operating expenses | -$334,240 |
| **NOI** | **$338,000** |
| Debt service | -$270,400 |
| **Cash flow** | **$67,600** |

Breakeven occupancy = ($334,240 + $270,400) / ($696,000 + $18,000) = $604,640 / $714,000 = **84.7%**

Current economic occupancy: 94%. Cushion: 9.3 points.

| Scenario | Breakeven occupancy |
|---|---:|
| Base case | 84.7% |
| Rents 5% lower (GPR $661,200) | 89.0% |
| Using a 75% LTV loan of $3,900,000 (debt service $303,544) | 89.3% |

## What the veteran sees

The base case has a 9-point cushion, which is decent but not luxurious. In dollar terms, that is about $66,000 a year of lost rent before you hit zero cash flow. Cut rents by 5%, a plausible outcome if new supply opens down the street, and the cushion shrinks to 5 points. Take the larger loan and it's 4.7 points.

The cash-on-cash story points the same way. With the larger $3.9 million loan, first-year cash flow is $338,000 - $303,544 = $34,456. Equity is $5,200,000 - $3,900,000 + $104,000 = $1,404,000, so cash-on-cash is $34,456 / $1,404,000 = 2.5%, down from 3.7%. The extra leverage lowers your year-one return and raises your risk. That's the signature of negative leverage, and it is why "the lender will give me more" is not a reason to borrow more.

You should also notice what the cushion is made of. Operating expenses are largely fixed: whether the building is 94% or 85% occupied, the taxes, insurance, and payroll still arrive. So the breakeven is a cliff more than a slope. Once occupancy slips below it, every point of vacancy costs you about $7,100 a year of cash (1% of $714,000), straight out of your pocket.

## Change one thing

Add the stress from earlier: income falls 15% and expenses rise 10%. EGI drops from $672,240 to $571,404; expenses rise to $367,664; NOI falls to $203,740. Against $270,400 of debt service, the DSCR is 0.75, and cash flow is -$66,660 a year. The loan the lender approved at 1.25 is too big for a bad year. A loan sized at about $2.6 million, with a DSCR of about 1.65, would have survived. That's the difference between the lender's maximum and yours.

# Example 3: The Floating-Rate Squeeze

## The setup

Instead of the permanent loan, you take a 3-year bridge loan of $3,900,000, interest-only, floating at the index plus a spread, currently 8.0%. NOI is $338,000. The plan is to refinance into a fixed-rate loan at the end of the term, assuming a 7.0% rate and a 1.25 DSCR.

## The numbers

| All-in rate | Annual interest | DSCR | Annual cash flow |
|---|---:|---:|---:|
| 8.0% | $312,000 | 1.08 | +$26,000 |
| 9.5% | $370,500 | 0.91 | -$32,500 |
| 11.0% | $429,000 | 0.79 | -$91,000 |

The debt yield on the bridge loan is $338,000 / $3,900,000 = 8.7%. That means DSCR hits 1.0 at an all-in rate of 8.7%, and 1.25 only if the rate is 6.93% or lower.

Refinance at maturity at a 7.0% fixed rate (constant 7.978%) at a 1.25 DSCR:

| Scenario | NOI | Maximum new loan | Paydown required from you |
|---|---:|---:|---:|
| NOI as planned | $338,000 | $3,386,931 | $513,069 |
| NOI 8% lower | $310,960 | $3,115,976 | $784,024 |

## What the veteran sees

At 8.0% the deal barely breathes; at 9.5% you're funding a shortfall every month. The loan was sized on the borrower's optimism about rates, with no cushion.

Then the refinance: even at the planned NOI, a new lender won't lend you $3.9 million at 1.25 coverage. You need to write a check for about $513,000 to take out the bridge. If the property underperformed by 8%, the check is $784,000. This is the pattern behind most of the distressed bridge-loan situations in rate-rise periods: the borrower couldn't refinance at the old loan size, had no extra equity, and had no choice but to sell or hand back the keys.

## Change one thing

You buy a rate cap that limits the index to 5.0% for the first two years, which at a 3.0% spread caps your all-in rate at 8.0%, and you fund an interest reserve of six months of payments, $156,000. You've now converted an open-ended risk into a priced one. The cap cost and reserve reduce your first-year return, but your worst-case cash flow is the +$26,000 from the first row. That is what you're buying when you pay for a cap: the ability to know your worst year in advance.

# Quiz

## Q1 | multiple_choice

A $5.2 million building has NOI of $338,000. A lender allows a maximum of 70% LTV, a minimum 1.25 DSCR, and a minimum 9% debt yield. At a 6.75% rate on a 30-year amortization, the LTV test allows $3,640,000, the DSCR test allows $3,474,160, and the debt-yield test allows $3,755,556. Which governs your loan?

- [ ] The 70% LTV limit, because price is the safest measure of collateral :: The lender gives you the smallest of the three results, and LTV's result is larger than the DSCR result. Safety of collateral doesn't override the income test.
- [x] The DSCR test, because it yields the smallest loan :: Whichever constraint produces the smallest number binds. Here it's DSCR at $3,474,160, or 66.8% of price.
- [ ] The debt-yield test, because it is the newest and most conservative :: Debt yield allows the largest loan of the three at these numbers. Being newer doesn't make it the binding limit.
- [ ] The average of all three tests :: Lenders don't average the limits; they apply all of them at once and take the lowest.

> You can borrow the smallest of the three limits. Work all three, because which one binds tells you what's actually constraining the deal.

## Q2 | scenario

**Scenario.** You're under contract on a building with NOI of $338,000 and have lined up a loan at 6.75% that supports about $3.47 million at a 1.25 DSCR. Three weeks before closing, the quoted rate moves to 8.50%. Nothing about the building has changed. Your purchase contract has no financing contingency.

What is the most accurate description of your position?

- [ ] You are fine, since the property's NOI is unchanged and so is its value. :: Value may be unchanged but the loan isn't. At 8.50%, the DSCR test supports only about $2.93 million.
- [x] Your loan shrinks by about $544,000, so you need that much more equity. :: At an 8.50% rate the annual constant is about 9.23%, so $270,400 of allowable debt service supports roughly $2.93 million. Without a contingency, the gap is yours to fill.
- [ ] The lender must honor the original rate if you applied at 6.75%. :: Unless you locked the rate with a deposit, quotes are not commitments. Lenders reprice to market until a lock is in place.
- [ ] The extra equity should be about $100,000 because rates rose 1.75 points. :: The effect compounds on a loan this size. A rise from 6.75% to 8.50% cuts the supportable loan by over half a million dollars, not $100,000.

> The loan is a function of rates and NOI. Lock early, and never go hard on a deposit without a financing contingency or a plan for the gap.

## Q3 | multiple_choice

Cedar Ridge produces $67,600 of cash flow on $1,829,840 of equity, a 3.7% cash-on-cash return. Which statement about that number is correct?

- [ ] It captures the property's full return, including appreciation and tax benefits. :: Cash-on-cash covers only one year's pre-tax cash flow. Appreciation, tax effects, and loan paydown are outside it.
- [ ] It shows the deal is poor and should be abandoned. :: A low year-one cash-on-cash is common on a deal whose return comes from growth. It's a prompt for further analysis, not a verdict.
- [x] It excludes principal paydown, appreciation, and tax effects, so it understates the total return. :: The measure is only year-one cash flow relative to equity. Principal paydown alone added roughly 1.5 to 2 points of return in earlier examples.
- [ ] It should be calculated on the down payment only, not on closing costs. :: Closing costs are real cash you put in. Leaving them out inflates the return.

> Cash-on-cash is a yardstick for one year's income, not a measure of the whole deal.

## Q4 | scenario

**Scenario.** A broker offers a 40-unit building with a floating-rate bridge loan at 8.0% on $3.9 million, interest-only, with NOI of $338,000. Rates have been volatile. The broker says the loan "has plenty of cushion" because it's currently producing positive cash flow, and the plan is to refinance into permanent debt in three years.

What is the strongest response?

- [ ] Accept the loan, since positive cash flow means the structure works. :: Positive cash flow today at 8.0% leaves only about 8% of cushion. A 150-basis-point rise turns it negative.
- [ ] Decline any floating-rate loan on principle. :: Floating-rate debt can make sense for properties in transition, if the risks are bought down. The problem here is unprotected exposure.
- [x] Require a rate cap and an interest reserve, and model the refinance gap. :: A cap limits the worst year, a reserve funds it, and modelling the take-out shows how much equity you may need at maturity (about $513,000 in the base case).
- [ ] Ask the lender to move the rate lower by pointing out the positive cash flow. :: Cash flow has no bearing on a floating rate, which tracks an index. The structure needs protection, not a negotiation over the spread.

> Floating debt is a bet on rates. Cap the bet, fund the downside, and know what the refinance will cost before you sign.

## Q5 | multiple_choice

A lender offers 75% LTV, which yields a DSCR of 1.11 and raises breakeven occupancy from 84.7% to 89.3%. You were planning on about 67%. What is the best way to evaluate the extra proceeds?

- [ ] Take them, since more leverage always raises your return :: Not if the debt constant exceeds the cap rate. In this case, the extra borrowing lowers year-one cash-on-cash from 3.7% to 2.5%.
- [ ] Take them, because the lender wouldn't offer more than the property can handle :: Lenders size for their own protection, with their recovery in mind. A deal that is safe for the lender can still be hard on the owner.
- [x] Decline unless a specific, documented use earns more than the added risk costs :: The extra leverage raises breakeven by nearly five points and lowers current return. Unless the money funds something with a clear payoff, it only adds risk.
- [ ] Take them and then pay the loan down as quickly as possible :: Prepayment penalties and the fact that you borrowed to deploy equity elsewhere make this an expensive way to avoid a decision you can make up front.

> The question isn't how much the lender will give you. It's how much you can afford to owe in your worst year.
