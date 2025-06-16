import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggle = () => {
    const next = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(next).catch(console.error);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-white/80 hover:text-white"
      onClick={toggle}
    >
      {i18n.language === "ar" ? t("lang.english") : t("lang.arabic")}
    </Button>
  );
};

export default LanguageSwitcher;
