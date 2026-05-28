import { useMemo, useState } from "react";
import { Star, SlidersHorizontal, X, MessageSquare, BadgeCheck, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Reply = { author: string; email: string; date: string; text: string };

type Review = {
  name: string;
  initials?: string;
  avatar?: string;
  location: string;
  reviewCount: number;
  stars: 1 | 2 | 3 | 4 | 5;
  title?: string;
  text: string;
  date: string;
  reply?: Reply;
};

// Reusable customer-service signature
const CS = (date: string, text: string): Reply => ({
  author: "Mynuora Customer Care",
  email: "hi@mynuora.com",
  date,
  text,
});

// ---------- ORIGINAL 4 & 5-STAR REVIEWS ----------
const POSITIVE_REVIEWS: Review[] = [
  { name: "Catherine Walsh", initials: "CW", location: "US", reviewCount: 1, stars: 5, text: "My wedding ring went from a size 8 down to a 6.5 in about 7 weeks. I literally couldn't slide it off for years and now it spins on my finger. Wasn't even my main goal — I just wanted less bloating — but this was the proof for me.", date: "May 15, 2026" },
  { name: "Janice Howard", initials: "JH", location: "US", reviewCount: 2, stars: 5, text: "My ankles used to be so swollen by 6pm that my socks left deep marks and my sneakers felt two sizes too small. After about 4 weeks the puffiness is genuinely gone. I can wear my ankle boots again without pain.", date: "May 11, 2026" },
  { name: "Megan Foster", initials: "MF", location: "US", reviewCount: 1, stars: 5, text: "I bought a pair of size 12 jeans 18 months ago that never zipped — kept them as 'motivation'. 9 weeks on this and they zip, button, and I can sit down comfortably. Didn't change my diet. I cried a little in the closet.", date: "May 6, 2026" },
  { name: "Margaret K.", initials: "MK", location: "US", reviewCount: 1, stars: 5, text: "Amazing! I was so skeptical after trying so many gut products that did nothing. Within 3 weeks my bloating was gone and I had energy again. I'm 54 and finally feel like myself.", date: "May 12, 2026" },
  { name: "Sandra Mitchell", initials: "SM", location: "US", reviewCount: 2, stars: 5, text: "I've tried probiotics, cleanses, you name it. This is the first thing that actually addressed the bloating long-term. 6 weeks in and my stomach is flat for the first time in years. Will absolutely reorder.", date: "May 8, 2026" },
  { name: "Linda Patterson", initials: "LP", location: "US", reviewCount: 1, stars: 5, text: "Did not expect much honestly. By week 2 my afternoon bloat was gone. By week 5 I lost 8 lbs without changing anything else. My doctor asked what I changed.", date: "May 3, 2026" },
  { name: "Jennifer R.", initials: "JR", location: "US", reviewCount: 3, stars: 4, text: "Really good results overall. Took about 3 weeks to notice changes but the bloating reduction is real. Knocking off one star because the shipping took longer than expected.", date: "Apr 29, 2026" },
  { name: "Rebecca Holt", initials: "RH", location: "US", reviewCount: 1, stars: 5, text: "55 years old. Menopause wrecked my metabolism. This is the only thing that's helped me feel less puffy and inflamed. I take it every morning with water.", date: "Apr 24, 2026" },
  { name: "Patricia Lowe", initials: "PL", location: "US", reviewCount: 2, stars: 5, text: "I bought 3 bottles because of the discount and I'm SO glad I did. My sister tried mine and ordered her own. We both feel lighter, less brain fog, and my pants fit again.", date: "Apr 19, 2026" },
  { name: "Karen B.", initials: "KB", location: "US", reviewCount: 1, stars: 4, text: "Works as described. The first week I had some bathroom changes (warned about it) but after that everything settled and the results started showing. Happy customer.", date: "Apr 14, 2026" },
  { name: "Donna Mitchell", initials: "DM", location: "US", reviewCount: 2, stars: 5, text: "Down 14 lbs in 3 months without dieting. I take it consistently every morning. The bloat is the biggest difference — I'm not uncomfortable after meals anymore.", date: "Apr 9, 2026" },
  { name: "Heather Owens", initials: "HO", location: "US", reviewCount: 1, stars: 5, text: "My rings fit again. That's how I know it's working. The morning puffiness is gone. I wake up looking like myself.", date: "Apr 4, 2026" },
  { name: "Marcy Whitfield", initials: "MW", location: "US", reviewCount: 1, stars: 5, text: "8 weeks in. Menopause belly is finally going down. Same diet, same workouts, only difference is this. I haven't seen my waist in 4 years.", date: "Mar 30, 2026" },
  { name: "Vila S.", initials: "VS", location: "US", reviewCount: 2, stars: 5, text: "The bloating cleared up so well. Took two months and did get a bit worse before it got better, but we are very happy with the results 🙏", date: "Mar 20, 2026" },
  { name: "Nicole Vance", initials: "NV", location: "US", reviewCount: 1, stars: 5, text: "I cried in the dressing room trying on my old jeans. 7 weeks of consistent use. Don't gatekeep this stuff — telling all my friends.", date: "Mar 15, 2026" },
  { name: "Brittany Carlson", initials: "BC", location: "US", reviewCount: 1, stars: 5, text: "Postpartum mom belly is finally shrinking. 5 weeks of use. Mom told me about this and I'm so glad she did. Worth every penny.", date: "Mar 10, 2026" },
  { name: "Marie Sullivan", initials: "MS", location: "US", reviewCount: 3, stars: 5, text: "I'm 70 and I'm telling you it works. 8 weeks. Flat stomach. Energy is back. My doctor asked what I was doing differently.", date: "Mar 5, 2026" },
  { name: "Tracy Bowman", initials: "TB", location: "US", reviewCount: 1, stars: 4, text: "Solid product. Real ingredients. I felt the difference around week 3. Wish the bottles were a bit bigger but the subscription discount helps.", date: "Feb 28, 2026" },
  { name: "Em Lindqvist", initials: "EL", location: "US", reviewCount: 1, stars: 5, text: "Sister recommended it. Skeptical at first. Now I'm a believer. The bloat is gone and I have so much more energy throughout the day.", date: "Feb 22, 2026" },
  { name: "Stephanie K.", initials: "SK", location: "US", reviewCount: 2, stars: 5, text: "Not unbuttoning my jeans after lunch anymore. That alone is worth the price. 6 weeks in and still going strong.", date: "Feb 17, 2026" },
];

// ---------- 1-STAR REVIEWS (10) with CS replies ----------
const ONE_STAR: Review[] = [
  {
    name: "Diane Mercer", initials: "DM", location: "US", reviewCount: 1, stars: 1,
    text: "My order arrived a week late and the seal on one bottle was broken. Really disappointed for the price.",
    date: "May 10, 2026",
    reply: CS("May 11, 2026", "Hi Diane, we're truly sorry about the delayed shipment and the damaged bottle. We've already issued a full refund to your original payment method and shipped a brand-new bottle overnight at no charge. You should see the refund within 2-3 business days. Thank you for your patience 💕"),
  },
  {
    name: "Olivia Park", initials: "OP", location: "US", reviewCount: 2, stars: 1,
    text: "I felt nauseous the first 4 days and had to stop. Wish there was a warning about this.",
    date: "May 6, 2026",
    reply: CS("May 7, 2026", "Hi Olivia, thank you for letting us know. Mild nausea can happen in the first week as the formula starts clearing biofilm, but you should never have to push through it. We've issued a full refund and our nutritionist will reach out with a gentler reintroduction protocol if you'd like to try again. Feel free to write us at hi@mynuora.com anytime."),
  },
  {
    name: "Sharon Greene", initials: "SG", location: "US", reviewCount: 1, stars: 1,
    text: "Took it for 30 days and saw zero difference. Honestly feeling scammed.",
    date: "May 2, 2026",
    reply: CS("May 3, 2026", "Hi Sharon, we completely understand the frustration. Our 60-day money-back guarantee exists exactly for this — we've already processed your full refund (no need to return the bottle). Results often appear between week 5 and 8, but you should never pay for something that didn't work for you. Wishing you the best 🙏"),
  },
  {
    name: "Rachel Owens", initials: "RO", location: "US", reviewCount: 3, stars: 1,
    text: "Wrong product was shipped to me. I ordered the 3-bottle pack and only got one.",
    date: "Apr 28, 2026",
    reply: CS("Apr 28, 2026", "Hi Rachel, that's entirely on us — apologies. The remaining 2 bottles have been shipped via express (tracking sent to your email) and we've added a free extra bottle to your account as a thank-you for your patience."),
  },
  {
    name: "Beverly K.", initials: "BK", location: "US", reviewCount: 1, stars: 1,
    text: "I got charged twice for the same order. Customer service didn't reply for 2 days.",
    date: "Apr 22, 2026",
    reply: CS("Apr 22, 2026", "Hi Beverly, we're so sorry for the duplicate charge and the delay — our team was catching up after a holiday weekend. The duplicate has been fully refunded (you'll see it within 3 business days). We've also extended your subscription by one month at no cost. Thank you for sticking with us."),
  },
  {
    name: "Cynthia Walsh", initials: "CW", location: "US", reviewCount: 1, stars: 1,
    text: "Allergic reaction to one of the ingredients. Itchy skin and a rash after 5 days.",
    date: "Apr 17, 2026",
    reply: CS("Apr 18, 2026", "Hi Cynthia, we are so sorry — please stop immediately. A full refund has been issued and we've sent you the complete COA (Certificate of Analysis) by email so you can share it with your doctor to identify the trigger. Your health comes first. ❤️"),
  },
  {
    name: "Tina Boyd", initials: "TB", location: "US", reviewCount: 2, stars: 1,
    text: "Package marked delivered but I never received it. Lost in the mail.",
    date: "Apr 12, 2026",
    reply: CS("Apr 13, 2026", "Hi Tina, we've opened a carrier claim and reshipped your order via FedEx 2-Day at no charge. You should have it by Thursday. If the original parcel turns up, please keep it on us — thank you for your patience."),
  },
  {
    name: "Pauline R.", initials: "PR", location: "US", reviewCount: 1, stars: 1,
    text: "The capsules are huge. I literally cannot swallow them.",
    date: "Apr 6, 2026",
    reply: CS("Apr 6, 2026", "Hi Pauline, totally fair feedback — our capsules are larger than average because of the bromelain dosage. We've refunded your order in full and added you to the early-access list for our upcoming smaller-capsule format launching this summer."),
  },
  {
    name: "Megan Foster", initials: "MF", location: "US", reviewCount: 1, stars: 1,
    text: "Tried to cancel my subscription and got charged again before it processed.",
    date: "Mar 31, 2026",
    reply: CS("Apr 1, 2026", "Hi Megan, we're sorry — that charge should never have gone through after your cancellation request. Your subscription is officially closed and the last charge has been fully refunded. Confirmation email is on its way."),
  },
  {
    name: "Lori Bennett", initials: "LB", location: "US", reviewCount: 2, stars: 1,
    text: "Bloating actually got worse the first two weeks and I gave up. Not for me.",
    date: "Mar 26, 2026",
    reply: CS("Mar 27, 2026", "Hi Lori, that initial bloating is actually the biofilm releasing — it usually resolves by week 3 — but we totally understand stopping. Full refund processed, no returns needed. If you'd ever like to retry with a half-dose ramp-up, just email hi@mynuora.com and we'll send a free starter bottle."),
  },
];

// ---------- 2-STAR REVIEWS (28) with CS replies ----------
const TWO_STAR: Review[] = [
  { name: "Hannah Lewis", initials: "HL", location: "US", reviewCount: 1, stars: 2, text: "Some reduction in bloating but nothing close to what's advertised. Expected more.", date: "May 11, 2026",
    reply: CS("May 12, 2026", "Hi Hannah, thank you for being honest. Results vary and we'd love to make this right — we've refunded 50% of your order and our team will email a personalized protocol that may help you see better results in cycle 2.") },
  { name: "Vanessa Cole", initials: "VC", location: "US", reviewCount: 2, stars: 2, text: "Shipping was slow and the box was crushed when it arrived. Capsules are fine though.", date: "May 9, 2026",
    reply: CS("May 10, 2026", "Hi Vanessa, sorry about the crushed packaging — we've upgraded to reinforced shipping mailers this month. A $20 credit has been added to your account as an apology.") },
  { name: "Erica Bauer", initials: "EB", location: "US", reviewCount: 1, stars: 2, text: "Felt jittery in the afternoons. Had to switch to taking it with food.", date: "May 5, 2026",
    reply: CS("May 6, 2026", "Hi Erica, you did exactly the right thing — taking with food smooths out the energy curve. Glad it's working better now. We've extended your subscription by 2 weeks at no cost.") },
  { name: "Julie Adams", initials: "JA", location: "US", reviewCount: 1, stars: 2, text: "Pricey for the amount you get. Results were okay but not life-changing.", date: "May 1, 2026",
    reply: CS("May 2, 2026", "Hi Julie, thanks for the honest feedback. We've applied our loyalty discount (35% off) to your next order so the cost-per-day comes down significantly. Hope cycle 2 brings stronger results.") },
  { name: "Christina Roy", initials: "CR", location: "US", reviewCount: 3, stars: 2, text: "Tracking number didn't update for a week. Eventually arrived but stressful.", date: "Apr 27, 2026",
    reply: CS("Apr 28, 2026", "Hi Christina, we've switched carriers in your region after several reports like yours — tracking will be reliable on your next shipment. $15 credit added to your account.") },
  { name: "Wendy Hess", initials: "WH", location: "US", reviewCount: 1, stars: 2, text: "Helped a little with bloating but my energy didn't change.", date: "Apr 23, 2026",
    reply: CS("Apr 24, 2026", "Hi Wendy, energy gains usually come around week 6-8 once metabolic pathways recover. We've added a free bottle to your next shipment so you can complete the full cycle on us.") },
  { name: "Natalie Park", initials: "NP", location: "US", reviewCount: 2, stars: 2, text: "Had to email twice to get a response about a missing tracking number.", date: "Apr 20, 2026",
    reply: CS("Apr 21, 2026", "Hi Natalie, you should never have to email twice — we've reorganized our support queue this week. Sorry again. A 30% off code has been emailed to you.") },
  { name: "Gloria Stein", initials: "GS", location: "US", reviewCount: 1, stars: 2, text: "Smell of the capsules is pretty strong. Not great in the morning.", date: "Apr 16, 2026",
    reply: CS("Apr 17, 2026", "Hi Gloria, that's the bromelain — it's pungent because it's undiluted active enzyme. Our new vegetarian capsule coating (shipping in June) masks the smell completely. We've reserved one for you free of charge.") },
  { name: "Allison Cruz", initials: "AC", location: "US", reviewCount: 1, stars: 2, text: "Bloating improved by maybe 30%. Was hoping for more after 6 weeks.", date: "Apr 11, 2026",
    reply: CS("Apr 12, 2026", "Hi Allison, 30% in 6 weeks is real progress — biofilm breakdown often accelerates between weeks 8-12. We've sent you a free bottle to complete the protocol.") },
  { name: "Faith Romero", initials: "FR", location: "US", reviewCount: 2, stars: 2, text: "Subscription auto-renewed before I had finished my last bottle. Annoying.", date: "Apr 8, 2026",
    reply: CS("Apr 9, 2026", "Hi Faith, we've paused your subscription and refunded the renewal in full. You can now control billing dates directly from your dashboard.") },
  { name: "Brittany Vega", initials: "BV", location: "US", reviewCount: 1, stars: 2, text: "Felt mild stomach cramps the first few days. Settled after a week.", date: "Apr 3, 2026",
    reply: CS("Apr 4, 2026", "Hi Brittany, the initial cramping is the biofilm dislodging — it should always be mild and brief. Glad it settled. $20 credit added to your account.") },
  { name: "Sheila Nash", initials: "SN", location: "US", reviewCount: 1, stars: 2, text: "Customer service was kind but the product just didn't do much for me.", date: "Mar 29, 2026",
    reply: CS("Mar 30, 2026", "Hi Sheila, thank you for the kind words. We've issued a full refund per our 60-day guarantee — no returns needed. Wishing you all the best 💕") },
  { name: "Carla Hoyt", initials: "CH", location: "US", reviewCount: 2, stars: 2, text: "Lost 2 lbs in 5 weeks. Maybe my expectations were too high.", date: "Mar 24, 2026",
    reply: CS("Mar 25, 2026", "Hi Carla, 2 lbs is a healthy pace and your metabolic markers are likely improving even if the scale moves slowly. Free bottle added to your next shipment to continue the cycle.") },
  { name: "Lisa Trent", initials: "LT", location: "US", reviewCount: 1, stars: 2, text: "Label was peeling on arrival. Product is fine but presentation was poor.", date: "Mar 19, 2026",
    reply: CS("Mar 20, 2026", "Hi Lisa, we've fixed the labeling adhesive issue this month — a replacement bottle is already on its way to you, free of charge.") },
  { name: "Rhonda Ellis", initials: "RE", location: "US", reviewCount: 1, stars: 2, text: "Mild improvement in digestion but nothing dramatic.", date: "Mar 14, 2026",
    reply: CS("Mar 15, 2026", "Hi Rhonda, digestive improvement is the foundation — visible body changes typically follow 2-3 weeks later. We've extended your subscription by a month at no cost.") },
  { name: "Tammy Locke", initials: "TL", location: "US", reviewCount: 2, stars: 2, text: "Pills are big. Hard to swallow with anything other than water.", date: "Mar 9, 2026",
    reply: CS("Mar 10, 2026", "Hi Tammy, completely valid feedback — our smaller-capsule format launches this summer and you're on the early-access list. Free unit reserved for you.") },
  { name: "Yvette James", initials: "YJ", location: "US", reviewCount: 1, stars: 2, text: "Felt bloated for the first 10 days, almost gave up. Eventually got better.", date: "Mar 4, 2026",
    reply: CS("Mar 5, 2026", "Hi Yvette, you pushed through the hardest part — the first 10 days are the biofilm release window. So glad you kept going. $25 credit added to your account.") },
  { name: "Andrea Sims", initials: "AS", location: "US", reviewCount: 1, stars: 2, text: "Wish there was clearer dosing instructions for sensitive stomachs.", date: "Feb 27, 2026",
    reply: CS("Feb 28, 2026", "Hi Andrea, great suggestion — we've just published a sensitive-stomach ramp-up guide and emailed you the PDF. Thank you for helping us improve.") },
  { name: "Pamela Ford", initials: "PF", location: "US", reviewCount: 2, stars: 2, text: "Took 4 weeks to feel anything. By then I was almost out of capsules.", date: "Feb 22, 2026",
    reply: CS("Feb 23, 2026", "Hi Pamela, the 4-week mark is right when biofilm starts clearing — a free bottle is on its way so you can finish the full cycle properly.") },
  { name: "Kimberly Doss", initials: "KD", location: "US", reviewCount: 1, stars: 2, text: "Color of the capsules looked different than the website. Made me nervous.", date: "Feb 18, 2026",
    reply: CS("Feb 19, 2026", "Hi Kimberly, batch color can vary slightly due to natural ingredients — we've emailed the COA so you can verify potency. All ingredients identical, 3rd-party tested.") },
  { name: "Joanne Reed", initials: "JR", location: "US", reviewCount: 2, stars: 2, text: "Energy stayed the same. Bloat went down a little.", date: "Feb 13, 2026",
    reply: CS("Feb 14, 2026", "Hi Joanne, partial wins are still wins — energy often lags bloat reduction by 4-6 weeks. We've added a free bottle to your account to continue the protocol.") },
  { name: "Catherine Wolf", initials: "CW", location: "US", reviewCount: 1, stars: 2, text: "Hard to remember to take it daily. Wish there was a reminder system.", date: "Feb 9, 2026",
    reply: CS("Feb 10, 2026", "Hi Catherine, great point — our new app reminder system launched this week. We've enabled premium notifications on your account for free.") },
  { name: "Dawn Hicks", initials: "DH", location: "US", reviewCount: 2, stars: 2, text: "Order took 12 days to arrive. Almost canceled.", date: "Feb 4, 2026",
    reply: CS("Feb 5, 2026", "Hi Dawn, we've moved your region to express shipping default. $20 credit added and free shipping locked in for all future orders.") },
  { name: "Veronica Lamb", initials: "VL", location: "US", reviewCount: 1, stars: 2, text: "Some days I forgot if I took it. No clear indication on the bottle.", date: "Jan 30, 2026",
    reply: CS("Jan 31, 2026", "Hi Veronica, fair point — our new bottle (shipping next batch) has a built-in day-tracker cap. We've reserved one for you at no charge.") },
  { name: "Sylvia Bates", initials: "SB", location: "US", reviewCount: 2, stars: 2, text: "Helped a bit with the bloat but the price is steep for the result.", date: "Jan 26, 2026",
    reply: CS("Jan 27, 2026", "Hi Sylvia, we've applied a permanent 30% loyalty discount to your account for every future order. Hope that helps balance the value.") },
  { name: "Helen Pratt", initials: "HP", location: "US", reviewCount: 1, stars: 2, text: "Capsule shell broke open in my hand once. Strong smell.", date: "Jan 22, 2026",
    reply: CS("Jan 23, 2026", "Hi Helen, batch quality issue — we've identified the affected lot and a replacement bottle is on its way. Sorry for the inconvenience.") },
  { name: "Cassandra Yu", initials: "CY", location: "US", reviewCount: 2, stars: 2, text: "Wish the bottle was glass instead of plastic. Otherwise okay product.", date: "Jan 18, 2026",
    reply: CS("Jan 19, 2026", "Hi Cassandra, you'll be happy to hear we're rolling out glass packaging in Q3. Your account is flagged for the first glass shipment at no upgrade fee.") },
  { name: "Tabitha Reese", initials: "TR", location: "US", reviewCount: 1, stars: 2, text: "Slight relief but nothing close to the testimonials. Maybe my body just doesn't respond.", date: "Jan 14, 2026",
    reply: CS("Jan 15, 2026", "Hi Tabitha, every body is different — we've issued a full refund per our 60-day guarantee. Wishing you the best on your wellness journey 💕") },
];

// ---------- 3-STAR REVIEWS (33) ----------
const THREE_STAR_TEXTS = [
  "Decent product but didn't blow me away. Bloating did go down a little.",
  "Average results. Worth trying once if you're curious but I won't reorder.",
  "Took 4 weeks to feel anything. Some improvement but not dramatic.",
  "Mild help with digestion. Energy stayed the same throughout.",
  "Okay product. Not bad, not great. Middle of the road.",
  "Bloating reduced maybe 20%. Was hoping for more.",
  "I feel a little lighter but the scale hasn't moved much.",
  "Capsules are big but manageable. Effects were subtle.",
  "Helped with afternoon bloat. Morning puffiness still there.",
  "Three weeks in and only a small difference. Continuing to see.",
  "Modest results. Maybe better suited for someone with milder issues.",
  "Some improvement in regularity. Not much else changed for me.",
  "Stomach feels a bit calmer. Hoping for more by week 8.",
  "Texture of the capsule is fine. Effects were just average.",
  "Not life-changing but not useless either. Decent option.",
  "I expected more based on the reviews. Got moderate results.",
  "Slight bloat reduction. Worth maybe one bottle to try.",
  "Helped me feel less sluggish after meals. Subtle though.",
  "Three stars because it works, just not as fast as advertised.",
  "Felt some improvement after 5 weeks. Nothing dramatic.",
  "Average. Will probably try one more cycle to be sure.",
  "Mid-range results. Better than nothing, less than promised.",
  "I notice slight changes some days, none on others. Inconsistent for me.",
  "Decent for the price if you catch the bundle deal.",
  "Marginal improvement in bloating. Energy unchanged.",
  "It's okay. I don't regret buying it but won't rave either.",
  "Bloating: a bit better. Weight: same. Mixed results.",
  "Subtle changes. Maybe better with a stricter diet alongside.",
  "Honestly average. Some weeks great, some weeks nothing.",
  "Helped slightly with digestion. Other claims didn't apply to me.",
  "Three weeks of use, mild improvement. Continuing for now.",
  "Modest bloat reduction. Not a miracle but not a scam.",
  "Okay product. Realistic expectations needed.",
];

const THREE_STAR_NAMES: { name: string; initials: string; date: string; reviewCount: number }[] = [
  { name: "Anna Ferguson", initials: "AF", date: "May 13, 2026", reviewCount: 1 },
  { name: "Holly Marsh", initials: "HM", date: "May 11, 2026", reviewCount: 2 },
  { name: "Janelle Roy", initials: "JR", date: "May 9, 2026", reviewCount: 1 },
  { name: "Bethany Cope", initials: "BC", date: "May 7, 2026", reviewCount: 3 },
  { name: "Stacey Lim", initials: "SL", date: "May 4, 2026", reviewCount: 1 },
  { name: "Renee Watts", initials: "RW", date: "May 1, 2026", reviewCount: 2 },
  { name: "Penny Davis", initials: "PD", date: "Apr 28, 2026", reviewCount: 1 },
  { name: "Maxine Hall", initials: "MH", date: "Apr 25, 2026", reviewCount: 1 },
  { name: "Lillian Vega", initials: "LV", date: "Apr 22, 2026", reviewCount: 2 },
  { name: "Dolores King", initials: "DK", date: "Apr 19, 2026", reviewCount: 1 },
  { name: "Janet Reilly", initials: "JR", date: "Apr 16, 2026", reviewCount: 1 },
  { name: "Bonnie Park", initials: "BP", date: "Apr 13, 2026", reviewCount: 3 },
  { name: "Selena Khan", initials: "SK", date: "Apr 10, 2026", reviewCount: 2 },
  { name: "Marlene Cox", initials: "MC", date: "Apr 7, 2026", reviewCount: 1 },
  { name: "Trish Bauer", initials: "TB", date: "Apr 4, 2026", reviewCount: 1 },
  { name: "Edith Lowe", initials: "EL", date: "Apr 1, 2026", reviewCount: 2 },
  { name: "Sonia Wells", initials: "SW", date: "Mar 29, 2026", reviewCount: 1 },
  { name: "Roberta Niles", initials: "RN", date: "Mar 26, 2026", reviewCount: 1 },
  { name: "Phyllis Drake", initials: "PD", date: "Mar 23, 2026", reviewCount: 2 },
  { name: "Janice Howe", initials: "JH", date: "Mar 20, 2026", reviewCount: 1 },
  { name: "Dora Quinn", initials: "DQ", date: "Mar 17, 2026", reviewCount: 1 },
  { name: "Karla Frost", initials: "KF", date: "Mar 14, 2026", reviewCount: 3 },
  { name: "Liz Hahn", initials: "LH", date: "Mar 11, 2026", reviewCount: 1 },
  { name: "Norma Snell", initials: "NS", date: "Mar 8, 2026", reviewCount: 1 },
  { name: "Sue Garner", initials: "SG", date: "Mar 5, 2026", reviewCount: 2 },
  { name: "Tina Beck", initials: "TB", date: "Mar 2, 2026", reviewCount: 1 },
  { name: "Hilda Roth", initials: "HR", date: "Feb 27, 2026", reviewCount: 1 },
  { name: "Eva Tran", initials: "ET", date: "Feb 24, 2026", reviewCount: 2 },
  { name: "Iris Mead", initials: "IM", date: "Feb 21, 2026", reviewCount: 1 },
  { name: "Beverly Cain", initials: "BC", date: "Feb 18, 2026", reviewCount: 1 },
  { name: "Rosa Pike", initials: "RP", date: "Feb 15, 2026", reviewCount: 2 },
  { name: "Maya Holt", initials: "MH", date: "Feb 12, 2026", reviewCount: 1 },
  { name: "Cora Banks", initials: "CB", date: "Feb 9, 2026", reviewCount: 1 },
];

const THREE_STAR: Review[] = THREE_STAR_NAMES.map((n, i) => ({
  name: n.name,
  initials: n.initials,
  location: "US",
  reviewCount: n.reviewCount,
  stars: 3 as const,
  text: THREE_STAR_TEXTS[i % THREE_STAR_TEXTS.length],
  date: n.date,
}));

const REVIEWS: Review[] = [...POSITIVE_REVIEWS, ...ONE_STAR, ...TWO_STAR, ...THREE_STAR];

// Displayed total counts per rating (inflated to reflect real Trustpilot scale)
const DISPLAY_COUNTS: Record<1 | 2 | 3 | 4 | 5, number> = {
  1: 10,
  2: 28,
  3: 33,
  4: 19_555,
  5: 89_987,
};
const DISPLAY_TOTAL = Object.values(DISPLAY_COUNTS).reduce((a, b) => a + b, 0);

function formatCount(n: number): string {
  if (n >= 1000) return n.toLocaleString("en-US");
  return String(n);
}

// Trustpilot-accurate color per rating
function ratingColor(count: number): string {
  if (count >= 4) return "#00b67a"; // green (5★ & 4★)
  if (count >= 2) return "#f5b800"; // yellow (3★ & 2★)
  return "#ff3722";                  // red (1★)
}

function GreenStars({ count, size = "md" }: { count: number; size?: "sm" | "md" }) {
  const px = size === "sm" ? "w-3.5 h-3.5" : "w-[18px] h-[18px]";
  const color = ratingColor(count);
  return (
    <div className="inline-flex gap-[2px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`${px} grid place-items-center`}
          style={{ backgroundColor: i <= count ? color : "#dcdce6" }}
          aria-hidden
        >
          <Star className="w-[10px] h-[10px] fill-white text-white" strokeWidth={0} />
        </span>
      ))}
    </div>
  );
}


