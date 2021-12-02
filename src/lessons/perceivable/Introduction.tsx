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
        <Box sx={{ marginTop: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <Typography id="alternativeTextHeadline" variant="h2">
              Wytyczna 1.1 – Alternatywa tekstowa
            </Typography>
            <IconButton
              component={Link}
              role="link"
              onClick={linkTo(
                Principle.PERCEIVABLE,
                Perceivable.ALTERNATIVE_TEXTS
              )}
              aria-label="Przejdź do przykładów alternatywy tekstowej"
            >
              <Accessibility />
            </IconButton>
          </Box>
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
      </Container>
    </>
  );
};
