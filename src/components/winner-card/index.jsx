import { WinnerCardWrapper } from "./winner-card.style";
import { Circle, PartyPopper } from "lucide-react";
export const WinnerCard = () => {
  return (
    <WinnerCardWrapper>
      <Circle size={80} color="white" />
      <span>
      <PartyPopper />Vencedor </span>
    </WinnerCardWrapper>
  );
};