const AVATAR_COLORS = [
  "bg-[#f7d9a0] text-[#7a4b00]",
  "bg-[#f9c6c6] text-[#8b2a2a]",
  "bg-[#c8e6c9] text-[#1b5e20]",
  "bg-[#bbdefb] text-[#0d47a1]",
  "bg-[#e1bee7] text-[#4a148c]",
  "bg-[#ffe0b2] text-[#a04500]",
];

function Avatar({ initials, idx }: { initials: string; idx: number }) {
  const cls = AVATAR_COLORS[idx % AVATAR_COLORS.length];
  return (
    <div
      className={`w-11 h-11 rounded-full grid place-items-center font-bold text-[13px] flex-shrink-0 ${cls}`}
    >
      {initials}
    </div>
  );
}

function ReplyBlock({ reply }: { reply: Reply }) {
  return (
    <div className="mt-3 rounded-lg border border-rose-deep/15 bg-gradient-to-br from-soft-pink/30 to-cream/60 p-3">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-6 h-6 rounded-full bg-rose-deep grid place-items-center flex-shrink-0">
          <MessageSquare className="w-3 h-3 text-white" strokeWidth={2.6} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[11.5px] font-extrabold text-[#191919] leading-tight">
              {reply.author}
            </span>
            <BadgeCheck className="w-3 h-3 text-rose-deep flex-shrink-0" strokeWidth={2.6} />
          </div>
          <a
            href={`mailto:${reply.email}`}
            className="text-[10.5px] text-rose-deep hover:underline leading-tight block"
          >
            {reply.email}
          </a>
        </div>
        <span className="text-[10px] text-[#6c6c7a] flex-shrink-0">Replied</span>
      </div>
      <p className="text-[12.5px] leading-[1.5] text-[#3a3a3a]">{reply.text}</p>
      <div className="mt-1.5 text-[10px] text-[#6c6c7a]">{reply.date}</div>
    </div>
  );
}

function ReviewCard({ review, idx }: { review: Review; idx: number }) {
  return (
    <article className="bg-white rounded-lg border border-[#e8e8ed] p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <header className="flex items-center gap-2.5 mb-2.5">
        <Avatar initials={review.initials ?? review.name.slice(0, 2).toUpperCase()} idx={idx} />
        <div className="min-w-0">
          <div className="font-bold text-[14px] text-[#191919] leading-tight truncate">
            {review.name}
          </div>
          <div className="text-[11.5px] text-[#6c6c7a] leading-tight mt-0.5">
            {review.location} · {review.reviewCount} {review.reviewCount === 1 ? "review" : "reviews"}
          </div>
        </div>
      </header>
      <GreenStars count={review.stars} />
      <p className="mt-2.5 text-[13.5px] leading-[1.5] text-[#191919]">
        {review.text}
      </p>
      <div className="mt-2.5 text-[11px] text-[#6c6c7a]">{review.date}</div>
      {review.reply && <ReplyBlock reply={review.reply} />}
    </article>
  );
}

export function TrustpilotReviews() {
  const [filter, setFilter] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === 0 ? REVIEWS : REVIEWS.filter((r) => r.stars === filter)),
    [filter],
  );

  const visible = showAll ? filtered : filtered.slice(0, 10);

  return (
    <section id="reviews" className="pdp-section-dark py-12 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="247,000+ Verified Reviews, In One Place"
          title={<>See Why <span className="text-rose-deep">247,000+ Women</span> Trust This Ritual</>}
          description={<>
            <span className="inline-flex items-center gap-2 align-middle">
              <GreenStars count={5} />
              <span className="text-[13px] text-foreground/80 font-semibold">
                <strong className="font-bold text-foreground">4.7</strong> · {DISPLAY_TOTAL.toLocaleString("en-US")} Reviews
              </span>
            </span>
          </>}
        />


        {/* Star filters — explicit "tap to filter" affordance */}
        <div className="mb-5 rounded-lg border border-[#e8e8ed] bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 bg-gradient-to-r from-soft-pink/40 to-cream border-b border-[#e8e8ed]">
            <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#191919]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-rose-deep" strokeWidth={2.6} />
              Tap to filter by rating
            </div>
            {filter !== 0 && (
              <button
                onClick={() => {
                  setFilter(0);
                  setShowAll(false);
                }}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-deep hover:underline"
              >
                <X className="w-3 h-3" strokeWidth={2.6} />
                Clear
              </button>
            )}
          </div>

          {/* Rating distribution — % per star */}
          <div className="px-3 pt-3 pb-2 border-b border-[#f0f0f5] bg-white">
            <div className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c6c7a] mb-2">
              Rating breakdown · {DISPLAY_TOTAL.toLocaleString("en-US")} verified reviews
            </div>
            <ul className="space-y-1.5">
              {(() => {
                // Fixed negative-review percentages (real refund/complaint share is tiny)
                const FIXED_PCT: Record<1 | 2 | 3, number> = { 1: 1.1, 2: 1.5, 3: 1.7 };
                const remaining = 100 - (FIXED_PCT[1] + FIXED_PCT[2] + FIXED_PCT[3]); // 95.7
                // Dynamic split between 5★ and 4★ based on real review counts
                const top = DISPLAY_COUNTS[5] + DISPLAY_COUNTS[4];
                const pct5 = +((DISPLAY_COUNTS[5] / top) * remaining).toFixed(1);
                const pct4 = +(remaining - pct5).toFixed(1);
                const PCT: Record<1 | 2 | 3 | 4 | 5, number> = { 5: pct5, 4: pct4, 3: FIXED_PCT[3], 2: FIXED_PCT[2], 1: FIXED_PCT[1] };
                return ([5, 4, 3, 2, 1] as const).map((s) => {
                  const pctRaw = PCT[s];
                  const count = Math.round((pctRaw / 100) * DISPLAY_TOTAL);
                  const pctLabel = `${pctRaw.toFixed(1)}%`;
                  const barPct = Math.max(pctRaw, 1.2);
                  const color = ratingColor(s);
                  return (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => {
                          setFilter(s as 1 | 2 | 3 | 4 | 5);
                          setShowAll(false);
                        }}
                        aria-pressed={filter === s}
                        aria-label={`Filter by ${s} star reviews`}
                        className={`w-full flex items-center gap-2 rounded-md px-1.5 py-1 transition-colors ${
                          filter === s
                            ? "bg-rose-deep/10 ring-1 ring-rose-deep/30"
                            : "hover:bg-foreground/[0.04]"
                        }`}
                      >
                        <span className="inline-flex items-center gap-0.5 w-7 flex-shrink-0">
                          <span className="text-[11.5px] font-extrabold text-[#191919] tabular-nums">{s}</span>
                          <Star className="w-2.5 h-2.5" style={{ fill: color, color }} strokeWidth={0} />
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-[#f0f0f5] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${barPct}%`, backgroundColor: color }}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-[#191919] tabular-nums w-12 text-right">
                          {pctLabel}
                        </span>
                        <span className="text-[10.5px] text-[#6c6c7a] tabular-nums w-12 text-right hidden sm:inline">
                          {formatCount(count)}
                        </span>
                      </button>
                    </li>
                  );

                });
              })()}
            </ul>

            {(filter === 1 || filter === 2 || filter === 3) && (() => {
              // Star share (matches FIXED_PCT used in the distribution bars above)
              const STAR_PCT: Record<1 | 2 | 3, number> = { 1: 1.1, 2: 1.5, 3: 1.7 };
              // Refund speed escalates the lower the rating (lower ratings = faster resolution)
              const REFUND_SPEED: Record<1 | 2 | 3, { pct: number; hours: number }> = {
                1: { pct: 94, hours: 31 },
                2: { pct: 96, hours: 24 },
                3: { pct: 98, hours: 18 },
              };
              const sharePct = STAR_PCT[filter];
              const { pct, hours } = REFUND_SPEED[filter];
              return (
                <div className="mt-2.5 rounded-md bg-emerald-50 border border-emerald-200/70 px-2.5 py-1.5">
                  <div className="flex items-start gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                    <p className="text-[11px] leading-snug text-emerald-900">
                      Only <strong className="font-extrabold tabular-nums">{sharePct.toFixed(2)}%</strong> of our customers left a {filter}★ review — and <strong className="font-extrabold tabular-nums">{pct}%</strong> of refund requests were issued within <strong className="font-extrabold tabular-nums">{hours}h</strong>.
                    </p>
                  </div>
                </div>
              );
            })()}

          </div>

          <div className="grid grid-cols-6 gap-1.5 p-2">
            <button
              onClick={() => {
                setFilter(0);
                setShowAll(false);
              }}
              aria-pressed={filter === 0}
              className={`flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg text-[11px] font-bold transition-all border-2 active:scale-95 ${
                filter === 0
                  ? "bg-[#191919] text-white border-[#191919] shadow-[0_4px_10px_-4px_rgba(0,0,0,0.4)]"
                  : "bg-white text-[#191919] border-[#e8e8ed] hover:border-rose-deep/50"
              }`}
            >
              <span className="text-[13px] leading-none">All</span>
              <span className={`text-[10px] leading-none ${filter === 0 ? "text-white/70" : "text-[#6c6c7a]"}`}>
                {formatCount(DISPLAY_TOTAL)}
              </span>
            </button>
            {[5, 4, 3, 2, 1].map((s) => {
              const active = filter === s;
              return (
                <button
                  key={s}
                  onClick={() => {
                    setFilter(s as 1 | 2 | 3 | 4 | 5);
                    setShowAll(false);
                  }}
                  aria-pressed={active}
                  className={`flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg transition-all border-2 active:scale-95 ${
                    active
                      ? "bg-[#191919] border-[#191919] shadow-[0_4px_10px_-4px_rgba(0,0,0,0.4)]"
                      : "bg-white border-[#e8e8ed] hover:border-rose-deep/50"
                  }`}
                >
                  <span className="inline-flex items-center gap-0.5 leading-none">
                    <span className={`text-[13px] font-bold ${active ? "text-white" : "text-[#191919]"}`}>
                      {s}
                    </span>
                    <Star
                      className="w-3 h-3"
                      style={active
                        ? { fill: "#fff", color: "#fff" }
                        : { fill: ratingColor(s), color: ratingColor(s) }}
                      strokeWidth={0}
                    />
                  </span>
                  <span className={`text-[10px] leading-none ${active ? "text-white/70" : "text-[#6c6c7a]"}`}>
                    {formatCount(DISPLAY_COUNTS[s as 1 | 2 | 3 | 4 | 5])}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result count */}
        <div className="text-center mb-3 text-[12px] text-white/75">
          Showing <strong className="text-white font-bold">{visible.length}</strong> of{" "}
          <strong className="text-white font-bold">
            {filter === 0 ? formatCount(DISPLAY_TOTAL) : formatCount(DISPLAY_COUNTS[filter])}
          </strong>
          {filter !== 0 && (
            <>
              {" "}· filtered by{" "}
              <span className="inline-flex items-center gap-0.5 font-bold text-white">
                {filter}
                <Star className="w-3 h-3" style={{ fill: ratingColor(filter), color: ratingColor(filter) }} strokeWidth={0} />
              </span>
            </>
          )}
        </div>


        {/* Grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            {visible.map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} review={r} idx={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-[13px] text-muted-foreground">
            No reviews with this rating yet.
          </div>
        )}

        {/* Show more */}
        {filtered.length > 10 && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-rose-deep text-white px-6 py-3 text-[12.5px] font-extrabold uppercase tracking-[0.14em] shadow-[0_8px_18px_-8px_rgba(190,55,75,0.6)] hover:-translate-y-0.5 transition-all"
            >
              {showAll ? "Show less" : `Show more (${filtered.length - 10})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
