// Templated, factually-grounded FAQ for each partner brand.
// Used both for the visible FAQ section (components/BrandPage.jsx) and the
// FAQPage JSON-LD (app/partners/[brand]/page.jsx) so the two never drift —
// Google requires schema FAQs to match on-page content.
export function buildBrandFaq(brand) {
  const name = brand.name;
  const range = (brand.badges && brand.badges.slice(0, 6).join(', ')) || brand.titleEm || 'industrial products';

  return [
    {
      q: `Is SSC Control an authorised distributor for ${name}?`,
      a: `Yes. SSC Control Pvt Ltd is an authorised channel partner and distributor for ${name}, supplying 100% genuine products with manufacturer warranty to OEMs, panel builders and end users across Ahmedabad, Vadodara (Baroda), Gujarat and India.`,
    },
    {
      q: `Which ${name} products does SSC Control supply?`,
      a: `SSC Control supplies the ${name} range, including ${range}.${brand.heroSub ? ' ' + brand.heroSub : ''}`,
    },
    {
      q: `Does SSC Control provide technical support for ${name} products?`,
      a: `Yes. SSC Control offers pre-sales consultation, product selection, competitive pricing and after-sales technical support for ${name}, backed by 60 years of engineering experience.`,
    },
    {
      q: `Where can I buy ${name} products in Gujarat?`,
      a: `SSC Control supplies ${name} from its Ahmedabad office and serves customers across Gujarat and India. Contact our sales team for pricing, stock availability and a quotation.`,
    },
  ];
}
