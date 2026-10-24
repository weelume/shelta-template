import reference from './reference.json'
import type {TemplateLocale} from '../../types'
export type Copy={zh:string;en:string}
export const copy=(zh:string,en:string):Copy=>({zh,en})
export const pick=(value:Copy,locale:TemplateLocale)=>value[locale]
export const media=(name:string)=>'/templates/shelta/web-media/'+name.replace(/\.(png|jpe?g)$/,'.webp')
export const ref=reference as Record<string,{text:string[];images:{url:string;alt:string}[]}>
export const imageFor=(key:string,index=0)=>media(ref[key].images.filter(x=>/\.(png|jpe?g)$/.test(x.url))[index].url.split('/').pop()!)
export const nav=[['','首页','Home'],['project','精选房源','Properties'],['about','关于我们','About Us'],['service','服务','Service'],['agent','顾问团队','Agents'],['blog','洞察与趋势','Insights & Trends'],['contact','联系我们','Contact Us']] as const
const propertyNames=['蔚蓝山脊别墅','枫林庄园','斯特林高地','港湾之光公馆','金橡庄园','银橡花园','落日山脊别墅','海港景观公馆']
export const properties=Object.keys(ref).filter(k=>k.startsWith('project__')).map(key=>{
 const texts=ref[key].text,slug=key.replace('project__','').replace('.html','');const order=['azure-crest-villas','maple-grove-estates','sterling-heights','harbor-light-residences','golden-oak-manor','silver-oak-estates','sunset-ridge-villas','harbor-view-residences'].indexOf(slug)
 return{slug,title:copy(propertyNames[order],texts[1]),price:texts.find(x=>x.startsWith('$'))??'',image:media(ref['project.html'].images.filter(x=>x.alt==='Thumbnail Image')[order].url.split('/').pop()!),gallery:ref[key].images.filter(x=>x.alt!=='Logo'&&/\.(png|jpe?g)$/.test(x.url)).map(x=>media(x.url.split('/').pop()!)),order}
}).sort((a,b)=>a.order-b.order)
const articleNames:Record<string,string>={'complete-home-buying-guide':'完整购房指南','2026-real-estate-market-trends':'2026 年房地产市场趋势','how-to-spot-a-great-investment-property':'如何发现优质投资房产','top-5-neighborhoods-to-invest-in-2026':'2026 年值得关注的五个社区','the-best-time-of-year-to-buy-a-home':'一年中何时买房更合适','what-to-fix-before-listing-your-home':'挂牌出售前需要修缮什么','downsizing-here-s-how-to-make-it-feel-like-an-upgrade':'换一套小房子 让生活更有品质','how-interest-rates-affect-your-buying-power':'利率如何影响你的购买力','10-questions-to-ask-before-hiring-an-agent':'选择房产顾问前要问的十个问题','moving-out-of-state-here-s-your-checklist':'跨州搬家准备清单','5-signs-you-ve-found-the-right-neighborhood':'找到理想社区的五个信号','why-pre-approval-matters-more-than-you-think':'为什么贷款预批比想象中重要'}
export const articles=Object.entries(articleNames).map(([slug,zh])=>({slug,title:copy(zh,ref['blog__'+slug+'.html'].text[1]),image:imageFor('blog__'+slug+'.html')}))
export const articleBody=[
 copy('先聊聊真实的购房感受',"Let's Be Real for a Second"),copy('贷款预批、附加条款、交割费用、诚意金——第一次买房时，这些词很容易让人不知所措。其实，只要有人用清楚的语言解释，整个过程就没有那么复杂。',ref['blog__complete-home-buying-guide.html'].text[12]),
 copy('首先要弄清的数字','The Number You Actually Need to Know First'),copy('在爱上漂亮的厨房之前，先认真梳理自己的财务状况。信用记录会直接影响贷款利率。',ref['blog__complete-home-buying-guide.html'].text[14]),copy('预算不只包含挂牌价格，也包括首付、交割、搬家及入住后的维修。先算清数字，再作决定。',ref['blog__complete-home-buying-guide.html'].text[15]),
 copy('先去看看 只需要花一点时间','Why "Just Looking" Costs You Nothing but Time'),copy('很多人等到完全准备好才开始看房。实际走进不同住宅，才能逐渐了解自己真正需要什么。',ref['blog__complete-home-buying-guide.html'].text[17]),copy('你会发现喜欢与不喜欢的细节，也会注意到之前从未考虑过的问题。看房本身是免费的。',ref['blog__complete-home-buying-guide.html'].text[18]),
 copy('贷款预批是重要的通行证','The Pre-Approval Letter Is Your Golden Ticket'),copy('在竞争激烈的市场里，卖方需要看到买家有能力完成付款。',ref['blog__complete-home-buying-guide.html'].text[20]),copy('贷款机构出具预批函，说明已核查你的财务条件。请在第一次出价之前准备好它。',ref['blog__complete-home-buying-guide.html'].text[21]),
 copy('让顾问成为你的队友','Your Agent Should Feel Like a Teammate, Not a Salesperson'),copy('选择愿意倾听、及时回答问题、清楚解释流程的顾问。优秀的顾问会识别风险、协助谈判，并陪你完成交接。',ref['blog__complete-home-buying-guide.html'].text[23]),
 copy('出发之前 再说一句','One Last Thing Before You Go'),copy('收藏这份指南，也可以分享给同样在寻找新家的人。无论是否已经准备好，都可以来聊聊；没有压力，只有坦诚的回答。',ref['blog__complete-home-buying-guide.html'].text[25])]
