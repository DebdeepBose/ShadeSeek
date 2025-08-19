import { Section1Main } from "./Section1/Section1Main";
import { Section2Main } from "./Section2/Section2Main";
import { Section3Main } from "./Section3/Section3Main";
import { Section4Main } from "./Section4/Section4Main";
import { Section5Main } from "./Section5/Section5Main";
import { Section6Main } from "./Section6/Section6Main";

export function HomePage({ section2Ref }) {
  return (
    <>
      <Section1Main />
      <Section2Main section2Ref={section2Ref} />
      <Section3Main />
      <Section4Main />
      <Section5Main />
      <Section6Main />

      <div className="h-[100vh] w-full bg-black pt-4 flex justify-center"></div>
    </>
  );
}
