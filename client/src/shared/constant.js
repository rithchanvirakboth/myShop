import nikeLogo from "../components/assets/Brands/Nike-Logo.png";
import dhlLogo from "../components/assets/Brands/DHL-Logo.png";
import feDexLogo from "../components/assets/Brands/Fedex-logo.png";
import adidasLogo from "../components/assets/Brands/Adidas-Logo.png";
import PumaLogo from "../components/assets/Brands/Puma-Logo.png";
import GucciLogo from "../components/assets/Brands/Gucci-Logo.png";
import reebokLogo from "../components/assets/Brands/Reebok-Logo.png";
import underArmourLogo from "../components/assets/Brands/Under-Armour-Logo.png";
import versaceLogo from "../components/assets/Brands/Versace-Logo.png";
import hugoBossLogo from "../components/assets/Brands/Hugo-Boss-Logo.png";
import armaniLogo from "../components/assets/Brands/Armani-Logo.png";
import burberryLogo from "../components/assets/Brands/Burberry-Logo.png";
import chanelLogo from "../components/assets/Brands/Chanel-Logo.png";
import leviLogo from "../components/assets/Brands/Levi-Logo.png";
import lacosteLogo from "../components/assets/Brands/Lacoste-Logo.png";
import fendiLogo from "../components/assets/Brands/Fendi-Logo.png";
import calvinKleinLogo from "../components/assets/Brands/Calvin-Klein-Logo.png";
import louisVuittonLogo from "../components/assets/Brands/Louis-Vuitton-Logo.png";
import zaraLogo from "../components/assets/Brands/Zara-Logo.png";
import vansLogo from "../components/assets/Brands/Vans-Logo.png";
import converseLogo from "../components/assets/Brands/Converse-Logo.png";
import newBalanceLogo from "../components/assets/Brands/New-Balance-Logo.png";
import diorLogo from "../components/assets/Brands/Dior-Logo.png";
import hermesLogo from "../components/assets/Brands/Hermes-Logo.png";
import ralphLaurenLogo from "../components/assets/Brands/Ralph-Lauren-Logo.png";
import pradaLogo from "../components/assets/Brands/Prada-Logo.png";
import tommyHilfigerLogo from "../components/assets/Brands/Tommy-Hilfiger-Logo.png";
import hmLogo from "../components/assets/Brands/H&M-Logo.png";
import uniqloLogo from "../components/assets/Brands/Uniqlo-Logo.png";
import gapLogo from "../components/assets/Brands/Gap-Logo.png";
import forever21Logo from "../components/assets/Brands/Forever-21-Logo.png";
import balenciagaLogo from "../components/assets/Brands/Balenciaga-Logo.png";
import fbtLogo from "../components/assets/Brands/FBT-Logo.png";
import timerlandLogo from "../components/assets/Brands/Timberland-Logo.png";
import filaLogo from "../components/assets/Brands/Fila-Logo.png";
import givenchyLogo from "../components/assets/Brands/Givenchy-Logo.png";

const EXCLUSIVE = "EXCLUSIVE";
const NON_EXCLUSIVE = "NON_EXCLUSIVE";
const SEE_ALL = "SEE_ALL";

export const PROFILE_DROPDOWN_MENU = {
  PROFILE: {
    NAME: "PROFILE",
    LINK: "/profile",
  },
  PURCHASE_HISTORY: {
    NAME: "PURCHASE HISTORY",
    LINK: "/purchase-history",
  },
  SHIPPING_ADDRESS: {
    NAME: "SHIPPING & ADDRESS",
    LINK: "/shipping&address",
  },
  WISHLIST: {
    NAME: "WISH LIST",
    LINK: "/wishlist",
  },
  ORDER_AND_DELIERY: {
    NAME: "ORDER & DELIERY",
    LINK: "/order-delivery",
  },
  PAYMENT_AND_PRICING: {
    NAME: "PAYMENT & PRICING",
    LINK: "/payment-and-pricing",
  },
  RETURN_AND_REFUND: {
    NAME: "RETURN & REFUND",
    LINK: "/return-and-refund",
  },
  SETTING: {
    NAME: "SETTING",
    LINK: "/setting",
  },
  ADMIN_CONSOLE: {
    NAME: "ADMIN CONSOLE",
    LINK: "/admin-console",
  },
  DIVIDER: {
    CLASSNAME: "dropdown-divider",
  },
  LOGOUT: {
    NAME: "LOGOUT",
    LINK: "/logout",
  },
};

