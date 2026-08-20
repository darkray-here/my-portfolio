import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { scrollToId } from "../utils/scroll";

type ScrollLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** Target section id, without the leading "#". */
  targetId: string;
  onNavigate?: () => void;
};

/**
 * A link that smooth-scrolls to a section without leaving a persistent
 * hash in the URL. If JS is unavailable, the plain href still works.
 */
export function ScrollLink({
  targetId,
  onNavigate,
  onClick,
  ...rest
}: ScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    event.preventDefault();
    scrollToId(targetId);

    // Keep the URL clean: replace any hash with the root path.
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    onNavigate?.();
  };

  return <a href={`#${targetId}`} onClick={handleClick} {...rest} />;
}
