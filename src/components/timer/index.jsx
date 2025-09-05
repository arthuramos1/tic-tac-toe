import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Clock } from "lucide-react";

import { MAX_PLAYING_TIME } from "../../constants/general.constants";
import { TimerWrapper, ClockContent } from "./timer.style";

export const Timer = ({ onFinish, resetKey }) => {
	const [remaining, setRemaining] = useState(MAX_PLAYING_TIME);

	useEffect(() => {
		setRemaining(MAX_PLAYING_TIME);
	}, [resetKey]);

	useEffect(() => {
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
	}, [onFinish]);

	return (
		<TimerWrapper>
			<ClockContent key={String(resetKey)}>
				<Clock color="white" size={20} />
				<span>{remaining}s</span>
			</ClockContent>
		</TimerWrapper>
	);
};

Timer.propTypes = {
	onFinish: PropTypes.func.isRequired,
	resetKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