export const NAVBAR_MENU = {
  HOME: {
    NAME: "HOME",
    LINK: "/",
  },
  OUR_STORE: {
    NAME: "OUR STORE",
    LINK: "/our-store",
  },
  ABOUT_US: {
    NAME: "ABOUT US",
    LINK: "/about",
  },
  CONTACT_US: {
    NAME: "CONTACT US",
    LINK: "/contact",
  },
  NEWS: {
    NAME: "NEWS",
    LINK: "/news",
  },
};

export const FOOTER_CONTACT = {
  TITLE: {
    NAME: "CONTAC US",
  },

  ADDRESS: {
    NAME: "ADDRESS",
    TEXT: "No. 123, Street 456, Sangkat Phnom Penh, Khan Phnom Penh, Phnom Penh, Cambodia.",
    LINK: "https://goo.gl/maps/VLpkzvDH3ahLSxqV8",
  },

  PHONE: {
    NAME: "PHONE NUMBER",
    TEXT: "+855 12 345 678",
  },

  EMAIL: {
    NAME: "EMAIL",
    TEXT: "rithboth0@gmail.com",
  },
  SOCIAL_MEDIA: {
    NAME: "SOCIAL MEDIA",
    FACEBOOK: {
      ICON: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-facebook icons-social-media"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
      ),
      LINK: "https://www.facebook.com/",
    },
    TWITTER: {
      ICON: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-twitter icons-social-media"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      ),
      LINK: "https://twitter.com/",
    },
    INSTAGRAM: {
      ICON: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-instagram icons-social-media"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      ),
      LINK: "https://www.instagram.com/",
    },
    PINTEREST: {
      ICON: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-pinterest icons-social-media"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
        </svg>
      ),
      LINK: "https://www.pinterest.com/",
    },
  },
};

export const FOOTER_CONTENT = {
  ABOUT: {
    TITLE: "About",
    LINK: "/about",
  },
  CAREER: {
    TITLE: "Career",
    LINK: "/career",
  },
  POLICY_AND_PRIVACY: {
    TITLE: "Policy & Privacy",
    LINK: "/policy-and-privacy",
  },
  TERMS_AND_CONDITIONS: {
    TITLE: "Terms Conditions",
    LINK: "/terms-and-conditions",
  },
  HELP_CENTER: {
    TITLE: "Help Center",
    LINK: "/help-center",
  },
  CONTACT_US: {
    TITLE: "Contact",
    LINK: "/contact",
  },
};

