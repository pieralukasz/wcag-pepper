import React from "react";
import { Helmet } from "react-helmet";
import { Principle } from "../../types/Principle";
import { Typography, Container, Box, List, ListItem } from "@mui/material";

import { linkTo } from "@storybook/addon-links";
import { PrincipleTitle } from "../../components/PrincipleTitle/PrincipleTitle";
import { Headline } from "../../components/Headline/Headline";
import { BypassBlock } from "../../components/BypassBlock/BypassBlock";
import { Operable } from "../../types/Operable";
import { Main } from "../../components/Main/Main";
import { Article } from "../../components/Article/Article";
import { Paragraph } from "../../components/Paragraph/Paragraph";

export const Introduction: React.VFC = () => {
  const title = `${Principle.OPERABLE} | Introduction`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Main>
        <Article>
          <Headline id="main-headline" title="Zasada 2 – Funkcjonalność" />
          <Paragraph>
            Komponenty interfejsu użytkownika oraz nawigacja muszą być
            funkcjonalne (powinny pozwalać na interakcję).
          </Paragraph>
          <PrincipleTitle
            title="Wytyczna 2.1 – Dostępność z klawiatury"
            altLabel="Przejdź do przykładów obsługi klawiatury"
            onClick={linkTo(Principle.OPERABLE, Operable.KEYBOARD)}
          />
          <Paragraph id="keyboardTitle">
            Klawiatura - możliwość obsługi strony tylko za pomocą klawiatury.
          </Paragraph>
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
          <Paragraph>
            Powinniśmy używać atrybutu tab-index do manualnego poruszania się po
            naszej stronie za pomocą klawiatury.
          </Paragraph>
          <Paragraph id="tabIndexHeader">
            Wartości jakie może przyjmować tab-index:
          </Paragraph>
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
          <Paragraph>
            Musimy wiedzieć, że jesteśmy w stanie przejść przez wszystkie
            istotne elementy na naszej stronie za pomocą klawiatury. Dla
            sprawdzenia najlepiej odłączyć myszkę i niech nie kusi.
          </Paragraph>
          <PrincipleTitle
            title="Wytyczna 2.2 – Wystarczająca ilość czasu"
            withButton={false}
            altLabel="Przejdź do przykładów nawigowalności!"
            onClick={linkTo(Principle.OPERABLE, Operable.ENOUGH_TIME)}
          />
          <Paragraph>
            Dajmy czas użytkownikowi na wykonanie akcji i przeczytanie
            zawartości, stopujmy animacje i w sumie tyle z najważniejszych
            rzeczy. Ma jakieś wyjątki ale nuda ogromna.
          </Paragraph>
          <PrincipleTitle
            title="Wytyczna 2.3 – Ataki padaczk"
            altLabel="Przejdź do przykładów ataków padaczki!"
            onClick={linkTo(Principle.OPERABLE, Operable.SEIZURES_AND_PHYSICAL)}
          />
          <Paragraph>
            Dosyć prosta sprawa. Nie napierdzielajmy wszędzie animacjami,
            zwłaszcza takimi gdzie pojawia się dużo błysków. Na przykładzie się
            bardziej wyklaruje XDe.
          </Paragraph>
          <PrincipleTitle
            title="Wytyczna 2.4 – Nawigowalność"
            altLabel="Przejdź do przykładów nawigowalności!"
            onClick={linkTo(Principle.OPERABLE, Operable.NAVIGABLE)}
          />
          <Paragraph>
            Odpowiednie tytułowanie stron/podstron. Pamiętajmy, że odpowiednie
            tytułowanie stron jest dobre dla czytników ekranowych oraz również
            dla SEO.
          </Paragraph>
          <Paragraph id="headlinesAndLabel">
            Nagłówki i labele powinny być odpowiednio opisywane. Tzn:
          </Paragraph>
          <List aria-labelledby="headlinesAndLabel">
            <ListItem>
              Tylko jeden nagłówek główny {"<h1></h1>"} dla strony internetowej
            </ListItem>
            <ListItem>
              Zachowanie hierarchi nagłówków tzn. nagłówki nadajemy począwszy od
              pierwszego `{"<h1> do <h6>"}`. ( W praktyce rzadko używa się
              nagłówków h5,h6). Nagłówki `{"<h2>-<h6>"}` możemy używać dowolną
              ilość razy, jednak musimy pamiętać aby nagłówki były pisane po
              kolei. Pamiętajmy też o sensownej treści dla nagłówków.
            </ListItem>
          </List>
          <Paragraph>
            Zapewnienie opisowych labeli jest bardzo ważne. Należy pamiętać, że
            pole {"<label>"} musi być zrozumiałe dla użytkownika. Opisanie /
            przedstawienie w polu label, że pole jest wymagane.
          </Paragraph>
          <Paragraph>
            Klasę css visuallyhidden można wykorzystywać do przedstawiania
            niewidocznego tekstu (który powinien być widoczny dla czytników
            ekranowych). Przydatne np. przy przyciskach z ikonami, które nie
            posiadają tekstu.
          </Paragraph>
          <Paragraph>
            Dobrą praktyką jest umieszczanie pola label nad polem input. Jest to
            przydatne gdy np. potrzebujemy powiększyć ekran (200%), wtedy na
            przybliżeniu mamy cały input wraz z tekstem.
          </Paragraph>
          <Paragraph>
            Mniej powszechna rozbieżność między etykietami a danymi wejściowymi
            może wystąpić, gdy grupa przycisków opcji jest skonfigurowana w celu
            uzyskania wyboru w całym zakresie. Etykiety mogą znajdować się tylko
            na każdym końcu zakresu lub mogą być przeplatane w różnych punktach
            zakresu.
          </Paragraph>
          <Paragraph>
            Ważnym elementem jest również pokazywanie w jaki sposób działa focus
            i gdzie się aktualnie znajduje.
          </Paragraph>
        </Article>
      </Main>
    </>
  );
};
