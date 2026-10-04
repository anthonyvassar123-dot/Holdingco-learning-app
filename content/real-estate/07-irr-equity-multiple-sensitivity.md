---
id: re-07
track: real-estate
kind: module
number: 7
title: IRR, Equity Multiple, and Sensitivity
subtitle: Time value of money, the hold period, and why the exit assumption decides everything
minutes: 60
objectives:
  - Explain what IRR and equity multiple each measure and what each hides
  - Build a five-year levered cash flow and compute its IRR, multiple, and NPV at a given discount rate
  - Read a sensitivity grid of exit cap rate and hold period
  - Recognize how early distributions and short holds can inflate IRR while shrinking profit
---

# Lesson

A sponsor I'll call Dennis once showed me a pitch deck for a 50-unit syndication with a headline in bold: "Projected 22% IRR." The deck was beautiful. I asked one question: "What does the exit cap rate assume, and what happens at the entry cap rate plus a point?" Dennis smiled and said the model assumed the building would sell at a 5.25% cap rate, a full point *lower* than the 6.25% he was paying. When I asked him to rerun it at the entry cap plus 0.75, the 22% became 6%. Not a typo. Six percent, for a deal that had been presented as a 22% machine.

He wasn't lying, exactly. The model was internally consistent. It was just a tool that answers "what if everything goes right?" so confidently that the investors never asked what if it doesn't. The skill of this module is knowing what the return metrics actually say, what they hide, and how to turn a single-point forecast into a range you can trust.

## Why dollars at different times aren't equal

A dollar today is worth more than a dollar in five years. You can invest the first one and have more by then, and inflation erodes the second. So when a deal returns money over years, you can't just add up the cash and compare it to what you put in. You need a way to weigh early dollars more than late dollars.

**Net present value (NPV)** does that by discounting each future cash flow back to today at a chosen rate (your required return), then subtracting what you invested. Positive NPV means the deal beats your required return; negative means it doesn't. In the example below, a deal's flows have an NPV of +$276,988 at an 8% discount rate and −$52,075 at 12%. At 11.3% it's zero.

That break-even discount rate has a name: the **internal rate of return (IRR)**. It's the single annual rate of return that makes the NPV of the deal's cash flows zero. If your required return is below the IRR, the deal clears the bar.

## What IRR tells you and what it hides

IRR is the standard because it captures timing: a deal that returns cash sooner has a higher IRR than one that returns the same cash later. That is a real advantage. But it has well-known blind spots that I'd have you remember:

**It ignores size.** A 25% IRR on $200,000 held for one year earns you $50,000. A 14% IRR on $200,000 held for eight years earns $370,517. Which is the better deal depends on what else you can do with the money.

**It assumes you can reinvest at the IRR.** A high IRR on a short hold is only as good as your next deal. If your alternative is a 5% Treasury, a 3-year 14.5% IRR doesn't compound into a 14.5% return over ten years.

**It can be manufactured by timing.** Return capital early (through a cash-out refinance) and IRR rises even if total profit falls. Be wary of any deal that touts IRR without showing the multiple and the dollars.

**It's very sensitive to the final cash flow.** In most real estate deals, 75% to 90% of the total return arrives in the last year, with the sale. So IRR is essentially a statement about the exit assumption.

## The equity multiple: what you get back per dollar

**Equity multiple** is total cash received divided by equity invested. A 1.66x multiple means that for every $1.00 you put in, you got $1.66 back (including your original dollar). It ignores time, so it's the natural companion to IRR: IRR tells you how fast, the multiple tells you how much. A deal with a 20% IRR and a 1.2x multiple was fast and small. A deal with a 9% IRR and a 2.4x multiple was slow and large.

I think of it this way: **IRR is the speedometer; the multiple is the odometer.** A good deal needs both numbers to satisfy you.

## Levered versus unlevered, and cash-on-cash versus both

You will see returns at several levels. The **unlevered IRR** treats the deal as if you paid all cash, which tells you what the property earns independent of financing. The **levered IRR** shows what you earn on your equity after debt. The difference is what leverage contributed, positive or negative. The **cash-on-cash** return is just year one's income yield, and it's a short-run measure. You use each for what it's for: unlevered to judge the property, levered to judge the deal, cash-on-cash to judge near-term income.

For Cedar Ridge (our running 40-unit example), the levered five-year IRR is 11.3% and the unlevered IRR is 8.5%. Leverage contributed 2.8 points. That's the dividend of borrowing at 6.75% to own something earning 8.5%.

