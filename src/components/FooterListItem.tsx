import Link from "next/link";

type FooterListItemProps = {
  text: string;
  url?: string;
};

const FooterListItem = ({ text, url }: FooterListItemProps) => {
  return (
    <li
      style={{
        marginBottom: "0.5rem",
        fontFamily: "inter, sans-serif",
      }}
    >
      {url && (
        <Link className="link" href={url}>
          {text}
        </Link>
      )}
    </li>
  );
};

export default FooterListItem;