export const OUR_PARTNERSHIPS = [
  {
    TYPE: EXCLUSIVE,
    NAME: "DHL",
    LOGO: dhlLogo,
    DESC: "DHL is the global market leader in the logistics industry that expertise in international parcel and rail transportation services to its customers.",
    CLASSNAME: "img-icons-md",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "FEDEX",
    LOGO: feDexLogo,
    DESC: "FedEx connects people and possibilities through our worldwide portfolio of shipping, transportation, e-commerce and business services. ",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "NIKE",
    LOGO: nikeLogo,
    DESC: "Nike is the world's leading innovator in athletic footwear, apparel, equipment and accessories. ",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "ADIDAS",
    LOGO: adidasLogo,
    DESC: "Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "PUMA",
    LOGO: PumaLogo,
    DESC: "PUMA is one of the world’s leading sports brands, designing, developing, selling and marketing footwear, apparel and accessories.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "REEBOK",
    LOGO: reebokLogo,
    DESC: "Reebok is an American-inspired global brand with a deep fitness heritage and a clear mission: To be the best fitness brand in the world.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "UNDER ARMOUR",
    LOGO: underArmourLogo,
    DESC: "Under Armour, Inc. is an American sports equipment company that manufactures footwear, sports and casual apparel.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "GUCCI",
    LOGO: GucciLogo,
    DESC: "Gucci is a luxury brand of fashion house that produce lines include handbags, ready-to-wear, shoes and accessories, makeup, fragrances, and home decoration.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "VERSACE",
    LOGO: versaceLogo,
    DESC: "Versace is an Italian luxury fashion company and trade name founded by Gianni Versace in 1978.",
    CLASSNAME: "img-icons-md",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "ARMANI",
    LOGO: armaniLogo,
    DESC: "Giorgio Armani S.p.A. is an Italian luxury fashion house which designs and distributes couture, ready-to-wear, leather goods, shoes, watches, jewelry and accessories",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "HUGO BOSS",
    LOGO: hugoBossLogo,
    DESC: "Hugo Boss is a German luxury fashion house headquartered in Metzingen, Baden-Württemberg. ",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "BURBERRY",
    LOGO: burberryLogo,
    DESC: "Burberry Group is a British luxury fashion house headquartered in London, England. It currently designs and distributes ready to wear.",
    CLASSNAME: "img-icons-md",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "CALVIN KLEIN",
    LOGO: calvinKleinLogo,
    DESC: "Calvin Klein Inc. is an American fashion house established in 1968. It specializes in leather, lifestyle accessories, home furnishings, perfumery, etc.",
    CLASSNAME: "img-icons-md",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "CHANEL",
    LOGO: chanelLogo,
    DESC: "Chanel is a French luxury fashion house by Coco Chanel in Paris and privately owned by the Wertheimer family and has been headquartered in London.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "DIOR",
    LOGO: diorLogo,
    DESC: "Christian Dior SE, commonly known as Dior, is a French luxury company controlled by French businessman Bernard Arnault, who is the world's largest luxury group.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "FENDI",
    LOGO: fendiLogo,
    DESC: "Fendi is an Italian luxury fashion house producing fur, ready-to-wear, leather goods, shoes, fragrances, eyewear, timepieces and accessories.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "HERMES",
    LOGO: hermesLogo,
    DESC: "Hermès S.A., or simply Hermès, is a French high fashion luxury goods manufacturer established in 1837. It specializes in leather, lifestyle accessories",
    CLASSNAME: "img-icons-md",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "LOUIS VUITTON",
    LOGO: louisVuittonLogo,
    DESC: "Louis Vuitton, commonly known as Louis Vuitton or shortened to LV, is a French fashion house and luxury goods company founded in 1854 by Louis Vuitton.",
    CLASSNAME: "img-icons-md",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "PRADA",
    LOGO: pradaLogo,
    DESC: "Prada S.p.A. is an Italian luxury fashion house that was founded in 1913 by Mario Prada. It specializes in leather handbags, ready-to-wear, perfumes and accessories.",
    CLASSNAME: "img-icons-md",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "RALPH LAUREN",
    LOGO: ralphLaurenLogo,
    DESC: "Ralph Lauren is an American fashion company producing products ranging from the mid-range to the luxury segments.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "TOMMY HILFIGER",
    LOGO: tommyHilfigerLogo,
    DESC: "Tommy Hilfiger Inc., is an American premium clothing company, manufacturing apparel, footwear, accessories, fragrances and home furnishings.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "Levi's",
    LOGO: leviLogo,
    DESC: "Levi's is an American clothing company known worldwide for its Levi's brand of denim jeans",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "ZARA",
    LOGO: zaraLogo,
    DESC: "Zara SA is a Spanish company specializes in fast fashion, and products include clothing, accessories, shoes, swimwear, beauty, and perfumes.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "H&M",
    LOGO: hmLogo,
    DESC: "H&M is a multinational clothing company based in Sweden that focuses on fast-fashion clothing for men, women, teenagers, and children.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: EXCLUSIVE,
    NAME: "UNIQLO",
    LOGO: uniqloLogo,
    DESC: "Uniqlo Co., Ltd. is a Japanese casual wear designer, manufacturer and retailer. Uniqlo operates in Japan and several other countries.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "GAP",
    LOGO: gapLogo,
    DESC: "The Gap, Inc., commonly known as Gap Inc. or Gap, is an American worldwide clothing and accessories retailer.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "LA COSTE",
    LOGO: lacosteLogo,
    DESC: "Lacoste is a French clothing company by tennis player René Lacoste and André Gillier. It sells clothing, footwear, sportswear, perfume, towels and watches.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "FOREVER 21",
    LOGO: forever21Logo,
    DESC: "Forever 21, stylized as FOREVER 21, is an American fast fashion retailer headquartered in Los Angeles, California.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "FBT",
    LOGO: fbtLogo,
    DESC: "FBT is a Thai sportswear company. It is the largest sportswear company in Thailand, with a 50% market share.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "BALENCIAGA",
    LOGO: balenciagaLogo,
    DESC: "Balenciaga produces ready-to-wear footwear, handbags, and accessories, and licenses its name and branding to Coty for fragrances.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "NEW BALANCE",
    LOGO: newBalanceLogo,
    DESC: "New Balance Athletics, Inc is an American multinational corporation based in the Boston, Massachusetts area.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "CONVERSE",
    LOGO: converseLogo,
    DESC: "Converse is an American shoe company that primarily produces skating shoes and lifestyle brand footwear and apparel.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "VANS",
    LOGO: vansLogo,
    DESC: "Vans is an American manufacturer of skateboarding shoes and related apparel, based in Santa Ana, California and owned by VF Corporation.",
    CLASSNAME: "img-icons-sm",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "TIMBERLAND",
    LOGO: timerlandLogo,
    DESC: "Timberland LLC is an American manufacturer and retailer of outdoors wear, with a focus on footwear. It is owned by VF Corporation.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "FILA",
    LOGO: filaLogo,
    DESC: "Fila, Inc. is a South Korean sporting goods company. It is one of the world's largest sportswear manufacturers.",
    CLASSNAME: "img-icons-xs",
  },
  {
    TYPE: NON_EXCLUSIVE,
    NAME: "Givenchy",
    LOGO: givenchyLogo,
    DESC: "Givenchy is a French luxury fashion and perfume house. It hosts the brand of haute couture clothing, accessories and Parfums Givenchy.",
    CLASSNAME: "img-icons-sm",
  },
];

