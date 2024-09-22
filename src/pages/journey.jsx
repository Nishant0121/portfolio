/* eslint-disable react/no-unescaped-entities */
import { Timeline } from "../components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "September 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl  font-normal mb-8">
            Won 2nd Hackathon "Webcade" held At SJCEM at palghar on 14-9-2024
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726973015919IMG-20240914-WA0068.jpg?alt=media&token=578c5380-b6d9-4ef5-8589-0f14f43f1ad6"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726973056242IMG-20240914-WA0082.jpg?alt=media&token=ec4c896f-cddb-4787-b5db-ba31d8f2ddf9"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726973099182IMG-20240914-WA0092.jpg?alt=media&token=3882d9d5-4fd4-47a2-9880-2c4e9ff37059"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl  font-normal mb-8">
            I have won my first ever hackathon "Need For Code 2.0" an 24hrs
            offline hackathon.
          </p>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p> */}
          <div className="grid xl:grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726974181304IMG-20240831-WA0011%20(1).jpg?alt=media&token=d1c7b373-d4a7-46b7-bb4c-fc82c778fe0a"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726974201034IMG_20240830_175809.jpg?alt=media&token=dfe8080b-561d-488e-ab35-64bc7170ce51"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726974283981IMG_20240830_175347.jpg?alt=media&token=20281403-2476-453a-9e1c-babcd9222472"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-lg md:text-xl font-normal mb-4">
            Started new postion at CSI-TSEC as a Technical Team Member.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726979308989IMG-20240920-WA0084.jpg?alt=media&token=32499fb1-e87f-448c-913d-a3b695a9e150"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2023",
      content: (
        <div>
          <p className="text-neutral-200 text-lg md:text-xl font-normal mb-4">
            I have been accepted into the Bachelor of Engineering (B.E.) program
            in Information Technology at Thadomal Shahani Engineering College.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1726979308989IMG-20240920-WA0084.jpg?alt=media&token=32499fb1-e87f-448c-913d-a3b695a9e150"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
