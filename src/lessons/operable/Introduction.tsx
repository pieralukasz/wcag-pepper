import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Principle } from "../../types/Principle";
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  Link,
} from "@mui/material";

import { linkTo } from "@storybook/addon-links";
import { Perceivable } from "../../types/Perceivable";
import { PrincipleTitle } from "../../components/PrincipleTitle/PrincipleTitle";
import { Headline } from "../../components/Headline/Headline";
import { BypassBlock } from "../../components/BypassBlock/BypassBlock";

export const Introduction: React.VFC = () => {
  const title = `${Principle.OPERABLE} | Introduction`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Container sx={{ marginTop: 2 }}>
        <Headline id="main-headline" title="Zasada 2 – Funkcjonalność" />
        <Typography sx={{ marginTop: 1 }}>
          Komponenty interfejsu użytkownika oraz nawigacja muszą być
          funkcjonalne (powinny pozwalać na interakcję).
        </Typography>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Wytyczna 2.1 – Dostępność z klawiatury"
            altLabel="Przejdź do przykładów obsługi klawiatury"
            onClick={linkTo(Principle.OPERABLE, Perceivable.ALTERNATIVE_TEXTS)}
          />
          <Typography id="keyboardTitle" sx={{ marginTop: 1 }}>
            Klawiatura - możliwość obsługi strony tylko za pomocą klawiatury.
          </Typography>
          <List aria-labelledby="keyboardTitle">
            <ListItem>
              Używaj przycisków `[tab]`, `[spacja]`, `[enter]`,` [esc]`,
              `[home]`, `[end]`, `[pageUp]`, `[pageDown]`, `[arrowUp]`,
              `[arrowDown]`, `[arrowRight]`, `[arrowLeft]` do nawigowania po
              stronie. Upewnij się, że można wejść i wyjść z każdego elementu.
            </ListItem>
            <ListItem>
              Upewnij się że kolejność tabowania strony jest logiczna i zgodna z
              wizualną kolejnością elementów na stronie.
            </ListItem>
          </List>
          <Typography sx={{ marginTop: 1 }}>
            Powinniśmy używać atrybutu tab-index do manualnego poruszania się po
            naszej stronie za pomocą klawiatury.
          </Typography>
          <Typography id="tabIndexHeader" sx={{ marginTop: 1 }}>
            Wartości jakie może przyjmować tab-index:
          </Typography>
          <List aria-labelledby="tabIndexHeader">
            <ListItem>
              {"x < 0"} - Element będzie łapał focusa tylko z poziomu metod (lub
              linków) ale nie przez klawiaturę
            </ListItem>
            <ListItem>
              {"x = 0"} - Element jest jak najbardziej focusowany przez
              klawiaturę
            </ListItem>
            <ListItem>
              {"x > 0"} - Element jest focusowany przez klawiaturę i możemy
              dzięki niemu wyznaczać kolejność focusowanych elementów
            </ListItem>
          </List>
          <Typography sx={{ marginTop: 1 }}>
            Musimy wiedzieć, że jesteśmy w stanie przejść przez wszystkie
            istotne elementy na naszej stronie za pomocą klawiatury. Dla
            zoobrazowania najlepiej odłączyć myszkę.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
