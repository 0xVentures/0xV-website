// partner logos
const partners = new Map([
  [
    "Composable",
    {
      href: "https://www.composable.finance/",
      src: "assets/img/partners/partner_logo_composable.png",
      imgClass: "",
      eco: ["dotsama"],
    },
  ],
  [
    "Subsquid",
    {
      href: "https://www.subsquid.io/",
      src: "assets/img/partners/partner_logo_subsquid.png",
      imgClass: "",
      eco: ["dotsama"],
    },
  ],

  [
    "Metaprime",
    {
      href: "https://metaprime.network/",
      src: "assets/img/partners/partner_logo_metaprime.png",
      imgClass: "",
      eco: ["dotsama"],
    },
  ],
  // [
  //   "Bribe",
  //   {
  //     href: "https://www.bribe.xyz/",
  //     src: "assets/img/partners/partner_logo_bribe.png",
  //     imgClass: "",
  //     eco: ["dotsama"],
  //   },
  // ],
  [
    "Taiga",
    {
      href: "https://taigaprotocol.io/",
      src: "assets/img/partners/partner_logo_taiga.png",
      imgClass: "",
      eco: ["dotsama"],
    },
  ],
  [
    "Tapio",
    {
      href: "https://taigaprotocol.io/",
      src: "assets/img/partners/partner_logo_tapio.png",
      imgClass: "",
      eco: ["dotsama"],
    },
  ],
  [
    "Exiled Racers",
    {
      href: "https://www.exiledracers.com/",
      src: "assets/img/partners/partner_logo_exr.png",
      imgClass: "",
      eco: ["dotsama"],
    },
  ],
  [
    "Algomint",
    {
      href: "https://www.algomint.io/",
      src: "assets/img/partners/partner_logo_algomint.png",
      imgClass: "",
      eco: ["algorand"],
    },
  ],
  [
    "Algopulse",
    {
      href: "https://www.algopulse.io/",
      src: "assets/img/partners/partner_logo_algopulse.png",
      imgClass: "",
      eco: ["algorand"],
    },
  ],
  [
    "Folks Finance",
    {
      href: "https://folks.finance/",
      src: "assets/img/partners/partner_logo_folksfinance.png",
      imgClass: "",
      eco: ["algorand"],
    },
  ],
  [
    "Exa",
    {
      href: "https://www.exa.finance/",
      src: "assets/img/partners/partner_logo_exa.png",
      imgClass: "",
      eco: ["algorand"],
    },
  ],
  [
    "Pact",
    {
      href: "https://www.pact.fi/",
      src: "assets/img/partners/partner_logo_pact.png",
      imgClass: "",
      eco: ["algorand"],
    },
  ],
  [
    "xdefi",
    {
      href: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
      src: "assets/img/partners/partner_logo_xdefi.png",
      imgClass: "",
      eco: ["thorchain", "ethereum", "terra"],
    },
  ],
  [
    "Thorchain",
    {
      href: "https://thorchain.org/",
      src: "assets/img/partners/partner_logo_thorchain.png",
      imgClass: "",
      eco: ["thorchain"],
    },
  ],
  [
    "Thorswap",
    {
      href: "https://thorswap.finance/",
      src: "assets/img/partners/partner_logo_thorswap.png",
      imgClass: "",
      eco: ["thorchain"],
    },
  ],
  // [
  //   "Thoryield",
  //   {
  //     href: "https://thoryield.com/",
  //     src: "assets/img/partners/partner_logo_thoryield.png",
  //     imgClass: "",
  //     eco: ["thorchain"],
  //   },
  // ],
  // [
  //   "Thorchads",
  //   {
  //     href: "https://thorchads.com/",
  //     src: "assets/img/partners/partner_logo_thorchads.png",
  //     imgClass: "",
  //     eco: ["thorchain"],
  //   },
  // ],
  // [
  //   "LP University",
  //   {
  //     href: "https://liquidityprovider.university/",
  //     src: "assets/img/partners/partner_logo_lp_university.png",
  //     imgClass: "",
  //     eco: ["thorchain"],
  //   },
  // ],

  [
    "Incept",
    {
      href: "https://incept.so/",
      src: "assets/img/partners/partner_logo_incept.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],
  [
    "Cyclos",
    {
      href: "https://cyclos.io/",
      src: "assets/img/partners/partner_logo_cyclos.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],

  [
    "Synchrony",
    {
      href: "https://synchrony.fi",
      src: "assets/img/partners/partner_logo_synchrony.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],
  [
    "Symmetry",
    {
      href: "https://symmetry.fi/",
      src: "assets/img/partners/partner_logo_symmetry.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],
  [
    "The Boring Protocol",
    {
      href: "https://boringprotocol.io/",
      src: "assets/img/partners/partner_logo_boring.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],

  [
    "Phantasia",
    {
      href: "https://phantasia.app/",
      src: "assets/img/partners/partner_logo_phantasia.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],
  [
    "allart",
    {
      href: "https://all.art/",
      src: "assets/img/partners/partner_logo_allart.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],
  [
    "Bridgesplit",
    {
      href: "https://www.bridgesplit.com/",
      src: "assets/img/partners/partner_logo_bridgesplit.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],
  // [
  //   "Blue Terra",
  //   {
  //     href: "https://blueterra.land/",
  //     src: "assets/img/partners/partner_logo_blueterra.png",
  //     imgClass: "",
  //     eco: ["solana"],
  //   },
  // ],
  [
    "Orion",
    {
      href: "https://orion.money/",
      src: "assets/img/partners/partner_logo_orion.png",
      imgClass: "",
      eco: ["terra"],
    },
  ],
  [
    "White Whale",
    {
      href: "https://whitewhale.finance/",
      src: "assets/img/partners/partner_logo_white_whale.png",
      imgClass: "",
      eco: ["terra"],
    },
  ],
  [
    "Levana",
    {
      href: "https://levana.finance",
      src: "assets/img/partners/partner_logo_levana.png",
      imgClass: "",
      eco: ["terra"],
    },
  ],

  [
    "Valkyrie",
    {
      href: "https://valkyrieprotocol.com/",
      src: "assets/img/partners/partner_logo_valkyrie.png",
      imgClass: "",
      eco: ["terra"],
    },
  ],
  [
    "Y Foundry Dao",
    {
      href: "https://yfoundry.io/",
      src: "assets/img/partners/partner_logo_yfd.png",
      imgClass: "",
      eco: ["terra"],
    },
  ],
  [
    "tiiik",
    {
      href: "https://www.tiiik.money/",
      src: "assets/img/partners/partner_logo_tiiik.png",
      imgClass: "",
      eco: ["terra"],
    },
  ],
  [
    "Shade",
    {
      href: "https://shadeprotocol.io/",
      src: "assets/img/partners/partner_logo_shade.png",
      imgClass: "",
      eco: ["secret"],
    },
  ],

  [
    "Platypus",
    {
      href: "https://platypus.finance/",
      src: "assets/img/partners/partner_logo_platypus.png",
      imgClass: "",
      eco: ["avax"],
    },
  ],
  [
    "Mavia",
    {
      href: "https://www.mavia.com/",
      src: "assets/img/partners/partner_logo_mavia.png",
      imgClass: "",
      eco: ["ethereum", "arbitrum"],
    },
  ],
  [
    "Perion",
    {
      href: "https://perion.gg/",
      src: "assets/img/partners/partner_logo_perion.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],

  [
    "ASM",
    {
      href: "https://www.alteredstatemachine.xyz",
      src: "assets/img/partners/partner_logo_asm.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],

  [
    "dHEDGE",
    {
      href: "https://www.dhedge.org/",
      src: "assets/img/partners/partner_logo_dhegde.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],

  [
    "Silo",
    {
      href: "https://www.silo.finance/",
      src: "assets/img/partners/partner_logo_silo.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],
  [
    "Optyfi",
    {
      href: "https://opty.fi/",
      src: "assets/img/partners/partner_logo_optyfi.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],

  [
    "Index Zoo",
    {
      href: "https://www.indexzoo.com/",
      src: "assets/img/partners/partner_logo_zoo.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],

  [
    "Sinple Finance",
    {
      href: "https://singlefinance.io/",
      src: "assets/img/partners/partner_logo_single_finance.png",
      imgClass: "",
      eco: ["ethereum", "avalanche"],
    },
  ],

  // [
  //   "Ratio",
  //   {
  //     href: "https://ratio.finance/",
  //     src: "assets/img/partners/partner_logo_ratio.png",
  //     imgClass: "",
  //     eco: ["solana"],
  //   },
  // ],

  // [
  //   "New Order",
  //   {
  //     href: "https://www.neworder.network/",
  //     src: "assets/img/partners/partner_logo_neworder.png",
  //     imgClass: "",
  //     eco: ["ethereum"],
  //   },
  // ],

  // [
  //   "Lunaverse",
  //   {
  //     href: "https://lunaverse.io/",
  //     src: "assets/img/partners/partner_logo_lunaverse.png",
  //     imgClass: "",
  //     eco: ["terra"],
  //   },
  // ],

  // [
  //   "Infinity Skies",
  //   {
  //     href: "https://infinityskies.io/",
  //     src: "assets/img/partners/partner_logo_infinityskies.png",
  //     imgClass: "partner-logos__item--heigh",
  //     eco: ["ethereum"],
  //   },
  // ],
]);

export default partners;