## Sensitivity: the honest way to present a forecast

A single IRR is a point estimate of a distribution you can't see. The responsible way to present a deal is as a grid: change the two or three assumptions that matter most and show the result. For real estate, those are almost always **exit cap rate**, **NOI growth**, and **hold period**. In Example 2 you'll see that Cedar Ridge returns anywhere from −3.4% to 11.8% depending on the exit cap rate and hold alone, same building, same loan.

Ask any sponsor three questions: What exit cap rate are you assuming relative to the entry? What happens to the IRR if rent growth is half of what you've assumed? What's the IRR if the sale slips two years? If they can't produce those numbers in a few minutes, they haven't stressed the deal.

## Discount rates and hurdle rates

Your **hurdle rate** is the minimum return you require to take on a deal's risk, and it's what you use as the discount rate in NPV. A rough guide, in the mid-2020s: stabilized, high-quality apartments in good markets might need an unlevered 7% to 8% and a levered 10% to 12%; value-add deals need 13% to 18% levered, because the plan carries execution risk; ground-up development needs more. These are not laws; they are the neighborhood. Your own hurdle depends on your alternatives. If you can earn 5% risk-free, a 7% levered return on a concentrated, illiquid asset is not enough.

## Reading a pitch deck: what to check first

If you ever invest alongside a sponsor instead of buying directly, the IRR in the deck is almost never the IRR you'll receive. Look for the difference between **gross** and **net** returns. Sponsors commonly charge an acquisition fee (1% of a $5,200,000 purchase is $52,000), an annual asset management fee (1% of $1,829,840 of equity is $18,298 a year), a financing fee, and a share of profit above a preferred return, called the promote. Those are legitimate and can be fair, but together they can take two to four points off the gross IRR an investor sees. So when a deck says 17%, ask whether that's the property's return or the one that lands in your account.

Then check the four things that move the number most, in this order: the exit cap rate against the entry cap rate; the rent growth against the ten-year market average; the hold period and whether the plan depends on a sale in a specific year; and the leverage, including whether the debt is floating. If you can't find these on the page, you're being sold, not informed.

## What a "good" return actually means

Returns need context, or they're only numbers. A levered 11% IRR on a stabilized apartment building you can sell in a month feels different from 11% on a renovation project where the plan can slip a year. Compare each deal to what you could earn with less risk: if long Treasuries yield 4.5%, an 8% unlevered property return is paying you 3.5 points to accept illiquidity, operating risk, and the possibility of being wrong. That spread is the real number to think about. When it narrows, deals get riskier even if the IRR on paper doesn't change.

## Three questions I ask about any return

When someone quotes me a number, I run it through three questions before I let it influence a decision. *Return on what?* A return on $200,000 and a return on $2,000,000 are different animals, so I want the dollars. *Over how long?* A 15% IRR over two years and over twelve are different experiences, and I want to know when my money is tied up and when it comes back. *Compared to what?* A number only means something against the alternative: the Treasury bill, the index fund, the next deal I'd do with the same cash. If I can answer all three, I understand the return. If I can't, I'm looking at a headline.

## The mistakes I see most

**Believing a single-point IRR.** Always ask for the grid.

**Exit cap lower than entry.** Dennis's mistake. It adds several points of IRR with no operational work at all.

**Ignoring the multiple.** A 20% IRR that comes from returning half your money in year two through a refinance and a 1.3x total is not the same as a 15% IRR with a 2.0x.

**Comparing deals with different hold periods by IRR alone.** Longer holds usually have lower IRRs but may produce much more profit. Compare on both IRR and profit per dollar over a common horizon.

**Forgetting costs.** Sale costs of 2% to 4%, loan fees, and the cost of capital improvements all reduce returns. Leave them out and you've overstated.

**Treating the sponsor's "target" as a forecast.** "Target IRR" means what they hope for. Ask for the assumptions behind it and for the track record on realized returns, not projected ones.

## Judgment calls the textbooks skip

**What to do with the hold period.** The textbook picks five years. The market doesn't care. Sell when the remaining plan is worth less than the sale proceeds put to work elsewhere, which you'll test in Module 13. Don't let a model's convention make decisions for you.

**Why sensible people accept a lower IRR.** A 9% IRR on a stable asset with 50% less variance can be better than a 14% IRR with wide outcomes. The right way to compare is to ask what the bad case looks like on each, not just the base case.