export const HELP_CENTER_FAQ = [
  {
    QUESTION: "How do I place an order?",
    ANSWER:
      "<span>To place an order:</span><br> 1. Add at least one item to your cart. <br> 2. Proceed to checkout. <br> 3. Enter your shipping address. <br> 4. Choose a payment method. <br> 5. Review and place your order.",
    ID: "flush-headingOne",
    TARGET: "#flush-collapseOne",
    ARIA_CONTROLS: "flush-collapseOne",
  },
  {
    QUESTION: "How do i return my product?",
    ANSWER:
      "<span>To return a product:</span><br> 1. Go to your orders. <br> 2. Click on the order you wish to return. <br> 3. Click Return a product. <br> 4. Select your reason for returning the product. <br> 5. Confirm your return.",
    ID: "flush-headingTwo",
    TARGET: "#flush-collapseTwo",
    ARIA_CONTROLS: "flush-collapseTwo",
  },
  {
    QUESTION: "How do i track my order?",
    ANSWER:
      "To track your order: <br> 1. Go to your <strong>Track order</strong>. <br> 2. Click Track Package next to the order you want to track. <br> 3. You can see the shipping status of your order and the estimated delivery date. <br> 4. If tracking is available, you can track your package via the Your Orders page.",
    ID: "flush-headingThree",
    TARGET: "#flush-collapseThree",
    ARIA_CONTROLS: "flush-collapseThree",
  },
  {
    QUESTION: "How do i cancel my order?",
    ANSWER:
      "<span> To cancel an order:</span><br> 1. Go to Your Orders. <br> 2. Click Cancel Items. <br> 3. Select the items you want to cancel. <br> 4. Click Cancel checked items when finished.",
    ID: "flush-headingFour",
    TARGET: "#flush-collapseFour",
    ARIA_CONTROLS: "flush-collapseFour",
  },
  {
    QUESTION: "How do i reset my password?",
    ANSWER:
      "<span>To reset password:</span><br> 1. Click on the profile icons on the top right corner of the page. <br> 2. Click on the <strong>Settings</strong> <br> 3. Click on the <strong>Reset Password</strong><br> 4. Enter your email address and click <strong>Send Email</strong> <br> 5. Check your email and click on the link provided to reset your password.",
    ID: "flush-headingFive",
    TARGET: "#flush-collapseFive",
    ARIA_CONTROLS: "flush-collapseFive",
  },
  {
    QUESTION: "How do i change email address?",
    ANSWER:
      "<span>To change email address: <span><br> 1. Click on the profile icons on the top right corner of the page. <br> 2. Click on the <strong>Settings</strong> <br> 3. Click on the <strong>Change Email</strong><br> 4. Enter old email address so we can send you a link to change your email address. <br> 5. Check your email and click on the link provided to change your email address.",
    ID: "flush-headingSix",
    TARGET: "#flush-collapseSix",
    ARIA_CONTROLS: "flush-collapseSix",
  },
  {
    QUESTION: "How do i change my account password?",
    ANSWER:
      "<span>To change password:</span><br> 1. Click on the profile icons on the top right corner of the page. <br> 2. Click on the <strong>Settings</strong> <br> 3. Click on the <strong>Change Password</strong><br> 4. Enter old password and new password and confirmation password. <br> 5. Click <strong>Save</strong> to save your new password.",
    ID: "flush-headingSeven",
    TARGET: "#flush-collapseSeven",
    ARIA_CONTROLS: "flush-collapseSeven",
  },
  {
    QUESTION: "How do i create an account?",
    ANSWER:
      "<span>In landing page, click on the <strong>Sign Up</strong> button on the top right corner of the page. <br> Fill in your details and click <strong>Sign Up</strong> to create an account.",
    ID: "flush-headingEight",
    TARGET: "#flush-collapseEight",
    ARIA_CONTROLS: "flush-collapseEight",
  },
  {
    QUESTION: "Why can't i find my order?",
    ANSWER:
      "To find your order, first make sure you purchased your order from our website. If you purchased your order from our website, make sure you are logged in to your account. If you are logged in to your account, click on the profile icons on the top right corner of the page. Click on <strong>Orders</strong> to view your orders.<br> If you still have trouble finding your order, please contact our customer service.",
    ID: "flush-headingNine",
    TARGET: "#flush-collapseNine",
    ARIA_CONTROLS: "flush-collapseNine",
  },
  {
    QUESTION: "What are the terms and conditions?",
    ANSWER:
      "Terms and conditions are the legal agreements between a our service provider and customers that define the use of the service. <br> To view our terms and conditions, click <a href='http://localhost:3000/terms-and-conditions' target='_blank'>here</a>.",
    ID: "flush-headingTen",
    TARGET: "#flush-collapseTen",
    ARIA_CONTROLS: "flush-collapseTen",
  },
  {
    QUESTION: "What are the shipping options?",
    ANSWER:
      "In our shop, we offer free shipping for orders above 200$. For orders below 200$, we charge a shipping fee of 10$. Our shipping options are standard shipping and express shipping by DHL and FedEx.",
    ID: "flush-headingEleven",
    TARGET: "#flush-collapseEleven",
    ARIA_CONTROLS: "flush-collapseEleven",
  },
  {
    QUESTION: "What are the payment options?",
    ANSWER:
      "In our shop, we offer payment options such as credit card, debit card, PayPal, and bank transfer. We accept Visa, MasterCard, American Express, and Discover cards",
    ID: "flush-headingTwelve",
    TARGET: "#flush-collapseTwelve",
    ARIA_CONTROLS: "flush-collapseTwelve",
  },
];

