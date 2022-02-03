import Image from "next/image";

export default function BlogImage(props) {
  const loader = ({ src }) => "https://treymoen.com/" + src;

  return (
    <Image alt={props.alt || ""} width="1000px" height="500px" { ...props } className="blog-image" loader={loader} />
  );
}