**The role of cash flow.** Two deals with the same IRR and different timing are different deals. The one that pays you annually gives you control; the one that pays everything at sale gives you a single date to be right on. I value the first more than the numbers show.

## If you remember nothing else

- IRR is speed, equity multiple is size. Look at both, plus the dollars of profit.
- In most deals, 75% to 90% of the return is the sale. IRR is mostly an exit-cap-rate statement.
- Ask for the sensitivity grid. If a deal only works at one set of assumptions, it isn't a deal; it's a forecast.

## This week

Build a five-year cash flow for any deal you've looked at: equity out in year 0, annual cash flow, net sale proceeds in year 5. Use a spreadsheet's IRR function. Then change the exit cap rate by +0.5 and +1.0 points and note what happens to the IRR.

# Example 1: Building a Five-Year IRR for Cedar Ridge

## The setup

Cedar Ridge is the 40-unit building from Module 5: price $5,200,000, a loan of $3,474,160 at 6.75% (30-year amortization, annual debt service $270,400), and $1,829,840 of equity including closing costs. NOI starts at $338,000 and grows 3% a year. You sell at the end of year 5 at a 6.5% cap rate on year-six NOI, with 3% sale costs.

## The numbers

| Year | NOI | Debt service | Cash flow |
|---|---:|---:|---:|
| 1 | $338,000 | $270,400 | $67,600 |
| 2 | $348,140 | $270,400 | $77,740 |
| 3 | $358,584 | $270,400 | $88,184 |
| 4 | $369,342 | $270,400 | $98,942 |
| 5 | $380,422 | $270,400 | $110,022 |

Sale at end of year 5: year-six NOI is $391,835, and $391,835 / 0.065 = $6,028,225.

| Sale math | Amount |
|---|---:|
| Sale price | $6,028,225 |
| Sale costs (3%) | -$180,847 |
| Loan balance after 60 payments | -$3,261,392 |
| **Net sale proceeds** | **$2,585,986** |

Cash flows to equity: year 0: -$1,829,840; years 1-4: as above; year 5: $110,022 + $2,585,986 = $2,696,008.

| Result | Value |
|---|---:|
| Total cash received | $3,028,474 |
| Profit | $1,198,634 |
| Equity multiple | 1.66x |
| Levered IRR | 11.3% |
| Unlevered IRR | 8.5% |
| NPV at 8% | +$276,988 |
| NPV at 10% | +$103,704 |
| NPV at 12% | -$52,075 |

## What the veteran sees

Positive NPV at 10% and negative at 12% tells you the IRR sits between, at 11.3%. If your hurdle for a stabilized deal is 10%, this clears it with room. If your hurdle is 12%, it doesn't.

Look where the money comes from: $2,585,986 of the $3,028,474 total, or 85%, arrives at the sale. The five years of operations produce $442,488 of cash flow, which is about 24% of your original equity. The deal is, in essence, a bet on what the building sells for in year five, with a steady income meanwhile.

## Change one thing

Drop NOI growth to 2% a year. Year-six NOI becomes $373,179 (not $391,835); the sale price is $5,741,220 and the IRR falls from 11.3% to 8.8%, with a 1.48x multiple. One point less of annual growth took 2.5 points of IRR. At 0% growth, IRR is 3.2% and the multiple 1.16x: the deal barely beats inflation.

# Example 2: The Sensitivity Grid

## The setup

You want to see how Cedar Ridge's returns respond to the two assumptions that matter most: the exit cap rate (6.5% is the entry) and the hold period. NOI growth is 3%, sale costs 3%, same loan.

## The numbers

Levered IRR (equity multiple in parentheses):

| Hold period | Exit at 6.5% | Exit at 7.0% | Exit at 7.5% |
|---|---:|---:|---:|
| 3 years | 9.6% (1.31x) | 3.1% (1.09x) | -3.4% (0.90x) |
| 5 years | 11.3% (1.66x) | 7.9% (1.43x) | 4.6% (1.23x) |
| 7 years | 11.8% (2.05x) | 9.7% (1.81x) | 7.7% (1.60x) |

And by NOI growth (5-year hold, 6.5% exit): 0% growth is 3.2% (1.16x); 2% is 8.8% (1.48x); 3% is 11.3% (1.66x); 4% is 13.7% (1.83x).

## What the veteran sees

Read down a column and across a row. A shorter hold is worse when the exit cap rate rises, because there's less time for income to compensate: a 3-year hold with a 7.5% exit actually loses money (0.90x). A longer hold is more forgiving: at a 7.5% exit cap, the 7-year hold still returns 7.7%.

