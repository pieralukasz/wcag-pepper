import React from "react";
import { Helmet } from "react-helmet";
import { Principle } from "../../types/Principle";
import { Typography, Container, Box, List, ListItem } from "@mui/material";

import { linkTo } from "@storybook/addon-links";
import { PrincipleTitle } from "../../components/PrincipleTitle/PrincipleTitle";
import { Headline } from "../../components/Headline/Headline";
import { BypassBlock } from "../../components/BypassBlock/BypassBlock";

import { Understandable } from "../../types/Understandable";

export const Introduction: React.VFC = () => {
  const title = `${Principle.UNDERSTANDABLE} | Introduction`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Container sx={{ marginTop: 2 }}>
        <Headline id="main-headline" title="Zasada 3 – Zrozumiałość" />
        <Typography sx={{ marginTop: 1 }}>
          Możliwość odczytania: Treść powinna być zrozumiała i możliwa do
          odczytania.
        </Typography>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Wytyczna 3.1 – Możliwość odczytania"
            altLabel="Przejdź do przykładów możliwości odczytania"
            onClick={linkTo(Principle.UNDERSTANDABLE, Understandable.READABLE)}
          />
          <Typography sx={{ marginTop: 1 }}>
            Zadbaj o to, aby informacje i obsługa interfejsu były zrozumiałe.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Musimy pamiętać o tym żeby zawsze uzupełniać atrybut lang na
            elemencie HTML z kilku powodów:
          </Typography>
          <List aria-label="Określenie języka dokumentu jest ważne z wielu powodów:">
            <ListItem>
              Pozwala to oprogramowaniu do tłumaczenia Braille'a zastępować kody
              kontrolne akcentowanymi znakami i wstawiać kody kontrolne
              niezbędne, aby zapobiec błędnemu tworzeniu się skurczów
              brajlowskich 2. stopnia.
            </ListItem>
            <ListItem>
              Syntezatory mowy obsługujące wiele języków będą mogły orientować
              się i dostosowywać do wymowy i składni charakterystycznej dla
              języka strony, wypowiadając tekst z odpowiednim akcentem i
              odpowiednią wymową.
            </ListItem>
            <ListItem>
              Oznaczenie języka może przynieść korzyści w przyszłości w zakresie
              rozwoju technologii, na przykład użytkownicy, którzy nie są w
              stanie tłumaczyć między językami, będą mogli korzystać z maszyn do
              tłumaczenia nieznanych języków.
            </ListItem>
            <ListItem>
              Oznaczenie języka może również pomóc agentom użytkownika w
              tworzeniu definicji za pomocą słownika.
            </ListItem>
          </List>
          <Typography sx={{ marginTop: 1 }}>
            Ludzki język każdego fragmentu lub frazy w treści może być
            programowo określony, z wyjątkiem odpowiednich nazw, terminów
            technicznych, słów w nieokreślonym języku oraz słów lub fraz, które
            stały się częścią języka miejscowego bezpośrednio otaczającego
            tekstu.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Nie twórzmy własnych skrótów klawiszowych, po co.
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Wytyczna 3.2 – Przewidywalność"
            withButton={false}
            altLabel="Przejdź do przykładów przewidywalności"
            onClick={linkTo(
              Principle.UNDERSTANDABLE,
              Understandable.PREDICTABLE
            )}
          />
          <Typography sx={{ marginTop: 1 }}>
            Twórz strony internetowe tak, aby otwierały się, wyglądały i
            działały w sposób przewidywalny.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Focus ma służyć tylko i wyłącznie do informowania użytkownika i
            zaznaczania części gdzie aktualnie się znajduje. Nie powinniśmy
            wykonywać żadnych akcji na focus. Celem tej techniki jest
            dostarczenie metody aktywacji rzeczy przewidywalnej przez
            użytkownika. Użytkownicy z zaburzeniami poznawczymi oraz osoby
            korzystające z czytników ekranu lub lup ekranowych mogą być
            zdezorientowane nieoczekiwanym zdarzeniem, takim jak automatyczne
            przesłanie formularza lub aktywacja funkcji, która powoduje zmianę
            kontekstu.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Powinniśmy posiadać zawsze taką samą nawigację na każdej stronie.
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Wytyczna 3.3 – Pomoc przy wprowadzaniu informacji"
            altLabel="Przejdź do przykładów pomocy przy wprowadzaniu informacji"
            onClick={linkTo(
              Principle.UNDERSTANDABLE,
              Understandable.INPUT_ASSISTANCE
            )}
          />
          <Typography sx={{ marginTop: 1 }}>
            Pomagaj użytkownikom unikać błędów i je korygować.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Głównie chodzi tutaj o formularze i walidację danych. Należy
            informować użytkownika gdy pole, które nie jest wypełnione należy
            wypełnić. Jest na to kilka technik czy wyświetlać w modalu, albo
            przeładowywać formularz z dokładnym opisem brakujących elementów ale
            moim zdaniem jest to kompletnie niepotrzebne i powinniśmy zadbać o
            to na poziomie wprowadzania danych i walidacji. np. jedną opcją jest
            uzupełnienie "title" w "head" o błędzie.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Najłatwiejszą opcją w przypadku formularzy w React jest zastosowanie
            zewnętrznych paczek. Po cholere pisać to wszystko samemu jak ktoś
            już zrobił. Np zastosowanie React Hook Form a wraz z nim
            aria-alertdialog. Celem tej techniki jest ostrzeżenie ludzi o
            wystąpieniu błędu wejściowego. Użycie role = „alertdialog” tworzy
            powiadomienie. Powiadomienie to powinno być modalne o następujących
            cechach:
          </Typography>
          <List>
            <ListItem>
              Atrybut aria-label lub aria-labelledby nadaje alertdialog dostępną
              nazwę.
            </ListItem>
            <ListItem>
              Użycie aria-described by albo visually hidden component do
              zapewnienia odniesienia do tekstu ostrzeżenia.
            </ListItem>
            <ListItem>
              Alertdialog zawiera co najmniej jedną kontrolkę, którą można
              ustawić, a fokus powinien przejść do tej kontroli po otwarciu
              alertdialog.
            </ListItem>
            <ListItem>
              Należy pamiętać, że alertdialog nie powinien być obecny w sposób
              umożliwiający dostęp do niego przez AT, dopóki nie będzie
              potrzebny.
            </ListItem>
          </List>
          <Typography sx={{ marginTop: 1 }}>
            Zapewnienie użytkownikowi możliwości przeglądania i poprawiania
            odpowiedzi przed przesłaniem oraz żadanie potwierdzenia aby
            kontynuować daną akcję.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
