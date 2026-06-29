import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="relative border-t border-gold/30 px-6 py-12 text-center text-sm text-cream/85"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(92, 26, 26, 0.12) 0%, transparent 60%)",
      }}
    >
      <p>{t("disclaimer")}</p>
      <p className="mt-2 opacity-75">{t("rights")}</p>
    </footer>
  );
}