The first row also says something about buyers who plan a quick flip: they're making a bet that the exit cap rate will be no worse than entry. If that bet fails, the loss comes fast.

Notice how little the answer changes between the 5-year and 7-year hold at a 6.5% exit (11.3% versus 11.8%), but how much the multiple grows (1.66x versus 2.05x). Holding longer didn't add IRR, but it added about $714,000 of profit on the same equity. That's what an owner who needs wealth, not a rate, should look at.

## Change one thing

Which assumption has the largest effect: a half-point of exit cap rate, or a point of annual growth? On the five-year hold, moving the exit cap from 6.5% to 7.0% cuts IRR by 3.4 points; moving growth from 3% to 2% cuts it by 2.5 points. So half a point of exit cap is worth more than a full point of growth. This is why professional underwriters spend most of their argument time on the exit cap rate.

# Example 3: Fast, Big, and Early

## The setup

Three comparisons that trip up even experienced investors.

**A. Speed versus size.** You have $500,000. Deal X doubles it (2.0x) over 10 years. Deal Y returns 1.5x over 3 years.

**B. The flip.** You invest $200,000. Option 1 returns 25% in one year. Option 2 earns 14% a year for eight years.

**C. The early refinance.** At the end of year 3 of Cedar Ridge, you do a cash-out refinance that returns 60% of your equity ($1,097,904) with new interest-only debt at 8%. The extra interest is $87,832 a year, and the new debt is repaid at the sale.

## The numbers

| A: Deal | Multiple | Years | IRR | Profit |
|---|---:|---:|---:|---:|
| X | 2.0x | 10 | 7.2% | $500,000 |
| Y | 1.5x | 3 | 14.5% | $250,000 |

If you reinvest Y's $750,000 for the remaining 7 years: at 6% it grows to $1,127,723, beating X's $1,000,000. At 3%, it grows to $922,405 and loses. The break-even reinvestment rate is 4.2%.

| B: Option | Return | Years | Profit on $200,000 |
|---|---:|---:|---:|
| 1 | 25% | 1 | $50,000 |
| 2 | 14% a year | 8 | $370,517 |

| C: Cedar Ridge with early refi | Base | With refi in year 3 |
|---|---:|---:|
| IRR | 11.3% | 12.0% |
| Equity multiple | 1.66x | 1.56x |
| Profit | $1,198,634 | $1,022,969 |
| Year-4 DSCR on the new debt | 1.37 | 1.03 |

## What the veteran sees

A: Y has double the IRR and half the profit. Whether Y is better depends entirely on what you can do with $750,000 after year 3. If you can reliably earn more than 4.2%, Y wins; if you can't find anything, X wins. Most people overestimate their reinvestment opportunities.

B: A 25% return is a fine thing, but the second option makes more than seven times as much money. The flip's rate is high because it's short. If you can repeat the flip every year with no gaps, fine; most people can't.

C: The refinance raised IRR 0.7 points while *reducing* profit by $175,665 and cutting the coverage ratio to 1.03, a building that barely pays its debt. It also put 60% of your equity back in your pocket, which leaves $731,936 still at risk. IRR rose because money came back sooner, not because the deal got better. Whether that trade is worth it depends on whether you can redeploy the $1.1 million at a good return and whether you can tolerate a 1.03 coverage.

## Change one thing

In case C, make the new debt cost 6.5% instead of 8%. The extra interest falls to $71,364, year-4 DSCR improves to 1.08, and IRR rises to 12.3%. The refinance is only as attractive as the cost of the money you take out. It looked good because it returned capital, but it's the interest on that capital that determines whether the plan creates value or merely moves risk forward in time.

# Quiz

## Q1 | multiple_choice

Two deals have the same equity requirement. Deal A has a 20% IRR and a 1.2x equity multiple. Deal B has a 10% IRR and a 2.0x multiple. What is the most accurate comparison?

- [ ] Deal A is better because IRR is the standard measure of return, and 20% beats 10% on any basis :: IRR captures speed, not size. A 1.2x multiple means A earns far less total profit on the same equity.
- [ ] Deal B is better because a higher multiple always means more wealth, whatever the time involved :: The multiple ignores time. If B takes many years, the money may be tied up at a modest annual rate, and which is better depends on your alternatives.
- [x] They answer different questions, and reinvestment decides. :: A is fast and small, B is slow and large. The comparison turns on your reinvestment opportunities and how much risk you accept.
- [ ] They are equivalent, since both measure the return on equity :: They measure different things. IRR is a time-weighted rate; the multiple is total cash divided by cash in.

