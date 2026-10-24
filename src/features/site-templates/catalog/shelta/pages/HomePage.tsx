import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Hero} from '../components/Hero'
import {Showreel} from '../components/Showreel'
import {Partners} from '../components/Partners'
import {Agents,BlogGrid,CTA,FAQ,Heading,Intro,PropertyGrid,Services,Testimonials,Work} from '../components/Sections'
export default function HomePage(props:SiteTemplatePageProps){const{locale='zh'}=props;return <Shell {...props} home><Hero {...props}/><Intro {...props}/><Partners/><section className="sh-container sh-section"><Heading title={locale==='zh'?'为生活精选的住宅':'Properties For Living'} eyebrow={locale==='zh'?'（精选房源）':'(Curated)'} body={locale==='zh'?'优质空间与专业洞察，为购房、售房和投资提供更清晰的方向。':'Stay informed with the latest property market updates, expert analyses, and emerging trends.'}/><PropertyGrid {...props}/></section><Work {...props}/><Services {...props}/><Showreel locale={locale}/><Agents {...props} limit={3}/><Testimonials {...props}/><FAQ {...props}/><section className="sh-container sh-section"><Heading title={locale==='zh'?'洞察与趋势':'Insights & Trends'} body={locale==='zh'?'了解市场变化、实用建议与新兴趋势，让每一个决定更有依据。':'Stay informed with the latest property market updates, expert analyses, and emerging trends.'}/><BlogGrid {...props} limit={3}/></section><CTA {...props}/></Shell>}
