import Card from "@/components/Card";
import PillButton from "@/components/PillButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import BentoGrid from "@/components/BentoGrid";

export default function HomeSmokeTest() {
  return (
    <div className="px-6">
      <RevealOnScroll>
        <h1 className="font-display text-3xl text-gold-bright">Layout works</h1>
      </RevealOnScroll>
      <BentoGrid>
        <Card href="/biografia">Card one (spans larger)</Card>
        <Card href="/biografia">Card two</Card>
        <Card href="/biografia">Card three</Card>
      </BentoGrid>
      <PillButton href="/biografia">Scopri di più</PillButton>
    </div>
  );
}
