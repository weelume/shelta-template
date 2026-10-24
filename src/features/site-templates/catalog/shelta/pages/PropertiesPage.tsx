import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {CTA,Heading,PropertyGrid} from '../components/Sections'
export default function Page(props:SiteTemplatePageProps){return <Shell {...props}><section className="sh-container sh-page-top"><Heading title={props.locale==='en'?'Properties For Living':'为生活精选的住宅'} body={props.locale==='en'?'Explore distinctive homes, carefully selected for the life you imagine.':'寻找兼具设计、空间与生活温度的住宅 让理想有处安放'}/><PropertyGrid {...props}/></section><CTA {...props}/></Shell>}
