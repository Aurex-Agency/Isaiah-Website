import { SiteHeader } from "@/components/site-header";
import { LookProgress } from "@/components/look-progress";
import { Look01Studio } from "@/components/look-01-studio";
import { Look02AroundTown } from "@/components/look-02-around-town";
import { WhatIsaiahCreates } from "@/components/what-isaiah-creates";
import { Look03AfterDark } from "@/components/look-03-after-dark";
import { MidPageCta } from "@/components/mid-page-cta";
import { SocialPresence } from "@/components/social-presence";
import { Look04TheTable } from "@/components/look-04-the-table";
import { Look05HomeGround } from "@/components/look-05-home-ground";
import { Look06Away } from "@/components/look-06-away";
import { InquiryFinale } from "@/components/inquiry-finale";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <LookProgress />
      <main>
        <Look01Studio />
        <Look02AroundTown />
        <WhatIsaiahCreates />
        <Look03AfterDark />
        <MidPageCta prompt="Planning a campaign?" label="Work With Isaiah" />
        <SocialPresence />
        <Look04TheTable />
        <Look05HomeGround />
        <Look06Away />
        <MidPageCta
          prompt="Interested in a partnership?"
          label="Start a Collaboration"
        />
        <InquiryFinale />
      </main>
      <SiteFooter />
    </>
  );
}