export const MENU_SECTION = [
  {
    TITLE: "Home",
    LINK: "/",
    IMAGE: "",
    DESC: "Hi, I'm a description",
    DISCOUNT: true,
    DISCOUNT_PRICE: "20% OFF",
    PRICE: "10$",
  },
  {
    TITLE: "Home",
    LINK: "/",
    IMAGE: "",
    DESC: "Hi, I'm a description",
    DISCOUNT: true,
    DISCOUNT_PRICE: "20% OFF",
    PRICE: "10$",
  },
  {
    TITLE: "Home",
    LINK: "/",
    IMAGE: "",
    DESC: "",
    DISCOUNT: true,
    DISCOUNT_PRICE: "20% OFF",
    PRICE: "",
  },
  {
    TITLE: "Home",
    LINK: "/",
    IMAGE: "",
    DESC: "",
    DISCOUNT: false,
    DISCOUNT_PRICE: "",
    PRICE: "",
  },
  {
    TITLE: "Home",
    LINK: "/",
    IMAGE: "",
    DESC: "",
    DISCOUNT: false,
    DISCOUNT_PRICE: "",
    PRICE: "",
  },
  {
    TITLE: "Home",
    LINK: "/",
    IMAGE: "",
    DESC: "",
    DISCOUNT: false,
    DISCOUNT_PRICE: "",
    PRICE: "",
  },
  {
    TITLE: "See All",
    LINK: "/",
    TYPE: SEE_ALL,
  },
];
