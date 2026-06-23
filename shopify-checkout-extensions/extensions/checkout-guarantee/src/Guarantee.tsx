import {
  reactExtension,
  View,
  InlineLayout,
  Icon,
  Text,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => (
  <Guarantee />
));

function Guarantee() {
  const translate = useTranslate();

  // Subtle gray bar with a shield/checkmark icon, matching the order summary.
  return (
    <View border="base" cornerRadius="base" padding="base">
      <InlineLayout
        columns={['auto', 'fill']}
        spacing="base"
        blockAlignment="center"
      >
        <Icon source="checkmark" />
        <Text emphasis="bold">{translate('guarantee')}</Text>
      </InlineLayout>
    </View>
  );
}
