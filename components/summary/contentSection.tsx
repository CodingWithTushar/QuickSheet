import { parsePoint, pasreEmojiPoint } from "@/utils/summaryHelper";
import { MotionDiv } from "../common/motionWrapper";
import { ContainerVariants, ItemsVariants } from "@/utils/constants";

function EmojiPoint({ point }: { point: string }) {
  const { emoji, text } = pasreEmojiPoint(point) ?? {};

  return (
    <MotionDiv
      variants={ItemsVariants}
      className="group p-4   relative bg-linear-to-br from-gray-200/[0.8] to-gray-400/[0.03] rounded-2xl border border-gray-500/10 hover:shadow-lg transition-all"
    >
      <div className="absolute inset-0 bg-linear-to-r from-gray-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative flex items-center gap-3 ">
        <span className="text-lg lg:text-xl shrink-0 pt-1">{emoji}</span>
        <p className="text-lg lg:text-xl text-muted-foreground/90 leading-relaxed">
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
      className="group p-4   relative bg-linear-to-br from-gray-200/[0.8] to-gray-400/[0.03] rounded-2xl border border-gray-500/10 hover:shadow-lg transition-all"
    >
      <div className="absolute inset-0 bg-linear-to-r from-gray-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-2xl" />
      <p className="relative text-lg lg:text-xl text-muted-foreground/90 leading-relaxed text-left">
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
