
import commentPhoto1 from "@/assets/comment-photo-1.jpg";
import commentPhoto2 from "@/assets/comment-photo-2.jpg";

type Reaction = "like" | "love" | "haha" | "wow";

type Comment = {
  name: string;
  initials: string;
  avatarBg: string; // tailwind color class
  time: string;
  text: string;
  reactions: Reaction[];
  count: number;
  edited?: boolean;
  photo?: string;
  replies?: Comment[];
};

const COMMENTS: Comment[] = [
  {
    name: "Mslynetteturner",
    initials: "M",
    avatarBg: "bg-rose-500",
    time: "1y",
    text: "I think the catch is, it's actually working. Got my 3 bottles today and asked my husband what he thinks — he said I look 'lighter and brighter', didn't even know I was taking anything 😂",
    reactions: ["love", "like", "haha"],
    count: 79,
  },
  {
    name: "Danielle R.",
    initials: "D",
    avatarBg: "bg-amber-500",
    time: "16w",
    text: "Taking it every day, I absolutely love it 😍 Bloating is gone and my jeans fit again.",
    reactions: ["like", "love", "wow"],
    count: 47,
    photo: commentPhoto1,
    replies: [
      {
        name: "Danielle R.",
        initials: "D",
        avatarBg: "bg-amber-500",
        time: "14w",
        text: "Update — week 8 and down 9 lbs. You'll love it ❤️",
        reactions: ["love"],
        count: 12,
      },
    ],
  },
  {
    name: "Erynn M.",
    initials: "E",
    avatarBg: "bg-rose-deep",
    time: "2w",
    text: "I love this stuff! No more afternoon belly bloat and I'm sleeping through the night for the first time in years.",
    reactions: ["like", "love"],
    count: 23,
    edited: true,
  },
  {
    name: "Shonda P.",
    initials: "S",
    avatarBg: "bg-amber-500",
    time: "1w",
    text: "I've gotten so many compliments 😊 friends keep asking what I'm doing different. Just two capsules in the morning, that's it.",
    reactions: ["like", "love"],
    count: 31,
    photo: commentPhoto2,
  },
];

function ReactionIcons({ reactions, count }: { reactions: Reaction[]; count: number }) {
  const map: Record<Reaction, { bg: string; emoji: string }> = {
    like: { bg: "bg-[#1877F2]", emoji: "👍" },
    love: { bg: "bg-[#F33E58]", emoji: "❤️" },
    haha: { bg: "bg-[#F7B125]", emoji: "😂" },
    wow: { bg: "bg-[#F7B125]", emoji: "😮" },
  };
  return (
    <div className="flex items-center gap-1">
      <div className="flex -space-x-1">
        {reactions.map((r, i) => (
          <span
            key={i}
            className={`${map[r].bg} w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] ring-2 ring-white`}
            style={{ zIndex: reactions.length - i }}
          >
            {map[r].emoji}
          </span>
        ))}
      </div>
      <span className="text-[12px] text-[#65676B] font-medium ml-1">{count}</span>
    </div>
  );
}

function CommentBubble({ c, isReply = false }: { c: Comment; isReply?: boolean }) {
  return (
    <div className={`flex gap-2 ${isReply ? "mt-2 ml-9" : ""}`}>
      <div
        className={`${c.avatarBg} flex-shrink-0 ${
          isReply ? "w-7 h-7 text-[11px]" : "w-9 h-9 text-[13px]"
        } rounded-full flex items-center justify-center text-white font-bold`}
      >
        {c.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="inline-block max-w-full bg-[#F0F2F5] rounded-lg px-3 py-2">
          <div className="text-[13px] font-semibold text-[#050505] leading-tight">{c.name}</div>
          <div className="text-[14px] text-[#050505] leading-snug mt-0.5 whitespace-pre-wrap break-words">
            {c.text}
          </div>
        </div>
        {c.photo && (
          <div className="mt-1.5 inline-block rounded-lg overflow-hidden bg-[#F0F2F5] border border-black/5 max-w-[220px]">
            <img
              src={c.photo}
              alt=""
              loading="lazy"
              width={512}
              height={640}
              className="block w-full h-auto"
            />
          </div>
        )}
        <div className="flex items-center gap-3 px-3 mt-1 text-[12px] text-[#65676B] font-semibold">
          <span>{c.time}</span>
          <button type="button" className="hover:underline">Like</button>
          <button type="button" className="hover:underline">Reply</button>
          {c.edited && <span>Edited</span>}
          <div className="ml-auto">
            <ReactionIcons reactions={c.reactions} count={c.count} />
          </div>
        </div>
        {c.replies?.map((r, i) => (
          <CommentBubble key={i} c={r} isReply />
        ))}
      </div>
    </div>
  );
}

export function FBComments() {
  return (
    <div className="relative -mx-4 px-4 py-6 mt-4 bg-[#7B1E2A] rounded-lg">
      <div className="bg-white rounded-lg p-4 shadow-sm">


        <div className="space-y-4">
          {COMMENTS.map((c, i) => (
            <CommentBubble key={i} c={c} />
          ))}
        </div>

        <button
          type="button"
          className="mt-4 text-[13px] font-semibold text-[#65676B] hover:underline"
        >
          View more comments
        </button>
      </div>
    </div>
  );
}