> IRR is the speedometer and the equity multiple is the odometer. A deal needs both to make sense.

## Q2 | scenario

**Scenario.** A sponsor shows you a model with a projected 17% IRR on a five-year hold. You notice the entry cap rate is 5.75% and the model's exit cap rate is 5.25%. Rent growth is assumed at 5% a year, versus a 10-year market average of 3%.

What is the best next step?

- [ ] Accept the model, since sponsors usually know the market better than the investors they raise from :: Knowledge of the market is no reason to skip the stress test. Both assumptions in this model favor the sponsor's headline.
- [ ] Ask the sponsor to raise the projected IRR further to reflect how strong the market looks today :: This moves in the wrong direction. The task is to test the projection, not to build more optimism into it.
- [x] Ask for the IRR at an exit cap at or above entry and growth near 3%. :: Those two assumptions probably account for most of the headline return. Seeing the result with market-average growth and a flat or higher exit cap shows what the deal really offers.
- [ ] Compare only the equity multiple, since IRR is an unreliable measure for property deals in general :: The multiple is also driven by the same exit and growth assumptions. Both metrics need to be stress-tested.

> A projection is only as good as its weakest assumption. Move the two or three that matter and see what's left.

## Q3 | multiple_choice

In the Cedar Ridge model, about 85% of the total cash returned to equity arrives in the year of the sale. What does this imply for how you should judge the deal?

- [ ] The yearly cash flow is irrelevant to the investment decision :: Cash flow still matters for coverage, reserves, and the ability to hold. But it isn't the primary source of return in this deal.
- [x] The exit price assumption is the dominant driver, so test it hardest. :: When most of the return comes from the sale, small changes in the exit cap rate or exit NOI swing the IRR by several points.
- [ ] The deal should be sold earlier to capture the return sooner :: Selling earlier doesn't remove the dependence on exit pricing and, as the grid shows, short holds can be riskier.
- [ ] IRR cannot be calculated for deals that depend on a sale :: Nearly all property IRRs depend on a sale. The calculation is the same; it's the interpretation that needs care.

> Find where the return arrives. Then test the assumption that governs it.

## Q4 | scenario

**Scenario.** You are comparing two options for $200,000: a one-year project that returns 25% ($50,000 profit) and a stabilized property that returns 14% a year for eight years (about $370,500 profit). You have no other use for the money after the first year ends, beyond a savings account paying 4%.

Which statement best captures the choice?

- [x] The 14% property builds more wealth unless you can repeat the 25% deal. :: The one-year deal's high rate only matters if you can redeploy at a similar rate. With a 4% fallback, the long hold compounds far more total profit.
- [ ] The 25% project wins because a higher rate of return is always the preferable choice :: The rate must be weighed against the time and the reinvestment opportunities. Here the lower rate runs far longer and produces over seven times the profit.
- [ ] They are equal, since 25% for one year is the same as 14% compounded for eight years :: They are not equal. 14% over eight years compounds to about 185% total, while 25% for one year is 25%.
- [ ] Neither one, because any returns above 10% always carry unacceptable levels of risk :: There is no such rule. Risk has to be assessed property by property, and many sound investments exceed 10%.

> A high rate on a short hold is a speed, not a destination. The question is always what you do next.

## Q5 | multiple_choice

A sponsor proposes a cash-out refinance in year 3 that returns 60% of equity. The model's IRR rises from 11.3% to 12.0%, but total profit falls and the coverage ratio drops to 1.03. What is the right way to evaluate this?

- [ ] Do it, since a higher IRR means that the deal itself has improved in quality and value :: IRR rose because capital came back earlier, not because the property earns more. Profit actually fell by about $175,000.
- [ ] Refuse any refinance of an operating property, since a refinance always adds more risk :: A refinance can be worthwhile if the proceeds are redeployed well and the coverage is safe. The question is the price and the cushion.
- [x] Check what the returned capital will earn, and whether 1.03 is tolerable. :: The refinance only creates value if the $1.1 million works harder elsewhere, and a 1.03 DSCR leaves almost no margin for error on the building.
- [ ] Compare only the year-three cash flow before and after the refinance happens :: One year of cash flow misses the added interest in later years and the repayment at sale. The whole path matters.

> IRR can improve while the deal gets worse. Always look at the dollars and the risk behind it.
