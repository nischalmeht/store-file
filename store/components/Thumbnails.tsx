import React from "react";
import Image from "next/image";
import { cn,  } from "@/lib/utils";
interface Props {
  type: string;
  extension: string;
  url?: string;
  imageClassName?: string;
  className?: string;
}

const Thumbnails = ({
  type,
  extension,
  url = "",
  imageClassName,
  className,
}: Props) => {
    const isImage = type ==="image" && extension !== "svg";
  return (
    <div>Thumbnails</div>
  )
}

export default Thumbnails