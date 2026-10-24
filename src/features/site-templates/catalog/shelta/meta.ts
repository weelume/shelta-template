import type {SiteTemplate} from '../../types';export const sheltaTemplate:SiteTemplate={...{
  "id": "shelta",
"gitUrl":"https://github.com/weelume/shelta-template",
  "name": "Shelta · 现代房产顾问",
  "localizedNames": {
    "en": "Shelta · Modern Real Estate"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "房产",
    "现代建筑",
    "双语",
    "PC / iPad / H5"
  ],
  "summary": "包含 8 个房源、12 篇置业文章、服务流程、顾问团队、联系与政策的现代房产网站。",
  "accentColor": "#426072",
  "cover": "/templates/shelta/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/shelta/screenshots/desktop-home.webp",
      "alt": "Shelta desktop home",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/shelta/screenshots/desktop-service.webp",
      "alt": "Shelta desktop service",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/shelta/screenshots/desktop-blog.webp",
      "alt": "Shelta desktop blog",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/shelta/screenshots/desktop-contact.webp",
      "alt": "Shelta desktop contact",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/shelta/screenshots/tablet-home.webp",
      "alt": "Shelta tablet home",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/shelta/screenshots/tablet-service.webp",
      "alt": "Shelta tablet service",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/shelta/screenshots/tablet-blog.webp",
      "alt": "Shelta tablet blog",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/shelta/screenshots/tablet-contact.webp",
      "alt": "Shelta tablet contact",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/shelta/screenshots/mobile-home.webp",
      "alt": "Shelta mobile home",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/shelta/screenshots/mobile-service.webp",
      "alt": "Shelta mobile service",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/shelta/screenshots/mobile-blog.webp",
      "alt": "Shelta mobile blog",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/shelta/screenshots/mobile-contact.webp",
      "alt": "Shelta mobile contact",
      "device": "mobile",
      "width": 390,
      "height": 844
    }
  ]
},surfaces:[{id:'site',name:'房产官网',platform:'pc',locales:['zh','en'],pages:[{slug:"",title:"首页",localizedTitles:{en:"Home"},load:()=>import('./pages/HomePage')},
{slug:"project",title:"精选房源",localizedTitles:{en:"Properties"},load:()=>import('./pages/PropertiesPage')},
{slug:"about",title:"关于我们",localizedTitles:{en:"About Us"},load:()=>import('./pages/AboutPage')},
{slug:"service",title:"服务",localizedTitles:{en:"Service"},load:()=>import('./pages/ServicePage')},
{slug:"agent",title:"顾问团队",localizedTitles:{en:"Agents"},load:()=>import('./pages/AgentsPage')},
{slug:"blog",title:"洞察与趋势",localizedTitles:{en:"Insights & Trends"},load:()=>import('./pages/BlogPage')},
{slug:"contact",title:"联系我们",localizedTitles:{en:"Contact Us"},load:()=>import('./pages/ContactPage')},
{slug:"terms-and-conditions",title:"条款与条件",localizedTitles:{en:"Terms & Conditions"},load:()=>import('./pages/TermsPage')},
{slug:"privacy-policy",title:"隐私政策",localizedTitles:{en:"Privacy Policy"},load:()=>import('./pages/PrivacyPage')},
{slug:"utilities/chaneglog",title:"更新日志",localizedTitles:{en:"Changelog"},load:()=>import('./pages/ChangelogPage')},
{slug:"utilities/license",title:"素材许可",localizedTitles:{en:"License"},load:()=>import('./pages/LicensePage')},
{slug:"utilities/styleguide",title:"设计规范",localizedTitles:{en:"Style Guide"},load:()=>import('./pages/StyleGuidePage')},
{slug:"404",title:"页面未找到",localizedTitles:{en:"Not Found"},load:()=>import('./pages/NotFoundPage')},
{slug:"blog/10-questions-to-ask-before-hiring-an-agent",title:"选择房产顾问前要问的十个问题",localizedTitles:{en:"10 Questions to Ask Before Hiring an Agent"},load:()=>import('./pages/Article10QuestionsToAskBeforeHiringAnAgentPage')},
{slug:"blog/2026-real-estate-market-trends",title:"2026 年房地产市场趋势",localizedTitles:{en:"2026 Real Estate Market Trends"},load:()=>import('./pages/Article2026RealEstateMarketTrendsPage')},
{slug:"blog/5-signs-you-ve-found-the-right-neighborhood",title:"找到理想社区的五个信号",localizedTitles:{en:"5 Signs You've Found the Right Neighborhood"},load:()=>import('./pages/Article5SignsYouVeFoundTheRightNeighborhoodPage')},
{slug:"blog/complete-home-buying-guide",title:"完整购房指南",localizedTitles:{en:"Complete Home Buying Guide"},load:()=>import('./pages/ArticleCompleteHomeBuyingGuidePage')},
{slug:"blog/downsizing-here-s-how-to-make-it-feel-like-an-upgrade",title:"换一套小房子 让生活更有品质",localizedTitles:{en:"Downsizing? Here's How to Make It Feel Like an Upgrade"},load:()=>import('./pages/ArticleDownsizingHereSHowToMakeItFeelLikeAnUpgradePage')},
{slug:"blog/how-interest-rates-affect-your-buying-power",title:"利率如何影响你的购买力",localizedTitles:{en:"How Interest Rates Affect Your Buying Power"},load:()=>import('./pages/ArticleHowInterestRatesAffectYourBuyingPowerPage')},
{slug:"blog/how-to-spot-a-great-investment-property",title:"如何发现优质投资房产",localizedTitles:{en:"How to Spot a Great Investment Property"},load:()=>import('./pages/ArticleHowToSpotAGreatInvestmentPropertyPage')},
{slug:"blog/moving-out-of-state-here-s-your-checklist",title:"跨州搬家准备清单",localizedTitles:{en:"Moving Out of State? Here's Your Checklist"},load:()=>import('./pages/ArticleMovingOutOfStateHereSYourChecklistPage')},
{slug:"blog/the-best-time-of-year-to-buy-a-home",title:"一年中何时买房更合适",localizedTitles:{en:"The Best Time of Year to Buy a Home"},load:()=>import('./pages/ArticleTheBestTimeOfYearToBuyAHomePage')},
{slug:"blog/top-5-neighborhoods-to-invest-in-2026",title:"2026 年值得关注的五个社区",localizedTitles:{en:"Top 5 Neighborhoods to Invest in 2026"},load:()=>import('./pages/ArticleTop5NeighborhoodsToInvestIn2026Page')},
{slug:"blog/what-to-fix-before-listing-your-home",title:"挂牌出售前需要修缮什么",localizedTitles:{en:"What to Fix Before Listing Your Home"},load:()=>import('./pages/ArticleWhatToFixBeforeListingYourHomePage')},
{slug:"blog/why-pre-approval-matters-more-than-you-think",title:"为什么贷款预批比想象中重要",localizedTitles:{en:"Why Pre-Approval Matters More Than You Think"},load:()=>import('./pages/ArticleWhyPreApprovalMattersMoreThanYouThinkPage')},
{slug:"project/azure-crest-villas",title:"蔚蓝山脊别墅",localizedTitles:{en:"Azure Crest Villas"},load:()=>import('./pages/PropertyAzureCrestVillasPage')},
{slug:"project/golden-oak-manor",title:"金橡庄园",localizedTitles:{en:"Golden Oak Manor"},load:()=>import('./pages/PropertyGoldenOakManorPage')},
{slug:"project/harbor-light-residences",title:"港湾之光公馆",localizedTitles:{en:"Harbor Light Residences"},load:()=>import('./pages/PropertyHarborLightResidencesPage')},
{slug:"project/harbor-view-residences",title:"海港景观公馆",localizedTitles:{en:"Harbor View Residences"},load:()=>import('./pages/PropertyHarborViewResidencesPage')},
{slug:"project/maple-grove-estates",title:"枫林庄园",localizedTitles:{en:"Maple Grove Estates"},load:()=>import('./pages/PropertyMapleGroveEstatesPage')},
{slug:"project/silver-oak-estates",title:"银橡花园",localizedTitles:{en:"Silver Oak Estates"},load:()=>import('./pages/PropertySilverOakEstatesPage')},
{slug:"project/sterling-heights",title:"斯特林高地",localizedTitles:{en:"Sterling Heights"},load:()=>import('./pages/PropertySterlingHeightsPage')},
{slug:"project/sunset-ridge-villas",title:"落日山脊别墅",localizedTitles:{en:"Sunset Ridge Villas"},load:()=>import('./pages/PropertySunsetRidgeVillasPage')}]}]};