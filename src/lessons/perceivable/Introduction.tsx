import React from "react";
import { Helmet } from "react-helmet";
import { Principle } from "../../types/Principle";
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  Link,
  IconButton,
} from "@mui/material";
import { Accessibility } from "@mui/icons-material";

import { linkTo } from "@storybook/addon-links";
import { Perceivable } from "../../types/Perceivable";
import { PrincipleTitle } from "../../components/PrincipleTitle/PrincipleTitle";

export const Introduction: React.VFC = () => {
  const title = `${Principle.PERCEIVABLE} | Introduction`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container id="main-content" sx={{ marginTop: 2 }}>
        <Typography variant="h1" fontWeight="bold">
          Zasada 1 – Postrzegalność
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Zapewnij tekstowe zamienniki wszystkich treści nietekstowych, aby
          można je było zamienić na inne formy (np. powiększony druk, brajl,
          mowa syntetyczna, symbole lub prostszy język)
        </Typography>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Wytyczna 1.1 – Alternatywa tekstowa"
            altLabel="Przejdź do przykładów alternatywy tekstowej"
            onClick={linkTo(
              Principle.PERCEIVABLE,
              Perceivable.ALTERNATIVE_TEXTS
            )}
          />
          <Typography sx={{ marginTop: 1 }}>
            Podstawowe zasady pozwalające wypełnić to kryterium:
          </Typography>
          <List>
            <ListItem>
              Obrazki, obrazy map i punktów na mapie powinny mieć dołączony
              odpowiedni tekst alternatywny.
            </ListItem>
            <ListItem>
              Obrazki będące jedynie dekoracją lub zawartość jest już wpisana w
              zawartość tekstową powinny mieć pusta wartość w atrybucie “alt”
            </ListItem>
            <ListItem>
              Tekst alternatywny dla bardziej złożonych obrazów powinien być
              przekazany jako opis lub podany jako link do osobnej strony.
            </ListItem>
            <ListItem>
              Przyciski formularzy powinny być dokładnie opisane (atrybut
              “name”)
            </ListItem>
            <ListItem>
              Pola typu input powinny mieć dołączony tag label z nazwą pola
              input
            </ListItem>
          </List>
          <Typography sx={{ marginTop: 1 }}>
            Zawartość niebędąca tekstem powinna posiadać krótki opis tego co
            przedstawia. Przy podjęciu decyzji jaki tekst powinien zostać dodany
            może pomóc zadanie sobie następujących pytań:
          </Typography>
          <List>
            <ListItem>Czemu zawartość się tu znajduje</ListItem>
            <ListItem>Jakie informacje prezentuje</ListItem>
            <ListItem>
              Jaki jest cel wypełniany przez ten typ zawartości
            </ListItem>
            <ListItem>
              eśli nie można by było użyć zawartości niebędącej tekstem to jaki
              za pomocą słów można by było przekazać treść zawartości
            </ListItem>
          </List>
          <Typography>
            Gdy zawartość niebędąca tekstem zawiera słowa będące kluczowe dla
            zrozumienia treści to tekst alternatywny powinien zawierać te słowa.
            Tekst powinien być krótki i zwięzły. Jeśli opis ma być bardziej
            szczegółowy, ilustracja może być linkiem do osobnej strony z opisem,
            lub opis może znaleźć się obok ilustracji.
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Wytyczna 1.2 – Multimedia"
            altLabel="Przejdź do przykładów multimediów"
            onClick={linkTo(Principle.PERCEIVABLE, Perceivable.MULTIMEDIA)}
          />
          <Typography sx={{ marginTop: 1 }}>
            Dostępność wcześniej nagranych plików audio i wideo
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Dla wszystkich nagrań nie będących na żywo należy udostępnić
            transkrypcje lub (audiodeskrypcje dla wideo)
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Wykluczeniem są filmy służące jedynie dekoracji.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Napisy w materiałach wideo powinny przekazywać informacje dźwiękowe
            wpływające na zrozumienie kontekstu, czyli informacje wykraczające
            poza dialogi. Celem uzyskania wyższego poziomu dostępności
            materiałów wideo (AAA) materiał wideo powinien mieć dołączone
            nagranie tłumaczenia w języku migowym.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Dla materiałów na żywo powinny być dodane napisy.
          </Typography>
          <Link
            sx={{ marginTop: 1 }}
            href="https://scottvinkle.me/blogs/work/how-accessible-is-the-html-video-player"
          >
            HTML player
          </Link>
        </Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Wytyczna 1.3 – Możliwość adaptacji"
            altLabel="Przejdź do przykładów możliwości adaptacji"
            onClick={linkTo(Principle.PERCEIVABLE, Perceivable.ADAPTATION)}
          />
          <Typography sx={{ marginTop: 1 }}>
            Dostępność wcześniej nagranych plików audio i wideo Dla wszystkich
            nagrań nie będących na żywo należy udostępnić transkrypcje lub
            (audiodeskrypcje dla wideo)
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Dokument HTML powinien być zbudowany z zachowaniem semantyki i
            poszczególne elementy powinny być zbudowane z elementów o określonym
            przeznaczeniu. Tabele powinny być używane do danych tabelarycznych,
            a komórki danych są powiązane z ich nagłówkami. Podpisy tabeli
            danych, jeśli występują, są powiązane z tabelami danych.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Dokument powinien mieć zachowaną logiczną ciągłość przedstawienia
            treści oraz umożliwiać nawigację po dokumencie w sposób logiczny i
            intuicyjny.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Instrukcje nie nie powinny opierać się wyłącznie na kształcie,
            rozmiarze ani wizualnej lokalizacji (np. „Kliknij kwadratową ikonę,
            aby kontynuować” lub „Instrukcje znajdują się w prawej kolumnie”).
            Nie mogą również opierać się wyłącznie o dźwięk (przykładowo dźwięk
            informujący o zakończeniu czasu przy wykonywaniu jakiegoś zadania
            jako jedyny wyznacznik upływu czasu)
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Orientacja wyświetlanej zawartości nie powinna mieć wpływu na
            funkcjonalność zawartości, pomocne w techniki:
          </Typography>
          <List>
            <ListItem>
              Użycie CSS orientation z wartością “landscape/portrait”.
            </ListItem>
            <ListItem>
              Użycie show/hide by móc ukryć poszczególne elementy w odpowiedniej
              orientacji.
            </ListItem>
          </List>
          <Typography sx={{ marginTop: 1 }}>
            Bardzo ważną kwestią w przypadku myśleniu o orientacji jest
            uświadomienie sobie, że osoby które mają przymocowany tablet do
            wózka, nie są w stanie go obrócić. W związku z defektem kryterium
            1.3.4 Orientacja (AA) nie możemy ani zablkokować tej możliwości ani
            wyświetlić komunikatu o tym żeby zmienił urządzenie XDE
          </Typography>
          <blockquote>
            <strong>
              “I can't rotate my tablet — it's attached to my wheelchair.” -
              Comic with cerebral palsy who uses a wheelchair
            </strong>
          </blockquote>
        </Box>
      </Container>
    </>
  );
};
