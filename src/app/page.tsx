import { SiteHeader } from "@/components/site-header";
import { LookProgress } from "@/components/look-progress";
import { Look01Studio } from "@/components/look-01-studio";
import { Look02AroundTown } from "@/components/look-02-around-town";
import { Look03AfterDark } from "@/components/look-03-after-dark";
import { Look04TheTable } from "@/components/look-04-the-table";
import { Look05HomeGround } from "@/components/look-05-home-ground";
import { Look06Away } from "@/components/look-06-away";
import { ClosingStatement } from "@/components/closing-statement";
import { InquirySection } from "@/components/inquiry-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <LookProgress />
      <main>
        <Look01Studio />
        <Look02AroundTown />
        <Look03AfterDark />
        <Look04TheTable />
        <Look05HomeGround />
        <Look06Away />
        <ClosingStatement />
        <InquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
