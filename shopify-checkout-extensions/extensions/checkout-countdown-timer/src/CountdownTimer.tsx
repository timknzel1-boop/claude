import {
  reactExtension,
  Banner,
  Text,
  useTranslate,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';
import { useEffect, useState } from 'react';

// Renders wherever the merchant places the block in the Checkout editor.
export default reactExtension('purchase.checkout.block.render', () => (
  <CountdownTimer />
));

const DEFAULT_MINUTES = 6;

function CountdownTimer() {
  const translate = useTranslate();
  const { duration_minutes } = useSettings<{ duration_minutes?: number }>();

  // Duration comes from the extension setting; falls back to 6 minutes.
  const minutes =
    typeof duration_minutes === 'number' && duration_minutes > 0
      ? duration_minutes
      : DEFAULT_MINUTES;

  const [remaining, setRemaining] = useState(minutes * 60);

  useEffect(() => {
    const endsAt = Date.now() + minutes * 60 * 1000;
    const tick = () => {
      const secondsLeft = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
      setRemaining(secondsLeft);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [minutes]);

  const mm = Math.floor(remaining / 60);
  const ss = remaining % 60;
  const formatted = `${mm}:${ss.toString().padStart(2, '0')}`;

  // status="critical" gives the red banner styling.
  return (
    <Banner status="critical">
      <Text emphasis="bold">{translate('timer.label', { time: formatted })}</Text>
    </Banner>
  );
}
