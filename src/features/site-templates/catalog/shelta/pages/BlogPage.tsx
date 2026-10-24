import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {BlogGrid,Heading} from '../components/Sections'
export default function Page(props:SiteTemplatePageProps){return <Shell {...props}><section className="sh-container sh-page-top"><Heading title={props.locale==='en'?'Insights & Trends':'洞察与趋势'} body={props.locale==='en'?'Stay informed with the latest property market updates, expert analyses, and emerging trends — so you’re always ahead, whether you’re buying, selling, or investing.':'关注市场动态、专业分析与生活建议 为下一步决定做好准备'}/><BlogGrid {...props}/></section></Shell>}
