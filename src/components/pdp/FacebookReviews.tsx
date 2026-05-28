import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ThumbsUp } from "lucide-react";
import ba1 from "@/assets/ba-1.jpg";
import ba2 from "@/assets/ba-2.jpg";
import ba3 from "@/assets/ba-3.jpg";
import ba4 from "@/assets/ba-4.jpg";
import ba5 from "@/assets/ba-5.jpg";
import ba6 from "@/assets/ba-6.jpg";
import ba7 from "@/assets/ba-7.jpg";
import ba8 from "@/assets/ba-8.jpg";

const AVATARS = {
  vila: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/712efea7-2be3-4e76-aa91-623d73c986df",
  hope: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/d7497ec1-2c6e-4b63-b646-23ffbce52684",
  jen: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/32ca8cf5-a1a5-4ac9-81aa-366d0ffedaf0",
  michelle: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/f3c15e42-016a-4638-8d4e-8872ea8faa37",
  rebecca: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/9be7443e-b694-43a9-8e74-9b061481c29f",
  jenniferM: "https://assets.replocdn.com/projects/3706c0a8-46ea-4150-ae83-f4d3594c1e3d/26fb90fb-01a5-4eb1-9f57-d9257b0a5723",
};

type Reply = { name: string; avatar: string; text: string; likes: number; time: string };

type Post = {
  poster: { name: string; avatar: string };
  taggedFriend: string;
  text: string;
  image: string;
  likes: number;
  time: string;
  replies: Reply[];
};