export const services=[copy('购房','Buy'),copy('售房','Sell'),copy('租房','Rent'),copy('出租','Lease'),copy('拍卖','Auction')].map((title,i)=>({title,body:copy(['寻找适合生活方式与预算的理想住宅。浏览经过核实的房源、比较社区，并获得全程专业指导。','通过市场估值、专业展示与合理定价吸引合适买家，让出售过程清晰有序。','比较真实房源、设施与位置，获得申请和签约指导，找到适合下一段生活的空间。','以专业推广、租客筛选和清晰协议，为房东建立稳定、安心的出租体验。','了解即将开拍的房源、审阅资料并制定竞拍策略，在合理价格范围内从容决策。'][i],ref['service.html'].text[5+i*3]),image:media(['87UAglHmseqhVB1vAqfzx4Zyvg.jpg','CHWlrAD4Jod5NesNVjCTk4WcM.png','GQA9urkciAT4QhCf60cjY4WfEg.png','GJDyeL9lOtv6NXRFTMPqjF39LU.png','RO35HnpnKCLDge38hz7uqv60sM4.png'][i])}))
export const steps=[copy('了解需求','Discover'),copy('寻找与探索','Search & Explore'),copy('报价与协商','Negotiate & Offer'),copy('审核与交割','Close & Review'),copy('交钥匙与入住','Launch & Move In')]
export const stepBodies=[copy('认真倾听你的需求、预算和期待，从一次深入的交流开始。',"We take time to understand your needs, budget, and dreams. Whether you're buying, selling, or renting, we start with a deep conversation."),copy('精选符合条件的房源，并为卖方制定适合的展示与营销计划。','We handpick properties that match your unique criteria — and for sellers, we craft a tailored marketing plan to showcase your home to the right buyers.'),copy('结合市场洞察与谈判经验，协助报价、评估条件，保护你的利益。','With market insight and sharp negotiation skills, we help you make competitive offers or evaluate incoming bids — always protecting your best interests.'),copy('逐项梳理文件、法律要求及交割前检查，让签约前的疑问得到解答。',"We guide you through paperwork, legal requirements, and final walkthroughs — leaving no question unanswered before you sign."),copy('完成钥匙交接、搬家准备和后续支持，让服务延续到入住之后。',"We hand you the keys — and our support doesn't end there. Long after closing, we're here for referrals, future moves, or just to say hello.")]
export const faqs=[
 [copy('如何在平台上发布房源？','How do I list my property on the platform?'),copy('联系顾问并提供房源详情和照片，经核实后再安排展示。本演示站不会提交或保存资料。','Contact an agent with your property details and photos for verification. This demo does not submit or save information.')],
 [copy('房源信息经过核实吗？','Are the property listings verified?'),copy('真实业务中的房源应经团队核查；当前页面展示的是示例资料。','Listings should be reviewed by the team. Properties displayed on this website are demonstration content.')],
 [copy('浏览房源需要付费吗？','Do I need to pay to browse properties?'),copy('浏览房源无需付费，具体服务费用可向顾问咨询。','Browsing properties is free. Contact an agent to discuss any service fees.')],
 [copy('可以直接联系顾问或业主吗？','Can I contact agents or owners directly?'),copy('可以通过联系页了解咨询方式。本地演示表单不会发送消息。','Use the contact page to find consultation details. The local demo form does not send messages.')],
 [copy('这里有哪些类型的房产？','What types of properties can I find here?'),copy('可浏览别墅、公寓、庄园与住宅示例，了解不同空间的特点。','Explore villas, apartments, estates and residential property examples.')]
]
export const agentNames=['Micheal Thompson','Sarah Mitchell','Olivia Williams','Jessica Reynolds','Amanda Carter','James Anderson']
export const agentImages=['CiWJem5elr1JAmCNwdQZVSQ2ZKo.png','CjAG7E6FK1OANYt87S4AiMZg8Tc.png','8hCSdhq4UxITHdORocxc2pwpwW4.png','d8o3aJHcyjnYytTIxYrUyTSsCRs.png','DLjcioqHYYbDHoz3KtVknk3Ic8.png','1h1RiwOA2PvAtcwA963jYfVWRbM.png']
