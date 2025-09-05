import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

import { MAX_PLAYING_TIME } from "../../constants/general.constants";

import { TimerWrapper, ClockContent } from "./timer.style";

export const Timer = ({ onFinish, resetKey = "initial", autoStart = true }) => {
	const [remaining, setRemaining] = useState(MAX_PLAYING_TIME);

	useEffect(() => {
		setRemaining(MAX_PLAYING_TIME);
	}, [resetKey]);

	useEffect(() => {
		if (!autoStart) return;

		const id = setInterval(() => {
			setRemaining(prev => {
				if (prev <= 1) {
					clearInterval(id);
					onFinish?.();
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(id);
	}, [autoStart, onFinish, remaining]);

	return (
		<TimerWrapper>
			<ClockContent key={String(resetKey)}>
				<Clock color="white" size={20} />
				<span>{remaining}s</span>
			</ClockContent>
		</TimerWrapper>
	);
};
