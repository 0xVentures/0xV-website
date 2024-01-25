// partner logos
const partners = new Map([
  [
    "Sui",
    {
      href: "https://sui.io/",
      src: "assets/img/partners/partner_logo_sui.png",
      imgClass: "",
      eco: ["sui"],
    },
  ],
  [
    "AfterMath",
    {
      href: "https://aftermath.finance/",
      src: "assets/img/partners/partner_logo_af.png",
      imgClass: "",
      eco: ["sui"],
    },
  ],
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

  [
    "Taiga",
    {
      href: "https://taigaprotocol.io/",
      src: "assets/img/partners/partner_logo_taiga.png",
      imgClass: "",
      eco: ["dotsama"],
    },
  ],
  // [
  //   "Tapio",
  //   {
  //     href: "https://taigaprotocol.io/",
  //     src: "assets/img/partners/partner_logo_tapio.png",
  //     imgClass: "",
  //     eco: ["dotsama"],
  //   },
  // ],
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
    "xBacked",
    {
      href: "https://www.xbacked.io/",
      src: "assets/img/partners/partner_logo_xbacked.png",
      imgClass: "",
      eco: ["algorand"],
    },
  ],
  [
    "xdefi",
    {
      href: "https://www.xdefi.io/",
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

  [
    "Bridgesplit",
    {
      href: "https://www.bridgesplit.com/",
      src: "assets/img/partners/partner_logo_bridgesplit.png",
      imgClass: "",
      eco: ["solana"],
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
    "Saga",
    {
      href: "https://www.saga.xyz/",
      src: "assets/img/partners/partner_logo_saga.png",
      imgClass: "",
      eco: ["ibc"],
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
    "ZKX",
    {
      href: "https://zkx.fi/",
      src: "assets/img/partners/partner_logo_zkx.png",
      imgClass: "",
      eco: ["starkware"],
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
    "Alluo",
    {
      href: "https://www.alluo.com/",
      src: "assets/img/partners/partner_logo_alluo.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],
  [
    "Tapioca DAO",
    {
      href: "https://tapioca.loan/",
      src: "assets/img/partners/partner_logo_tapioca.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],
  [
    "Sentiment",
    {
      href: "https://www.sentiment.xyz/",
      src: "assets/img/partners/partner_logo_sentiment.png",
      imgClass: "",
      eco: ["ethereum"],
    },
  ],
  [
    "Astrolab",
    {
      href: "https://astrolab.fi/",
      src: "assets/img/partners/partner_logo_astrolab.png",
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

  // [
  //   "Single Finance",
  //   {
  //     href: "https://singlefinance.io/",
  //     src: "assets/img/partners/partner_logo_single_finance.png",
  //     imgClass: "",
  //     eco: ["ethereum", "avalanche"],
  //   },
  // ],
  [
    "Endemic",
    {
      href: "https://endemic.app/",
      src: "assets/img/partners/partner_logo_endemic.png",
      imgClass: "",
      eco: ["aurora", "near"],
    },
  ],

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
  // [
  //   "Levana",
  //   {
  //     href: "https://levana.finance",
  //     src: "assets/img/partners/partner_logo_levana.png",
  //     imgClass: "",
  //     eco: ["terra"],
  //   },
  // ],

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
    "allart",
    {
      href: "https://all.art/",
      src: "assets/img/partners/partner_logo_allart.png",
      imgClass: "",
      eco: ["solana"],
    },
  ],
]);

export default partners;
