/* eslint-disable react/prop-types */
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

export const ThreeDCardDemo = ({
  name,
  technologies,
  link,
  description,
  imageUrl,
  url,
}) => {
  // Check if imageUrl is a Lottie animation (ends with .lottie)
  const isLottie = imageUrl?.endsWith(".lottie");

  return (
    <CardContainer className="w-fit">
      <CardBody className="bg-gray-50  w-auto max-h-[100vh] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-2 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {description.slice(0, 50)}...
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          {isLottie ? (
            <DotLottieReact src={imageUrl} loop autoplay />
          ) : (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-40 object-cover rounded-md"
            />
          )}
        </CardItem>
        <CardItem
          translateZ={20}
          as="p"
          className="text-neutral-500 text-sm mt-2 flex flex-wrap w-[90%] mx-auto dark:text-neutral-300"
        >
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 rounded-full border mx-1 my-1 border-indigo-500 space-x-3 h-full"
            >
              {tech}
            </span>
          ))}
        </CardItem>
        <div className="flex justify-between items-center">
          <Link
            translateZ={20}
            to={link}
            target="__blank"
            className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </Link>
          <Link
            translateZ={20}
            to={url || link}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};
