import { parsePoint, pasreEmojiPoint } from "@/utils/summaryHelper";
import { MotionDiv } from "../common/motionWrapper";
import { ContainerVariants, ItemsVariants } from "@/utils/constants";

function EmojiPoint({ point }: { point: string }) {
  const { emoji, text } = pasreEmojiPoint(point) ?? {};

  return (
    <MotionDiv
      variants={ItemsVariants}
      className="group relative rounded-2xl border border-gray-500/10 bg-linear-to-br from-gray-200/[0.8] to-gray-400/[0.03] p-4 transition-all hover:shadow-lg"
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-gray-500/10 to-transparent opacity-0 transition-opacity hover:opacity-100" />
      <div className="relative flex items-center gap-3">
        <span className="shrink-0 pt-1 text-lg lg:text-xl">{emoji}</span>
        <p className="text-muted-foreground/90 text-lg leading-relaxed lg:text-xl">
          {text}
        </p>
      </div>
    </MotionDiv>
  );
}

export const RegularPoint = ({ point }: { point: string }) => {
  return (
    <MotionDiv
      variants={ItemsVariants}
      className="group relative rounded-2xl border border-gray-500/10 bg-linear-to-br from-gray-200/[0.8] to-gray-400/[0.03] p-4 transition-all hover:shadow-lg"
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-gray-500/10 to-transparent opacity-0 transition-opacity hover:opacity-100" />
      <p className="text-muted-foreground/90 relative text-left text-lg leading-relaxed lg:text-xl">
        {point}
      </p>
    </MotionDiv>
  );
};

export default function ContentSection({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <MotionDiv
      variants={ContainerVariants}
      key={points.join("")}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-4"
    >
      {points.map((point, index) => {
        const { isNumbered, isMainPoint, hasEmoji, isEmpty } =
          parsePoint(point);

        if (isEmpty) {
          return null;
        }

        if (hasEmoji || isMainPoint) {
          return <EmojiPoint key={`point${index}`} point={point} />;
        }
        return <RegularPoint key={`point${index}`} point={point} />;
      })}
    </MotionDiv>
  );
}
