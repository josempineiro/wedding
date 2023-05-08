import React, { useState } from "react";
import classNames from "classnames";
import { Tag } from "@/components/core/forms/tags-field/Tag";

export type TagsProps = React.HTMLAttributes<HTMLDivElement> & {
  tags: string[];
  maxTagsToShow?: number;
  closable?: boolean;
  onClose?: (tag: string) => void;
} & (
    | {
        closable: true;
        onClose: (tag: string) => void;
      }
    | {
        closable?: false;
      }
  );

export function Tags({
  tags,
  className,
  maxTagsToShow = Infinity,
  closable,
  onClose,
  ...rest
}: TagsProps) {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? tags : tags.slice(0, maxTagsToShow);
  const hiddenTags = tags.slice(maxTagsToShow);
  const handleClickMoreTags = () => {
    setShowAllTags(!showAllTags);
  };
  const handleCloseTag = (tag: string) => (event: React.MouseEvent) => {
    event.stopPropagation();
    if (closable) {
      onClose(tag);
    }
  };
  return (
    <div
      {...rest}
      className={classNames([className, "flex flex-wrap gap-2 items-center"])}
    >
      {visibleTags.map((tag) => (
        <Tag key={tag} closable={closable} onClose={handleCloseTag(tag)}>
          {tag}
        </Tag>
      ))}
      {hiddenTags.length > 0 && (
        <Tag role="more-tags" onClick={handleClickMoreTags}>
          <>{showAllTags ? "Hide" : `+${hiddenTags.length} more`} </>
        </Tag>
      )}
    </div>
  );
}