const POSTS: Post[] = [
  {
    poster: { name: "Vila Saengsavang", avatar: AVATARS.vila },
    taggedFriend: "Hope Browne",
    text: "the bloating cleared up so well, took two months and did get worse before it got better. We are very happy about it 🙏",
    image: ba1,
    likes: 247,
    time: "3d",
    replies: [
      { name: "Hope Browne", avatar: AVATARS.hope, text: "Oh wow that's amazing!! How many bottles did you do?", likes: 14, time: "2d" },
      { name: "Vila Saengsavang", avatar: AVATARS.vila, text: "3 bottles, just stuck with it every morning 💕", likes: 22, time: "2d" },
    ],
  },
  {
    poster: { name: "Marcy Whitfield", avatar: AVATARS.michelle },
    taggedFriend: "Lauren Tate",
    text: "okay you HAVE to try this. 8 weeks and my menopause belly is finally going down. I haven't seen my waist in 4 years 🥲",
    image: ba2,
    likes: 512,
    time: "1w",
    replies: [
      { name: "Lauren Tate", avatar: AVATARS.rebecca, text: "Wait WHAT. Ordering tonight. Did you change diet too?", likes: 31, time: "6d" },
      { name: "Marcy Whitfield", avatar: AVATARS.michelle, text: "Nope!! That's the wildest part. Same meals same workouts. Just this.", likes: 47, time: "6d" },
    ],
  },
  {
    poster: { name: "Jen Caruso", avatar: AVATARS.jen },
    taggedFriend: "Stephanie K",
    text: "before & after… 6 weeks. I'm not unbuttoning my jeans after lunch anymore. that alone is worth it 😭",
    image: ba3,
    likes: 389,
    time: "4d",
    replies: [
      { name: "Stephanie K", avatar: AVATARS.hope, text: "the post-lunch unbutton was my villain origin story 😂😂", likes: 89, time: "4d" },
      { name: "Jen Caruso", avatar: AVATARS.jen, text: "RIGHT?? gone. completely gone.", likes: 23, time: "3d" },
    ],
  },
  {
    poster: { name: "Donna Mitchell", avatar: AVATARS.jenniferM },
    taggedFriend: "Patricia",
    text: "remember when I said nothing would ever work for menopause weight? I was wrong. 3 months in. down 14 lbs and zero bloat 🙌",
    image: ba4,
    likes: 824,
    time: "2w",
    replies: [
      { name: "Patricia Lowe", avatar: AVATARS.rebecca, text: "I literally just ordered yesterday because of YOU. praying 🙏", likes: 41, time: "2w" },
      { name: "Donna Mitchell", avatar: AVATARS.jenniferM, text: "stick with it through week 2! that's where I almost quit", likes: 36, time: "2w" },
      { name: "Karen B.", avatar: AVATARS.michelle, text: "you look incredible Donna 😍", likes: 28, time: "1w" },
    ],
  },
  {
    poster: { name: "Brittany Carlson", avatar: AVATARS.hope },
    taggedFriend: "Mom",
    text: "Mom! the postpartum belly is finally going down. 5 weeks. mom belly pooch is genuinely shrinking 💕 thank you for telling me about this",
    image: ba5,
    likes: 612,
    time: "5d",
    replies: [
      { name: "Mom 💕", avatar: AVATARS.jenniferM, text: "OH MY GOD honey you look so good. so proud of you ❤️❤️❤️", likes: 102, time: "5d" },
      { name: "Ashley Cruz", avatar: AVATARS.jen, text: "wait this works for postpartum?? buying NOW", likes: 19, time: "4d" },
    ],
  },
  {
    poster: { name: "Heather Owens", avatar: AVATARS.rebecca },
    taggedFriend: "Sarah J.",
    text: "the morning puffiness is GONE. like… gone gone. I wake up looking like myself again. my rings even fit 🥹",
    image: ba6,
    likes: 298,
    time: "1w",
    replies: [
      { name: "Sarah J.", avatar: AVATARS.michelle, text: "ok the rings fitting got me. that's how I know it's real", likes: 54, time: "1w" },
    ],
  },
  {
    poster: { name: "Nicole Vance", avatar: AVATARS.jen },
    taggedFriend: "Em",
    text: "EM these are the same jeans!!! I cried in the dressing room. 7 weeks. don't gatekeep this stuff anymore lol",
    image: ba7,
    likes: 947,
    time: "3d",
    replies: [
      { name: "Em Lindqvist", avatar: AVATARS.hope, text: "STOP IT 😭 sending the link to my sister rn", likes: 63, time: "3d" },
      { name: "Nicole Vance", avatar: AVATARS.jen, text: "do it. I'm telling everyone now. life changing", likes: 38, time: "3d" },
      { name: "Theresa B.", avatar: AVATARS.rebecca, text: "those JEANS girl 👏👏👏", likes: 21, time: "2d" },
    ],
  },
  {
    poster: { name: "Marie Sullivan", avatar: AVATARS.jenniferM },
    taggedFriend: "the girls",
    text: "I'm 70 years old and I'm telling you it works. 8 weeks. flat stomach. energy is back. my doctor asked me what I was doing 😌",
    image: ba8,
    likes: 1284,
    time: "2w",
    replies: [
      { name: "Linda Caruso", avatar: AVATARS.michelle, text: "Marie you are an INSPIRATION. love seeing this 🙌", likes: 156, time: "2w" },
      { name: "Beverly Chen", avatar: AVATARS.hope, text: "70 and glowing. ordering for me and my mom both", likes: 78, time: "1w" },
    ],
  },
];

function CommentBubble({ post }: { post: Post }) {
  return (
    <div className="flex items-start gap-2">
      <img
        src={post.poster.avatar}
        alt={post.poster.name}
        className="w-9 h-9 rounded-full object-cover flex-shrink-0"
      />
      <div className="min-w-0 flex-1">
        <div className="bg-[#f0f2f5] rounded-lg overflow-hidden max-w-full">
          <div className="px-3.5 pt-2.5 pb-2">
            <div className="text-[13.5px] font-semibold text-[#050505] leading-tight">
              {post.poster.name}
            </div>
            <p className="text-[14px] text-[#050505] leading-snug mt-0.5">
              <span className="text-[#1877f2] font-medium">{post.taggedFriend}</span>{" "}
              {post.text}
            </p>
          </div>
          {/* Image attached INSIDE the comment bubble — native FB UX */}
          <img
            src={post.image}
            alt="Before and after"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover block"
          />
        </div>
        <div className="flex items-center gap-3 mt-1 px-3 text-[11.5px] text-[#65676b]">
          <span>{post.time}</span>
          <button className="font-semibold hover:underline">Like</button>
          <button className="font-semibold hover:underline">Reply</button>
          <span className="ml-auto inline-flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-[#1877f2] grid place-items-center">
              <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
            </span>
            {post.likes}
          </span>
        </div>
      </div>
    </div>
  );
}


