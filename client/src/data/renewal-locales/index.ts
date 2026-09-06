import type { RenewalCopy } from "@/data/renewal-copy";
import am from "./am";
import ar from "./ar";
import de from "./de";
import es from "./es";
import fr from "./fr";
import hi from "./hi";
import id from "./id";
import it from "./it";
import ja from "./ja";
import nl from "./nl";
import pl from "./pl";
import pt from "./pt";
import ru from "./ru";
import sw from "./sw";
import ta from "./ta";
import th from "./th";
import tl from "./tl";
import uk from "./uk";
import vi from "./vi";
import yo from "./yo";
import zh from "./zh";
import zhTW from "./zh-TW";
import he from "./he";

/** Extra site locales beyond en/ko — full RenewalCopy packs. */
export const extraRenewalLocales: Record<string, RenewalCopy> = {
  am,
  ar,
  de,
  es,
  fr,
  hi,
  id,
  it,
  ja,
  nl,
  pl,
  pt,
  ru,
  sw,
  ta,
  th,
  tl,
  uk,
  vi,
  yo,
  zh,
  "zh-TW": zhTW,
  he,
};
