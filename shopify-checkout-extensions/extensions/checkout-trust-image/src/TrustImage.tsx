import {
  reactExtension,
  View,
  Image,
  Link,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.actions.render-after', () => (
  <TrustImage />
));

function TrustImage() {
  const { image_url, image_link } = useSettings<{
    image_url?: string;
    image_link?: string;
  }>();

  // Nothing to show until a merchant pastes an image URL in the block settings.
  if (!image_url) return null;

  const image = (
    <Image
      source={image_url}
      cornerRadius="base"
      fit="cover"
      accessibilityDescription="30 Tage Geld-zurück-Garantie und tausende 5-Sterne-Bewertungen"
    />
  );

  return (
    <View padding={['base', 'none', 'none', 'none']}>
      {image_link ? <Link to={image_link}>{image}</Link> : image}
    </View>
  );
}