function ReplyItem({ reply }: { reply: Reply }) {
  return (
    <div className="flex items-start gap-2 mt-2">
      <img
        src={reply.avatar}
        alt={reply.name}
        className="w-7 h-7 rounded-full object-cover flex-shrink-0"
      />
      <div className="min-w-0 flex-1">
        <div className="bg-[#f0f2f5] rounded-lg px-3 py-2 inline-block max-w-full">
          <div className="text-[12.5px] font-semibold text-[#050505] leading-tight">
            {reply.name}
          </div>
          <p className="text-[13px] text-[#050505] leading-snug mt-0.5">{reply.text}</p>
        </div>
        <div className="flex items-center gap-3 mt-0.5 px-3 text-[11px] text-[#65676b]">
          <span>{reply.time}</span>
          <button className="font-semibold hover:underline">Like</button>
          <button className="font-semibold hover:underline">Reply</button>
          {reply.likes > 0 && (
            <span className="ml-auto inline-flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1877f2] grid place-items-center">
                <ThumbsUp className="w-2 h-2 text-white fill-white" />
              </span>
              {reply.likes}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function FacebookReviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [expandedReplies, setExpandedReplies] = useState<Record<number, boolean>>({});

  const scrollToIdx = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(POSTS.length - 1, idx));
    const card = el.querySelectorAll<HTMLElement>("[data-card]")[clamped];
    if (!card) return;
    const targetLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-card]");
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cCenter - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActiveIdx(bestIdx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-cream py-1 px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">


        {/* Carousel — snap-proximity (not mandatory) to avoid jitter against manual scrollTo */}
        <div
          ref={scrollerRef}
          className="flex gap-2.5 overflow-x-auto snap-x snap-proximity scroll-smooth px-[10vw] sm:px-[14vw] md:px-[22vw] pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {POSTS.map((post, i) => {
            const isActive = i === activeIdx;
            const isExpanded = !!expandedReplies[i];
            const visibleReplies = isExpanded ? post.replies : post.replies.slice(0, 1);
            return (
              <article
                key={i}
                data-card
                className={`snap-center flex-shrink-0 w-[80vw] sm:w-[64vw] md:w-[420px] bg-white rounded-lg shadow-[0_6px_22px_-14px_rgba(0,0,0,0.18)] border border-[#dadde1] overflow-hidden transition-all duration-300 ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.93] opacity-55"
                }`}
              >
                <div className="p-2.5">
                  <CommentBubble post={post} />
                </div>

                <div className="px-2.5 pt-1 pb-2 border-t border-[#e4e6eb] bg-white">
                  {visibleReplies.map((r, k) => (
                    <ReplyItem key={k} reply={r} />
                  ))}
                  {post.replies.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setExpandedReplies((p) => ({ ...p, [i]: !p[i] }))}
                      className="mt-1.5 text-[11.5px] text-[#65676b] font-semibold hover:underline"
                    >
                      {isExpanded
                        ? "Hide replies"
                        : `View ${post.replies.length - 1} more ${post.replies.length - 1 === 1 ? "reply" : "replies"}`}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>


        {/* Arrows */}
        <div className="flex items-center justify-center gap-3 mt-2 px-4">

          <button
            onClick={() => scrollToIdx(activeIdx - 1)}
            disabled={activeIdx === 0}
            aria-label="Previous review"
            className="w-12 h-12 rounded-full border-2 border-rose-deep/70 text-rose-deep grid place-items-center hover:bg-rose-deep hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-rose-deep"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.4} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {POSTS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`transition-all rounded-full ${
                  i === activeIdx
                    ? "w-6 h-2 bg-rose-deep"
                    : "w-2 h-2 bg-rose-deep/30 hover:bg-rose-deep/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToIdx(activeIdx + 1)}
            disabled={activeIdx === POSTS.length - 1}
            aria-label="Next review"
            className="w-12 h-12 rounded-full border-2 border-rose-deep/70 text-rose-deep grid place-items-center hover:bg-rose-deep hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-rose-deep"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.4} />
          </button>
        </div>

        <div className="mt-3 text-center text-[11px] text-muted-foreground">
          {activeIdx + 1} / {POSTS.length} · Shared with permission from our Facebook community
        </div>
      </div>
    </section>
  );
}
