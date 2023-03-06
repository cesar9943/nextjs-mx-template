import Image, { ImageProps } from "next/image";

const NextImage = ({ ...props }: ImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
};

export default NextImage;
